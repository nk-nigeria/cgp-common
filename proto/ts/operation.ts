/* eslint-disable */
import type { Profile } from "./auth_api";

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
