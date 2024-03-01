package bot

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/heroiclabs/nakama-common/runtime"
)

type LuckyBet struct {
	// UserId    string `json:"user_id,omitempty"`
	ChipWin   int `json:"chip_win,omitempty"`
	ChipSpent int `json:"chip_spent,omitempty"`
	CoRate    float64
	Ci        float64
	CoInDay   float64
	// internal
	chipWinChange   int
	chipSpentChange int
}

type RuleLuckyBet struct {
	rules    map[string]*LuckyBet
	tableCfg TableConfigBetGame
}

func NewLuckyCtrl() *RuleLuckyBet {
	return &RuleLuckyBet{
		rules: map[string]*LuckyBet{},
	}
}

func (l *RuleLuckyBet) addUser(userId string, rtp LuckyBet) {
	l.rules[userId] = &rtp
}

func (l *RuleLuckyBet) UpdateUser(userId string, rtp LuckyBet) {
	if !l.IsUserExist(userId) {
		return
	}
	currentRtp := l.rules[userId]
	currentRtp.ChipSpent += rtp.ChipSpent
	currentRtp.ChipWin += rtp.ChipWin
	currentRtp.chipSpentChange += rtp.ChipSpent
	currentRtp.chipWinChange += rtp.ChipWin
	if rtp.Ci > 0 {
		currentRtp.Ci = rtp.Ci
	}
	if rtp.CoRate > 0 {
		currentRtp.CoRate = rtp.CoRate
	}
	if rtp.CoInDay > 0 {
		currentRtp.CoInDay = rtp.CoInDay
	}
	l.rules[userId] = currentRtp

}

func (l *RuleLuckyBet) RemoveUser(userId string) {
	delete(l.rules, userId)
}

func (l *RuleLuckyBet) IsUserExist(userId string) bool {
	_, exist := l.rules[userId]
	return exist
}

func (l *RuleLuckyBet) avg() LuckyBet {
	lucky := LuckyBet{}
	for _, v := range l.rules {
		lucky.Ci += v.Ci
		lucky.CoInDay += v.CoInDay
		lucky.CoRate += v.CoRate
		lucky.ChipWin += v.ChipWin
		lucky.ChipSpent += v.ChipSpent
	}
	return lucky
}

func (l *RuleLuckyBet) LoadUser(ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	db *sql.DB,
	userId string) {
}

func (l *RuleLuckyBet) GetBaseAction() BaseAction {
	lucky := l.avg()
	cfgBet := l.tableCfg.GetConfig(lucky.CoRate, lucky.Ci, lucky.CoInDay)
	totalWin := lucky.ChipWin - lucky.ChipSpent
	return cfgBet.GetBaseAction(int64(totalWin))
}

func (l *RuleLuckyBet) SaveToProfile(
	ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	db *sql.DB,
	userId string,
	gameCode string,
) error {
	if IsBot(userId) {
		return nil
	}
	rtp, exist := l.rules[userId]
	if !exist {
		return errors.New("not exist")
	}
	if rtp.chipSpentChange == 0 && rtp.chipWinChange == 0 {
		// not change, no need save
		return nil
	}
	data, err := json.Marshal(rtp)
	if err != nil {
		return err
	}
	query := `UPDATE
					users AS u
				SET
					metadata
						= u.metadata
						|| jsonb_build_object(` + fmt.Sprintf("'rtp.%s'", gameCode) + `, '` + string(data) + `')
				WHERE	
					id = $1;`
	_, err = db.ExecContext(ctx, query, userId)
	l.RemoveUser(userId)
	return err
}
