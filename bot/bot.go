package bot

import (
	"context"
	"time"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"

	"github.com/heroiclabs/nakama-common/runtime"
)

// const BotUIdPrefix =
var BotUids = []string{"003e8f8a-986d-4528-83f8-c19918365324"}

func LoadBotsInfo(ctx context.Context, nk runtime.NakamaModule, uids ...string) error {
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
	id   string
	Tick int
	turn *botTurn
}

func NewBotPresences(numBots int) []*BotPresence {
	num := 0
	ml := make([]*BotPresence, 0, numBots)
	for _, uuid := range BotUids {
		num++
		b := &BotPresence{
			id:   uuid,
			turn: NewBotTurn(0, 0, nil),
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
	return b.id
}

// GetUsername implements runtime.Presence.
func (*BotPresence) GetUsername() string {
	return "bot-player"
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
