/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export enum Color {
  COLOR_UNSPECIFIED = 0,
  COLOR_YELLOW = 1,
  COLOR_WHITE = 2,
  COLOR_PINK = 4,
  COLOR_BLUE = 8,
  COLOR_RED = 16,
  COLOR_GREEN = 32,
  UNRECOGNIZED = -1,
}

export function colorFromJSON(object: any): Color {
  switch (object) {
    case 0:
    case "COLOR_UNSPECIFIED":
      return Color.COLOR_UNSPECIFIED;
    case 1:
    case "COLOR_YELLOW":
      return Color.COLOR_YELLOW;
    case 2:
    case "COLOR_WHITE":
      return Color.COLOR_WHITE;
    case 4:
    case "COLOR_PINK":
      return Color.COLOR_PINK;
    case 8:
    case "COLOR_BLUE":
      return Color.COLOR_BLUE;
    case 16:
    case "COLOR_RED":
      return Color.COLOR_RED;
    case 32:
    case "COLOR_GREEN":
      return Color.COLOR_GREEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Color.UNRECOGNIZED;
  }
}

export function colorToJSON(object: Color): string {
  switch (object) {
    case Color.COLOR_UNSPECIFIED:
      return "COLOR_UNSPECIFIED";
    case Color.COLOR_YELLOW:
      return "COLOR_YELLOW";
    case Color.COLOR_WHITE:
      return "COLOR_WHITE";
    case Color.COLOR_PINK:
      return "COLOR_PINK";
    case Color.COLOR_BLUE:
      return "COLOR_BLUE";
    case Color.COLOR_RED:
      return "COLOR_RED";
    case Color.COLOR_GREEN:
      return "COLOR_GREEN";
    case Color.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface BetResult {
  userId: string;
  bets: InfoBet[];
  isWin: boolean;
}

export interface ColorGameFinish {
  rollColor: ListColor | undefined;
  betResults: BetResult[];
  historyRolls: HistoryRoll | undefined;
}

export interface ListColor {
  colors: number[];
}

export interface RateColor {
  id: number;
  percent: number;
}

export interface HistoryRoll {
  listColors: ListColor[];
  rateColors: RateColor[];
}

export interface InfoBet {
  id: number;
  chips: number;
  nUserBet: number;
  desp: string;
  reqSpecGame: number;
  /** broadcast new game data */
  emitNewgameEvent: boolean;
  /** delay broadcast result endgame, unit 1s,1m, 1h, golang durationformat */
  delayEmitResult: string;
}

export interface ListInfoBet {
  listBets: InfoBet[];
}

export interface UpdateDesk {
  nPlayer: number;
  updateUserBets: boolean;
  updateCellBets: boolean;
  userBets: InfoBet[];
  cellBets: InfoBet[];
  updateHistoryRoll: boolean;
  historyRolls: HistoryRoll | undefined;
}

function createBaseBetResult(): BetResult {
  return { userId: "", bets: [], isWin: false };
}

export const BetResult = {
  encode(message: BetResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.bets) {
      InfoBet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isWin === true) {
      writer.uint32(24).bool(message.isWin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BetResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBetResult();
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

          message.bets.push(InfoBet.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): BetResult {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      bets: globalThis.Array.isArray(object?.bets) ? object.bets.map((e: any) => InfoBet.fromJSON(e)) : [],
      isWin: isSet(object.isWin) ? globalThis.Boolean(object.isWin) : false,
    };
  },

  toJSON(message: BetResult): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => InfoBet.toJSON(e));
    }
    if (message.isWin === true) {
      obj.isWin = message.isWin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BetResult>, I>>(base?: I): BetResult {
    return BetResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BetResult>, I>>(object: I): BetResult {
    const message = createBaseBetResult();
    message.userId = object.userId ?? "";
    message.bets = object.bets?.map((e) => InfoBet.fromPartial(e)) || [];
    message.isWin = object.isWin ?? false;
    return message;
  },
};

function createBaseColorGameFinish(): ColorGameFinish {
  return { rollColor: undefined, betResults: [], historyRolls: undefined };
}

export const ColorGameFinish = {
  encode(message: ColorGameFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rollColor !== undefined) {
      ListColor.encode(message.rollColor, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.betResults) {
      BetResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.historyRolls !== undefined) {
      HistoryRoll.encode(message.historyRolls, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ColorGameFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColorGameFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rollColor = ListColor.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.betResults.push(BetResult.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.historyRolls = HistoryRoll.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ColorGameFinish {
    return {
      rollColor: isSet(object.rollColor) ? ListColor.fromJSON(object.rollColor) : undefined,
      betResults: globalThis.Array.isArray(object?.betResults)
        ? object.betResults.map((e: any) => BetResult.fromJSON(e))
        : [],
      historyRolls: isSet(object.historyRolls) ? HistoryRoll.fromJSON(object.historyRolls) : undefined,
    };
  },

  toJSON(message: ColorGameFinish): unknown {
    const obj: any = {};
    if (message.rollColor !== undefined) {
      obj.rollColor = ListColor.toJSON(message.rollColor);
    }
    if (message.betResults?.length) {
      obj.betResults = message.betResults.map((e) => BetResult.toJSON(e));
    }
    if (message.historyRolls !== undefined) {
      obj.historyRolls = HistoryRoll.toJSON(message.historyRolls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ColorGameFinish>, I>>(base?: I): ColorGameFinish {
    return ColorGameFinish.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ColorGameFinish>, I>>(object: I): ColorGameFinish {
    const message = createBaseColorGameFinish();
    message.rollColor = (object.rollColor !== undefined && object.rollColor !== null)
      ? ListColor.fromPartial(object.rollColor)
      : undefined;
    message.betResults = object.betResults?.map((e) => BetResult.fromPartial(e)) || [];
    message.historyRolls = (object.historyRolls !== undefined && object.historyRolls !== null)
      ? HistoryRoll.fromPartial(object.historyRolls)
      : undefined;
    return message;
  },
};

function createBaseListColor(): ListColor {
  return { colors: [] };
}

export const ListColor = {
  encode(message: ListColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.colors) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.colors.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.colors.push(reader.int32());
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

  fromJSON(object: any): ListColor {
    return {
      colors: globalThis.Array.isArray(object?.colors) ? object.colors.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: ListColor): unknown {
    const obj: any = {};
    if (message.colors?.length) {
      obj.colors = message.colors.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListColor>, I>>(base?: I): ListColor {
    return ListColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListColor>, I>>(object: I): ListColor {
    const message = createBaseListColor();
    message.colors = object.colors?.map((e) => e) || [];
    return message;
  },
};

function createBaseRateColor(): RateColor {
  return { id: 0, percent: 0 };
}

export const RateColor = {
  encode(message: RateColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.percent !== 0) {
      writer.uint32(16).int32(message.percent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.percent = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RateColor {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      percent: isSet(object.percent) ? globalThis.Number(object.percent) : 0,
    };
  },

  toJSON(message: RateColor): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.percent !== 0) {
      obj.percent = Math.round(message.percent);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RateColor>, I>>(base?: I): RateColor {
    return RateColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RateColor>, I>>(object: I): RateColor {
    const message = createBaseRateColor();
    message.id = object.id ?? 0;
    message.percent = object.percent ?? 0;
    return message;
  },
};

function createBaseHistoryRoll(): HistoryRoll {
  return { listColors: [], rateColors: [] };
}

export const HistoryRoll = {
  encode(message: HistoryRoll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listColors) {
      ListColor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rateColors) {
      RateColor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryRoll {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryRoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listColors.push(ListColor.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rateColors.push(RateColor.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoryRoll {
    return {
      listColors: globalThis.Array.isArray(object?.listColors)
        ? object.listColors.map((e: any) => ListColor.fromJSON(e))
        : [],
      rateColors: globalThis.Array.isArray(object?.rateColors)
        ? object.rateColors.map((e: any) => RateColor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HistoryRoll): unknown {
    const obj: any = {};
    if (message.listColors?.length) {
      obj.listColors = message.listColors.map((e) => ListColor.toJSON(e));
    }
    if (message.rateColors?.length) {
      obj.rateColors = message.rateColors.map((e) => RateColor.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HistoryRoll>, I>>(base?: I): HistoryRoll {
    return HistoryRoll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HistoryRoll>, I>>(object: I): HistoryRoll {
    const message = createBaseHistoryRoll();
    message.listColors = object.listColors?.map((e) => ListColor.fromPartial(e)) || [];
    message.rateColors = object.rateColors?.map((e) => RateColor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInfoBet(): InfoBet {
  return { id: 0, chips: 0, nUserBet: 0, desp: "", reqSpecGame: 0, emitNewgameEvent: false, delayEmitResult: "" };
}

export const InfoBet = {
  encode(message: InfoBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.nUserBet !== 0) {
      writer.uint32(24).int32(message.nUserBet);
    }
    if (message.desp !== "") {
      writer.uint32(34).string(message.desp);
    }
    if (message.reqSpecGame !== 0) {
      writer.uint32(40).int32(message.reqSpecGame);
    }
    if (message.emitNewgameEvent === true) {
      writer.uint32(48).bool(message.emitNewgameEvent);
    }
    if (message.delayEmitResult !== "") {
      writer.uint32(58).string(message.delayEmitResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
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
        case 4:
          if (tag !== 34) {
            break;
          }

          message.desp = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reqSpecGame = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.emitNewgameEvent = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.delayEmitResult = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InfoBet {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      nUserBet: isSet(object.nUserBet) ? globalThis.Number(object.nUserBet) : 0,
      desp: isSet(object.desp) ? globalThis.String(object.desp) : "",
      reqSpecGame: isSet(object.reqSpecGame) ? globalThis.Number(object.reqSpecGame) : 0,
      emitNewgameEvent: isSet(object.emitNewgameEvent) ? globalThis.Boolean(object.emitNewgameEvent) : false,
      delayEmitResult: isSet(object.delayEmitResult) ? globalThis.String(object.delayEmitResult) : "",
    };
  },

  toJSON(message: InfoBet): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.nUserBet !== 0) {
      obj.nUserBet = Math.round(message.nUserBet);
    }
    if (message.desp !== "") {
      obj.desp = message.desp;
    }
    if (message.reqSpecGame !== 0) {
      obj.reqSpecGame = Math.round(message.reqSpecGame);
    }
    if (message.emitNewgameEvent === true) {
      obj.emitNewgameEvent = message.emitNewgameEvent;
    }
    if (message.delayEmitResult !== "") {
      obj.delayEmitResult = message.delayEmitResult;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InfoBet>, I>>(base?: I): InfoBet {
    return InfoBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InfoBet>, I>>(object: I): InfoBet {
    const message = createBaseInfoBet();
    message.id = object.id ?? 0;
    message.chips = object.chips ?? 0;
    message.nUserBet = object.nUserBet ?? 0;
    message.desp = object.desp ?? "";
    message.reqSpecGame = object.reqSpecGame ?? 0;
    message.emitNewgameEvent = object.emitNewgameEvent ?? false;
    message.delayEmitResult = object.delayEmitResult ?? "";
    return message;
  },
};

function createBaseListInfoBet(): ListInfoBet {
  return { listBets: [] };
}

export const ListInfoBet = {
  encode(message: ListInfoBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listBets) {
      InfoBet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInfoBet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInfoBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listBets.push(InfoBet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListInfoBet {
    return {
      listBets: globalThis.Array.isArray(object?.listBets) ? object.listBets.map((e: any) => InfoBet.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListInfoBet): unknown {
    const obj: any = {};
    if (message.listBets?.length) {
      obj.listBets = message.listBets.map((e) => InfoBet.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInfoBet>, I>>(base?: I): ListInfoBet {
    return ListInfoBet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInfoBet>, I>>(object: I): ListInfoBet {
    const message = createBaseListInfoBet();
    message.listBets = object.listBets?.map((e) => InfoBet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateDesk(): UpdateDesk {
  return {
    nPlayer: 0,
    updateUserBets: false,
    updateCellBets: false,
    userBets: [],
    cellBets: [],
    updateHistoryRoll: false,
    historyRolls: undefined,
  };
}

export const UpdateDesk = {
  encode(message: UpdateDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nPlayer !== 0) {
      writer.uint32(8).int32(message.nPlayer);
    }
    if (message.updateUserBets === true) {
      writer.uint32(16).bool(message.updateUserBets);
    }
    if (message.updateCellBets === true) {
      writer.uint32(24).bool(message.updateCellBets);
    }
    for (const v of message.userBets) {
      InfoBet.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cellBets) {
      InfoBet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.updateHistoryRoll === true) {
      writer.uint32(48).bool(message.updateHistoryRoll);
    }
    if (message.historyRolls !== undefined) {
      HistoryRoll.encode(message.historyRolls, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nPlayer = reader.int32();
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
          if (tag !== 34) {
            break;
          }

          message.userBets.push(InfoBet.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cellBets.push(InfoBet.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.updateHistoryRoll = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.historyRolls = HistoryRoll.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDesk {
    return {
      nPlayer: isSet(object.nPlayer) ? globalThis.Number(object.nPlayer) : 0,
      updateUserBets: isSet(object.updateUserBets) ? globalThis.Boolean(object.updateUserBets) : false,
      updateCellBets: isSet(object.updateCellBets) ? globalThis.Boolean(object.updateCellBets) : false,
      userBets: globalThis.Array.isArray(object?.userBets) ? object.userBets.map((e: any) => InfoBet.fromJSON(e)) : [],
      cellBets: globalThis.Array.isArray(object?.cellBets) ? object.cellBets.map((e: any) => InfoBet.fromJSON(e)) : [],
      updateHistoryRoll: isSet(object.updateHistoryRoll) ? globalThis.Boolean(object.updateHistoryRoll) : false,
      historyRolls: isSet(object.historyRolls) ? HistoryRoll.fromJSON(object.historyRolls) : undefined,
    };
  },

  toJSON(message: UpdateDesk): unknown {
    const obj: any = {};
    if (message.nPlayer !== 0) {
      obj.nPlayer = Math.round(message.nPlayer);
    }
    if (message.updateUserBets === true) {
      obj.updateUserBets = message.updateUserBets;
    }
    if (message.updateCellBets === true) {
      obj.updateCellBets = message.updateCellBets;
    }
    if (message.userBets?.length) {
      obj.userBets = message.userBets.map((e) => InfoBet.toJSON(e));
    }
    if (message.cellBets?.length) {
      obj.cellBets = message.cellBets.map((e) => InfoBet.toJSON(e));
    }
    if (message.updateHistoryRoll === true) {
      obj.updateHistoryRoll = message.updateHistoryRoll;
    }
    if (message.historyRolls !== undefined) {
      obj.historyRolls = HistoryRoll.toJSON(message.historyRolls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDesk>, I>>(base?: I): UpdateDesk {
    return UpdateDesk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDesk>, I>>(object: I): UpdateDesk {
    const message = createBaseUpdateDesk();
    message.nPlayer = object.nPlayer ?? 0;
    message.updateUserBets = object.updateUserBets ?? false;
    message.updateCellBets = object.updateCellBets ?? false;
    message.userBets = object.userBets?.map((e) => InfoBet.fromPartial(e)) || [];
    message.cellBets = object.cellBets?.map((e) => InfoBet.fromPartial(e)) || [];
    message.updateHistoryRoll = object.updateHistoryRoll ?? false;
    message.historyRolls = (object.historyRolls !== undefined && object.historyRolls !== null)
      ? HistoryRoll.fromPartial(object.historyRolls)
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
