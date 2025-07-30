package lib

import (
	"context"

	"github.com/heroiclabs/nakama-common/runtime"
	"github.com/qmuntal/stateless"

	pb "github.com/nk-nigeria/cgp-common/proto"
)

const (
	StateInit      = pb.GameState_GAME_STATE_UNKNOWN // Only for initialize
	StateIdle      = pb.GameState_GAME_STATE_IDLE
	StateMatching  = pb.GameState_GAME_STATE_MATCHING
	StatePreparing = pb.GameState_GAME_STATE_PREPARING
	StatePlay      = pb.GameState_GAME_STATE_PLAY
	StateReward    = pb.GameState_GAME_STATE_REWARD
	StateFinish    = pb.GameState_GAME_STATE_FINISH
)

const (
	TriggerInit               = "TriggerInit"
	TriggerStateFinishSuccess = "TriggerStateFinishSuccess"
	TriggerStateFinishFailed  = "TriggerStateFinishFailed"
	TriggerExit               = "TriggerExit"
)

var (
	ErrStateMachineFinish = runtime.NewError("state machine finish", -1)
)

// Trigger InternalTransition
const (
	triggerProcess = "triggerProcess"
)

type StateHandler interface {
	Trigger(ctx context.Context, trigger stateless.Trigger, args ...interface{}) error
	Process(ctx context.Context, args ...interface{}) error

	Enter(ctx context.Context, _ ...interface{}) error
	Exit(_ context.Context, _ ...interface{}) error
}

type FireFn func(ctx context.Context, trigger stateless.Trigger, args ...interface{}) error

func NewGameStateMachine(stateMachineState StateMachineState) UseCase {
	gs := &Machine{
		state: stateless.NewStateMachine(StateInit),
	}
	configure(gs, stateMachineState)
	return gs
}

type StateBase struct {
	fireFn FireFn
}

func NewStateBase(fn FireFn) StateBase {
	return StateBase{
		fireFn: fn,
	}
}

func (s *StateBase) Trigger(ctx context.Context, trigger stateless.Trigger, args ...interface{}) error {
	return s.fireFn(ctx, trigger, args...)
}

func (s *StateBase) Enter(ctx context.Context, _ ...interface{}) error {
	return nil
}

func (s *StateBase) Exit(_ context.Context, _ ...interface{}) error {
	return nil
}

func (s *StateBase) Process(ctx context.Context, args ...interface{}) error {
	return nil
}

var _ UseCase = &Machine{}

type Machine struct {
	state *stateless.StateMachine
}

func (m *Machine) GetPbState() pb.GameState {
	switch m.state.MustState() {
	case StateIdle:
		return pb.GameState_GAME_STATE_IDLE
	case StateMatching:
		return pb.GameState_GAME_STATE_MATCHING
	case StatePreparing:
		return pb.GameState_GAME_STATE_PREPARING
	case StatePlay:
		return pb.GameState_GAME_STATE_PLAY
	case StateReward:
		return pb.GameState_GAME_STATE_REWARD
	default:
		return pb.GameState_GAME_STATE_UNKNOWN
	}
}

func (m *Machine) FireProcessEvent(ctx context.Context, args ...interface{}) error {
	return m.state.FireCtx(ctx, triggerProcess, args...)
}

func (m *Machine) MustState() stateless.State {
	return m.state.MustState()
}

func (m *Machine) Trigger(ctx context.Context, trigger stateless.Trigger, args ...interface{}) error {
	return m.state.FireCtx(ctx, trigger, args...)
}

func (m *Machine) TriggerIdle(ctx context.Context, args ...interface{}) error {
	return m.state.FireCtx(ctx, TriggerInit, args...)
}

func (m *Machine) IsPlayingState() bool {
	return m.GetPbState() == pb.GameState_GAME_STATE_PLAY
}

func (m *Machine) IsReward() bool {
	return m.GetPbState() == pb.GameState_GAME_STATE_REWARD
}

func configure(m *Machine, stateMachineState StateMachineState) {
	m.state.Configure(StateInit).
		Permit(TriggerInit, StateIdle)
	fireCtx := m.state.FireCtx
	m.state.OnTransitioning(func(ctx context.Context, t stateless.Transition) {
		procPkg := GetProcessorPackagerFromContext(ctx)
		// state := procPkg.GetMatchState()
		// state.SetAllowBet(false)
		logger := procPkg.GetLogger()
		logger.WithField("source", t.Source).WithField("destination", t.Destination).WithField("transition", t.Trigger).Info("OnTransitioning")
		stateMachineState.OnTransitioning(ctx, t)
	})
	// idle state: wait for first user
	// init data of match if empty
	// => timeout trigger and no user join -> close match
	{
		idle := stateMachineState.NewIdleState(fireCtx)
		m.state.Configure(StateIdle).
			OnEntry(idle.Enter).
			OnExit(idle.Exit).
			InternalTransition(triggerProcess, idle.Process).
			Permit(TriggerStateFinishSuccess, StateMatching).
			Permit(TriggerStateFinishFailed, StateFinish).
			Permit(TriggerExit, StateFinish)
	}
	{
		state := defaultFinishHandler
		m.state.Configure(StateFinish).
			OnEntry(state.Enter).
			OnExit(state.Exit).
			InternalTransition(triggerProcess, state.Process)
	}

	//matching state: wait for reach min user
	// => switch to preparing, check no one and timeout
	// => switch to idle
	{
		matching := stateMachineState.NewStateMatching(fireCtx)
		m.state.Configure(StateMatching).
			OnEntry(matching.Enter).
			OnExit(matching.Exit).
			InternalTransition(triggerProcess, matching.Process).
			Permit(TriggerStateFinishSuccess, StatePreparing).
			Permit(TriggerStateFinishFailed, StateIdle).
			Permit(TriggerInit, StateIdle)
	}
	// preparing state: init point of three dice
	{
		preparing := stateMachineState.NewStatePreparing(fireCtx)
		m.state.Configure(StatePreparing).
			OnEntry(preparing.Enter).
			OnExit(preparing.Exit).
			InternalTransition(triggerProcess, preparing.Process).
			Permit(TriggerStateFinishSuccess, StatePlay).
			Permit(TriggerStateFinishFailed, StateMatching)
	}
	// state allow user bet
	//
	{
		play := stateMachineState.NewStatePlay(fireCtx)
		m.state.Configure(StatePlay).
			OnEntry(play.Enter).
			OnExit(play.Exit).
			InternalTransition(triggerProcess, play.Process).
			Permit(TriggerStateFinishSuccess, StateReward).
			Permit(TriggerStateFinishFailed, StateReward)
	}
	// result of game
	// timout ==> matching
	{
		reward := stateMachineState.NewStateReward(fireCtx)
		m.state.Configure(StateReward).
			OnEntry(reward.Enter).
			OnExit(reward.Exit).
			InternalTransition(triggerProcess, reward.Process).
			Permit(TriggerStateFinishSuccess, StateMatching).
			Permit(TriggerStateFinishFailed, StatePreparing)
	}
	m.state.ToGraph()
}

/* Private */
var defaultFinishHandler StateHandler = &finishHandler{}

type finishHandler struct{}

// Enter implements StateHandler
func (*finishHandler) Enter(ctx context.Context, _ ...interface{}) error {
	return nil
}

// Exit implements StateHandler
func (*finishHandler) Exit(_ context.Context, _ ...interface{}) error {
	return ErrStateMachineFinish
}

// Process implements StateHandler
func (*finishHandler) Process(ctx context.Context, args ...interface{}) error {
	return ErrStateMachineFinish
}

// Trigger implements StateHandler
func (*finishHandler) Trigger(ctx context.Context, trigger interface{}, args ...interface{}) error {
	return nil
}
