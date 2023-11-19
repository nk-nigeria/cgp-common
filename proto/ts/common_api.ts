/* eslint-disable */

export const protobufPackage = "api";

export enum TypeChat {
  TYPE_CHAT_UNSPECIFIED = 0,
  TYPE_CHAT_ROOM = 1,
  TYPE_CHAT_DIRECTMSG = 2,
  TYPE_CHAT_GROUUP = 3,
  UNRECOGNIZED = -1,
}

export enum ExchangeStatus {
  EXCHANGE_STATUS_UNSPECIFIED = 0,
  EXCHANGE_STATUS_WAITING = 1,
  EXCHANGE_STATUS_CANCEL_BY_USER = 2,
  EXCHANGE_STATUS_PENDING = 3,
  EXCHANGE_STATUS_DONE = 4,
  EXCHANGE_STATUS_REJECT = 5,
  UNRECOGNIZED = -1,
}

export enum GiftCodeType {
  GIFT_CODE_TYPE_UNSPECIFIED = 0,
  GIFT_CODE_TYPE_GAME = 1,
  UNRECOGNIZED = -1,
}

export enum GiftCodeError {
  GIFT_CODE_ERROR_UNSPECIFIED = 0,
  GIFT_CODE_ERROR_NOT_OPEN = 1,
  GIFT_CODE_ERROR_HAS_CLOSED = 2,
  GIFT_CODE_ERROR_REACH_MAX_CLAIMED = 3,
  GIFT_CODE_ERROR_ALREADY_CLAIMED = 4,
  GIFT_CODE_ERROR_LV_VIP_NOT_MEET_REQUIRE = 5,
  UNRECOGNIZED = -1,
}

export enum TypeNotification {
  RESERVED = 0,
  MAIL_BOX = 1,
  GIFT = 2,
  UNRECOGNIZED = -1,
}

export enum TypeInAppMessage {
  HOT_NEWS = 0,
  BANNER = 1,
  UNRECOGNIZED = -1,
}

export enum InAppMessageAction {
  NONE = 0,
  NAVIGATE = 1,
  OPEN_URL = 2,
  UNRECOGNIZED = -1,
}

export enum HistoryRewardTime {
  HISTORY_REWARD_TIME_UNSPECIFIED = 0,
  HISTORY_REWARD_TIME_THIS_WEEK = 1,
  HISTORY_REWARD_TIME_LAST_WEEK = 2,
  HISTORY_REWARD_TIME_THIS_MONTH = 3,
  HISTORY_REWARD_TIME_LAST_MONTH = 4,
  UNRECOGNIZED = -1,
}

export interface Game {
  code: string;
  active: boolean;
  lobbyId: string;
  layout: Layout | undefined;
}

export interface Layout {
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
}

export interface GameListResponse {
  games: Game[];
}

export interface BetListRequest {
  code: string;
}

export interface BetListResponse {
  bets: number[];
}

export interface Chat {
  typeChat: TypeChat;
  id: string;
  content: string;
}

export interface FreeChip {
  id: number;
  senderId: string;
  recipientId: string;
  title: string;
  content: string;
  chips: number;
  claimable: boolean;
  action: string;
}

export interface FreeChipRequest {
  userId: string;
  limit: number;
  cusor: string;
}

export interface ListFreeChip {
  freechips: FreeChip[];
  nextCusor: string;
  prevCusor: string;
  total: number;
  offset: number;
  limit: number;
}

export interface Deal {
  id: string;
  chips: number;
  amountChips: number;
  bonus: number;
  price: string;
  name: string;
  currency: string;
  percent: string;
  chipPerUnit: number;
}

export interface DealInShop {
  best: Deal | undefined;
  iaps: Deal[];
  gcashes: Deal[];
  sms: Deal[];
}

export interface LeaderBoardRecord {
  gameCode: string;
  userId: string;
  score: number;
}

export interface ExchangeInfo {
  id: string;
  idDeal: string;
  chips: number;
  price: string;
  status: number;
  unlock: number;
  cashId: string;
  cashType: string;
  userIdRequest: string;
  userNameRequest: string;
  vipLv: number;
  deviceId: string;
  userIdHandling: string;
  userNameHandling: string;
  reason: string;
  cursor: string;
  createTime: number;
}

export interface ExchangeDealInShop {
  gcashes: Deal[];
}

export interface ListExchangeInfo {
  exchangeInfos: ExchangeInfo[];
  nextCusor: string;
  prevCusor: string;
  total: number;
  offset: number;
  limit: number;
  from: number;
  to: number;
}

export interface ExchangeRequest {
  id: string;
  userIdRequest: string;
  limit: number;
  from: number;
  to: number;
  cusor: string;
  cashType: string;
}

export interface Reward {
  basicChip: number;
  percentBonus: number;
  bonusChip: number;
  onlineChip: number;
  totalChip: number;
  streak: number;
  onlineSec: number;
  canClaim: boolean;
  numClaim: number;
  lastClaimUnix: number;
  nextClaimUnix: number;
  nextClaimSec: number;
  reachMaxStreak: boolean;
  lastSpinNumber: number;
  lastOnlineUnix: number;
}

export interface RewardTemplate {
  basicChips: number[];
  percenBonus: number;
  onlineSec: number;
  onlineChip: number;
  streak: number;
}

export interface LastClaimReward {
  lastClaimUnix: number;
  nextClaimUnix: number;
  streak: number;
  lastSpinNumber: number;
  reachMaxStreak: boolean;
  numClaim: number;
}

export interface DailyRewardTemplate {
  rewardTemplates: RewardTemplate[];
}

export interface UserGroupCondition {
  operator: string;
  value: string;
}

export interface UserGroup {
  id: number;
  name: string;
  type: string;
  data: string;
  condition: UserGroupCondition | undefined;
}

export interface ListUserGroup {
  userGroups: UserGroup[];
  nextCusor: string;
  prevCusor: string;
  total: number;
  offset: number;
  limit: number;
}

export interface UserGroupRequest {
  limit: number;
  cusor: string;
}

export interface GiftCode {
  id: number;
  code: string;
  nCurrent: number;
  nMax: number;
  value: number;
  startTimeUnix: number;
  endTimeUnix: number;
  message: string;
  vip: number;
  giftCodeType: GiftCodeType;
  reachMaxClaim: boolean;
  alreadyClaim: boolean;
  userId: string;
  openToClaim: boolean;
  errCode: number;
}

export interface ListGiftCode {
  giftCodes: GiftCode[];
  total: number;
  offset: number;
  limit: number;
}

export interface AddNotificationRequest {
  recipientIds: string[];
  userGroupId: number;
  type: TypeNotification;
  title: string;
  content: string;
  senderId: string;
}

export interface Notification {
  id: number;
  recipientId: string;
  type: TypeNotification;
  title: string;
  content: string;
  senderId: string;
  read: boolean;
  createTimeUnix: number;
  appPackage: string;
  gameId: string;
}

export interface NotificationRequest {
  limit: number;
  cusor: string;
  type: TypeNotification;
}

export interface ListNotification {
  notifications: Notification[];
  nextCusor: string;
  prevCusor: string;
  total: number;
  offset: number;
  limit: number;
}

export interface RangeTime {
  from: number;
  to: number;
}

export interface InAppMessageData {
  action: InAppMessageAction;
  target: string;
  params: { [key: string]: string };
  showTimes: RangeTime[];
}

export interface InAppMessageData_ParamsEntry {
  key: string;
  value: string;
}

export interface InAppMessage {
  id: number;
  highPriority: number;
  groupIds: number[];
  type: TypeInAppMessage;
  data: InAppMessageData | undefined;
  startDate: number;
  endDate: number;
  createTimeUnix: number;
  appPackage: string;
  gameId: string;
}

export interface InAppMessageRequest {
  limit: number;
  cusor: string;
  type: TypeInAppMessage;
}

export interface ListInAppMessage {
  inAppMessages: InAppMessage[];
  nextCusor: string;
  prevCusor: string;
  total: number;
  offset: number;
  limit: number;
}

export interface DefaultResponse {
  message: string;
  code: string;
  status: string;
}

export interface PreSignPutRequest {
  fileName: string;
  bucketName: string;
}

export interface PreSignPutResponse {
  url: string;
}

export interface ReferUser {
  id: number;
  userInvitor: string;
  userInvitee: string;
  createTimeUnix: number;
}

export interface RewardReferTemplate {
  min: number;
  max: number;
  rate: number;
}

export interface ListRewardReferTemplate {
  rewardRefers: RewardReferTemplate[];
}

export interface RewardRefer {
  id: number;
  userId: string;
  winAmt: number;
  estRewardLv: number;
  estReward: number;
  estRateReward: number;
  userRefers: RewardRefer[];
  listRewards: RewardReferTemplate[];
  fromUnix: number;
  toUnix: number;
  totalUserRefer: number;
  updateTimeUnix: number;
  sendToWallet: boolean;
  createTimeUnix: number;
  remainTimeResetSec: number;
}

export interface ListRewardRefer {
  userRefers: RewardRefer[];
}

export interface HistoryRewardRequest {
  userId: string;
  time: HistoryRewardTime;
  from: number;
  to: number;
}

export interface WalletTransRequest {
  limit: number;
  cusor: string;
  metaAction: string;
  metaBankAction: string;
}

export interface Error {
  code: number;
  error: string;
}
