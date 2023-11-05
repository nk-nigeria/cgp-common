/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export enum QQBetCell {
  CELL_RED = 0,
  CELL_RED_TWIN = 1,
  CELL_RED_QIU = 2,
  CELL_BLUE = 3,
  CELL_BLUE_TWIN = 4,
  CELL_BLUE_QIU = 5,
  CELL_DRAW = 6,
  CELL_QIU_QIU = 7,
  CELL_SIX_TWINS = 8,
  UNRECOGNIZED = -1,
}

export function qQBetCellFromJSON(object: any): QQBetCell {
  switch (object) {
    case 0:
    case "CELL_RED":
      return QQBetCell.CELL_RED;
    case 1:
    case "CELL_RED_TWIN":
      return QQBetCell.CELL_RED_TWIN;
    case 2:
    case "CELL_RED_QIU":
      return QQBetCell.CELL_RED_QIU;
    case 3:
    case "CELL_BLUE":
      return QQBetCell.CELL_BLUE;
    case 4:
    case "CELL_BLUE_TWIN":
      return QQBetCell.CELL_BLUE_TWIN;
    case 5:
    case "CELL_BLUE_QIU":
      return QQBetCell.CELL_BLUE_QIU;
    case 6:
    case "CELL_DRAW":
      return QQBetCell.CELL_DRAW;
    case 7:
    case "CELL_QIU_QIU":
      return QQBetCell.CELL_QIU_QIU;
    case 8:
    case "CELL_SIX_TWINS":
      return QQBetCell.CELL_SIX_TWINS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QQBetCell.UNRECOGNIZED;
  }
}

export function qQBetCellToJSON(object: QQBetCell): string {
  switch (object) {
    case QQBetCell.CELL_RED:
      return "CELL_RED";
    case QQBetCell.CELL_RED_TWIN:
      return "CELL_RED_TWIN";
    case QQBetCell.CELL_RED_QIU:
      return "CELL_RED_QIU";
    case QQBetCell.CELL_BLUE:
      return "CELL_BLUE";
    case QQBetCell.CELL_BLUE_TWIN:
      return "CELL_BLUE_TWIN";
    case QQBetCell.CELL_BLUE_QIU:
      return "CELL_BLUE_QIU";
    case QQBetCell.CELL_DRAW:
      return "CELL_DRAW";
    case QQBetCell.CELL_QIU_QIU:
      return "CELL_QIU_QIU";
    case QQBetCell.CELL_SIX_TWINS:
      return "CELL_SIX_TWINS";
    case QQBetCell.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum QQHandType {
  NORMAL = 0,
  QIU = 1,
  SIX = 2,
  TWIN = 3,
  UNRECOGNIZED = -1,
}

export function qQHandTypeFromJSON(object: any): QQHandType {
  switch (object) {
    case 0:
    case "NORMAL":
      return QQHandType.NORMAL;
    case 1:
    case "QIU":
      return QQHandType.QIU;
    case 2:
    case "SIX":
      return QQHandType.SIX;
    case 3:
    case "TWIN":
      return QQHandType.TWIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QQHandType.UNRECOGNIZED;
  }
}

export function qQHandTypeToJSON(object: QQHandType): string {
  switch (object) {
    case QQHandType.NORMAL:
      return "NORMAL";
    case QQHandType.QIU:
      return "QIU";
    case QQHandType.SIX:
      return "SIX";
    case QQHandType.TWIN:
      return "TWIN";
    case QQHandType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Domino {
  top: number;
  bottom: number;
}

export interface DominoList {
  dominos: Domino[];
}

export interface QQBet {
  chips: number;
  cell: QQBetCell;
}

export interface QQBetResult {
  bet: QQBet | undefined;
  isWin: boolean;
}

/** message from client to server indicate user placing bet */
export interface QQPlayerBets {
  userId: string;
  bets: QQBet[];
}

/**
 * endgame result for 1 player
 * win_bets contains the bets in the cell that player win
 * in_chip is total of bet chips
 * win_chip is raw
 * chip is amount of win chip, if it's negative then player lost that game
 */
export interface QQPlayerBetResult {
  userId: string;
  betResults: QQBetResult[];
}

/** endgame result for all user playing in that game */
export interface QQListPlayerBetResult {
  results: QQPlayerBetResult[];
}

/** info of 1 hand */
export interface QQHand {
  dominos: Domino[];
  type: QQHandType;
  point: number;
}

/**
 * message from server to client when the game end
 * red's and blue's hand
 * win_cells is list of winning cells
 */
export interface QQGameFinish {
  hands: QQGameFinishHand | undefined;
  winCells: QQBetCell[];
  result: QQListPlayerBetResult | undefined;
}

export interface QQGameFinishHand {
  redHand: QQHand | undefined;
  blueHand: QQHand | undefined;
}

/** game history of prev hands */
export interface QQHistory {
  handHistories: QQGameFinishHand[];
}

/** amount and number of user placed bet in a cell */
export interface QQDeskCellBet {
  cell: QQBetCell;
  chips: number;
  nUserBet: number;
}

export interface QQDeskListCellBet {
  listCellBet: QQDeskCellBet[];
}

/**
 * message from server to client
 * indicate changing in desk status
 * - num of playing
 * - acknowledge user bet -> update_user_bets=true
 * - update total bet in each cell by all of the users -> update_cell_bets=true
 * - update game history -> update_game_history=true
 */
export interface QQUpdateDesk {
  nPlayers: number;
  updateUserBets: boolean;
  updateCellBets: boolean;
  updateGameHistory: boolean;
  userBets: QQPlayerBets | undefined;
  listCellBet: QQDeskListCellBet | undefined;
  history: QQHistory | undefined;
}

function createBaseDomino(): Domino {
  return { top: 0, bottom: 0 };
}

export const Domino = {
  encode(message: Domino, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.top !== 0) {
      writer.uint32(8).int32(message.top);
    }
    if (message.bottom !== 0) {
      writer.uint32(16).int32(message.bottom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Domino {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDomino();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.top = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bottom = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Domino {
    return {
      top: isSet(object.top) ? globalThis.Number(object.top) : 0,
      bottom: isSet(object.bottom) ? globalThis.Number(object.bottom) : 0,
    };
  },

  toJSON(message: Domino): unknown {
    const obj: any = {};
    if (message.top !== 0) {
      obj.top = Math.round(message.top);
    }
    if (message.bottom !== 0) {
      obj.bottom = Math.round(message.bottom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Domino>, I>>(base?: I): Domino {
    return Domino.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Domino>, I>>(object: I): Domino {
    const message = createBaseDomino();
    message.top = object.top ?? 0;
    message.bottom = object.bottom ?? 0;
    return message;
  },
};

function createBaseDominoList(): DominoList {
  return { dominos: [] };
}

export const DominoList = {
  encode(message: DominoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dominos) {
      Domino.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DominoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDominoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dominos.push(Domino.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DominoList {
    return {
      dominos: globalThis.Array.isArray(object?.dominos) ? object.dominos.map((e: any) => Domino.fromJSON(e)) : [],
    };
  },

  toJSON(message: DominoList): unknown {
    const obj: any = {};
    if (message.dominos?.length) {
      obj.dominos = message.dominos.map((e) => Domino.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DominoList>, I>>(base?: I): DominoList {
    return DominoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DominoList>, I>>(object: I): DominoList {
    const message = createBaseDominoList();
    message.dominos = object.dominos?.map((e) => Domino.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQQBet(): QQBet {
  return { chips: 0, cell: 0 };
}

export const QQBet = {
  encode(message: QQBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.cell !== 0) {
      writer.uint32(24).int32(message.cell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQBet();
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

  fromJSON(object: any): QQBet {
    return {
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      cell: isSet(object.cell) ? qQBetCellFromJSON(object.cell) : 0,
    };
  },

  toJSON(message: QQBet): unknown {
    const obj: any = {};
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.cell !== 0) {
      obj.cell = qQBetCellToJSON(message.cell);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQBet>, I>>(base?: I): QQBet {
    return QQBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQBet>, I>>(object: I): QQBet {
    const message = createBaseQQBet();
    message.chips = object.chips ?? 0;
    message.cell = object.cell ?? 0;
    return message;
  },
};

function createBaseQQBetResult(): QQBetResult {
  return { bet: undefined, isWin: false };
}

export const QQBetResult = {
  encode(message: QQBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bet !== undefined) {
      QQBet.encode(message.bet, writer.uint32(10).fork()).ldelim();
    }
    if (message.isWin === true) {
      writer.uint32(16).bool(message.isWin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQBetResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bet = QQBet.decode(reader, reader.uint32());
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

  fromJSON(object: any): QQBetResult {
    return {
      bet: isSet(object.bet) ? QQBet.fromJSON(object.bet) : undefined,
      isWin: isSet(object.isWin) ? globalThis.Boolean(object.isWin) : false,
    };
  },

  toJSON(message: QQBetResult): unknown {
    const obj: any = {};
    if (message.bet !== undefined) {
      obj.bet = QQBet.toJSON(message.bet);
    }
    if (message.isWin === true) {
      obj.isWin = message.isWin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQBetResult>, I>>(base?: I): QQBetResult {
    return QQBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQBetResult>, I>>(object: I): QQBetResult {
    const message = createBaseQQBetResult();
    message.bet = (object.bet !== undefined && object.bet !== null) ? QQBet.fromPartial(object.bet) : undefined;
    message.isWin = object.isWin ?? false;
    return message;
  },
};

function createBaseQQPlayerBets(): QQPlayerBets {
  return { userId: "", bets: [] };
}

export const QQPlayerBets = {
  encode(message: QQPlayerBets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.bets) {
      QQBet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQPlayerBets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQPlayerBets();
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

          message.bets.push(QQBet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQPlayerBets {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      bets: globalThis.Array.isArray(object?.bets) ? object.bets.map((e: any) => QQBet.fromJSON(e)) : [],
    };
  },

  toJSON(message: QQPlayerBets): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => QQBet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQPlayerBets>, I>>(base?: I): QQPlayerBets {
    return QQPlayerBets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQPlayerBets>, I>>(object: I): QQPlayerBets {
    const message = createBaseQQPlayerBets();
    message.userId = object.userId ?? "";
    message.bets = object.bets?.map((e) => QQBet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQQPlayerBetResult(): QQPlayerBetResult {
  return { userId: "", betResults: [] };
}

export const QQPlayerBetResult = {
  encode(message: QQPlayerBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.betResults) {
      QQBetResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQPlayerBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQPlayerBetResult();
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

          message.betResults.push(QQBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQPlayerBetResult {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      betResults: globalThis.Array.isArray(object?.betResults)
        ? object.betResults.map((e: any) => QQBetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QQPlayerBetResult): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.betResults?.length) {
      obj.betResults = message.betResults.map((e) => QQBetResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQPlayerBetResult>, I>>(base?: I): QQPlayerBetResult {
    return QQPlayerBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQPlayerBetResult>, I>>(object: I): QQPlayerBetResult {
    const message = createBaseQQPlayerBetResult();
    message.userId = object.userId ?? "";
    message.betResults = object.betResults?.map((e) => QQBetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQQListPlayerBetResult(): QQListPlayerBetResult {
  return { results: [] };
}

export const QQListPlayerBetResult = {
  encode(message: QQListPlayerBetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      QQPlayerBetResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQListPlayerBetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQListPlayerBetResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(QQPlayerBetResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQListPlayerBetResult {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => QQPlayerBetResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QQListPlayerBetResult): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => QQPlayerBetResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQListPlayerBetResult>, I>>(base?: I): QQListPlayerBetResult {
    return QQListPlayerBetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQListPlayerBetResult>, I>>(object: I): QQListPlayerBetResult {
    const message = createBaseQQListPlayerBetResult();
    message.results = object.results?.map((e) => QQPlayerBetResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQQHand(): QQHand {
  return { dominos: [], type: 0, point: 0 };
}

export const QQHand = {
  encode(message: QQHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dominos) {
      Domino.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.point !== 0) {
      writer.uint32(24).int32(message.point);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dominos.push(Domino.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QQHand {
    return {
      dominos: globalThis.Array.isArray(object?.dominos) ? object.dominos.map((e: any) => Domino.fromJSON(e)) : [],
      type: isSet(object.type) ? qQHandTypeFromJSON(object.type) : 0,
      point: isSet(object.point) ? globalThis.Number(object.point) : 0,
    };
  },

  toJSON(message: QQHand): unknown {
    const obj: any = {};
    if (message.dominos?.length) {
      obj.dominos = message.dominos.map((e) => Domino.toJSON(e));
    }
    if (message.type !== 0) {
      obj.type = qQHandTypeToJSON(message.type);
    }
    if (message.point !== 0) {
      obj.point = Math.round(message.point);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQHand>, I>>(base?: I): QQHand {
    return QQHand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQHand>, I>>(object: I): QQHand {
    const message = createBaseQQHand();
    message.dominos = object.dominos?.map((e) => Domino.fromPartial(e)) || [];
    message.type = object.type ?? 0;
    message.point = object.point ?? 0;
    return message;
  },
};

function createBaseQQGameFinish(): QQGameFinish {
  return { hands: undefined, winCells: [], result: undefined };
}

export const QQGameFinish = {
  encode(message: QQGameFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hands !== undefined) {
      QQGameFinishHand.encode(message.hands, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.winCells) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.result !== undefined) {
      QQListPlayerBetResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQGameFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQGameFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hands = QQGameFinishHand.decode(reader, reader.uint32());
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

          message.result = QQListPlayerBetResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQGameFinish {
    return {
      hands: isSet(object.hands) ? QQGameFinishHand.fromJSON(object.hands) : undefined,
      winCells: globalThis.Array.isArray(object?.winCells) ? object.winCells.map((e: any) => qQBetCellFromJSON(e)) : [],
      result: isSet(object.result) ? QQListPlayerBetResult.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: QQGameFinish): unknown {
    const obj: any = {};
    if (message.hands !== undefined) {
      obj.hands = QQGameFinishHand.toJSON(message.hands);
    }
    if (message.winCells?.length) {
      obj.winCells = message.winCells.map((e) => qQBetCellToJSON(e));
    }
    if (message.result !== undefined) {
      obj.result = QQListPlayerBetResult.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQGameFinish>, I>>(base?: I): QQGameFinish {
    return QQGameFinish.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQGameFinish>, I>>(object: I): QQGameFinish {
    const message = createBaseQQGameFinish();
    message.hands = (object.hands !== undefined && object.hands !== null)
      ? QQGameFinishHand.fromPartial(object.hands)
      : undefined;
    message.winCells = object.winCells?.map((e) => e) || [];
    message.result = (object.result !== undefined && object.result !== null)
      ? QQListPlayerBetResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseQQGameFinishHand(): QQGameFinishHand {
  return { redHand: undefined, blueHand: undefined };
}

export const QQGameFinishHand = {
  encode(message: QQGameFinishHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redHand !== undefined) {
      QQHand.encode(message.redHand, writer.uint32(10).fork()).ldelim();
    }
    if (message.blueHand !== undefined) {
      QQHand.encode(message.blueHand, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQGameFinishHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQGameFinishHand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redHand = QQHand.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blueHand = QQHand.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQGameFinishHand {
    return {
      redHand: isSet(object.redHand) ? QQHand.fromJSON(object.redHand) : undefined,
      blueHand: isSet(object.blueHand) ? QQHand.fromJSON(object.blueHand) : undefined,
    };
  },

  toJSON(message: QQGameFinishHand): unknown {
    const obj: any = {};
    if (message.redHand !== undefined) {
      obj.redHand = QQHand.toJSON(message.redHand);
    }
    if (message.blueHand !== undefined) {
      obj.blueHand = QQHand.toJSON(message.blueHand);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQGameFinishHand>, I>>(base?: I): QQGameFinishHand {
    return QQGameFinishHand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQGameFinishHand>, I>>(object: I): QQGameFinishHand {
    const message = createBaseQQGameFinishHand();
    message.redHand = (object.redHand !== undefined && object.redHand !== null)
      ? QQHand.fromPartial(object.redHand)
      : undefined;
    message.blueHand = (object.blueHand !== undefined && object.blueHand !== null)
      ? QQHand.fromPartial(object.blueHand)
      : undefined;
    return message;
  },
};

function createBaseQQHistory(): QQHistory {
  return { handHistories: [] };
}

export const QQHistory = {
  encode(message: QQHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.handHistories) {
      QQGameFinishHand.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.handHistories.push(QQGameFinishHand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQHistory {
    return {
      handHistories: globalThis.Array.isArray(object?.handHistories)
        ? object.handHistories.map((e: any) => QQGameFinishHand.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QQHistory): unknown {
    const obj: any = {};
    if (message.handHistories?.length) {
      obj.handHistories = message.handHistories.map((e) => QQGameFinishHand.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQHistory>, I>>(base?: I): QQHistory {
    return QQHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQHistory>, I>>(object: I): QQHistory {
    const message = createBaseQQHistory();
    message.handHistories = object.handHistories?.map((e) => QQGameFinishHand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQQDeskCellBet(): QQDeskCellBet {
  return { cell: 0, chips: 0, nUserBet: 0 };
}

export const QQDeskCellBet = {
  encode(message: QQDeskCellBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QQDeskCellBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQDeskCellBet();
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

  fromJSON(object: any): QQDeskCellBet {
    return {
      cell: isSet(object.cell) ? qQBetCellFromJSON(object.cell) : 0,
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      nUserBet: isSet(object.nUserBet) ? globalThis.Number(object.nUserBet) : 0,
    };
  },

  toJSON(message: QQDeskCellBet): unknown {
    const obj: any = {};
    if (message.cell !== 0) {
      obj.cell = qQBetCellToJSON(message.cell);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.nUserBet !== 0) {
      obj.nUserBet = Math.round(message.nUserBet);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQDeskCellBet>, I>>(base?: I): QQDeskCellBet {
    return QQDeskCellBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQDeskCellBet>, I>>(object: I): QQDeskCellBet {
    const message = createBaseQQDeskCellBet();
    message.cell = object.cell ?? 0;
    message.chips = object.chips ?? 0;
    message.nUserBet = object.nUserBet ?? 0;
    return message;
  },
};

function createBaseQQDeskListCellBet(): QQDeskListCellBet {
  return { listCellBet: [] };
}

export const QQDeskListCellBet = {
  encode(message: QQDeskListCellBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listCellBet) {
      QQDeskCellBet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQDeskListCellBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQDeskListCellBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listCellBet.push(QQDeskCellBet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQDeskListCellBet {
    return {
      listCellBet: globalThis.Array.isArray(object?.listCellBet)
        ? object.listCellBet.map((e: any) => QQDeskCellBet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QQDeskListCellBet): unknown {
    const obj: any = {};
    if (message.listCellBet?.length) {
      obj.listCellBet = message.listCellBet.map((e) => QQDeskCellBet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQDeskListCellBet>, I>>(base?: I): QQDeskListCellBet {
    return QQDeskListCellBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQDeskListCellBet>, I>>(object: I): QQDeskListCellBet {
    const message = createBaseQQDeskListCellBet();
    message.listCellBet = object.listCellBet?.map((e) => QQDeskCellBet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQQUpdateDesk(): QQUpdateDesk {
  return {
    nPlayers: 0,
    updateUserBets: false,
    updateCellBets: false,
    updateGameHistory: false,
    userBets: undefined,
    listCellBet: undefined,
    history: undefined,
  };
}

export const QQUpdateDesk = {
  encode(message: QQUpdateDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nPlayers !== 0) {
      writer.uint32(8).int32(message.nPlayers);
    }
    if (message.updateUserBets === true) {
      writer.uint32(16).bool(message.updateUserBets);
    }
    if (message.updateCellBets === true) {
      writer.uint32(24).bool(message.updateCellBets);
    }
    if (message.updateGameHistory === true) {
      writer.uint32(32).bool(message.updateGameHistory);
    }
    if (message.userBets !== undefined) {
      QQPlayerBets.encode(message.userBets, writer.uint32(42).fork()).ldelim();
    }
    if (message.listCellBet !== undefined) {
      QQDeskListCellBet.encode(message.listCellBet, writer.uint32(50).fork()).ldelim();
    }
    if (message.history !== undefined) {
      QQHistory.encode(message.history, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQUpdateDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQUpdateDesk();
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

          message.updateUserBets = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updateCellBets = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.updateGameHistory = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userBets = QQPlayerBets.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.listCellBet = QQDeskListCellBet.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.history = QQHistory.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QQUpdateDesk {
    return {
      nPlayers: isSet(object.nPlayers) ? globalThis.Number(object.nPlayers) : 0,
      updateUserBets: isSet(object.updateUserBets) ? globalThis.Boolean(object.updateUserBets) : false,
      updateCellBets: isSet(object.updateCellBets) ? globalThis.Boolean(object.updateCellBets) : false,
      updateGameHistory: isSet(object.updateGameHistory) ? globalThis.Boolean(object.updateGameHistory) : false,
      userBets: isSet(object.userBets) ? QQPlayerBets.fromJSON(object.userBets) : undefined,
      listCellBet: isSet(object.listCellBet) ? QQDeskListCellBet.fromJSON(object.listCellBet) : undefined,
      history: isSet(object.history) ? QQHistory.fromJSON(object.history) : undefined,
    };
  },

  toJSON(message: QQUpdateDesk): unknown {
    const obj: any = {};
    if (message.nPlayers !== 0) {
      obj.nPlayers = Math.round(message.nPlayers);
    }
    if (message.updateUserBets === true) {
      obj.updateUserBets = message.updateUserBets;
    }
    if (message.updateCellBets === true) {
      obj.updateCellBets = message.updateCellBets;
    }
    if (message.updateGameHistory === true) {
      obj.updateGameHistory = message.updateGameHistory;
    }
    if (message.userBets !== undefined) {
      obj.userBets = QQPlayerBets.toJSON(message.userBets);
    }
    if (message.listCellBet !== undefined) {
      obj.listCellBet = QQDeskListCellBet.toJSON(message.listCellBet);
    }
    if (message.history !== undefined) {
      obj.history = QQHistory.toJSON(message.history);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QQUpdateDesk>, I>>(base?: I): QQUpdateDesk {
    return QQUpdateDesk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QQUpdateDesk>, I>>(object: I): QQUpdateDesk {
    const message = createBaseQQUpdateDesk();
    message.nPlayers = object.nPlayers ?? 0;
    message.updateUserBets = object.updateUserBets ?? false;
    message.updateCellBets = object.updateCellBets ?? false;
    message.updateGameHistory = object.updateGameHistory ?? false;
    message.userBets = (object.userBets !== undefined && object.userBets !== null)
      ? QQPlayerBets.fromPartial(object.userBets)
      : undefined;
    message.listCellBet = (object.listCellBet !== undefined && object.listCellBet !== null)
      ? QQDeskListCellBet.fromPartial(object.listCellBet)
      : undefined;
    message.history = (object.history !== undefined && object.history !== null)
      ? QQHistory.fromPartial(object.history)
      : undefined;
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
