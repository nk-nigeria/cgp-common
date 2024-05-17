package bot

import (
	"context"
	"database/sql"
	"fmt"
	"sort"
	"sync"
	"time"

	"github.com/ciaolink-game-platform/cgp-common/lib"
	pb "github.com/ciaolink-game-platform/cgp-common/proto"
)

type BaseAction int

const (
	BaseAction_1 BaseAction = 1
	BaseAction_2 BaseAction = 2
	BaseAction_3 BaseAction = 3
	BaseAction_4 BaseAction = 4
	BaseAction_5 BaseAction = 5
)

func IsInRange(val, min, max int64) bool {
	if min > val {
		return false
	}
	if max < val {
		return false
	}
	return true
}

type tableConfigBetGame struct {
	confs []*pb.RuleLucky
	mt    sync.Mutex
}

func NewTableConfigBetGame() *tableConfigBetGame {
	return &tableConfigBetGame{
		confs: make([]*pb.RuleLucky, 0),
	}
}

func (t *tableConfigBetGame) LoadConfig(gameCode string, db *sql.DB) error {
	t.mt.Lock()
	defer t.mt.Unlock()
	t.confs = make([]*pb.RuleLucky, 0)
	ctx, cancel := context.WithTimeout(context.Background(), 4*time.Second)
	ml, err := lib.QueryRulesLucky(ctx, db, &pb.RuleLucky{
		GameCode: gameCode,
	})
	cancel()
	if err != nil {
		fmt.Printf("LoadConfig: %s \r\n", err.Error())
		return err
	}
	// sort
	sort.Slice(ml, func(i, j int) bool {
		a := ml[i]
		b := ml[j]
		if a.Rtp.Min < b.Rtp.Min {
			return true
		}
		if a.Mark.Min < b.Mark.Min {
			return true
		}
		if a.Vip.Min < b.Vip.Min {
			return true
		}
		return a.ReDeal < b.ReDeal
	})
	t.confs = make([]*pb.RuleLucky, 0, len(ml))
	t.confs = append(t.confs, ml...)
	return nil
}

func (t *tableConfigBetGame) CheckValid() bool {
	return true
}
