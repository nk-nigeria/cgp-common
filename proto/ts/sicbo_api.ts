/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "api";

export enum Dice {
  DICE_UNSPECTIFIED = 0,
  DICE_1 = 1,
  DICE_2 = 2,
  DICE_3 = 3,
  DICE_4 = 4,
  DICE_5 = 5,
  DICE_6 = 6,
  UNRECOGNIZED = -1,
}

export function diceFromJSON(object: any): Dice {
  switch (object) {
    case 0:
    case "DICE_UNSPECTIFIED":
      return Dice.DICE_UNSPECTIFIED;
    case 1:
    case "DICE_1":
      return Dice.DICE_1;
    case 2:
    case "DICE_2":
      return Dice.DICE_2;
    case 3:
    case "DICE_3":
      return Dice.DICE_3;
    case 4:
    case "DICE_4":
      return Dice.DICE_4;
    case 5:
    case "DICE_5":
      return Dice.DICE_5;
    case 6:
    case "DICE_6":
      return Dice.DICE_6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Dice.UNRECOGNIZED;
  }
}

export function diceToJSON(object: Dice): string {
  switch (object) {
    case Dice.DICE_UNSPECTIFIED:
      return "DICE_UNSPECTIFIED";
    case Dice.DICE_1:
      return "DICE_1";
    case Dice.DICE_2:
      return "DICE_2";
    case Dice.DICE_3:
      return "DICE_3";
    case Dice.DICE_4:
      return "DICE_4";
    case Dice.DICE_5:
      return "DICE_5";
    case Dice.DICE_6:
      return "DICE_6";
    case Dice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SicboBetCell {
  /** SICBO_CELL_UNSPECIFIED - unused */
  SICBO_CELL_UNSPECIFIED = 0,
  /** SICBO_CELL_SMALL - x1 */
  SICBO_CELL_SMALL = 1,
  SICBO_CELL_BIG = 2,
  /** SICBO_CELL_1 - x number of same face */
  SICBO_CELL_1 = 11,
  SICBO_CEll_2 = 12,
  SICBO_CELL_3 = 13,
  SICBO_CELL_4 = 14,
  SICBO_CELL_5 = 15,
  SICBO_CELL_6 = 16,
  /** SICBO_CELL_DOUBLE_1 - x10 */
  SICBO_CELL_DOUBLE_1 = 21,
  SICBO_CELL_DOUBLE_2 = 22,
  SICBO_CELL_DOUBLE_3 = 23,
  SICBO_CELL_DOUBLE_4 = 24,
  SICBO_CELL_DOUBLE_5 = 25,
  SICBO_CELL_DOUBLE_6 = 26,
  /** SICBO_CELL_TRIPLE - x30 */
  SICBO_CELL_TRIPLE = 31,
  /** SICBO_CELL_TOTAL_4 - x60 */
  SICBO_CELL_TOTAL_4 = 41,
  SICBO_CELL_TOTAL_17 = 42,
  /** SICBO_CELL_TOTAL_5 - x30 */
  SICBO_CELL_TOTAL_5 = 43,
  SICBO_CELL_TOTAL_16 = 44,
  /** SICBO_CELL_TOTAL_6 - x18 */
  SICBO_CELL_TOTAL_6 = 45,
  SICBO_CELL_TOTAL_15 = 46,
  /** SICBO_CELL_TOTAL_7 - x12 */
  SICBO_CELL_TOTAL_7 = 47,
  SICBO_CELL_TOTAL_14 = 48,
  /** SICBO_CELL_TOTAL_8 - x8 */
  SICBO_CELL_TOTAL_8 = 49,
  SICBO_CELL_TOTAL_13 = 50,
  /** SICBO_CELL_TOTAL_9 - x7 */
  SICBO_CELL_TOTAL_9 = 51,
  SICBO_CELL_TOTAL_12 = 52,
  /** SICBO_CELL_TOTAL_10 - x6 */
  SICBO_CELL_TOTAL_10 = 53,
  SICBO_CELL_TOTAL_11 = 54,
  UNRECOGNIZED = -1,
}

export function sicboBetCellFromJSON(object: any): SicboBetCell {
  switch (object) {
    case 0:
    case "SICBO_CELL_UNSPECIFIED":
      return SicboBetCell.SICBO_CELL_UNSPECIFIED;
    case 1:
    case "SICBO_CELL_SMALL":
      return SicboBetCell.SICBO_CELL_SMALL;
    case 2:
    case "SICBO_CELL_BIG":
      return SicboBetCell.SICBO_CELL_BIG;
    case 11:
    case "SICBO_CELL_1":
      return SicboBetCell.SICBO_CELL_1;
    case 12:
    case "SICBO_CEll_2":
      return SicboBetCell.SICBO_CEll_2;
    case 13:
    case "SICBO_CELL_3":
      return SicboBetCell.SICBO_CELL_3;
    case 14:
    case "SICBO_CELL_4":
      return SicboBetCell.SICBO_CELL_4;
    case 15:
    case "SICBO_CELL_5":
      return SicboBetCell.SICBO_CELL_5;
    case 16:
    case "SICBO_CELL_6":
      return SicboBetCell.SICBO_CELL_6;
    case 21:
    case "SICBO_CELL_DOUBLE_1":
      return SicboBetCell.SICBO_CELL_DOUBLE_1;
    case 22:
    case "SICBO_CELL_DOUBLE_2":
      return SicboBetCell.SICBO_CELL_DOUBLE_2;
    case 23:
    case "SICBO_CELL_DOUBLE_3":
      return SicboBetCell.SICBO_CELL_DOUBLE_3;
    case 24:
    case "SICBO_CELL_DOUBLE_4":
      return SicboBetCell.SICBO_CELL_DOUBLE_4;
    case 25:
    case "SICBO_CELL_DOUBLE_5":
      return SicboBetCell.SICBO_CELL_DOUBLE_5;
    case 26:
    case "SICBO_CELL_DOUBLE_6":
      return SicboBetCell.SICBO_CELL_DOUBLE_6;
    case 31:
    case "SICBO_CELL_TRIPLE":
      return SicboBetCell.SICBO_CELL_TRIPLE;
    case 41:
    case "SICBO_CELL_TOTAL_4":
      return SicboBetCell.SICBO_CELL_TOTAL_4;
    case 42:
    case "SICBO_CELL_TOTAL_17":
      return SicboBetCell.SICBO_CELL_TOTAL_17;
    case 43:
    case "SICBO_CELL_TOTAL_5":
      return SicboBetCell.SICBO_CELL_TOTAL_5;
    case 44:
    case "SICBO_CELL_TOTAL_16":
      return SicboBetCell.SICBO_CELL_TOTAL_16;
    case 45:
    case "SICBO_CELL_TOTAL_6":
      return SicboBetCell.SICBO_CELL_TOTAL_6;
    case 46:
    case "SICBO_CELL_TOTAL_15":
      return SicboBetCell.SICBO_CELL_TOTAL_15;
    case 47:
    case "SICBO_CELL_TOTAL_7":
      return SicboBetCell.SICBO_CELL_TOTAL_7;
    case 48:
    case "SICBO_CELL_TOTAL_14":
      return SicboBetCell.SICBO_CELL_TOTAL_14;
    case 49:
    case "SICBO_CELL_TOTAL_8":
      return SicboBetCell.SICBO_CELL_TOTAL_8;
    case 50:
    case "SICBO_CELL_TOTAL_13":
      return SicboBetCell.SICBO_CELL_TOTAL_13;
    case 51:
    case "SICBO_CELL_TOTAL_9":
      return SicboBetCell.SICBO_CELL_TOTAL_9;
    case 52:
    case "SICBO_CELL_TOTAL_12":
      return SicboBetCell.SICBO_CELL_TOTAL_12;
    case 53:
    case "SICBO_CELL_TOTAL_10":
      return SicboBetCell.SICBO_CELL_TOTAL_10;
    case 54:
    case "SICBO_CELL_TOTAL_11":
      return SicboBetCell.SICBO_CELL_TOTAL_11;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SicboBetCell.UNRECOGNIZED;
  }
}

export function sicboBetCellToJSON(object: SicboBetCell): string {
  switch (object) {
    case SicboBetCell.SICBO_CELL_UNSPECIFIED:
      return "SICBO_CELL_UNSPECIFIED";
    case SicboBetCell.SICBO_CELL_SMALL:
      return "SICBO_CELL_SMALL";
    case SicboBetCell.SICBO_CELL_BIG:
      return "SICBO_CELL_BIG";
    case SicboBetCell.SICBO_CELL_1:
      return "SICBO_CELL_1";
    case SicboBetCell.SICBO_CEll_2:
      return "SICBO_CEll_2";
    case SicboBetCell.SICBO_CELL_3:
      return "SICBO_CELL_3";
    case SicboBetCell.SICBO_CELL_4:
      return "SICBO_CELL_4";
    case SicboBetCell.SICBO_CELL_5:
      return "SICBO_CELL_5";
    case SicboBetCell.SICBO_CELL_6:
      return "SICBO_CELL_6";
    case SicboBetCell.SICBO_CELL_DOUBLE_1:
      return "SICBO_CELL_DOUBLE_1";
    case SicboBetCell.SICBO_CELL_DOUBLE_2:
      return "SICBO_CELL_DOUBLE_2";
    case SicboBetCell.SICBO_CELL_DOUBLE_3:
      return "SICBO_CELL_DOUBLE_3";
    case SicboBetCell.SICBO_CELL_DOUBLE_4:
      return "SICBO_CELL_DOUBLE_4";
    case SicboBetCell.SICBO_CELL_DOUBLE_5:
      return "SICBO_CELL_DOUBLE_5";
    case SicboBetCell.SICBO_CELL_DOUBLE_6:
      return "SICBO_CELL_DOUBLE_6";
    case SicboBetCell.SICBO_CELL_TRIPLE:
      return "SICBO_CELL_TRIPLE";
    case SicboBetCell.SICBO_CELL_TOTAL_4:
      return "SICBO_CELL_TOTAL_4";
    case SicboBetCell.SICBO_CELL_TOTAL_17:
      return "SICBO_CELL_TOTAL_17";
    case SicboBetCell.SICBO_CELL_TOTAL_5:
      return "SICBO_CELL_TOTAL_5";
    case SicboBetCell.SICBO_CELL_TOTAL_16:
      return "SICBO_CELL_TOTAL_16";
    case SicboBetCell.SICBO_CELL_TOTAL_6:
      return "SICBO_CELL_TOTAL_6";
    case SicboBetCell.SICBO_CELL_TOTAL_15:
      return "SICBO_CELL_TOTAL_15";
    case SicboBetCell.SICBO_CELL_TOTAL_7:
      return "SICBO_CELL_TOTAL_7";
    case SicboBetCell.SICBO_CELL_TOTAL_14:
      return "SICBO_CELL_TOTAL_14";
    case SicboBetCell.SICBO_CELL_TOTAL_8:
      return "SICBO_CELL_TOTAL_8";
    case SicboBetCell.SICBO_CELL_TOTAL_13:
      return "SICBO_CELL_TOTAL_13";
    case SicboBetCell.SICBO_CELL_TOTAL_9:
      return "SICBO_CELL_TOTAL_9";
    case SicboBetCell.SICBO_CELL_TOTAL_12:
      return "SICBO_CELL_TOTAL_12";
    case SicboBetCell.SICBO_CELL_TOTAL_10:
      return "SICBO_CELL_TOTAL_10";
    case SicboBetCell.SICBO_CELL_TOTAL_11:
      return "SICBO_CELL_TOTAL_11";
    case SicboBetCell.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SicboBetAction {
  SICBO_BET_NORMAL = 0,
  SICBO_BET_REBET = 1,
  SICBO_BET_DOUBLE = 2,
  UNRECOGNIZED = -1,
}

export function sicboBetActionFromJSON(object: any): SicboBetAction {
  switch (object) {
    case 0:
    case "SICBO_BET_NORMAL":
      return SicboBetAction.SICBO_BET_NORMAL;
    case 1:
    case "SICBO_BET_REBET":
      return SicboBetAction.SICBO_BET_REBET;
    case 2:
    case "SICBO_BET_DOUBLE":
      return SicboBetAction.SICBO_BET_DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SicboBetAction.UNRECOGNIZED;
  }
}

export function sicboBetActionToJSON(object: SicboBetAction): string {
  switch (object) {
    case SicboBetAction.SICBO_BET_NORMAL:
      return "SICBO_BET_NORMAL";
    case SicboBetAction.SICBO_BET_REBET:
      return "SICBO_BET_REBET";
    case SicboBetAction.SICBO_BET_DOUBLE:
      return "SICBO_BET_DOUBLE";
    case SicboBetAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SicboBetRejectReason {
  UNSPECIFIED = 0,
  BALANCE_NOT_ENOUGH = 1,
  PREVIOUS_BET_NOT_EXIST = 2,
  ALREADY_BET = 3,
  UNRECOGNIZED = -1,
}

export function sicboBetRejectReasonFromJSON(object: any): SicboBetRejectReason {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SicboBetRejectReason.UNSPECIFIED;
    case 1:
    case "BALANCE_NOT_ENOUGH":
      return SicboBetRejectReason.BALANCE_NOT_ENOUGH;
    case 2:
    case "PREVIOUS_BET_NOT_EXIST":
      return SicboBetRejectReason.PREVIOUS_BET_NOT_EXIST;
    case 3:
    case "ALREADY_BET":
      return SicboBetRejectReason.ALREADY_BET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SicboBetRejectReason.UNRECOGNIZED;
  }
}

export function sicboBetRejectReasonToJSON(object: SicboBetRejectReason): string {
  switch (object) {
    case SicboBetRejectReason.UNSPECIFIED:
      return "UNSPECIFIED";
    case SicboBetRejectReason.BALANCE_NOT_ENOUGH:
      return "BALANCE_NOT_ENOUGH";
    case SicboBetRejectReason.PREVIOUS_BET_NOT_EXIST:
      return "PREVIOUS_BET_NOT_EXIST";
    case SicboBetRejectReason.ALREADY_BET:
      return "ALREADY_BET";
    case SicboBetRejectReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SicboBet {
  chips: number;
  cell: SicboBetCell;
}

export interface SicboBetResult {
  bet: SicboBet | undefined;
  isWin: boolean;
}

export interface SicboPlayerBet {
  userId: string;
  action: SicboBetAction;
  bets: SicboBet[];
}

export interface SicboPlayerBetResult {
  userId: string;
  list: SicboBetResult[];
}

export interface SicboHand {
  dices: Dice[];
}

export interface SicboGameFinish {
  hand: SicboHand | undefined;
  winCells: SicboBetCell[];
  listBetResult: SicboPlayerBetResult[];
}

export interface SicboBetCellInfo {
  cell: SicboBetCell;
  chips: number;
  nUserBet: number;
}

export interface SicboUpdateDesk {
  nPlayers: number;
  isUpdateUserBet: boolean;
  isUpdateDeskCell: boolean;
  isUpdateGameHistory: boolean;
  userBet: SicboPlayerBet | undefined;
  deskCell: SicboBetCellInfo[];
  history: SicboHand[];
}

export interface SicboActionReject {
  reason: SicboBetRejectReason;
}

function createBaseSicboBet(): SicboBet {
  return { chips: 0, cell: 0 };
}

export const SicboBet = {
  encode(message: SicboBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.cell !== 0) {
      writer.uint32(24).int32(message.cell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboBet();
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

  fromJSON(object: any): SicboBet {
    return {
      chips: isSet(object.chips) ? Number(object.chips) : 0,
      cell: isSet(object.cell) ? sicboBetCellFromJSON(object.cell) : 0,
    };
  },

  toJSON(message: SicboBet): unknown {
    const obj: any = {};
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.cell !== 0) {
      obj.cell = sicboBetCellToJSON(message.cell);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboBet>, I>>(base?: I): SicboBet {
    return SicboBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboBet>, I>>(object: I): SicboBet {
    const message = createBaseSicboBet();
    message.chips = object.chips ?? 0;
    message.cell = object.cell ?? 0;
    return message;
  },
};

function createBaseSicboBetResult(): SicboBetResult {
  return { bet: undefined, isWin: false };
}

export const SicboBetResult = {
  encode(message: SicboBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bet !== undefined) {
      SicboBet.encode(message.bet, writer.uint32(10).fork()).ldelim();
    }
    if (message.isWin === true) {
      writer.uint32(16).bool(message.isWin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboBetResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bet = SicboBet.decode(reader, reader.uint32());
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

  fromJSON(object: any): SicboBetResult {
    return {
      bet: isSet(object.bet) ? SicboBet.fromJSON(object.bet) : undefined,
      isWin: isSet(object.isWin) ? Boolean(object.isWin) : false,
    };
  },

  toJSON(message: SicboBetResult): unknown {
    const obj: any = {};
    if (message.bet !== undefined) {
      obj.bet = SicboBet.toJSON(message.bet);
    }
    if (message.isWin === true) {
      obj.isWin = message.isWin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboBetResult>, I>>(base?: I): SicboBetResult {
    return SicboBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboBetResult>, I>>(object: I): SicboBetResult {
    const message = createBaseSicboBetResult();
    message.bet = (object.bet !== undefined && object.bet !== null) ? SicboBet.fromPartial(object.bet) : undefined;
    message.isWin = object.isWin ?? false;
    return message;
  },
};

function createBaseSicboPlayerBet(): SicboPlayerBet {
  return { userId: "", action: 0, bets: [] };
}

export const SicboPlayerBet = {
  encode(message: SicboPlayerBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    for (const v of message.bets) {
      SicboBet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboPlayerBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboPlayerBet();
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

          message.action = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bets.push(SicboBet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SicboPlayerBet {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      action: isSet(object.action) ? sicboBetActionFromJSON(object.action) : 0,
      bets: Array.isArray(object?.bets) ? object.bets.map((e: any) => SicboBet.fromJSON(e)) : [],
    };
  },

  toJSON(message: SicboPlayerBet): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.action !== 0) {
      obj.action = sicboBetActionToJSON(message.action);
    }
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => SicboBet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboPlayerBet>, I>>(base?: I): SicboPlayerBet {
    return SicboPlayerBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboPlayerBet>, I>>(object: I): SicboPlayerBet {
    const message = createBaseSicboPlayerBet();
    message.userId = object.userId ?? "";
    message.action = object.action ?? 0;
    message.bets = object.bets?.map((e) => SicboBet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSicboPlayerBetResult(): SicboPlayerBetResult {
  return { userId: "", list: [] };
}

export const SicboPlayerBetResult = {
  encode(message: SicboPlayerBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.list) {
      SicboBetResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboPlayerBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboPlayerBetResult();
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

          message.list.push(SicboBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SicboPlayerBetResult {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      list: Array.isArray(object?.list) ? object.list.map((e: any) => SicboBetResult.fromJSON(e)) : [],
    };
  },

  toJSON(message: SicboPlayerBetResult): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.list?.length) {
      obj.list = message.list.map((e) => SicboBetResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboPlayerBetResult>, I>>(base?: I): SicboPlayerBetResult {
    return SicboPlayerBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboPlayerBetResult>, I>>(object: I): SicboPlayerBetResult {
    const message = createBaseSicboPlayerBetResult();
    message.userId = object.userId ?? "";
    message.list = object.list?.map((e) => SicboBetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSicboHand(): SicboHand {
  return { dices: [] };
}

export const SicboHand = {
  encode(message: SicboHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.dices) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.dices.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dices.push(reader.int32() as any);
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

  fromJSON(object: any): SicboHand {
    return { dices: Array.isArray(object?.dices) ? object.dices.map((e: any) => diceFromJSON(e)) : [] };
  },

  toJSON(message: SicboHand): unknown {
    const obj: any = {};
    if (message.dices?.length) {
      obj.dices = message.dices.map((e) => diceToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboHand>, I>>(base?: I): SicboHand {
    return SicboHand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboHand>, I>>(object: I): SicboHand {
    const message = createBaseSicboHand();
    message.dices = object.dices?.map((e) => e) || [];
    return message;
  },
};

function createBaseSicboGameFinish(): SicboGameFinish {
  return { hand: undefined, winCells: [], listBetResult: [] };
}

export const SicboGameFinish = {
  encode(message: SicboGameFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hand !== undefined) {
      SicboHand.encode(message.hand, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.winCells) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.listBetResult) {
      SicboPlayerBetResult.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboGameFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboGameFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hand = SicboHand.decode(reader, reader.uint32());
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

          message.listBetResult.push(SicboPlayerBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SicboGameFinish {
    return {
      hand: isSet(object.hand) ? SicboHand.fromJSON(object.hand) : undefined,
      winCells: Array.isArray(object?.winCells) ? object.winCells.map((e: any) => sicboBetCellFromJSON(e)) : [],
      listBetResult: Array.isArray(object?.listBetResult)
        ? object.listBetResult.map((e: any) => SicboPlayerBetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SicboGameFinish): unknown {
    const obj: any = {};
    if (message.hand !== undefined) {
      obj.hand = SicboHand.toJSON(message.hand);
    }
    if (message.winCells?.length) {
      obj.winCells = message.winCells.map((e) => sicboBetCellToJSON(e));
    }
    if (message.listBetResult?.length) {
      obj.listBetResult = message.listBetResult.map((e) => SicboPlayerBetResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboGameFinish>, I>>(base?: I): SicboGameFinish {
    return SicboGameFinish.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboGameFinish>, I>>(object: I): SicboGameFinish {
    const message = createBaseSicboGameFinish();
    message.hand = (object.hand !== undefined && object.hand !== null) ? SicboHand.fromPartial(object.hand) : undefined;
    message.winCells = object.winCells?.map((e) => e) || [];
    message.listBetResult = object.listBetResult?.map((e) => SicboPlayerBetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSicboBetCellInfo(): SicboBetCellInfo {
  return { cell: 0, chips: 0, nUserBet: 0 };
}

export const SicboBetCellInfo = {
  encode(message: SicboBetCellInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboBetCellInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboBetCellInfo();
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

  fromJSON(object: any): SicboBetCellInfo {
    return {
      cell: isSet(object.cell) ? sicboBetCellFromJSON(object.cell) : 0,
      chips: isSet(object.chips) ? Number(object.chips) : 0,
      nUserBet: isSet(object.nUserBet) ? Number(object.nUserBet) : 0,
    };
  },

  toJSON(message: SicboBetCellInfo): unknown {
    const obj: any = {};
    if (message.cell !== 0) {
      obj.cell = sicboBetCellToJSON(message.cell);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.nUserBet !== 0) {
      obj.nUserBet = Math.round(message.nUserBet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboBetCellInfo>, I>>(base?: I): SicboBetCellInfo {
    return SicboBetCellInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboBetCellInfo>, I>>(object: I): SicboBetCellInfo {
    const message = createBaseSicboBetCellInfo();
    message.cell = object.cell ?? 0;
    message.chips = object.chips ?? 0;
    message.nUserBet = object.nUserBet ?? 0;
    return message;
  },
};

function createBaseSicboUpdateDesk(): SicboUpdateDesk {
  return {
    nPlayers: 0,
    isUpdateUserBet: false,
    isUpdateDeskCell: false,
    isUpdateGameHistory: false,
    userBet: undefined,
    deskCell: [],
    history: [],
  };
}

export const SicboUpdateDesk = {
  encode(message: SicboUpdateDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      SicboPlayerBet.encode(message.userBet, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.deskCell) {
      SicboBetCellInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.history) {
      SicboHand.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboUpdateDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboUpdateDesk();
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

          message.userBet = SicboPlayerBet.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deskCell.push(SicboBetCellInfo.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.history.push(SicboHand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SicboUpdateDesk {
    return {
      nPlayers: isSet(object.nPlayers) ? Number(object.nPlayers) : 0,
      isUpdateUserBet: isSet(object.isUpdateUserBet) ? Boolean(object.isUpdateUserBet) : false,
      isUpdateDeskCell: isSet(object.isUpdateDeskCell) ? Boolean(object.isUpdateDeskCell) : false,
      isUpdateGameHistory: isSet(object.isUpdateGameHistory) ? Boolean(object.isUpdateGameHistory) : false,
      userBet: isSet(object.userBet) ? SicboPlayerBet.fromJSON(object.userBet) : undefined,
      deskCell: Array.isArray(object?.deskCell) ? object.deskCell.map((e: any) => SicboBetCellInfo.fromJSON(e)) : [],
      history: Array.isArray(object?.history) ? object.history.map((e: any) => SicboHand.fromJSON(e)) : [],
    };
  },

  toJSON(message: SicboUpdateDesk): unknown {
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
      obj.userBet = SicboPlayerBet.toJSON(message.userBet);
    }
    if (message.deskCell?.length) {
      obj.deskCell = message.deskCell.map((e) => SicboBetCellInfo.toJSON(e));
    }
    if (message.history?.length) {
      obj.history = message.history.map((e) => SicboHand.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboUpdateDesk>, I>>(base?: I): SicboUpdateDesk {
    return SicboUpdateDesk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboUpdateDesk>, I>>(object: I): SicboUpdateDesk {
    const message = createBaseSicboUpdateDesk();
    message.nPlayers = object.nPlayers ?? 0;
    message.isUpdateUserBet = object.isUpdateUserBet ?? false;
    message.isUpdateDeskCell = object.isUpdateDeskCell ?? false;
    message.isUpdateGameHistory = object.isUpdateGameHistory ?? false;
    message.userBet = (object.userBet !== undefined && object.userBet !== null)
      ? SicboPlayerBet.fromPartial(object.userBet)
      : undefined;
    message.deskCell = object.deskCell?.map((e) => SicboBetCellInfo.fromPartial(e)) || [];
    message.history = object.history?.map((e) => SicboHand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSicboActionReject(): SicboActionReject {
  return { reason: 0 };
}

export const SicboActionReject = {
  encode(message: SicboActionReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SicboActionReject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSicboActionReject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SicboActionReject {
    return { reason: isSet(object.reason) ? sicboBetRejectReasonFromJSON(object.reason) : 0 };
  },

  toJSON(message: SicboActionReject): unknown {
    const obj: any = {};
    if (message.reason !== 0) {
      obj.reason = sicboBetRejectReasonToJSON(message.reason);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SicboActionReject>, I>>(base?: I): SicboActionReject {
    return SicboActionReject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SicboActionReject>, I>>(object: I): SicboActionReject {
    const message = createBaseSicboActionReject();
    message.reason = object.reason ?? 0;
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
