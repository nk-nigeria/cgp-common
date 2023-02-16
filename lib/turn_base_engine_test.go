package lib

import (
	"context"
	"fmt"
	"testing"
	"time"
)

func TestNewTurnBaseEngine(t *testing.T) {
	type args struct {
		listPlayers []string
		timePerTurn time.Duration
	}
	tests := []struct {
		name string
		args args
		want *turnBaseEngine
	}{
		// TODO: Add test cases.
		{
			name: "TestNewTurnBaseEngine",
			args: args{
				listPlayers: []string{"1", "2", "3", "4"},
				timePerTurn: 1 * time.Second,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := NewTurnBaseEngine()
			got.Config(tt.args.listPlayers, tt.args.timePerTurn)
			got.RegisterNextTurnIndexFn(func(currentIdx int, val string, numOccur int, userData interface{}) int {
				id := currentIdx
				if numOccur > 0 {
					id++
				}
				fmt.Printf("user data %v", userData)
				return id
			}, "this is user data, it will be anything")
			if got == nil {
				t.Errorf("NewTurnBaseEngine() = nil")
			}
			ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
			defer cancel()
			for {
				time.Sleep(100 * time.Millisecond)
				player := got.Loop()
				if got.IsNewTurn() {
					t.Logf("new turn player %s", player)
				}

				select {
				case <-ctx.Done():
					return
				default:
				}
			}
		})
	}
}
