package lib

import (
	"context"
	"strconv"
	"time"

	"github.com/ciaolink-game-platform/cgp-common/define"
	"github.com/heroiclabs/nakama-common/api"
	"github.com/heroiclabs/nakama-common/runtime"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func EmitNkEvent(ctx context.Context, eventNk define.NakEvent, nk runtime.NakamaModule, userId string, s *entity.MatchState) {
	matchId, _ := ctx.Value(runtime.RUNTIME_CTX_MATCH_ID).(string)
	nk.Event(ctx, &api.Event{
		Name:      string(eventNk),
		Timestamp: timestamppb.Now(),
		Properties: map[string]string{
			"user_id":        userId,
			"game_code":      s.Label.Code,
			"end_match_unix": strconv.FormatInt(time.Now().Unix(), 10),
			"match_id":       matchId,
			"mcb":            strconv.FormatInt(int64(s.Label.Bet), 10),
		},
	})
}
