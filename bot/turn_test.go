package bot

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewBotTurn(t *testing.T) {
	name := "TestNewBotTurn"
	maxTick := 10
	minTick := 4
	maxOccur := 3

	for i := 0; i < 10000; i++ {
		t.Run(name, func(t *testing.T) {
			numOccur := 0
			fnTurn := func() {
				numOccur++
			}
			botTurn := NewBotTurn(minTick, maxTick, maxOccur, fnTurn)
			assert.NotNil(t, botTurn)
			assert.LessOrEqual(t, 1, len(botTurn.ticks))
			for {
				if !botTurn.Loop() {
					break
				}
			}
			assert.Less(t, 0, numOccur)
			assert.LessOrEqual(t, numOccur, maxOccur)
		})
	}
}
