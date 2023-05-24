/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface CommonApiLeaderBoardRecord {
  gameCode: string;
  userId: string;
  score: number;
}

function createBaseCommonApiLeaderBoardRecord(): CommonApiLeaderBoardRecord {
  return { gameCode: "", userId: "", score: 0 };
}

export const CommonApiLeaderBoardRecord = {
  encode(message: CommonApiLeaderBoardRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameCode !== "") {
      writer.uint32(10).string(message.gameCode);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.score !== 0) {
      writer.uint32(24).int64(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommonApiLeaderBoardRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonApiLeaderBoardRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gameCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.score = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CommonApiLeaderBoardRecord {
    return {
      gameCode: isSet(object.gameCode) ? String(object.gameCode) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: CommonApiLeaderBoardRecord): unknown {
    const obj: any = {};
    message.gameCode !== undefined && (obj.gameCode = message.gameCode);
    message.userId !== undefined && (obj.userId = message.userId);
    message.score !== undefined && (obj.score = Math.round(message.score));
    return obj;
  },

  create<I extends Exact<DeepPartial<CommonApiLeaderBoardRecord>, I>>(base?: I): CommonApiLeaderBoardRecord {
    return CommonApiLeaderBoardRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CommonApiLeaderBoardRecord>, I>>(object: I): CommonApiLeaderBoardRecord {
    const message = createBaseCommonApiLeaderBoardRecord();
    message.gameCode = object.gameCode ?? "";
    message.userId = object.userId ?? "";
    message.score = object.score ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
