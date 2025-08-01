// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        v3.21.12
// source: wallet.proto

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

type Bank_Action int32

const (
	Bank_ACTION_UNSPECIFIED     Bank_Action = 0
	Bank_ACTION_SEND_GIFT       Bank_Action = 1
	Bank_ACTION_RECV_GIFT       Bank_Action = 2
	Bank_ACTION_REVERT_SEND_GIF Bank_Action = 3
	Bank_ACTION_PUSH_TO_SAFE    Bank_Action = 4
	Bank_ACTION_WITHDRAW        Bank_Action = 5
)

// Enum value maps for Bank_Action.
var (
	Bank_Action_name = map[int32]string{
		0: "ACTION_UNSPECIFIED",
		1: "ACTION_SEND_GIFT",
		2: "ACTION_RECV_GIFT",
		3: "ACTION_REVERT_SEND_GIF",
		4: "ACTION_PUSH_TO_SAFE",
		5: "ACTION_WITHDRAW",
	}
	Bank_Action_value = map[string]int32{
		"ACTION_UNSPECIFIED":     0,
		"ACTION_SEND_GIFT":       1,
		"ACTION_RECV_GIFT":       2,
		"ACTION_REVERT_SEND_GIF": 3,
		"ACTION_PUSH_TO_SAFE":    4,
		"ACTION_WITHDRAW":        5,
	}
)

func (x Bank_Action) Enum() *Bank_Action {
	p := new(Bank_Action)
	*p = x
	return p
}

func (x Bank_Action) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Bank_Action) Descriptor() protoreflect.EnumDescriptor {
	return file_wallet_proto_enumTypes[0].Descriptor()
}

func (Bank_Action) Type() protoreflect.EnumType {
	return &file_wallet_proto_enumTypes[0]
}

func (x Bank_Action) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Bank_Action.Descriptor instead.
func (Bank_Action) EnumDescriptor() ([]byte, []int) {
	return file_wallet_proto_rawDescGZIP(), []int{0, 0}
}

type Bank struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	SenderId      string                 `protobuf:"bytes,1,opt,name=sender_id,json=senderId,proto3" json:"sender_id,omitempty"`
	RecipientId   string                 `protobuf:"bytes,2,opt,name=recipient_id,json=recipientId,proto3" json:"recipient_id,omitempty"`
	Chips         int64                  `protobuf:"varint,3,opt,name=chips,proto3" json:"chips,omitempty"`
	ChipsInBank   int64                  `protobuf:"varint,4,opt,name=chips_in_bank,json=chipsInBank,proto3" json:"chips_in_bank,omitempty"`
	Action        Bank_Action            `protobuf:"varint,5,opt,name=action,proto3,enum=proto.Bank_Action" json:"action,omitempty"`
	BalancePrev   int64                  `protobuf:"varint,6,opt,name=balance_prev,json=balancePrev,proto3" json:"balance_prev,omitempty"`
	BalanceCurr   int64                  `protobuf:"varint,7,opt,name=balance_curr,json=balanceCurr,proto3" json:"balance_curr,omitempty"`
	PercenFee     int64                  `protobuf:"varint,8,opt,name=percen_fee,json=percenFee,proto3" json:"percen_fee,omitempty"`
	AmountFee     int64                  `protobuf:"varint,9,opt,name=amount_fee,json=amountFee,proto3" json:"amount_fee,omitempty"`
	SenderSid     int64                  `protobuf:"varint,10,opt,name=sender_sid,json=senderSid,proto3" json:"sender_sid,omitempty"`
	RecipientSid  int64                  `protobuf:"varint,11,opt,name=recipient_sid,json=recipientSid,proto3" json:"recipient_sid,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Bank) Reset() {
	*x = Bank{}
	mi := &file_wallet_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Bank) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Bank) ProtoMessage() {}

func (x *Bank) ProtoReflect() protoreflect.Message {
	mi := &file_wallet_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Bank.ProtoReflect.Descriptor instead.
func (*Bank) Descriptor() ([]byte, []int) {
	return file_wallet_proto_rawDescGZIP(), []int{0}
}

func (x *Bank) GetSenderId() string {
	if x != nil {
		return x.SenderId
	}
	return ""
}

func (x *Bank) GetRecipientId() string {
	if x != nil {
		return x.RecipientId
	}
	return ""
}

func (x *Bank) GetChips() int64 {
	if x != nil {
		return x.Chips
	}
	return 0
}

func (x *Bank) GetChipsInBank() int64 {
	if x != nil {
		return x.ChipsInBank
	}
	return 0
}

func (x *Bank) GetAction() Bank_Action {
	if x != nil {
		return x.Action
	}
	return Bank_ACTION_UNSPECIFIED
}

func (x *Bank) GetBalancePrev() int64 {
	if x != nil {
		return x.BalancePrev
	}
	return 0
}

func (x *Bank) GetBalanceCurr() int64 {
	if x != nil {
		return x.BalanceCurr
	}
	return 0
}

func (x *Bank) GetPercenFee() int64 {
	if x != nil {
		return x.PercenFee
	}
	return 0
}

func (x *Bank) GetAmountFee() int64 {
	if x != nil {
		return x.AmountFee
	}
	return 0
}

func (x *Bank) GetSenderSid() int64 {
	if x != nil {
		return x.SenderSid
	}
	return 0
}

func (x *Bank) GetRecipientSid() int64 {
	if x != nil {
		return x.RecipientSid
	}
	return 0
}

var File_wallet_proto protoreflect.FileDescriptor

const file_wallet_proto_rawDesc = "" +
	"\n" +
	"\fwallet.proto\x12\x05proto\"\x8d\x04\n" +
	"\x04Bank\x12\x1b\n" +
	"\tsender_id\x18\x01 \x01(\tR\bsenderId\x12!\n" +
	"\frecipient_id\x18\x02 \x01(\tR\vrecipientId\x12\x14\n" +
	"\x05chips\x18\x03 \x01(\x03R\x05chips\x12\"\n" +
	"\rchips_in_bank\x18\x04 \x01(\x03R\vchipsInBank\x12*\n" +
	"\x06action\x18\x05 \x01(\x0e2\x12.proto.Bank.ActionR\x06action\x12!\n" +
	"\fbalance_prev\x18\x06 \x01(\x03R\vbalancePrev\x12!\n" +
	"\fbalance_curr\x18\a \x01(\x03R\vbalanceCurr\x12\x1d\n" +
	"\n" +
	"percen_fee\x18\b \x01(\x03R\tpercenFee\x12\x1d\n" +
	"\n" +
	"amount_fee\x18\t \x01(\x03R\tamountFee\x12\x1d\n" +
	"\n" +
	"sender_sid\x18\n" +
	" \x01(\x03R\tsenderSid\x12#\n" +
	"\rrecipient_sid\x18\v \x01(\x03R\frecipientSid\"\x96\x01\n" +
	"\x06Action\x12\x16\n" +
	"\x12ACTION_UNSPECIFIED\x10\x00\x12\x14\n" +
	"\x10ACTION_SEND_GIFT\x10\x01\x12\x14\n" +
	"\x10ACTION_RECV_GIFT\x10\x02\x12\x1a\n" +
	"\x16ACTION_REVERT_SEND_GIF\x10\x03\x12\x17\n" +
	"\x13ACTION_PUSH_TO_SAFE\x10\x04\x12\x13\n" +
	"\x0fACTION_WITHDRAW\x10\x05B(Z&github.com/nk-nigeria/cgp-common/protob\x06proto3"

var (
	file_wallet_proto_rawDescOnce sync.Once
	file_wallet_proto_rawDescData []byte
)

func file_wallet_proto_rawDescGZIP() []byte {
	file_wallet_proto_rawDescOnce.Do(func() {
		file_wallet_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_wallet_proto_rawDesc), len(file_wallet_proto_rawDesc)))
	})
	return file_wallet_proto_rawDescData
}

var file_wallet_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_wallet_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_wallet_proto_goTypes = []any{
	(Bank_Action)(0), // 0: proto.Bank.Action
	(*Bank)(nil),     // 1: proto.Bank
}
var file_wallet_proto_depIdxs = []int32{
	0, // 0: proto.Bank.action:type_name -> proto.Bank.Action
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_wallet_proto_init() }
func file_wallet_proto_init() {
	if File_wallet_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_wallet_proto_rawDesc), len(file_wallet_proto_rawDesc)),
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_wallet_proto_goTypes,
		DependencyIndexes: file_wallet_proto_depIdxs,
		EnumInfos:         file_wallet_proto_enumTypes,
		MessageInfos:      file_wallet_proto_msgTypes,
	}.Build()
	File_wallet_proto = out.File
	file_wallet_proto_goTypes = nil
	file_wallet_proto_depIdxs = nil
}
