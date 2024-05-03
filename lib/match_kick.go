package lib

import (
	"context"
	"errors"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
	"github.com/heroiclabs/nakama-common/runtime"
	"google.golang.org/protobuf/encoding/protojson"
)

var marshaler = &protojson.MarshalOptions{
	UseEnumNumbers:  true,
	EmitUnpopulated: true,
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
	dispatcher.BroadcastMessage(int64(pb.OpCodeUpdate_OPCODE_KICK_OFF_THE_TABLE),
		nil, presencesKick, nil, true)
	dispatcher.MatchKick(presencesKick)
}

func NotifyNotEnoughChip(
	ctx context.Context,
	nk runtime.NakamaModule,
	logger runtime.Logger,
	dispatcher runtime.MatchDispatcher,
	precenses ...runtime.Presence) {
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
		dataJson, precenses, nil, true)
}

func CheckEnougChip(
	ctx context.Context,
	nk runtime.NakamaModule,
	logger runtime.Logger,
	dispatcher runtime.MatchDispatcher,
	chipRequire int64,
	presence runtime.Presence) error {
	userId := presence.GetUserId()
	wallets, err := ReadWalletUsers(ctx, nk, logger, userId)
	if err != nil {
		return err
	}
	if len(wallets) == 0 {
		return nil
	}
	wallet := wallets[0]
	if wallet.Chips < chipRequire {
		NotifyNotEnoughChip(ctx, nk, logger, dispatcher, presence)
		return errors.New(pb.ErrorType_ERROR_TYPE_CHIP_NOT_ENOUGH.String())
	}
	return nil
}

func TipInGame(
	ctx context.Context, nk runtime.NakamaModule, logger runtime.Logger,
	dispatcher runtime.MatchDispatcher, chipRequire int64, userId string, chipsTip int64,
) error {
	metadata := make(map[string]interface{})
	metadata["action"] = WalletActionTipInGame
	metadata["sender"] = userId
	metadata["recv"] = SystemUid
	changeset := map[string]int64{}
	changeset["chips"] = chipsTip
	_, _, err := nk.WalletUpdate(ctx, userId, changeset, metadata, true)
	return err
}
