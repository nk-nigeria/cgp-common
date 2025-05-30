package lib

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRtps_Parse(t *testing.T) {
	dataJson := `[[0,200],[1,90],[2,92],[3,94],[4,96],[5,98],[6,100],[7,102],[8,104],[9,106],[10,108],[11,110],[12,60],[13,120]]`
	rtps := make(Rtps, 0)
	rtps, err := rtps.Parse(dataJson)
	assert.NoError(t, err)
	t.Logf("%v", rtps)
	assert.Equal(t, 1, 0)
}
