package bot

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"

	"github.com/ciaolink-game-platform/cgp-common/lib"
	pb "github.com/ciaolink-game-platform/cgp-common/proto"
	"github.com/heroiclabs/nakama-common/runtime"
)

type LuckyBet struct {
	// UserId    string `json:"user_id,omitempty"`
	// ChipWin   int `json:"chip_win,omitempty"`
	// ChipSpent int `json:"chip_spent,omitempty"`
	CoRate float64
	*pb.UserMeta
}

type RuleLuckyBet struct {
	rules         map[string]*LuckyBet
	tableCfg      TableConfigBetGame
	TotalChipsWin int
}

func NewLuckyCtrl() *RuleLuckyBet {
	return &RuleLuckyBet{
		rules: map[string]*LuckyBet{},
	}
}

func (l *RuleLuckyBet) addUser(userId string, rtp LuckyBet) {
	l.rules[userId] = &rtp
}

func (l *RuleLuckyBet) UpdateChipsBalanceChanged(userId string, chipsChanged int) {
	rtp, exist := l.rules[userId]
	if !exist {
		return
	}
	rtp.AgPlay += int64(chipsChanged)
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
		lucky.TotalChipsTopup += v.TotalChipsTopup
		lucky.TotalChipsCashoutInday += v.TotalChipsCashoutInday
		lucky.CoRate += v.CoRate
		// lucky.ChipWin += v.ChipWin
		// lucky.ChipSpent += v.ChipSpent
	}
	return lucky
}

func (l *RuleLuckyBet) LoadUser(ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	db *sql.DB,
	userId string) (*LuckyBet, error) {
	rule, exist := l.rules[userId]
	if exist {
		return rule, nil
	}
	report := lib.NewReportGame(ctx)
	data, _, err := report.Query(ctx, "metric/op/user-meta", userId, "")
	if err != nil {
		return nil, err
	}
	userMeta := &pb.UserMeta{}
	if len(data) > 0 {
		type Response struct {
			Body         string `protobuf:"bytes,1,opt,name=body,proto3" json:"body,omitempty"`
			ErrorMessage string `protobuf:"bytes,2,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
		}
		res := &Response{}
		json.Unmarshal(data, res)
		err = json.Unmarshal([]byte(res.Body), userMeta)
	}
	if len(userMeta.UserId) == 0 {
		return nil, errors.New("invalid data, user not found")
	}
	luckyBet := &LuckyBet{
		UserMeta: userMeta,
	}
	if luckyBet.TotalChipsTopup == 0 {
		luckyBet.CoRate = 100
	} else {
		total := luckyBet.TotalChipsCashout + luckyBet.AgPlay + luckyBet.AgBank
		luckyBet.CoRate = float64(total) / float64(luckyBet.TotalChipsTopup) * float64(100)
	}
	l.rules[luckyBet.UserId] = luckyBet
	return luckyBet, err

}

func (l *RuleLuckyBet) GetBaseAction(newChipsWin int) BaseAction {
	lucky := l.avg()
	cfgBet := l.tableCfg.GetConfig(lucky.CoRate, float64(lucky.GetTotalChipsTopup()), float64(lucky.TotalChipsCashoutInday))
	return cfgBet.GetBaseAction(int64(l.TotalChipsWin) + int64(newChipsWin))
}
