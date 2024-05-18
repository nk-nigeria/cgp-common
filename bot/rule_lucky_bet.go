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
	// CoRate float64
	*pb.RuleLucky
	TotalChipsWinPrefee int64
	// *pb.UserMeta
}

type RuleLuckyBet struct {
	gameCode string
	usersRtp map[string]*LuckyBet
	tableCfg *tableConfigBetGame

	db       *sql.DB
	markUnit int64
}

func NewLuckyCtrl(gameCode string, markUnit int64) *RuleLuckyBet {
	v := &RuleLuckyBet{
		gameCode: gameCode,
		usersRtp: make(map[string]*LuckyBet),
		tableCfg: NewTableConfigBetGame(),
		markUnit: markUnit,
	}
	return v
}

func (l *RuleLuckyBet) Init(db *sql.DB) {
	l.db = db
	l.tableCfg.LoadConfig(l.gameCode, l.db)
}

func (l *RuleLuckyBet) ReloadConfig() {
	if l.db == nil {
		return
	}
	l.Init(l.db)
}

func (l *RuleLuckyBet) addUser(userId string, rtp LuckyBet) {
	l.usersRtp[userId] = &rtp
}

func (l *RuleLuckyBet) UpdateChipsBalanceChanged(userId string, chipWinPrefee int64) {
	rtp, exist := l.usersRtp[userId]
	if !exist {
		return
	}
	rtp.TotalChipsWinPrefee += chipWinPrefee
}

func (l *RuleLuckyBet) RemoveUser(userId string) {
	delete(l.usersRtp, userId)
}

func (l *RuleLuckyBet) IsUserExist(userId string) bool {
	_, exist := l.usersRtp[userId]
	return exist
}

func (l *RuleLuckyBet) CurrentWinMarkRatio(userId string) int64 {
	rtp, exist := l.usersRtp[userId]
	if !exist {
		return 0
	}
	return rtp.TotalChipsWinPrefee / l.markUnit
}

func (l *RuleLuckyBet) LoadUser(ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	db *sql.DB,
	userId string) (*LuckyBet, error) {
	rule, exist := l.usersRtp[userId]
	if exist && rule.RuleLucky != nil {
		return rule, nil
	}
	report := lib.NewReportGame(ctx)
	data, _, err := report.Query(ctx, "metric/op/user-statistic", userId, "")
	if err != nil {
		return nil, err
	}
	userStat := &pb.UserStatistic{}
	if len(data) > 0 {
		type Response struct {
			Body         string `protobuf:"bytes,1,opt,name=body,proto3" json:"body,omitempty"`
			ErrorMessage string `protobuf:"bytes,2,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
		}
		res := &Response{}
		json.Unmarshal(data, res)
		err = unmarshaler.Unmarshal([]byte(res.Body), userStat)
	}
	if len(userStat.UserId) == 0 {
		return nil, errors.New("invalid data, user not found")
	}
	luckyBet := &LuckyBet{
		UserMeta: userStat,
	}
	if luckyBet.TotalChipsTopup == 0 {
		luckyBet.CoRate = 100
	} else {
		total := luckyBet.TotalChipsCashout + luckyBet.AgPlay + luckyBet.AgBank
		luckyBet.CoRate = float64(total) / float64(luckyBet.TotalChipsTopup) * float64(100)
	}
	l.usersRtp[luckyBet.UserId] = luckyBet
	return luckyBet, err

}

func (l *RuleLuckyBet) Dump(logger runtime.Logger) {
	logger.Debug("######## START DUMP LUCKY BET ########")
	logger.WithField("game ", l.gameCode).Info("")
	{
		x := logger
		for key, rule := range l.usersRtp {
			x = x.WithField("key", key).WithField("value", rule)
		}
		x.Debug("rule")
	}
	{
		x := logger
		for key, conf := range l.tableCfg.rules {
			x = x.WithField("key", key).WithField("value", conf)
		}
		x.Debug("conf")
	}
	logger.Debug("######## END DUMP LUCKY BET ########")
}
