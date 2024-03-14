package bot

import (
	"database/sql"
	"testing"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
	"github.com/stretchr/testify/assert"
)

func Test_tableConfigBetGame_LoadConfig(t *testing.T) {
	name := "Test_tableConfigBetGame_LoadConfig"
	t.Run(name, func(t *testing.T) {
		// source := "host=cgpdev user=postgres password=localdb dbname=nakama port=6432 sslmode=disable"
		// gormDB, _ := gorm.Open(postgres.New(postgres.Config{
		// 	DSN: source,
		// }), &gorm.Config{})
		// assert.NotNil(t, gormDB)
		// tr := NewTableConfigBetGame()
		// db, _ := gormDB.DB()
		// err := tr.LoadConfig("chinse_poker", db)
		// assert.NoError(t, err)

	})
}

func Test_tableConfigBetGame_GetConfig(t *testing.T) {
	name := "Test_tableConfigBetGame_GetConfig"
	connStr := "user=postgres dbname=nakama password=localdb host=103.226.250.195 port=6432 sslmode=disable"
	// Connect to the PostgreSQL server
	db, err := sql.Open("postgres", connStr)
	assert.NoError(t, err)
	defer db.Close()
	t.Run(name, func(t *testing.T) {
		tr := NewTableConfigBetGame()
		err := tr.LoadConfig("sicbo", db)
		assert.NoError(t, err)
		conf := tr.GetConfig(60, 10, 0.5)
		assert.NotNil(t, conf)
		assert.Equal(t, conf, &pb.RuleLucky{
			Base_1: -2,
			Base_2: -1,
			Base_3: 1000000,
			Base_4: 100000000000,
		})
	})

}
