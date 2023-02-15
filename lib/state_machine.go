package lib

import (
	"context"

	"github.com/qmuntal/stateless"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
)

const (
	stateInit      = pb.GameState_GameStateUnknown // Only for initialize
	stateIdle      = pb.GameState_GameStateIdle
	stateMatching  = pb.GameState_GameStateMatching
	statePreparing = pb.GameState_GameStatePreparing
	statePlay      = pb.GameState_GameStatePlay
	stateReward    = pb.GameState_GameStateReward
	stateFinish    = pb.GameState_GameStateFinish
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

func NewGameStateMachine() UseCase {
	gs := &Machine{
		state: stateless.NewStateMachine(stateInit),
	}
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
	case stateIdle:
		return pb.GameState_GameStateIdle
	case stateMatching:
		return pb.GameState_GameStateMatching
	case statePreparing:
		return pb.GameState_GameStatePreparing
	case statePlay:
		return pb.GameState_GameStatePlay
	case stateReward:
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
