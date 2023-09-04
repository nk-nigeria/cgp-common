/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Card, GameState, gameStateFromJSON, gameStateToJSON } from "./chinese_poker_game_api";
import Long = require("long");

export const protobufPackage = "api";

export enum DragonTigerBetCell {
  /** CELL_UNSPECIFIED - unuse */
  CELL_UNSPECIFIED = 0,
  CELL_DRAGON = 1,
  CELL_TIGER = 2,
  CELL_TIE = 3,
  CELL_DRAGON_SMALL = 4,
  CELL_DRAGON_BIG = 5,
  CELL_TIGER_SMALL = 6,
  CELL_TIGER_BIG = 7,
  UNRECOGNIZED = -1,
}

export function dragonTigerBetCellFromJSON(object: any): DragonTigerBetCell {
  switch (object) {
    case 0:
    case "CELL_UNSPECIFIED":
      return DragonTigerBetCell.CELL_UNSPECIFIED;
    case 1:
    case "CELL_DRAGON":
      return DragonTigerBetCell.CELL_DRAGON;
    case 2:
    case "CELL_TIGER":
      return DragonTigerBetCell.CELL_TIGER;
    case 3:
    case "CELL_TIE":
      return DragonTigerBetCell.CELL_TIE;
    case 4:
    case "CELL_DRAGON_SMALL":
      return DragonTigerBetCell.CELL_DRAGON_SMALL;
    case 5:
    case "CELL_DRAGON_BIG":
      return DragonTigerBetCell.CELL_DRAGON_BIG;
    case 6:
    case "CELL_TIGER_SMALL":
      return DragonTigerBetCell.CELL_TIGER_SMALL;
    case 7:
    case "CELL_TIGER_BIG":
      return DragonTigerBetCell.CELL_TIGER_BIG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DragonTigerBetCell.UNRECOGNIZED;
  }
}

export function dragonTigerBetCellToJSON(object: DragonTigerBetCell): string {
  switch (object) {
    case DragonTigerBetCell.CELL_UNSPECIFIED:
      return "CELL_UNSPECIFIED";
    case DragonTigerBetCell.CELL_DRAGON:
      return "CELL_DRAGON";
    case DragonTigerBetCell.CELL_TIGER:
      return "CELL_TIGER";
    case DragonTigerBetCell.CELL_TIE:
      return "CELL_TIE";
    case DragonTigerBetCell.CELL_DRAGON_SMALL:
      return "CELL_DRAGON_SMALL";
    case DragonTigerBetCell.CELL_DRAGON_BIG:
      return "CELL_DRAGON_BIG";
    case DragonTigerBetCell.CELL_TIGER_SMALL:
      return "CELL_TIGER_SMALL";
    case DragonTigerBetCell.CELL_TIGER_BIG:
      return "CELL_TIGER_BIG";
    case DragonTigerBetCell.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DragonTigerBetAction {
  NORMAL_BET = 0,
  RE_BET = 1,
  DOUBLE_BET = 2,
  UNRECOGNIZED = -1,
}

export function dragonTigerBetActionFromJSON(object: any): DragonTigerBetAction {
  switch (object) {
    case 0:
    case "NORMAL_BET":
      return DragonTigerBetAction.NORMAL_BET;
    case 1:
    case "RE_BET":
      return DragonTigerBetAction.RE_BET;
    case 2:
    case "DOUBLE_BET":
      return DragonTigerBetAction.DOUBLE_BET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DragonTigerBetAction.UNRECOGNIZED;
  }
}

export function dragonTigerBetActionToJSON(object: DragonTigerBetAction): string {
  switch (object) {
    case DragonTigerBetAction.NORMAL_BET:
      return "NORMAL_BET";
    case DragonTigerBetAction.RE_BET:
      return "RE_BET";
    case DragonTigerBetAction.DOUBLE_BET:
      return "DOUBLE_BET";
    case DragonTigerBetAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface DragonTigerBet {
  chips: number;
  cell: DragonTigerBetCell;
}

export interface DragonTigerBetResult {
  bet: DragonTigerBet | undefined;
  isWin: boolean;
}

/**
 * client->server when user request bet
 * if action_type is RE_BET or DOUBLE_BET, set "bets" as an empty array
 */
export interface DragonTigerPlayerBets {
  userId: string;
  actionType: DragonTigerBetAction;
  bets: DragonTigerBet[];
}

export interface DragonTigerPlayerBetResult {
  userId: string;
  list: DragonTigerBetResult[];
}

export interface DragonTigerDeskCell {
  cell: DragonTigerBetCell;
  chips: number;
  nUserBet: number;
}

export interface DragonTigerListDeskCell {
  list: DragonTigerDeskCell[];
}

export interface DragonTigerHand {
  dragon: Card | undefined;
  tiger: Card | undefined;
}

/** send from server to client upon game finished */
export interface DragonTigerGameFinish {
  hand: DragonTigerHand | undefined;
  winCells: DragonTigerBetCell[];
  listBetResult: DragonTigerPlayerBetResult[];
}

/**
 * OPCODE_REQUEST_HISTORY_RESULT
 * server->client when request previous games history
 */
export interface DragonTigerHistory {
  histories: DragonTigerHand[];
}

/** unused */
export interface DragonTigerPlayer {
  userName: string;
  vipLevel: number;
  avatarId: string;
  chips: number;
}

/**
 * OPCODE_UPDATE_TABLE
 * server->client when game state changed
 */
export interface DragonTigerUpdateTable {
  gameState: GameState;
  countDown: number;
  /** unused */
  nPlayer: number;
  /** unused */
  notablePlayers: DragonTigerPlayer[];
}

/** server->client when there's a change in table */
export interface DragonTigerUpdateDesk {
  nPlayers: number;
  isUpdateUserBet: boolean;
  isUpdateDeskCell: boolean;
  isUpdateGameHistory: boolean;
  userBet: DragonTigerPlayerBets | undefined;
  deskCell: DragonTigerListDeskCell | undefined;
  history: DragonTigerHistory | undefined;
}

/**
 * server->client when user bet action is illegal
 * OPCODE_UPDATE_REJECTED
 */
export interface DragonTigerActionReject {
  reason: string;
}

function createBaseDragonTigerBet(): DragonTigerBet {
  return { chips: 0, cell: 0 };
}

export const DragonTigerBet = {
  encode(message: DragonTigerBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.cell !== 0) {
      writer.uint32(24).int32(message.cell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

          message.cell = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerBet {
    return {
      chips: isSet(object.chips) ? Number(object.chips) : 0,
      cell: isSet(object.cell) ? dragonTigerBetCellFromJSON(object.cell) : 0,
    };
  },

  toJSON(message: DragonTigerBet): unknown {
    const obj: any = {};
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.cell !== 0) {
      obj.cell = dragonTigerBetCellToJSON(message.cell);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerBet>, I>>(base?: I): DragonTigerBet {
    return DragonTigerBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerBet>, I>>(object: I): DragonTigerBet {
    const message = createBaseDragonTigerBet();
    message.chips = object.chips ?? 0;
    message.cell = object.cell ?? 0;
    return message;
  },
};

function createBaseDragonTigerBetResult(): DragonTigerBetResult {
  return { bet: undefined, isWin: false };
}

export const DragonTigerBetResult = {
  encode(message: DragonTigerBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bet !== undefined) {
      DragonTigerBet.encode(message.bet, writer.uint32(10).fork()).ldelim();
    }
    if (message.isWin === true) {
      writer.uint32(16).bool(message.isWin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerBetResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bet = DragonTigerBet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isWin = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerBetResult {
    return {
      bet: isSet(object.bet) ? DragonTigerBet.fromJSON(object.bet) : undefined,
      isWin: isSet(object.isWin) ? Boolean(object.isWin) : false,
    };
  },

  toJSON(message: DragonTigerBetResult): unknown {
    const obj: any = {};
    if (message.bet !== undefined) {
      obj.bet = DragonTigerBet.toJSON(message.bet);
    }
    if (message.isWin === true) {
      obj.isWin = message.isWin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerBetResult>, I>>(base?: I): DragonTigerBetResult {
    return DragonTigerBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerBetResult>, I>>(object: I): DragonTigerBetResult {
    const message = createBaseDragonTigerBetResult();
    message.bet = (object.bet !== undefined && object.bet !== null)
      ? DragonTigerBet.fromPartial(object.bet)
      : undefined;
    message.isWin = object.isWin ?? false;
    return message;
  },
};

function createBaseDragonTigerPlayerBets(): DragonTigerPlayerBets {
  return { userId: "", actionType: 0, bets: [] };
}

export const DragonTigerPlayerBets = {
  encode(message: DragonTigerPlayerBets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.actionType !== 0) {
      writer.uint32(16).int32(message.actionType);
    }
    for (const v of message.bets) {
      DragonTigerBet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerPlayerBets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerPlayerBets();
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

          message.actionType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bets.push(DragonTigerBet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerPlayerBets {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      actionType: isSet(object.actionType) ? dragonTigerBetActionFromJSON(object.actionType) : 0,
      bets: Array.isArray(object?.bets) ? object.bets.map((e: any) => DragonTigerBet.fromJSON(e)) : [],
    };
  },

  toJSON(message: DragonTigerPlayerBets): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.actionType !== 0) {
      obj.actionType = dragonTigerBetActionToJSON(message.actionType);
    }
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => DragonTigerBet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerPlayerBets>, I>>(base?: I): DragonTigerPlayerBets {
    return DragonTigerPlayerBets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerPlayerBets>, I>>(object: I): DragonTigerPlayerBets {
    const message = createBaseDragonTigerPlayerBets();
    message.userId = object.userId ?? "";
    message.actionType = object.actionType ?? 0;
    message.bets = object.bets?.map((e) => DragonTigerBet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDragonTigerPlayerBetResult(): DragonTigerPlayerBetResult {
  return { userId: "", list: [] };
}

export const DragonTigerPlayerBetResult = {
  encode(message: DragonTigerPlayerBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.list) {
      DragonTigerBetResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerPlayerBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerPlayerBetResult();
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

          message.list.push(DragonTigerBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerPlayerBetResult {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      list: Array.isArray(object?.list) ? object.list.map((e: any) => DragonTigerBetResult.fromJSON(e)) : [],
    };
  },

  toJSON(message: DragonTigerPlayerBetResult): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.list?.length) {
      obj.list = message.list.map((e) => DragonTigerBetResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerPlayerBetResult>, I>>(base?: I): DragonTigerPlayerBetResult {
    return DragonTigerPlayerBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerPlayerBetResult>, I>>(object: I): DragonTigerPlayerBetResult {
    const message = createBaseDragonTigerPlayerBetResult();
    message.userId = object.userId ?? "";
    message.list = object.list?.map((e) => DragonTigerBetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDragonTigerDeskCell(): DragonTigerDeskCell {
  return { cell: 0, chips: 0, nUserBet: 0 };
}

export const DragonTigerDeskCell = {
  encode(message: DragonTigerDeskCell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cell !== 0) {
      writer.uint32(8).int32(message.cell);
    }
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.nUserBet !== 0) {
      writer.uint32(24).int32(message.nUserBet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerDeskCell {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerDeskCell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.cell = reader.int32() as any;
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

          message.nUserBet = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerDeskCell {
    return {
      cell: isSet(object.cell) ? dragonTigerBetCellFromJSON(object.cell) : 0,
      chips: isSet(object.chips) ? Number(object.chips) : 0,
      nUserBet: isSet(object.nUserBet) ? Number(object.nUserBet) : 0,
    };
  },

  toJSON(message: DragonTigerDeskCell): unknown {
    const obj: any = {};
    if (message.cell !== 0) {
      obj.cell = dragonTigerBetCellToJSON(message.cell);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.nUserBet !== 0) {
      obj.nUserBet = Math.round(message.nUserBet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerDeskCell>, I>>(base?: I): DragonTigerDeskCell {
    return DragonTigerDeskCell.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerDeskCell>, I>>(object: I): DragonTigerDeskCell {
    const message = createBaseDragonTigerDeskCell();
    message.cell = object.cell ?? 0;
    message.chips = object.chips ?? 0;
    message.nUserBet = object.nUserBet ?? 0;
    return message;
  },
};

function createBaseDragonTigerListDeskCell(): DragonTigerListDeskCell {
  return { list: [] };
}

export const DragonTigerListDeskCell = {
  encode(message: DragonTigerListDeskCell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      DragonTigerDeskCell.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerListDeskCell {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerListDeskCell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.list.push(DragonTigerDeskCell.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerListDeskCell {
    return { list: Array.isArray(object?.list) ? object.list.map((e: any) => DragonTigerDeskCell.fromJSON(e)) : [] };
  },

  toJSON(message: DragonTigerListDeskCell): unknown {
    const obj: any = {};
    if (message.list?.length) {
      obj.list = message.list.map((e) => DragonTigerDeskCell.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerListDeskCell>, I>>(base?: I): DragonTigerListDeskCell {
    return DragonTigerListDeskCell.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerListDeskCell>, I>>(object: I): DragonTigerListDeskCell {
    const message = createBaseDragonTigerListDeskCell();
    message.list = object.list?.map((e) => DragonTigerDeskCell.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDragonTigerHand(): DragonTigerHand {
  return { dragon: undefined, tiger: undefined };
}

export const DragonTigerHand = {
  encode(message: DragonTigerHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dragon !== undefined) {
      Card.encode(message.dragon, writer.uint32(10).fork()).ldelim();
    }
    if (message.tiger !== undefined) {
      Card.encode(message.tiger, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dragon = Card.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tiger = Card.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerHand {
    return {
      dragon: isSet(object.dragon) ? Card.fromJSON(object.dragon) : undefined,
      tiger: isSet(object.tiger) ? Card.fromJSON(object.tiger) : undefined,
    };
  },

  toJSON(message: DragonTigerHand): unknown {
    const obj: any = {};
    if (message.dragon !== undefined) {
      obj.dragon = Card.toJSON(message.dragon);
    }
    if (message.tiger !== undefined) {
      obj.tiger = Card.toJSON(message.tiger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerHand>, I>>(base?: I): DragonTigerHand {
    return DragonTigerHand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerHand>, I>>(object: I): DragonTigerHand {
    const message = createBaseDragonTigerHand();
    message.dragon = (object.dragon !== undefined && object.dragon !== null)
      ? Card.fromPartial(object.dragon)
      : undefined;
    message.tiger = (object.tiger !== undefined && object.tiger !== null) ? Card.fromPartial(object.tiger) : undefined;
    return message;
  },
};

function createBaseDragonTigerGameFinish(): DragonTigerGameFinish {
  return { hand: undefined, winCells: [], listBetResult: [] };
}

export const DragonTigerGameFinish = {
  encode(message: DragonTigerGameFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hand !== undefined) {
      DragonTigerHand.encode(message.hand, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.winCells) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.listBetResult) {
      DragonTigerPlayerBetResult.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerGameFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerGameFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hand = DragonTigerHand.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag === 24) {
            message.winCells.push(reader.int32() as any);

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.winCells.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.listBetResult.push(DragonTigerPlayerBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerGameFinish {
    return {
      hand: isSet(object.hand) ? DragonTigerHand.fromJSON(object.hand) : undefined,
      winCells: Array.isArray(object?.winCells) ? object.winCells.map((e: any) => dragonTigerBetCellFromJSON(e)) : [],
      listBetResult: Array.isArray(object?.listBetResult)
        ? object.listBetResult.map((e: any) => DragonTigerPlayerBetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DragonTigerGameFinish): unknown {
    const obj: any = {};
    if (message.hand !== undefined) {
      obj.hand = DragonTigerHand.toJSON(message.hand);
    }
    if (message.winCells?.length) {
      obj.winCells = message.winCells.map((e) => dragonTigerBetCellToJSON(e));
    }
    if (message.listBetResult?.length) {
      obj.listBetResult = message.listBetResult.map((e) => DragonTigerPlayerBetResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerGameFinish>, I>>(base?: I): DragonTigerGameFinish {
    return DragonTigerGameFinish.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerGameFinish>, I>>(object: I): DragonTigerGameFinish {
    const message = createBaseDragonTigerGameFinish();
    message.hand = (object.hand !== undefined && object.hand !== null)
      ? DragonTigerHand.fromPartial(object.hand)
      : undefined;
    message.winCells = object.winCells?.map((e) => e) || [];
    message.listBetResult = object.listBetResult?.map((e) => DragonTigerPlayerBetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDragonTigerHistory(): DragonTigerHistory {
  return { histories: [] };
}

export const DragonTigerHistory = {
  encode(message: DragonTigerHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.histories) {
      DragonTigerHand.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.histories.push(DragonTigerHand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerHistory {
    return {
      histories: Array.isArray(object?.histories) ? object.histories.map((e: any) => DragonTigerHand.fromJSON(e)) : [],
    };
  },

  toJSON(message: DragonTigerHistory): unknown {
    const obj: any = {};
    if (message.histories?.length) {
      obj.histories = message.histories.map((e) => DragonTigerHand.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerHistory>, I>>(base?: I): DragonTigerHistory {
    return DragonTigerHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerHistory>, I>>(object: I): DragonTigerHistory {
    const message = createBaseDragonTigerHistory();
    message.histories = object.histories?.map((e) => DragonTigerHand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDragonTigerPlayer(): DragonTigerPlayer {
  return { userName: "", vipLevel: 0, avatarId: "", chips: 0 };
}

export const DragonTigerPlayer = {
  encode(message: DragonTigerPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.vipLevel !== 0) {
      writer.uint32(32).int64(message.vipLevel);
    }
    if (message.avatarId !== "") {
      writer.uint32(42).string(message.avatarId);
    }
    if (message.chips !== 0) {
      writer.uint32(48).int64(message.chips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.vipLevel = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.avatarId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerPlayer {
    return {
      userName: isSet(object.userName) ? String(object.userName) : "",
      vipLevel: isSet(object.vipLevel) ? Number(object.vipLevel) : 0,
      avatarId: isSet(object.avatarId) ? String(object.avatarId) : "",
      chips: isSet(object.chips) ? Number(object.chips) : 0,
    };
  },

  toJSON(message: DragonTigerPlayer): unknown {
    const obj: any = {};
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.vipLevel !== 0) {
      obj.vipLevel = Math.round(message.vipLevel);
    }
    if (message.avatarId !== "") {
      obj.avatarId = message.avatarId;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerPlayer>, I>>(base?: I): DragonTigerPlayer {
    return DragonTigerPlayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerPlayer>, I>>(object: I): DragonTigerPlayer {
    const message = createBaseDragonTigerPlayer();
    message.userName = object.userName ?? "";
    message.vipLevel = object.vipLevel ?? 0;
    message.avatarId = object.avatarId ?? "";
    message.chips = object.chips ?? 0;
    return message;
  },
};

function createBaseDragonTigerUpdateTable(): DragonTigerUpdateTable {
  return { gameState: 0, countDown: 0, nPlayer: 0, notablePlayers: [] };
}

export const DragonTigerUpdateTable = {
  encode(message: DragonTigerUpdateTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameState !== 0) {
      writer.uint32(8).int32(message.gameState);
    }
    if (message.countDown !== 0) {
      writer.uint32(16).int64(message.countDown);
    }
    if (message.nPlayer !== 0) {
      writer.uint32(24).int32(message.nPlayer);
    }
    for (const v of message.notablePlayers) {
      DragonTigerPlayer.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerUpdateTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerUpdateTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameState = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.countDown = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nPlayer = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.notablePlayers.push(DragonTigerPlayer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerUpdateTable {
    return {
      gameState: isSet(object.gameState) ? gameStateFromJSON(object.gameState) : 0,
      countDown: isSet(object.countDown) ? Number(object.countDown) : 0,
      nPlayer: isSet(object.nPlayer) ? Number(object.nPlayer) : 0,
      notablePlayers: Array.isArray(object?.notablePlayers)
        ? object.notablePlayers.map((e: any) => DragonTigerPlayer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DragonTigerUpdateTable): unknown {
    const obj: any = {};
    if (message.gameState !== 0) {
      obj.gameState = gameStateToJSON(message.gameState);
    }
    if (message.countDown !== 0) {
      obj.countDown = Math.round(message.countDown);
    }
    if (message.nPlayer !== 0) {
      obj.nPlayer = Math.round(message.nPlayer);
    }
    if (message.notablePlayers?.length) {
      obj.notablePlayers = message.notablePlayers.map((e) => DragonTigerPlayer.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerUpdateTable>, I>>(base?: I): DragonTigerUpdateTable {
    return DragonTigerUpdateTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerUpdateTable>, I>>(object: I): DragonTigerUpdateTable {
    const message = createBaseDragonTigerUpdateTable();
    message.gameState = object.gameState ?? 0;
    message.countDown = object.countDown ?? 0;
    message.nPlayer = object.nPlayer ?? 0;
    message.notablePlayers = object.notablePlayers?.map((e) => DragonTigerPlayer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDragonTigerUpdateDesk(): DragonTigerUpdateDesk {
  return {
    nPlayers: 0,
    isUpdateUserBet: false,
    isUpdateDeskCell: false,
    isUpdateGameHistory: false,
    userBet: undefined,
    deskCell: undefined,
    history: undefined,
  };
}

export const DragonTigerUpdateDesk = {
  encode(message: DragonTigerUpdateDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nPlayers !== 0) {
      writer.uint32(8).int32(message.nPlayers);
    }
    if (message.isUpdateUserBet === true) {
      writer.uint32(16).bool(message.isUpdateUserBet);
    }
    if (message.isUpdateDeskCell === true) {
      writer.uint32(24).bool(message.isUpdateDeskCell);
    }
    if (message.isUpdateGameHistory === true) {
      writer.uint32(32).bool(message.isUpdateGameHistory);
    }
    if (message.userBet !== undefined) {
      DragonTigerPlayerBets.encode(message.userBet, writer.uint32(42).fork()).ldelim();
    }
    if (message.deskCell !== undefined) {
      DragonTigerListDeskCell.encode(message.deskCell, writer.uint32(50).fork()).ldelim();
    }
    if (message.history !== undefined) {
      DragonTigerHistory.encode(message.history, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerUpdateDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerUpdateDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nPlayers = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isUpdateUserBet = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isUpdateDeskCell = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isUpdateGameHistory = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userBet = DragonTigerPlayerBets.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deskCell = DragonTigerListDeskCell.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.history = DragonTigerHistory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerUpdateDesk {
    return {
      nPlayers: isSet(object.nPlayers) ? Number(object.nPlayers) : 0,
      isUpdateUserBet: isSet(object.isUpdateUserBet) ? Boolean(object.isUpdateUserBet) : false,
      isUpdateDeskCell: isSet(object.isUpdateDeskCell) ? Boolean(object.isUpdateDeskCell) : false,
      isUpdateGameHistory: isSet(object.isUpdateGameHistory) ? Boolean(object.isUpdateGameHistory) : false,
      userBet: isSet(object.userBet) ? DragonTigerPlayerBets.fromJSON(object.userBet) : undefined,
      deskCell: isSet(object.deskCell) ? DragonTigerListDeskCell.fromJSON(object.deskCell) : undefined,
      history: isSet(object.history) ? DragonTigerHistory.fromJSON(object.history) : undefined,
    };
  },

  toJSON(message: DragonTigerUpdateDesk): unknown {
    const obj: any = {};
    if (message.nPlayers !== 0) {
      obj.nPlayers = Math.round(message.nPlayers);
    }
    if (message.isUpdateUserBet === true) {
      obj.isUpdateUserBet = message.isUpdateUserBet;
    }
    if (message.isUpdateDeskCell === true) {
      obj.isUpdateDeskCell = message.isUpdateDeskCell;
    }
    if (message.isUpdateGameHistory === true) {
      obj.isUpdateGameHistory = message.isUpdateGameHistory;
    }
    if (message.userBet !== undefined) {
      obj.userBet = DragonTigerPlayerBets.toJSON(message.userBet);
    }
    if (message.deskCell !== undefined) {
      obj.deskCell = DragonTigerListDeskCell.toJSON(message.deskCell);
    }
    if (message.history !== undefined) {
      obj.history = DragonTigerHistory.toJSON(message.history);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerUpdateDesk>, I>>(base?: I): DragonTigerUpdateDesk {
    return DragonTigerUpdateDesk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerUpdateDesk>, I>>(object: I): DragonTigerUpdateDesk {
    const message = createBaseDragonTigerUpdateDesk();
    message.nPlayers = object.nPlayers ?? 0;
    message.isUpdateUserBet = object.isUpdateUserBet ?? false;
    message.isUpdateDeskCell = object.isUpdateDeskCell ?? false;
    message.isUpdateGameHistory = object.isUpdateGameHistory ?? false;
    message.userBet = (object.userBet !== undefined && object.userBet !== null)
      ? DragonTigerPlayerBets.fromPartial(object.userBet)
      : undefined;
    message.deskCell = (object.deskCell !== undefined && object.deskCell !== null)
      ? DragonTigerListDeskCell.fromPartial(object.deskCell)
      : undefined;
    message.history = (object.history !== undefined && object.history !== null)
      ? DragonTigerHistory.fromPartial(object.history)
      : undefined;
    return message;
  },
};

function createBaseDragonTigerActionReject(): DragonTigerActionReject {
  return { reason: "" };
}

export const DragonTigerActionReject = {
  encode(message: DragonTigerActionReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DragonTigerActionReject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDragonTigerActionReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DragonTigerActionReject {
    return { reason: isSet(object.reason) ? String(object.reason) : "" };
  },

  toJSON(message: DragonTigerActionReject): unknown {
    const obj: any = {};
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DragonTigerActionReject>, I>>(base?: I): DragonTigerActionReject {
    return DragonTigerActionReject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DragonTigerActionReject>, I>>(object: I): DragonTigerActionReject {
    const message = createBaseDragonTigerActionReject();
    message.reason = object.reason ?? "";
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
