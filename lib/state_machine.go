package lib

import (
	"context"

	"github.com/qmuntal/stateless"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
)

const (
	StateInit      = pb.GameState_GameStateUnknown // Only for initialize
	StateIdle      = pb.GameState_GameStateIdle
	StateMatching  = pb.GameState_GameStateMatching
	StatePreparing = pb.GameState_GameStatePreparing
	StatePlay      = pb.GameState_GameStatePlay
	StateReward    = pb.GameState_GameStateReward
	StateFinish    = pb.GameState_GameStateFinish
)

const (
	triggerIdle            = "GameIdle"
	triggerMatching        = "GameMatching"
	triggerPresenceReady   = "GamePresenceReady"
	triggerPreparingDone   = "GamePreparingDone"
	triggerPreparingFailed = "GamePreparingFailed"
	triggerPlayTimeout     = "GamePlayTimeout"
	triggerPlayCombineAll  = "GamePlayCombineAll"
	triggerRewardTimeout   = "GameRewardTimeout"
	triggerNoOne           = "GameNoOne"

	triggerProcess = "GameProcess"
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
		return pb.GameState_GameStateIdle
	case StateMatching:
		return pb.GameState_GameStateMatching
	case StatePreparing:
		return pb.GameState_GameStatePreparing
	case StatePlay:
		return pb.GameState_GameStatePlay
	case StateReward:
		return pb.GameState_GameStateReward
	default:
		return pb.GameState_GameStateUnknown
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
	return m.state.FireCtx(ctx, triggerIdle, args...)
}

func (m *Machine) IsPlayingState() bool {
	return m.GetPbState() == pb.GameState_GameStatePlay
}

func (m *Machine) IsReward() bool {
	return m.GetPbState() == pb.GameState_GameStateReward
}

func configure(m *Machine, stateMachineState StateMachineState) {
	m.state.Configure(StateInit).
		Permit(triggerIdle, StateIdle)
	fireCtx := m.state.FireCtx
	m.state.OnTransitioning(func(ctx context.Context, t stateless.Transition) {
		// procPkg := GetProcessorPackagerFromContext(ctx)
		// state := procPkg.GetMatchState()
		// state.SetAllowBet(false)
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
			Permit(triggerMatching, StateMatching).
			Permit(triggerNoOne, StateFinish)
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
			Permit(triggerPresenceReady, StatePreparing).
			Permit(triggerIdle, StateIdle)
	}
	// preparing state: init point of three dice
	{
		preparing := stateMachineState.NewStatePreparing(fireCtx)
		m.state.Configure(StatePreparing).
			OnEntry(preparing.Enter).
			OnExit(preparing.Exit).
			InternalTransition(triggerProcess, preparing.Process).
			Permit(triggerPreparingDone, StatePlay).
			Permit(triggerPreparingFailed, StateMatching)
	}
	// state allow user bet
	//
	{
		play := stateMachineState.NewStatePlay(fireCtx)
		m.state.Configure(StatePlay).
			OnEntry(play.Enter).
			OnExit(play.Exit).
			InternalTransition(triggerProcess, play.Process).
			Permit(triggerPlayTimeout, StateReward).
			Permit(triggerPlayCombineAll, StateReward)
	}
	// result of game
	// timout ==> matching
	{
		reward := stateMachineState.NewStateReward(fireCtx)
		m.state.Configure(StateReward).
			OnEntry(reward.Enter).
			OnExit(reward.Exit).
			InternalTransition(triggerProcess, reward.Process).
			Permit(triggerRewardTimeout, StateMatching)
	}
	m.state.ToGraph()
}
