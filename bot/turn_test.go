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
	numOccur := 0
	fnTurn := func() {
		numOccur++
	}
	t.Run(name, func(t *testing.T) {
		botTurn := NewBotTurn(minTick, maxTick, maxOccur, fnTurn)
		assert.NotNil(t, botTurn)
		for {
			if !botTurn.Loop() {
				break
			}
		}
		assert.Less(t, 0, numOccur)
		assert.LessOrEqual(t, numOccur, maxOccur)
	})
}
