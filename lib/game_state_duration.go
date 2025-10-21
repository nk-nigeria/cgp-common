package lib

import (
	"time"

	"github.com/nk-nigeria/cgp-common/define"
	pb "github.com/nk-nigeria/cgp-common/proto"
)

type GameStateDuration map[pb.GameState]time.Duration

func (g GameStateDuration) ToPb() map[int32]int32 {
	m := make(map[int32]int32)
	for k, v := range g {
		m[int32(k)] = int32(v.Seconds())
	}
	return m
}

func GetGameStateDurationByGameCode(gameCode define.GameName) GameStateDuration {

	switch gameCode {
	case define.SicboName:
		var (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 5
			playTimeout      = time.Second * 15
			matchingTimeout  = time.Second * 1
			rewardTimeout    = time.Second * 10
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.BaccaratName:
		var (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 5
			matchingTimeout  = time.Second * 1
			playTimeout      = time.Second * 10
			rewardTimeout    = time.Second * 12
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.GapleDomino:
		var (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 5
			playTimeout      = time.Second * 15
			matchingTimeout  = time.Second * 4
			rewardTimeout    = time.Second * 10
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.BandarqqName:
		const (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 5
			matchingTimeout  = time.Second * 1
			playTimeout      = time.Second * 15
			rewardTimeout    = time.Second * 10
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.DragontigerName:
		const (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 5
			matchingTimeout  = time.Second * 1
			playTimeout      = time.Second * 15
			rewardTimeout    = time.Second * 10
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.BlackjackName:
		const (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 12
			playTimeout      = time.Second * 12
			matchingTimeout  = time.Second * 1
			rewardTimeout    = time.Second * 10
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.ChinesePoker:
		const (
			idleTimeout      = time.Second * 15
			preparingTimeout = time.Second * 10
			playTimeout      = time.Second * 40
			matchingTimeout  = time.Second * 1
			rewardTimeout    = time.Second * 30
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	case define.HKPoker:
		const (
			idleTimeout      = time.Second * 30
			preparingTimeout = time.Second * 5
			playTimeout      = time.Second * 10 // 10s per player action
			matchingTimeout  = time.Second * 10
			rewardTimeout    = time.Second * 15 // 15s for showdown
		)
		return NewGameStateDuration(idleTimeout, preparingTimeout, matchingTimeout, playTimeout, rewardTimeout)
	}
	return nil
}

func NewGameStateDuration(idle, prepare, matching, play, reward time.Duration) GameStateDuration {
	m := make(GameStateDuration)
	m[pb.GameState_GAME_STATE_IDLE] = idle
	m[pb.GameState_GAME_STATE_PREPARING] = prepare
	m[pb.GameState_GAME_STATE_MATCHING] = matching
	m[pb.GameState_GAME_STATE_PLAY] = play
	m[pb.GameState_GAME_STATE_REWARD] = reward
	return m
}
