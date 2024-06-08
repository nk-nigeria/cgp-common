package lib

import (
	"time"

	"github.com/ciaolink-game-platform/cgp-common/define"
	pb "github.com/ciaolink-game-platform/cgp-common/proto"
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
			rewardTimeout    = time.Second * 10
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

	}
	return nil
}

func NewGameStateDuration(idle, prepare, matching, play, reward time.Duration) GameStateDuration {
	m := make(GameStateDuration)
	m[pb.GameState_GameStateIdle] = idle
	m[pb.GameState_GameStateIdle] = prepare
	m[pb.GameState_GameStateIdle] = matching
	m[pb.GameState_GameStateIdle] = play
	m[pb.GameState_GameStateIdle] = reward
	return m
}
