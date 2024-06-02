package lib

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

func TestTickCountDown_Setup(t *testing.T) {
	name := "TestTickCountDown_Setup"
	t.Run(name, func(t *testing.T) {
		tc := TickCountDown{}
		tc.Setup(2*time.Second, 2)
		for i := 4; i > 0; i-- {
			tc.Loop()
			if i == 0 {
				continue
			}
			if i%2 != 0 {
				assert.Equal(t, tc.IsSecChanged(), true)
			} else {
				assert.Equal(t, tc.IsSecChanged(), false)
				tc.ResetCheckPoint()
			}
		}
		assert.Equal(t, true, tc.Timeout())
	})
}
