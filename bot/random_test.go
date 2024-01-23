package bot

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRandomInt(t *testing.T) {
	name := "TestRandomInt"
	mapNum := make(map[int]int)
	t.Run(name, func(t *testing.T) {
		for i := 0; i < 10000000; i++ {
			v := RandomInt(0, 5)
			x := mapNum[v]
			x++
			mapNum[v] = x
		}
	})
	for k, v := range mapNum {
		t.Logf("%d : %d\n", k, v)
	}
	assert.NotNil(t, nil)
}
