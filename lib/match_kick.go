package lib

import (
	"context"
	"encoding/json"
	"strings"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
	"github.com/heroiclabs/nakama-common/runtime"
	"google.golang.org/protobuf/encoding/protojson"
)

var marshaler = &protojson.MarshalOptions{
	UseEnumNumbers:  true,
	EmitUnpopulated: true,
}

type Wallet struct {
	UserId string
	Chips  int64 `json:"chips"`
}

func ParseWallet(payload string) (Wallet, error) {
	w := Wallet{}
	err := json.Unmarshal([]byte(payload), &w)
	return w, err
}

func ReadWalletUsers(ctx context.Context, nk runtime.NakamaModule, logger runtime.Logger, userIds ...string) ([]Wallet, error) {
	logger.Info("ReadWalletUsers  userIds %s", strings.Join(userIds, ", "))
	accounts, err := nk.AccountsGetId(ctx, userIds)
	if err != nil {
		logger.Error("Error when read list account, error: %s, list userId %s",
			err.Error(), strings.Join(userIds, ","))
		return nil, err
	}
	wallets := make([]Wallet, 0)
	for _, ac := range accounts {
		w, e := ParseWallet(ac.Wallet)
		if e != nil {
			logger.Error("Error when parse wallet user %s, error: %s", ac.User.Id, e.Error())
			return wallets, err
		}
		w.UserId = ac.User.Id
		wallets = append(wallets, w)
	}
	return wallets, nil
}

func MatchKick(ctx context.Context,
	logger runtime.Logger,
	nk runtime.NakamaModule,
	dispatcher runtime.MatchDispatcher,
	agLeave int64,
	precenses ...runtime.Presence,
) {
	if len(precenses) == 0 {
		return
	}
	if agLeave <= 0 {
		return
	}
	userIds := make([]string, 0)
	precensesById := make(map[string]runtime.Presence)
	for _, precense := range precenses {
		userIds = append(userIds, precense.GetUserId())
		v := precense
		precensesById[precense.GetUserId()] = v
	}
	wallets, err := ReadWalletUsers(ctx, nk, logger, userIds...)
	if err != nil {
		logger.WithField("err", err.Error()).Error("load wallets failed")
		return
	}
	presencesKick := make([]runtime.Presence, 0)
	minChipRequire := agLeave
	for _, wallet := range wallets {
		chip := wallet.Chips
		if chip < minChipRequire {
			presencesKick = append(presencesKick, precensesById[wallet.UserId])
		}
	}
	if len(presencesKick) == 0 {
		return
	}
	// notify
	userIdsKick := make([]string, 0)
	for _, precense := range presencesKick {
		userIdsKick = append(userIdsKick, precense.GetUserId())
	}
	// send notify
	{
		updateDesk := &pb.BlackjackUpdateDesk{
			IsInsuranceTurnEnter: false,
			IsNewTurn:            false,
			IsUpdateBet:          true,
			IsUpdateLegalAction:  false,
			IsSplitHand:          false,
			Bet:                  nil,
		}
		updateDesk.Error = &pb.Error{
			Code:      int64(pb.ErrorType_ERROR_TYPE_CHIP_NOT_ENOUGH),
			Error:     pb.ErrorType_ERROR_TYPE_CHIP_NOT_ENOUGH.String(),
			ErrorType: pb.ErrorType_ERROR_TYPE_CHIP_NOT_ENOUGH,
		}
		dataJson, _ := marshaler.Marshal(updateDesk)
		dispatcher.BroadcastMessage(int64(pb.OpCodeUpdate_OPCODE_UPDATE_TABLE),
			dataJson, presencesKick, nil, true)
	}
	dispatcher.MatchKick(presencesKick)
}
