package define

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetMaxSizeByGame(t *testing.T) {
	name := "TestGetMaxSizeByGame"
	t.Run(name, func(t *testing.T) {
		size := GetMaxSizeByGame(GameName("gaple"))
		assert.Less(t, 1, size)
	})
}
