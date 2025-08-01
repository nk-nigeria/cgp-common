// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        v3.21.12
// source: whot_game.proto

package proto

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type WhotCardSuit int32

const (
	WhotCardSuit_WHOT_SUIT_UNSPECIFIED WhotCardSuit = 0
	WhotCardSuit_WHOT_SUIT_CIRCLE      WhotCardSuit = 1
	WhotCardSuit_WHOT_SUIT_CROSS       WhotCardSuit = 2
	WhotCardSuit_WHOT_SUIT_STAR        WhotCardSuit = 3
	WhotCardSuit_WHOT_SUIT_SQUARE      WhotCardSuit = 4
	WhotCardSuit_WHOT_SUIT_TRIANGLE    WhotCardSuit = 5
)

// Enum value maps for WhotCardSuit.
var (
	WhotCardSuit_name = map[int32]string{
		0: "WHOT_SUIT_UNSPECIFIED",
		1: "WHOT_SUIT_CIRCLE",
		2: "WHOT_SUIT_CROSS",
		3: "WHOT_SUIT_STAR",
		4: "WHOT_SUIT_SQUARE",
		5: "WHOT_SUIT_TRIANGLE",
	}
	WhotCardSuit_value = map[string]int32{
		"WHOT_SUIT_UNSPECIFIED": 0,
		"WHOT_SUIT_CIRCLE":      1,
		"WHOT_SUIT_CROSS":       2,
		"WHOT_SUIT_STAR":        3,
		"WHOT_SUIT_SQUARE":      4,
		"WHOT_SUIT_TRIANGLE":    5,
	}
)

func (x WhotCardSuit) Enum() *WhotCardSuit {
	p := new(WhotCardSuit)
	*p = x
	return p
}

func (x WhotCardSuit) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (WhotCardSuit) Descriptor() protoreflect.EnumDescriptor {
	return file_whot_game_proto_enumTypes[0].Descriptor()
}

func (WhotCardSuit) Type() protoreflect.EnumType {
	return &file_whot_game_proto_enumTypes[0]
}

func (x WhotCardSuit) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use WhotCardSuit.Descriptor instead.
func (WhotCardSuit) EnumDescriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{0}
}

type WhotCardRank int32

const (
	WhotCardRank_WHOT_RANK_UNSPECIFIED WhotCardRank = 0
	WhotCardRank_WHOT_RANK_1           WhotCardRank = 1
	WhotCardRank_WHOT_RANK_2           WhotCardRank = 2
	WhotCardRank_WHOT_RANK_3           WhotCardRank = 3
	WhotCardRank_WHOT_RANK_4           WhotCardRank = 4
	WhotCardRank_WHOT_RANK_5           WhotCardRank = 5
	WhotCardRank_WHOT_RANK_7           WhotCardRank = 7
	WhotCardRank_WHOT_RANK_8           WhotCardRank = 8
	WhotCardRank_WHOT_RANK_10          WhotCardRank = 10
	WhotCardRank_WHOT_RANK_11          WhotCardRank = 11
	WhotCardRank_WHOT_RANK_12          WhotCardRank = 12
	WhotCardRank_WHOT_RANK_13          WhotCardRank = 13
	WhotCardRank_WHOT_RANK_14          WhotCardRank = 14
	WhotCardRank_WHOT_RANK_20          WhotCardRank = 20
)

// Enum value maps for WhotCardRank.
var (
	WhotCardRank_name = map[int32]string{
		0:  "WHOT_RANK_UNSPECIFIED",
		1:  "WHOT_RANK_1",
		2:  "WHOT_RANK_2",
		3:  "WHOT_RANK_3",
		4:  "WHOT_RANK_4",
		5:  "WHOT_RANK_5",
		7:  "WHOT_RANK_7",
		8:  "WHOT_RANK_8",
		10: "WHOT_RANK_10",
		11: "WHOT_RANK_11",
		12: "WHOT_RANK_12",
		13: "WHOT_RANK_13",
		14: "WHOT_RANK_14",
		20: "WHOT_RANK_20",
	}
	WhotCardRank_value = map[string]int32{
		"WHOT_RANK_UNSPECIFIED": 0,
		"WHOT_RANK_1":           1,
		"WHOT_RANK_2":           2,
		"WHOT_RANK_3":           3,
		"WHOT_RANK_4":           4,
		"WHOT_RANK_5":           5,
		"WHOT_RANK_7":           7,
		"WHOT_RANK_8":           8,
		"WHOT_RANK_10":          10,
		"WHOT_RANK_11":          11,
		"WHOT_RANK_12":          12,
		"WHOT_RANK_13":          13,
		"WHOT_RANK_14":          14,
		"WHOT_RANK_20":          20,
	}
)

func (x WhotCardRank) Enum() *WhotCardRank {
	p := new(WhotCardRank)
	*p = x
	return p
}

func (x WhotCardRank) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (WhotCardRank) Descriptor() protoreflect.EnumDescriptor {
	return file_whot_game_proto_enumTypes[1].Descriptor()
}

func (WhotCardRank) Type() protoreflect.EnumType {
	return &file_whot_game_proto_enumTypes[1]
}

func (x WhotCardRank) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use WhotCardRank.Descriptor instead.
func (WhotCardRank) EnumDescriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{1}
}

type WhotCardEvent int32

const (
	WhotCardEvent_WHOT_EVENT_NONE      WhotCardEvent = 0
	WhotCardEvent_WHOT_EVENT_PLAY      WhotCardEvent = 1
	WhotCardEvent_WHOT_EVENT_DRAW      WhotCardEvent = 2
	WhotCardEvent_WHOT_EVENT_PASS      WhotCardEvent = 3
	WhotCardEvent_WHOT_EVENT_AUTO_PLAY WhotCardEvent = 4
)

// Enum value maps for WhotCardEvent.
var (
	WhotCardEvent_name = map[int32]string{
		0: "WHOT_EVENT_NONE",
		1: "WHOT_EVENT_PLAY",
		2: "WHOT_EVENT_DRAW",
		3: "WHOT_EVENT_PASS",
		4: "WHOT_EVENT_AUTO_PLAY",
	}
	WhotCardEvent_value = map[string]int32{
		"WHOT_EVENT_NONE":      0,
		"WHOT_EVENT_PLAY":      1,
		"WHOT_EVENT_DRAW":      2,
		"WHOT_EVENT_PASS":      3,
		"WHOT_EVENT_AUTO_PLAY": 4,
	}
)

func (x WhotCardEvent) Enum() *WhotCardEvent {
	p := new(WhotCardEvent)
	*p = x
	return p
}

func (x WhotCardEvent) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (WhotCardEvent) Descriptor() protoreflect.EnumDescriptor {
	return file_whot_game_proto_enumTypes[2].Descriptor()
}

func (WhotCardEvent) Type() protoreflect.EnumType {
	return &file_whot_game_proto_enumTypes[2]
}

func (x WhotCardEvent) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use WhotCardEvent.Descriptor instead.
func (WhotCardEvent) EnumDescriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{2}
}

type WhotCardEffect int32

const (
	WhotCardEffect_EFFECT_NONE        WhotCardEffect = 0
	WhotCardEffect_HOLD_ON            WhotCardEffect = 1
	WhotCardEffect_PICK_TWO           WhotCardEffect = 2
	WhotCardEffect_PICK_THREE         WhotCardEffect = 3
	WhotCardEffect_SUSPENSION         WhotCardEffect = 4
	WhotCardEffect_GENERAL_MARKET     WhotCardEffect = 5
	WhotCardEffect_WHOT               WhotCardEffect = 6
	WhotCardEffect_CHOICE_SHAPE_GHOST WhotCardEffect = 7
)

// Enum value maps for WhotCardEffect.
var (
	WhotCardEffect_name = map[int32]string{
		0: "EFFECT_NONE",
		1: "HOLD_ON",
		2: "PICK_TWO",
		3: "PICK_THREE",
		4: "SUSPENSION",
		5: "GENERAL_MARKET",
		6: "WHOT",
		7: "CHOICE_SHAPE_GHOST",
	}
	WhotCardEffect_value = map[string]int32{
		"EFFECT_NONE":        0,
		"HOLD_ON":            1,
		"PICK_TWO":           2,
		"PICK_THREE":         3,
		"SUSPENSION":         4,
		"GENERAL_MARKET":     5,
		"WHOT":               6,
		"CHOICE_SHAPE_GHOST": 7,
	}
)

func (x WhotCardEffect) Enum() *WhotCardEffect {
	p := new(WhotCardEffect)
	*p = x
	return p
}

func (x WhotCardEffect) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (WhotCardEffect) Descriptor() protoreflect.EnumDescriptor {
	return file_whot_game_proto_enumTypes[3].Descriptor()
}

func (WhotCardEffect) Type() protoreflect.EnumType {
	return &file_whot_game_proto_enumTypes[3]
}

func (x WhotCardEffect) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use WhotCardEffect.Descriptor instead.
func (WhotCardEffect) EnumDescriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{3}
}

type WhotCard struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Rank          WhotCardRank           `protobuf:"varint,1,opt,name=rank,proto3,enum=proto.WhotCardRank" json:"rank,omitempty"`
	Suit          WhotCardSuit           `protobuf:"varint,2,opt,name=suit,proto3,enum=proto.WhotCardSuit" json:"suit,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *WhotCard) Reset() {
	*x = WhotCard{}
	mi := &file_whot_game_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *WhotCard) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WhotCard) ProtoMessage() {}

func (x *WhotCard) ProtoReflect() protoreflect.Message {
	mi := &file_whot_game_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WhotCard.ProtoReflect.Descriptor instead.
func (*WhotCard) Descriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{0}
}

func (x *WhotCard) GetRank() WhotCardRank {
	if x != nil {
		return x.Rank
	}
	return WhotCardRank_WHOT_RANK_UNSPECIFIED
}

func (x *WhotCard) GetSuit() WhotCardSuit {
	if x != nil {
		return x.Suit
	}
	return WhotCardSuit_WHOT_SUIT_UNSPECIFIED
}

type UpdateTurn struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	UserId        string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Countdown     int64                  `protobuf:"varint,2,opt,name=countdown,proto3" json:"countdown,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateTurn) Reset() {
	*x = UpdateTurn{}
	mi := &file_whot_game_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateTurn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTurn) ProtoMessage() {}

func (x *UpdateTurn) ProtoReflect() protoreflect.Message {
	mi := &file_whot_game_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTurn.ProtoReflect.Descriptor instead.
func (*UpdateTurn) Descriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateTurn) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *UpdateTurn) GetCountdown() int64 {
	if x != nil {
		return x.Countdown
	}
	return 0
}

type UpdateCardState struct {
	state            protoimpl.MessageState `protogen:"open.v1"`
	UserId           string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Event            WhotCardEvent          `protobuf:"varint,2,opt,name=event,proto3,enum=proto.WhotCardEvent" json:"event,omitempty"`
	PlayedCard       *WhotCard              `protobuf:"bytes,3,opt,name=played_card,json=playedCard,proto3" json:"played_card,omitempty"`
	TopCard          *WhotCard              `protobuf:"bytes,4,opt,name=top_card,json=topCard,proto3" json:"top_card,omitempty"`
	CardsAfter       []*WhotCard            `protobuf:"bytes,5,rep,name=cards_after,json=cardsAfter,proto3" json:"cards_after,omitempty"`
	Effect           WhotCardEffect         `protobuf:"varint,6,opt,name=effect,proto3,enum=proto.WhotCardEffect" json:"effect,omitempty"`
	PickPenalty      int32                  `protobuf:"varint,7,opt,name=pick_penalty,json=pickPenalty,proto3" json:"pick_penalty,omitempty"`
	TargetUserId     string                 `protobuf:"bytes,8,opt,name=target_user_id,json=targetUserId,proto3" json:"target_user_id,omitempty"`
	IsAutoPlay       bool                   `protobuf:"varint,9,opt,name=is_auto_play,json=isAutoPlay,proto3" json:"is_auto_play,omitempty"`
	DeckCount        int32                  `protobuf:"varint,10,opt,name=deck_count,json=deckCount,proto3" json:"deck_count,omitempty"`
	PlayerCardCounts map[string]int32       `protobuf:"bytes,11,rep,name=player_card_counts,json=playerCardCounts,proto3" json:"player_card_counts,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"varint,2,opt,name=value"`
	unknownFields    protoimpl.UnknownFields
	sizeCache        protoimpl.SizeCache
}

func (x *UpdateCardState) Reset() {
	*x = UpdateCardState{}
	mi := &file_whot_game_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateCardState) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateCardState) ProtoMessage() {}

func (x *UpdateCardState) ProtoReflect() protoreflect.Message {
	mi := &file_whot_game_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateCardState.ProtoReflect.Descriptor instead.
func (*UpdateCardState) Descriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateCardState) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *UpdateCardState) GetEvent() WhotCardEvent {
	if x != nil {
		return x.Event
	}
	return WhotCardEvent_WHOT_EVENT_NONE
}

func (x *UpdateCardState) GetPlayedCard() *WhotCard {
	if x != nil {
		return x.PlayedCard
	}
	return nil
}

func (x *UpdateCardState) GetTopCard() *WhotCard {
	if x != nil {
		return x.TopCard
	}
	return nil
}

func (x *UpdateCardState) GetCardsAfter() []*WhotCard {
	if x != nil {
		return x.CardsAfter
	}
	return nil
}

func (x *UpdateCardState) GetEffect() WhotCardEffect {
	if x != nil {
		return x.Effect
	}
	return WhotCardEffect_EFFECT_NONE
}

func (x *UpdateCardState) GetPickPenalty() int32 {
	if x != nil {
		return x.PickPenalty
	}
	return 0
}

func (x *UpdateCardState) GetTargetUserId() string {
	if x != nil {
		return x.TargetUserId
	}
	return ""
}

func (x *UpdateCardState) GetIsAutoPlay() bool {
	if x != nil {
		return x.IsAutoPlay
	}
	return false
}

func (x *UpdateCardState) GetDeckCount() int32 {
	if x != nil {
		return x.DeckCount
	}
	return 0
}

func (x *UpdateCardState) GetPlayerCardCounts() map[string]int32 {
	if x != nil {
		return x.PlayerCardCounts
	}
	return nil
}

type WhotPlayerResult struct {
	state          protoimpl.MessageState `protogen:"open.v1"`
	UserId         string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	TotalPoints    int64                  `protobuf:"varint,2,opt,name=total_points,json=totalPoints,proto3" json:"total_points,omitempty"`
	WinFactor      float64                `protobuf:"fixed64,3,opt,name=win_factor,json=winFactor,proto3" json:"win_factor,omitempty"`
	IsWinner       bool                   `protobuf:"varint,4,opt,name=is_winner,json=isWinner,proto3" json:"is_winner,omitempty"`
	RemainingCards []*WhotCard            `protobuf:"bytes,5,rep,name=remaining_cards,json=remainingCards,proto3" json:"remaining_cards,omitempty"`
	unknownFields  protoimpl.UnknownFields
	sizeCache      protoimpl.SizeCache
}

func (x *WhotPlayerResult) Reset() {
	*x = WhotPlayerResult{}
	mi := &file_whot_game_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *WhotPlayerResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WhotPlayerResult) ProtoMessage() {}

func (x *WhotPlayerResult) ProtoReflect() protoreflect.Message {
	mi := &file_whot_game_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WhotPlayerResult.ProtoReflect.Descriptor instead.
func (*WhotPlayerResult) Descriptor() ([]byte, []int) {
	return file_whot_game_proto_rawDescGZIP(), []int{3}
}

func (x *WhotPlayerResult) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *WhotPlayerResult) GetTotalPoints() int64 {
	if x != nil {
		return x.TotalPoints
	}
	return 0
}

func (x *WhotPlayerResult) GetWinFactor() float64 {
	if x != nil {
		return x.WinFactor
	}
	return 0
}

func (x *WhotPlayerResult) GetIsWinner() bool {
	if x != nil {
		return x.IsWinner
	}
	return false
}

func (x *WhotPlayerResult) GetRemainingCards() []*WhotCard {
	if x != nil {
		return x.RemainingCards
	}
	return nil
}

var File_whot_game_proto protoreflect.FileDescriptor

const file_whot_game_proto_rawDesc = "" +
	"\n" +
	"\x0fwhot_game.proto\x12\x05proto\"\\\n" +
	"\bWhotCard\x12'\n" +
	"\x04rank\x18\x01 \x01(\x0e2\x13.proto.WhotCardRankR\x04rank\x12'\n" +
	"\x04suit\x18\x02 \x01(\x0e2\x13.proto.WhotCardSuitR\x04suit\"C\n" +
	"\n" +
	"UpdateTurn\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12\x1c\n" +
	"\tcountdown\x18\x02 \x01(\x03R\tcountdown\"\xc0\x04\n" +
	"\x0fUpdateCardState\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12*\n" +
	"\x05event\x18\x02 \x01(\x0e2\x14.proto.WhotCardEventR\x05event\x120\n" +
	"\vplayed_card\x18\x03 \x01(\v2\x0f.proto.WhotCardR\n" +
	"playedCard\x12*\n" +
	"\btop_card\x18\x04 \x01(\v2\x0f.proto.WhotCardR\atopCard\x120\n" +
	"\vcards_after\x18\x05 \x03(\v2\x0f.proto.WhotCardR\n" +
	"cardsAfter\x12-\n" +
	"\x06effect\x18\x06 \x01(\x0e2\x15.proto.WhotCardEffectR\x06effect\x12!\n" +
	"\fpick_penalty\x18\a \x01(\x05R\vpickPenalty\x12$\n" +
	"\x0etarget_user_id\x18\b \x01(\tR\ftargetUserId\x12 \n" +
	"\fis_auto_play\x18\t \x01(\bR\n" +
	"isAutoPlay\x12\x1d\n" +
	"\n" +
	"deck_count\x18\n" +
	" \x01(\x05R\tdeckCount\x12Z\n" +
	"\x12player_card_counts\x18\v \x03(\v2,.proto.UpdateCardState.PlayerCardCountsEntryR\x10playerCardCounts\x1aC\n" +
	"\x15PlayerCardCountsEntry\x12\x10\n" +
	"\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n" +
	"\x05value\x18\x02 \x01(\x05R\x05value:\x028\x01\"\xc4\x01\n" +
	"\x10WhotPlayerResult\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12!\n" +
	"\ftotal_points\x18\x02 \x01(\x03R\vtotalPoints\x12\x1d\n" +
	"\n" +
	"win_factor\x18\x03 \x01(\x01R\twinFactor\x12\x1b\n" +
	"\tis_winner\x18\x04 \x01(\bR\bisWinner\x128\n" +
	"\x0fremaining_cards\x18\x05 \x03(\v2\x0f.proto.WhotCardR\x0eremainingCards*\x96\x01\n" +
	"\fWhotCardSuit\x12\x19\n" +
	"\x15WHOT_SUIT_UNSPECIFIED\x10\x00\x12\x14\n" +
	"\x10WHOT_SUIT_CIRCLE\x10\x01\x12\x13\n" +
	"\x0fWHOT_SUIT_CROSS\x10\x02\x12\x12\n" +
	"\x0eWHOT_SUIT_STAR\x10\x03\x12\x14\n" +
	"\x10WHOT_SUIT_SQUARE\x10\x04\x12\x16\n" +
	"\x12WHOT_SUIT_TRIANGLE\x10\x05*\x8c\x02\n" +
	"\fWhotCardRank\x12\x19\n" +
	"\x15WHOT_RANK_UNSPECIFIED\x10\x00\x12\x0f\n" +
	"\vWHOT_RANK_1\x10\x01\x12\x0f\n" +
	"\vWHOT_RANK_2\x10\x02\x12\x0f\n" +
	"\vWHOT_RANK_3\x10\x03\x12\x0f\n" +
	"\vWHOT_RANK_4\x10\x04\x12\x0f\n" +
	"\vWHOT_RANK_5\x10\x05\x12\x0f\n" +
	"\vWHOT_RANK_7\x10\a\x12\x0f\n" +
	"\vWHOT_RANK_8\x10\b\x12\x10\n" +
	"\fWHOT_RANK_10\x10\n" +
	"\x12\x10\n" +
	"\fWHOT_RANK_11\x10\v\x12\x10\n" +
	"\fWHOT_RANK_12\x10\f\x12\x10\n" +
	"\fWHOT_RANK_13\x10\r\x12\x10\n" +
	"\fWHOT_RANK_14\x10\x0e\x12\x10\n" +
	"\fWHOT_RANK_20\x10\x14*}\n" +
	"\rWhotCardEvent\x12\x13\n" +
	"\x0fWHOT_EVENT_NONE\x10\x00\x12\x13\n" +
	"\x0fWHOT_EVENT_PLAY\x10\x01\x12\x13\n" +
	"\x0fWHOT_EVENT_DRAW\x10\x02\x12\x13\n" +
	"\x0fWHOT_EVENT_PASS\x10\x03\x12\x18\n" +
	"\x14WHOT_EVENT_AUTO_PLAY\x10\x04*\x92\x01\n" +
	"\x0eWhotCardEffect\x12\x0f\n" +
	"\vEFFECT_NONE\x10\x00\x12\v\n" +
	"\aHOLD_ON\x10\x01\x12\f\n" +
	"\bPICK_TWO\x10\x02\x12\x0e\n" +
	"\n" +
	"PICK_THREE\x10\x03\x12\x0e\n" +
	"\n" +
	"SUSPENSION\x10\x04\x12\x12\n" +
	"\x0eGENERAL_MARKET\x10\x05\x12\b\n" +
	"\x04WHOT\x10\x06\x12\x16\n" +
	"\x12CHOICE_SHAPE_GHOST\x10\aB(Z&github.com/nk-nigeria/cgp-common/protob\x06proto3"

var (
	file_whot_game_proto_rawDescOnce sync.Once
	file_whot_game_proto_rawDescData []byte
)

func file_whot_game_proto_rawDescGZIP() []byte {
	file_whot_game_proto_rawDescOnce.Do(func() {
		file_whot_game_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_whot_game_proto_rawDesc), len(file_whot_game_proto_rawDesc)))
	})
	return file_whot_game_proto_rawDescData
}

var file_whot_game_proto_enumTypes = make([]protoimpl.EnumInfo, 4)
var file_whot_game_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_whot_game_proto_goTypes = []any{
	(WhotCardSuit)(0),        // 0: proto.WhotCardSuit
	(WhotCardRank)(0),        // 1: proto.WhotCardRank
	(WhotCardEvent)(0),       // 2: proto.WhotCardEvent
	(WhotCardEffect)(0),      // 3: proto.WhotCardEffect
	(*WhotCard)(nil),         // 4: proto.WhotCard
	(*UpdateTurn)(nil),       // 5: proto.UpdateTurn
	(*UpdateCardState)(nil),  // 6: proto.UpdateCardState
	(*WhotPlayerResult)(nil), // 7: proto.WhotPlayerResult
	nil,                      // 8: proto.UpdateCardState.PlayerCardCountsEntry
}
var file_whot_game_proto_depIdxs = []int32{
	1, // 0: proto.WhotCard.rank:type_name -> proto.WhotCardRank
	0, // 1: proto.WhotCard.suit:type_name -> proto.WhotCardSuit
	2, // 2: proto.UpdateCardState.event:type_name -> proto.WhotCardEvent
	4, // 3: proto.UpdateCardState.played_card:type_name -> proto.WhotCard
	4, // 4: proto.UpdateCardState.top_card:type_name -> proto.WhotCard
	4, // 5: proto.UpdateCardState.cards_after:type_name -> proto.WhotCard
	3, // 6: proto.UpdateCardState.effect:type_name -> proto.WhotCardEffect
	8, // 7: proto.UpdateCardState.player_card_counts:type_name -> proto.UpdateCardState.PlayerCardCountsEntry
	4, // 8: proto.WhotPlayerResult.remaining_cards:type_name -> proto.WhotCard
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_whot_game_proto_init() }
func file_whot_game_proto_init() {
	if File_whot_game_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_whot_game_proto_rawDesc), len(file_whot_game_proto_rawDesc)),
			NumEnums:      4,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_whot_game_proto_goTypes,
		DependencyIndexes: file_whot_game_proto_depIdxs,
		EnumInfos:         file_whot_game_proto_enumTypes,
		MessageInfos:      file_whot_game_proto_msgTypes,
	}.Build()
	File_whot_game_proto = out.File
	file_whot_game_proto_goTypes = nil
	file_whot_game_proto_depIdxs = nil
}
