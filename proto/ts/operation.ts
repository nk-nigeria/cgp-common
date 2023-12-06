/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Profile } from "./auth_api";
import Long = require("long");

export const protobufPackage = "api";

export enum CurrencyUnitId {
  CURRENCY_UNIT_ID_UNSPECIFIED = 0,
  CURRENCY_UNIT_ID_VN = 1,
  UNRECOGNIZED = -1,
}

export function currencyUnitIdFromJSON(object: any): CurrencyUnitId {
  switch (object) {
    case 0:
    case "CURRENCY_UNIT_ID_UNSPECIFIED":
      return CurrencyUnitId.CURRENCY_UNIT_ID_UNSPECIFIED;
    case 1:
    case "CURRENCY_UNIT_ID_VN":
      return CurrencyUnitId.CURRENCY_UNIT_ID_VN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CurrencyUnitId.UNRECOGNIZED;
  }
}

export function currencyUnitIdToJSON(object: CurrencyUnitId): string {
  switch (object) {
    case CurrencyUnitId.CURRENCY_UNIT_ID_UNSPECIFIED:
      return "CURRENCY_UNIT_ID_UNSPECIFIED";
    case CurrencyUnitId.CURRENCY_UNIT_ID_VN:
      return "CURRENCY_UNIT_ID_VN";
    case CurrencyUnitId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface OpPlayer {
  userId: string;
  userName: string;
  gameId: number;
  gameName: string;
  noBet: number;
  noWin: number;
  noLost: number;
  chipWin: number;
  chipLost: number;
  chipBalance: number;
  action: number;
  status: string;
  dateUnix: number;
  mcb: number;
  userSid: number;
}

export interface OpPlayerRequest {
  userId: string;
  gameId: number;
  fromUnix: number;
  toUnix: number;
  action: number;
  offset: number;
  limit: number;
  userSid: number;
}

export interface OpPlayerResponse {
  opPlayers: OpPlayer[];
  total: number;
  offset: number;
  limit: number;
  totalChipWin: number;
  totalChipLost: number;
}

export interface MatchDetail {
  gameId: number;
  gameName: string;
  mcb: number;
  numMatchPlayed: number;
  chipFee: number;
  detail: string;
  tableId: number;
  dateUnix: number;
  createdAtUnix: number;
  chipWin: number;
  chipLose: number;
}

export interface MatchDetailRequest {
  gameId: number;
  fromUnix: number;
  toUnix: number;
  userSid: number;
  userPairSid: number;
  limit: number;
  offset: number;
}

export interface MatchDetailResponse {
  matchDetails: MatchDetail[];
  total: number;
  limit: number;
  offset: number;
}

export interface PlayerData {
  userId: string;
  chip: number;
  chipAdd: number;
  userSid: number;
}

export interface MatchData {
  gameId: number;
  gameCode: string;
  mcb: number;
  chipFee: number;
  matchId: string;
  tableId: number;
}

export interface OpReport {
  playerData: PlayerData[];
  matchData: MatchData | undefined;
}

export interface GoldStatistic {
  timeUpdateUnix: number;
  pay: number;
  promotion: number;
  matchData: MatchData[];
  agCashout: number;
  agBank: number;
  chips: number;
}

export interface GoldStatisticRequest {
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
}

export interface GoldStatisticResponse {
  goldStatistics: GoldStatistic[];
  limit: number;
  offset: number;
  total: number;
}

export interface UserStatistic {
  totalChipDeposit: number;
  totalChipWithDraw: number;
  totalChipWin: number;
  totalChipLose: number;
  totalChipPromotion: number;
  totalChipSend: number;
  totalChipRecv: number;
  coRatio: number;
  totalChipDeposit3d: number;
  totalChipWithDraw3d: number;
  luck: number;
  userCreateTimeUnix: number;
  userStatGameHistories: UserStatGameHistory[];
  recvChipStats: UserTransferGoldStat[];
  sendChipStats: UserTransferGoldStat[];
}

export interface UserStatisticRequest {
  userId: string;
  fromUnix: number;
  toUnix: number;
  userSid: number;
  deviceId: string;
}

export interface UserStatGameHistory {
  gameId: number;
  gameName: string;
  totalChipWin: number;
  totalChipLost: number;
}

export interface UserTransferGoldStat {
  userSendId: string;
  userSendName: string;
  userRecvId: string;
  userRecvName: string;
  chip: number;
}

export interface UserInfo {
  profile: Profile | undefined;
  totalIn: number;
  totalOut: number;
}

export interface UserInfoResponse {
  userInfos: UserInfo[];
  total: number;
  deviceId: string;
  totalIn: number;
  totalOut: number;
  totalLock: number;
}

export interface CashOut {
  userId: string;
  userName: string;
  ci: number;
  cio: number;
  co: number;
  coo: number;
  luckyPercent: number;
  userSid: number;
}

export interface TopCashOut {
  cashouts: CashOut[];
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
  total: number;
}

export interface Vip {
  userId: string;
  userName: string;
  cio: number;
  totalChip: number;
  lastLoginTimeUnix: number;
  createdTimeUnix: number;
  refGame: string;
  ci: number;
  co: number;
  ci2d: number;
  co2d: number;
  luckyPercent: number;
  isBanned: boolean;
  isOnline: boolean;
  totalIn: number;
  totalOut: number;
  userSid: number;
}

export interface TopVip {
  vips: Vip[];
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
  refGame: string;
  total: number;
}

export interface Win {
  userId: string;
  userName: string;
  vip: number;
  gold: number;
  ag: number;
  agWin: number;
  co: number;
  ci: number;
  coRate: number;
  luckyPercent: number;
  userSid: number;
}

export interface TopWin {
  wins: Win[];
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
  refGame: string;
  total: number;
  gameId: number;
}

export interface Lost {
  userId: string;
  userName: string;
  vip: number;
  gold: number;
  ag: number;
  agLost: number;
  co: number;
  ci: number;
  coRate: number;
  luckyPercent: number;
  userSid: number;
}

export interface TopLost {
  losts: Lost[];
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
  refGame: string;
  total: number;
  gameId: number;
}

export interface TransactionRequest {
  userSid: number;
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
}

export interface TransactionDetail {
  id: string;
  userId: string;
  userSid: number;
  userName: string;
  vip: number;
  /** Số tiền nạp */
  rp: number;
  typeTopup: string;
  /** Số chip user được nhận của giao dịch */
  chipsTopup: number;
  createdUnix: number;
}

export interface TransactionResponse {
  transDetails: TransactionDetail[];
  totalRp: number;
  limit: number;
  offset: number;
  total: number;
}

export interface IAPSummary {
  id: number;
  userId: string;
  createAtUnix: number;
  totalTopup: number;
  vipPoint: number;
  totalCashout: number;
  vip: number;
  currencyTopup: number;
  currencyCashout: number;
}

export interface CashInfo {
  id: number;
  userId: string;
  createAtUnix: number;
  chips: number;
  vipPoint: number;
  publisher: number;
  currency: number;
  /** vi_vn, en_us follow Locale name standard */
  currencyUnitId: number;
  transId: string;
  dateUnix: number;
  numTransaction: number;
  /** 10, 20, 30 ... */
  currencyValue: number;
  currencyUnitName: string;
  numTransByCurrencyValue: { [key: number]: number };
  numAccountUnique: number;
  netRev: number;
}

export interface CashInfo_NumTransByCurrencyValueEntry {
  key: number;
  value: number;
}

export interface CashInfoRequest {
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
  publisher: number;
  currencyId: CurrencyUnitId;
}

export interface CashInfoResponse {
  cashoutInfos: CashInfo[];
  totalCash: number;
  totalAccount: number;
  avgCash: number;
  totalRev: number;
  avgRev: number;
}

export interface UserGameCount {
  dateUnix: number;
  countGame: number;
}

export interface UserGameStats {
  userId: string;
  gameNo: number;
  userGameCounts: UserGameCount[];
}

export interface PaymentByVip {
  vip: number;
  ci: number;
  chips: number;
  numTrans: number;
  numAccount: number;
}

export interface PaymentsByVip {
  payments: PaymentByVip[];
  fromUnix: number;
  toUnix: number;
}

export interface CashoutByVip {
  vip: number;
  co: number;
  chips: number;
  numTrans: number;
  numAccount: number;
}

export interface CashoutsByVip {
  cashouts: CashoutByVip[];
  fromUnix: number;
  toUnix: number;
}

export interface VipStats {
  timeUpdateUnix: number;
  userId: string;
  userName: string;
  noWin: number;
  noLose: number;
  chipsWin: number;
  chipsLose: number;
  cashIn: number;
  cashIn5: number;
  cashIn10: number;
  cashOut: number;
  cashOut5: number;
  cashOut10: number;
  vip: number;
}

function createBaseOpPlayer(): OpPlayer {
  return {
    userId: "",
    userName: "",
    gameId: 0,
    gameName: "",
    noBet: 0,
    noWin: 0,
    noLost: 0,
    chipWin: 0,
    chipLost: 0,
    chipBalance: 0,
    action: 0,
    status: "",
    dateUnix: 0,
    mcb: 0,
    userSid: 0,
  };
}

export const OpPlayer = {
  encode(message: OpPlayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.gameId !== 0) {
      writer.uint32(24).int64(message.gameId);
    }
    if (message.gameName !== "") {
      writer.uint32(34).string(message.gameName);
    }
    if (message.noBet !== 0) {
      writer.uint32(40).int64(message.noBet);
    }
    if (message.noWin !== 0) {
      writer.uint32(48).int64(message.noWin);
    }
    if (message.noLost !== 0) {
      writer.uint32(56).int64(message.noLost);
    }
    if (message.chipWin !== 0) {
      writer.uint32(64).uint64(message.chipWin);
    }
    if (message.chipLost !== 0) {
      writer.uint32(72).uint64(message.chipLost);
    }
    if (message.chipBalance !== 0) {
      writer.uint32(80).int64(message.chipBalance);
    }
    if (message.action !== 0) {
      writer.uint32(88).int64(message.action);
    }
    if (message.status !== "") {
      writer.uint32(98).string(message.status);
    }
    if (message.dateUnix !== 0) {
      writer.uint32(104).int64(message.dateUnix);
    }
    if (message.mcb !== 0) {
      writer.uint32(112).int64(message.mcb);
    }
    if (message.userSid !== 0) {
      writer.uint32(120).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpPlayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpPlayer();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gameName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.noBet = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.noWin = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.noLost = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.chipWin = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.chipLost = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.chipBalance = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.action = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.status = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.dateUnix = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.mcb = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpPlayer {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      gameName: isSet(object.gameName) ? globalThis.String(object.gameName) : "",
      noBet: isSet(object.noBet) ? globalThis.Number(object.noBet) : 0,
      noWin: isSet(object.noWin) ? globalThis.Number(object.noWin) : 0,
      noLost: isSet(object.noLost) ? globalThis.Number(object.noLost) : 0,
      chipWin: isSet(object.chipWin) ? globalThis.Number(object.chipWin) : 0,
      chipLost: isSet(object.chipLost) ? globalThis.Number(object.chipLost) : 0,
      chipBalance: isSet(object.chipBalance) ? globalThis.Number(object.chipBalance) : 0,
      action: isSet(object.action) ? globalThis.Number(object.action) : 0,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      dateUnix: isSet(object.dateUnix) ? globalThis.Number(object.dateUnix) : 0,
      mcb: isSet(object.mcb) ? globalThis.Number(object.mcb) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: OpPlayer): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.gameName !== "") {
      obj.gameName = message.gameName;
    }
    if (message.noBet !== 0) {
      obj.noBet = Math.round(message.noBet);
    }
    if (message.noWin !== 0) {
      obj.noWin = Math.round(message.noWin);
    }
    if (message.noLost !== 0) {
      obj.noLost = Math.round(message.noLost);
    }
    if (message.chipWin !== 0) {
      obj.chipWin = Math.round(message.chipWin);
    }
    if (message.chipLost !== 0) {
      obj.chipLost = Math.round(message.chipLost);
    }
    if (message.chipBalance !== 0) {
      obj.chipBalance = Math.round(message.chipBalance);
    }
    if (message.action !== 0) {
      obj.action = Math.round(message.action);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.dateUnix !== 0) {
      obj.dateUnix = Math.round(message.dateUnix);
    }
    if (message.mcb !== 0) {
      obj.mcb = Math.round(message.mcb);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpPlayer>, I>>(base?: I): OpPlayer {
    return OpPlayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpPlayer>, I>>(object: I): OpPlayer {
    const message = createBaseOpPlayer();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.gameId = object.gameId ?? 0;
    message.gameName = object.gameName ?? "";
    message.noBet = object.noBet ?? 0;
    message.noWin = object.noWin ?? 0;
    message.noLost = object.noLost ?? 0;
    message.chipWin = object.chipWin ?? 0;
    message.chipLost = object.chipLost ?? 0;
    message.chipBalance = object.chipBalance ?? 0;
    message.action = object.action ?? 0;
    message.status = object.status ?? "";
    message.dateUnix = object.dateUnix ?? 0;
    message.mcb = object.mcb ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseOpPlayerRequest(): OpPlayerRequest {
  return { userId: "", gameId: 0, fromUnix: 0, toUnix: 0, action: 0, offset: 0, limit: 0, userSid: 0 };
}

export const OpPlayerRequest = {
  encode(message: OpPlayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.gameId !== 0) {
      writer.uint32(16).int64(message.gameId);
    }
    if (message.fromUnix !== 0) {
      writer.uint32(24).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(32).int64(message.toUnix);
    }
    if (message.action !== 0) {
      writer.uint32(40).int64(message.action);
    }
    if (message.offset !== 0) {
      writer.uint32(48).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(56).int64(message.limit);
    }
    if (message.userSid !== 0) {
      writer.uint32(64).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpPlayerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpPlayerRequest();
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

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.action = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpPlayerRequest {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      action: isSet(object.action) ? globalThis.Number(object.action) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: OpPlayerRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.action !== 0) {
      obj.action = Math.round(message.action);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpPlayerRequest>, I>>(base?: I): OpPlayerRequest {
    return OpPlayerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpPlayerRequest>, I>>(object: I): OpPlayerRequest {
    const message = createBaseOpPlayerRequest();
    message.userId = object.userId ?? "";
    message.gameId = object.gameId ?? 0;
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.action = object.action ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseOpPlayerResponse(): OpPlayerResponse {
  return { opPlayers: [], total: 0, offset: 0, limit: 0, totalChipWin: 0, totalChipLost: 0 };
}

export const OpPlayerResponse = {
  encode(message: OpPlayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.opPlayers) {
      OpPlayer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    if (message.offset !== 0) {
      writer.uint32(24).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int64(message.limit);
    }
    if (message.totalChipWin !== 0) {
      writer.uint32(40).uint64(message.totalChipWin);
    }
    if (message.totalChipLost !== 0) {
      writer.uint32(48).uint64(message.totalChipLost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpPlayerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpPlayerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.opPlayers.push(OpPlayer.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalChipWin = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.totalChipLost = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpPlayerResponse {
    return {
      opPlayers: globalThis.Array.isArray(object?.opPlayers)
        ? object.opPlayers.map((e: any) => OpPlayer.fromJSON(e))
        : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      totalChipWin: isSet(object.totalChipWin) ? globalThis.Number(object.totalChipWin) : 0,
      totalChipLost: isSet(object.totalChipLost) ? globalThis.Number(object.totalChipLost) : 0,
    };
  },

  toJSON(message: OpPlayerResponse): unknown {
    const obj: any = {};
    if (message.opPlayers?.length) {
      obj.opPlayers = message.opPlayers.map((e) => OpPlayer.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.totalChipWin !== 0) {
      obj.totalChipWin = Math.round(message.totalChipWin);
    }
    if (message.totalChipLost !== 0) {
      obj.totalChipLost = Math.round(message.totalChipLost);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpPlayerResponse>, I>>(base?: I): OpPlayerResponse {
    return OpPlayerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpPlayerResponse>, I>>(object: I): OpPlayerResponse {
    const message = createBaseOpPlayerResponse();
    message.opPlayers = object.opPlayers?.map((e) => OpPlayer.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.totalChipWin = object.totalChipWin ?? 0;
    message.totalChipLost = object.totalChipLost ?? 0;
    return message;
  },
};

function createBaseMatchDetail(): MatchDetail {
  return {
    gameId: 0,
    gameName: "",
    mcb: 0,
    numMatchPlayed: 0,
    chipFee: 0,
    detail: "",
    tableId: 0,
    dateUnix: 0,
    createdAtUnix: 0,
    chipWin: 0,
    chipLose: 0,
  };
}

export const MatchDetail = {
  encode(message: MatchDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).int64(message.gameId);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    if (message.mcb !== 0) {
      writer.uint32(24).int64(message.mcb);
    }
    if (message.numMatchPlayed !== 0) {
      writer.uint32(32).int64(message.numMatchPlayed);
    }
    if (message.chipFee !== 0) {
      writer.uint32(40).uint64(message.chipFee);
    }
    if (message.detail !== "") {
      writer.uint32(50).string(message.detail);
    }
    if (message.tableId !== 0) {
      writer.uint32(56).int64(message.tableId);
    }
    if (message.dateUnix !== 0) {
      writer.uint32(64).int64(message.dateUnix);
    }
    if (message.createdAtUnix !== 0) {
      writer.uint32(72).int64(message.createdAtUnix);
    }
    if (message.chipWin !== 0) {
      writer.uint32(80).int64(message.chipWin);
    }
    if (message.chipLose !== 0) {
      writer.uint32(88).int64(message.chipLose);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gameName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.mcb = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numMatchPlayed = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.chipFee = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.detail = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.tableId = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.dateUnix = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.createdAtUnix = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.chipWin = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.chipLose = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MatchDetail {
    return {
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      gameName: isSet(object.gameName) ? globalThis.String(object.gameName) : "",
      mcb: isSet(object.mcb) ? globalThis.Number(object.mcb) : 0,
      numMatchPlayed: isSet(object.numMatchPlayed) ? globalThis.Number(object.numMatchPlayed) : 0,
      chipFee: isSet(object.chipFee) ? globalThis.Number(object.chipFee) : 0,
      detail: isSet(object.detail) ? globalThis.String(object.detail) : "",
      tableId: isSet(object.tableId) ? globalThis.Number(object.tableId) : 0,
      dateUnix: isSet(object.dateUnix) ? globalThis.Number(object.dateUnix) : 0,
      createdAtUnix: isSet(object.createdAtUnix) ? globalThis.Number(object.createdAtUnix) : 0,
      chipWin: isSet(object.chipWin) ? globalThis.Number(object.chipWin) : 0,
      chipLose: isSet(object.chipLose) ? globalThis.Number(object.chipLose) : 0,
    };
  },

  toJSON(message: MatchDetail): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.gameName !== "") {
      obj.gameName = message.gameName;
    }
    if (message.mcb !== 0) {
      obj.mcb = Math.round(message.mcb);
    }
    if (message.numMatchPlayed !== 0) {
      obj.numMatchPlayed = Math.round(message.numMatchPlayed);
    }
    if (message.chipFee !== 0) {
      obj.chipFee = Math.round(message.chipFee);
    }
    if (message.detail !== "") {
      obj.detail = message.detail;
    }
    if (message.tableId !== 0) {
      obj.tableId = Math.round(message.tableId);
    }
    if (message.dateUnix !== 0) {
      obj.dateUnix = Math.round(message.dateUnix);
    }
    if (message.createdAtUnix !== 0) {
      obj.createdAtUnix = Math.round(message.createdAtUnix);
    }
    if (message.chipWin !== 0) {
      obj.chipWin = Math.round(message.chipWin);
    }
    if (message.chipLose !== 0) {
      obj.chipLose = Math.round(message.chipLose);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchDetail>, I>>(base?: I): MatchDetail {
    return MatchDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MatchDetail>, I>>(object: I): MatchDetail {
    const message = createBaseMatchDetail();
    message.gameId = object.gameId ?? 0;
    message.gameName = object.gameName ?? "";
    message.mcb = object.mcb ?? 0;
    message.numMatchPlayed = object.numMatchPlayed ?? 0;
    message.chipFee = object.chipFee ?? 0;
    message.detail = object.detail ?? "";
    message.tableId = object.tableId ?? 0;
    message.dateUnix = object.dateUnix ?? 0;
    message.createdAtUnix = object.createdAtUnix ?? 0;
    message.chipWin = object.chipWin ?? 0;
    message.chipLose = object.chipLose ?? 0;
    return message;
  },
};

function createBaseMatchDetailRequest(): MatchDetailRequest {
  return { gameId: 0, fromUnix: 0, toUnix: 0, userSid: 0, userPairSid: 0, limit: 0, offset: 0 };
}

export const MatchDetailRequest = {
  encode(message: MatchDetailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).int64(message.gameId);
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.userSid !== 0) {
      writer.uint32(32).int64(message.userSid);
    }
    if (message.userPairSid !== 0) {
      writer.uint32(40).int64(message.userPairSid);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(56).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchDetailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchDetailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.userPairSid = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MatchDetailRequest {
    return {
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
      userPairSid: isSet(object.userPairSid) ? globalThis.Number(object.userPairSid) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: MatchDetailRequest): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    if (message.userPairSid !== 0) {
      obj.userPairSid = Math.round(message.userPairSid);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchDetailRequest>, I>>(base?: I): MatchDetailRequest {
    return MatchDetailRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MatchDetailRequest>, I>>(object: I): MatchDetailRequest {
    const message = createBaseMatchDetailRequest();
    message.gameId = object.gameId ?? 0;
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.userSid = object.userSid ?? 0;
    message.userPairSid = object.userPairSid ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMatchDetailResponse(): MatchDetailResponse {
  return { matchDetails: [], total: 0, limit: 0, offset: 0 };
}

export const MatchDetailResponse = {
  encode(message: MatchDetailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matchDetails) {
      MatchDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(56).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchDetailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchDetailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchDetails.push(MatchDetail.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MatchDetailResponse {
    return {
      matchDetails: globalThis.Array.isArray(object?.matchDetails)
        ? object.matchDetails.map((e: any) => MatchDetail.fromJSON(e))
        : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: MatchDetailResponse): unknown {
    const obj: any = {};
    if (message.matchDetails?.length) {
      obj.matchDetails = message.matchDetails.map((e) => MatchDetail.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchDetailResponse>, I>>(base?: I): MatchDetailResponse {
    return MatchDetailResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MatchDetailResponse>, I>>(object: I): MatchDetailResponse {
    const message = createBaseMatchDetailResponse();
    message.matchDetails = object.matchDetails?.map((e) => MatchDetail.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePlayerData(): PlayerData {
  return { userId: "", chip: 0, chipAdd: 0, userSid: 0 };
}

export const PlayerData = {
  encode(message: PlayerData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.chip !== 0) {
      writer.uint32(16).int64(message.chip);
    }
    if (message.chipAdd !== 0) {
      writer.uint32(24).int64(message.chipAdd);
    }
    if (message.userSid !== 0) {
      writer.uint32(64).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerData();
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

          message.chip = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chipAdd = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlayerData {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      chip: isSet(object.chip) ? globalThis.Number(object.chip) : 0,
      chipAdd: isSet(object.chipAdd) ? globalThis.Number(object.chipAdd) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: PlayerData): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.chip !== 0) {
      obj.chip = Math.round(message.chip);
    }
    if (message.chipAdd !== 0) {
      obj.chipAdd = Math.round(message.chipAdd);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerData>, I>>(base?: I): PlayerData {
    return PlayerData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerData>, I>>(object: I): PlayerData {
    const message = createBasePlayerData();
    message.userId = object.userId ?? "";
    message.chip = object.chip ?? 0;
    message.chipAdd = object.chipAdd ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseMatchData(): MatchData {
  return { gameId: 0, gameCode: "", mcb: 0, chipFee: 0, matchId: "", tableId: 0 };
}

export const MatchData = {
  encode(message: MatchData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).int64(message.gameId);
    }
    if (message.gameCode !== "") {
      writer.uint32(26).string(message.gameCode);
    }
    if (message.mcb !== 0) {
      writer.uint32(32).int64(message.mcb);
    }
    if (message.chipFee !== 0) {
      writer.uint32(40).int64(message.chipFee);
    }
    if (message.matchId !== "") {
      writer.uint32(50).string(message.matchId);
    }
    if (message.tableId !== 0) {
      writer.uint32(56).int64(message.tableId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gameCode = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.mcb = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.chipFee = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.matchId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.tableId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MatchData {
    return {
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      gameCode: isSet(object.gameCode) ? globalThis.String(object.gameCode) : "",
      mcb: isSet(object.mcb) ? globalThis.Number(object.mcb) : 0,
      chipFee: isSet(object.chipFee) ? globalThis.Number(object.chipFee) : 0,
      matchId: isSet(object.matchId) ? globalThis.String(object.matchId) : "",
      tableId: isSet(object.tableId) ? globalThis.Number(object.tableId) : 0,
    };
  },

  toJSON(message: MatchData): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.gameCode !== "") {
      obj.gameCode = message.gameCode;
    }
    if (message.mcb !== 0) {
      obj.mcb = Math.round(message.mcb);
    }
    if (message.chipFee !== 0) {
      obj.chipFee = Math.round(message.chipFee);
    }
    if (message.matchId !== "") {
      obj.matchId = message.matchId;
    }
    if (message.tableId !== 0) {
      obj.tableId = Math.round(message.tableId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchData>, I>>(base?: I): MatchData {
    return MatchData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MatchData>, I>>(object: I): MatchData {
    const message = createBaseMatchData();
    message.gameId = object.gameId ?? 0;
    message.gameCode = object.gameCode ?? "";
    message.mcb = object.mcb ?? 0;
    message.chipFee = object.chipFee ?? 0;
    message.matchId = object.matchId ?? "";
    message.tableId = object.tableId ?? 0;
    return message;
  },
};

function createBaseOpReport(): OpReport {
  return { playerData: [], matchData: undefined };
}

export const OpReport = {
  encode(message: OpReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playerData) {
      PlayerData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.matchData !== undefined) {
      MatchData.encode(message.matchData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playerData.push(PlayerData.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchData = MatchData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpReport {
    return {
      playerData: globalThis.Array.isArray(object?.playerData)
        ? object.playerData.map((e: any) => PlayerData.fromJSON(e))
        : [],
      matchData: isSet(object.matchData) ? MatchData.fromJSON(object.matchData) : undefined,
    };
  },

  toJSON(message: OpReport): unknown {
    const obj: any = {};
    if (message.playerData?.length) {
      obj.playerData = message.playerData.map((e) => PlayerData.toJSON(e));
    }
    if (message.matchData !== undefined) {
      obj.matchData = MatchData.toJSON(message.matchData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpReport>, I>>(base?: I): OpReport {
    return OpReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpReport>, I>>(object: I): OpReport {
    const message = createBaseOpReport();
    message.playerData = object.playerData?.map((e) => PlayerData.fromPartial(e)) || [];
    message.matchData = (object.matchData !== undefined && object.matchData !== null)
      ? MatchData.fromPartial(object.matchData)
      : undefined;
    return message;
  },
};

function createBaseGoldStatistic(): GoldStatistic {
  return { timeUpdateUnix: 0, pay: 0, promotion: 0, matchData: [], agCashout: 0, agBank: 0, chips: 0 };
}

export const GoldStatistic = {
  encode(message: GoldStatistic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeUpdateUnix !== 0) {
      writer.uint32(8).int64(message.timeUpdateUnix);
    }
    if (message.pay !== 0) {
      writer.uint32(16).int64(message.pay);
    }
    if (message.promotion !== 0) {
      writer.uint32(24).int64(message.promotion);
    }
    for (const v of message.matchData) {
      MatchData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.agCashout !== 0) {
      writer.uint32(40).int64(message.agCashout);
    }
    if (message.agBank !== 0) {
      writer.uint32(48).int64(message.agBank);
    }
    if (message.chips !== 0) {
      writer.uint32(56).int64(message.chips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoldStatistic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoldStatistic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timeUpdateUnix = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pay = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.promotion = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.matchData.push(MatchData.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.agCashout = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.agBank = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
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

  fromJSON(object: any): GoldStatistic {
    return {
      timeUpdateUnix: isSet(object.timeUpdateUnix) ? globalThis.Number(object.timeUpdateUnix) : 0,
      pay: isSet(object.pay) ? globalThis.Number(object.pay) : 0,
      promotion: isSet(object.promotion) ? globalThis.Number(object.promotion) : 0,
      matchData: globalThis.Array.isArray(object?.matchData)
        ? object.matchData.map((e: any) => MatchData.fromJSON(e))
        : [],
      agCashout: isSet(object.agCashout) ? globalThis.Number(object.agCashout) : 0,
      agBank: isSet(object.agBank) ? globalThis.Number(object.agBank) : 0,
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
    };
  },

  toJSON(message: GoldStatistic): unknown {
    const obj: any = {};
    if (message.timeUpdateUnix !== 0) {
      obj.timeUpdateUnix = Math.round(message.timeUpdateUnix);
    }
    if (message.pay !== 0) {
      obj.pay = Math.round(message.pay);
    }
    if (message.promotion !== 0) {
      obj.promotion = Math.round(message.promotion);
    }
    if (message.matchData?.length) {
      obj.matchData = message.matchData.map((e) => MatchData.toJSON(e));
    }
    if (message.agCashout !== 0) {
      obj.agCashout = Math.round(message.agCashout);
    }
    if (message.agBank !== 0) {
      obj.agBank = Math.round(message.agBank);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoldStatistic>, I>>(base?: I): GoldStatistic {
    return GoldStatistic.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoldStatistic>, I>>(object: I): GoldStatistic {
    const message = createBaseGoldStatistic();
    message.timeUpdateUnix = object.timeUpdateUnix ?? 0;
    message.pay = object.pay ?? 0;
    message.promotion = object.promotion ?? 0;
    message.matchData = object.matchData?.map((e) => MatchData.fromPartial(e)) || [];
    message.agCashout = object.agCashout ?? 0;
    message.agBank = object.agBank ?? 0;
    message.chips = object.chips ?? 0;
    return message;
  },
};

function createBaseGoldStatisticRequest(): GoldStatisticRequest {
  return { fromUnix: 0, toUnix: 0, limit: 0, offset: 0 };
}

export const GoldStatisticRequest = {
  encode(message: GoldStatisticRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromUnix !== 0) {
      writer.uint32(8).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(16).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoldStatisticRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoldStatisticRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoldStatisticRequest {
    return {
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: GoldStatisticRequest): unknown {
    const obj: any = {};
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoldStatisticRequest>, I>>(base?: I): GoldStatisticRequest {
    return GoldStatisticRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoldStatisticRequest>, I>>(object: I): GoldStatisticRequest {
    const message = createBaseGoldStatisticRequest();
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseGoldStatisticResponse(): GoldStatisticResponse {
  return { goldStatistics: [], limit: 0, offset: 0, total: 0 };
}

export const GoldStatisticResponse = {
  encode(message: GoldStatisticResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.goldStatistics) {
      GoldStatistic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(24).int64(message.offset);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoldStatisticResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoldStatisticResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.goldStatistics.push(GoldStatistic.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoldStatisticResponse {
    return {
      goldStatistics: globalThis.Array.isArray(object?.goldStatistics)
        ? object.goldStatistics.map((e: any) => GoldStatistic.fromJSON(e))
        : [],
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: GoldStatisticResponse): unknown {
    const obj: any = {};
    if (message.goldStatistics?.length) {
      obj.goldStatistics = message.goldStatistics.map((e) => GoldStatistic.toJSON(e));
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoldStatisticResponse>, I>>(base?: I): GoldStatisticResponse {
    return GoldStatisticResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoldStatisticResponse>, I>>(object: I): GoldStatisticResponse {
    const message = createBaseGoldStatisticResponse();
    message.goldStatistics = object.goldStatistics?.map((e) => GoldStatistic.fromPartial(e)) || [];
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseUserStatistic(): UserStatistic {
  return {
    totalChipDeposit: 0,
    totalChipWithDraw: 0,
    totalChipWin: 0,
    totalChipLose: 0,
    totalChipPromotion: 0,
    totalChipSend: 0,
    totalChipRecv: 0,
    coRatio: 0,
    totalChipDeposit3d: 0,
    totalChipWithDraw3d: 0,
    luck: 0,
    userCreateTimeUnix: 0,
    userStatGameHistories: [],
    recvChipStats: [],
    sendChipStats: [],
  };
}

export const UserStatistic = {
  encode(message: UserStatistic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalChipDeposit !== 0) {
      writer.uint32(8).int64(message.totalChipDeposit);
    }
    if (message.totalChipWithDraw !== 0) {
      writer.uint32(16).int64(message.totalChipWithDraw);
    }
    if (message.totalChipWin !== 0) {
      writer.uint32(24).int64(message.totalChipWin);
    }
    if (message.totalChipLose !== 0) {
      writer.uint32(32).int64(message.totalChipLose);
    }
    if (message.totalChipPromotion !== 0) {
      writer.uint32(40).int64(message.totalChipPromotion);
    }
    if (message.totalChipSend !== 0) {
      writer.uint32(48).int64(message.totalChipSend);
    }
    if (message.totalChipRecv !== 0) {
      writer.uint32(56).int64(message.totalChipRecv);
    }
    if (message.coRatio !== 0) {
      writer.uint32(64).int64(message.coRatio);
    }
    if (message.totalChipDeposit3d !== 0) {
      writer.uint32(72).int64(message.totalChipDeposit3d);
    }
    if (message.totalChipWithDraw3d !== 0) {
      writer.uint32(80).int64(message.totalChipWithDraw3d);
    }
    if (message.luck !== 0) {
      writer.uint32(88).int64(message.luck);
    }
    if (message.userCreateTimeUnix !== 0) {
      writer.uint32(96).int64(message.userCreateTimeUnix);
    }
    for (const v of message.userStatGameHistories) {
      UserStatGameHistory.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.recvChipStats) {
      UserTransferGoldStat.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.sendChipStats) {
      UserTransferGoldStat.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserStatistic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStatistic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalChipDeposit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalChipWithDraw = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalChipWin = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalChipLose = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalChipPromotion = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.totalChipSend = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.totalChipRecv = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.coRatio = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.totalChipDeposit3d = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.totalChipWithDraw3d = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.luck = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.userCreateTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.userStatGameHistories.push(UserStatGameHistory.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.recvChipStats.push(UserTransferGoldStat.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.sendChipStats.push(UserTransferGoldStat.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserStatistic {
    return {
      totalChipDeposit: isSet(object.totalChipDeposit) ? globalThis.Number(object.totalChipDeposit) : 0,
      totalChipWithDraw: isSet(object.totalChipWithDraw) ? globalThis.Number(object.totalChipWithDraw) : 0,
      totalChipWin: isSet(object.totalChipWin) ? globalThis.Number(object.totalChipWin) : 0,
      totalChipLose: isSet(object.totalChipLose) ? globalThis.Number(object.totalChipLose) : 0,
      totalChipPromotion: isSet(object.totalChipPromotion) ? globalThis.Number(object.totalChipPromotion) : 0,
      totalChipSend: isSet(object.totalChipSend) ? globalThis.Number(object.totalChipSend) : 0,
      totalChipRecv: isSet(object.totalChipRecv) ? globalThis.Number(object.totalChipRecv) : 0,
      coRatio: isSet(object.coRatio) ? globalThis.Number(object.coRatio) : 0,
      totalChipDeposit3d: isSet(object.totalChipDeposit3d) ? globalThis.Number(object.totalChipDeposit3d) : 0,
      totalChipWithDraw3d: isSet(object.totalChipWithDraw3d) ? globalThis.Number(object.totalChipWithDraw3d) : 0,
      luck: isSet(object.luck) ? globalThis.Number(object.luck) : 0,
      userCreateTimeUnix: isSet(object.userCreateTimeUnix) ? globalThis.Number(object.userCreateTimeUnix) : 0,
      userStatGameHistories: globalThis.Array.isArray(object?.userStatGameHistories)
        ? object.userStatGameHistories.map((e: any) => UserStatGameHistory.fromJSON(e))
        : [],
      recvChipStats: globalThis.Array.isArray(object?.recvChipStats)
        ? object.recvChipStats.map((e: any) => UserTransferGoldStat.fromJSON(e))
        : [],
      sendChipStats: globalThis.Array.isArray(object?.sendChipStats)
        ? object.sendChipStats.map((e: any) => UserTransferGoldStat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserStatistic): unknown {
    const obj: any = {};
    if (message.totalChipDeposit !== 0) {
      obj.totalChipDeposit = Math.round(message.totalChipDeposit);
    }
    if (message.totalChipWithDraw !== 0) {
      obj.totalChipWithDraw = Math.round(message.totalChipWithDraw);
    }
    if (message.totalChipWin !== 0) {
      obj.totalChipWin = Math.round(message.totalChipWin);
    }
    if (message.totalChipLose !== 0) {
      obj.totalChipLose = Math.round(message.totalChipLose);
    }
    if (message.totalChipPromotion !== 0) {
      obj.totalChipPromotion = Math.round(message.totalChipPromotion);
    }
    if (message.totalChipSend !== 0) {
      obj.totalChipSend = Math.round(message.totalChipSend);
    }
    if (message.totalChipRecv !== 0) {
      obj.totalChipRecv = Math.round(message.totalChipRecv);
    }
    if (message.coRatio !== 0) {
      obj.coRatio = Math.round(message.coRatio);
    }
    if (message.totalChipDeposit3d !== 0) {
      obj.totalChipDeposit3d = Math.round(message.totalChipDeposit3d);
    }
    if (message.totalChipWithDraw3d !== 0) {
      obj.totalChipWithDraw3d = Math.round(message.totalChipWithDraw3d);
    }
    if (message.luck !== 0) {
      obj.luck = Math.round(message.luck);
    }
    if (message.userCreateTimeUnix !== 0) {
      obj.userCreateTimeUnix = Math.round(message.userCreateTimeUnix);
    }
    if (message.userStatGameHistories?.length) {
      obj.userStatGameHistories = message.userStatGameHistories.map((e) => UserStatGameHistory.toJSON(e));
    }
    if (message.recvChipStats?.length) {
      obj.recvChipStats = message.recvChipStats.map((e) => UserTransferGoldStat.toJSON(e));
    }
    if (message.sendChipStats?.length) {
      obj.sendChipStats = message.sendChipStats.map((e) => UserTransferGoldStat.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserStatistic>, I>>(base?: I): UserStatistic {
    return UserStatistic.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserStatistic>, I>>(object: I): UserStatistic {
    const message = createBaseUserStatistic();
    message.totalChipDeposit = object.totalChipDeposit ?? 0;
    message.totalChipWithDraw = object.totalChipWithDraw ?? 0;
    message.totalChipWin = object.totalChipWin ?? 0;
    message.totalChipLose = object.totalChipLose ?? 0;
    message.totalChipPromotion = object.totalChipPromotion ?? 0;
    message.totalChipSend = object.totalChipSend ?? 0;
    message.totalChipRecv = object.totalChipRecv ?? 0;
    message.coRatio = object.coRatio ?? 0;
    message.totalChipDeposit3d = object.totalChipDeposit3d ?? 0;
    message.totalChipWithDraw3d = object.totalChipWithDraw3d ?? 0;
    message.luck = object.luck ?? 0;
    message.userCreateTimeUnix = object.userCreateTimeUnix ?? 0;
    message.userStatGameHistories = object.userStatGameHistories?.map((e) => UserStatGameHistory.fromPartial(e)) || [];
    message.recvChipStats = object.recvChipStats?.map((e) => UserTransferGoldStat.fromPartial(e)) || [];
    message.sendChipStats = object.sendChipStats?.map((e) => UserTransferGoldStat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserStatisticRequest(): UserStatisticRequest {
  return { userId: "", fromUnix: 0, toUnix: 0, userSid: 0, deviceId: "" };
}

export const UserStatisticRequest = {
  encode(message: UserStatisticRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.userSid !== 0) {
      writer.uint32(32).int64(message.userSid);
    }
    if (message.deviceId !== "") {
      writer.uint32(42).string(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserStatisticRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStatisticRequest();
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

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deviceId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserStatisticRequest {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
    };
  },

  toJSON(message: UserStatisticRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserStatisticRequest>, I>>(base?: I): UserStatisticRequest {
    return UserStatisticRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserStatisticRequest>, I>>(object: I): UserStatisticRequest {
    const message = createBaseUserStatisticRequest();
    message.userId = object.userId ?? "";
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.userSid = object.userSid ?? 0;
    message.deviceId = object.deviceId ?? "";
    return message;
  },
};

function createBaseUserStatGameHistory(): UserStatGameHistory {
  return { gameId: 0, gameName: "", totalChipWin: 0, totalChipLost: 0 };
}

export const UserStatGameHistory = {
  encode(message: UserStatGameHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== 0) {
      writer.uint32(8).int64(message.gameId);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    if (message.totalChipWin !== 0) {
      writer.uint32(24).int64(message.totalChipWin);
    }
    if (message.totalChipLost !== 0) {
      writer.uint32(32).int64(message.totalChipLost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserStatGameHistory {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStatGameHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gameName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalChipWin = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalChipLost = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserStatGameHistory {
    return {
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
      gameName: isSet(object.gameName) ? globalThis.String(object.gameName) : "",
      totalChipWin: isSet(object.totalChipWin) ? globalThis.Number(object.totalChipWin) : 0,
      totalChipLost: isSet(object.totalChipLost) ? globalThis.Number(object.totalChipLost) : 0,
    };
  },

  toJSON(message: UserStatGameHistory): unknown {
    const obj: any = {};
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    if (message.gameName !== "") {
      obj.gameName = message.gameName;
    }
    if (message.totalChipWin !== 0) {
      obj.totalChipWin = Math.round(message.totalChipWin);
    }
    if (message.totalChipLost !== 0) {
      obj.totalChipLost = Math.round(message.totalChipLost);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserStatGameHistory>, I>>(base?: I): UserStatGameHistory {
    return UserStatGameHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserStatGameHistory>, I>>(object: I): UserStatGameHistory {
    const message = createBaseUserStatGameHistory();
    message.gameId = object.gameId ?? 0;
    message.gameName = object.gameName ?? "";
    message.totalChipWin = object.totalChipWin ?? 0;
    message.totalChipLost = object.totalChipLost ?? 0;
    return message;
  },
};

function createBaseUserTransferGoldStat(): UserTransferGoldStat {
  return { userSendId: "", userSendName: "", userRecvId: "", userRecvName: "", chip: 0 };
}

export const UserTransferGoldStat = {
  encode(message: UserTransferGoldStat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userSendId !== "") {
      writer.uint32(10).string(message.userSendId);
    }
    if (message.userSendName !== "") {
      writer.uint32(18).string(message.userSendName);
    }
    if (message.userRecvId !== "") {
      writer.uint32(26).string(message.userRecvId);
    }
    if (message.userRecvName !== "") {
      writer.uint32(34).string(message.userRecvName);
    }
    if (message.chip !== 0) {
      writer.uint32(40).int64(message.chip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserTransferGoldStat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTransferGoldStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userSendId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userSendName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userRecvId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userRecvName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.chip = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserTransferGoldStat {
    return {
      userSendId: isSet(object.userSendId) ? globalThis.String(object.userSendId) : "",
      userSendName: isSet(object.userSendName) ? globalThis.String(object.userSendName) : "",
      userRecvId: isSet(object.userRecvId) ? globalThis.String(object.userRecvId) : "",
      userRecvName: isSet(object.userRecvName) ? globalThis.String(object.userRecvName) : "",
      chip: isSet(object.chip) ? globalThis.Number(object.chip) : 0,
    };
  },

  toJSON(message: UserTransferGoldStat): unknown {
    const obj: any = {};
    if (message.userSendId !== "") {
      obj.userSendId = message.userSendId;
    }
    if (message.userSendName !== "") {
      obj.userSendName = message.userSendName;
    }
    if (message.userRecvId !== "") {
      obj.userRecvId = message.userRecvId;
    }
    if (message.userRecvName !== "") {
      obj.userRecvName = message.userRecvName;
    }
    if (message.chip !== 0) {
      obj.chip = Math.round(message.chip);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserTransferGoldStat>, I>>(base?: I): UserTransferGoldStat {
    return UserTransferGoldStat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserTransferGoldStat>, I>>(object: I): UserTransferGoldStat {
    const message = createBaseUserTransferGoldStat();
    message.userSendId = object.userSendId ?? "";
    message.userSendName = object.userSendName ?? "";
    message.userRecvId = object.userRecvId ?? "";
    message.userRecvName = object.userRecvName ?? "";
    message.chip = object.chip ?? 0;
    return message;
  },
};

function createBaseUserInfo(): UserInfo {
  return { profile: undefined, totalIn: 0, totalOut: 0 };
}

export const UserInfo = {
  encode(message: UserInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalIn !== 0) {
      writer.uint32(16).int64(message.totalIn);
    }
    if (message.totalOut !== 0) {
      writer.uint32(24).int64(message.totalOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profile = Profile.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalIn = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalOut = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserInfo {
    return {
      profile: isSet(object.profile) ? Profile.fromJSON(object.profile) : undefined,
      totalIn: isSet(object.totalIn) ? globalThis.Number(object.totalIn) : 0,
      totalOut: isSet(object.totalOut) ? globalThis.Number(object.totalOut) : 0,
    };
  },

  toJSON(message: UserInfo): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = Profile.toJSON(message.profile);
    }
    if (message.totalIn !== 0) {
      obj.totalIn = Math.round(message.totalIn);
    }
    if (message.totalOut !== 0) {
      obj.totalOut = Math.round(message.totalOut);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo>, I>>(base?: I): UserInfo {
    return UserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfo>, I>>(object: I): UserInfo {
    const message = createBaseUserInfo();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? Profile.fromPartial(object.profile)
      : undefined;
    message.totalIn = object.totalIn ?? 0;
    message.totalOut = object.totalOut ?? 0;
    return message;
  },
};

function createBaseUserInfoResponse(): UserInfoResponse {
  return { userInfos: [], total: 0, deviceId: "", totalIn: 0, totalOut: 0, totalLock: 0 };
}

export const UserInfoResponse = {
  encode(message: UserInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userInfos) {
      UserInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    if (message.deviceId !== "") {
      writer.uint32(26).string(message.deviceId);
    }
    if (message.totalIn !== 0) {
      writer.uint32(32).int64(message.totalIn);
    }
    if (message.totalOut !== 0) {
      writer.uint32(40).int64(message.totalOut);
    }
    if (message.totalLock !== 0) {
      writer.uint32(48).int64(message.totalLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userInfos.push(UserInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalIn = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalOut = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.totalLock = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserInfoResponse {
    return {
      userInfos: globalThis.Array.isArray(object?.userInfos)
        ? object.userInfos.map((e: any) => UserInfo.fromJSON(e))
        : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      totalIn: isSet(object.totalIn) ? globalThis.Number(object.totalIn) : 0,
      totalOut: isSet(object.totalOut) ? globalThis.Number(object.totalOut) : 0,
      totalLock: isSet(object.totalLock) ? globalThis.Number(object.totalLock) : 0,
    };
  },

  toJSON(message: UserInfoResponse): unknown {
    const obj: any = {};
    if (message.userInfos?.length) {
      obj.userInfos = message.userInfos.map((e) => UserInfo.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.totalIn !== 0) {
      obj.totalIn = Math.round(message.totalIn);
    }
    if (message.totalOut !== 0) {
      obj.totalOut = Math.round(message.totalOut);
    }
    if (message.totalLock !== 0) {
      obj.totalLock = Math.round(message.totalLock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfoResponse>, I>>(base?: I): UserInfoResponse {
    return UserInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfoResponse>, I>>(object: I): UserInfoResponse {
    const message = createBaseUserInfoResponse();
    message.userInfos = object.userInfos?.map((e) => UserInfo.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    message.deviceId = object.deviceId ?? "";
    message.totalIn = object.totalIn ?? 0;
    message.totalOut = object.totalOut ?? 0;
    message.totalLock = object.totalLock ?? 0;
    return message;
  },
};

function createBaseCashOut(): CashOut {
  return { userId: "", userName: "", ci: 0, cio: 0, co: 0, coo: 0, luckyPercent: 0, userSid: 0 };
}

export const CashOut = {
  encode(message: CashOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.ci !== 0) {
      writer.uint32(24).int64(message.ci);
    }
    if (message.cio !== 0) {
      writer.uint32(32).int64(message.cio);
    }
    if (message.co !== 0) {
      writer.uint32(40).int64(message.co);
    }
    if (message.coo !== 0) {
      writer.uint32(48).int64(message.coo);
    }
    if (message.luckyPercent !== 0) {
      writer.uint32(56).int64(message.luckyPercent);
    }
    if (message.userSid !== 0) {
      writer.uint32(64).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashOut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashOut();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ci = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.cio = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.co = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.coo = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.luckyPercent = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashOut {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      ci: isSet(object.ci) ? globalThis.Number(object.ci) : 0,
      cio: isSet(object.cio) ? globalThis.Number(object.cio) : 0,
      co: isSet(object.co) ? globalThis.Number(object.co) : 0,
      coo: isSet(object.coo) ? globalThis.Number(object.coo) : 0,
      luckyPercent: isSet(object.luckyPercent) ? globalThis.Number(object.luckyPercent) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: CashOut): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.ci !== 0) {
      obj.ci = Math.round(message.ci);
    }
    if (message.cio !== 0) {
      obj.cio = Math.round(message.cio);
    }
    if (message.co !== 0) {
      obj.co = Math.round(message.co);
    }
    if (message.coo !== 0) {
      obj.coo = Math.round(message.coo);
    }
    if (message.luckyPercent !== 0) {
      obj.luckyPercent = Math.round(message.luckyPercent);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashOut>, I>>(base?: I): CashOut {
    return CashOut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashOut>, I>>(object: I): CashOut {
    const message = createBaseCashOut();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.ci = object.ci ?? 0;
    message.cio = object.cio ?? 0;
    message.co = object.co ?? 0;
    message.coo = object.coo ?? 0;
    message.luckyPercent = object.luckyPercent ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseTopCashOut(): TopCashOut {
  return { cashouts: [], fromUnix: 0, toUnix: 0, limit: 0, offset: 0, total: 0 };
}

export const TopCashOut = {
  encode(message: TopCashOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cashouts) {
      CashOut.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.total !== 0) {
      writer.uint32(48).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopCashOut {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopCashOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cashouts.push(CashOut.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopCashOut {
    return {
      cashouts: globalThis.Array.isArray(object?.cashouts) ? object.cashouts.map((e: any) => CashOut.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: TopCashOut): unknown {
    const obj: any = {};
    if (message.cashouts?.length) {
      obj.cashouts = message.cashouts.map((e) => CashOut.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopCashOut>, I>>(base?: I): TopCashOut {
    return TopCashOut.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopCashOut>, I>>(object: I): TopCashOut {
    const message = createBaseTopCashOut();
    message.cashouts = object.cashouts?.map((e) => CashOut.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseVip(): Vip {
  return {
    userId: "",
    userName: "",
    cio: 0,
    totalChip: 0,
    lastLoginTimeUnix: 0,
    createdTimeUnix: 0,
    refGame: "",
    ci: 0,
    co: 0,
    ci2d: 0,
    co2d: 0,
    luckyPercent: 0,
    isBanned: false,
    isOnline: false,
    totalIn: 0,
    totalOut: 0,
    userSid: 0,
  };
}

export const Vip = {
  encode(message: Vip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.cio !== 0) {
      writer.uint32(24).int64(message.cio);
    }
    if (message.totalChip !== 0) {
      writer.uint32(32).int64(message.totalChip);
    }
    if (message.lastLoginTimeUnix !== 0) {
      writer.uint32(40).int64(message.lastLoginTimeUnix);
    }
    if (message.createdTimeUnix !== 0) {
      writer.uint32(48).int64(message.createdTimeUnix);
    }
    if (message.refGame !== "") {
      writer.uint32(58).string(message.refGame);
    }
    if (message.ci !== 0) {
      writer.uint32(64).int64(message.ci);
    }
    if (message.co !== 0) {
      writer.uint32(72).int64(message.co);
    }
    if (message.ci2d !== 0) {
      writer.uint32(80).int64(message.ci2d);
    }
    if (message.co2d !== 0) {
      writer.uint32(88).int64(message.co2d);
    }
    if (message.luckyPercent !== 0) {
      writer.uint32(96).int64(message.luckyPercent);
    }
    if (message.isBanned === true) {
      writer.uint32(104).bool(message.isBanned);
    }
    if (message.isOnline === true) {
      writer.uint32(112).bool(message.isOnline);
    }
    if (message.totalIn !== 0) {
      writer.uint32(120).int64(message.totalIn);
    }
    if (message.totalOut !== 0) {
      writer.uint32(128).int64(message.totalOut);
    }
    if (message.userSid !== 0) {
      writer.uint32(136).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVip();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cio = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalChip = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastLoginTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.createdTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.refGame = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ci = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.co = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.ci2d = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.co2d = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.luckyPercent = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.isBanned = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.isOnline = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.totalIn = longToNumber(reader.int64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.totalOut = longToNumber(reader.int64() as Long);
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vip {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      cio: isSet(object.cio) ? globalThis.Number(object.cio) : 0,
      totalChip: isSet(object.totalChip) ? globalThis.Number(object.totalChip) : 0,
      lastLoginTimeUnix: isSet(object.lastLoginTimeUnix) ? globalThis.Number(object.lastLoginTimeUnix) : 0,
      createdTimeUnix: isSet(object.createdTimeUnix) ? globalThis.Number(object.createdTimeUnix) : 0,
      refGame: isSet(object.refGame) ? globalThis.String(object.refGame) : "",
      ci: isSet(object.ci) ? globalThis.Number(object.ci) : 0,
      co: isSet(object.co) ? globalThis.Number(object.co) : 0,
      ci2d: isSet(object.ci2d) ? globalThis.Number(object.ci2d) : 0,
      co2d: isSet(object.co2d) ? globalThis.Number(object.co2d) : 0,
      luckyPercent: isSet(object.luckyPercent) ? globalThis.Number(object.luckyPercent) : 0,
      isBanned: isSet(object.isBanned) ? globalThis.Boolean(object.isBanned) : false,
      isOnline: isSet(object.isOnline) ? globalThis.Boolean(object.isOnline) : false,
      totalIn: isSet(object.totalIn) ? globalThis.Number(object.totalIn) : 0,
      totalOut: isSet(object.totalOut) ? globalThis.Number(object.totalOut) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: Vip): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.cio !== 0) {
      obj.cio = Math.round(message.cio);
    }
    if (message.totalChip !== 0) {
      obj.totalChip = Math.round(message.totalChip);
    }
    if (message.lastLoginTimeUnix !== 0) {
      obj.lastLoginTimeUnix = Math.round(message.lastLoginTimeUnix);
    }
    if (message.createdTimeUnix !== 0) {
      obj.createdTimeUnix = Math.round(message.createdTimeUnix);
    }
    if (message.refGame !== "") {
      obj.refGame = message.refGame;
    }
    if (message.ci !== 0) {
      obj.ci = Math.round(message.ci);
    }
    if (message.co !== 0) {
      obj.co = Math.round(message.co);
    }
    if (message.ci2d !== 0) {
      obj.ci2d = Math.round(message.ci2d);
    }
    if (message.co2d !== 0) {
      obj.co2d = Math.round(message.co2d);
    }
    if (message.luckyPercent !== 0) {
      obj.luckyPercent = Math.round(message.luckyPercent);
    }
    if (message.isBanned === true) {
      obj.isBanned = message.isBanned;
    }
    if (message.isOnline === true) {
      obj.isOnline = message.isOnline;
    }
    if (message.totalIn !== 0) {
      obj.totalIn = Math.round(message.totalIn);
    }
    if (message.totalOut !== 0) {
      obj.totalOut = Math.round(message.totalOut);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Vip>, I>>(base?: I): Vip {
    return Vip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Vip>, I>>(object: I): Vip {
    const message = createBaseVip();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.cio = object.cio ?? 0;
    message.totalChip = object.totalChip ?? 0;
    message.lastLoginTimeUnix = object.lastLoginTimeUnix ?? 0;
    message.createdTimeUnix = object.createdTimeUnix ?? 0;
    message.refGame = object.refGame ?? "";
    message.ci = object.ci ?? 0;
    message.co = object.co ?? 0;
    message.ci2d = object.ci2d ?? 0;
    message.co2d = object.co2d ?? 0;
    message.luckyPercent = object.luckyPercent ?? 0;
    message.isBanned = object.isBanned ?? false;
    message.isOnline = object.isOnline ?? false;
    message.totalIn = object.totalIn ?? 0;
    message.totalOut = object.totalOut ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseTopVip(): TopVip {
  return { vips: [], fromUnix: 0, toUnix: 0, limit: 0, offset: 0, refGame: "", total: 0 };
}

export const TopVip = {
  encode(message: TopVip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vips) {
      Vip.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.refGame !== "") {
      writer.uint32(50).string(message.refGame);
    }
    if (message.total !== 0) {
      writer.uint32(56).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopVip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopVip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vips.push(Vip.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.refGame = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopVip {
    return {
      vips: globalThis.Array.isArray(object?.vips) ? object.vips.map((e: any) => Vip.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      refGame: isSet(object.refGame) ? globalThis.String(object.refGame) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: TopVip): unknown {
    const obj: any = {};
    if (message.vips?.length) {
      obj.vips = message.vips.map((e) => Vip.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.refGame !== "") {
      obj.refGame = message.refGame;
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopVip>, I>>(base?: I): TopVip {
    return TopVip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopVip>, I>>(object: I): TopVip {
    const message = createBaseTopVip();
    message.vips = object.vips?.map((e) => Vip.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.refGame = object.refGame ?? "";
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseWin(): Win {
  return {
    userId: "",
    userName: "",
    vip: 0,
    gold: 0,
    ag: 0,
    agWin: 0,
    co: 0,
    ci: 0,
    coRate: 0,
    luckyPercent: 0,
    userSid: 0,
  };
}

export const Win = {
  encode(message: Win, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.vip !== 0) {
      writer.uint32(24).int64(message.vip);
    }
    if (message.gold !== 0) {
      writer.uint32(32).int64(message.gold);
    }
    if (message.ag !== 0) {
      writer.uint32(40).int64(message.ag);
    }
    if (message.agWin !== 0) {
      writer.uint32(48).int64(message.agWin);
    }
    if (message.co !== 0) {
      writer.uint32(56).int64(message.co);
    }
    if (message.ci !== 0) {
      writer.uint32(64).int64(message.ci);
    }
    if (message.coRate !== 0) {
      writer.uint32(72).int64(message.coRate);
    }
    if (message.luckyPercent !== 0) {
      writer.uint32(80).int64(message.luckyPercent);
    }
    if (message.userSid !== 0) {
      writer.uint32(88).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Win {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWin();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gold = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ag = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.agWin = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.co = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ci = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.coRate = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.luckyPercent = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Win {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      gold: isSet(object.gold) ? globalThis.Number(object.gold) : 0,
      ag: isSet(object.ag) ? globalThis.Number(object.ag) : 0,
      agWin: isSet(object.agWin) ? globalThis.Number(object.agWin) : 0,
      co: isSet(object.co) ? globalThis.Number(object.co) : 0,
      ci: isSet(object.ci) ? globalThis.Number(object.ci) : 0,
      coRate: isSet(object.coRate) ? globalThis.Number(object.coRate) : 0,
      luckyPercent: isSet(object.luckyPercent) ? globalThis.Number(object.luckyPercent) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: Win): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.gold !== 0) {
      obj.gold = Math.round(message.gold);
    }
    if (message.ag !== 0) {
      obj.ag = Math.round(message.ag);
    }
    if (message.agWin !== 0) {
      obj.agWin = Math.round(message.agWin);
    }
    if (message.co !== 0) {
      obj.co = Math.round(message.co);
    }
    if (message.ci !== 0) {
      obj.ci = Math.round(message.ci);
    }
    if (message.coRate !== 0) {
      obj.coRate = Math.round(message.coRate);
    }
    if (message.luckyPercent !== 0) {
      obj.luckyPercent = Math.round(message.luckyPercent);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Win>, I>>(base?: I): Win {
    return Win.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Win>, I>>(object: I): Win {
    const message = createBaseWin();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.vip = object.vip ?? 0;
    message.gold = object.gold ?? 0;
    message.ag = object.ag ?? 0;
    message.agWin = object.agWin ?? 0;
    message.co = object.co ?? 0;
    message.ci = object.ci ?? 0;
    message.coRate = object.coRate ?? 0;
    message.luckyPercent = object.luckyPercent ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseTopWin(): TopWin {
  return { wins: [], fromUnix: 0, toUnix: 0, limit: 0, offset: 0, refGame: "", total: 0, gameId: 0 };
}

export const TopWin = {
  encode(message: TopWin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.wins) {
      Win.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.refGame !== "") {
      writer.uint32(50).string(message.refGame);
    }
    if (message.total !== 0) {
      writer.uint32(56).int64(message.total);
    }
    if (message.gameId !== 0) {
      writer.uint32(64).int64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopWin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopWin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wins.push(Win.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.refGame = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopWin {
    return {
      wins: globalThis.Array.isArray(object?.wins) ? object.wins.map((e: any) => Win.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      refGame: isSet(object.refGame) ? globalThis.String(object.refGame) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
    };
  },

  toJSON(message: TopWin): unknown {
    const obj: any = {};
    if (message.wins?.length) {
      obj.wins = message.wins.map((e) => Win.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.refGame !== "") {
      obj.refGame = message.refGame;
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopWin>, I>>(base?: I): TopWin {
    return TopWin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopWin>, I>>(object: I): TopWin {
    const message = createBaseTopWin();
    message.wins = object.wins?.map((e) => Win.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.refGame = object.refGame ?? "";
    message.total = object.total ?? 0;
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseLost(): Lost {
  return {
    userId: "",
    userName: "",
    vip: 0,
    gold: 0,
    ag: 0,
    agLost: 0,
    co: 0,
    ci: 0,
    coRate: 0,
    luckyPercent: 0,
    userSid: 0,
  };
}

export const Lost = {
  encode(message: Lost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.vip !== 0) {
      writer.uint32(24).int64(message.vip);
    }
    if (message.gold !== 0) {
      writer.uint32(32).int64(message.gold);
    }
    if (message.ag !== 0) {
      writer.uint32(40).int64(message.ag);
    }
    if (message.agLost !== 0) {
      writer.uint32(48).int64(message.agLost);
    }
    if (message.co !== 0) {
      writer.uint32(56).int64(message.co);
    }
    if (message.ci !== 0) {
      writer.uint32(64).int64(message.ci);
    }
    if (message.coRate !== 0) {
      writer.uint32(72).int64(message.coRate);
    }
    if (message.luckyPercent !== 0) {
      writer.uint32(80).int64(message.luckyPercent);
    }
    if (message.userSid !== 0) {
      writer.uint32(88).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLost();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.gold = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ag = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.agLost = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.co = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ci = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.coRate = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.luckyPercent = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lost {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      gold: isSet(object.gold) ? globalThis.Number(object.gold) : 0,
      ag: isSet(object.ag) ? globalThis.Number(object.ag) : 0,
      agLost: isSet(object.agLost) ? globalThis.Number(object.agLost) : 0,
      co: isSet(object.co) ? globalThis.Number(object.co) : 0,
      ci: isSet(object.ci) ? globalThis.Number(object.ci) : 0,
      coRate: isSet(object.coRate) ? globalThis.Number(object.coRate) : 0,
      luckyPercent: isSet(object.luckyPercent) ? globalThis.Number(object.luckyPercent) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: Lost): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.gold !== 0) {
      obj.gold = Math.round(message.gold);
    }
    if (message.ag !== 0) {
      obj.ag = Math.round(message.ag);
    }
    if (message.agLost !== 0) {
      obj.agLost = Math.round(message.agLost);
    }
    if (message.co !== 0) {
      obj.co = Math.round(message.co);
    }
    if (message.ci !== 0) {
      obj.ci = Math.round(message.ci);
    }
    if (message.coRate !== 0) {
      obj.coRate = Math.round(message.coRate);
    }
    if (message.luckyPercent !== 0) {
      obj.luckyPercent = Math.round(message.luckyPercent);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lost>, I>>(base?: I): Lost {
    return Lost.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lost>, I>>(object: I): Lost {
    const message = createBaseLost();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.vip = object.vip ?? 0;
    message.gold = object.gold ?? 0;
    message.ag = object.ag ?? 0;
    message.agLost = object.agLost ?? 0;
    message.co = object.co ?? 0;
    message.ci = object.ci ?? 0;
    message.coRate = object.coRate ?? 0;
    message.luckyPercent = object.luckyPercent ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBaseTopLost(): TopLost {
  return { losts: [], fromUnix: 0, toUnix: 0, limit: 0, offset: 0, refGame: "", total: 0, gameId: 0 };
}

export const TopLost = {
  encode(message: TopLost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.losts) {
      Lost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.refGame !== "") {
      writer.uint32(50).string(message.refGame);
    }
    if (message.total !== 0) {
      writer.uint32(56).int64(message.total);
    }
    if (message.gameId !== 0) {
      writer.uint32(64).int64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TopLost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopLost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.losts.push(Lost.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.refGame = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.gameId = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TopLost {
    return {
      losts: globalThis.Array.isArray(object?.losts) ? object.losts.map((e: any) => Lost.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      refGame: isSet(object.refGame) ? globalThis.String(object.refGame) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      gameId: isSet(object.gameId) ? globalThis.Number(object.gameId) : 0,
    };
  },

  toJSON(message: TopLost): unknown {
    const obj: any = {};
    if (message.losts?.length) {
      obj.losts = message.losts.map((e) => Lost.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.refGame !== "") {
      obj.refGame = message.refGame;
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.gameId !== 0) {
      obj.gameId = Math.round(message.gameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopLost>, I>>(base?: I): TopLost {
    return TopLost.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopLost>, I>>(object: I): TopLost {
    const message = createBaseTopLost();
    message.losts = object.losts?.map((e) => Lost.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.refGame = object.refGame ?? "";
    message.total = object.total ?? 0;
    message.gameId = object.gameId ?? 0;
    return message;
  },
};

function createBaseTransactionRequest(): TransactionRequest {
  return { userSid: 0, fromUnix: 0, toUnix: 0, limit: 0, offset: 0 };
}

export const TransactionRequest = {
  encode(message: TransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userSid !== 0) {
      writer.uint32(8).int64(message.userSid);
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionRequest {
    return {
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionRequest>, I>>(base?: I): TransactionRequest {
    return TransactionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionRequest>, I>>(object: I): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.userSid = object.userSid ?? 0;
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseTransactionDetail(): TransactionDetail {
  return { id: "", userId: "", userSid: 0, userName: "", vip: 0, rp: 0, typeTopup: "", chipsTopup: 0, createdUnix: 0 };
}

export const TransactionDetail = {
  encode(message: TransactionDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.userSid !== 0) {
      writer.uint32(24).int64(message.userSid);
    }
    if (message.userName !== "") {
      writer.uint32(34).string(message.userName);
    }
    if (message.vip !== 0) {
      writer.uint32(40).int64(message.vip);
    }
    if (message.rp !== 0) {
      writer.uint32(48).int64(message.rp);
    }
    if (message.typeTopup !== "") {
      writer.uint32(58).string(message.typeTopup);
    }
    if (message.chipsTopup !== 0) {
      writer.uint32(64).int64(message.chipsTopup);
    }
    if (message.createdUnix !== 0) {
      writer.uint32(72).int64(message.createdUnix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
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

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.rp = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.typeTopup = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.chipsTopup = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.createdUnix = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionDetail {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      rp: isSet(object.rp) ? globalThis.Number(object.rp) : 0,
      typeTopup: isSet(object.typeTopup) ? globalThis.String(object.typeTopup) : "",
      chipsTopup: isSet(object.chipsTopup) ? globalThis.Number(object.chipsTopup) : 0,
      createdUnix: isSet(object.createdUnix) ? globalThis.Number(object.createdUnix) : 0,
    };
  },

  toJSON(message: TransactionDetail): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.rp !== 0) {
      obj.rp = Math.round(message.rp);
    }
    if (message.typeTopup !== "") {
      obj.typeTopup = message.typeTopup;
    }
    if (message.chipsTopup !== 0) {
      obj.chipsTopup = Math.round(message.chipsTopup);
    }
    if (message.createdUnix !== 0) {
      obj.createdUnix = Math.round(message.createdUnix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionDetail>, I>>(base?: I): TransactionDetail {
    return TransactionDetail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionDetail>, I>>(object: I): TransactionDetail {
    const message = createBaseTransactionDetail();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.userSid = object.userSid ?? 0;
    message.userName = object.userName ?? "";
    message.vip = object.vip ?? 0;
    message.rp = object.rp ?? 0;
    message.typeTopup = object.typeTopup ?? "";
    message.chipsTopup = object.chipsTopup ?? 0;
    message.createdUnix = object.createdUnix ?? 0;
    return message;
  },
};

function createBaseTransactionResponse(): TransactionResponse {
  return { transDetails: [], totalRp: 0, limit: 0, offset: 0, total: 0 };
}

export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transDetails) {
      TransactionDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalRp !== 0) {
      writer.uint32(16).int64(message.totalRp);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int64(message.offset);
    }
    if (message.total !== 0) {
      writer.uint32(40).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transDetails.push(TransactionDetail.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalRp = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionResponse {
    return {
      transDetails: globalThis.Array.isArray(object?.transDetails)
        ? object.transDetails.map((e: any) => TransactionDetail.fromJSON(e))
        : [],
      totalRp: isSet(object.totalRp) ? globalThis.Number(object.totalRp) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    if (message.transDetails?.length) {
      obj.transDetails = message.transDetails.map((e) => TransactionDetail.toJSON(e));
    }
    if (message.totalRp !== 0) {
      obj.totalRp = Math.round(message.totalRp);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionResponse>, I>>(base?: I): TransactionResponse {
    return TransactionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionResponse>, I>>(object: I): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.transDetails = object.transDetails?.map((e) => TransactionDetail.fromPartial(e)) || [];
    message.totalRp = object.totalRp ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseIAPSummary(): IAPSummary {
  return {
    id: 0,
    userId: "",
    createAtUnix: 0,
    totalTopup: 0,
    vipPoint: 0,
    totalCashout: 0,
    vip: 0,
    currencyTopup: 0,
    currencyCashout: 0,
  };
}

export const IAPSummary = {
  encode(message: IAPSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.createAtUnix !== 0) {
      writer.uint32(24).int64(message.createAtUnix);
    }
    if (message.totalTopup !== 0) {
      writer.uint32(32).int64(message.totalTopup);
    }
    if (message.vipPoint !== 0) {
      writer.uint32(40).int64(message.vipPoint);
    }
    if (message.totalCashout !== 0) {
      writer.uint32(48).int64(message.totalCashout);
    }
    if (message.vip !== 0) {
      writer.uint32(56).int64(message.vip);
    }
    if (message.currencyTopup !== 0) {
      writer.uint32(64).int64(message.currencyTopup);
    }
    if (message.currencyCashout !== 0) {
      writer.uint32(72).int64(message.currencyCashout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IAPSummary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIAPSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
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

          message.createAtUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.totalTopup = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.vipPoint = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.totalCashout = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.currencyTopup = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.currencyCashout = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IAPSummary {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      createAtUnix: isSet(object.createAtUnix) ? globalThis.Number(object.createAtUnix) : 0,
      totalTopup: isSet(object.totalTopup) ? globalThis.Number(object.totalTopup) : 0,
      vipPoint: isSet(object.vipPoint) ? globalThis.Number(object.vipPoint) : 0,
      totalCashout: isSet(object.totalCashout) ? globalThis.Number(object.totalCashout) : 0,
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      currencyTopup: isSet(object.currencyTopup) ? globalThis.Number(object.currencyTopup) : 0,
      currencyCashout: isSet(object.currencyCashout) ? globalThis.Number(object.currencyCashout) : 0,
    };
  },

  toJSON(message: IAPSummary): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.createAtUnix !== 0) {
      obj.createAtUnix = Math.round(message.createAtUnix);
    }
    if (message.totalTopup !== 0) {
      obj.totalTopup = Math.round(message.totalTopup);
    }
    if (message.vipPoint !== 0) {
      obj.vipPoint = Math.round(message.vipPoint);
    }
    if (message.totalCashout !== 0) {
      obj.totalCashout = Math.round(message.totalCashout);
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.currencyTopup !== 0) {
      obj.currencyTopup = Math.round(message.currencyTopup);
    }
    if (message.currencyCashout !== 0) {
      obj.currencyCashout = Math.round(message.currencyCashout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IAPSummary>, I>>(base?: I): IAPSummary {
    return IAPSummary.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IAPSummary>, I>>(object: I): IAPSummary {
    const message = createBaseIAPSummary();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? "";
    message.createAtUnix = object.createAtUnix ?? 0;
    message.totalTopup = object.totalTopup ?? 0;
    message.vipPoint = object.vipPoint ?? 0;
    message.totalCashout = object.totalCashout ?? 0;
    message.vip = object.vip ?? 0;
    message.currencyTopup = object.currencyTopup ?? 0;
    message.currencyCashout = object.currencyCashout ?? 0;
    return message;
  },
};

function createBaseCashInfo(): CashInfo {
  return {
    id: 0,
    userId: "",
    createAtUnix: 0,
    chips: 0,
    vipPoint: 0,
    publisher: 0,
    currency: 0,
    currencyUnitId: 0,
    transId: "",
    dateUnix: 0,
    numTransaction: 0,
    currencyValue: 0,
    currencyUnitName: "",
    numTransByCurrencyValue: {},
    numAccountUnique: 0,
    netRev: 0,
  };
}

export const CashInfo = {
  encode(message: CashInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.createAtUnix !== 0) {
      writer.uint32(24).int64(message.createAtUnix);
    }
    if (message.chips !== 0) {
      writer.uint32(32).int64(message.chips);
    }
    if (message.vipPoint !== 0) {
      writer.uint32(40).int64(message.vipPoint);
    }
    if (message.publisher !== 0) {
      writer.uint32(48).int64(message.publisher);
    }
    if (message.currency !== 0) {
      writer.uint32(56).int64(message.currency);
    }
    if (message.currencyUnitId !== 0) {
      writer.uint32(64).int64(message.currencyUnitId);
    }
    if (message.transId !== "") {
      writer.uint32(74).string(message.transId);
    }
    if (message.dateUnix !== 0) {
      writer.uint32(80).int64(message.dateUnix);
    }
    if (message.numTransaction !== 0) {
      writer.uint32(88).int64(message.numTransaction);
    }
    if (message.currencyValue !== 0) {
      writer.uint32(96).int64(message.currencyValue);
    }
    if (message.currencyUnitName !== "") {
      writer.uint32(106).string(message.currencyUnitName);
    }
    Object.entries(message.numTransByCurrencyValue).forEach(([key, value]) => {
      CashInfo_NumTransByCurrencyValueEntry.encode({ key: key as any, value }, writer.uint32(114).fork()).ldelim();
    });
    if (message.numAccountUnique !== 0) {
      writer.uint32(120).int64(message.numAccountUnique);
    }
    if (message.netRev !== 0) {
      writer.uint32(128).int64(message.netRev);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
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

          message.createAtUnix = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.vipPoint = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.publisher = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.currency = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.currencyUnitId = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.transId = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.dateUnix = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.numTransaction = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.currencyValue = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.currencyUnitName = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          const entry14 = CashInfo_NumTransByCurrencyValueEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.numTransByCurrencyValue[entry14.key] = entry14.value;
          }
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.numAccountUnique = longToNumber(reader.int64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.netRev = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      createAtUnix: isSet(object.createAtUnix) ? globalThis.Number(object.createAtUnix) : 0,
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      vipPoint: isSet(object.vipPoint) ? globalThis.Number(object.vipPoint) : 0,
      publisher: isSet(object.publisher) ? globalThis.Number(object.publisher) : 0,
      currency: isSet(object.currency) ? globalThis.Number(object.currency) : 0,
      currencyUnitId: isSet(object.currencyUnitId) ? globalThis.Number(object.currencyUnitId) : 0,
      transId: isSet(object.transId) ? globalThis.String(object.transId) : "",
      dateUnix: isSet(object.dateUnix) ? globalThis.Number(object.dateUnix) : 0,
      numTransaction: isSet(object.numTransaction) ? globalThis.Number(object.numTransaction) : 0,
      currencyValue: isSet(object.currencyValue) ? globalThis.Number(object.currencyValue) : 0,
      currencyUnitName: isSet(object.currencyUnitName) ? globalThis.String(object.currencyUnitName) : "",
      numTransByCurrencyValue: isObject(object.numTransByCurrencyValue)
        ? Object.entries(object.numTransByCurrencyValue).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      numAccountUnique: isSet(object.numAccountUnique) ? globalThis.Number(object.numAccountUnique) : 0,
      netRev: isSet(object.netRev) ? globalThis.Number(object.netRev) : 0,
    };
  },

  toJSON(message: CashInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.createAtUnix !== 0) {
      obj.createAtUnix = Math.round(message.createAtUnix);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.vipPoint !== 0) {
      obj.vipPoint = Math.round(message.vipPoint);
    }
    if (message.publisher !== 0) {
      obj.publisher = Math.round(message.publisher);
    }
    if (message.currency !== 0) {
      obj.currency = Math.round(message.currency);
    }
    if (message.currencyUnitId !== 0) {
      obj.currencyUnitId = Math.round(message.currencyUnitId);
    }
    if (message.transId !== "") {
      obj.transId = message.transId;
    }
    if (message.dateUnix !== 0) {
      obj.dateUnix = Math.round(message.dateUnix);
    }
    if (message.numTransaction !== 0) {
      obj.numTransaction = Math.round(message.numTransaction);
    }
    if (message.currencyValue !== 0) {
      obj.currencyValue = Math.round(message.currencyValue);
    }
    if (message.currencyUnitName !== "") {
      obj.currencyUnitName = message.currencyUnitName;
    }
    if (message.numTransByCurrencyValue) {
      const entries = Object.entries(message.numTransByCurrencyValue);
      if (entries.length > 0) {
        obj.numTransByCurrencyValue = {};
        entries.forEach(([k, v]) => {
          obj.numTransByCurrencyValue[k] = Math.round(v);
        });
      }
    }
    if (message.numAccountUnique !== 0) {
      obj.numAccountUnique = Math.round(message.numAccountUnique);
    }
    if (message.netRev !== 0) {
      obj.netRev = Math.round(message.netRev);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashInfo>, I>>(base?: I): CashInfo {
    return CashInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashInfo>, I>>(object: I): CashInfo {
    const message = createBaseCashInfo();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? "";
    message.createAtUnix = object.createAtUnix ?? 0;
    message.chips = object.chips ?? 0;
    message.vipPoint = object.vipPoint ?? 0;
    message.publisher = object.publisher ?? 0;
    message.currency = object.currency ?? 0;
    message.currencyUnitId = object.currencyUnitId ?? 0;
    message.transId = object.transId ?? "";
    message.dateUnix = object.dateUnix ?? 0;
    message.numTransaction = object.numTransaction ?? 0;
    message.currencyValue = object.currencyValue ?? 0;
    message.currencyUnitName = object.currencyUnitName ?? "";
    message.numTransByCurrencyValue = Object.entries(object.numTransByCurrencyValue ?? {}).reduce<
      { [key: number]: number }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.numAccountUnique = object.numAccountUnique ?? 0;
    message.netRev = object.netRev ?? 0;
    return message;
  },
};

function createBaseCashInfo_NumTransByCurrencyValueEntry(): CashInfo_NumTransByCurrencyValueEntry {
  return { key: 0, value: 0 };
}

export const CashInfo_NumTransByCurrencyValueEntry = {
  encode(message: CashInfo_NumTransByCurrencyValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashInfo_NumTransByCurrencyValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashInfo_NumTransByCurrencyValueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashInfo_NumTransByCurrencyValueEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: CashInfo_NumTransByCurrencyValueEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashInfo_NumTransByCurrencyValueEntry>, I>>(
    base?: I,
  ): CashInfo_NumTransByCurrencyValueEntry {
    return CashInfo_NumTransByCurrencyValueEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashInfo_NumTransByCurrencyValueEntry>, I>>(
    object: I,
  ): CashInfo_NumTransByCurrencyValueEntry {
    const message = createBaseCashInfo_NumTransByCurrencyValueEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCashInfoRequest(): CashInfoRequest {
  return { fromUnix: 0, toUnix: 0, limit: 0, offset: 0, publisher: 0, currencyId: 0 };
}

export const CashInfoRequest = {
  encode(message: CashInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromUnix !== 0) {
      writer.uint32(8).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(16).int64(message.toUnix);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int64(message.offset);
    }
    if (message.publisher !== 0) {
      writer.uint32(40).int64(message.publisher);
    }
    if (message.currencyId !== 0) {
      writer.uint32(48).int32(message.currencyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.offset = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.publisher = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.currencyId = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashInfoRequest {
    return {
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      publisher: isSet(object.publisher) ? globalThis.Number(object.publisher) : 0,
      currencyId: isSet(object.currencyId) ? currencyUnitIdFromJSON(object.currencyId) : 0,
    };
  },

  toJSON(message: CashInfoRequest): unknown {
    const obj: any = {};
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.publisher !== 0) {
      obj.publisher = Math.round(message.publisher);
    }
    if (message.currencyId !== 0) {
      obj.currencyId = currencyUnitIdToJSON(message.currencyId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashInfoRequest>, I>>(base?: I): CashInfoRequest {
    return CashInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashInfoRequest>, I>>(object: I): CashInfoRequest {
    const message = createBaseCashInfoRequest();
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.publisher = object.publisher ?? 0;
    message.currencyId = object.currencyId ?? 0;
    return message;
  },
};

function createBaseCashInfoResponse(): CashInfoResponse {
  return { cashoutInfos: [], totalCash: 0, totalAccount: 0, avgCash: 0, totalRev: 0, avgRev: 0 };
}

export const CashInfoResponse = {
  encode(message: CashInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cashoutInfos) {
      CashInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCash !== 0) {
      writer.uint32(16).int64(message.totalCash);
    }
    if (message.totalAccount !== 0) {
      writer.uint32(24).int64(message.totalAccount);
    }
    if (message.avgCash !== 0) {
      writer.uint32(32).int64(message.avgCash);
    }
    if (message.totalRev !== 0) {
      writer.uint32(40).int64(message.totalRev);
    }
    if (message.avgRev !== 0) {
      writer.uint32(48).int64(message.avgRev);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cashoutInfos.push(CashInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCash = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalAccount = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.avgCash = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalRev = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.avgRev = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashInfoResponse {
    return {
      cashoutInfos: globalThis.Array.isArray(object?.cashoutInfos)
        ? object.cashoutInfos.map((e: any) => CashInfo.fromJSON(e))
        : [],
      totalCash: isSet(object.totalCash) ? globalThis.Number(object.totalCash) : 0,
      totalAccount: isSet(object.totalAccount) ? globalThis.Number(object.totalAccount) : 0,
      avgCash: isSet(object.avgCash) ? globalThis.Number(object.avgCash) : 0,
      totalRev: isSet(object.totalRev) ? globalThis.Number(object.totalRev) : 0,
      avgRev: isSet(object.avgRev) ? globalThis.Number(object.avgRev) : 0,
    };
  },

  toJSON(message: CashInfoResponse): unknown {
    const obj: any = {};
    if (message.cashoutInfos?.length) {
      obj.cashoutInfos = message.cashoutInfos.map((e) => CashInfo.toJSON(e));
    }
    if (message.totalCash !== 0) {
      obj.totalCash = Math.round(message.totalCash);
    }
    if (message.totalAccount !== 0) {
      obj.totalAccount = Math.round(message.totalAccount);
    }
    if (message.avgCash !== 0) {
      obj.avgCash = Math.round(message.avgCash);
    }
    if (message.totalRev !== 0) {
      obj.totalRev = Math.round(message.totalRev);
    }
    if (message.avgRev !== 0) {
      obj.avgRev = Math.round(message.avgRev);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashInfoResponse>, I>>(base?: I): CashInfoResponse {
    return CashInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashInfoResponse>, I>>(object: I): CashInfoResponse {
    const message = createBaseCashInfoResponse();
    message.cashoutInfos = object.cashoutInfos?.map((e) => CashInfo.fromPartial(e)) || [];
    message.totalCash = object.totalCash ?? 0;
    message.totalAccount = object.totalAccount ?? 0;
    message.avgCash = object.avgCash ?? 0;
    message.totalRev = object.totalRev ?? 0;
    message.avgRev = object.avgRev ?? 0;
    return message;
  },
};

function createBaseUserGameCount(): UserGameCount {
  return { dateUnix: 0, countGame: 0 };
}

export const UserGameCount = {
  encode(message: UserGameCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dateUnix !== 0) {
      writer.uint32(8).int64(message.dateUnix);
    }
    if (message.countGame !== 0) {
      writer.uint32(16).int64(message.countGame);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGameCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGameCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dateUnix = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.countGame = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserGameCount {
    return {
      dateUnix: isSet(object.dateUnix) ? globalThis.Number(object.dateUnix) : 0,
      countGame: isSet(object.countGame) ? globalThis.Number(object.countGame) : 0,
    };
  },

  toJSON(message: UserGameCount): unknown {
    const obj: any = {};
    if (message.dateUnix !== 0) {
      obj.dateUnix = Math.round(message.dateUnix);
    }
    if (message.countGame !== 0) {
      obj.countGame = Math.round(message.countGame);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserGameCount>, I>>(base?: I): UserGameCount {
    return UserGameCount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserGameCount>, I>>(object: I): UserGameCount {
    const message = createBaseUserGameCount();
    message.dateUnix = object.dateUnix ?? 0;
    message.countGame = object.countGame ?? 0;
    return message;
  },
};

function createBaseUserGameStats(): UserGameStats {
  return { userId: "", gameNo: 0, userGameCounts: [] };
}

export const UserGameStats = {
  encode(message: UserGameStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.gameNo !== 0) {
      writer.uint32(16).int64(message.gameNo);
    }
    for (const v of message.userGameCounts) {
      UserGameCount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGameStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGameStats();
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

          message.gameNo = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userGameCounts.push(UserGameCount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserGameStats {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      gameNo: isSet(object.gameNo) ? globalThis.Number(object.gameNo) : 0,
      userGameCounts: globalThis.Array.isArray(object?.userGameCounts)
        ? object.userGameCounts.map((e: any) => UserGameCount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserGameStats): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.gameNo !== 0) {
      obj.gameNo = Math.round(message.gameNo);
    }
    if (message.userGameCounts?.length) {
      obj.userGameCounts = message.userGameCounts.map((e) => UserGameCount.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserGameStats>, I>>(base?: I): UserGameStats {
    return UserGameStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserGameStats>, I>>(object: I): UserGameStats {
    const message = createBaseUserGameStats();
    message.userId = object.userId ?? "";
    message.gameNo = object.gameNo ?? 0;
    message.userGameCounts = object.userGameCounts?.map((e) => UserGameCount.fromPartial(e)) || [];
    return message;
  },
};

function createBasePaymentByVip(): PaymentByVip {
  return { vip: 0, ci: 0, chips: 0, numTrans: 0, numAccount: 0 };
}

export const PaymentByVip = {
  encode(message: PaymentByVip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vip !== 0) {
      writer.uint32(8).int64(message.vip);
    }
    if (message.ci !== 0) {
      writer.uint32(16).int64(message.ci);
    }
    if (message.chips !== 0) {
      writer.uint32(24).int64(message.chips);
    }
    if (message.numTrans !== 0) {
      writer.uint32(32).int64(message.numTrans);
    }
    if (message.numAccount !== 0) {
      writer.uint32(40).int64(message.numAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentByVip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentByVip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ci = longToNumber(reader.int64() as Long);
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

          message.numTrans = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.numAccount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentByVip {
    return {
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      ci: isSet(object.ci) ? globalThis.Number(object.ci) : 0,
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      numTrans: isSet(object.numTrans) ? globalThis.Number(object.numTrans) : 0,
      numAccount: isSet(object.numAccount) ? globalThis.Number(object.numAccount) : 0,
    };
  },

  toJSON(message: PaymentByVip): unknown {
    const obj: any = {};
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.ci !== 0) {
      obj.ci = Math.round(message.ci);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.numTrans !== 0) {
      obj.numTrans = Math.round(message.numTrans);
    }
    if (message.numAccount !== 0) {
      obj.numAccount = Math.round(message.numAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentByVip>, I>>(base?: I): PaymentByVip {
    return PaymentByVip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaymentByVip>, I>>(object: I): PaymentByVip {
    const message = createBasePaymentByVip();
    message.vip = object.vip ?? 0;
    message.ci = object.ci ?? 0;
    message.chips = object.chips ?? 0;
    message.numTrans = object.numTrans ?? 0;
    message.numAccount = object.numAccount ?? 0;
    return message;
  },
};

function createBasePaymentsByVip(): PaymentsByVip {
  return { payments: [], fromUnix: 0, toUnix: 0 };
}

export const PaymentsByVip = {
  encode(message: PaymentsByVip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payments) {
      PaymentByVip.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentsByVip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentsByVip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payments.push(PaymentByVip.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentsByVip {
    return {
      payments: globalThis.Array.isArray(object?.payments)
        ? object.payments.map((e: any) => PaymentByVip.fromJSON(e))
        : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
    };
  },

  toJSON(message: PaymentsByVip): unknown {
    const obj: any = {};
    if (message.payments?.length) {
      obj.payments = message.payments.map((e) => PaymentByVip.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentsByVip>, I>>(base?: I): PaymentsByVip {
    return PaymentsByVip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaymentsByVip>, I>>(object: I): PaymentsByVip {
    const message = createBasePaymentsByVip();
    message.payments = object.payments?.map((e) => PaymentByVip.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    return message;
  },
};

function createBaseCashoutByVip(): CashoutByVip {
  return { vip: 0, co: 0, chips: 0, numTrans: 0, numAccount: 0 };
}

export const CashoutByVip = {
  encode(message: CashoutByVip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vip !== 0) {
      writer.uint32(8).int64(message.vip);
    }
    if (message.co !== 0) {
      writer.uint32(16).int64(message.co);
    }
    if (message.chips !== 0) {
      writer.uint32(24).int64(message.chips);
    }
    if (message.numTrans !== 0) {
      writer.uint32(32).int64(message.numTrans);
    }
    if (message.numAccount !== 0) {
      writer.uint32(40).int64(message.numAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashoutByVip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashoutByVip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.co = longToNumber(reader.int64() as Long);
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

          message.numTrans = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.numAccount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashoutByVip {
    return {
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      co: isSet(object.co) ? globalThis.Number(object.co) : 0,
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      numTrans: isSet(object.numTrans) ? globalThis.Number(object.numTrans) : 0,
      numAccount: isSet(object.numAccount) ? globalThis.Number(object.numAccount) : 0,
    };
  },

  toJSON(message: CashoutByVip): unknown {
    const obj: any = {};
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.co !== 0) {
      obj.co = Math.round(message.co);
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.numTrans !== 0) {
      obj.numTrans = Math.round(message.numTrans);
    }
    if (message.numAccount !== 0) {
      obj.numAccount = Math.round(message.numAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashoutByVip>, I>>(base?: I): CashoutByVip {
    return CashoutByVip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashoutByVip>, I>>(object: I): CashoutByVip {
    const message = createBaseCashoutByVip();
    message.vip = object.vip ?? 0;
    message.co = object.co ?? 0;
    message.chips = object.chips ?? 0;
    message.numTrans = object.numTrans ?? 0;
    message.numAccount = object.numAccount ?? 0;
    return message;
  },
};

function createBaseCashoutsByVip(): CashoutsByVip {
  return { cashouts: [], fromUnix: 0, toUnix: 0 };
}

export const CashoutsByVip = {
  encode(message: CashoutsByVip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cashouts) {
      CashoutByVip.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(16).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(24).int64(message.toUnix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CashoutsByVip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCashoutsByVip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cashouts.push(CashoutByVip.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CashoutsByVip {
    return {
      cashouts: globalThis.Array.isArray(object?.cashouts)
        ? object.cashouts.map((e: any) => CashoutByVip.fromJSON(e))
        : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
    };
  },

  toJSON(message: CashoutsByVip): unknown {
    const obj: any = {};
    if (message.cashouts?.length) {
      obj.cashouts = message.cashouts.map((e) => CashoutByVip.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CashoutsByVip>, I>>(base?: I): CashoutsByVip {
    return CashoutsByVip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CashoutsByVip>, I>>(object: I): CashoutsByVip {
    const message = createBaseCashoutsByVip();
    message.cashouts = object.cashouts?.map((e) => CashoutByVip.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    return message;
  },
};

function createBaseVipStats(): VipStats {
  return {
    timeUpdateUnix: 0,
    userId: "",
    userName: "",
    noWin: 0,
    noLose: 0,
    chipsWin: 0,
    chipsLose: 0,
    cashIn: 0,
    cashIn5: 0,
    cashIn10: 0,
    cashOut: 0,
    cashOut5: 0,
    cashOut10: 0,
    vip: 0,
  };
}

export const VipStats = {
  encode(message: VipStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeUpdateUnix !== 0) {
      writer.uint32(8).int64(message.timeUpdateUnix);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(26).string(message.userName);
    }
    if (message.noWin !== 0) {
      writer.uint32(32).int64(message.noWin);
    }
    if (message.noLose !== 0) {
      writer.uint32(40).int64(message.noLose);
    }
    if (message.chipsWin !== 0) {
      writer.uint32(48).int64(message.chipsWin);
    }
    if (message.chipsLose !== 0) {
      writer.uint32(56).int64(message.chipsLose);
    }
    if (message.cashIn !== 0) {
      writer.uint32(64).int64(message.cashIn);
    }
    if (message.cashIn5 !== 0) {
      writer.uint32(72).int64(message.cashIn5);
    }
    if (message.cashIn10 !== 0) {
      writer.uint32(80).int64(message.cashIn10);
    }
    if (message.cashOut !== 0) {
      writer.uint32(88).int64(message.cashOut);
    }
    if (message.cashOut5 !== 0) {
      writer.uint32(96).int64(message.cashOut5);
    }
    if (message.cashOut10 !== 0) {
      writer.uint32(104).int64(message.cashOut10);
    }
    if (message.vip !== 0) {
      writer.uint32(112).int64(message.vip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VipStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVipStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timeUpdateUnix = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.noWin = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.noLose = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chipsWin = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.chipsLose = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.cashIn = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.cashIn5 = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.cashIn10 = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.cashOut = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.cashOut5 = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.cashOut10 = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VipStats {
    return {
      timeUpdateUnix: isSet(object.timeUpdateUnix) ? globalThis.Number(object.timeUpdateUnix) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      noWin: isSet(object.noWin) ? globalThis.Number(object.noWin) : 0,
      noLose: isSet(object.noLose) ? globalThis.Number(object.noLose) : 0,
      chipsWin: isSet(object.chipsWin) ? globalThis.Number(object.chipsWin) : 0,
      chipsLose: isSet(object.chipsLose) ? globalThis.Number(object.chipsLose) : 0,
      cashIn: isSet(object.cashIn) ? globalThis.Number(object.cashIn) : 0,
      cashIn5: isSet(object.cashIn5) ? globalThis.Number(object.cashIn5) : 0,
      cashIn10: isSet(object.cashIn10) ? globalThis.Number(object.cashIn10) : 0,
      cashOut: isSet(object.cashOut) ? globalThis.Number(object.cashOut) : 0,
      cashOut5: isSet(object.cashOut5) ? globalThis.Number(object.cashOut5) : 0,
      cashOut10: isSet(object.cashOut10) ? globalThis.Number(object.cashOut10) : 0,
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
    };
  },

  toJSON(message: VipStats): unknown {
    const obj: any = {};
    if (message.timeUpdateUnix !== 0) {
      obj.timeUpdateUnix = Math.round(message.timeUpdateUnix);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.noWin !== 0) {
      obj.noWin = Math.round(message.noWin);
    }
    if (message.noLose !== 0) {
      obj.noLose = Math.round(message.noLose);
    }
    if (message.chipsWin !== 0) {
      obj.chipsWin = Math.round(message.chipsWin);
    }
    if (message.chipsLose !== 0) {
      obj.chipsLose = Math.round(message.chipsLose);
    }
    if (message.cashIn !== 0) {
      obj.cashIn = Math.round(message.cashIn);
    }
    if (message.cashIn5 !== 0) {
      obj.cashIn5 = Math.round(message.cashIn5);
    }
    if (message.cashIn10 !== 0) {
      obj.cashIn10 = Math.round(message.cashIn10);
    }
    if (message.cashOut !== 0) {
      obj.cashOut = Math.round(message.cashOut);
    }
    if (message.cashOut5 !== 0) {
      obj.cashOut5 = Math.round(message.cashOut5);
    }
    if (message.cashOut10 !== 0) {
      obj.cashOut10 = Math.round(message.cashOut10);
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VipStats>, I>>(base?: I): VipStats {
    return VipStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VipStats>, I>>(object: I): VipStats {
    const message = createBaseVipStats();
    message.timeUpdateUnix = object.timeUpdateUnix ?? 0;
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.noWin = object.noWin ?? 0;
    message.noLose = object.noLose ?? 0;
    message.chipsWin = object.chipsWin ?? 0;
    message.chipsLose = object.chipsLose ?? 0;
    message.cashIn = object.cashIn ?? 0;
    message.cashIn5 = object.cashIn5 ?? 0;
    message.cashIn10 = object.cashIn10 ?? 0;
    message.cashOut = object.cashOut ?? 0;
    message.cashOut5 = object.cashOut5 ?? 0;
    message.cashOut10 = object.cashOut10 ?? 0;
    message.vip = object.vip ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
