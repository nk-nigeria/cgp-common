package bot

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewBotTurn(t *testing.T) {
	name := "TestNewBotTurn"
	maxTick := 10
	maxOccur := 3
	var opaque interface{}
	numOccur := 0
	fnTurn := func(opaque interface{}) {
		numOccur++
	}
	t.Run(name, func(t *testing.T) {
		botTurn := NewBotTurn(maxTick, maxOccur, opaque, fnTurn)
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
