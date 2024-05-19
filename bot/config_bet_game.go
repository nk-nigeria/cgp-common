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
	rules  []*pb.RuleLucky
	locker *sync.RWMutex
}

func NewTableConfigBetGame() *tableConfigBetGame {
	return &tableConfigBetGame{
		locker: &sync.RWMutex{},
		rules:  make([]*pb.RuleLucky, 0),
	}
}

func (t *tableConfigBetGame) LoadConfig(gameCode string, db *sql.DB) error {
	t.locker.Lock()
	defer t.locker.Unlock()
	t.rules = make([]*pb.RuleLucky, 0)
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
	t.rules = make([]*pb.RuleLucky, 0, len(ml))
	t.rules = append(t.rules, ml...)
	return nil
}

func (t *tableConfigBetGame) Find(rtpDaily, markUnit, vip, winMarkRatio int64) []*pb.RuleLucky {
	t.locker.Lock()
	defer t.locker.Unlock()
	ml := make([]*pb.RuleLucky, 0)
	for _, rule := range t.rules {
		if !IsInRange(int64(rtpDaily), rule.Rtp.Min, rule.Rtp.Max) {
			continue
		}
		if !IsInRange(int64(markUnit), rule.Mark.Min, rule.Mark.Max) {
			continue
		}
		if !IsInRange(int64(vip), rule.Vip.Min, rule.Vip.Max) {
			continue
		}
		if !IsInRange(int64(winMarkRatio), rule.WinMarkRatio.Min, rule.WinMarkRatio.Max) {
			continue
		}
		v := rule
		ml = append(ml, v)
	}
	return ml
}
