package bot

import (
	"context"
	"database/sql"
	"testing"

	"github.com/heroiclabs/nakama-common/runtime"
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
		l := NewLuckyCtrl("sicbo", 1000)
		ctx := context.Background()
		ctxVal := map[string]string{
			"report_endpoint": "http://103.226.250.195:8360",
			"http_key":        "defaulthttpkey",
		}
		ctx = context.WithValue(ctx, runtime.RUNTIME_CTX_ENV, ctxVal)
		l.Init(db)
		_, err := l.LoadUser(ctx, nil, nil, nil, "08c44efe-1fe8-4d7b-8c7d-9f103ceed1cb")
		assert.NoError(t, err)
	})

}

func TestRuleLuckyBet_GetBaseAction(t *testing.T) {
	name := "TestRuleLuckyBet_GetBaseAction"
	connStr := "user=postgres dbname=nakama password=localdb host=103.226.250.195 port=6432 sslmode=disable"
	// Connect to the PostgreSQL server
	db, err := sql.Open("postgres", connStr)
	assert.NoError(t, err)
	defer db.Close()
	t.Run(name, func(t *testing.T) {
		l := NewLuckyCtrl("sicbo", 1000)
		err := l.tableCfg.LoadConfig("sicbo", db)
		ctx := context.Background()
		ctxVal := map[string]string{
			"report_endpoint": "http://103.226.250.195:8360",
			"http_key":        "defaulthttpkey",
		}
		ctx = context.WithValue(ctx, runtime.RUNTIME_CTX_ENV, ctxVal)
		l.LoadUser(ctx, nil, nil, nil, "570617a1-d99e-45a7-85aa-62021e5ae741")
		assert.NoError(t, err)

	})
}
