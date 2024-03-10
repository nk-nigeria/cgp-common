package bot

import (
	"context"
	"database/sql"
	"testing"

	_ "github.com/lib/pq"
	"github.com/stretchr/testify/assert"
)

func TestRuleLuckyBet_LoadUser(t *testing.T) {
	name := "TestRuleLuckyBet_LoadUser"
	connStr := "user=postgres dbname=nakama password=localdb host=103.226.250.195 port=6432 sslmode=disable"
	// Connect to the PostgreSQL server
	db, err := sql.Open("postgres", connStr)
	assert.NoError(t, err)
	defer db.Close()
	t.Run(name, func(t *testing.T) {
		l := NewLuckyCtrl("sicbo")
		ctx := context.Background()
		ctxVal := make(map[string]string)
		ctxVal["report_endpoint"] = "http://103.226.250.195:8360"
		ctxVal["http_key"] = "defaulthttpkey"
		ctx = context.WithValue(ctx, "env", ctxVal)
		l.Init(db)
		_, err := l.LoadUser(ctx, nil, nil, nil, "08c44efe-1fe8-4d7b-8c7d-9f103ceed1cb")
		assert.NoError(t, err)
	})

}
