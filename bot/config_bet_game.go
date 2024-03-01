package bot

import "sort"

type BaseAction int

const (
	BaseAction_1 BaseAction = 1
	BaseAction_2 BaseAction = 2
	BaseAction_3 BaseAction = 3
	BaseAction_4 BaseAction = 4
	BaseAction_5 BaseAction = 5
)

type Range struct {
	Min float64
	Max float64
}

func (r *Range) IsInRange(val float64) bool {
	if r.Min > val {
		return false
	}
	if r.Max < val {
		return false
	}
	return true
}

type configBetGame struct {
	CoRate  Range
	Ci      Range
	CoInDay Range
	Base    []int64
}

func NewConfigBetGame(CoRateMin float64,
	CoRateMax float64,
	CiMin float64,
	CiMax float64,
	CoInDayMin float64,
	CoInDayMax float64,
	Base []int64) configBetGame {
	v := configBetGame{
		CoRate:  Range{Min: CoRateMin, Max: CoRateMax},
		Ci:      Range{Min: CiMin, Max: CiMax},
		CoInDay: Range{Min: CoInDayMin, Max: CoInDayMax},
	}
	v.Base = make([]int64, 0)
	// v.Base = append(v.Base, math.MinInt)
	v.Base = append(v.Base, Base...)
	// v.Base = append(v.Base, math.MaxInt)
	// sort desc
	sort.Slice(v.Base, func(i, j int) bool {
		return v.Base[j] > v.Base[i]
	})
	return v
}

func (c *configBetGame) GetBaseAction(totalWin int64) BaseAction {
	baseAction := BaseAction_5
	for _, v := range c.Base {
		if totalWin >= v {
			return baseAction
		}
		baseAction--
	}
	return baseAction
}

type TableConfigBetGame struct {
	confs []configBetGame
}

func (t *TableConfigBetGame) LoadConfig() {}

func (t *TableConfigBetGame) GetConfig(CoRate float64, CiRate float64, CoInDay float64) configBetGame {
	return configBetGame{}
}
