package bot

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRuleLuckyBet_LoadUser(t *testing.T) {
	name := "TestRuleLuckyBet_LoadUser"
	t.Run(name, func(t *testing.T) {
		l := NewLuckyCtrl("game_code", nil)
		ctx := context.Background()
		ctxVal := make(map[string]string)
		ctxVal["report_endpoint"] = "http://103.226.250.195:8360"
		ctxVal["http_key"] = "defaulthttpkey"
		ctx = context.WithValue(ctx, "env", ctxVal)
		_, err := l.LoadUser(ctx, nil, nil, nil, "08c44efe-1fe8-4d7b-8c7d-9f103ceed1cb")
		assert.NoError(t, err)
	})

}
