package bot

import "sort"

type BotTurn struct {
	maxTick int
	ticks   []int
	fnTurn  func()
}

func NewBotTurn(minTick, maxTick int, maxOccur int, fnTurn func()) *BotTurn {
	b := &BotTurn{
		maxTick: maxTick,
		fnTurn:  fnTurn,
	}
	if maxOccur <= 0 {
		maxOccur = 1
	}
	if minTick >= maxTick {
		minTick = maxTick - 1
	}
	numOccur := RandomInt(1, maxOccur+1)

outer:
	for i := 0; i < numOccur*3; i++ {
		tick := RandomInt(minTick, maxTick)
		for _, v := range b.ticks {
			if v == tick {
				continue outer
			}
		}
		b.ticks = append(b.ticks, tick)
		if len(b.ticks) == numOccur {
			break
		}
	}
	sort.Slice(b.ticks, func(i, j int) bool {
		a := b.ticks[i]
		b := b.ticks[j]
		return a < b
	})
	return b
}

func (b *BotTurn) Loop() bool {
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
