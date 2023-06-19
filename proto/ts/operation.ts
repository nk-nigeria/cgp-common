/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Profile } from "./auth_api";

export const protobufPackage = "api";

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
}

export interface OpPlayerRequest {
  userId: string;
  gameId: number;
  fromUnix: number;
  toUnix: number;
  action: number;
  offset: number;
  limit: number;
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
  tableId: string;
  dateUnix: number;
  createdAtUnix: number;
}

export interface MatchDetailRequest {
  gameId: number;
  fromUnix: number;
  toUnix: number;
  userId: string;
  userPairId: string;
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
}

export interface MatchData {
  gameId: number;
  gameCode: string;
  mcb: number;
  chipFee: number;
  matchId: string;
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

export interface CashOut {
  userId: string;
  userName: string;
  ci: number;
  cio: number;
  co: number;
  coo: number;
  luckyPercent: number;
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
}

export interface TopWin {
  wins: Win[];
  fromUnix: number;
  toUnix: number;
  limit: number;
  offset: number;
  refGame: string;
  total: number;
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      userName: isSet(object.userName) ? String(object.userName) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      noBet: isSet(object.noBet) ? Number(object.noBet) : 0,
      noWin: isSet(object.noWin) ? Number(object.noWin) : 0,
      noLost: isSet(object.noLost) ? Number(object.noLost) : 0,
      chipWin: isSet(object.chipWin) ? Number(object.chipWin) : 0,
      chipLost: isSet(object.chipLost) ? Number(object.chipLost) : 0,
      chipBalance: isSet(object.chipBalance) ? Number(object.chipBalance) : 0,
      action: isSet(object.action) ? Number(object.action) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      dateUnix: isSet(object.dateUnix) ? Number(object.dateUnix) : 0,
      mcb: isSet(object.mcb) ? Number(object.mcb) : 0,
    };
  },

  toJSON(message: OpPlayer): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.noBet !== undefined && (obj.noBet = Math.round(message.noBet));
    message.noWin !== undefined && (obj.noWin = Math.round(message.noWin));
    message.noLost !== undefined && (obj.noLost = Math.round(message.noLost));
    message.chipWin !== undefined && (obj.chipWin = Math.round(message.chipWin));
    message.chipLost !== undefined && (obj.chipLost = Math.round(message.chipLost));
    message.chipBalance !== undefined && (obj.chipBalance = Math.round(message.chipBalance));
    message.action !== undefined && (obj.action = Math.round(message.action));
    message.status !== undefined && (obj.status = message.status);
    message.dateUnix !== undefined && (obj.dateUnix = Math.round(message.dateUnix));
    message.mcb !== undefined && (obj.mcb = Math.round(message.mcb));
    return obj;
  },

  create<I extends Exact<DeepPartial<OpPlayer>, I>>(base?: I): OpPlayer {
    return OpPlayer.fromPartial(base ?? {});
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
    return message;
  },
};

function createBaseOpPlayerRequest(): OpPlayerRequest {
  return { userId: "", gameId: 0, fromUnix: 0, toUnix: 0, action: 0, offset: 0, limit: 0 };
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
      action: isSet(object.action) ? Number(object.action) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: OpPlayerRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    message.action !== undefined && (obj.action = Math.round(message.action));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<OpPlayerRequest>, I>>(base?: I): OpPlayerRequest {
    return OpPlayerRequest.fromPartial(base ?? {});
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
      opPlayers: Array.isArray(object?.opPlayers) ? object.opPlayers.map((e: any) => OpPlayer.fromJSON(e)) : [],
      total: isSet(object.total) ? Number(object.total) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      totalChipWin: isSet(object.totalChipWin) ? Number(object.totalChipWin) : 0,
      totalChipLost: isSet(object.totalChipLost) ? Number(object.totalChipLost) : 0,
    };
  },

  toJSON(message: OpPlayerResponse): unknown {
    const obj: any = {};
    if (message.opPlayers) {
      obj.opPlayers = message.opPlayers.map((e) => e ? OpPlayer.toJSON(e) : undefined);
    } else {
      obj.opPlayers = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.totalChipWin !== undefined && (obj.totalChipWin = Math.round(message.totalChipWin));
    message.totalChipLost !== undefined && (obj.totalChipLost = Math.round(message.totalChipLost));
    return obj;
  },

  create<I extends Exact<DeepPartial<OpPlayerResponse>, I>>(base?: I): OpPlayerResponse {
    return OpPlayerResponse.fromPartial(base ?? {});
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
    tableId: "",
    dateUnix: 0,
    createdAtUnix: 0,
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
    if (message.tableId !== "") {
      writer.uint32(58).string(message.tableId);
    }
    if (message.dateUnix !== 0) {
      writer.uint32(64).int64(message.dateUnix);
    }
    if (message.createdAtUnix !== 0) {
      writer.uint32(72).int64(message.createdAtUnix);
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
          if (tag !== 58) {
            break;
          }

          message.tableId = reader.string();
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
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      mcb: isSet(object.mcb) ? Number(object.mcb) : 0,
      numMatchPlayed: isSet(object.numMatchPlayed) ? Number(object.numMatchPlayed) : 0,
      chipFee: isSet(object.chipFee) ? Number(object.chipFee) : 0,
      detail: isSet(object.detail) ? String(object.detail) : "",
      tableId: isSet(object.tableId) ? String(object.tableId) : "",
      dateUnix: isSet(object.dateUnix) ? Number(object.dateUnix) : 0,
      createdAtUnix: isSet(object.createdAtUnix) ? Number(object.createdAtUnix) : 0,
    };
  },

  toJSON(message: MatchDetail): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.mcb !== undefined && (obj.mcb = Math.round(message.mcb));
    message.numMatchPlayed !== undefined && (obj.numMatchPlayed = Math.round(message.numMatchPlayed));
    message.chipFee !== undefined && (obj.chipFee = Math.round(message.chipFee));
    message.detail !== undefined && (obj.detail = message.detail);
    message.tableId !== undefined && (obj.tableId = message.tableId);
    message.dateUnix !== undefined && (obj.dateUnix = Math.round(message.dateUnix));
    message.createdAtUnix !== undefined && (obj.createdAtUnix = Math.round(message.createdAtUnix));
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchDetail>, I>>(base?: I): MatchDetail {
    return MatchDetail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MatchDetail>, I>>(object: I): MatchDetail {
    const message = createBaseMatchDetail();
    message.gameId = object.gameId ?? 0;
    message.gameName = object.gameName ?? "";
    message.mcb = object.mcb ?? 0;
    message.numMatchPlayed = object.numMatchPlayed ?? 0;
    message.chipFee = object.chipFee ?? 0;
    message.detail = object.detail ?? "";
    message.tableId = object.tableId ?? "";
    message.dateUnix = object.dateUnix ?? 0;
    message.createdAtUnix = object.createdAtUnix ?? 0;
    return message;
  },
};

function createBaseMatchDetailRequest(): MatchDetailRequest {
  return { gameId: 0, fromUnix: 0, toUnix: 0, userId: "", userPairId: "", limit: 0, offset: 0 };
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
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.userPairId !== "") {
      writer.uint32(42).string(message.userPairId);
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
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userPairId = reader.string();
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
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
      userId: isSet(object.userId) ? String(object.userId) : "",
      userPairId: isSet(object.userPairId) ? String(object.userPairId) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: MatchDetailRequest): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    message.userId !== undefined && (obj.userId = message.userId);
    message.userPairId !== undefined && (obj.userPairId = message.userPairId);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchDetailRequest>, I>>(base?: I): MatchDetailRequest {
    return MatchDetailRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MatchDetailRequest>, I>>(object: I): MatchDetailRequest {
    const message = createBaseMatchDetailRequest();
    message.gameId = object.gameId ?? 0;
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.userId = object.userId ?? "";
    message.userPairId = object.userPairId ?? "";
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
      matchDetails: Array.isArray(object?.matchDetails)
        ? object.matchDetails.map((e: any) => MatchDetail.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: MatchDetailResponse): unknown {
    const obj: any = {};
    if (message.matchDetails) {
      obj.matchDetails = message.matchDetails.map((e) => e ? MatchDetail.toJSON(e) : undefined);
    } else {
      obj.matchDetails = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchDetailResponse>, I>>(base?: I): MatchDetailResponse {
    return MatchDetailResponse.fromPartial(base ?? {});
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
  return { userId: "", chip: 0, chipAdd: 0 };
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      chip: isSet(object.chip) ? Number(object.chip) : 0,
      chipAdd: isSet(object.chipAdd) ? Number(object.chipAdd) : 0,
    };
  },

  toJSON(message: PlayerData): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.chip !== undefined && (obj.chip = Math.round(message.chip));
    message.chipAdd !== undefined && (obj.chipAdd = Math.round(message.chipAdd));
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerData>, I>>(base?: I): PlayerData {
    return PlayerData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlayerData>, I>>(object: I): PlayerData {
    const message = createBasePlayerData();
    message.userId = object.userId ?? "";
    message.chip = object.chip ?? 0;
    message.chipAdd = object.chipAdd ?? 0;
    return message;
  },
};

function createBaseMatchData(): MatchData {
  return { gameId: 0, gameCode: "", mcb: 0, chipFee: 0, matchId: "" };
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
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      gameCode: isSet(object.gameCode) ? String(object.gameCode) : "",
      mcb: isSet(object.mcb) ? Number(object.mcb) : 0,
      chipFee: isSet(object.chipFee) ? Number(object.chipFee) : 0,
      matchId: isSet(object.matchId) ? String(object.matchId) : "",
    };
  },

  toJSON(message: MatchData): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.gameCode !== undefined && (obj.gameCode = message.gameCode);
    message.mcb !== undefined && (obj.mcb = Math.round(message.mcb));
    message.chipFee !== undefined && (obj.chipFee = Math.round(message.chipFee));
    message.matchId !== undefined && (obj.matchId = message.matchId);
    return obj;
  },

  create<I extends Exact<DeepPartial<MatchData>, I>>(base?: I): MatchData {
    return MatchData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MatchData>, I>>(object: I): MatchData {
    const message = createBaseMatchData();
    message.gameId = object.gameId ?? 0;
    message.gameCode = object.gameCode ?? "";
    message.mcb = object.mcb ?? 0;
    message.chipFee = object.chipFee ?? 0;
    message.matchId = object.matchId ?? "";
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
      playerData: Array.isArray(object?.playerData) ? object.playerData.map((e: any) => PlayerData.fromJSON(e)) : [],
      matchData: isSet(object.matchData) ? MatchData.fromJSON(object.matchData) : undefined,
    };
  },

  toJSON(message: OpReport): unknown {
    const obj: any = {};
    if (message.playerData) {
      obj.playerData = message.playerData.map((e) => e ? PlayerData.toJSON(e) : undefined);
    } else {
      obj.playerData = [];
    }
    message.matchData !== undefined &&
      (obj.matchData = message.matchData ? MatchData.toJSON(message.matchData) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<OpReport>, I>>(base?: I): OpReport {
    return OpReport.fromPartial(base ?? {});
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
      timeUpdateUnix: isSet(object.timeUpdateUnix) ? Number(object.timeUpdateUnix) : 0,
      pay: isSet(object.pay) ? Number(object.pay) : 0,
      promotion: isSet(object.promotion) ? Number(object.promotion) : 0,
      matchData: Array.isArray(object?.matchData) ? object.matchData.map((e: any) => MatchData.fromJSON(e)) : [],
      agCashout: isSet(object.agCashout) ? Number(object.agCashout) : 0,
      agBank: isSet(object.agBank) ? Number(object.agBank) : 0,
      chips: isSet(object.chips) ? Number(object.chips) : 0,
    };
  },

  toJSON(message: GoldStatistic): unknown {
    const obj: any = {};
    message.timeUpdateUnix !== undefined && (obj.timeUpdateUnix = Math.round(message.timeUpdateUnix));
    message.pay !== undefined && (obj.pay = Math.round(message.pay));
    message.promotion !== undefined && (obj.promotion = Math.round(message.promotion));
    if (message.matchData) {
      obj.matchData = message.matchData.map((e) => e ? MatchData.toJSON(e) : undefined);
    } else {
      obj.matchData = [];
    }
    message.agCashout !== undefined && (obj.agCashout = Math.round(message.agCashout));
    message.agBank !== undefined && (obj.agBank = Math.round(message.agBank));
    message.chips !== undefined && (obj.chips = Math.round(message.chips));
    return obj;
  },

  create<I extends Exact<DeepPartial<GoldStatistic>, I>>(base?: I): GoldStatistic {
    return GoldStatistic.fromPartial(base ?? {});
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
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: GoldStatisticRequest): unknown {
    const obj: any = {};
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create<I extends Exact<DeepPartial<GoldStatisticRequest>, I>>(base?: I): GoldStatisticRequest {
    return GoldStatisticRequest.fromPartial(base ?? {});
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
      goldStatistics: Array.isArray(object?.goldStatistics)
        ? object.goldStatistics.map((e: any) => GoldStatistic.fromJSON(e))
        : [],
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GoldStatisticResponse): unknown {
    const obj: any = {};
    if (message.goldStatistics) {
      obj.goldStatistics = message.goldStatistics.map((e) => e ? GoldStatistic.toJSON(e) : undefined);
    } else {
      obj.goldStatistics = [];
    }
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<GoldStatisticResponse>, I>>(base?: I): GoldStatisticResponse {
    return GoldStatisticResponse.fromPartial(base ?? {});
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
      totalChipDeposit: isSet(object.totalChipDeposit) ? Number(object.totalChipDeposit) : 0,
      totalChipWithDraw: isSet(object.totalChipWithDraw) ? Number(object.totalChipWithDraw) : 0,
      totalChipWin: isSet(object.totalChipWin) ? Number(object.totalChipWin) : 0,
      totalChipLose: isSet(object.totalChipLose) ? Number(object.totalChipLose) : 0,
      totalChipPromotion: isSet(object.totalChipPromotion) ? Number(object.totalChipPromotion) : 0,
      totalChipSend: isSet(object.totalChipSend) ? Number(object.totalChipSend) : 0,
      totalChipRecv: isSet(object.totalChipRecv) ? Number(object.totalChipRecv) : 0,
      coRatio: isSet(object.coRatio) ? Number(object.coRatio) : 0,
      totalChipDeposit3d: isSet(object.totalChipDeposit3d) ? Number(object.totalChipDeposit3d) : 0,
      totalChipWithDraw3d: isSet(object.totalChipWithDraw3d) ? Number(object.totalChipWithDraw3d) : 0,
      luck: isSet(object.luck) ? Number(object.luck) : 0,
      userCreateTimeUnix: isSet(object.userCreateTimeUnix) ? Number(object.userCreateTimeUnix) : 0,
      userStatGameHistories: Array.isArray(object?.userStatGameHistories)
        ? object.userStatGameHistories.map((e: any) => UserStatGameHistory.fromJSON(e))
        : [],
      recvChipStats: Array.isArray(object?.recvChipStats)
        ? object.recvChipStats.map((e: any) => UserTransferGoldStat.fromJSON(e))
        : [],
      sendChipStats: Array.isArray(object?.sendChipStats)
        ? object.sendChipStats.map((e: any) => UserTransferGoldStat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserStatistic): unknown {
    const obj: any = {};
    message.totalChipDeposit !== undefined && (obj.totalChipDeposit = Math.round(message.totalChipDeposit));
    message.totalChipWithDraw !== undefined && (obj.totalChipWithDraw = Math.round(message.totalChipWithDraw));
    message.totalChipWin !== undefined && (obj.totalChipWin = Math.round(message.totalChipWin));
    message.totalChipLose !== undefined && (obj.totalChipLose = Math.round(message.totalChipLose));
    message.totalChipPromotion !== undefined && (obj.totalChipPromotion = Math.round(message.totalChipPromotion));
    message.totalChipSend !== undefined && (obj.totalChipSend = Math.round(message.totalChipSend));
    message.totalChipRecv !== undefined && (obj.totalChipRecv = Math.round(message.totalChipRecv));
    message.coRatio !== undefined && (obj.coRatio = Math.round(message.coRatio));
    message.totalChipDeposit3d !== undefined && (obj.totalChipDeposit3d = Math.round(message.totalChipDeposit3d));
    message.totalChipWithDraw3d !== undefined && (obj.totalChipWithDraw3d = Math.round(message.totalChipWithDraw3d));
    message.luck !== undefined && (obj.luck = Math.round(message.luck));
    message.userCreateTimeUnix !== undefined && (obj.userCreateTimeUnix = Math.round(message.userCreateTimeUnix));
    if (message.userStatGameHistories) {
      obj.userStatGameHistories = message.userStatGameHistories.map((e) =>
        e ? UserStatGameHistory.toJSON(e) : undefined
      );
    } else {
      obj.userStatGameHistories = [];
    }
    if (message.recvChipStats) {
      obj.recvChipStats = message.recvChipStats.map((e) => e ? UserTransferGoldStat.toJSON(e) : undefined);
    } else {
      obj.recvChipStats = [];
    }
    if (message.sendChipStats) {
      obj.sendChipStats = message.sendChipStats.map((e) => e ? UserTransferGoldStat.toJSON(e) : undefined);
    } else {
      obj.sendChipStats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserStatistic>, I>>(base?: I): UserStatistic {
    return UserStatistic.fromPartial(base ?? {});
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
  return { userId: "", fromUnix: 0, toUnix: 0 };
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
    };
  },

  toJSON(message: UserStatisticRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserStatisticRequest>, I>>(base?: I): UserStatisticRequest {
    return UserStatisticRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserStatisticRequest>, I>>(object: I): UserStatisticRequest {
    const message = createBaseUserStatisticRequest();
    message.userId = object.userId ?? "";
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
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
      gameId: isSet(object.gameId) ? Number(object.gameId) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      totalChipWin: isSet(object.totalChipWin) ? Number(object.totalChipWin) : 0,
      totalChipLost: isSet(object.totalChipLost) ? Number(object.totalChipLost) : 0,
    };
  },

  toJSON(message: UserStatGameHistory): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = Math.round(message.gameId));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.totalChipWin !== undefined && (obj.totalChipWin = Math.round(message.totalChipWin));
    message.totalChipLost !== undefined && (obj.totalChipLost = Math.round(message.totalChipLost));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserStatGameHistory>, I>>(base?: I): UserStatGameHistory {
    return UserStatGameHistory.fromPartial(base ?? {});
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
      userSendId: isSet(object.userSendId) ? String(object.userSendId) : "",
      userSendName: isSet(object.userSendName) ? String(object.userSendName) : "",
      userRecvId: isSet(object.userRecvId) ? String(object.userRecvId) : "",
      userRecvName: isSet(object.userRecvName) ? String(object.userRecvName) : "",
      chip: isSet(object.chip) ? Number(object.chip) : 0,
    };
  },

  toJSON(message: UserTransferGoldStat): unknown {
    const obj: any = {};
    message.userSendId !== undefined && (obj.userSendId = message.userSendId);
    message.userSendName !== undefined && (obj.userSendName = message.userSendName);
    message.userRecvId !== undefined && (obj.userRecvId = message.userRecvId);
    message.userRecvName !== undefined && (obj.userRecvName = message.userRecvName);
    message.chip !== undefined && (obj.chip = Math.round(message.chip));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserTransferGoldStat>, I>>(base?: I): UserTransferGoldStat {
    return UserTransferGoldStat.fromPartial(base ?? {});
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
      totalIn: isSet(object.totalIn) ? Number(object.totalIn) : 0,
      totalOut: isSet(object.totalOut) ? Number(object.totalOut) : 0,
    };
  },

  toJSON(message: UserInfo): unknown {
    const obj: any = {};
    message.profile !== undefined && (obj.profile = message.profile ? Profile.toJSON(message.profile) : undefined);
    message.totalIn !== undefined && (obj.totalIn = Math.round(message.totalIn));
    message.totalOut !== undefined && (obj.totalOut = Math.round(message.totalOut));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo>, I>>(base?: I): UserInfo {
    return UserInfo.fromPartial(base ?? {});
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

function createBaseCashOut(): CashOut {
  return { userId: "", userName: "", ci: 0, cio: 0, co: 0, coo: 0, luckyPercent: 0 };
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      userName: isSet(object.userName) ? String(object.userName) : "",
      ci: isSet(object.ci) ? Number(object.ci) : 0,
      cio: isSet(object.cio) ? Number(object.cio) : 0,
      co: isSet(object.co) ? Number(object.co) : 0,
      coo: isSet(object.coo) ? Number(object.coo) : 0,
      luckyPercent: isSet(object.luckyPercent) ? Number(object.luckyPercent) : 0,
    };
  },

  toJSON(message: CashOut): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.ci !== undefined && (obj.ci = Math.round(message.ci));
    message.cio !== undefined && (obj.cio = Math.round(message.cio));
    message.co !== undefined && (obj.co = Math.round(message.co));
    message.coo !== undefined && (obj.coo = Math.round(message.coo));
    message.luckyPercent !== undefined && (obj.luckyPercent = Math.round(message.luckyPercent));
    return obj;
  },

  create<I extends Exact<DeepPartial<CashOut>, I>>(base?: I): CashOut {
    return CashOut.fromPartial(base ?? {});
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
      cashouts: Array.isArray(object?.cashouts) ? object.cashouts.map((e: any) => CashOut.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: TopCashOut): unknown {
    const obj: any = {};
    if (message.cashouts) {
      obj.cashouts = message.cashouts.map((e) => e ? CashOut.toJSON(e) : undefined);
    } else {
      obj.cashouts = [];
    }
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<TopCashOut>, I>>(base?: I): TopCashOut {
    return TopCashOut.fromPartial(base ?? {});
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      userName: isSet(object.userName) ? String(object.userName) : "",
      cio: isSet(object.cio) ? Number(object.cio) : 0,
      totalChip: isSet(object.totalChip) ? Number(object.totalChip) : 0,
      lastLoginTimeUnix: isSet(object.lastLoginTimeUnix) ? Number(object.lastLoginTimeUnix) : 0,
      createdTimeUnix: isSet(object.createdTimeUnix) ? Number(object.createdTimeUnix) : 0,
      refGame: isSet(object.refGame) ? String(object.refGame) : "",
      ci: isSet(object.ci) ? Number(object.ci) : 0,
      co: isSet(object.co) ? Number(object.co) : 0,
      ci2d: isSet(object.ci2d) ? Number(object.ci2d) : 0,
      co2d: isSet(object.co2d) ? Number(object.co2d) : 0,
      luckyPercent: isSet(object.luckyPercent) ? Number(object.luckyPercent) : 0,
      isBanned: isSet(object.isBanned) ? Boolean(object.isBanned) : false,
      isOnline: isSet(object.isOnline) ? Boolean(object.isOnline) : false,
      totalIn: isSet(object.totalIn) ? Number(object.totalIn) : 0,
      totalOut: isSet(object.totalOut) ? Number(object.totalOut) : 0,
    };
  },

  toJSON(message: Vip): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.cio !== undefined && (obj.cio = Math.round(message.cio));
    message.totalChip !== undefined && (obj.totalChip = Math.round(message.totalChip));
    message.lastLoginTimeUnix !== undefined && (obj.lastLoginTimeUnix = Math.round(message.lastLoginTimeUnix));
    message.createdTimeUnix !== undefined && (obj.createdTimeUnix = Math.round(message.createdTimeUnix));
    message.refGame !== undefined && (obj.refGame = message.refGame);
    message.ci !== undefined && (obj.ci = Math.round(message.ci));
    message.co !== undefined && (obj.co = Math.round(message.co));
    message.ci2d !== undefined && (obj.ci2d = Math.round(message.ci2d));
    message.co2d !== undefined && (obj.co2d = Math.round(message.co2d));
    message.luckyPercent !== undefined && (obj.luckyPercent = Math.round(message.luckyPercent));
    message.isBanned !== undefined && (obj.isBanned = message.isBanned);
    message.isOnline !== undefined && (obj.isOnline = message.isOnline);
    message.totalIn !== undefined && (obj.totalIn = Math.round(message.totalIn));
    message.totalOut !== undefined && (obj.totalOut = Math.round(message.totalOut));
    return obj;
  },

  create<I extends Exact<DeepPartial<Vip>, I>>(base?: I): Vip {
    return Vip.fromPartial(base ?? {});
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
      vips: Array.isArray(object?.vips) ? object.vips.map((e: any) => Vip.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      refGame: isSet(object.refGame) ? String(object.refGame) : "",
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: TopVip): unknown {
    const obj: any = {};
    if (message.vips) {
      obj.vips = message.vips.map((e) => e ? Vip.toJSON(e) : undefined);
    } else {
      obj.vips = [];
    }
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.refGame !== undefined && (obj.refGame = message.refGame);
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<TopVip>, I>>(base?: I): TopVip {
    return TopVip.fromPartial(base ?? {});
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
  return { userId: "", userName: "", vip: 0, gold: 0, ag: 0, agWin: 0, co: 0, ci: 0, coRate: 0, luckyPercent: 0 };
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
      userId: isSet(object.userId) ? String(object.userId) : "",
      userName: isSet(object.userName) ? String(object.userName) : "",
      vip: isSet(object.vip) ? Number(object.vip) : 0,
      gold: isSet(object.gold) ? Number(object.gold) : 0,
      ag: isSet(object.ag) ? Number(object.ag) : 0,
      agWin: isSet(object.agWin) ? Number(object.agWin) : 0,
      co: isSet(object.co) ? Number(object.co) : 0,
      ci: isSet(object.ci) ? Number(object.ci) : 0,
      coRate: isSet(object.coRate) ? Number(object.coRate) : 0,
      luckyPercent: isSet(object.luckyPercent) ? Number(object.luckyPercent) : 0,
    };
  },

  toJSON(message: Win): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.userName !== undefined && (obj.userName = message.userName);
    message.vip !== undefined && (obj.vip = Math.round(message.vip));
    message.gold !== undefined && (obj.gold = Math.round(message.gold));
    message.ag !== undefined && (obj.ag = Math.round(message.ag));
    message.agWin !== undefined && (obj.agWin = Math.round(message.agWin));
    message.co !== undefined && (obj.co = Math.round(message.co));
    message.ci !== undefined && (obj.ci = Math.round(message.ci));
    message.coRate !== undefined && (obj.coRate = Math.round(message.coRate));
    message.luckyPercent !== undefined && (obj.luckyPercent = Math.round(message.luckyPercent));
    return obj;
  },

  create<I extends Exact<DeepPartial<Win>, I>>(base?: I): Win {
    return Win.fromPartial(base ?? {});
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
    return message;
  },
};

function createBaseTopWin(): TopWin {
  return { wins: [], fromUnix: 0, toUnix: 0, limit: 0, offset: 0, refGame: "", total: 0 };
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
      wins: Array.isArray(object?.wins) ? object.wins.map((e: any) => Win.fromJSON(e)) : [],
      fromUnix: isSet(object.fromUnix) ? Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? Number(object.toUnix) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      refGame: isSet(object.refGame) ? String(object.refGame) : "",
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: TopWin): unknown {
    const obj: any = {};
    if (message.wins) {
      obj.wins = message.wins.map((e) => e ? Win.toJSON(e) : undefined);
    } else {
      obj.wins = [];
    }
    message.fromUnix !== undefined && (obj.fromUnix = Math.round(message.fromUnix));
    message.toUnix !== undefined && (obj.toUnix = Math.round(message.toUnix));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.refGame !== undefined && (obj.refGame = message.refGame);
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<TopWin>, I>>(base?: I): TopWin {
    return TopWin.fromPartial(base ?? {});
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
