package bot

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Test_tableConfigBetGame_LoadConfig(t *testing.T) {
	name := "Test_tableConfigBetGame_LoadConfig"
	t.Run(name, func(t *testing.T) {
		source := "host=cgpdev user=postgres password=localdb dbname=nakama port=6432 sslmode=disable"
		gormDB, _ := gorm.Open(postgres.New(postgres.Config{
			DSN: source,
		}), &gorm.Config{})
		assert.NotNil(t, gormDB)
		tr := NewTableConfigBetGame()
		db, _ := gormDB.DB()
		err := tr.LoadConfig("chinse_poker", db)
		assert.NoError(t, err)

	})
}
