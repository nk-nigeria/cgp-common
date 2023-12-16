/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "api";

/** The complete set of rpc used for communication between clients and server. */
export enum RPCCode {
  /** RPC_FIND_MATCH - No opcode specified. Unused. */
  RPC_FIND_MATCH = 0,
  RPC_CREATE_MATCH = 1,
  UNRECOGNIZED = -1,
}

export function rPCCodeFromJSON(object: any): RPCCode {
  switch (object) {
    case 0:
    case "RPC_FIND_MATCH":
      return RPCCode.RPC_FIND_MATCH;
    case 1:
    case "RPC_CREATE_MATCH":
      return RPCCode.RPC_CREATE_MATCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RPCCode.UNRECOGNIZED;
  }
}

export function rPCCodeToJSON(object: RPCCode): string {
  switch (object) {
    case RPCCode.RPC_FIND_MATCH:
      return "RPC_FIND_MATCH";
    case RPCCode.RPC_CREATE_MATCH:
      return "RPC_CREATE_MATCH";
    case RPCCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Payload for an RPC request to find a match. */
export interface RpcFindMatchRequest {
  /** User can choose a fast or normal speed match. */
  markUnit: number;
  gameCode: string;
  withNonOpen: boolean;
  create: boolean;
  mockCodeCard: number;
  userData: string;
}

export interface Match {
  matchId: string;
  size: number;
  maxSize: number;
  name: string;
  markUnit: number;
  open: boolean;
  mockCodeCard: number;
  userData: string;
}

/** Payload for an RPC response containing match IDs the user can join. */
export interface RpcFindMatchResponse {
  /** One or more matches that fit the user's request. */
  matches: Match[];
}

/** Payload for an RPC request to find a match. */
export interface RpcCreateMatchRequest {
  markUnit: number;
  gameCode: string;
  name: string;
  password: string;
}

/** Payload for an RPC response containing match IDs the user can join. */
export interface RpcCreateMatchResponse {
  /** One or more matches that fit the user's request. */
  matchId: string;
}

export interface Bet {
  enable: boolean;
  /** mức cược (chip) */
  markUnit: number;
  gameId: number;
  xJoin: number;
  agJoin: number;
  xPlayNow: number;
  agPlayNow: number;
  xLeave: number;
  agLeave: number;
  xFee: number;
  agFee: number;
  newFee: number;
}

export interface Bets {
  bets: Bet[];
}

function createBaseRpcFindMatchRequest(): RpcFindMatchRequest {
  return { markUnit: 0, gameCode: "", withNonOpen: false, create: false, mockCodeCard: 0, userData: "" };
}

export const RpcFindMatchRequest = {
  encode(message: RpcFindMatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.markUnit !== 0) {
      writer.uint32(8).int32(message.markUnit);
    }
    if (message.gameCode !== "") {
      writer.uint32(18).string(message.gameCode);
    }
    if (message.withNonOpen === true) {
      writer.uint32(24).bool(message.withNonOpen);
    }
    if (message.create === true) {
      writer.uint32(32).bool(message.create);
    }
    if (message.mockCodeCard !== 0) {
      writer.uint32(40).int32(message.mockCodeCard);
    }
    if (message.userData !== "") {
      writer.uint32(50).string(message.userData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcFindMatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcFindMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.markUnit = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gameCode = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.withNonOpen = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.create = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mockCodeCard = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.userData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RpcFindMatchRequest {
    return {
      markUnit: isSet(object.markUnit) ? globalThis.Number(object.markUnit) : 0,
      gameCode: isSet(object.gameCode) ? globalThis.String(object.gameCode) : "",
      withNonOpen: isSet(object.withNonOpen) ? globalThis.Boolean(object.withNonOpen) : false,
      create: isSet(object.create) ? globalThis.Boolean(object.create) : false,
      mockCodeCard: isSet(object.mockCodeCard) ? globalThis.Number(object.mockCodeCard) : 0,
      userData: isSet(object.userData) ? globalThis.String(object.userData) : "",
    };
  },

  toJSON(message: RpcFindMatchRequest): unknown {
    const obj: any = {};
    if (message.markUnit !== 0) {
      obj.markUnit = Math.round(message.markUnit);
    }
    if (message.gameCode !== "") {
      obj.gameCode = message.gameCode;
    }
    if (message.withNonOpen === true) {
      obj.withNonOpen = message.withNonOpen;
    }
    if (message.create === true) {
      obj.create = message.create;
    }
    if (message.mockCodeCard !== 0) {
      obj.mockCodeCard = Math.round(message.mockCodeCard);
    }
    if (message.userData !== "") {
      obj.userData = message.userData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RpcFindMatchRequest>, I>>(base?: I): RpcFindMatchRequest {
    return RpcFindMatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RpcFindMatchRequest>, I>>(object: I): RpcFindMatchRequest {
    const message = createBaseRpcFindMatchRequest();
    message.markUnit = object.markUnit ?? 0;
    message.gameCode = object.gameCode ?? "";
    message.withNonOpen = object.withNonOpen ?? false;
    message.create = object.create ?? false;
    message.mockCodeCard = object.mockCodeCard ?? 0;
    message.userData = object.userData ?? "";
    return message;
  },
};

function createBaseMatch(): Match {
  return { matchId: "", size: 0, maxSize: 0, name: "", markUnit: 0, open: false, mockCodeCard: 0, userData: "" };
}

export const Match = {
  encode(message: Match, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "") {
      writer.uint32(10).string(message.matchId);
    }
    if (message.size !== 0) {
      writer.uint32(16).int32(message.size);
    }
    if (message.maxSize !== 0) {
      writer.uint32(24).int32(message.maxSize);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.markUnit !== 0) {
      writer.uint32(40).int32(message.markUnit);
    }
    if (message.open === true) {
      writer.uint32(48).bool(message.open);
    }
    if (message.mockCodeCard !== 0) {
      writer.uint32(56).int32(message.mockCodeCard);
    }
    if (message.userData !== "") {
      writer.uint32(66).string(message.userData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Match {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.size = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxSize = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.markUnit = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.open = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.mockCodeCard = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.userData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Match {
    return {
      matchId: isSet(object.matchId) ? globalThis.String(object.matchId) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      maxSize: isSet(object.maxSize) ? globalThis.Number(object.maxSize) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      markUnit: isSet(object.markUnit) ? globalThis.Number(object.markUnit) : 0,
      open: isSet(object.open) ? globalThis.Boolean(object.open) : false,
      mockCodeCard: isSet(object.mockCodeCard) ? globalThis.Number(object.mockCodeCard) : 0,
      userData: isSet(object.userData) ? globalThis.String(object.userData) : "",
    };
  },

  toJSON(message: Match): unknown {
    const obj: any = {};
    if (message.matchId !== "") {
      obj.matchId = message.matchId;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.maxSize !== 0) {
      obj.maxSize = Math.round(message.maxSize);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.markUnit !== 0) {
      obj.markUnit = Math.round(message.markUnit);
    }
    if (message.open === true) {
      obj.open = message.open;
    }
    if (message.mockCodeCard !== 0) {
      obj.mockCodeCard = Math.round(message.mockCodeCard);
    }
    if (message.userData !== "") {
      obj.userData = message.userData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Match>, I>>(base?: I): Match {
    return Match.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Match>, I>>(object: I): Match {
    const message = createBaseMatch();
    message.matchId = object.matchId ?? "";
    message.size = object.size ?? 0;
    message.maxSize = object.maxSize ?? 0;
    message.name = object.name ?? "";
    message.markUnit = object.markUnit ?? 0;
    message.open = object.open ?? false;
    message.mockCodeCard = object.mockCodeCard ?? 0;
    message.userData = object.userData ?? "";
    return message;
  },
};

function createBaseRpcFindMatchResponse(): RpcFindMatchResponse {
  return { matches: [] };
}

export const RpcFindMatchResponse = {
  encode(message: RpcFindMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matches) {
      Match.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcFindMatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcFindMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matches.push(Match.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RpcFindMatchResponse {
    return {
      matches: globalThis.Array.isArray(object?.matches) ? object.matches.map((e: any) => Match.fromJSON(e)) : [],
    };
  },

  toJSON(message: RpcFindMatchResponse): unknown {
    const obj: any = {};
    if (message.matches?.length) {
      obj.matches = message.matches.map((e) => Match.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RpcFindMatchResponse>, I>>(base?: I): RpcFindMatchResponse {
    return RpcFindMatchResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RpcFindMatchResponse>, I>>(object: I): RpcFindMatchResponse {
    const message = createBaseRpcFindMatchResponse();
    message.matches = object.matches?.map((e) => Match.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRpcCreateMatchRequest(): RpcCreateMatchRequest {
  return { markUnit: 0, gameCode: "", name: "", password: "" };
}

export const RpcCreateMatchRequest = {
  encode(message: RpcCreateMatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.markUnit !== 0) {
      writer.uint32(8).int32(message.markUnit);
    }
    if (message.gameCode !== "") {
      writer.uint32(18).string(message.gameCode);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcCreateMatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCreateMatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.markUnit = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gameCode = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RpcCreateMatchRequest {
    return {
      markUnit: isSet(object.markUnit) ? globalThis.Number(object.markUnit) : 0,
      gameCode: isSet(object.gameCode) ? globalThis.String(object.gameCode) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: RpcCreateMatchRequest): unknown {
    const obj: any = {};
    if (message.markUnit !== 0) {
      obj.markUnit = Math.round(message.markUnit);
    }
    if (message.gameCode !== "") {
      obj.gameCode = message.gameCode;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RpcCreateMatchRequest>, I>>(base?: I): RpcCreateMatchRequest {
    return RpcCreateMatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RpcCreateMatchRequest>, I>>(object: I): RpcCreateMatchRequest {
    const message = createBaseRpcCreateMatchRequest();
    message.markUnit = object.markUnit ?? 0;
    message.gameCode = object.gameCode ?? "";
    message.name = object.name ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseRpcCreateMatchResponse(): RpcCreateMatchResponse {
  return { matchId: "" };
}

export const RpcCreateMatchResponse = {
  encode(message: RpcCreateMatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "") {
      writer.uint32(10).string(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RpcCreateMatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCreateMatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RpcCreateMatchResponse {
    return { matchId: isSet(object.matchId) ? globalThis.String(object.matchId) : "" };
  },

  toJSON(message: RpcCreateMatchResponse): unknown {
    const obj: any = {};
    if (message.matchId !== "") {
      obj.matchId = message.matchId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RpcCreateMatchResponse>, I>>(base?: I): RpcCreateMatchResponse {
    return RpcCreateMatchResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RpcCreateMatchResponse>, I>>(object: I): RpcCreateMatchResponse {
    const message = createBaseRpcCreateMatchResponse();
    message.matchId = object.matchId ?? "";
    return message;
  },
};

function createBaseBet(): Bet {
  return {
    enable: false,
    markUnit: 0,
    gameId: 0,
    xJoin: 0,
    agJoin: 0,
    xPlayNow: 0,
    agPlayNow: 0,
    xLeave: 0,
    agLeave: 0,
    xFee: 0,
    agFee: 0,
    newFee: 0,
  };
}

export const Bet = {
  encode(message: Bet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.markUnit !== 0) {
      writer.uint32(16).int64(message.markUnit);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).int64(message.gameId);
    }
    if (message.xJoin !== 0) {
      writer.uint32(32).int64(message.xJoin);
    }
    if (message.agJoin !== 0) {
      writer.uint32(40).int64(message.agJoin);
    }
    if (message.xPlayNow !== 0) {
      writer.uint32(48).int64(message.xPlayNow);
    }
    if (message.agPlayNow !== 0) {
      writer.uint32(56).int64(message.agPlayNow);
    }
    if (message.xLeave !== 0) {
      writer.uint32(64).int64(message.xLeave);
    }
    if (message.agLeave !== 0) {
      writer.uint32(72).int64(message.agLeave);
    }
    if (message.xFee !== 0) {
      writer.uint32(80).int64(message.xFee);
    }
    if (message.agFee !== 0) {
      writer.uint32(88).int64(message.agFee);
    }
    if (message.newFee !== 0) {
      writer.uint32(96).int64(message.newFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.markUnit = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.xJoin = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.agJoin = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.xPlayNow = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.agPlayNow = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.xLeave = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.agLeave = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.xFee = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.agFee = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.newFee = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bet {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      markUnit: isSet(object.markUnit) ? globalThis.Number(object.markUnit) : 0,
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      xJoin: isSet(object.xJoin) ? globalThis.Number(object.xJoin) : 0,
      agJoin: isSet(object.agJoin) ? globalThis.Number(object.agJoin) : 0,
      xPlayNow: isSet(object.xPlayNow) ? globalThis.Number(object.xPlayNow) : 0,
      agPlayNow: isSet(object.agPlayNow) ? globalThis.Number(object.agPlayNow) : 0,
      xLeave: isSet(object.xLeave) ? globalThis.Number(object.xLeave) : 0,
      agLeave: isSet(object.agLeave) ? globalThis.Number(object.agLeave) : 0,
      xFee: isSet(object.xFee) ? globalThis.Number(object.xFee) : 0,
      agFee: isSet(object.agFee) ? globalThis.Number(object.agFee) : 0,
      newFee: isSet(object.newFee) ? globalThis.Number(object.newFee) : 0,
    };
  },

  toJSON(message: Bet): unknown {
    const obj: any = {};
    if (message.enable === true) {
      obj.enable = message.enable;
    }
    if (message.markUnit !== 0) {
      obj.markUnit = Math.round(message.markUnit);
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.xJoin !== 0) {
      obj.xJoin = Math.round(message.xJoin);
    }
    if (message.agJoin !== 0) {
      obj.agJoin = Math.round(message.agJoin);
    }
    if (message.xPlayNow !== 0) {
      obj.xPlayNow = Math.round(message.xPlayNow);
    }
    if (message.agPlayNow !== 0) {
      obj.agPlayNow = Math.round(message.agPlayNow);
    }
    if (message.xLeave !== 0) {
      obj.xLeave = Math.round(message.xLeave);
    }
    if (message.agLeave !== 0) {
      obj.agLeave = Math.round(message.agLeave);
    }
    if (message.xFee !== 0) {
      obj.xFee = Math.round(message.xFee);
    }
    if (message.agFee !== 0) {
      obj.agFee = Math.round(message.agFee);
    }
    if (message.newFee !== 0) {
      obj.newFee = Math.round(message.newFee);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bet>, I>>(base?: I): Bet {
    return Bet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bet>, I>>(object: I): Bet {
    const message = createBaseBet();
    message.enable = object.enable ?? false;
    message.markUnit = object.markUnit ?? 0;
    message.gameId = object.gameId ?? 0;
    message.xJoin = object.xJoin ?? 0;
    message.agJoin = object.agJoin ?? 0;
    message.xPlayNow = object.xPlayNow ?? 0;
    message.agPlayNow = object.agPlayNow ?? 0;
    message.xLeave = object.xLeave ?? 0;
    message.agLeave = object.agLeave ?? 0;
    message.xFee = object.xFee ?? 0;
    message.agFee = object.agFee ?? 0;
    message.newFee = object.newFee ?? 0;
    return message;
  },
};

function createBaseBets(): Bets {
  return { bets: [] };
}

export const Bets = {
  encode(message: Bets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bets) {
      Bet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bets.push(Bet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bets {
    return { bets: globalThis.Array.isArray(object?.bets) ? object.bets.map((e: any) => Bet.fromJSON(e)) : [] };
  },

  toJSON(message: Bets): unknown {
    const obj: any = {};
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => Bet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bets>, I>>(base?: I): Bets {
    return Bets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bets>, I>>(object: I): Bets {
    const message = createBaseBets();
    message.bets = object.bets?.map((e) => Bet.fromPartial(e)) || [];
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
