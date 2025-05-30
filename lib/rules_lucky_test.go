package lib

import (
	"context"
	"database/sql"
	"testing"

	_ "github.com/lib/pq"
	pb "github.com/nakama-nigeria/cgp-common/proto"
	"github.com/stretchr/testify/assert"
)

func TestQueryRulesLucky(t *testing.T) {
	name := "TestQueryRulesLucky"
	connStr := "user=postgres dbname=nakama password=localdb host=103.226.250.195 port=6432 sslmode=disable"

	// Connect to the PostgreSQL server
	db, err := sql.Open("postgres", connStr)
	assert.NoError(t, err)
	defer db.Close()
	t.Run(name, func(t *testing.T) {
		{
			ml, err := QueryRulesLucky(context.Background(), db, &pb.RuleLucky{})
			assert.NoError(t, err)
			assert.LessOrEqual(t, int(0), len(ml))
		}
		{
			ml, err := QueryRulesLucky(context.Background(), db, &pb.RuleLucky{
				Id: 2,
			})
			assert.NoError(t, err)
			assert.Less(t, int(0), len(ml))
		}
		{
			ml, err := QueryRulesLucky(context.Background(), db, &pb.RuleLucky{
				GameCode: "chinse_poker",
			})
			assert.NoError(t, err)
			assert.Less(t, int(0), len(ml))
		}
	})

}
