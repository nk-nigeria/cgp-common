/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface Bank {
  senderId: string;
  recipientId: string;
  chips: number;
  chipsInBank: number;
  action: Bank_Action;
  balancePrev: number;
  balanceCurr: number;
  percenFee: number;
  amountFee: number;
}

export enum Bank_Action {
  ACTION_UNSPECIFIED = 0,
  ACTION_SEND_GIFT = 1,
  ACTION_RECV_GIFT = 2,
  ACTION_REVERT_SEND_GIF = 3,
  ACTION_PUSH_TO_SAFE = 4,
  ACTION_WITHDRAW = 5,
  UNRECOGNIZED = -1,
}

export function bank_ActionFromJSON(object: any): Bank_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return Bank_Action.ACTION_UNSPECIFIED;
    case 1:
    case "ACTION_SEND_GIFT":
      return Bank_Action.ACTION_SEND_GIFT;
    case 2:
    case "ACTION_RECV_GIFT":
      return Bank_Action.ACTION_RECV_GIFT;
    case 3:
    case "ACTION_REVERT_SEND_GIF":
      return Bank_Action.ACTION_REVERT_SEND_GIF;
    case 4:
    case "ACTION_PUSH_TO_SAFE":
      return Bank_Action.ACTION_PUSH_TO_SAFE;
    case 5:
    case "ACTION_WITHDRAW":
      return Bank_Action.ACTION_WITHDRAW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Bank_Action.UNRECOGNIZED;
  }
}

export function bank_ActionToJSON(object: Bank_Action): string {
  switch (object) {
    case Bank_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case Bank_Action.ACTION_SEND_GIFT:
      return "ACTION_SEND_GIFT";
    case Bank_Action.ACTION_RECV_GIFT:
      return "ACTION_RECV_GIFT";
    case Bank_Action.ACTION_REVERT_SEND_GIF:
      return "ACTION_REVERT_SEND_GIF";
    case Bank_Action.ACTION_PUSH_TO_SAFE:
      return "ACTION_PUSH_TO_SAFE";
    case Bank_Action.ACTION_WITHDRAW:
      return "ACTION_WITHDRAW";
    case Bank_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseBank(): Bank {
  return {
    senderId: "",
    recipientId: "",
    chips: 0,
    chipsInBank: 0,
    action: 0,
    balancePrev: 0,
    balanceCurr: 0,
    percenFee: 0,
    amountFee: 0,
  };
}

export const Bank = {
  encode(message: Bank, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderId !== "") {
      writer.uint32(10).string(message.senderId);
    }
    if (message.recipientId !== "") {
      writer.uint32(18).string(message.recipientId);
    }
    if (message.chips !== 0) {
      writer.uint32(24).int64(message.chips);
    }
    if (message.chipsInBank !== 0) {
      writer.uint32(32).int64(message.chipsInBank);
    }
    if (message.action !== 0) {
      writer.uint32(40).int32(message.action);
    }
    if (message.balancePrev !== 0) {
      writer.uint32(48).int64(message.balancePrev);
    }
    if (message.balanceCurr !== 0) {
      writer.uint32(56).int64(message.balanceCurr);
    }
    if (message.percenFee !== 0) {
      writer.uint32(64).int64(message.percenFee);
    }
    if (message.amountFee !== 0) {
      writer.uint32(72).int64(message.amountFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bank {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBank();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recipientId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.chipsInBank = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.balancePrev = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.balanceCurr = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.percenFee = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.amountFee = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bank {
    return {
      senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
      recipientId: isSet(object.recipientId) ? globalThis.String(object.recipientId) : "",
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      chipsInBank: isSet(object.chipsInBank) ? globalThis.Number(object.chipsInBank) : 0,
      action: isSet(object.action) ? bank_ActionFromJSON(object.action) : 0,
      balancePrev: isSet(object.balancePrev) ? globalThis.Number(object.balancePrev) : 0,
      balanceCurr: isSet(object.balanceCurr) ? globalThis.Number(object.balanceCurr) : 0,
      percenFee: isSet(object.percenFee) ? globalThis.Number(object.percenFee) : 0,
      amountFee: isSet(object.amountFee) ? globalThis.Number(object.amountFee) : 0,
    };
  },

  toJSON(message: Bank): unknown {
    const obj: any = {};
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.recipientId !== "") {
      obj.recipientId = message.recipientId;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.chipsInBank !== 0) {
      obj.chipsInBank = Math.round(message.chipsInBank);
    }
    if (message.action !== 0) {
      obj.action = bank_ActionToJSON(message.action);
    }
    if (message.balancePrev !== 0) {
      obj.balancePrev = Math.round(message.balancePrev);
    }
    if (message.balanceCurr !== 0) {
      obj.balanceCurr = Math.round(message.balanceCurr);
    }
    if (message.percenFee !== 0) {
      obj.percenFee = Math.round(message.percenFee);
    }
    if (message.amountFee !== 0) {
      obj.amountFee = Math.round(message.amountFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bank>, I>>(base?: I): Bank {
    return Bank.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bank>, I>>(object: I): Bank {
    const message = createBaseBank();
    message.senderId = object.senderId ?? "";
    message.recipientId = object.recipientId ?? "";
    message.chips = object.chips ?? 0;
    message.chipsInBank = object.chipsInBank ?? 0;
    message.action = object.action ?? 0;
    message.balancePrev = object.balancePrev ?? 0;
    message.balanceCurr = object.balanceCurr ?? 0;
    message.percenFee = object.percenFee ?? 0;
    message.amountFee = object.amountFee ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
