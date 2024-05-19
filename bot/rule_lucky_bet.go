package bot

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log/slog"
	"os"
	"time"

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

type UserRtp struct {
	UserID              string    `json:"-"`
	TotalChipLoseInDay  int64     `json:"total_chip_lose_in_day,omitempty"`
	TotalChipsWinInDay  int64     `json:"total_chips_win_in_day,omitempty"`
	TotalChipsWinPrefee int64     `json:"total_chips_win_prefee,omitempty"`
	Vip                 int       `json:"-"`
	DataChange          bool      `json:"-,omitempty"`
	UpdateAt            time.Time `json:"-"`
	UpdateAtUnix        int64     `json:"update_at_unix,omitempty"`
}

func (u *UserRtp) IsNewDay() bool {
	return u.UpdateAt.Day() != time.Now().Day()
}

func (u *UserRtp) RtpDaily(chipChanged int64) int64 {
	totalLoseInDay := u.TotalChipLoseInDay
	totalWinInDay := u.TotalChipsWinInDay
	if chipChanged > 0 {
		totalWinInDay += chipChanged
	} else {
		totalLoseInDay -= chipChanged
	}
	if totalLoseInDay == 0 {
		return 200
	}
	return totalWinInDay * 100 / totalLoseInDay
}

func (u *UserRtp) ResetData() {
	u.TotalChipLoseInDay = 0
	u.TotalChipsWinInDay = 0
	u.DataChange = true
	u.UpdateAt = time.Now()
}

type RuleLuckyBet struct {
	gameCode string
	usersRtp map[string]*UserRtp
	tableCfg *tableConfigBetGame

	db *sql.DB
	// markUnit int64
}

func NewLuckyCtrl(gameCode string) *RuleLuckyBet {
	v := &RuleLuckyBet{
		gameCode: gameCode,
		usersRtp: make(map[string]*UserRtp),
		tableCfg: NewTableConfigBetGame(),
		// markUnit: markUnit,
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

func (l *RuleLuckyBet) addUser(userId string, rtp UserRtp) {
	rtp.UserID = userId
	l.usersRtp[userId] = &rtp
}

func (l *RuleLuckyBet) UpdateChipsBalanceChanged(userId string, chipChanged int64, chipWinPrefee int64) {
	rtp, exist := l.usersRtp[userId]
	if !exist {
		return
	}
	// clear daily data
	if rtp.IsNewDay() {
		rtp.ResetData()
	}
	rtp.DataChange = true
	if chipChanged > 0 {
		rtp.TotalChipsWinInDay += chipChanged
	} else {
		rtp.TotalChipLoseInDay -= chipChanged
	}
	rtp.TotalChipsWinPrefee += chipWinPrefee
}

func (l *RuleLuckyBet) RemoveUser(db *sql.DB, userId string) {
	if rtp, exist := l.usersRtp[userId]; exist {
		if rtp.DataChange {
			l.WriteMetada(db, rtp)
		}
	}
	delete(l.usersRtp, userId)
}

func (l *RuleLuckyBet) IsUserExist(userId string) bool {
	_, exist := l.usersRtp[userId]
	return exist
}

func (l *RuleLuckyBet) CurrentWinMarkRatio(userId string, markUnit int64, chipChangedPrefee int64) int64 {
	rtp, exist := l.usersRtp[userId]
	if !exist {
		return 0
	}
	return rtp.TotalChipsWinPrefee + chipChangedPrefee/markUnit
}

func (l *RuleLuckyBet) IsValidLuckyRule(userId string, markUnit int64, chipChanged int64, chipChangedPrefee int64) ([]*pb.RuleLucky, bool) {
	rtp, exist := l.usersRtp[userId]
	if !exist {
		return make([]*pb.RuleLucky, 0), true
	}
	rtpDaily := rtp.RtpDaily(chipChanged)
	winMarkRatio := l.CurrentWinMarkRatio(userId, markUnit, chipChangedPrefee)
	rules := l.tableCfg.Find(rtpDaily, markUnit, int64(rtp.Vip), winMarkRatio)
	return rules, len(rules) > 0
}

func (l *RuleLuckyBet) LoadUser(ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	db *sql.DB,
	userId string) (*UserRtp, error) {
	rtp, err := loadSaveGame(ctx, db, userId, l.gameCode)
	if err != nil {
		return nil, err
	}
	l.addUser(userId, *rtp)
	return rtp, nil
}

func (l *RuleLuckyBet) WriteMetada(db *sql.DB, rtp *UserRtp) {
	if db == nil {
		fmt.Println("[ABORT] WriteMetada failed: db is nil")
		return
	}
	rtp.UpdateAtUnix = rtp.UpdateAt.Unix()
	data, err := json.Marshal(rtp)
	if err != nil {
		fmt.Println("[ABORT] WriteMetada failed: ", err.Error())
		return
	}
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	updateUsersSaveGame(ctx, db, rtp.UserID, l.gameCode, string(data))
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

func updateUsersSaveGame(ctx context.Context, db *sql.DB, userId string, gameCode string, data string) error {
	query := `UPDATE
					users AS u
				SET
					metadata
						= u.metadata
						|| jsonb_build_object(` + fmt.Sprintf("'rtp.%s'", gameCode) + `, '` + data + `')
				WHERE	
					id = $1;`
	_, err := db.ExecContext(ctx, query, userId)
	if err != nil {
		// logger.WithField("err", err).Error("db.ExecContext match update error.")
		fmt.Printf("db.ExecContext match update save game %s error: %s \r\n", gameCode, err)
	}
	return err
}

func loadSaveGame(ctx context.Context, db *sql.DB, userId string, gameCode string) (*UserRtp, error) {
	rtp := &UserRtp{UserID: userId}
	profile, metadata, err := lib.GetProfileUser(ctx, db, userId)
	if err != nil {
		fmt.Printf("loadSaveGame: %s \r\n", err.Error())
		return rtp, err
	}
	// var metadata map[string]interface{}
	// err = json.Unmarshal([]byte(profile.User.GetMetadata()), &metadata)
	// if err != nil {
	// 	fmt.Printf("loadSaveGame: %s \r\n", err.Error())
	// 	return rtp, err
	// }
	data, ok := metadata[fmt.Sprintf("rtp.%s", gameCode)].(string)
	if !ok {
		return rtp, nil
	}
	json.Unmarshal([]byte(data), rtp)
	if rtp.UpdateAtUnix == 0 {
		return rtp, nil
	}
	rtp.UpdateAt = time.Unix(rtp.UpdateAtUnix, 0)
	if rtp.IsNewDay() {
		rtp.ResetData()
	}
	rtp.Vip = int(profile.VipLevel)
	return rtp, nil
}
