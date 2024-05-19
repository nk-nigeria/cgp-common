package lib

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"strings"
	"time"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
	"github.com/ciaolink-game-platform/cgp-common/utilities"
	"google.golang.org/protobuf/encoding/protojson"

	"github.com/heroiclabs/nakama-common/api"
)

type MyAccount struct {
	api.Account
	LastOnlineTimeUnix int64
	Sid                int64
}

func GetAccounts(ctx context.Context, db *sql.DB, userIds ...string) ([]*MyAccount, error) {
	if len(userIds) == 0 {
		return make([]*MyAccount, 0), nil
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
	ml := make([]*MyAccount, 0)
	for rows.Next() {
		account, err := scanAccount(rows)
		if err != nil {
			continue
		}
		ml = append(ml, account)
	}
	return ml, nil
}

func GetAccount(ctx context.Context, db *sql.DB, userId string) (*MyAccount, error) {
	ml, err := GetAccounts(ctx, db, userId)
	if err != nil {
		return nil, err
	}
	if len(ml) == 0 {
		return nil, errors.New("not-found")
	}
	return ml[0], nil
}

func GetProfileUser(ctx context.Context, db *sql.DB, userID string) (*pb.Profile, map[string]interface{}, error) {
	// account, err := nk.AccountGetId(ctx, userID)
	account, err := GetAccount(ctx, db, userID)
	if err != nil {
		return nil, nil, err
	}
	var metadata map[string]interface{}
	if err := json.Unmarshal([]byte(account.User.GetMetadata()), &metadata); err != nil {
		return nil, nil, errors.New("Corrupted user metadata.")
	}

	user := account.User
	// todo read account chip, bank chip
	profile := pb.Profile{
		UserId:      user.GetId(),
		UserName:    user.GetUsername(),
		LangTag:     user.GetLangTag(),
		DisplayName: user.GetDisplayName(),
		Status:      utilities.InterfaceToString(metadata["status"]),
		RefCode:     utilities.InterfaceToString(metadata["ref_code"]),
		AppConfig:   utilities.InterfaceToString(metadata["app_config"]),

		AvatarId:           utilities.InterfaceToString(metadata["avatar_id"]),
		VipLevel:           utilities.ToInt64(metadata["vip_level"], 0),
		LastOnlineTimeUnix: utilities.ToInt64(metadata["last_online_time_unix"], 0),
		// CreateTimeUnix:     user.GetCreateTime().Seconds,
		// LangAvailables:     []string{"en", "phi"},
	}
	playingMatchJson := utilities.InterfaceToString(metadata["playing_in_match"])
	profile.PlayingMatch = &pb.PlayingMatch{}
	if len(playingMatchJson) > 0 {
		protojson.Unmarshal([]byte(playingMatchJson), profile.PlayingMatch)
	}

	profile.LangAvailables = append(profile.LangAvailables,
		&pb.LangCode{
			IsoCode:     "en-US",
			DisplayName: "English",
		},
		&pb.LangCode{
			IsoCode:     "tl-PH",
			DisplayName: "Philippines",
		},
	)
	if profile.DisplayName == "" {
		profile.DisplayName = profile.UserName
	}

	if strings.HasPrefix(profile.UserName, "CGPD") {
		profile.Registrable = true
	} else {
		profile.Registrable = false
	}
	if account.GetWallet() != "" {
		wallet, err := ParseWallet(account.GetWallet())
		if err == nil {
			profile.AccountChip = wallet.Chips
			profile.BankChip = wallet.ChipsInBank
		}
	}

	if profile.RefCode == "" {
		profile.RemainTimeInputRefCode = utilities.MaxIn64(int64(time.Until(time.Unix(profile.CreateTimeUnix+7*86400, 0)).Seconds()), 0)
	}
	profile.UserSid = account.Sid
	return &profile, metadata, nil
}

type DBScan interface {
	Scan(dest ...any) error
}

func scanAccount(row DBScan) (*MyAccount, error) {
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

	account := &MyAccount{
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
