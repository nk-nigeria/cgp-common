package lib

import "time"

type FnNextIndex func(currentIdx int, val string, numOccur int, userData interface{}) int

var FnDefaultNextTurnIndex FnNextIndex = func(currentIdx int, val string, numOccur int, userData interface{}) int {
	return currentIdx + 1
}

type turnBaseEngine struct {
	listPlayers         []string
	sizePlayers         int
	timePerTurn         time.Duration
	countDownReachTime  time.Time
	idxCurrentTurn      int
	idxPrevTurn         int
	isNewTurn           bool
	isInit              bool
	fnNexIndex          FnNextIndex
	numOccurTurnSequent int
	userData            interface{}
}

func NewTurnBaseEngine() *turnBaseEngine {
	engine := turnBaseEngine{}
	// set default callback next turn index
	engine.RegisterNextTurnIndexFn(FnDefaultNextTurnIndex, nil)
	return &engine
}

func (t *turnBaseEngine) Config(listPlayers []string, timePerTurn time.Duration) {
	t.listPlayers = listPlayers
	t.timePerTurn = timePerTurn
	t.sizePlayers = len(t.listPlayers)
	t.countDownReachTime = time.Now().Add(timePerTurn)
	t.idxCurrentTurn = -1
	t.idxPrevTurn = -1
	t.isInit = true
	t.numOccurTurnSequent = 0
}

// loop and trigger new turn if timeout
// return user in turn
func (t *turnBaseEngine) Loop() string {
	if !t.isInit {
		return ""
	}
	t.isNewTurn = false
	if t.idxCurrentTurn < 0 {
		return t.NextTurn()
	}
	diff := t.GetRemainCountDown()
	if diff < 0 {
		t.NextTurn()
	}
	return t.listPlayers[t.idxCurrentTurn]
}

func (t *turnBaseEngine) IsNewTurn() bool {
	return t.isNewTurn
}

// force next turn
func (t *turnBaseEngine) NextTurn() string {
	t.countDownReachTime = time.Now().Add(t.timePerTurn)

	nextIdx := 0
	if t.idxCurrentTurn >= 0 {
		currentVal := t.listPlayers[t.idxCurrentTurn]
		nextIdx = t.fnNexIndex(
			t.idxCurrentTurn,
			currentVal,
			t.numOccurTurnSequent,
			t.userData,
		)
	}
	t.idxPrevTurn = t.idxCurrentTurn
	t.idxCurrentTurn = (nextIdx) % t.sizePlayers
	t.isNewTurn = true
	if t.idxPrevTurn <= 0 && t.idxPrevTurn != t.idxCurrentTurn {
		t.numOccurTurnSequent = 0
	} else {
		t.numOccurTurnSequent++
	}
	return t.listPlayers[t.idxCurrentTurn]
}

func (t *turnBaseEngine) GetRemainCountDown() int {
	currentTime := time.Now()
	difference := t.countDownReachTime.Sub(currentTime)
	return int(difference.Seconds())
}

// Get num occur turn index sequent
func (t *turnBaseEngine) GetOccurTurnSequentInfo() (int, int) {
	return t.idxCurrentTurn, t.numOccurTurnSequent
}

// override default next turn logic
func (t *turnBaseEngine) RegisterNextTurnIndexFn(fn FnNextIndex, userData interface{}) {
	if fn != nil {
		t.fnNexIndex = fn
		t.userData = userData
	}
}
