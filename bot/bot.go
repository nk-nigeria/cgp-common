package bot

import (
	"context"
	"database/sql"
	"fmt"
	"strings"
	"time"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"

	"github.com/heroiclabs/nakama-common/api"
	"github.com/heroiclabs/nakama-common/runtime"
)

// const BotUIdPrefix =
var BotUids = []string{"003e8f8a-986d-4528-83f8-c19918365324"}
var botsAccount []*account

var nkModule runtime.NakamaModule

type account struct {
	api.Account
	LastOnlineTimeUnix int64
	Sid                int64
}

func LoadBotsInfo(ctx context.Context, nk runtime.NakamaModule, db *sql.DB) error {
	// nk.AccountGetId()
	nkModule = nk
	runtimeVal, ok := ctx.Value(runtime.RUNTIME_CTX_ENV).(map[string]string)
	if !ok {
		fmt.Printf("ctx value runtime.RUNTIME_CTX_ENV expect map[string]string , actual %v\r\n", ctx.Value(runtime.RUNTIME_CTX_ENV))
	}
	uuids := make([]string, 0)
	for k, v := range runtimeVal {
		if strings.ToLower(k) == "bot_uuids" {
			BotUids = strings.Split(v, ",")
			uuids = strings.Split(v, ",")
			continue
		}
	}
	accounts, _ := GetAccounts(ctx, db, uuids...)
	for _, account := range accounts {
		botsAccount = append(botsAccount, account)
	}

	return nil
}

func RegisterBotUuids(uuids ...string) {
	BotUids = make([]string, 0, len(uuids))
	BotUids = append(BotUids, uuids...)
}

func IsBot(userId string) bool {
	for _, botUid := range BotUids {
		if userId == botUid {
			return true
		}
	}
	return false
}

var _ runtime.Presence = (*BotPresence)(nil)
var _ runtime.MatchData = (*botMatchData)(nil)

type BotPresence struct {
	*account
	Tick int
	turn *botTurn
}

func NewBotPresences(numBots int) []*BotPresence {
	num := 0
	ml := make([]*BotPresence, 0, numBots)
	for _, botAccount := range botsAccount {
		num++

		b := &BotPresence{
			account: botAccount,
			Tick:    0,
			turn:    NewBotTurn(0, 0, nil),
		}
		ml = append(ml, b)
		if num >= numBots {
			break
		}
	}
	return ml
}

func (b *BotPresence) InitTurn(maxTick int, maxOccur int, fnTurn func()) {
	b.turn = NewBotTurn(maxTick, maxOccur, fnTurn)
}

func (b *BotPresence) Loop() {
	b.turn.Loop()
}

// GetHidden implements runtime.Presence.
func (*BotPresence) GetHidden() bool {
	return false
}

// GetNodeId implements runtime.Presence.
func (*BotPresence) GetNodeId() string {
	return ""
}

// GetPersistence implements runtime.Presence.
func (*BotPresence) GetPersistence() bool {
	return false
}

// GetReason implements runtime.Presence.
func (*BotPresence) GetReason() runtime.PresenceReason {
	return runtime.PresenceReasonUnknown
}

// GetSessionId implements runtime.Presence.
func (*BotPresence) GetSessionId() string {
	return ""
}

// GetStatus implements runtime.Presence.
func (*BotPresence) GetStatus() string {
	return ""
}

// GetUserId implements runtime.Presence.
func (b *BotPresence) GetUserId() string {
	return b.account.User.Id
}

// GetUsername implements runtime.Presence.
func (b *BotPresence) GetUsername() string {
	return b.account.User.Username
}

func (b *BotPresence) GetAccount() *account {
	return b.account
}

type botMatchData struct {
	opCode pb.OpCodeRequest
	data   []byte
	*BotPresence
}

func NewBotMatchData(opCode pb.OpCodeRequest, data []byte, p *BotPresence) *botMatchData {
	return &botMatchData{
		opCode:      opCode,
		data:        data,
		BotPresence: p,
	}
}

// GetData implements runtime.MatchData.
func (b *botMatchData) GetData() []byte {
	return b.data
}

// GetOpCode implements runtime.MatchData.
func (b *botMatchData) GetOpCode() int64 {
	return int64(b.opCode)
}

// GetReceiveTime implements runtime.MatchData.
func (*botMatchData) GetReceiveTime() int64 {
	return time.Now().UTC().Unix()
}

// GetReliable implements runtime.MatchData.
func (*botMatchData) GetReliable() bool {
	return true
}

func GetAccounts(ctx context.Context, db *sql.DB, userIds ...string) ([]*account, error) {
	if len(userIds) == 0 {
		return make([]*account, 0), nil
	}
	query := `
SELECT u.id, u.username, u.display_name, u.avatar_url, u.lang_tag, u.location, u.timezone, u.metadata, u.wallet,
	u.email, u.apple_id, u.facebook_id, u.facebook_instant_game_id, u.google_id, u.gamecenter_id, u.steam_id, u.custom_id, u.edge_count,
	u.sid
FROM users u
WHERE u.id::text IN (` + "'" + strings.Join(userIds, "','") + "'" + `)`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	ml := make([]*account, 0)
	for rows.Next() {
		account, err := scanAccount(rows)
		if err != nil {
			continue
		}
		ml = append(ml, account)
	}
	return ml, nil
}

type DBScan interface {
	Scan(dest ...any) error
}

func scanAccount(row DBScan) (*account, error) {
	var userId sql.NullString
	var displayName sql.NullString
	var username sql.NullString
	var avatarURL sql.NullString
	var langTag sql.NullString
	var location sql.NullString
	var timezone sql.NullString
	var metadata sql.NullString
	var wallet sql.NullString
	var email sql.NullString
	var apple sql.NullString
	var facebook sql.NullString
	var facebookInstantGame sql.NullString
	var google sql.NullString
	var gamecenter sql.NullString
	var steam sql.NullString
	var customID sql.NullString
	var edgeCount int
	// var createTime pgtype.Timestamptz
	// var updateTime pgtype.Timestamptz
	// var verifyTime pgtype.Timestamptz
	// var disableTime pgtype.Timestamptz
	// var deviceIDs pgtype.VarcharArray
	// var lastOnlineTime pgtype.Timestamptz
	var sID sql.NullInt64
	err := row.Scan(&userId, &username, &displayName, &avatarURL,
		&langTag, &location, &timezone,
		&metadata, &wallet, &email,
		&apple, &facebook, &facebookInstantGame,
		&google, &gamecenter, &steam,
		&customID, &edgeCount, &sID)
	if err != nil {
		return nil, err
	}

	account := &account{
		Account: api.Account{
			User: &api.User{
				Id:                    userId.String,
				Username:              username.String,
				DisplayName:           displayName.String,
				AvatarUrl:             avatarURL.String,
				LangTag:               langTag.String,
				Location:              location.String,
				Timezone:              timezone.String,
				Metadata:              metadata.String,
				AppleId:               apple.String,
				FacebookId:            facebook.String,
				FacebookInstantGameId: facebookInstantGame.String,
				GoogleId:              google.String,
				GamecenterId:          gamecenter.String,
				SteamId:               steam.String,
				EdgeCount:             int32(edgeCount),
			},
			Wallet:   wallet.String,
			Email:    email.String,
			CustomId: customID.String,
		},
		Sid: sID.Int64,
	}
	return account, nil
}
