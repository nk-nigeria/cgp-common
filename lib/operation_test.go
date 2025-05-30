package lib

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewReportGamePanic(t *testing.T) {
	name := "TestNewReportGamePanic"
	t.Run(name, func(t *testing.T) {
		got := NewReportGame(context.Background())
		assert.NotNil(t, got)
	})
}
