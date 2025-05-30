package lib

import (
	"context"
	"encoding/json"
	"strings"

	"github.com/heroiclabs/nakama-common/runtime"
)

var SystemUid = "00000000-0000-0000-0000-000000000000"

type WalletAction string

const (
	WalletActionBankTopup   WalletAction = "bank_topup"
	WalletActionDailyReward WalletAction = "daily_reward"
	WalletActionFreeChip    WalletAction = "free_chip"
	WalletActionGiftCode    WalletAction = "gift_code"
	WalletActionIAPTopUp    WalletAction = "iap_topup"
	WalletActionReferReward WalletAction = "refer_reward"
	WalletActionUserGift    WalletAction = "user_gift"
	WalletActionTipInGame   WalletAction = "tip_ingame"
)

type Wallet struct {
	UserId      string
	Chips       int64 `json:"chips"`
	ChipsInBank int64 `json:"chipsInBank"`
}

func ParseWallet(payload string) (Wallet, error) {
	w := Wallet{}
	err := json.Unmarshal([]byte(payload), &w)
	return w, err
}

func ReadWalletUsers(ctx context.Context, nk runtime.NakamaModule, logger runtime.Logger, userIds ...string) ([]Wallet, error) {
	// logger.Info("ReadWalletUsers  userIds %s", strings.Join(userIds, ", "))
	accounts, err := nk.AccountsGetId(ctx, userIds)
	if err != nil {
		logger.Error("Error when read list account, error: %s, list userId %s",
			err.Error(), strings.Join(userIds, ","))
		return nil, err
	}
	walletsByUser := make(map[string]Wallet)
	wallets := make([]Wallet, 0)
	for _, ac := range accounts {
		w, e := ParseWallet(ac.Wallet)
		if e != nil {
			logger.Error("Error when parse wallet user %s, error: %s", ac.User.Id, e.Error())
			return wallets, err
		}
		w.UserId = ac.User.Id
		// wallets = append(wallets, w)
		walletsByUser[w.UserId] = w
	}
	// sort wallet same order with list user
	for _, userId := range userIds {
		wallets = append(wallets, walletsByUser[userId])
	}
	return wallets, nil
}

func ReadWalletUser(ctx context.Context, nk runtime.NakamaModule, logger runtime.Logger, userId string) (Wallet, error) {
	// logger.Info("Read wauserIds %v", nk, ctx, userIds)
	account, err := nk.AccountGetId(ctx, userId)
	if err != nil {
		logger.Error("Error when read account, error: %s, userId %s",
			err.Error(), userId)
		return Wallet{}, err
	}
	w, e := ParseWallet(account.Wallet)
	return w, e
}
