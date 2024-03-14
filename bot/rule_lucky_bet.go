package bot

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"log/slog"
	"os"

	"github.com/ciaolink-game-platform/cgp-common/lib"
	pb "github.com/ciaolink-game-platform/cgp-common/proto"
	"github.com/heroiclabs/nakama-common/runtime"
	"google.golang.org/protobuf/encoding/protojson"
)

var unmarshaler *protojson.UnmarshalOptions
var logger *slog.Logger

func init() {
	unmarshaler = &protojson.UnmarshalOptions{}
	logger = slog.New(slog.NewTextHandler(os.Stderr, nil))
}

type LuckyBet struct {
	// UserId    string `json:"user_id,omitempty"`
	// ChipWin   int `json:"chip_win,omitempty"`
	// ChipSpent int `json:"chip_spent,omitempty"`
	CoRate float64
	*pb.UserMeta
}

type RuleLuckyBet struct {
	gameCode      string
	rules         map[string]*LuckyBet
	tableCfg      *tableConfigBetGame
	TotalChipsWin int
}

func NewLuckyCtrl(gameCode string) *RuleLuckyBet {
	v := &RuleLuckyBet{
		gameCode: gameCode,
		rules:    make(map[string]*LuckyBet),
		tableCfg: NewTableConfigBetGame(),
	}
	return v
}

func (l *RuleLuckyBet) Init(db *sql.DB) {
	l.tableCfg.LoadConfig(l.gameCode, db)
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
	if rtp.AgPlay < 0 {
		rtp.AgPlay = 0
	}
}

func (l *RuleLuckyBet) RemoveUser(userId string) {
	delete(l.rules, userId)
}

func (l *RuleLuckyBet) IsUserExist(userId string) bool {
	_, exist := l.rules[userId]
	return exist
}

func (l *RuleLuckyBet) avg() LuckyBet {
	lucky := LuckyBet{
		UserMeta: &pb.UserMeta{},
	}
	totalCoRate := float64(0)
	for _, v := range l.rules {
		lucky.TotalChipsTopup += v.TotalChipsTopup
		lucky.TotalChipsCashout += v.TotalChipsCashout
		lucky.TotalChipsCashoutInday += v.TotalChipsCashoutInday
		totalCoRate += lucky.CoRate
		lucky.AgPlay += v.AgPlay
		lucky.AgBank += v.AgBank
		// lucky.ChipWin += v.ChipWin
		// lucky.ChipSpent += v.ChipSpent
	}
	lucky.CoRate = totalCoRate / float64(len(l.rules))
	return lucky
}

func (l *RuleLuckyBet) LoadUser(ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	db *sql.DB,
	userId string) (*LuckyBet, error) {
	rule, exist := l.rules[userId]
	if exist && rule.UserMeta != nil {
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
		err = unmarshaler.Unmarshal([]byte(res.Body), userMeta)
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
	if lucky.UserMeta == nil {
		logger.Error("lucky user not found, return default base action")
		return BaseAction_1
	}
	cfgBet := l.tableCfg.GetConfig(lucky.CoRate, float64(lucky.GetTotalChipsTopup()), float64(lucky.TotalChipsCashoutInday))
	return GetBaseAction(cfgBet, l.TotalChipsWin+newChipsWin)
}

func (l *RuleLuckyBet) Dump(logger runtime.Logger) {
	logger.Debug("######## START DUMP LUCKY BET ########")
	logger.WithField("game ", l.gameCode).Info("")
	{
		x := logger
		for key, rule := range l.rules {
			x = x.WithField("key", key).WithField("value", rule)
		}
		x.Debug("rule")
	}
	{
		x := logger
		for key, conf := range l.tableCfg.confs {
			x = x.WithField("key", key).WithField("value", conf)
		}
		x.Debug("conf")
	}
	logger.Debug("######## END DUMP LUCKY BET ########")
}
