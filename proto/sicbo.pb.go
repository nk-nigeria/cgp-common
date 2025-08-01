// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        v3.21.12
// source: sicbo.proto

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

type Dice int32

const (
	Dice_DICE_UNSPECTIFIED Dice = 0
	Dice_DICE_1            Dice = 1
	Dice_DICE_2            Dice = 2
	Dice_DICE_3            Dice = 3
	Dice_DICE_4            Dice = 4
	Dice_DICE_5            Dice = 5
	Dice_DICE_6            Dice = 6
)

// Enum value maps for Dice.
var (
	Dice_name = map[int32]string{
		0: "DICE_UNSPECTIFIED",
		1: "DICE_1",
		2: "DICE_2",
		3: "DICE_3",
		4: "DICE_4",
		5: "DICE_5",
		6: "DICE_6",
	}
	Dice_value = map[string]int32{
		"DICE_UNSPECTIFIED": 0,
		"DICE_1":            1,
		"DICE_2":            2,
		"DICE_3":            3,
		"DICE_4":            4,
		"DICE_5":            5,
		"DICE_6":            6,
	}
)

func (x Dice) Enum() *Dice {
	p := new(Dice)
	*p = x
	return p
}

func (x Dice) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Dice) Descriptor() protoreflect.EnumDescriptor {
	return file_sicbo_proto_enumTypes[0].Descriptor()
}

func (Dice) Type() protoreflect.EnumType {
	return &file_sicbo_proto_enumTypes[0]
}

func (x Dice) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Dice.Descriptor instead.
func (Dice) EnumDescriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{0}
}

type SicboBetCell int32

const (
	SicboBetCell_SICBO_CELL_UNSPECIFIED SicboBetCell = 0 // unused
	SicboBetCell_SICBO_CELL_SMALL       SicboBetCell = 1 // x1
	SicboBetCell_SICBO_CELL_BIG         SicboBetCell = 2
	SicboBetCell_SICBO_CELL_1           SicboBetCell = 11 // x number of same face
	SicboBetCell_SICBO_CEll_2           SicboBetCell = 12
	SicboBetCell_SICBO_CELL_3           SicboBetCell = 13
	SicboBetCell_SICBO_CELL_4           SicboBetCell = 14
	SicboBetCell_SICBO_CELL_5           SicboBetCell = 15
	SicboBetCell_SICBO_CELL_6           SicboBetCell = 16
	SicboBetCell_SICBO_CELL_DOUBLE_1    SicboBetCell = 21 // x10
	SicboBetCell_SICBO_CELL_DOUBLE_2    SicboBetCell = 22
	SicboBetCell_SICBO_CELL_DOUBLE_3    SicboBetCell = 23
	SicboBetCell_SICBO_CELL_DOUBLE_4    SicboBetCell = 24
	SicboBetCell_SICBO_CELL_DOUBLE_5    SicboBetCell = 25
	SicboBetCell_SICBO_CELL_DOUBLE_6    SicboBetCell = 26
	SicboBetCell_SICBO_CELL_TRIPLE      SicboBetCell = 31 // x30
	SicboBetCell_SICBO_CELL_TOTAL_4     SicboBetCell = 41 // x60
	SicboBetCell_SICBO_CELL_TOTAL_17    SicboBetCell = 42
	SicboBetCell_SICBO_CELL_TOTAL_5     SicboBetCell = 43 // x30
	SicboBetCell_SICBO_CELL_TOTAL_16    SicboBetCell = 44
	SicboBetCell_SICBO_CELL_TOTAL_6     SicboBetCell = 45 // x18
	SicboBetCell_SICBO_CELL_TOTAL_15    SicboBetCell = 46
	SicboBetCell_SICBO_CELL_TOTAL_7     SicboBetCell = 47 // x12
	SicboBetCell_SICBO_CELL_TOTAL_14    SicboBetCell = 48
	SicboBetCell_SICBO_CELL_TOTAL_8     SicboBetCell = 49 // x8
	SicboBetCell_SICBO_CELL_TOTAL_13    SicboBetCell = 50
	SicboBetCell_SICBO_CELL_TOTAL_9     SicboBetCell = 51 // x7
	SicboBetCell_SICBO_CELL_TOTAL_12    SicboBetCell = 52
	SicboBetCell_SICBO_CELL_TOTAL_10    SicboBetCell = 53 // x6
	SicboBetCell_SICBO_CELL_TOTAL_11    SicboBetCell = 54
)

// Enum value maps for SicboBetCell.
var (
	SicboBetCell_name = map[int32]string{
		0:  "SICBO_CELL_UNSPECIFIED",
		1:  "SICBO_CELL_SMALL",
		2:  "SICBO_CELL_BIG",
		11: "SICBO_CELL_1",
		12: "SICBO_CEll_2",
		13: "SICBO_CELL_3",
		14: "SICBO_CELL_4",
		15: "SICBO_CELL_5",
		16: "SICBO_CELL_6",
		21: "SICBO_CELL_DOUBLE_1",
		22: "SICBO_CELL_DOUBLE_2",
		23: "SICBO_CELL_DOUBLE_3",
		24: "SICBO_CELL_DOUBLE_4",
		25: "SICBO_CELL_DOUBLE_5",
		26: "SICBO_CELL_DOUBLE_6",
		31: "SICBO_CELL_TRIPLE",
		41: "SICBO_CELL_TOTAL_4",
		42: "SICBO_CELL_TOTAL_17",
		43: "SICBO_CELL_TOTAL_5",
		44: "SICBO_CELL_TOTAL_16",
		45: "SICBO_CELL_TOTAL_6",
		46: "SICBO_CELL_TOTAL_15",
		47: "SICBO_CELL_TOTAL_7",
		48: "SICBO_CELL_TOTAL_14",
		49: "SICBO_CELL_TOTAL_8",
		50: "SICBO_CELL_TOTAL_13",
		51: "SICBO_CELL_TOTAL_9",
		52: "SICBO_CELL_TOTAL_12",
		53: "SICBO_CELL_TOTAL_10",
		54: "SICBO_CELL_TOTAL_11",
	}
	SicboBetCell_value = map[string]int32{
		"SICBO_CELL_UNSPECIFIED": 0,
		"SICBO_CELL_SMALL":       1,
		"SICBO_CELL_BIG":         2,
		"SICBO_CELL_1":           11,
		"SICBO_CEll_2":           12,
		"SICBO_CELL_3":           13,
		"SICBO_CELL_4":           14,
		"SICBO_CELL_5":           15,
		"SICBO_CELL_6":           16,
		"SICBO_CELL_DOUBLE_1":    21,
		"SICBO_CELL_DOUBLE_2":    22,
		"SICBO_CELL_DOUBLE_3":    23,
		"SICBO_CELL_DOUBLE_4":    24,
		"SICBO_CELL_DOUBLE_5":    25,
		"SICBO_CELL_DOUBLE_6":    26,
		"SICBO_CELL_TRIPLE":      31,
		"SICBO_CELL_TOTAL_4":     41,
		"SICBO_CELL_TOTAL_17":    42,
		"SICBO_CELL_TOTAL_5":     43,
		"SICBO_CELL_TOTAL_16":    44,
		"SICBO_CELL_TOTAL_6":     45,
		"SICBO_CELL_TOTAL_15":    46,
		"SICBO_CELL_TOTAL_7":     47,
		"SICBO_CELL_TOTAL_14":    48,
		"SICBO_CELL_TOTAL_8":     49,
		"SICBO_CELL_TOTAL_13":    50,
		"SICBO_CELL_TOTAL_9":     51,
		"SICBO_CELL_TOTAL_12":    52,
		"SICBO_CELL_TOTAL_10":    53,
		"SICBO_CELL_TOTAL_11":    54,
	}
)

func (x SicboBetCell) Enum() *SicboBetCell {
	p := new(SicboBetCell)
	*p = x
	return p
}

func (x SicboBetCell) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SicboBetCell) Descriptor() protoreflect.EnumDescriptor {
	return file_sicbo_proto_enumTypes[1].Descriptor()
}

func (SicboBetCell) Type() protoreflect.EnumType {
	return &file_sicbo_proto_enumTypes[1]
}

func (x SicboBetCell) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SicboBetCell.Descriptor instead.
func (SicboBetCell) EnumDescriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{1}
}

type SicboBetAction int32

const (
	SicboBetAction_SICBO_BET_NORMAL SicboBetAction = 0
	SicboBetAction_SICBO_BET_REBET  SicboBetAction = 1
	SicboBetAction_SICBO_BET_DOUBLE SicboBetAction = 2
)

// Enum value maps for SicboBetAction.
var (
	SicboBetAction_name = map[int32]string{
		0: "SICBO_BET_NORMAL",
		1: "SICBO_BET_REBET",
		2: "SICBO_BET_DOUBLE",
	}
	SicboBetAction_value = map[string]int32{
		"SICBO_BET_NORMAL": 0,
		"SICBO_BET_REBET":  1,
		"SICBO_BET_DOUBLE": 2,
	}
)

func (x SicboBetAction) Enum() *SicboBetAction {
	p := new(SicboBetAction)
	*p = x
	return p
}

func (x SicboBetAction) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SicboBetAction) Descriptor() protoreflect.EnumDescriptor {
	return file_sicbo_proto_enumTypes[2].Descriptor()
}

func (SicboBetAction) Type() protoreflect.EnumType {
	return &file_sicbo_proto_enumTypes[2]
}

func (x SicboBetAction) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SicboBetAction.Descriptor instead.
func (SicboBetAction) EnumDescriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{2}
}

type SicboBetRejectReason int32

const (
	SicboBetRejectReason_UNSPECIFIED            SicboBetRejectReason = 0
	SicboBetRejectReason_BALANCE_NOT_ENOUGH     SicboBetRejectReason = 1
	SicboBetRejectReason_PREVIOUS_BET_NOT_EXIST SicboBetRejectReason = 2
	SicboBetRejectReason_ALREADY_BET            SicboBetRejectReason = 3
)

// Enum value maps for SicboBetRejectReason.
var (
	SicboBetRejectReason_name = map[int32]string{
		0: "UNSPECIFIED",
		1: "BALANCE_NOT_ENOUGH",
		2: "PREVIOUS_BET_NOT_EXIST",
		3: "ALREADY_BET",
	}
	SicboBetRejectReason_value = map[string]int32{
		"UNSPECIFIED":            0,
		"BALANCE_NOT_ENOUGH":     1,
		"PREVIOUS_BET_NOT_EXIST": 2,
		"ALREADY_BET":            3,
	}
)

func (x SicboBetRejectReason) Enum() *SicboBetRejectReason {
	p := new(SicboBetRejectReason)
	*p = x
	return p
}

func (x SicboBetRejectReason) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SicboBetRejectReason) Descriptor() protoreflect.EnumDescriptor {
	return file_sicbo_proto_enumTypes[3].Descriptor()
}

func (SicboBetRejectReason) Type() protoreflect.EnumType {
	return &file_sicbo_proto_enumTypes[3]
}

func (x SicboBetRejectReason) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SicboBetRejectReason.Descriptor instead.
func (SicboBetRejectReason) EnumDescriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{3}
}

type SicboBet struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Chips         int64                  `protobuf:"varint,2,opt,name=chips,proto3" json:"chips,omitempty"`
	Cell          SicboBetCell           `protobuf:"varint,3,opt,name=cell,proto3,enum=proto.SicboBetCell" json:"cell,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboBet) Reset() {
	*x = SicboBet{}
	mi := &file_sicbo_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboBet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboBet) ProtoMessage() {}

func (x *SicboBet) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboBet.ProtoReflect.Descriptor instead.
func (*SicboBet) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{0}
}

func (x *SicboBet) GetChips() int64 {
	if x != nil {
		return x.Chips
	}
	return 0
}

func (x *SicboBet) GetCell() SicboBetCell {
	if x != nil {
		return x.Cell
	}
	return SicboBetCell_SICBO_CELL_UNSPECIFIED
}

type SicboBetResult struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Bet           *SicboBet              `protobuf:"bytes,1,opt,name=bet,proto3" json:"bet,omitempty"`
	IsWin         bool                   `protobuf:"varint,2,opt,name=is_win,json=isWin,proto3" json:"is_win,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboBetResult) Reset() {
	*x = SicboBetResult{}
	mi := &file_sicbo_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboBetResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboBetResult) ProtoMessage() {}

func (x *SicboBetResult) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboBetResult.ProtoReflect.Descriptor instead.
func (*SicboBetResult) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{1}
}

func (x *SicboBetResult) GetBet() *SicboBet {
	if x != nil {
		return x.Bet
	}
	return nil
}

func (x *SicboBetResult) GetIsWin() bool {
	if x != nil {
		return x.IsWin
	}
	return false
}

type SicboPlayerBet struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	UserId        string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Action        SicboBetAction         `protobuf:"varint,2,opt,name=action,proto3,enum=proto.SicboBetAction" json:"action,omitempty"`
	Bets          []*SicboBet            `protobuf:"bytes,3,rep,name=bets,proto3" json:"bets,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboPlayerBet) Reset() {
	*x = SicboPlayerBet{}
	mi := &file_sicbo_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboPlayerBet) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboPlayerBet) ProtoMessage() {}

func (x *SicboPlayerBet) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboPlayerBet.ProtoReflect.Descriptor instead.
func (*SicboPlayerBet) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{2}
}

func (x *SicboPlayerBet) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *SicboPlayerBet) GetAction() SicboBetAction {
	if x != nil {
		return x.Action
	}
	return SicboBetAction_SICBO_BET_NORMAL
}

func (x *SicboPlayerBet) GetBets() []*SicboBet {
	if x != nil {
		return x.Bets
	}
	return nil
}

type SicboPlayerBetResult struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	UserId        string                 `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	List          []*SicboBetResult      `protobuf:"bytes,2,rep,name=list,proto3" json:"list,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboPlayerBetResult) Reset() {
	*x = SicboPlayerBetResult{}
	mi := &file_sicbo_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboPlayerBetResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboPlayerBetResult) ProtoMessage() {}

func (x *SicboPlayerBetResult) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboPlayerBetResult.ProtoReflect.Descriptor instead.
func (*SicboPlayerBetResult) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{3}
}

func (x *SicboPlayerBetResult) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *SicboPlayerBetResult) GetList() []*SicboBetResult {
	if x != nil {
		return x.List
	}
	return nil
}

type SicboHand struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Dices         []Dice                 `protobuf:"varint,1,rep,packed,name=dices,proto3,enum=proto.Dice" json:"dices,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboHand) Reset() {
	*x = SicboHand{}
	mi := &file_sicbo_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboHand) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboHand) ProtoMessage() {}

func (x *SicboHand) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboHand.ProtoReflect.Descriptor instead.
func (*SicboHand) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{4}
}

func (x *SicboHand) GetDices() []Dice {
	if x != nil {
		return x.Dices
	}
	return nil
}

type SicboGameFinish struct {
	state         protoimpl.MessageState  `protogen:"open.v1"`
	Hand          *SicboHand              `protobuf:"bytes,1,opt,name=hand,proto3" json:"hand,omitempty"`
	WinCells      []SicboBetCell          `protobuf:"varint,3,rep,packed,name=win_cells,json=winCells,proto3,enum=proto.SicboBetCell" json:"win_cells,omitempty"`
	ListBetResult []*SicboPlayerBetResult `protobuf:"bytes,4,rep,name=list_bet_result,json=listBetResult,proto3" json:"list_bet_result,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboGameFinish) Reset() {
	*x = SicboGameFinish{}
	mi := &file_sicbo_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboGameFinish) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboGameFinish) ProtoMessage() {}

func (x *SicboGameFinish) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboGameFinish.ProtoReflect.Descriptor instead.
func (*SicboGameFinish) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{5}
}

func (x *SicboGameFinish) GetHand() *SicboHand {
	if x != nil {
		return x.Hand
	}
	return nil
}

func (x *SicboGameFinish) GetWinCells() []SicboBetCell {
	if x != nil {
		return x.WinCells
	}
	return nil
}

func (x *SicboGameFinish) GetListBetResult() []*SicboPlayerBetResult {
	if x != nil {
		return x.ListBetResult
	}
	return nil
}

type SicboBetCellInfo struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Cell          SicboBetCell           `protobuf:"varint,1,opt,name=cell,proto3,enum=proto.SicboBetCell" json:"cell,omitempty"`
	Chips         int64                  `protobuf:"varint,2,opt,name=chips,proto3" json:"chips,omitempty"`
	NUserBet      int32                  `protobuf:"varint,3,opt,name=n_user_bet,json=nUserBet,proto3" json:"n_user_bet,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboBetCellInfo) Reset() {
	*x = SicboBetCellInfo{}
	mi := &file_sicbo_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboBetCellInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboBetCellInfo) ProtoMessage() {}

func (x *SicboBetCellInfo) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboBetCellInfo.ProtoReflect.Descriptor instead.
func (*SicboBetCellInfo) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{6}
}

func (x *SicboBetCellInfo) GetCell() SicboBetCell {
	if x != nil {
		return x.Cell
	}
	return SicboBetCell_SICBO_CELL_UNSPECIFIED
}

func (x *SicboBetCellInfo) GetChips() int64 {
	if x != nil {
		return x.Chips
	}
	return 0
}

func (x *SicboBetCellInfo) GetNUserBet() int32 {
	if x != nil {
		return x.NUserBet
	}
	return 0
}

type SicboUpdateDesk struct {
	state               protoimpl.MessageState `protogen:"open.v1"`
	NPlayers            int32                  `protobuf:"varint,1,opt,name=n_players,json=nPlayers,proto3" json:"n_players,omitempty"`
	IsUpdateUserBet     bool                   `protobuf:"varint,2,opt,name=is_update_user_bet,json=isUpdateUserBet,proto3" json:"is_update_user_bet,omitempty"`
	IsUpdateDeskCell    bool                   `protobuf:"varint,3,opt,name=is_update_desk_cell,json=isUpdateDeskCell,proto3" json:"is_update_desk_cell,omitempty"`
	IsUpdateGameHistory bool                   `protobuf:"varint,4,opt,name=is_update_game_history,json=isUpdateGameHistory,proto3" json:"is_update_game_history,omitempty"`
	UserBet             *SicboPlayerBet        `protobuf:"bytes,5,opt,name=user_bet,json=userBet,proto3" json:"user_bet,omitempty"`
	DeskCell            []*SicboBetCellInfo    `protobuf:"bytes,6,rep,name=desk_cell,json=deskCell,proto3" json:"desk_cell,omitempty"`
	History             []*SicboHand           `protobuf:"bytes,7,rep,name=history,proto3" json:"history,omitempty"`
	unknownFields       protoimpl.UnknownFields
	sizeCache           protoimpl.SizeCache
}

func (x *SicboUpdateDesk) Reset() {
	*x = SicboUpdateDesk{}
	mi := &file_sicbo_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboUpdateDesk) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboUpdateDesk) ProtoMessage() {}

func (x *SicboUpdateDesk) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboUpdateDesk.ProtoReflect.Descriptor instead.
func (*SicboUpdateDesk) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{7}
}

func (x *SicboUpdateDesk) GetNPlayers() int32 {
	if x != nil {
		return x.NPlayers
	}
	return 0
}

func (x *SicboUpdateDesk) GetIsUpdateUserBet() bool {
	if x != nil {
		return x.IsUpdateUserBet
	}
	return false
}

func (x *SicboUpdateDesk) GetIsUpdateDeskCell() bool {
	if x != nil {
		return x.IsUpdateDeskCell
	}
	return false
}

func (x *SicboUpdateDesk) GetIsUpdateGameHistory() bool {
	if x != nil {
		return x.IsUpdateGameHistory
	}
	return false
}

func (x *SicboUpdateDesk) GetUserBet() *SicboPlayerBet {
	if x != nil {
		return x.UserBet
	}
	return nil
}

func (x *SicboUpdateDesk) GetDeskCell() []*SicboBetCellInfo {
	if x != nil {
		return x.DeskCell
	}
	return nil
}

func (x *SicboUpdateDesk) GetHistory() []*SicboHand {
	if x != nil {
		return x.History
	}
	return nil
}

type SicboActionReject struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Reason        SicboBetRejectReason   `protobuf:"varint,1,opt,name=reason,proto3,enum=proto.SicboBetRejectReason" json:"reason,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SicboActionReject) Reset() {
	*x = SicboActionReject{}
	mi := &file_sicbo_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SicboActionReject) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboActionReject) ProtoMessage() {}

func (x *SicboActionReject) ProtoReflect() protoreflect.Message {
	mi := &file_sicbo_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboActionReject.ProtoReflect.Descriptor instead.
func (*SicboActionReject) Descriptor() ([]byte, []int) {
	return file_sicbo_proto_rawDescGZIP(), []int{8}
}

func (x *SicboActionReject) GetReason() SicboBetRejectReason {
	if x != nil {
		return x.Reason
	}
	return SicboBetRejectReason_UNSPECIFIED
}

var File_sicbo_proto protoreflect.FileDescriptor

const file_sicbo_proto_rawDesc = "" +
	"\n" +
	"\vsicbo.proto\x12\x05proto\"I\n" +
	"\bSicboBet\x12\x14\n" +
	"\x05chips\x18\x02 \x01(\x03R\x05chips\x12'\n" +
	"\x04cell\x18\x03 \x01(\x0e2\x13.proto.SicboBetCellR\x04cell\"J\n" +
	"\x0eSicboBetResult\x12!\n" +
	"\x03bet\x18\x01 \x01(\v2\x0f.proto.SicboBetR\x03bet\x12\x15\n" +
	"\x06is_win\x18\x02 \x01(\bR\x05isWin\"}\n" +
	"\x0eSicboPlayerBet\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12-\n" +
	"\x06action\x18\x02 \x01(\x0e2\x15.proto.SicboBetActionR\x06action\x12#\n" +
	"\x04bets\x18\x03 \x03(\v2\x0f.proto.SicboBetR\x04bets\"Z\n" +
	"\x14SicboPlayerBetResult\x12\x17\n" +
	"\auser_id\x18\x01 \x01(\tR\x06userId\x12)\n" +
	"\x04list\x18\x02 \x03(\v2\x15.proto.SicboBetResultR\x04list\".\n" +
	"\tSicboHand\x12!\n" +
	"\x05dices\x18\x01 \x03(\x0e2\v.proto.DiceR\x05dices\"\xae\x01\n" +
	"\x0fSicboGameFinish\x12$\n" +
	"\x04hand\x18\x01 \x01(\v2\x10.proto.SicboHandR\x04hand\x120\n" +
	"\twin_cells\x18\x03 \x03(\x0e2\x13.proto.SicboBetCellR\bwinCells\x12C\n" +
	"\x0flist_bet_result\x18\x04 \x03(\v2\x1b.proto.SicboPlayerBetResultR\rlistBetResult\"o\n" +
	"\x10SicboBetCellInfo\x12'\n" +
	"\x04cell\x18\x01 \x01(\x0e2\x13.proto.SicboBetCellR\x04cell\x12\x14\n" +
	"\x05chips\x18\x02 \x01(\x03R\x05chips\x12\x1c\n" +
	"\n" +
	"n_user_bet\x18\x03 \x01(\x05R\bnUserBet\"\xd3\x02\n" +
	"\x0fSicboUpdateDesk\x12\x1b\n" +
	"\tn_players\x18\x01 \x01(\x05R\bnPlayers\x12+\n" +
	"\x12is_update_user_bet\x18\x02 \x01(\bR\x0fisUpdateUserBet\x12-\n" +
	"\x13is_update_desk_cell\x18\x03 \x01(\bR\x10isUpdateDeskCell\x123\n" +
	"\x16is_update_game_history\x18\x04 \x01(\bR\x13isUpdateGameHistory\x120\n" +
	"\buser_bet\x18\x05 \x01(\v2\x15.proto.SicboPlayerBetR\auserBet\x124\n" +
	"\tdesk_cell\x18\x06 \x03(\v2\x17.proto.SicboBetCellInfoR\bdeskCell\x12*\n" +
	"\ahistory\x18\a \x03(\v2\x10.proto.SicboHandR\ahistory\"H\n" +
	"\x11SicboActionReject\x123\n" +
	"\x06reason\x18\x01 \x01(\x0e2\x1b.proto.SicboBetRejectReasonR\x06reason*e\n" +
	"\x04Dice\x12\x15\n" +
	"\x11DICE_UNSPECTIFIED\x10\x00\x12\n" +
	"\n" +
	"\x06DICE_1\x10\x01\x12\n" +
	"\n" +
	"\x06DICE_2\x10\x02\x12\n" +
	"\n" +
	"\x06DICE_3\x10\x03\x12\n" +
	"\n" +
	"\x06DICE_4\x10\x04\x12\n" +
	"\n" +
	"\x06DICE_5\x10\x05\x12\n" +
	"\n" +
	"\x06DICE_6\x10\x06*\xc5\x05\n" +
	"\fSicboBetCell\x12\x1a\n" +
	"\x16SICBO_CELL_UNSPECIFIED\x10\x00\x12\x14\n" +
	"\x10SICBO_CELL_SMALL\x10\x01\x12\x12\n" +
	"\x0eSICBO_CELL_BIG\x10\x02\x12\x10\n" +
	"\fSICBO_CELL_1\x10\v\x12\x10\n" +
	"\fSICBO_CEll_2\x10\f\x12\x10\n" +
	"\fSICBO_CELL_3\x10\r\x12\x10\n" +
	"\fSICBO_CELL_4\x10\x0e\x12\x10\n" +
	"\fSICBO_CELL_5\x10\x0f\x12\x10\n" +
	"\fSICBO_CELL_6\x10\x10\x12\x17\n" +
	"\x13SICBO_CELL_DOUBLE_1\x10\x15\x12\x17\n" +
	"\x13SICBO_CELL_DOUBLE_2\x10\x16\x12\x17\n" +
	"\x13SICBO_CELL_DOUBLE_3\x10\x17\x12\x17\n" +
	"\x13SICBO_CELL_DOUBLE_4\x10\x18\x12\x17\n" +
	"\x13SICBO_CELL_DOUBLE_5\x10\x19\x12\x17\n" +
	"\x13SICBO_CELL_DOUBLE_6\x10\x1a\x12\x15\n" +
	"\x11SICBO_CELL_TRIPLE\x10\x1f\x12\x16\n" +
	"\x12SICBO_CELL_TOTAL_4\x10)\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_17\x10*\x12\x16\n" +
	"\x12SICBO_CELL_TOTAL_5\x10+\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_16\x10,\x12\x16\n" +
	"\x12SICBO_CELL_TOTAL_6\x10-\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_15\x10.\x12\x16\n" +
	"\x12SICBO_CELL_TOTAL_7\x10/\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_14\x100\x12\x16\n" +
	"\x12SICBO_CELL_TOTAL_8\x101\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_13\x102\x12\x16\n" +
	"\x12SICBO_CELL_TOTAL_9\x103\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_12\x104\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_10\x105\x12\x17\n" +
	"\x13SICBO_CELL_TOTAL_11\x106*Q\n" +
	"\x0eSicboBetAction\x12\x14\n" +
	"\x10SICBO_BET_NORMAL\x10\x00\x12\x13\n" +
	"\x0fSICBO_BET_REBET\x10\x01\x12\x14\n" +
	"\x10SICBO_BET_DOUBLE\x10\x02*l\n" +
	"\x14SicboBetRejectReason\x12\x0f\n" +
	"\vUNSPECIFIED\x10\x00\x12\x16\n" +
	"\x12BALANCE_NOT_ENOUGH\x10\x01\x12\x1a\n" +
	"\x16PREVIOUS_BET_NOT_EXIST\x10\x02\x12\x0f\n" +
	"\vALREADY_BET\x10\x03B(Z&github.com/nk-nigeria/cgp-common/protob\x06proto3"

var (
	file_sicbo_proto_rawDescOnce sync.Once
	file_sicbo_proto_rawDescData []byte
)

func file_sicbo_proto_rawDescGZIP() []byte {
	file_sicbo_proto_rawDescOnce.Do(func() {
		file_sicbo_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_sicbo_proto_rawDesc), len(file_sicbo_proto_rawDesc)))
	})
	return file_sicbo_proto_rawDescData
}

var file_sicbo_proto_enumTypes = make([]protoimpl.EnumInfo, 4)
var file_sicbo_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_sicbo_proto_goTypes = []any{
	(Dice)(0),                    // 0: proto.Dice
	(SicboBetCell)(0),            // 1: proto.SicboBetCell
	(SicboBetAction)(0),          // 2: proto.SicboBetAction
	(SicboBetRejectReason)(0),    // 3: proto.SicboBetRejectReason
	(*SicboBet)(nil),             // 4: proto.SicboBet
	(*SicboBetResult)(nil),       // 5: proto.SicboBetResult
	(*SicboPlayerBet)(nil),       // 6: proto.SicboPlayerBet
	(*SicboPlayerBetResult)(nil), // 7: proto.SicboPlayerBetResult
	(*SicboHand)(nil),            // 8: proto.SicboHand
	(*SicboGameFinish)(nil),      // 9: proto.SicboGameFinish
	(*SicboBetCellInfo)(nil),     // 10: proto.SicboBetCellInfo
	(*SicboUpdateDesk)(nil),      // 11: proto.SicboUpdateDesk
	(*SicboActionReject)(nil),    // 12: proto.SicboActionReject
}
var file_sicbo_proto_depIdxs = []int32{
	1,  // 0: proto.SicboBet.cell:type_name -> proto.SicboBetCell
	4,  // 1: proto.SicboBetResult.bet:type_name -> proto.SicboBet
	2,  // 2: proto.SicboPlayerBet.action:type_name -> proto.SicboBetAction
	4,  // 3: proto.SicboPlayerBet.bets:type_name -> proto.SicboBet
	5,  // 4: proto.SicboPlayerBetResult.list:type_name -> proto.SicboBetResult
	0,  // 5: proto.SicboHand.dices:type_name -> proto.Dice
	8,  // 6: proto.SicboGameFinish.hand:type_name -> proto.SicboHand
	1,  // 7: proto.SicboGameFinish.win_cells:type_name -> proto.SicboBetCell
	7,  // 8: proto.SicboGameFinish.list_bet_result:type_name -> proto.SicboPlayerBetResult
	1,  // 9: proto.SicboBetCellInfo.cell:type_name -> proto.SicboBetCell
	6,  // 10: proto.SicboUpdateDesk.user_bet:type_name -> proto.SicboPlayerBet
	10, // 11: proto.SicboUpdateDesk.desk_cell:type_name -> proto.SicboBetCellInfo
	8,  // 12: proto.SicboUpdateDesk.history:type_name -> proto.SicboHand
	3,  // 13: proto.SicboActionReject.reason:type_name -> proto.SicboBetRejectReason
	14, // [14:14] is the sub-list for method output_type
	14, // [14:14] is the sub-list for method input_type
	14, // [14:14] is the sub-list for extension type_name
	14, // [14:14] is the sub-list for extension extendee
	0,  // [0:14] is the sub-list for field type_name
}

func init() { file_sicbo_proto_init() }
func file_sicbo_proto_init() {
	if File_sicbo_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_sicbo_proto_rawDesc), len(file_sicbo_proto_rawDesc)),
			NumEnums:      4,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_sicbo_proto_goTypes,
		DependencyIndexes: file_sicbo_proto_depIdxs,
		EnumInfos:         file_sicbo_proto_enumTypes,
		MessageInfos:      file_sicbo_proto_msgTypes,
	}.Build()
	File_sicbo_proto = out.File
	file_sicbo_proto_goTypes = nil
	file_sicbo_proto_depIdxs = nil
}
