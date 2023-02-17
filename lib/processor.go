package lib

import (
	"context"
	"database/sql"

	"github.com/heroiclabs/nakama-common/runtime"
	"google.golang.org/protobuf/proto"
)

type Processor interface {
	ProcessNewGame(logger runtime.Logger,
		dispatcher runtime.MatchDispatcher,
		matchState interface{})

	NotifyUpdateGameState(
		logger runtime.Logger,
		dispatcher runtime.MatchDispatcher,
		updateState proto.Message,
		matchState interface{},
	)

	ProcessApplyPresencesLeave(ctx context.Context,
		logger runtime.Logger,
		nk runtime.NakamaModule,
		db *sql.DB,
		dispatcher runtime.MatchDispatcher,
		matchState interface{},
	)

	ProcessFinishGame(ctx context.Context,
		logger runtime.Logger,
		nk runtime.NakamaModule,
		db *sql.DB,
		dispatcher runtime.MatchDispatcher,
		matchState interface{},
	)

	ProcessGame(ctx context.Context,
		logger runtime.Logger,
		nk runtime.NakamaModule,
		db *sql.DB,
		dispatcher runtime.MatchDispatcher,
		messages []runtime.MatchData,
		matchState interface{},
	)

	ProcessPresencesJoin(ctx context.Context,
		logger runtime.Logger,
		nk runtime.NakamaModule,
		db *sql.DB,
		dispatcher runtime.MatchDispatcher,
		presences []runtime.Presence,
		matchState interface{},
	)
	ProcessPresencesLeave(ctx context.Context,
		logger runtime.Logger,
		nk runtime.NakamaModule,
		db *sql.DB,
		dispatcher runtime.MatchDispatcher,
		presences []runtime.Presence,
		matchState interface{},
	)
	ProcessPresencesLeavePending(ctx context.Context,
		logger runtime.Logger,
		nk runtime.NakamaModule,
		dispatcher runtime.MatchDispatcher,
		presences []runtime.Presence,
		matchState interface{},
	)
}
