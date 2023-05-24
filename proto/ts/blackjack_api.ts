/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Card } from "./chinese_poker_game_api";

export const protobufPackage = "api";

/** status for each hand, user can have maximum 2 hand ( by spliting ) */
export enum BlackjackHandType {
  BLACKJACK_HAND_TYPE_UNSPECIFIED = 0,
  BLACKJACK_HAND_TYPE_BUSTED = 1,
  BLACKJACK_HAND_TYPE_NORMAL = 2,
  BLACKJACK_HAND_TYPE_21P = 3,
  BLACKJACK_HAND_TYPE_BLACKJACK = 4,
  UNRECOGNIZED = -1,
}

export function blackjackHandTypeFromJSON(object: any): BlackjackHandType {
  switch (object) {
    case 0:
    case "BLACKJACK_HAND_TYPE_UNSPECIFIED":
      return BlackjackHandType.BLACKJACK_HAND_TYPE_UNSPECIFIED;
    case 1:
    case "BLACKJACK_HAND_TYPE_BUSTED":
      return BlackjackHandType.BLACKJACK_HAND_TYPE_BUSTED;
    case 2:
    case "BLACKJACK_HAND_TYPE_NORMAL":
      return BlackjackHandType.BLACKJACK_HAND_TYPE_NORMAL;
    case 3:
    case "BLACKJACK_HAND_TYPE_21P":
      return BlackjackHandType.BLACKJACK_HAND_TYPE_21P;
    case 4:
    case "BLACKJACK_HAND_TYPE_BLACKJACK":
      return BlackjackHandType.BLACKJACK_HAND_TYPE_BLACKJACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlackjackHandType.UNRECOGNIZED;
  }
}

export function blackjackHandTypeToJSON(object: BlackjackHandType): string {
  switch (object) {
    case BlackjackHandType.BLACKJACK_HAND_TYPE_UNSPECIFIED:
      return "BLACKJACK_HAND_TYPE_UNSPECIFIED";
    case BlackjackHandType.BLACKJACK_HAND_TYPE_BUSTED:
      return "BLACKJACK_HAND_TYPE_BUSTED";
    case BlackjackHandType.BLACKJACK_HAND_TYPE_NORMAL:
      return "BLACKJACK_HAND_TYPE_NORMAL";
    case BlackjackHandType.BLACKJACK_HAND_TYPE_21P:
      return "BLACKJACK_HAND_TYPE_21P";
    case BlackjackHandType.BLACKJACK_HAND_TYPE_BLACKJACK:
      return "BLACKJACK_HAND_TYPE_BLACKJACK";
    case BlackjackHandType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BlackjackActionCode {
  BLACKJACK_ACTION_UNSPECIFIED = 0,
  BLACKJACK_ACTION_STAY = 1,
  BLACKJACK_ACTION_HIT = 2,
  BLACKJACK_ACTION_DOUBLE = 3,
  BLACKJACK_ACTION_SPLIT = 4,
  BLACKJACK_ACTION_INSURANCE = 5,
  UNRECOGNIZED = -1,
}

export function blackjackActionCodeFromJSON(object: any): BlackjackActionCode {
  switch (object) {
    case 0:
    case "BLACKJACK_ACTION_UNSPECIFIED":
      return BlackjackActionCode.BLACKJACK_ACTION_UNSPECIFIED;
    case 1:
    case "BLACKJACK_ACTION_STAY":
      return BlackjackActionCode.BLACKJACK_ACTION_STAY;
    case 2:
    case "BLACKJACK_ACTION_HIT":
      return BlackjackActionCode.BLACKJACK_ACTION_HIT;
    case 3:
    case "BLACKJACK_ACTION_DOUBLE":
      return BlackjackActionCode.BLACKJACK_ACTION_DOUBLE;
    case 4:
    case "BLACKJACK_ACTION_SPLIT":
      return BlackjackActionCode.BLACKJACK_ACTION_SPLIT;
    case 5:
    case "BLACKJACK_ACTION_INSURANCE":
      return BlackjackActionCode.BLACKJACK_ACTION_INSURANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlackjackActionCode.UNRECOGNIZED;
  }
}

export function blackjackActionCodeToJSON(object: BlackjackActionCode): string {
  switch (object) {
    case BlackjackActionCode.BLACKJACK_ACTION_UNSPECIFIED:
      return "BLACKJACK_ACTION_UNSPECIFIED";
    case BlackjackActionCode.BLACKJACK_ACTION_STAY:
      return "BLACKJACK_ACTION_STAY";
    case BlackjackActionCode.BLACKJACK_ACTION_HIT:
      return "BLACKJACK_ACTION_HIT";
    case BlackjackActionCode.BLACKJACK_ACTION_DOUBLE:
      return "BLACKJACK_ACTION_DOUBLE";
    case BlackjackActionCode.BLACKJACK_ACTION_SPLIT:
      return "BLACKJACK_ACTION_SPLIT";
    case BlackjackActionCode.BLACKJACK_ACTION_INSURANCE:
      return "BLACKJACK_ACTION_INSURANCE";
    case BlackjackActionCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BlackjackBetCode {
  BLACKJACK_BET_NORMAL = 0,
  BLACKJACK_BET_REBET = 1,
  BLACKJACK_BET_DOUBLE = 2,
  UNRECOGNIZED = -1,
}

export function blackjackBetCodeFromJSON(object: any): BlackjackBetCode {
  switch (object) {
    case 0:
    case "BLACKJACK_BET_NORMAL":
      return BlackjackBetCode.BLACKJACK_BET_NORMAL;
    case 1:
    case "BLACKJACK_BET_REBET":
      return BlackjackBetCode.BLACKJACK_BET_REBET;
    case 2:
    case "BLACKJACK_BET_DOUBLE":
      return BlackjackBetCode.BLACKJACK_BET_DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlackjackBetCode.UNRECOGNIZED;
  }
}

export function blackjackBetCodeToJSON(object: BlackjackBetCode): string {
  switch (object) {
    case BlackjackBetCode.BLACKJACK_BET_NORMAL:
      return "BLACKJACK_BET_NORMAL";
    case BlackjackBetCode.BLACKJACK_BET_REBET:
      return "BLACKJACK_BET_REBET";
    case BlackjackBetCode.BLACKJACK_BET_DOUBLE:
      return "BLACKJACK_BET_DOUBLE";
    case BlackjackBetCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BlackjackPlayerType {
  BLACKJACK_PLAYER = 0,
  BLACKJACK_BANKER = 1,
  UNRECOGNIZED = -1,
}

export function blackjackPlayerTypeFromJSON(object: any): BlackjackPlayerType {
  switch (object) {
    case 0:
    case "BLACKJACK_PLAYER":
      return BlackjackPlayerType.BLACKJACK_PLAYER;
    case 1:
    case "BLACKJACK_BANKER":
      return BlackjackPlayerType.BLACKJACK_BANKER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlackjackPlayerType.UNRECOGNIZED;
  }
}

export function blackjackPlayerTypeToJSON(object: BlackjackPlayerType): string {
  switch (object) {
    case BlackjackPlayerType.BLACKJACK_PLAYER:
      return "BLACKJACK_PLAYER";
    case BlackjackPlayerType.BLACKJACK_BANKER:
      return "BLACKJACK_BANKER";
    case BlackjackPlayerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BlackjackHandN0 {
  BLACKJACK_HAND_UNSPECIFIED = 0,
  BLACKJACK_HAND_1ST = 1,
  BLACKJACK_HAND_2ND = 2,
  UNRECOGNIZED = -1,
}

export function blackjackHandN0FromJSON(object: any): BlackjackHandN0 {
  switch (object) {
    case 0:
    case "BLACKJACK_HAND_UNSPECIFIED":
      return BlackjackHandN0.BLACKJACK_HAND_UNSPECIFIED;
    case 1:
    case "BLACKJACK_HAND_1ST":
      return BlackjackHandN0.BLACKJACK_HAND_1ST;
    case 2:
    case "BLACKJACK_HAND_2ND":
      return BlackjackHandN0.BLACKJACK_HAND_2ND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BlackjackHandN0.UNRECOGNIZED;
  }
}

export function blackjackHandN0ToJSON(object: BlackjackHandN0): string {
  switch (object) {
    case BlackjackHandN0.BLACKJACK_HAND_UNSPECIFIED:
      return "BLACKJACK_HAND_UNSPECIFIED";
    case BlackjackHandN0.BLACKJACK_HAND_1ST:
      return "BLACKJACK_HAND_1ST";
    case BlackjackHandN0.BLACKJACK_HAND_2ND:
      return "BLACKJACK_HAND_2ND";
    case BlackjackHandN0.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BlackjackAction {
  userId: string;
  code: BlackjackActionCode;
}

export interface BlackjackBet {
  userId: string;
  chips: number;
  code: BlackjackBetCode;
}

/** is_win: -1 -> lost, 1 -> win, 0 -> tie */
export interface BlackjackBetResult {
  betAmount: number;
  winAmount: number;
  total: number;
  isWin: number;
}

export interface BlackjackPlayerBet {
  userId: string;
  insurance: number;
  first: number;
  second: number;
}

export interface BlackjackPLayerBetResult {
  userId: string;
  insurance: BlackjackBetResult | undefined;
  first: BlackjackBetResult | undefined;
  second: BlackjackBetResult | undefined;
}

/**
 * when is_banker=true, no user_id is send along
 * if is_reveal_banker_hidden_card, only all_cards is send along
 */
export interface BlackjackUpdateDeal {
  isBanker: boolean;
  isRevealBankerHiddenCard: boolean;
  userId: string;
  handN0: BlackjackHandN0;
  newCards: Card[];
  hand:
    | BlackjackPlayerHand
    | undefined;
  /** only send when user rejoin table, use it to restore the game state, one with userId = "" is banker */
  allPlayerHand: BlackjackPlayerHand[];
}

export interface BlackjackLegalActions {
  userId: string;
  actions: BlackjackActionCode[];
}

export interface BlackjackHand {
  cards: Card[];
  type: BlackjackHandType;
  point: number;
}

export interface BlackjackPlayerHand {
  userId: string;
  first: BlackjackHand | undefined;
  second: BlackjackHand | undefined;
}

/** case player have 2 hands then hand <- 0|1 else 0 */
export interface BlackjackPlayerTurn {
  isPlayer: string;
  userId: string;
  handN0: BlackjackHandN0;
}

export interface BlackjackUpdateDesk {
  isInsuranceTurnEnter: boolean;
  isNewTurn: boolean;
  inTurn: string;
  handN0: BlackjackHandN0;
  isUpdateBet: boolean;
  bet: BlackjackPlayerBet | undefined;
  isUpdateLegalAction: boolean;
  actions: BlackjackLegalActions | undefined;
  isSplitHand: boolean;
  hand: BlackjackPlayerHand | undefined;
  isBankerNotBlackjack: boolean;
  playersBet: BlackjackPlayerBet[];
}

export interface BlackjackUpdateFinish {
  betResults: BlackjackPLayerBetResult[];
}

function createBaseBlackjackAction(): BlackjackAction {
  return { userId: "", code: 0 };
}

export const BlackjackAction = {
  encode(message: BlackjackAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.code !== 0) {
      writer.uint32(16).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackAction {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      code: isSet(object.code) ? blackjackActionCodeFromJSON(object.code) : 0,
    };
  },

  toJSON(message: BlackjackAction): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.code !== undefined && (obj.code = blackjackActionCodeToJSON(message.code));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackAction>, I>>(base?: I): BlackjackAction {
    return BlackjackAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackAction>, I>>(object: I): BlackjackAction {
    const message = createBaseBlackjackAction();
    message.userId = object.userId ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseBlackjackBet(): BlackjackBet {
  return { userId: "", chips: 0, code: 0 };
}

export const BlackjackBet = {
  encode(message: BlackjackBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.code !== 0) {
      writer.uint32(24).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackBet {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      chips: isSet(object.chips) ? Number(object.chips) : 0,
      code: isSet(object.code) ? blackjackBetCodeFromJSON(object.code) : 0,
    };
  },

  toJSON(message: BlackjackBet): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.chips !== undefined && (obj.chips = Math.round(message.chips));
    message.code !== undefined && (obj.code = blackjackBetCodeToJSON(message.code));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackBet>, I>>(base?: I): BlackjackBet {
    return BlackjackBet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackBet>, I>>(object: I): BlackjackBet {
    const message = createBaseBlackjackBet();
    message.userId = object.userId ?? "";
    message.chips = object.chips ?? 0;
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseBlackjackBetResult(): BlackjackBetResult {
  return { betAmount: 0, winAmount: 0, total: 0, isWin: 0 };
}

export const BlackjackBetResult = {
  encode(message: BlackjackBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.betAmount !== 0) {
      writer.uint32(8).int64(message.betAmount);
    }
    if (message.winAmount !== 0) {
      writer.uint32(16).int64(message.winAmount);
    }
    if (message.total !== 0) {
      writer.uint32(24).int64(message.total);
    }
    if (message.isWin !== 0) {
      writer.uint32(32).int32(message.isWin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackBetResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.betAmount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.winAmount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isWin = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackBetResult {
    return {
      betAmount: isSet(object.betAmount) ? Number(object.betAmount) : 0,
      winAmount: isSet(object.winAmount) ? Number(object.winAmount) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
      isWin: isSet(object.isWin) ? Number(object.isWin) : 0,
    };
  },

  toJSON(message: BlackjackBetResult): unknown {
    const obj: any = {};
    message.betAmount !== undefined && (obj.betAmount = Math.round(message.betAmount));
    message.winAmount !== undefined && (obj.winAmount = Math.round(message.winAmount));
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.isWin !== undefined && (obj.isWin = Math.round(message.isWin));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackBetResult>, I>>(base?: I): BlackjackBetResult {
    return BlackjackBetResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackBetResult>, I>>(object: I): BlackjackBetResult {
    const message = createBaseBlackjackBetResult();
    message.betAmount = object.betAmount ?? 0;
    message.winAmount = object.winAmount ?? 0;
    message.total = object.total ?? 0;
    message.isWin = object.isWin ?? 0;
    return message;
  },
};

function createBaseBlackjackPlayerBet(): BlackjackPlayerBet {
  return { userId: "", insurance: 0, first: 0, second: 0 };
}

export const BlackjackPlayerBet = {
  encode(message: BlackjackPlayerBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.insurance !== 0) {
      writer.uint32(16).int64(message.insurance);
    }
    if (message.first !== 0) {
      writer.uint32(24).int64(message.first);
    }
    if (message.second !== 0) {
      writer.uint32(32).int64(message.second);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackPlayerBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackPlayerBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.insurance = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.first = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.second = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackPlayerBet {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      insurance: isSet(object.insurance) ? Number(object.insurance) : 0,
      first: isSet(object.first) ? Number(object.first) : 0,
      second: isSet(object.second) ? Number(object.second) : 0,
    };
  },

  toJSON(message: BlackjackPlayerBet): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.insurance !== undefined && (obj.insurance = Math.round(message.insurance));
    message.first !== undefined && (obj.first = Math.round(message.first));
    message.second !== undefined && (obj.second = Math.round(message.second));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackPlayerBet>, I>>(base?: I): BlackjackPlayerBet {
    return BlackjackPlayerBet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackPlayerBet>, I>>(object: I): BlackjackPlayerBet {
    const message = createBaseBlackjackPlayerBet();
    message.userId = object.userId ?? "";
    message.insurance = object.insurance ?? 0;
    message.first = object.first ?? 0;
    message.second = object.second ?? 0;
    return message;
  },
};

function createBaseBlackjackPLayerBetResult(): BlackjackPLayerBetResult {
  return { userId: "", insurance: undefined, first: undefined, second: undefined };
}

export const BlackjackPLayerBetResult = {
  encode(message: BlackjackPLayerBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.insurance !== undefined) {
      BlackjackBetResult.encode(message.insurance, writer.uint32(18).fork()).ldelim();
    }
    if (message.first !== undefined) {
      BlackjackBetResult.encode(message.first, writer.uint32(26).fork()).ldelim();
    }
    if (message.second !== undefined) {
      BlackjackBetResult.encode(message.second, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackPLayerBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackPLayerBetResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.insurance = BlackjackBetResult.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.first = BlackjackBetResult.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.second = BlackjackBetResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackPLayerBetResult {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      insurance: isSet(object.insurance) ? BlackjackBetResult.fromJSON(object.insurance) : undefined,
      first: isSet(object.first) ? BlackjackBetResult.fromJSON(object.first) : undefined,
      second: isSet(object.second) ? BlackjackBetResult.fromJSON(object.second) : undefined,
    };
  },

  toJSON(message: BlackjackPLayerBetResult): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.insurance !== undefined &&
      (obj.insurance = message.insurance ? BlackjackBetResult.toJSON(message.insurance) : undefined);
    message.first !== undefined && (obj.first = message.first ? BlackjackBetResult.toJSON(message.first) : undefined);
    message.second !== undefined &&
      (obj.second = message.second ? BlackjackBetResult.toJSON(message.second) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackPLayerBetResult>, I>>(base?: I): BlackjackPLayerBetResult {
    return BlackjackPLayerBetResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackPLayerBetResult>, I>>(object: I): BlackjackPLayerBetResult {
    const message = createBaseBlackjackPLayerBetResult();
    message.userId = object.userId ?? "";
    message.insurance = (object.insurance !== undefined && object.insurance !== null)
      ? BlackjackBetResult.fromPartial(object.insurance)
      : undefined;
    message.first = (object.first !== undefined && object.first !== null)
      ? BlackjackBetResult.fromPartial(object.first)
      : undefined;
    message.second = (object.second !== undefined && object.second !== null)
      ? BlackjackBetResult.fromPartial(object.second)
      : undefined;
    return message;
  },
};

function createBaseBlackjackUpdateDeal(): BlackjackUpdateDeal {
  return {
    isBanker: false,
    isRevealBankerHiddenCard: false,
    userId: "",
    handN0: 0,
    newCards: [],
    hand: undefined,
    allPlayerHand: [],
  };
}

export const BlackjackUpdateDeal = {
  encode(message: BlackjackUpdateDeal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isBanker === true) {
      writer.uint32(8).bool(message.isBanker);
    }
    if (message.isRevealBankerHiddenCard === true) {
      writer.uint32(16).bool(message.isRevealBankerHiddenCard);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.handN0 !== 0) {
      writer.uint32(32).int32(message.handN0);
    }
    for (const v of message.newCards) {
      Card.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.hand !== undefined) {
      BlackjackPlayerHand.encode(message.hand, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.allPlayerHand) {
      BlackjackPlayerHand.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackUpdateDeal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackUpdateDeal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isBanker = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isRevealBankerHiddenCard = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.handN0 = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.newCards.push(Card.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.hand = BlackjackPlayerHand.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.allPlayerHand.push(BlackjackPlayerHand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackUpdateDeal {
    return {
      isBanker: isSet(object.isBanker) ? Boolean(object.isBanker) : false,
      isRevealBankerHiddenCard: isSet(object.isRevealBankerHiddenCard)
        ? Boolean(object.isRevealBankerHiddenCard)
        : false,
      userId: isSet(object.userId) ? String(object.userId) : "",
      handN0: isSet(object.handN0) ? blackjackHandN0FromJSON(object.handN0) : 0,
      newCards: Array.isArray(object?.newCards) ? object.newCards.map((e: any) => Card.fromJSON(e)) : [],
      hand: isSet(object.hand) ? BlackjackPlayerHand.fromJSON(object.hand) : undefined,
      allPlayerHand: Array.isArray(object?.allPlayerHand)
        ? object.allPlayerHand.map((e: any) => BlackjackPlayerHand.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BlackjackUpdateDeal): unknown {
    const obj: any = {};
    message.isBanker !== undefined && (obj.isBanker = message.isBanker);
    message.isRevealBankerHiddenCard !== undefined && (obj.isRevealBankerHiddenCard = message.isRevealBankerHiddenCard);
    message.userId !== undefined && (obj.userId = message.userId);
    message.handN0 !== undefined && (obj.handN0 = blackjackHandN0ToJSON(message.handN0));
    if (message.newCards) {
      obj.newCards = message.newCards.map((e) => e ? Card.toJSON(e) : undefined);
    } else {
      obj.newCards = [];
    }
    message.hand !== undefined && (obj.hand = message.hand ? BlackjackPlayerHand.toJSON(message.hand) : undefined);
    if (message.allPlayerHand) {
      obj.allPlayerHand = message.allPlayerHand.map((e) => e ? BlackjackPlayerHand.toJSON(e) : undefined);
    } else {
      obj.allPlayerHand = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackUpdateDeal>, I>>(base?: I): BlackjackUpdateDeal {
    return BlackjackUpdateDeal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackUpdateDeal>, I>>(object: I): BlackjackUpdateDeal {
    const message = createBaseBlackjackUpdateDeal();
    message.isBanker = object.isBanker ?? false;
    message.isRevealBankerHiddenCard = object.isRevealBankerHiddenCard ?? false;
    message.userId = object.userId ?? "";
    message.handN0 = object.handN0 ?? 0;
    message.newCards = object.newCards?.map((e) => Card.fromPartial(e)) || [];
    message.hand = (object.hand !== undefined && object.hand !== null)
      ? BlackjackPlayerHand.fromPartial(object.hand)
      : undefined;
    message.allPlayerHand = object.allPlayerHand?.map((e) => BlackjackPlayerHand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlackjackLegalActions(): BlackjackLegalActions {
  return { userId: "", actions: [] };
}

export const BlackjackLegalActions = {
  encode(message: BlackjackLegalActions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    writer.uint32(18).fork();
    for (const v of message.actions) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackLegalActions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackLegalActions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.actions.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actions.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackLegalActions {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => blackjackActionCodeFromJSON(e)) : [],
    };
  },

  toJSON(message: BlackjackLegalActions): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    if (message.actions) {
      obj.actions = message.actions.map((e) => blackjackActionCodeToJSON(e));
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackLegalActions>, I>>(base?: I): BlackjackLegalActions {
    return BlackjackLegalActions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackLegalActions>, I>>(object: I): BlackjackLegalActions {
    const message = createBaseBlackjackLegalActions();
    message.userId = object.userId ?? "";
    message.actions = object.actions?.map((e) => e) || [];
    return message;
  },
};

function createBaseBlackjackHand(): BlackjackHand {
  return { cards: [], type: 0, point: 0 };
}

export const BlackjackHand = {
  encode(message: BlackjackHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cards) {
      Card.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.point !== 0) {
      writer.uint32(24).int32(message.point);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cards.push(Card.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.point = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackHand {
    return {
      cards: Array.isArray(object?.cards) ? object.cards.map((e: any) => Card.fromJSON(e)) : [],
      type: isSet(object.type) ? blackjackHandTypeFromJSON(object.type) : 0,
      point: isSet(object.point) ? Number(object.point) : 0,
    };
  },

  toJSON(message: BlackjackHand): unknown {
    const obj: any = {};
    if (message.cards) {
      obj.cards = message.cards.map((e) => e ? Card.toJSON(e) : undefined);
    } else {
      obj.cards = [];
    }
    message.type !== undefined && (obj.type = blackjackHandTypeToJSON(message.type));
    message.point !== undefined && (obj.point = Math.round(message.point));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackHand>, I>>(base?: I): BlackjackHand {
    return BlackjackHand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackHand>, I>>(object: I): BlackjackHand {
    const message = createBaseBlackjackHand();
    message.cards = object.cards?.map((e) => Card.fromPartial(e)) || [];
    message.type = object.type ?? 0;
    message.point = object.point ?? 0;
    return message;
  },
};

function createBaseBlackjackPlayerHand(): BlackjackPlayerHand {
  return { userId: "", first: undefined, second: undefined };
}

export const BlackjackPlayerHand = {
  encode(message: BlackjackPlayerHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.first !== undefined) {
      BlackjackHand.encode(message.first, writer.uint32(18).fork()).ldelim();
    }
    if (message.second !== undefined) {
      BlackjackHand.encode(message.second, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackPlayerHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackPlayerHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.first = BlackjackHand.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.second = BlackjackHand.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackPlayerHand {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      first: isSet(object.first) ? BlackjackHand.fromJSON(object.first) : undefined,
      second: isSet(object.second) ? BlackjackHand.fromJSON(object.second) : undefined,
    };
  },

  toJSON(message: BlackjackPlayerHand): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.first !== undefined && (obj.first = message.first ? BlackjackHand.toJSON(message.first) : undefined);
    message.second !== undefined && (obj.second = message.second ? BlackjackHand.toJSON(message.second) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackPlayerHand>, I>>(base?: I): BlackjackPlayerHand {
    return BlackjackPlayerHand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackPlayerHand>, I>>(object: I): BlackjackPlayerHand {
    const message = createBaseBlackjackPlayerHand();
    message.userId = object.userId ?? "";
    message.first = (object.first !== undefined && object.first !== null)
      ? BlackjackHand.fromPartial(object.first)
      : undefined;
    message.second = (object.second !== undefined && object.second !== null)
      ? BlackjackHand.fromPartial(object.second)
      : undefined;
    return message;
  },
};

function createBaseBlackjackPlayerTurn(): BlackjackPlayerTurn {
  return { isPlayer: "", userId: "", handN0: 0 };
}

export const BlackjackPlayerTurn = {
  encode(message: BlackjackPlayerTurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPlayer !== "") {
      writer.uint32(10).string(message.isPlayer);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.handN0 !== 0) {
      writer.uint32(24).int32(message.handN0);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackPlayerTurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackPlayerTurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isPlayer = reader.string();
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

          message.handN0 = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackPlayerTurn {
    return {
      isPlayer: isSet(object.isPlayer) ? String(object.isPlayer) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      handN0: isSet(object.handN0) ? blackjackHandN0FromJSON(object.handN0) : 0,
    };
  },

  toJSON(message: BlackjackPlayerTurn): unknown {
    const obj: any = {};
    message.isPlayer !== undefined && (obj.isPlayer = message.isPlayer);
    message.userId !== undefined && (obj.userId = message.userId);
    message.handN0 !== undefined && (obj.handN0 = blackjackHandN0ToJSON(message.handN0));
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackPlayerTurn>, I>>(base?: I): BlackjackPlayerTurn {
    return BlackjackPlayerTurn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackPlayerTurn>, I>>(object: I): BlackjackPlayerTurn {
    const message = createBaseBlackjackPlayerTurn();
    message.isPlayer = object.isPlayer ?? "";
    message.userId = object.userId ?? "";
    message.handN0 = object.handN0 ?? 0;
    return message;
  },
};

function createBaseBlackjackUpdateDesk(): BlackjackUpdateDesk {
  return {
    isInsuranceTurnEnter: false,
    isNewTurn: false,
    inTurn: "",
    handN0: 0,
    isUpdateBet: false,
    bet: undefined,
    isUpdateLegalAction: false,
    actions: undefined,
    isSplitHand: false,
    hand: undefined,
    isBankerNotBlackjack: false,
    playersBet: [],
  };
}

export const BlackjackUpdateDesk = {
  encode(message: BlackjackUpdateDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isInsuranceTurnEnter === true) {
      writer.uint32(8).bool(message.isInsuranceTurnEnter);
    }
    if (message.isNewTurn === true) {
      writer.uint32(16).bool(message.isNewTurn);
    }
    if (message.inTurn !== "") {
      writer.uint32(26).string(message.inTurn);
    }
    if (message.handN0 !== 0) {
      writer.uint32(32).int32(message.handN0);
    }
    if (message.isUpdateBet === true) {
      writer.uint32(40).bool(message.isUpdateBet);
    }
    if (message.bet !== undefined) {
      BlackjackPlayerBet.encode(message.bet, writer.uint32(50).fork()).ldelim();
    }
    if (message.isUpdateLegalAction === true) {
      writer.uint32(56).bool(message.isUpdateLegalAction);
    }
    if (message.actions !== undefined) {
      BlackjackLegalActions.encode(message.actions, writer.uint32(66).fork()).ldelim();
    }
    if (message.isSplitHand === true) {
      writer.uint32(72).bool(message.isSplitHand);
    }
    if (message.hand !== undefined) {
      BlackjackPlayerHand.encode(message.hand, writer.uint32(82).fork()).ldelim();
    }
    if (message.isBankerNotBlackjack === true) {
      writer.uint32(88).bool(message.isBankerNotBlackjack);
    }
    for (const v of message.playersBet) {
      BlackjackPlayerBet.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackUpdateDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackUpdateDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isInsuranceTurnEnter = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isNewTurn = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inTurn = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.handN0 = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isUpdateBet = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.bet = BlackjackPlayerBet.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isUpdateLegalAction = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.actions = BlackjackLegalActions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isSplitHand = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.hand = BlackjackPlayerHand.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.isBankerNotBlackjack = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.playersBet.push(BlackjackPlayerBet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackUpdateDesk {
    return {
      isInsuranceTurnEnter: isSet(object.isInsuranceTurnEnter) ? Boolean(object.isInsuranceTurnEnter) : false,
      isNewTurn: isSet(object.isNewTurn) ? Boolean(object.isNewTurn) : false,
      inTurn: isSet(object.inTurn) ? String(object.inTurn) : "",
      handN0: isSet(object.handN0) ? blackjackHandN0FromJSON(object.handN0) : 0,
      isUpdateBet: isSet(object.isUpdateBet) ? Boolean(object.isUpdateBet) : false,
      bet: isSet(object.bet) ? BlackjackPlayerBet.fromJSON(object.bet) : undefined,
      isUpdateLegalAction: isSet(object.isUpdateLegalAction) ? Boolean(object.isUpdateLegalAction) : false,
      actions: isSet(object.actions) ? BlackjackLegalActions.fromJSON(object.actions) : undefined,
      isSplitHand: isSet(object.isSplitHand) ? Boolean(object.isSplitHand) : false,
      hand: isSet(object.hand) ? BlackjackPlayerHand.fromJSON(object.hand) : undefined,
      isBankerNotBlackjack: isSet(object.isBankerNotBlackjack) ? Boolean(object.isBankerNotBlackjack) : false,
      playersBet: Array.isArray(object?.playersBet)
        ? object.playersBet.map((e: any) => BlackjackPlayerBet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BlackjackUpdateDesk): unknown {
    const obj: any = {};
    message.isInsuranceTurnEnter !== undefined && (obj.isInsuranceTurnEnter = message.isInsuranceTurnEnter);
    message.isNewTurn !== undefined && (obj.isNewTurn = message.isNewTurn);
    message.inTurn !== undefined && (obj.inTurn = message.inTurn);
    message.handN0 !== undefined && (obj.handN0 = blackjackHandN0ToJSON(message.handN0));
    message.isUpdateBet !== undefined && (obj.isUpdateBet = message.isUpdateBet);
    message.bet !== undefined && (obj.bet = message.bet ? BlackjackPlayerBet.toJSON(message.bet) : undefined);
    message.isUpdateLegalAction !== undefined && (obj.isUpdateLegalAction = message.isUpdateLegalAction);
    message.actions !== undefined &&
      (obj.actions = message.actions ? BlackjackLegalActions.toJSON(message.actions) : undefined);
    message.isSplitHand !== undefined && (obj.isSplitHand = message.isSplitHand);
    message.hand !== undefined && (obj.hand = message.hand ? BlackjackPlayerHand.toJSON(message.hand) : undefined);
    message.isBankerNotBlackjack !== undefined && (obj.isBankerNotBlackjack = message.isBankerNotBlackjack);
    if (message.playersBet) {
      obj.playersBet = message.playersBet.map((e) => e ? BlackjackPlayerBet.toJSON(e) : undefined);
    } else {
      obj.playersBet = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackUpdateDesk>, I>>(base?: I): BlackjackUpdateDesk {
    return BlackjackUpdateDesk.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackUpdateDesk>, I>>(object: I): BlackjackUpdateDesk {
    const message = createBaseBlackjackUpdateDesk();
    message.isInsuranceTurnEnter = object.isInsuranceTurnEnter ?? false;
    message.isNewTurn = object.isNewTurn ?? false;
    message.inTurn = object.inTurn ?? "";
    message.handN0 = object.handN0 ?? 0;
    message.isUpdateBet = object.isUpdateBet ?? false;
    message.bet = (object.bet !== undefined && object.bet !== null)
      ? BlackjackPlayerBet.fromPartial(object.bet)
      : undefined;
    message.isUpdateLegalAction = object.isUpdateLegalAction ?? false;
    message.actions = (object.actions !== undefined && object.actions !== null)
      ? BlackjackLegalActions.fromPartial(object.actions)
      : undefined;
    message.isSplitHand = object.isSplitHand ?? false;
    message.hand = (object.hand !== undefined && object.hand !== null)
      ? BlackjackPlayerHand.fromPartial(object.hand)
      : undefined;
    message.isBankerNotBlackjack = object.isBankerNotBlackjack ?? false;
    message.playersBet = object.playersBet?.map((e) => BlackjackPlayerBet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBlackjackUpdateFinish(): BlackjackUpdateFinish {
  return { betResults: [] };
}

export const BlackjackUpdateFinish = {
  encode(message: BlackjackUpdateFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.betResults) {
      BlackjackPLayerBetResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlackjackUpdateFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackjackUpdateFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.betResults.push(BlackjackPLayerBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlackjackUpdateFinish {
    return {
      betResults: Array.isArray(object?.betResults)
        ? object.betResults.map((e: any) => BlackjackPLayerBetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BlackjackUpdateFinish): unknown {
    const obj: any = {};
    if (message.betResults) {
      obj.betResults = message.betResults.map((e) => e ? BlackjackPLayerBetResult.toJSON(e) : undefined);
    } else {
      obj.betResults = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlackjackUpdateFinish>, I>>(base?: I): BlackjackUpdateFinish {
    return BlackjackUpdateFinish.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BlackjackUpdateFinish>, I>>(object: I): BlackjackUpdateFinish {
    const message = createBaseBlackjackUpdateFinish();
    message.betResults = object.betResults?.map((e) => BlackjackPLayerBetResult.fromPartial(e)) || [];
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
