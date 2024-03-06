package bot

import (
	"context"
	"database/sql"
	"fmt"
	"sort"
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

// type Range struct {
// 	Min float64
// 	Max float64
// }

func IsInRange(val, min, max float64) bool {
	if min > val {
		return false
	}
	if max < val {
		return false
	}
	return true
}

// type configBetGame struct {
// 	CoRate  Range
// 	Ci      Range
// 	CoInDay Range
// 	Base    []int64
// }

// func NewConfigBetGame(CoRateMin float64,
// 	CoRateMax float64,
// 	CiMin float64,
// 	CiMax float64,
// 	CoInDayMin float64,
// 	CoInDayMax float64,
// 	Base []int64) configBetGame {
// 	v := configBetGame{
// 		CoRate:  Range{Min: CoRateMin, Max: CoRateMax},
// 		Ci:      Range{Min: CiMin, Max: CiMax},
// 		CoInDay: Range{Min: CoInDayMin, Max: CoInDayMax},
// 	}
// 	v.Base = make([]int64, 0)
// 	// v.Base = append(v.Base, math.MinInt)
// 	v.Base = append(v.Base, Base...)
// 	// v.Base = append(v.Base, math.MaxInt)
// 	// sort desc
// 	sort.Slice(v.Base, func(i, j int) bool {
// 		return v.Base[j] > v.Base[i]
// 	})
// 	return v
// }

func GetBaseAction(rule *pb.RuleLucky, totalWin int) BaseAction {
	if totalWin >= int(rule.Base_4) {
		return BaseAction_5
	}
	if totalWin >= int(rule.Base_3) {
		return BaseAction_4
	}
	if totalWin >= int(rule.Base_2) {
		return BaseAction_3
	}
	if totalWin >= int(rule.Base_1) {
		return BaseAction_2
	}
	return BaseAction_1
}

type tableConfigBetGame struct {
	confs []*pb.RuleLucky
}

func NewTableConfigBetGame() *tableConfigBetGame {
	return &tableConfigBetGame{
		confs: make([]*pb.RuleLucky, 0),
	}
}

func (t *tableConfigBetGame) LoadConfig(gameCode string, db *sql.DB) error {
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
		if a.CoRateMax < b.CoRateMax {
			return true
		}
		if a.CiMax < b.CiMax {
			return true
		}
		if a.CoIndayMax < b.CoIndayMax {
			return true
		}
		return false
	})
	t.confs = make([]*pb.RuleLucky, 0, len(ml))
	t.confs = append(t.confs, ml...)
	return nil
}

func (t *tableConfigBetGame) GetConfig(CoRate float64, Ci float64, CoInDay float64) *pb.RuleLucky {
	for _, rule := range t.confs {
		if !IsInRange(CoRate, float64(rule.CoRateMin), float64(rule.CoRateMax)) {
			continue
		}
		if !IsInRange(Ci, float64(rule.CiMin), float64(rule.CiMax)) {
			continue
		}
		if !IsInRange(CoInDay, float64(rule.CoIndayMin), float64(rule.CoIndayMax)) {
			continue
		}
		return rule
	}
	return &pb.RuleLucky{}
}
