// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        v3.21.12
// source: dragontiger_api.proto

package api

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

type DragonTigerBetCell int32

const (
	DragonTigerBetCell_CELL_UNSPECIFIED  DragonTigerBetCell = 0 // unuse
	DragonTigerBetCell_CELL_DRAGON       DragonTigerBetCell = 1
	DragonTigerBetCell_CELL_TIGER        DragonTigerBetCell = 2
	DragonTigerBetCell_CELL_TIE          DragonTigerBetCell = 3
	DragonTigerBetCell_CELL_DRAGON_SMALL DragonTigerBetCell = 4
	DragonTigerBetCell_CELL_DRAGON_BIG   DragonTigerBetCell = 5
	DragonTigerBetCell_CELL_TIGER_SMALL  DragonTigerBetCell = 6
	DragonTigerBetCell_CELL_TIGER_BIG    DragonTigerBetCell = 7
)

// Enum value maps for DragonTigerBetCell.
var (
	DragonTigerBetCell_name = map[int32]string{
		0: "CELL_UNSPECIFIED",
		1: "CELL_DRAGON",
		2: "CELL_TIGER",
		3: "CELL_TIE",
		4: "CELL_DRAGON_SMALL",
		5: "CELL_DRAGON_BIG",
		6: "CELL_TIGER_SMALL",
		7: "CELL_TIGER_BIG",
	}
	DragonTigerBetCell_value = map[string]int32{
		"CELL_UNSPECIFIED":  0,
		"CELL_DRAGON":       1,
		"CELL_TIGER":        2,
		"CELL_TIE":          3,
		"CELL_DRAGON_SMALL": 4,
		"CELL_DRAGON_BIG":   5,
		"CELL_TIGER_SMALL":  6,
		"CELL_TIGER_BIG":    7,
	}
)

func (x DragonTigerBetCell) Enum() *DragonTigerBetCell {
	p := new(DragonTigerBetCell)
	*p = x
	return p
}

func (x DragonTigerBetCell) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (DragonTigerBetCell) Descriptor() protoreflect.EnumDescriptor {
	return file_dragontiger_api_proto_enumTypes[0].Descriptor()
}

func (DragonTigerBetCell) Type() protoreflect.EnumType {
	return &file_dragontiger_api_proto_enumTypes[0]
}

func (x DragonTigerBetCell) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use DragonTigerBetCell.Descriptor instead.
func (DragonTigerBetCell) EnumDescriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{0}
}

type DragonTigerBetAction int32

const (
	DragonTigerBetAction_NORMAL_BET DragonTigerBetAction = 0
	DragonTigerBetAction_RE_BET     DragonTigerBetAction = 1
	DragonTigerBetAction_DOUBLE_BET DragonTigerBetAction = 2
)

// Enum value maps for DragonTigerBetAction.
var (
	DragonTigerBetAction_name = map[int32]string{
		0: "NORMAL_BET",
		1: "RE_BET",
		2: "DOUBLE_BET",
	}
	DragonTigerBetAction_value = map[string]int32{
		"NORMAL_BET": 0,
		"RE_BET":     1,
		"DOUBLE_BET": 2,
	}
)

func (x DragonTigerBetAction) Enum() *DragonTigerBetAction {
	p := new(DragonTigerBetAction)
	*p = x
	return p
}

func (x DragonTigerBetAction) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (DragonTigerBetAction) Descriptor() protoreflect.EnumDescriptor {
	return file_dragontiger_api_proto_enumTypes[1].Descriptor()
}

func (DragonTigerBetAction) Type() protoreflect.EnumType {
	return &file_dragontiger_api_proto_enumTypes[1]
}

func (x DragonTigerBetAction) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use DragonTigerBetAction.Descriptor instead.
func (DragonTigerBetAction) EnumDescriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{1}
}

type DragonTigerBet struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Chips         int64                  `protobuf:"varint,2,opt,name=chips,proto3" json:"chips,omitempty"`
	Cell          DragonTigerBetCell     `protobuf:"varint,3,opt,name=cell,proto3,enum=api.DragonTigerBetCell" json:"cell,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerBet) Reset() {
	*x = DragonTigerBet{}
	mi := &file_dragontiger_api_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerBet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerBet) ProtoMessage() {}

func (x *DragonTigerBet) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerBet.ProtoReflect.Descriptor instead.
func (*DragonTigerBet) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{0}
}

func (x *DragonTigerBet) GetChips() int64 {
	if x != nil {
		return x.Chips
	}
	return 0
}

func (x *DragonTigerBet) GetCell() DragonTigerBetCell {
	if x != nil {
		return x.Cell
	}
	return DragonTigerBetCell_CELL_UNSPECIFIED
}

type DragonTigerBetResult struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Bet           *DragonTigerBet        `protobuf:"bytes,1,opt,name=bet,proto3" json:"bet,omitempty"`
	IsWin         bool                   `protobuf:"varint,2,opt,name=is_win,json=isWin,proto3" json:"is_win,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerBetResult) Reset() {
	*x = DragonTigerBetResult{}
	mi := &file_dragontiger_api_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerBetResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerBetResult) ProtoMessage() {}

func (x *DragonTigerBetResult) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerBetResult.ProtoReflect.Descriptor instead.
func (*DragonTigerBetResult) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{1}
}

func (x *DragonTigerBetResult) GetBet() *DragonTigerBet {
	if x != nil {
		return x.Bet
	}
	return nil
}

func (x *DragonTigerBetResult) GetIsWin() bool {
	if x != nil {
		return x.IsWin
	}
	return false
}

// client->server when user request bet
// if action_type is RE_BET or DOUBLE_BET, set "bets" as an empty array
type DragonTigerPlayerBets struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	UserId        string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	ActionType    DragonTigerBetAction   `protobuf:"varint,2,opt,name=action_type,json=actionType,proto3,enum=api.DragonTigerBetAction" json:"action_type,omitempty"`
	Bets          []*DragonTigerBet      `protobuf:"bytes,3,rep,name=bets,proto3" json:"bets,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerPlayerBets) Reset() {
	*x = DragonTigerPlayerBets{}
	mi := &file_dragontiger_api_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerPlayerBets) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerPlayerBets) ProtoMessage() {}

func (x *DragonTigerPlayerBets) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerPlayerBets.ProtoReflect.Descriptor instead.
func (*DragonTigerPlayerBets) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{2}
}

func (x *DragonTigerPlayerBets) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *DragonTigerPlayerBets) GetActionType() DragonTigerBetAction {
	if x != nil {
		return x.ActionType
	}
	return DragonTigerBetAction_NORMAL_BET
}

func (x *DragonTigerPlayerBets) GetBets() []*DragonTigerBet {
	if x != nil {
		return x.Bets
	}
	return nil
}

type DragonTigerPlayerBetResult struct {
	state         protoimpl.MessageState  `protogen:"open.v1"`
	UserId        string                  `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	List          []*DragonTigerBetResult `protobuf:"bytes,2,rep,name=list,proto3" json:"list,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerPlayerBetResult) Reset() {
	*x = DragonTigerPlayerBetResult{}
	mi := &file_dragontiger_api_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerPlayerBetResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerPlayerBetResult) ProtoMessage() {}

func (x *DragonTigerPlayerBetResult) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerPlayerBetResult.ProtoReflect.Descriptor instead.
func (*DragonTigerPlayerBetResult) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{3}
}

func (x *DragonTigerPlayerBetResult) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *DragonTigerPlayerBetResult) GetList() []*DragonTigerBetResult {
	if x != nil {
		return x.List
	}
	return nil
}

type DragonTigerDeskCell struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Cell          DragonTigerBetCell     `protobuf:"varint,1,opt,name=cell,proto3,enum=api.DragonTigerBetCell" json:"cell,omitempty"`
	Chips         int64                  `protobuf:"varint,2,opt,name=chips,proto3" json:"chips,omitempty"`
	NUserBet      int32                  `protobuf:"varint,3,opt,name=n_user_bet,json=nUserBet,proto3" json:"n_user_bet,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerDeskCell) Reset() {
	*x = DragonTigerDeskCell{}
	mi := &file_dragontiger_api_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerDeskCell) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerDeskCell) ProtoMessage() {}

func (x *DragonTigerDeskCell) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerDeskCell.ProtoReflect.Descriptor instead.
func (*DragonTigerDeskCell) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{4}
}

func (x *DragonTigerDeskCell) GetCell() DragonTigerBetCell {
	if x != nil {
		return x.Cell
	}
	return DragonTigerBetCell_CELL_UNSPECIFIED
}

func (x *DragonTigerDeskCell) GetChips() int64 {
	if x != nil {
		return x.Chips
	}
	return 0
}

func (x *DragonTigerDeskCell) GetNUserBet() int32 {
	if x != nil {
		return x.NUserBet
	}
	return 0
}

type DragonTigerListDeskCell struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	List          []*DragonTigerDeskCell `protobuf:"bytes,1,rep,name=list,proto3" json:"list,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerListDeskCell) Reset() {
	*x = DragonTigerListDeskCell{}
	mi := &file_dragontiger_api_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerListDeskCell) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerListDeskCell) ProtoMessage() {}

func (x *DragonTigerListDeskCell) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerListDeskCell.ProtoReflect.Descriptor instead.
func (*DragonTigerListDeskCell) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{5}
}

func (x *DragonTigerListDeskCell) GetList() []*DragonTigerDeskCell {
	if x != nil {
		return x.List
	}
	return nil
}

type DragonTigerHand struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Dragon        *Card                  `protobuf:"bytes,1,opt,name=dragon,proto3" json:"dragon,omitempty"`
	Tiger         *Card                  `protobuf:"bytes,2,opt,name=tiger,proto3" json:"tiger,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerHand) Reset() {
	*x = DragonTigerHand{}
	mi := &file_dragontiger_api_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerHand) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerHand) ProtoMessage() {}

func (x *DragonTigerHand) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerHand.ProtoReflect.Descriptor instead.
func (*DragonTigerHand) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{6}
}

func (x *DragonTigerHand) GetDragon() *Card {
	if x != nil {
		return x.Dragon
	}
	return nil
}

func (x *DragonTigerHand) GetTiger() *Card {
	if x != nil {
		return x.Tiger
	}
	return nil
}

// send from server to client upon game finished
type DragonTigerGameFinish struct {
	state         protoimpl.MessageState        `protogen:"open.v1"`
	Hand          *DragonTigerHand              `protobuf:"bytes,1,opt,name=hand,proto3" json:"hand,omitempty"`
	WinCells      []DragonTigerBetCell          `protobuf:"varint,3,rep,packed,name=win_cells,json=winCells,proto3,enum=api.DragonTigerBetCell" json:"win_cells,omitempty"`
	ListBetResult []*DragonTigerPlayerBetResult `protobuf:"bytes,4,rep,name=list_bet_result,json=listBetResult,proto3" json:"list_bet_result,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerGameFinish) Reset() {
	*x = DragonTigerGameFinish{}
	mi := &file_dragontiger_api_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerGameFinish) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerGameFinish) ProtoMessage() {}

func (x *DragonTigerGameFinish) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerGameFinish.ProtoReflect.Descriptor instead.
func (*DragonTigerGameFinish) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{7}
}

func (x *DragonTigerGameFinish) GetHand() *DragonTigerHand {
	if x != nil {
		return x.Hand
	}
	return nil
}

func (x *DragonTigerGameFinish) GetWinCells() []DragonTigerBetCell {
	if x != nil {
		return x.WinCells
	}
	return nil
}

func (x *DragonTigerGameFinish) GetListBetResult() []*DragonTigerPlayerBetResult {
	if x != nil {
		return x.ListBetResult
	}
	return nil
}

// OPCODE_REQUEST_HISTORY_RESULT
// server->client when request previous games history
type DragonTigerHistory struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Histories     []*DragonTigerHand     `protobuf:"bytes,1,rep,name=histories,proto3" json:"histories,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerHistory) Reset() {
	*x = DragonTigerHistory{}
	mi := &file_dragontiger_api_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerHistory) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerHistory) ProtoMessage() {}

func (x *DragonTigerHistory) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerHistory.ProtoReflect.Descriptor instead.
func (*DragonTigerHistory) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{8}
}

func (x *DragonTigerHistory) GetHistories() []*DragonTigerHand {
	if x != nil {
		return x.Histories
	}
	return nil
}

// unused
type DragonTigerPlayer struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	UserName      string                 `protobuf:"bytes,2,opt,name=user_name,json=userName,proto3" json:"user_name,omitempty"`
	VipLevel      int64                  `protobuf:"varint,4,opt,name=vip_level,json=vipLevel,proto3" json:"vip_level,omitempty"`
	AvatarId      string                 `protobuf:"bytes,5,opt,name=avatar_id,json=avatarId,proto3" json:"avatar_id,omitempty"`
	Chips         int64                  `protobuf:"varint,6,opt,name=chips,proto3" json:"chips,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerPlayer) Reset() {
	*x = DragonTigerPlayer{}
	mi := &file_dragontiger_api_proto_msgTypes[9]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerPlayer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerPlayer) ProtoMessage() {}

func (x *DragonTigerPlayer) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[9]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerPlayer.ProtoReflect.Descriptor instead.
func (*DragonTigerPlayer) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{9}
}

func (x *DragonTigerPlayer) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *DragonTigerPlayer) GetVipLevel() int64 {
	if x != nil {
		return x.VipLevel
	}
	return 0
}

func (x *DragonTigerPlayer) GetAvatarId() string {
	if x != nil {
		return x.AvatarId
	}
	return ""
}

func (x *DragonTigerPlayer) GetChips() int64 {
	if x != nil {
		return x.Chips
	}
	return 0
}

// OPCODE_UPDATE_TABLE
// server->client when game state changed
type DragonTigerUpdateTable struct {
	state          protoimpl.MessageState `protogen:"open.v1"`
	GameState      GameState              `protobuf:"varint,1,opt,name=game_state,json=gameState,proto3,enum=api.GameState" json:"game_state,omitempty"`
	CountDown      int64                  `protobuf:"varint,2,opt,name=count_down,json=countDown,proto3" json:"count_down,omitempty"`
	NPlayer        int32                  `protobuf:"varint,3,opt,name=n_player,json=nPlayer,proto3" json:"n_player,omitempty"`                     // unused
	NotablePlayers []*DragonTigerPlayer   `protobuf:"bytes,4,rep,name=notable_players,json=notablePlayers,proto3" json:"notable_players,omitempty"` // unused
	unknownFields  protoimpl.UnknownFields
	sizeCache      protoimpl.SizeCache
}

func (x *DragonTigerUpdateTable) Reset() {
	*x = DragonTigerUpdateTable{}
	mi := &file_dragontiger_api_proto_msgTypes[10]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerUpdateTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerUpdateTable) ProtoMessage() {}

func (x *DragonTigerUpdateTable) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[10]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerUpdateTable.ProtoReflect.Descriptor instead.
func (*DragonTigerUpdateTable) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{10}
}

func (x *DragonTigerUpdateTable) GetGameState() GameState {
	if x != nil {
		return x.GameState
	}
	return GameState_GameStateUnknown
}

func (x *DragonTigerUpdateTable) GetCountDown() int64 {
	if x != nil {
		return x.CountDown
	}
	return 0
}

func (x *DragonTigerUpdateTable) GetNPlayer() int32 {
	if x != nil {
		return x.NPlayer
	}
	return 0
}

func (x *DragonTigerUpdateTable) GetNotablePlayers() []*DragonTigerPlayer {
	if x != nil {
		return x.NotablePlayers
	}
	return nil
}

// server->client when there's a change in table
type DragonTigerUpdateDesk struct {
	state               protoimpl.MessageState   `protogen:"open.v1"`
	NPlayers            int32                    `protobuf:"varint,1,opt,name=n_players,json=nPlayers,proto3" json:"n_players,omitempty"`
	IsUpdateUserBet     bool                     `protobuf:"varint,2,opt,name=is_update_user_bet,json=isUpdateUserBet,proto3" json:"is_update_user_bet,omitempty"`
	IsUpdateDeskCell    bool                     `protobuf:"varint,3,opt,name=is_update_desk_cell,json=isUpdateDeskCell,proto3" json:"is_update_desk_cell,omitempty"`
	IsUpdateGameHistory bool                     `protobuf:"varint,4,opt,name=is_update_game_history,json=isUpdateGameHistory,proto3" json:"is_update_game_history,omitempty"`
	UserBet             *DragonTigerPlayerBets   `protobuf:"bytes,5,opt,name=user_bet,json=userBet,proto3" json:"user_bet,omitempty"`
	DeskCell            *DragonTigerListDeskCell `protobuf:"bytes,6,opt,name=desk_cell,json=deskCell,proto3" json:"desk_cell,omitempty"`
	History             *DragonTigerHistory      `protobuf:"bytes,7,opt,name=history,proto3" json:"history,omitempty"`
	unknownFields       protoimpl.UnknownFields
	sizeCache           protoimpl.SizeCache
}

func (x *DragonTigerUpdateDesk) Reset() {
	*x = DragonTigerUpdateDesk{}
	mi := &file_dragontiger_api_proto_msgTypes[11]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerUpdateDesk) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerUpdateDesk) ProtoMessage() {}

func (x *DragonTigerUpdateDesk) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[11]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerUpdateDesk.ProtoReflect.Descriptor instead.
func (*DragonTigerUpdateDesk) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{11}
}

func (x *DragonTigerUpdateDesk) GetNPlayers() int32 {
	if x != nil {
		return x.NPlayers
	}
	return 0
}

func (x *DragonTigerUpdateDesk) GetIsUpdateUserBet() bool {
	if x != nil {
		return x.IsUpdateUserBet
	}
	return false
}

func (x *DragonTigerUpdateDesk) GetIsUpdateDeskCell() bool {
	if x != nil {
		return x.IsUpdateDeskCell
	}
	return false
}

func (x *DragonTigerUpdateDesk) GetIsUpdateGameHistory() bool {
	if x != nil {
		return x.IsUpdateGameHistory
	}
	return false
}

func (x *DragonTigerUpdateDesk) GetUserBet() *DragonTigerPlayerBets {
	if x != nil {
		return x.UserBet
	}
	return nil
}

func (x *DragonTigerUpdateDesk) GetDeskCell() *DragonTigerListDeskCell {
	if x != nil {
		return x.DeskCell
	}
	return nil
}

func (x *DragonTigerUpdateDesk) GetHistory() *DragonTigerHistory {
	if x != nil {
		return x.History
	}
	return nil
}

// server->client when user bet action is illegal
// OPCODE_UPDATE_REJECTED
type DragonTigerActionReject struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Reason        string                 `protobuf:"bytes,1,opt,name=reason,proto3" json:"reason,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DragonTigerActionReject) Reset() {
	*x = DragonTigerActionReject{}
	mi := &file_dragontiger_api_proto_msgTypes[12]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DragonTigerActionReject) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DragonTigerActionReject) ProtoMessage() {}

func (x *DragonTigerActionReject) ProtoReflect() protoreflect.Message {
	mi := &file_dragontiger_api_proto_msgTypes[12]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DragonTigerActionReject.ProtoReflect.Descriptor instead.
func (*DragonTigerActionReject) Descriptor() ([]byte, []int) {
	return file_dragontiger_api_proto_rawDescGZIP(), []int{12}
}

func (x *DragonTigerActionReject) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

var File_dragontiger_api_proto protoreflect.FileDescriptor

const file_dragontiger_api_proto_rawDesc = "" +
	"\n" +
	"\x15dragontiger_api.proto\x12\x03api\x1a\x1cchinese_poker_game_api.proto\"S\n" +
	"\x0eDragonTigerBet\x12\x14\n" +
	"\x05chips\x18\x02 \x01(\x03R\x05chips\x12+\n" +
	"\x04cell\x18\x03 \x01(\x0e2\x17.api.DragonTigerBetCellR\x04cell\"T\n" +
	"\x14DragonTigerBetResult\x12%\n" +
	"\x03bet\x18\x01 \x01(\v2\x13.api.DragonTigerBetR\x03bet\x12\x15\n" +
	"\x06is_win\x18\x02 \x01(\bR\x05isWin\"\x95\x01\n" +
	"\x15DragonTigerPlayerBets\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12:\n" +
	"\vaction_type\x18\x02 \x01(\x0e2\x19.api.DragonTigerBetActionR\n" +
	"actionType\x12'\n" +
	"\x04bets\x18\x03 \x03(\v2\x13.api.DragonTigerBetR\x04bets\"d\n" +
	"\x1aDragonTigerPlayerBetResult\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12-\n" +
	"\x04list\x18\x02 \x03(\v2\x19.api.DragonTigerBetResultR\x04list\"v\n" +
	"\x13DragonTigerDeskCell\x12+\n" +
	"\x04cell\x18\x01 \x01(\x0e2\x17.api.DragonTigerBetCellR\x04cell\x12\x14\n" +
	"\x05chips\x18\x02 \x01(\x03R\x05chips\x12\x1c\n" +
	"\n" +
	"n_user_bet\x18\x03 \x01(\x05R\bnUserBet\"G\n" +
	"\x17DragonTigerListDeskCell\x12,\n" +
	"\x04list\x18\x01 \x03(\v2\x18.api.DragonTigerDeskCellR\x04list\"U\n" +
	"\x0fDragonTigerHand\x12!\n" +
	"\x06dragon\x18\x01 \x01(\v2\t.api.CardR\x06dragon\x12\x1f\n" +
	"\x05tiger\x18\x02 \x01(\v2\t.api.CardR\x05tiger\"\xc0\x01\n" +
	"\x15DragonTigerGameFinish\x12(\n" +
	"\x04hand\x18\x01 \x01(\v2\x14.api.DragonTigerHandR\x04hand\x124\n" +
	"\twin_cells\x18\x03 \x03(\x0e2\x17.api.DragonTigerBetCellR\bwinCells\x12G\n" +
	"\x0flist_bet_result\x18\x04 \x03(\v2\x1f.api.DragonTigerPlayerBetResultR\rlistBetResult\"H\n" +
	"\x12DragonTigerHistory\x122\n" +
	"\thistories\x18\x01 \x03(\v2\x14.api.DragonTigerHandR\thistories\"\x80\x01\n" +
	"\x11DragonTigerPlayer\x12\x1b\n" +
	"\tuser_name\x18\x02 \x01(\tR\buserName\x12\x1b\n" +
	"\tvip_level\x18\x04 \x01(\x03R\bvipLevel\x12\x1b\n" +
	"\tavatar_id\x18\x05 \x01(\tR\bavatarId\x12\x14\n" +
	"\x05chips\x18\x06 \x01(\x03R\x05chips\"\xc2\x01\n" +
	"\x16DragonTigerUpdateTable\x12-\n" +
	"\n" +
	"game_state\x18\x01 \x01(\x0e2\x0e.api.GameStateR\tgameState\x12\x1d\n" +
	"\n" +
	"count_down\x18\x02 \x01(\x03R\tcountDown\x12\x19\n" +
	"\bn_player\x18\x03 \x01(\x05R\anPlayer\x12?\n" +
	"\x0fnotable_players\x18\x04 \x03(\v2\x16.api.DragonTigerPlayerR\x0enotablePlayers\"\xea\x02\n" +
	"\x15DragonTigerUpdateDesk\x12\x1b\n" +
	"\tn_players\x18\x01 \x01(\x05R\bnPlayers\x12+\n" +
	"\x12is_update_user_bet\x18\x02 \x01(\bR\x0fisUpdateUserBet\x12-\n" +
	"\x13is_update_desk_cell\x18\x03 \x01(\bR\x10isUpdateDeskCell\x123\n" +
	"\x16is_update_game_history\x18\x04 \x01(\bR\x13isUpdateGameHistory\x125\n" +
	"\buser_bet\x18\x05 \x01(\v2\x1a.api.DragonTigerPlayerBetsR\auserBet\x129\n" +
	"\tdesk_cell\x18\x06 \x01(\v2\x1c.api.DragonTigerListDeskCellR\bdeskCell\x121\n" +
	"\ahistory\x18\a \x01(\v2\x17.api.DragonTigerHistoryR\ahistory\"1\n" +
	"\x17DragonTigerActionReject\x12\x16\n" +
	"\x06reason\x18\x01 \x01(\tR\x06reason*\xaf\x01\n" +
	"\x12DragonTigerBetCell\x12\x14\n" +
	"\x10CELL_UNSPECIFIED\x10\x00\x12\x0f\n" +
	"\vCELL_DRAGON\x10\x01\x12\x0e\n" +
	"\n" +
	"CELL_TIGER\x10\x02\x12\f\n" +
	"\bCELL_TIE\x10\x03\x12\x15\n" +
	"\x11CELL_DRAGON_SMALL\x10\x04\x12\x13\n" +
	"\x0fCELL_DRAGON_BIG\x10\x05\x12\x14\n" +
	"\x10CELL_TIGER_SMALL\x10\x06\x12\x12\n" +
	"\x0eCELL_TIGER_BIG\x10\a*B\n" +
	"\x14DragonTigerBetAction\x12\x0e\n" +
	"\n" +
	"NORMAL_BET\x10\x00\x12\n" +
	"\n" +
	"\x06RE_BET\x10\x01\x12\x0e\n" +
	"\n" +
	"DOUBLE_BET\x10\x02B0Z.github.com/nakamaFramework/cgp-bing-module/apib\x06proto3"

var (
	file_dragontiger_api_proto_rawDescOnce sync.Once
	file_dragontiger_api_proto_rawDescData []byte
)

func file_dragontiger_api_proto_rawDescGZIP() []byte {
	file_dragontiger_api_proto_rawDescOnce.Do(func() {
		file_dragontiger_api_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_dragontiger_api_proto_rawDesc), len(file_dragontiger_api_proto_rawDesc)))
	})
	return file_dragontiger_api_proto_rawDescData
}

var file_dragontiger_api_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_dragontiger_api_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_dragontiger_api_proto_goTypes = []any{
	(DragonTigerBetCell)(0),            // 0: api.DragonTigerBetCell
	(DragonTigerBetAction)(0),          // 1: api.DragonTigerBetAction
	(*DragonTigerBet)(nil),             // 2: api.DragonTigerBet
	(*DragonTigerBetResult)(nil),       // 3: api.DragonTigerBetResult
	(*DragonTigerPlayerBets)(nil),      // 4: api.DragonTigerPlayerBets
	(*DragonTigerPlayerBetResult)(nil), // 5: api.DragonTigerPlayerBetResult
	(*DragonTigerDeskCell)(nil),        // 6: api.DragonTigerDeskCell
	(*DragonTigerListDeskCell)(nil),    // 7: api.DragonTigerListDeskCell
	(*DragonTigerHand)(nil),            // 8: api.DragonTigerHand
	(*DragonTigerGameFinish)(nil),      // 9: api.DragonTigerGameFinish
	(*DragonTigerHistory)(nil),         // 10: api.DragonTigerHistory
	(*DragonTigerPlayer)(nil),          // 11: api.DragonTigerPlayer
	(*DragonTigerUpdateTable)(nil),     // 12: api.DragonTigerUpdateTable
	(*DragonTigerUpdateDesk)(nil),      // 13: api.DragonTigerUpdateDesk
	(*DragonTigerActionReject)(nil),    // 14: api.DragonTigerActionReject
	(*Card)(nil),                       // 15: api.Card
	(GameState)(0),                     // 16: api.GameState
}
var file_dragontiger_api_proto_depIdxs = []int32{
	0,  // 0: api.DragonTigerBet.cell:type_name -> api.DragonTigerBetCell
	2,  // 1: api.DragonTigerBetResult.bet:type_name -> api.DragonTigerBet
	1,  // 2: api.DragonTigerPlayerBets.action_type:type_name -> api.DragonTigerBetAction
	2,  // 3: api.DragonTigerPlayerBets.bets:type_name -> api.DragonTigerBet
	3,  // 4: api.DragonTigerPlayerBetResult.list:type_name -> api.DragonTigerBetResult
	0,  // 5: api.DragonTigerDeskCell.cell:type_name -> api.DragonTigerBetCell
	6,  // 6: api.DragonTigerListDeskCell.list:type_name -> api.DragonTigerDeskCell
	15, // 7: api.DragonTigerHand.dragon:type_name -> api.Card
	15, // 8: api.DragonTigerHand.tiger:type_name -> api.Card
	8,  // 9: api.DragonTigerGameFinish.hand:type_name -> api.DragonTigerHand
	0,  // 10: api.DragonTigerGameFinish.win_cells:type_name -> api.DragonTigerBetCell
	5,  // 11: api.DragonTigerGameFinish.list_bet_result:type_name -> api.DragonTigerPlayerBetResult
	8,  // 12: api.DragonTigerHistory.histories:type_name -> api.DragonTigerHand
	16, // 13: api.DragonTigerUpdateTable.game_state:type_name -> api.GameState
	11, // 14: api.DragonTigerUpdateTable.notable_players:type_name -> api.DragonTigerPlayer
	4,  // 15: api.DragonTigerUpdateDesk.user_bet:type_name -> api.DragonTigerPlayerBets
	7,  // 16: api.DragonTigerUpdateDesk.desk_cell:type_name -> api.DragonTigerListDeskCell
	10, // 17: api.DragonTigerUpdateDesk.history:type_name -> api.DragonTigerHistory
	18, // [18:18] is the sub-list for method output_type
	18, // [18:18] is the sub-list for method input_type
	18, // [18:18] is the sub-list for extension type_name
	18, // [18:18] is the sub-list for extension extendee
	0,  // [0:18] is the sub-list for field type_name
}

func init() { file_dragontiger_api_proto_init() }
func file_dragontiger_api_proto_init() {
	if File_dragontiger_api_proto != nil {
		return
	}
	file_chinese_poker_game_api_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_dragontiger_api_proto_rawDesc), len(file_dragontiger_api_proto_rawDesc)),
			NumEnums:      2,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_dragontiger_api_proto_goTypes,
		DependencyIndexes: file_dragontiger_api_proto_depIdxs,
		EnumInfos:         file_dragontiger_api_proto_enumTypes,
		MessageInfos:      file_dragontiger_api_proto_msgTypes,
	}.Build()
	File_dragontiger_api_proto = out.File
	file_dragontiger_api_proto_goTypes = nil
	file_dragontiger_api_proto_depIdxs = nil
}
