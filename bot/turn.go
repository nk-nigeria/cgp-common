package bot

import "sort"

type botTurn struct {
	maxTick int
	ticks   []int
	fnTurn  func()
}

func NewBotTurn(maxTick int, maxOccur int, fnTurn func()) *botTurn {
	b := &botTurn{
		maxTick: maxTick,
		fnTurn:  fnTurn,
	}
	numOccur := RandomInt(0, maxOccur)
	for i := 0; i < numOccur; i++ {
		b.ticks = append(b.ticks, RandomInt(1, maxTick))
	}
	sort.Slice(b.ticks, func(i, j int) bool {
		a := b.ticks[i]
		b := b.ticks[j]
		return a < b
	})
	return b
}

func (b *botTurn) Loop() bool {
	if len(b.ticks) == 0 {
		return false
	}
	isAllFinish := false
	for idx, tick := range b.ticks {
		if tick < 0 {
			continue
		}
		isAllFinish = true
		if tick >= 0 {
			tick--
		}
		b.ticks[idx] = tick
		if tick == 0 {
			if b != nil {
				b.fnTurn()
			}
		}
	}
	return isAllFinish
}
