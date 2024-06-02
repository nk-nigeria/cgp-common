package lib

import (
	"context"
	"math"
	"time"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"

	"github.com/emirpasic/gods/maps/linkedhashmap"
	"github.com/heroiclabs/nakama-common/runtime"
)

// type MatchLabel struct {
// 	Open     int32  `json:"open,omitempty"`
// 	Bet      int32  `json:"bet,omitempty"`
// 	Code     string `json:"code,omitempty"`
// 	Name     string `json:"name,omitempty"`
// 	Password string `json:"password,omitempty"`
// 	MaxSize  int32  `json:"max_size,omitempty"`
// 	TableId  int64  `json:"table_id,omitempty"`
// }

type NewPrecenseFn func(ctx context.Context, nk runtime.NakamaModule, precense runtime.Presence) runtime.Presence

var defaultNewPrecenseFn = func(ctx context.Context, nk runtime.NakamaModule, precense runtime.Presence) runtime.Presence {
	return precense
}

type MatchState struct {
	NewPrecenseFn      NewPrecenseFn
	Label              *pb.Match
	CountDownReachTime time.Time
	LastCountDown      int
	JoinsInProgress    int
	// Currently connected users, or reserved spaces.
	Presences        *linkedhashmap.Map
	PlayingPresences *linkedhashmap.Map
	LeavePresences   *linkedhashmap.Map
	// Number of users currently in the process of connecting to the match.
	PresencesNoInteract map[string]int
}

func NewMathState(label *pb.Match, fn NewPrecenseFn) MatchState {
	m := MatchState{
		Label:               label,
		Presences:           linkedhashmap.New(),
		PlayingPresences:    linkedhashmap.New(),
		LeavePresences:      linkedhashmap.New(),
		PresencesNoInteract: make(map[string]int, 0),
	}
	if fn != nil {
		m.NewPrecenseFn = fn
	} else {
		m.NewPrecenseFn = defaultNewPrecenseFn
	}
	return m
}

func (s *MatchState) SetUpCountDown(duration time.Duration) {
	s.CountDownReachTime = time.Now().Add(duration)
	s.LastCountDown = -1
}

func (s *MatchState) GetPresenceSize() int {
	return s.Presences.Size()
}

func (s *MatchState) GetPresence(userID string) runtime.Presence {
	_, value := s.Presences.Find(func(key, value interface{}) bool {
		if key == userID {
			return true
		}
		return false
	})
	if value == nil {
		return nil
	}
	return value.(runtime.Presence)
}

func (s *MatchState) GetPresences() []runtime.Presence {
	presences := make([]runtime.Presence, 0)
	s.Presences.Each(func(key interface{}, value interface{}) {
		presences = append(presences, value.(runtime.Presence))
	})
	return presences
}

func (s *MatchState) GetRemainCountDown() float64 {
	currentTime := time.Now()
	difference := s.CountDownReachTime.Sub(currentTime)
	return difference.Seconds()
}

func (s *MatchState) IsReadyToPlay() bool {
	return s.Presences.Size() > 0
}

func (s *MatchState) SetupMatchPresence() {
	s.PlayingPresences = linkedhashmap.New()
	presences := make([]runtime.Presence, 0, s.Presences.Size())
	s.Presences.Each(func(key interface{}, value interface{}) {
		presences = append(presences, value.(runtime.Presence))
	})
	s.AddPlayingPresences(presences...)
}

func (s *MatchState) AddPlayingPresences(presences ...runtime.Presence) {
	for _, p := range presences {
		s.PlayingPresences.Put(p.GetUserId(), p)
		keyStr := p.GetUserId()
		if val, exist := s.PresencesNoInteract[keyStr]; exist {
			s.PresencesNoInteract[keyStr] = val + 1
		} else {
			s.PresencesNoInteract[keyStr] = 1
		}
	}
}

func (s *MatchState) ApplyLeavePresence() {
	s.LeavePresences.Each(func(key interface{}, value interface{}) {
		s.Presences.Remove(key)
		delete(s.PresencesNoInteract, key.(string))
	})
	s.LeavePresences = linkedhashmap.New()
}

func (s *MatchState) RemovePresence(presences ...runtime.Presence) {
	for _, presence := range presences {
		s.Presences.Remove(presence.GetUserId())
		delete(s.PresencesNoInteract, presence.GetUserId())
	}
}
func (s *MatchState) GetPresenceNotInteract(roundGame int) []runtime.Presence {
	listPresence := make([]runtime.Presence, 0)
	s.Presences.Each(func(key interface{}, value interface{}) {
		if roundGameNotInteract, exist := s.PresencesNoInteract[key.(string)]; exist && roundGameNotInteract >= roundGame {
			listPresence = append(listPresence, value.(runtime.Presence))
		}
	})
	return listPresence
}

func (s *MatchState) AddLeavePresence(presences ...runtime.Presence) {
	for _, presence := range presences {
		s.LeavePresences.Put(presence.GetUserId(), presence)
	}
}

func (s *MatchState) GetPlayingPresences() []runtime.Presence {
	presences := make([]runtime.Presence, 0)
	s.PlayingPresences.Each(func(key interface{}, value interface{}) {
		presences = append(presences, value.(runtime.Presence))
	})

	return presences
}

func (s *MatchState) SetLastCountDown(countDown int) {
	s.LastCountDown = countDown
}

func (s *MatchState) IsNeedNotifyCountDown() bool {
	remainCountDown := int(math.Round(s.GetRemainCountDown()))
	return remainCountDown != s.LastCountDown || s.LastCountDown == -1
}

func (s *MatchState) RemoveLeavePresence(userId string) {
	s.LeavePresences.Remove(userId)
}

func (s *MatchState) GetLeavePresences() []runtime.Presence {
	presences := make([]runtime.Presence, 0)
	s.LeavePresences.Each(func(key interface{}, value interface{}) {
		presences = append(presences, value.(runtime.Presence))
	})

	return presences
}

func (s *MatchState) ResetUserNotInteract(userId string) {
	s.PresencesNoInteract[userId] = 0
}
func (s *MatchState) AddPresence(ctx context.Context,
	nk runtime.NakamaModule,
	presences []runtime.Presence,
) {
	for _, presence := range presences {
		m := s.NewPrecenseFn(ctx, nk, presence)
		s.Presences.Put(presence.GetUserId(), m)
		s.ResetUserNotInteract(presence.GetUserId())
	}
}

type CountDown struct {
	cd         time.Time
	checkPoint int
	timeout    bool
}

func (c *CountDown) Setup(d time.Duration) {
	c.cd = time.Now().Add(d)
	c.checkPoint = 1
	c.timeout = false
}

func (c *CountDown) Remain() float64 {
	remain := time.Until(c.cd).Seconds()
	if remain < 0 {
		c.timeout = true
	}
	return remain
}

func (c *CountDown) IsCheckPointChange() bool {
	return c.checkPoint == -1 || c.checkPoint != int(c.Remain())
}

func (c *CountDown) SetCheckPoint(checkpoint int) {
	c.checkPoint = checkpoint
}

func (c *CountDown) Timeout() bool {
	if c.timeout {
		return true
	}
	c.Remain() // update timeout
	return c.timeout
}

type TickCountDown struct {
	tick       int
	tickRate   int
	checkPoint int
}

func (tc *TickCountDown) Setup(duration time.Duration, tickRate int) {
	tc.tick = int(duration.Seconds()) * tickRate
	tc.tickRate = tickRate
	tc.checkPoint = tc.tick
}

func (tc *TickCountDown) Loop() {
	if tc.tick == 0 {
		return
	}
	tc.tick--
	if tc.tick < 0 {
		tc.tick = 0
	}
}

func (tc *TickCountDown) IsSecChanged() bool {
	diff := tc.checkPoint - tc.tick
	return diff%tc.tickRate > 0
}

func (tc *TickCountDown) GetSecRemain() int {
	diff := tc.checkPoint - tc.tick
	sec := diff / tc.tickRate
	return sec
}

func (tc *TickCountDown) ResetCheckPoint() {
	diff := tc.checkPoint - tc.tick
	offset := diff - (diff/tc.tickRate)*tc.tickRate
	tc.checkPoint = tc.tick + offset
}

func (tc *TickCountDown) Timeout() bool {
	return tc.tick <= 0
}
