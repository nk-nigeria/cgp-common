/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "api";

export enum TypeChat {
  TYPE_CHAT_UNSPECIFIED = 0,
  TYPE_CHAT_ROOM = 1,
  TYPE_CHAT_DIRECTMSG = 2,
  TYPE_CHAT_GROUUP = 3,
  UNRECOGNIZED = -1,
}

export function typeChatFromJSON(object: any): TypeChat {
  switch (object) {
    case 0:
    case "TYPE_CHAT_UNSPECIFIED":
      return TypeChat.TYPE_CHAT_UNSPECIFIED;
    case 1:
    case "TYPE_CHAT_ROOM":
      return TypeChat.TYPE_CHAT_ROOM;
    case 2:
    case "TYPE_CHAT_DIRECTMSG":
      return TypeChat.TYPE_CHAT_DIRECTMSG;
    case 3:
    case "TYPE_CHAT_GROUUP":
      return TypeChat.TYPE_CHAT_GROUUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TypeChat.UNRECOGNIZED;
  }
}

export function typeChatToJSON(object: TypeChat): string {
  switch (object) {
    case TypeChat.TYPE_CHAT_UNSPECIFIED:
      return "TYPE_CHAT_UNSPECIFIED";
    case TypeChat.TYPE_CHAT_ROOM:
      return "TYPE_CHAT_ROOM";
    case TypeChat.TYPE_CHAT_DIRECTMSG:
      return "TYPE_CHAT_DIRECTMSG";
    case TypeChat.TYPE_CHAT_GROUUP:
      return "TYPE_CHAT_GROUUP";
    case TypeChat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function exchangeStatusFromJSON(object: any): ExchangeStatus {
  switch (object) {
    case 0:
    case "EXCHANGE_STATUS_UNSPECIFIED":
      return ExchangeStatus.EXCHANGE_STATUS_UNSPECIFIED;
    case 1:
    case "EXCHANGE_STATUS_WAITING":
      return ExchangeStatus.EXCHANGE_STATUS_WAITING;
    case 2:
    case "EXCHANGE_STATUS_CANCEL_BY_USER":
      return ExchangeStatus.EXCHANGE_STATUS_CANCEL_BY_USER;
    case 3:
    case "EXCHANGE_STATUS_PENDING":
      return ExchangeStatus.EXCHANGE_STATUS_PENDING;
    case 4:
    case "EXCHANGE_STATUS_DONE":
      return ExchangeStatus.EXCHANGE_STATUS_DONE;
    case 5:
    case "EXCHANGE_STATUS_REJECT":
      return ExchangeStatus.EXCHANGE_STATUS_REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExchangeStatus.UNRECOGNIZED;
  }
}

export function exchangeStatusToJSON(object: ExchangeStatus): string {
  switch (object) {
    case ExchangeStatus.EXCHANGE_STATUS_UNSPECIFIED:
      return "EXCHANGE_STATUS_UNSPECIFIED";
    case ExchangeStatus.EXCHANGE_STATUS_WAITING:
      return "EXCHANGE_STATUS_WAITING";
    case ExchangeStatus.EXCHANGE_STATUS_CANCEL_BY_USER:
      return "EXCHANGE_STATUS_CANCEL_BY_USER";
    case ExchangeStatus.EXCHANGE_STATUS_PENDING:
      return "EXCHANGE_STATUS_PENDING";
    case ExchangeStatus.EXCHANGE_STATUS_DONE:
      return "EXCHANGE_STATUS_DONE";
    case ExchangeStatus.EXCHANGE_STATUS_REJECT:
      return "EXCHANGE_STATUS_REJECT";
    case ExchangeStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GiftCodeType {
  GIFT_CODE_TYPE_UNSPECIFIED = 0,
  GIFT_CODE_TYPE_GAME = 1,
  UNRECOGNIZED = -1,
}

export function giftCodeTypeFromJSON(object: any): GiftCodeType {
  switch (object) {
    case 0:
    case "GIFT_CODE_TYPE_UNSPECIFIED":
      return GiftCodeType.GIFT_CODE_TYPE_UNSPECIFIED;
    case 1:
    case "GIFT_CODE_TYPE_GAME":
      return GiftCodeType.GIFT_CODE_TYPE_GAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GiftCodeType.UNRECOGNIZED;
  }
}

export function giftCodeTypeToJSON(object: GiftCodeType): string {
  switch (object) {
    case GiftCodeType.GIFT_CODE_TYPE_UNSPECIFIED:
      return "GIFT_CODE_TYPE_UNSPECIFIED";
    case GiftCodeType.GIFT_CODE_TYPE_GAME:
      return "GIFT_CODE_TYPE_GAME";
    case GiftCodeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function giftCodeErrorFromJSON(object: any): GiftCodeError {
  switch (object) {
    case 0:
    case "GIFT_CODE_ERROR_UNSPECIFIED":
      return GiftCodeError.GIFT_CODE_ERROR_UNSPECIFIED;
    case 1:
    case "GIFT_CODE_ERROR_NOT_OPEN":
      return GiftCodeError.GIFT_CODE_ERROR_NOT_OPEN;
    case 2:
    case "GIFT_CODE_ERROR_HAS_CLOSED":
      return GiftCodeError.GIFT_CODE_ERROR_HAS_CLOSED;
    case 3:
    case "GIFT_CODE_ERROR_REACH_MAX_CLAIMED":
      return GiftCodeError.GIFT_CODE_ERROR_REACH_MAX_CLAIMED;
    case 4:
    case "GIFT_CODE_ERROR_ALREADY_CLAIMED":
      return GiftCodeError.GIFT_CODE_ERROR_ALREADY_CLAIMED;
    case 5:
    case "GIFT_CODE_ERROR_LV_VIP_NOT_MEET_REQUIRE":
      return GiftCodeError.GIFT_CODE_ERROR_LV_VIP_NOT_MEET_REQUIRE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GiftCodeError.UNRECOGNIZED;
  }
}

export function giftCodeErrorToJSON(object: GiftCodeError): string {
  switch (object) {
    case GiftCodeError.GIFT_CODE_ERROR_UNSPECIFIED:
      return "GIFT_CODE_ERROR_UNSPECIFIED";
    case GiftCodeError.GIFT_CODE_ERROR_NOT_OPEN:
      return "GIFT_CODE_ERROR_NOT_OPEN";
    case GiftCodeError.GIFT_CODE_ERROR_HAS_CLOSED:
      return "GIFT_CODE_ERROR_HAS_CLOSED";
    case GiftCodeError.GIFT_CODE_ERROR_REACH_MAX_CLAIMED:
      return "GIFT_CODE_ERROR_REACH_MAX_CLAIMED";
    case GiftCodeError.GIFT_CODE_ERROR_ALREADY_CLAIMED:
      return "GIFT_CODE_ERROR_ALREADY_CLAIMED";
    case GiftCodeError.GIFT_CODE_ERROR_LV_VIP_NOT_MEET_REQUIRE:
      return "GIFT_CODE_ERROR_LV_VIP_NOT_MEET_REQUIRE";
    case GiftCodeError.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TypeNotification {
  RESERVED = 0,
  MAIL_BOX = 1,
  GIFT = 2,
  UNRECOGNIZED = -1,
}

export function typeNotificationFromJSON(object: any): TypeNotification {
  switch (object) {
    case 0:
    case "RESERVED":
      return TypeNotification.RESERVED;
    case 1:
    case "MAIL_BOX":
      return TypeNotification.MAIL_BOX;
    case 2:
    case "GIFT":
      return TypeNotification.GIFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TypeNotification.UNRECOGNIZED;
  }
}

export function typeNotificationToJSON(object: TypeNotification): string {
  switch (object) {
    case TypeNotification.RESERVED:
      return "RESERVED";
    case TypeNotification.MAIL_BOX:
      return "MAIL_BOX";
    case TypeNotification.GIFT:
      return "GIFT";
    case TypeNotification.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TypeInAppMessage {
  HOT_NEWS = 0,
  BANNER = 1,
  UNRECOGNIZED = -1,
}

export function typeInAppMessageFromJSON(object: any): TypeInAppMessage {
  switch (object) {
    case 0:
    case "HOT_NEWS":
      return TypeInAppMessage.HOT_NEWS;
    case 1:
    case "BANNER":
      return TypeInAppMessage.BANNER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TypeInAppMessage.UNRECOGNIZED;
  }
}

export function typeInAppMessageToJSON(object: TypeInAppMessage): string {
  switch (object) {
    case TypeInAppMessage.HOT_NEWS:
      return "HOT_NEWS";
    case TypeInAppMessage.BANNER:
      return "BANNER";
    case TypeInAppMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum InAppMessageAction {
  NONE = 0,
  NAVIGATE = 1,
  OPEN_URL = 2,
  UNRECOGNIZED = -1,
}

export function inAppMessageActionFromJSON(object: any): InAppMessageAction {
  switch (object) {
    case 0:
    case "NONE":
      return InAppMessageAction.NONE;
    case 1:
    case "NAVIGATE":
      return InAppMessageAction.NAVIGATE;
    case 2:
    case "OPEN_URL":
      return InAppMessageAction.OPEN_URL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InAppMessageAction.UNRECOGNIZED;
  }
}

export function inAppMessageActionToJSON(object: InAppMessageAction): string {
  switch (object) {
    case InAppMessageAction.NONE:
      return "NONE";
    case InAppMessageAction.NAVIGATE:
      return "NAVIGATE";
    case InAppMessageAction.OPEN_URL:
      return "OPEN_URL";
    case InAppMessageAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum HistoryRewardTime {
  HISTORY_REWARD_TIME_UNSPECIFIED = 0,
  HISTORY_REWARD_TIME_THIS_WEEK = 1,
  HISTORY_REWARD_TIME_LAST_WEEK = 2,
  HISTORY_REWARD_TIME_THIS_MONTH = 3,
  HISTORY_REWARD_TIME_LAST_MONTH = 4,
  UNRECOGNIZED = -1,
}

export function historyRewardTimeFromJSON(object: any): HistoryRewardTime {
  switch (object) {
    case 0:
    case "HISTORY_REWARD_TIME_UNSPECIFIED":
      return HistoryRewardTime.HISTORY_REWARD_TIME_UNSPECIFIED;
    case 1:
    case "HISTORY_REWARD_TIME_THIS_WEEK":
      return HistoryRewardTime.HISTORY_REWARD_TIME_THIS_WEEK;
    case 2:
    case "HISTORY_REWARD_TIME_LAST_WEEK":
      return HistoryRewardTime.HISTORY_REWARD_TIME_LAST_WEEK;
    case 3:
    case "HISTORY_REWARD_TIME_THIS_MONTH":
      return HistoryRewardTime.HISTORY_REWARD_TIME_THIS_MONTH;
    case 4:
    case "HISTORY_REWARD_TIME_LAST_MONTH":
      return HistoryRewardTime.HISTORY_REWARD_TIME_LAST_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HistoryRewardTime.UNRECOGNIZED;
  }
}

export function historyRewardTimeToJSON(object: HistoryRewardTime): string {
  switch (object) {
    case HistoryRewardTime.HISTORY_REWARD_TIME_UNSPECIFIED:
      return "HISTORY_REWARD_TIME_UNSPECIFIED";
    case HistoryRewardTime.HISTORY_REWARD_TIME_THIS_WEEK:
      return "HISTORY_REWARD_TIME_THIS_WEEK";
    case HistoryRewardTime.HISTORY_REWARD_TIME_LAST_WEEK:
      return "HISTORY_REWARD_TIME_LAST_WEEK";
    case HistoryRewardTime.HISTORY_REWARD_TIME_THIS_MONTH:
      return "HISTORY_REWARD_TIME_THIS_MONTH";
    case HistoryRewardTime.HISTORY_REWARD_TIME_LAST_MONTH:
      return "HISTORY_REWARD_TIME_LAST_MONTH";
    case HistoryRewardTime.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Game {
  code: string;
  active: boolean;
  lobbyId: string;
  layout: Layout | undefined;
  id: number;
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
  claimTimeUnix: number;
  claimStaus: FreeChip_ClaimStatus;
}

export enum FreeChip_ClaimStatus {
  CLAIM_STATUS_UNSPECIFIED = 0,
  CLAIM_STATUS_WAIT_ADMIN_ACCEPT = 1,
  CLAIM_STATUS_WAIT_USER_CLAIM = 2,
  CLAIM_STATUS_CLAIMED = 3,
  CLAIM_STATUS_REJECT = 4,
  UNRECOGNIZED = -1,
}

export function freeChip_ClaimStatusFromJSON(object: any): FreeChip_ClaimStatus {
  switch (object) {
    case 0:
    case "CLAIM_STATUS_UNSPECIFIED":
      return FreeChip_ClaimStatus.CLAIM_STATUS_UNSPECIFIED;
    case 1:
    case "CLAIM_STATUS_WAIT_ADMIN_ACCEPT":
      return FreeChip_ClaimStatus.CLAIM_STATUS_WAIT_ADMIN_ACCEPT;
    case 2:
    case "CLAIM_STATUS_WAIT_USER_CLAIM":
      return FreeChip_ClaimStatus.CLAIM_STATUS_WAIT_USER_CLAIM;
    case 3:
    case "CLAIM_STATUS_CLAIMED":
      return FreeChip_ClaimStatus.CLAIM_STATUS_CLAIMED;
    case 4:
    case "CLAIM_STATUS_REJECT":
      return FreeChip_ClaimStatus.CLAIM_STATUS_REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FreeChip_ClaimStatus.UNRECOGNIZED;
  }
}

export function freeChip_ClaimStatusToJSON(object: FreeChip_ClaimStatus): string {
  switch (object) {
    case FreeChip_ClaimStatus.CLAIM_STATUS_UNSPECIFIED:
      return "CLAIM_STATUS_UNSPECIFIED";
    case FreeChip_ClaimStatus.CLAIM_STATUS_WAIT_ADMIN_ACCEPT:
      return "CLAIM_STATUS_WAIT_ADMIN_ACCEPT";
    case FreeChip_ClaimStatus.CLAIM_STATUS_WAIT_USER_CLAIM:
      return "CLAIM_STATUS_WAIT_USER_CLAIM";
    case FreeChip_ClaimStatus.CLAIM_STATUS_CLAIMED:
      return "CLAIM_STATUS_CLAIMED";
    case FreeChip_ClaimStatus.CLAIM_STATUS_REJECT:
      return "CLAIM_STATUS_REJECT";
    case FreeChip_ClaimStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FreeChipRequest {
  userId: string;
  limit: number;
  cusor: string;
  claimStaus: FreeChip_ClaimStatus;
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

export interface Request {
  userId: string;
  body: string;
}

export interface Response {
  body: string;
  errorMessage: string;
}

function createBaseGame(): Game {
  return { code: "", active: false, lobbyId: "", layout: undefined, id: 0 };
}

export const Game = {
  encode(message: Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    if (message.lobbyId !== "") {
      writer.uint32(26).string(message.lobbyId);
    }
    if (message.layout !== undefined) {
      Layout.encode(message.layout, writer.uint32(34).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(40).int64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Game {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lobbyId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.layout = Layout.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.id = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Game {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      lobbyId: isSet(object.lobbyId) ? globalThis.String(object.lobbyId) : "",
      layout: isSet(object.layout) ? Layout.fromJSON(object.layout) : undefined,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
    };
  },

  toJSON(message: Game): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.lobbyId !== "") {
      obj.lobbyId = message.lobbyId;
    }
    if (message.layout !== undefined) {
      obj.layout = Layout.toJSON(message.layout);
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Game>, I>>(base?: I): Game {
    return Game.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Game>, I>>(object: I): Game {
    const message = createBaseGame();
    message.code = object.code ?? "";
    message.active = object.active ?? false;
    message.lobbyId = object.lobbyId ?? "";
    message.layout = (object.layout !== undefined && object.layout !== null)
      ? Layout.fromPartial(object.layout)
      : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseLayout(): Layout {
  return { col: 0, row: 0, colSpan: 0, rowSpan: 0 };
}

export const Layout = {
  encode(message: Layout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.col !== 0) {
      writer.uint32(8).int32(message.col);
    }
    if (message.row !== 0) {
      writer.uint32(16).int32(message.row);
    }
    if (message.colSpan !== 0) {
      writer.uint32(24).int32(message.colSpan);
    }
    if (message.rowSpan !== 0) {
      writer.uint32(32).int32(message.rowSpan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.col = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.row = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.colSpan = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rowSpan = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layout {
    return {
      col: isSet(object.col) ? globalThis.Number(object.col) : 0,
      row: isSet(object.row) ? globalThis.Number(object.row) : 0,
      colSpan: isSet(object.colSpan) ? globalThis.Number(object.colSpan) : 0,
      rowSpan: isSet(object.rowSpan) ? globalThis.Number(object.rowSpan) : 0,
    };
  },

  toJSON(message: Layout): unknown {
    const obj: any = {};
    if (message.col !== 0) {
      obj.col = Math.round(message.col);
    }
    if (message.row !== 0) {
      obj.row = Math.round(message.row);
    }
    if (message.colSpan !== 0) {
      obj.colSpan = Math.round(message.colSpan);
    }
    if (message.rowSpan !== 0) {
      obj.rowSpan = Math.round(message.rowSpan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout>, I>>(base?: I): Layout {
    return Layout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout>, I>>(object: I): Layout {
    const message = createBaseLayout();
    message.col = object.col ?? 0;
    message.row = object.row ?? 0;
    message.colSpan = object.colSpan ?? 0;
    message.rowSpan = object.rowSpan ?? 0;
    return message;
  },
};

function createBaseGameListResponse(): GameListResponse {
  return { games: [] };
}

export const GameListResponse = {
  encode(message: GameListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.games.push(Game.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GameListResponse {
    return { games: globalThis.Array.isArray(object?.games) ? object.games.map((e: any) => Game.fromJSON(e)) : [] };
  },

  toJSON(message: GameListResponse): unknown {
    const obj: any = {};
    if (message.games?.length) {
      obj.games = message.games.map((e) => Game.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameListResponse>, I>>(base?: I): GameListResponse {
    return GameListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameListResponse>, I>>(object: I): GameListResponse {
    const message = createBaseGameListResponse();
    message.games = object.games?.map((e) => Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBetListRequest(): BetListRequest {
  return { code: "" };
}

export const BetListRequest = {
  encode(message: BetListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BetListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBetListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BetListRequest {
    return { code: isSet(object.code) ? globalThis.String(object.code) : "" };
  },

  toJSON(message: BetListRequest): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BetListRequest>, I>>(base?: I): BetListRequest {
    return BetListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BetListRequest>, I>>(object: I): BetListRequest {
    const message = createBaseBetListRequest();
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseBetListResponse(): BetListResponse {
  return { bets: [] };
}

export const BetListResponse = {
  encode(message: BetListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.bets) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BetListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBetListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.bets.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bets.push(reader.int32());
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

  fromJSON(object: any): BetListResponse {
    return { bets: globalThis.Array.isArray(object?.bets) ? object.bets.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: BetListResponse): unknown {
    const obj: any = {};
    if (message.bets?.length) {
      obj.bets = message.bets.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BetListResponse>, I>>(base?: I): BetListResponse {
    return BetListResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BetListResponse>, I>>(object: I): BetListResponse {
    const message = createBaseBetListResponse();
    message.bets = object.bets?.map((e) => e) || [];
    return message;
  },
};

function createBaseChat(): Chat {
  return { typeChat: 0, id: "", content: "" };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeChat !== 0) {
      writer.uint32(8).int32(message.typeChat);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.typeChat = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      typeChat: isSet(object.typeChat) ? typeChatFromJSON(object.typeChat) : 0,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    if (message.typeChat !== 0) {
      obj.typeChat = typeChatToJSON(message.typeChat);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Chat>, I>>(base?: I): Chat {
    return Chat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Chat>, I>>(object: I): Chat {
    const message = createBaseChat();
    message.typeChat = object.typeChat ?? 0;
    message.id = object.id ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseFreeChip(): FreeChip {
  return {
    id: 0,
    senderId: "",
    recipientId: "",
    title: "",
    content: "",
    chips: 0,
    claimable: false,
    action: "",
    claimTimeUnix: 0,
    claimStaus: 0,
  };
}

export const FreeChip = {
  encode(message: FreeChip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.senderId !== "") {
      writer.uint32(18).string(message.senderId);
    }
    if (message.recipientId !== "") {
      writer.uint32(26).string(message.recipientId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.chips !== 0) {
      writer.uint32(48).int64(message.chips);
    }
    if (message.claimable === true) {
      writer.uint32(56).bool(message.claimable);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    if (message.claimTimeUnix !== 0) {
      writer.uint32(72).int64(message.claimTimeUnix);
    }
    if (message.claimStaus !== 0) {
      writer.uint32(80).int32(message.claimStaus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FreeChip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreeChip();
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

          message.senderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recipientId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.content = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.claimable = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.claimTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.claimStaus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FreeChip {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
      recipientId: isSet(object.recipientId) ? globalThis.String(object.recipientId) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      claimable: isSet(object.claimable) ? globalThis.Boolean(object.claimable) : false,
      action: isSet(object.action) ? globalThis.String(object.action) : "",
      claimTimeUnix: isSet(object.claimTimeUnix) ? globalThis.Number(object.claimTimeUnix) : 0,
      claimStaus: isSet(object.claimStaus) ? freeChip_ClaimStatusFromJSON(object.claimStaus) : 0,
    };
  },

  toJSON(message: FreeChip): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.recipientId !== "") {
      obj.recipientId = message.recipientId;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.claimable === true) {
      obj.claimable = message.claimable;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.claimTimeUnix !== 0) {
      obj.claimTimeUnix = Math.round(message.claimTimeUnix);
    }
    if (message.claimStaus !== 0) {
      obj.claimStaus = freeChip_ClaimStatusToJSON(message.claimStaus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FreeChip>, I>>(base?: I): FreeChip {
    return FreeChip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FreeChip>, I>>(object: I): FreeChip {
    const message = createBaseFreeChip();
    message.id = object.id ?? 0;
    message.senderId = object.senderId ?? "";
    message.recipientId = object.recipientId ?? "";
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.chips = object.chips ?? 0;
    message.claimable = object.claimable ?? false;
    message.action = object.action ?? "";
    message.claimTimeUnix = object.claimTimeUnix ?? 0;
    message.claimStaus = object.claimStaus ?? 0;
    return message;
  },
};

function createBaseFreeChipRequest(): FreeChipRequest {
  return { userId: "", limit: 0, cusor: "", claimStaus: 0 };
}

export const FreeChipRequest = {
  encode(message: FreeChipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int64(message.limit);
    }
    if (message.cusor !== "") {
      writer.uint32(26).string(message.cusor);
    }
    if (message.claimStaus !== 0) {
      writer.uint32(32).int32(message.claimStaus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FreeChipRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreeChipRequest();
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

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cusor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.claimStaus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FreeChipRequest {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      cusor: isSet(object.cusor) ? globalThis.String(object.cusor) : "",
      claimStaus: isSet(object.claimStaus) ? freeChip_ClaimStatusFromJSON(object.claimStaus) : 0,
    };
  },

  toJSON(message: FreeChipRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.cusor !== "") {
      obj.cusor = message.cusor;
    }
    if (message.claimStaus !== 0) {
      obj.claimStaus = freeChip_ClaimStatusToJSON(message.claimStaus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FreeChipRequest>, I>>(base?: I): FreeChipRequest {
    return FreeChipRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FreeChipRequest>, I>>(object: I): FreeChipRequest {
    const message = createBaseFreeChipRequest();
    message.userId = object.userId ?? "";
    message.limit = object.limit ?? 0;
    message.cusor = object.cusor ?? "";
    message.claimStaus = object.claimStaus ?? 0;
    return message;
  },
};

function createBaseListFreeChip(): ListFreeChip {
  return { freechips: [], nextCusor: "", prevCusor: "", total: 0, offset: 0, limit: 0 };
}

export const ListFreeChip = {
  encode(message: ListFreeChip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.freechips) {
      FreeChip.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCusor !== "") {
      writer.uint32(18).string(message.nextCusor);
    }
    if (message.prevCusor !== "") {
      writer.uint32(26).string(message.prevCusor);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListFreeChip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListFreeChip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.freechips.push(FreeChip.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextCusor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prevCusor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ListFreeChip {
    return {
      freechips: globalThis.Array.isArray(object?.freechips)
        ? object.freechips.map((e: any) => FreeChip.fromJSON(e))
        : [],
      nextCusor: isSet(object.nextCusor) ? globalThis.String(object.nextCusor) : "",
      prevCusor: isSet(object.prevCusor) ? globalThis.String(object.prevCusor) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: ListFreeChip): unknown {
    const obj: any = {};
    if (message.freechips?.length) {
      obj.freechips = message.freechips.map((e) => FreeChip.toJSON(e));
    }
    if (message.nextCusor !== "") {
      obj.nextCusor = message.nextCusor;
    }
    if (message.prevCusor !== "") {
      obj.prevCusor = message.prevCusor;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListFreeChip>, I>>(base?: I): ListFreeChip {
    return ListFreeChip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListFreeChip>, I>>(object: I): ListFreeChip {
    const message = createBaseListFreeChip();
    message.freechips = object.freechips?.map((e) => FreeChip.fromPartial(e)) || [];
    message.nextCusor = object.nextCusor ?? "";
    message.prevCusor = object.prevCusor ?? "";
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseDeal(): Deal {
  return { id: "", chips: 0, amountChips: 0, bonus: 0, price: "", name: "", currency: "", percent: "", chipPerUnit: 0 };
}

export const Deal = {
  encode(message: Deal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.chips !== 0) {
      writer.uint32(16).int64(message.chips);
    }
    if (message.amountChips !== 0) {
      writer.uint32(24).int64(message.amountChips);
    }
    if (message.bonus !== 0) {
      writer.uint32(32).int64(message.bonus);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.currency !== "") {
      writer.uint32(58).string(message.currency);
    }
    if (message.percent !== "") {
      writer.uint32(66).string(message.percent);
    }
    if (message.chipPerUnit !== 0) {
      writer.uint32(72).int64(message.chipPerUnit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeal();
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
          if (tag !== 16) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amountChips = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bonus = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.price = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.percent = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.chipPerUnit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Deal {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      amountChips: isSet(object.amountChips) ? globalThis.Number(object.amountChips) : 0,
      bonus: isSet(object.bonus) ? globalThis.Number(object.bonus) : 0,
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      percent: isSet(object.percent) ? globalThis.String(object.percent) : "",
      chipPerUnit: isSet(object.chipPerUnit) ? globalThis.Number(object.chipPerUnit) : 0,
    };
  },

  toJSON(message: Deal): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.amountChips !== 0) {
      obj.amountChips = Math.round(message.amountChips);
    }
    if (message.bonus !== 0) {
      obj.bonus = Math.round(message.bonus);
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.percent !== "") {
      obj.percent = message.percent;
    }
    if (message.chipPerUnit !== 0) {
      obj.chipPerUnit = Math.round(message.chipPerUnit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Deal>, I>>(base?: I): Deal {
    return Deal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Deal>, I>>(object: I): Deal {
    const message = createBaseDeal();
    message.id = object.id ?? "";
    message.chips = object.chips ?? 0;
    message.amountChips = object.amountChips ?? 0;
    message.bonus = object.bonus ?? 0;
    message.price = object.price ?? "";
    message.name = object.name ?? "";
    message.currency = object.currency ?? "";
    message.percent = object.percent ?? "";
    message.chipPerUnit = object.chipPerUnit ?? 0;
    return message;
  },
};

function createBaseDealInShop(): DealInShop {
  return { best: undefined, iaps: [], gcashes: [], sms: [] };
}

export const DealInShop = {
  encode(message: DealInShop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.best !== undefined) {
      Deal.encode(message.best, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.iaps) {
      Deal.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.gcashes) {
      Deal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sms) {
      Deal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DealInShop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDealInShop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.best = Deal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.iaps.push(Deal.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gcashes.push(Deal.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sms.push(Deal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DealInShop {
    return {
      best: isSet(object.best) ? Deal.fromJSON(object.best) : undefined,
      iaps: globalThis.Array.isArray(object?.iaps) ? object.iaps.map((e: any) => Deal.fromJSON(e)) : [],
      gcashes: globalThis.Array.isArray(object?.gcashes) ? object.gcashes.map((e: any) => Deal.fromJSON(e)) : [],
      sms: globalThis.Array.isArray(object?.sms) ? object.sms.map((e: any) => Deal.fromJSON(e)) : [],
    };
  },

  toJSON(message: DealInShop): unknown {
    const obj: any = {};
    if (message.best !== undefined) {
      obj.best = Deal.toJSON(message.best);
    }
    if (message.iaps?.length) {
      obj.iaps = message.iaps.map((e) => Deal.toJSON(e));
    }
    if (message.gcashes?.length) {
      obj.gcashes = message.gcashes.map((e) => Deal.toJSON(e));
    }
    if (message.sms?.length) {
      obj.sms = message.sms.map((e) => Deal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DealInShop>, I>>(base?: I): DealInShop {
    return DealInShop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DealInShop>, I>>(object: I): DealInShop {
    const message = createBaseDealInShop();
    message.best = (object.best !== undefined && object.best !== null) ? Deal.fromPartial(object.best) : undefined;
    message.iaps = object.iaps?.map((e) => Deal.fromPartial(e)) || [];
    message.gcashes = object.gcashes?.map((e) => Deal.fromPartial(e)) || [];
    message.sms = object.sms?.map((e) => Deal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLeaderBoardRecord(): LeaderBoardRecord {
  return { gameCode: "", userId: "", score: 0 };
}

export const LeaderBoardRecord = {
  encode(message: LeaderBoardRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameCode !== "") {
      writer.uint32(10).string(message.gameCode);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.score !== 0) {
      writer.uint32(24).int64(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaderBoardRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaderBoardRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gameCode = reader.string();
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

          message.score = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeaderBoardRecord {
    return {
      gameCode: isSet(object.gameCode) ? globalThis.String(object.gameCode) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
    };
  },

  toJSON(message: LeaderBoardRecord): unknown {
    const obj: any = {};
    if (message.gameCode !== "") {
      obj.gameCode = message.gameCode;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LeaderBoardRecord>, I>>(base?: I): LeaderBoardRecord {
    return LeaderBoardRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LeaderBoardRecord>, I>>(object: I): LeaderBoardRecord {
    const message = createBaseLeaderBoardRecord();
    message.gameCode = object.gameCode ?? "";
    message.userId = object.userId ?? "";
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseExchangeInfo(): ExchangeInfo {
  return {
    id: "",
    idDeal: "",
    chips: 0,
    price: "",
    status: 0,
    unlock: 0,
    cashId: "",
    cashType: "",
    userIdRequest: "",
    userNameRequest: "",
    vipLv: 0,
    deviceId: "",
    userIdHandling: "",
    userNameHandling: "",
    reason: "",
    cursor: "",
    createTime: 0,
  };
}

export const ExchangeInfo = {
  encode(message: ExchangeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.idDeal !== "") {
      writer.uint32(18).string(message.idDeal);
    }
    if (message.chips !== 0) {
      writer.uint32(24).int64(message.chips);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.status !== 0) {
      writer.uint32(40).int64(message.status);
    }
    if (message.unlock !== 0) {
      writer.uint32(48).int32(message.unlock);
    }
    if (message.cashId !== "") {
      writer.uint32(58).string(message.cashId);
    }
    if (message.cashType !== "") {
      writer.uint32(66).string(message.cashType);
    }
    if (message.userIdRequest !== "") {
      writer.uint32(74).string(message.userIdRequest);
    }
    if (message.userNameRequest !== "") {
      writer.uint32(82).string(message.userNameRequest);
    }
    if (message.vipLv !== 0) {
      writer.uint32(88).int64(message.vipLv);
    }
    if (message.deviceId !== "") {
      writer.uint32(98).string(message.deviceId);
    }
    if (message.userIdHandling !== "") {
      writer.uint32(106).string(message.userIdHandling);
    }
    if (message.userNameHandling !== "") {
      writer.uint32(114).string(message.userNameHandling);
    }
    if (message.reason !== "") {
      writer.uint32(122).string(message.reason);
    }
    if (message.cursor !== "") {
      writer.uint32(130).string(message.cursor);
    }
    if (message.createTime !== 0) {
      writer.uint32(136).int64(message.createTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeInfo();
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

          message.idDeal = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.unlock = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cashId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.cashType = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.userIdRequest = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.userNameRequest = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.vipLv = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.userIdHandling = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.userNameHandling = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.cursor = reader.string();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.createTime = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeInfo {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      idDeal: isSet(object.idDeal) ? globalThis.String(object.idDeal) : "",
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      price: isSet(object.price) ? globalThis.String(object.price) : "",
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      unlock: isSet(object.unlock) ? globalThis.Number(object.unlock) : 0,
      cashId: isSet(object.cashId) ? globalThis.String(object.cashId) : "",
      cashType: isSet(object.cashType) ? globalThis.String(object.cashType) : "",
      userIdRequest: isSet(object.userIdRequest) ? globalThis.String(object.userIdRequest) : "",
      userNameRequest: isSet(object.userNameRequest) ? globalThis.String(object.userNameRequest) : "",
      vipLv: isSet(object.vipLv) ? globalThis.Number(object.vipLv) : 0,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      userIdHandling: isSet(object.userIdHandling) ? globalThis.String(object.userIdHandling) : "",
      userNameHandling: isSet(object.userNameHandling) ? globalThis.String(object.userNameHandling) : "",
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
      cursor: isSet(object.cursor) ? globalThis.String(object.cursor) : "",
      createTime: isSet(object.createTime) ? globalThis.Number(object.createTime) : 0,
    };
  },

  toJSON(message: ExchangeInfo): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.idDeal !== "") {
      obj.idDeal = message.idDeal;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.unlock !== 0) {
      obj.unlock = Math.round(message.unlock);
    }
    if (message.cashId !== "") {
      obj.cashId = message.cashId;
    }
    if (message.cashType !== "") {
      obj.cashType = message.cashType;
    }
    if (message.userIdRequest !== "") {
      obj.userIdRequest = message.userIdRequest;
    }
    if (message.userNameRequest !== "") {
      obj.userNameRequest = message.userNameRequest;
    }
    if (message.vipLv !== 0) {
      obj.vipLv = Math.round(message.vipLv);
    }
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.userIdHandling !== "") {
      obj.userIdHandling = message.userIdHandling;
    }
    if (message.userNameHandling !== "") {
      obj.userNameHandling = message.userNameHandling;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.cursor !== "") {
      obj.cursor = message.cursor;
    }
    if (message.createTime !== 0) {
      obj.createTime = Math.round(message.createTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeInfo>, I>>(base?: I): ExchangeInfo {
    return ExchangeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeInfo>, I>>(object: I): ExchangeInfo {
    const message = createBaseExchangeInfo();
    message.id = object.id ?? "";
    message.idDeal = object.idDeal ?? "";
    message.chips = object.chips ?? 0;
    message.price = object.price ?? "";
    message.status = object.status ?? 0;
    message.unlock = object.unlock ?? 0;
    message.cashId = object.cashId ?? "";
    message.cashType = object.cashType ?? "";
    message.userIdRequest = object.userIdRequest ?? "";
    message.userNameRequest = object.userNameRequest ?? "";
    message.vipLv = object.vipLv ?? 0;
    message.deviceId = object.deviceId ?? "";
    message.userIdHandling = object.userIdHandling ?? "";
    message.userNameHandling = object.userNameHandling ?? "";
    message.reason = object.reason ?? "";
    message.cursor = object.cursor ?? "";
    message.createTime = object.createTime ?? 0;
    return message;
  },
};

function createBaseExchangeDealInShop(): ExchangeDealInShop {
  return { gcashes: [] };
}

export const ExchangeDealInShop = {
  encode(message: ExchangeDealInShop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gcashes) {
      Deal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeDealInShop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeDealInShop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gcashes.push(Deal.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeDealInShop {
    return {
      gcashes: globalThis.Array.isArray(object?.gcashes) ? object.gcashes.map((e: any) => Deal.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExchangeDealInShop): unknown {
    const obj: any = {};
    if (message.gcashes?.length) {
      obj.gcashes = message.gcashes.map((e) => Deal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeDealInShop>, I>>(base?: I): ExchangeDealInShop {
    return ExchangeDealInShop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeDealInShop>, I>>(object: I): ExchangeDealInShop {
    const message = createBaseExchangeDealInShop();
    message.gcashes = object.gcashes?.map((e) => Deal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListExchangeInfo(): ListExchangeInfo {
  return { exchangeInfos: [], nextCusor: "", prevCusor: "", total: 0, offset: 0, limit: 0, from: 0, to: 0 };
}

export const ListExchangeInfo = {
  encode(message: ListExchangeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeInfos) {
      ExchangeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCusor !== "") {
      writer.uint32(18).string(message.nextCusor);
    }
    if (message.prevCusor !== "") {
      writer.uint32(26).string(message.prevCusor);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    if (message.from !== 0) {
      writer.uint32(56).int64(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(64).int64(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListExchangeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListExchangeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exchangeInfos.push(ExchangeInfo.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextCusor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prevCusor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
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

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.from = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.to = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListExchangeInfo {
    return {
      exchangeInfos: globalThis.Array.isArray(object?.exchangeInfos)
        ? object.exchangeInfos.map((e: any) => ExchangeInfo.fromJSON(e))
        : [],
      nextCusor: isSet(object.nextCusor) ? globalThis.String(object.nextCusor) : "",
      prevCusor: isSet(object.prevCusor) ? globalThis.String(object.prevCusor) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      from: isSet(object.from) ? globalThis.Number(object.from) : 0,
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
    };
  },

  toJSON(message: ListExchangeInfo): unknown {
    const obj: any = {};
    if (message.exchangeInfos?.length) {
      obj.exchangeInfos = message.exchangeInfos.map((e) => ExchangeInfo.toJSON(e));
    }
    if (message.nextCusor !== "") {
      obj.nextCusor = message.nextCusor;
    }
    if (message.prevCusor !== "") {
      obj.prevCusor = message.prevCusor;
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
    if (message.from !== 0) {
      obj.from = Math.round(message.from);
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListExchangeInfo>, I>>(base?: I): ListExchangeInfo {
    return ListExchangeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListExchangeInfo>, I>>(object: I): ListExchangeInfo {
    const message = createBaseListExchangeInfo();
    message.exchangeInfos = object.exchangeInfos?.map((e) => ExchangeInfo.fromPartial(e)) || [];
    message.nextCusor = object.nextCusor ?? "";
    message.prevCusor = object.prevCusor ?? "";
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.from = object.from ?? 0;
    message.to = object.to ?? 0;
    return message;
  },
};

function createBaseExchangeRequest(): ExchangeRequest {
  return { id: "", userIdRequest: "", limit: 0, from: 0, to: 0, cusor: "", cashType: "" };
}

export const ExchangeRequest = {
  encode(message: ExchangeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userIdRequest !== "") {
      writer.uint32(18).string(message.userIdRequest);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.from !== 0) {
      writer.uint32(32).int64(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(40).int64(message.to);
    }
    if (message.cusor !== "") {
      writer.uint32(50).string(message.cusor);
    }
    if (message.cashType !== "") {
      writer.uint32(74).string(message.cashType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRequest();
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

          message.userIdRequest = reader.string();
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

          message.from = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.to = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cusor = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cashType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userIdRequest: isSet(object.userIdRequest) ? globalThis.String(object.userIdRequest) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      from: isSet(object.from) ? globalThis.Number(object.from) : 0,
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
      cusor: isSet(object.cusor) ? globalThis.String(object.cusor) : "",
      cashType: isSet(object.cashType) ? globalThis.String(object.cashType) : "",
    };
  },

  toJSON(message: ExchangeRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userIdRequest !== "") {
      obj.userIdRequest = message.userIdRequest;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.from !== 0) {
      obj.from = Math.round(message.from);
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    if (message.cusor !== "") {
      obj.cusor = message.cusor;
    }
    if (message.cashType !== "") {
      obj.cashType = message.cashType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeRequest>, I>>(base?: I): ExchangeRequest {
    return ExchangeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeRequest>, I>>(object: I): ExchangeRequest {
    const message = createBaseExchangeRequest();
    message.id = object.id ?? "";
    message.userIdRequest = object.userIdRequest ?? "";
    message.limit = object.limit ?? 0;
    message.from = object.from ?? 0;
    message.to = object.to ?? 0;
    message.cusor = object.cusor ?? "";
    message.cashType = object.cashType ?? "";
    return message;
  },
};

function createBaseReward(): Reward {
  return {
    basicChip: 0,
    percentBonus: 0,
    bonusChip: 0,
    onlineChip: 0,
    totalChip: 0,
    streak: 0,
    onlineSec: 0,
    canClaim: false,
    numClaim: 0,
    lastClaimUnix: 0,
    nextClaimUnix: 0,
    nextClaimSec: 0,
    reachMaxStreak: false,
    lastSpinNumber: 0,
    lastOnlineUnix: 0,
  };
}

export const Reward = {
  encode(message: Reward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basicChip !== 0) {
      writer.uint32(8).int64(message.basicChip);
    }
    if (message.percentBonus !== 0) {
      writer.uint32(21).float(message.percentBonus);
    }
    if (message.bonusChip !== 0) {
      writer.uint32(24).int64(message.bonusChip);
    }
    if (message.onlineChip !== 0) {
      writer.uint32(32).int64(message.onlineChip);
    }
    if (message.totalChip !== 0) {
      writer.uint32(40).int64(message.totalChip);
    }
    if (message.streak !== 0) {
      writer.uint32(48).int64(message.streak);
    }
    if (message.onlineSec !== 0) {
      writer.uint32(56).int64(message.onlineSec);
    }
    if (message.canClaim === true) {
      writer.uint32(64).bool(message.canClaim);
    }
    if (message.numClaim !== 0) {
      writer.uint32(72).int64(message.numClaim);
    }
    if (message.lastClaimUnix !== 0) {
      writer.uint32(80).int64(message.lastClaimUnix);
    }
    if (message.nextClaimUnix !== 0) {
      writer.uint32(88).int64(message.nextClaimUnix);
    }
    if (message.nextClaimSec !== 0) {
      writer.uint32(96).int64(message.nextClaimSec);
    }
    if (message.reachMaxStreak === true) {
      writer.uint32(104).bool(message.reachMaxStreak);
    }
    if (message.lastSpinNumber !== 0) {
      writer.uint32(112).int64(message.lastSpinNumber);
    }
    if (message.lastOnlineUnix !== 0) {
      writer.uint32(120).int64(message.lastOnlineUnix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.basicChip = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.percentBonus = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bonusChip = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.onlineChip = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.totalChip = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.streak = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.onlineSec = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.canClaim = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.numClaim = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.lastClaimUnix = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.nextClaimUnix = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.nextClaimSec = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.reachMaxStreak = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.lastSpinNumber = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.lastOnlineUnix = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reward {
    return {
      basicChip: isSet(object.basicChip) ? globalThis.Number(object.basicChip) : 0,
      percentBonus: isSet(object.percentBonus) ? globalThis.Number(object.percentBonus) : 0,
      bonusChip: isSet(object.bonusChip) ? globalThis.Number(object.bonusChip) : 0,
      onlineChip: isSet(object.onlineChip) ? globalThis.Number(object.onlineChip) : 0,
      totalChip: isSet(object.totalChip) ? globalThis.Number(object.totalChip) : 0,
      streak: isSet(object.streak) ? globalThis.Number(object.streak) : 0,
      onlineSec: isSet(object.onlineSec) ? globalThis.Number(object.onlineSec) : 0,
      canClaim: isSet(object.canClaim) ? globalThis.Boolean(object.canClaim) : false,
      numClaim: isSet(object.numClaim) ? globalThis.Number(object.numClaim) : 0,
      lastClaimUnix: isSet(object.lastClaimUnix) ? globalThis.Number(object.lastClaimUnix) : 0,
      nextClaimUnix: isSet(object.nextClaimUnix) ? globalThis.Number(object.nextClaimUnix) : 0,
      nextClaimSec: isSet(object.nextClaimSec) ? globalThis.Number(object.nextClaimSec) : 0,
      reachMaxStreak: isSet(object.reachMaxStreak) ? globalThis.Boolean(object.reachMaxStreak) : false,
      lastSpinNumber: isSet(object.lastSpinNumber) ? globalThis.Number(object.lastSpinNumber) : 0,
      lastOnlineUnix: isSet(object.lastOnlineUnix) ? globalThis.Number(object.lastOnlineUnix) : 0,
    };
  },

  toJSON(message: Reward): unknown {
    const obj: any = {};
    if (message.basicChip !== 0) {
      obj.basicChip = Math.round(message.basicChip);
    }
    if (message.percentBonus !== 0) {
      obj.percentBonus = message.percentBonus;
    }
    if (message.bonusChip !== 0) {
      obj.bonusChip = Math.round(message.bonusChip);
    }
    if (message.onlineChip !== 0) {
      obj.onlineChip = Math.round(message.onlineChip);
    }
    if (message.totalChip !== 0) {
      obj.totalChip = Math.round(message.totalChip);
    }
    if (message.streak !== 0) {
      obj.streak = Math.round(message.streak);
    }
    if (message.onlineSec !== 0) {
      obj.onlineSec = Math.round(message.onlineSec);
    }
    if (message.canClaim === true) {
      obj.canClaim = message.canClaim;
    }
    if (message.numClaim !== 0) {
      obj.numClaim = Math.round(message.numClaim);
    }
    if (message.lastClaimUnix !== 0) {
      obj.lastClaimUnix = Math.round(message.lastClaimUnix);
    }
    if (message.nextClaimUnix !== 0) {
      obj.nextClaimUnix = Math.round(message.nextClaimUnix);
    }
    if (message.nextClaimSec !== 0) {
      obj.nextClaimSec = Math.round(message.nextClaimSec);
    }
    if (message.reachMaxStreak === true) {
      obj.reachMaxStreak = message.reachMaxStreak;
    }
    if (message.lastSpinNumber !== 0) {
      obj.lastSpinNumber = Math.round(message.lastSpinNumber);
    }
    if (message.lastOnlineUnix !== 0) {
      obj.lastOnlineUnix = Math.round(message.lastOnlineUnix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Reward>, I>>(base?: I): Reward {
    return Reward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.basicChip = object.basicChip ?? 0;
    message.percentBonus = object.percentBonus ?? 0;
    message.bonusChip = object.bonusChip ?? 0;
    message.onlineChip = object.onlineChip ?? 0;
    message.totalChip = object.totalChip ?? 0;
    message.streak = object.streak ?? 0;
    message.onlineSec = object.onlineSec ?? 0;
    message.canClaim = object.canClaim ?? false;
    message.numClaim = object.numClaim ?? 0;
    message.lastClaimUnix = object.lastClaimUnix ?? 0;
    message.nextClaimUnix = object.nextClaimUnix ?? 0;
    message.nextClaimSec = object.nextClaimSec ?? 0;
    message.reachMaxStreak = object.reachMaxStreak ?? false;
    message.lastSpinNumber = object.lastSpinNumber ?? 0;
    message.lastOnlineUnix = object.lastOnlineUnix ?? 0;
    return message;
  },
};

function createBaseRewardTemplate(): RewardTemplate {
  return { basicChips: [], percenBonus: 0, onlineSec: 0, onlineChip: 0, streak: 0 };
}

export const RewardTemplate = {
  encode(message: RewardTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.basicChips) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.percenBonus !== 0) {
      writer.uint32(21).float(message.percenBonus);
    }
    if (message.onlineSec !== 0) {
      writer.uint32(24).int64(message.onlineSec);
    }
    if (message.onlineChip !== 0) {
      writer.uint32(32).int64(message.onlineChip);
    }
    if (message.streak !== 0) {
      writer.uint32(40).int64(message.streak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.basicChips.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.basicChips.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.percenBonus = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.onlineSec = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.onlineChip = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.streak = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardTemplate {
    return {
      basicChips: globalThis.Array.isArray(object?.basicChips)
        ? object.basicChips.map((e: any) => globalThis.Number(e))
        : [],
      percenBonus: isSet(object.percenBonus) ? globalThis.Number(object.percenBonus) : 0,
      onlineSec: isSet(object.onlineSec) ? globalThis.Number(object.onlineSec) : 0,
      onlineChip: isSet(object.onlineChip) ? globalThis.Number(object.onlineChip) : 0,
      streak: isSet(object.streak) ? globalThis.Number(object.streak) : 0,
    };
  },

  toJSON(message: RewardTemplate): unknown {
    const obj: any = {};
    if (message.basicChips?.length) {
      obj.basicChips = message.basicChips.map((e) => Math.round(e));
    }
    if (message.percenBonus !== 0) {
      obj.percenBonus = message.percenBonus;
    }
    if (message.onlineSec !== 0) {
      obj.onlineSec = Math.round(message.onlineSec);
    }
    if (message.onlineChip !== 0) {
      obj.onlineChip = Math.round(message.onlineChip);
    }
    if (message.streak !== 0) {
      obj.streak = Math.round(message.streak);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RewardTemplate>, I>>(base?: I): RewardTemplate {
    return RewardTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RewardTemplate>, I>>(object: I): RewardTemplate {
    const message = createBaseRewardTemplate();
    message.basicChips = object.basicChips?.map((e) => e) || [];
    message.percenBonus = object.percenBonus ?? 0;
    message.onlineSec = object.onlineSec ?? 0;
    message.onlineChip = object.onlineChip ?? 0;
    message.streak = object.streak ?? 0;
    return message;
  },
};

function createBaseLastClaimReward(): LastClaimReward {
  return { lastClaimUnix: 0, nextClaimUnix: 0, streak: 0, lastSpinNumber: 0, reachMaxStreak: false, numClaim: 0 };
}

export const LastClaimReward = {
  encode(message: LastClaimReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastClaimUnix !== 0) {
      writer.uint32(8).int64(message.lastClaimUnix);
    }
    if (message.nextClaimUnix !== 0) {
      writer.uint32(16).int64(message.nextClaimUnix);
    }
    if (message.streak !== 0) {
      writer.uint32(24).int64(message.streak);
    }
    if (message.lastSpinNumber !== 0) {
      writer.uint32(32).int64(message.lastSpinNumber);
    }
    if (message.reachMaxStreak === true) {
      writer.uint32(40).bool(message.reachMaxStreak);
    }
    if (message.numClaim !== 0) {
      writer.uint32(48).int64(message.numClaim);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastClaimReward {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastClaimReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.lastClaimUnix = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nextClaimUnix = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.streak = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lastSpinNumber = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reachMaxStreak = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.numClaim = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LastClaimReward {
    return {
      lastClaimUnix: isSet(object.lastClaimUnix) ? globalThis.Number(object.lastClaimUnix) : 0,
      nextClaimUnix: isSet(object.nextClaimUnix) ? globalThis.Number(object.nextClaimUnix) : 0,
      streak: isSet(object.streak) ? globalThis.Number(object.streak) : 0,
      lastSpinNumber: isSet(object.lastSpinNumber) ? globalThis.Number(object.lastSpinNumber) : 0,
      reachMaxStreak: isSet(object.reachMaxStreak) ? globalThis.Boolean(object.reachMaxStreak) : false,
      numClaim: isSet(object.numClaim) ? globalThis.Number(object.numClaim) : 0,
    };
  },

  toJSON(message: LastClaimReward): unknown {
    const obj: any = {};
    if (message.lastClaimUnix !== 0) {
      obj.lastClaimUnix = Math.round(message.lastClaimUnix);
    }
    if (message.nextClaimUnix !== 0) {
      obj.nextClaimUnix = Math.round(message.nextClaimUnix);
    }
    if (message.streak !== 0) {
      obj.streak = Math.round(message.streak);
    }
    if (message.lastSpinNumber !== 0) {
      obj.lastSpinNumber = Math.round(message.lastSpinNumber);
    }
    if (message.reachMaxStreak === true) {
      obj.reachMaxStreak = message.reachMaxStreak;
    }
    if (message.numClaim !== 0) {
      obj.numClaim = Math.round(message.numClaim);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LastClaimReward>, I>>(base?: I): LastClaimReward {
    return LastClaimReward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LastClaimReward>, I>>(object: I): LastClaimReward {
    const message = createBaseLastClaimReward();
    message.lastClaimUnix = object.lastClaimUnix ?? 0;
    message.nextClaimUnix = object.nextClaimUnix ?? 0;
    message.streak = object.streak ?? 0;
    message.lastSpinNumber = object.lastSpinNumber ?? 0;
    message.reachMaxStreak = object.reachMaxStreak ?? false;
    message.numClaim = object.numClaim ?? 0;
    return message;
  },
};

function createBaseDailyRewardTemplate(): DailyRewardTemplate {
  return { rewardTemplates: [] };
}

export const DailyRewardTemplate = {
  encode(message: DailyRewardTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardTemplates) {
      RewardTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DailyRewardTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDailyRewardTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardTemplates.push(RewardTemplate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DailyRewardTemplate {
    return {
      rewardTemplates: globalThis.Array.isArray(object?.rewardTemplates)
        ? object.rewardTemplates.map((e: any) => RewardTemplate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DailyRewardTemplate): unknown {
    const obj: any = {};
    if (message.rewardTemplates?.length) {
      obj.rewardTemplates = message.rewardTemplates.map((e) => RewardTemplate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DailyRewardTemplate>, I>>(base?: I): DailyRewardTemplate {
    return DailyRewardTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DailyRewardTemplate>, I>>(object: I): DailyRewardTemplate {
    const message = createBaseDailyRewardTemplate();
    message.rewardTemplates = object.rewardTemplates?.map((e) => RewardTemplate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserGroupCondition(): UserGroupCondition {
  return { operator: "", value: "" };
}

export const UserGroupCondition = {
  encode(message: UserGroupCondition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGroupCondition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGroupCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserGroupCondition {
    return {
      operator: isSet(object.operator) ? globalThis.String(object.operator) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: UserGroupCondition): unknown {
    const obj: any = {};
    if (message.operator !== "") {
      obj.operator = message.operator;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserGroupCondition>, I>>(base?: I): UserGroupCondition {
    return UserGroupCondition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserGroupCondition>, I>>(object: I): UserGroupCondition {
    const message = createBaseUserGroupCondition();
    message.operator = object.operator ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUserGroup(): UserGroup {
  return { id: 0, name: "", type: "", data: "", condition: undefined };
}

export const UserGroup = {
  encode(message: UserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.condition !== undefined) {
      UserGroupCondition.encode(message.condition, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGroup();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.condition = UserGroupCondition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserGroup {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
      condition: isSet(object.condition) ? UserGroupCondition.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: UserGroup): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.condition !== undefined) {
      obj.condition = UserGroupCondition.toJSON(message.condition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserGroup>, I>>(base?: I): UserGroup {
    return UserGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserGroup>, I>>(object: I): UserGroup {
    const message = createBaseUserGroup();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.data = object.data ?? "";
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? UserGroupCondition.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseListUserGroup(): ListUserGroup {
  return { userGroups: [], nextCusor: "", prevCusor: "", total: 0, offset: 0, limit: 0 };
}

export const ListUserGroup = {
  encode(message: ListUserGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userGroups) {
      UserGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCusor !== "") {
      writer.uint32(18).string(message.nextCusor);
    }
    if (message.prevCusor !== "") {
      writer.uint32(26).string(message.prevCusor);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userGroups.push(UserGroup.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextCusor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prevCusor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ListUserGroup {
    return {
      userGroups: globalThis.Array.isArray(object?.userGroups)
        ? object.userGroups.map((e: any) => UserGroup.fromJSON(e))
        : [],
      nextCusor: isSet(object.nextCusor) ? globalThis.String(object.nextCusor) : "",
      prevCusor: isSet(object.prevCusor) ? globalThis.String(object.prevCusor) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: ListUserGroup): unknown {
    const obj: any = {};
    if (message.userGroups?.length) {
      obj.userGroups = message.userGroups.map((e) => UserGroup.toJSON(e));
    }
    if (message.nextCusor !== "") {
      obj.nextCusor = message.nextCusor;
    }
    if (message.prevCusor !== "") {
      obj.prevCusor = message.prevCusor;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListUserGroup>, I>>(base?: I): ListUserGroup {
    return ListUserGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListUserGroup>, I>>(object: I): ListUserGroup {
    const message = createBaseListUserGroup();
    message.userGroups = object.userGroups?.map((e) => UserGroup.fromPartial(e)) || [];
    message.nextCusor = object.nextCusor ?? "";
    message.prevCusor = object.prevCusor ?? "";
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseUserGroupRequest(): UserGroupRequest {
  return { limit: 0, cusor: "" };
}

export const UserGroupRequest = {
  encode(message: UserGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int64(message.limit);
    }
    if (message.cusor !== "") {
      writer.uint32(18).string(message.cusor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cusor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserGroupRequest {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      cusor: isSet(object.cusor) ? globalThis.String(object.cusor) : "",
    };
  },

  toJSON(message: UserGroupRequest): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.cusor !== "") {
      obj.cusor = message.cusor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserGroupRequest>, I>>(base?: I): UserGroupRequest {
    return UserGroupRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserGroupRequest>, I>>(object: I): UserGroupRequest {
    const message = createBaseUserGroupRequest();
    message.limit = object.limit ?? 0;
    message.cusor = object.cusor ?? "";
    return message;
  },
};

function createBaseGiftCode(): GiftCode {
  return {
    id: 0,
    code: "",
    nCurrent: 0,
    nMax: 0,
    value: 0,
    startTimeUnix: 0,
    endTimeUnix: 0,
    message: "",
    vip: 0,
    giftCodeType: 0,
    reachMaxClaim: false,
    alreadyClaim: false,
    userId: "",
    openToClaim: false,
    errCode: 0,
  };
}

export const GiftCode = {
  encode(message: GiftCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.nCurrent !== 0) {
      writer.uint32(24).int64(message.nCurrent);
    }
    if (message.nMax !== 0) {
      writer.uint32(32).int64(message.nMax);
    }
    if (message.value !== 0) {
      writer.uint32(40).int64(message.value);
    }
    if (message.startTimeUnix !== 0) {
      writer.uint32(48).int64(message.startTimeUnix);
    }
    if (message.endTimeUnix !== 0) {
      writer.uint32(56).int64(message.endTimeUnix);
    }
    if (message.message !== "") {
      writer.uint32(66).string(message.message);
    }
    if (message.vip !== 0) {
      writer.uint32(72).int64(message.vip);
    }
    if (message.giftCodeType !== 0) {
      writer.uint32(80).int32(message.giftCodeType);
    }
    if (message.reachMaxClaim === true) {
      writer.uint32(96).bool(message.reachMaxClaim);
    }
    if (message.alreadyClaim === true) {
      writer.uint32(104).bool(message.alreadyClaim);
    }
    if (message.userId !== "") {
      writer.uint32(114).string(message.userId);
    }
    if (message.openToClaim === true) {
      writer.uint32(120).bool(message.openToClaim);
    }
    if (message.errCode !== 0) {
      writer.uint32(128).int32(message.errCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GiftCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGiftCode();
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

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nCurrent = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nMax = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.startTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.endTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.message = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.giftCodeType = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.reachMaxClaim = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.alreadyClaim = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.openToClaim = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.errCode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GiftCode {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      nCurrent: isSet(object.nCurrent) ? globalThis.Number(object.nCurrent) : 0,
      nMax: isSet(object.nMax) ? globalThis.Number(object.nMax) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      startTimeUnix: isSet(object.startTimeUnix) ? globalThis.Number(object.startTimeUnix) : 0,
      endTimeUnix: isSet(object.endTimeUnix) ? globalThis.Number(object.endTimeUnix) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      giftCodeType: isSet(object.giftCodeType) ? giftCodeTypeFromJSON(object.giftCodeType) : 0,
      reachMaxClaim: isSet(object.reachMaxClaim) ? globalThis.Boolean(object.reachMaxClaim) : false,
      alreadyClaim: isSet(object.alreadyClaim) ? globalThis.Boolean(object.alreadyClaim) : false,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      openToClaim: isSet(object.openToClaim) ? globalThis.Boolean(object.openToClaim) : false,
      errCode: isSet(object.errCode) ? globalThis.Number(object.errCode) : 0,
    };
  },

  toJSON(message: GiftCode): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.nCurrent !== 0) {
      obj.nCurrent = Math.round(message.nCurrent);
    }
    if (message.nMax !== 0) {
      obj.nMax = Math.round(message.nMax);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.startTimeUnix !== 0) {
      obj.startTimeUnix = Math.round(message.startTimeUnix);
    }
    if (message.endTimeUnix !== 0) {
      obj.endTimeUnix = Math.round(message.endTimeUnix);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.giftCodeType !== 0) {
      obj.giftCodeType = giftCodeTypeToJSON(message.giftCodeType);
    }
    if (message.reachMaxClaim === true) {
      obj.reachMaxClaim = message.reachMaxClaim;
    }
    if (message.alreadyClaim === true) {
      obj.alreadyClaim = message.alreadyClaim;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.openToClaim === true) {
      obj.openToClaim = message.openToClaim;
    }
    if (message.errCode !== 0) {
      obj.errCode = Math.round(message.errCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GiftCode>, I>>(base?: I): GiftCode {
    return GiftCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GiftCode>, I>>(object: I): GiftCode {
    const message = createBaseGiftCode();
    message.id = object.id ?? 0;
    message.code = object.code ?? "";
    message.nCurrent = object.nCurrent ?? 0;
    message.nMax = object.nMax ?? 0;
    message.value = object.value ?? 0;
    message.startTimeUnix = object.startTimeUnix ?? 0;
    message.endTimeUnix = object.endTimeUnix ?? 0;
    message.message = object.message ?? "";
    message.vip = object.vip ?? 0;
    message.giftCodeType = object.giftCodeType ?? 0;
    message.reachMaxClaim = object.reachMaxClaim ?? false;
    message.alreadyClaim = object.alreadyClaim ?? false;
    message.userId = object.userId ?? "";
    message.openToClaim = object.openToClaim ?? false;
    message.errCode = object.errCode ?? 0;
    return message;
  },
};

function createBaseListGiftCode(): ListGiftCode {
  return { giftCodes: [], total: 0, offset: 0, limit: 0 };
}

export const ListGiftCode = {
  encode(message: ListGiftCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.giftCodes) {
      GiftCode.encode(v!, writer.uint32(10).fork()).ldelim();
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGiftCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGiftCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.giftCodes.push(GiftCode.decode(reader, reader.uint32()));
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGiftCode {
    return {
      giftCodes: globalThis.Array.isArray(object?.giftCodes)
        ? object.giftCodes.map((e: any) => GiftCode.fromJSON(e))
        : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: ListGiftCode): unknown {
    const obj: any = {};
    if (message.giftCodes?.length) {
      obj.giftCodes = message.giftCodes.map((e) => GiftCode.toJSON(e));
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListGiftCode>, I>>(base?: I): ListGiftCode {
    return ListGiftCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListGiftCode>, I>>(object: I): ListGiftCode {
    const message = createBaseListGiftCode();
    message.giftCodes = object.giftCodes?.map((e) => GiftCode.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseAddNotificationRequest(): AddNotificationRequest {
  return { recipientIds: [], userGroupId: 0, type: 0, title: "", content: "", senderId: "" };
}

export const AddNotificationRequest = {
  encode(message: AddNotificationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recipientIds) {
      writer.uint32(10).string(v!);
    }
    if (message.userGroupId !== 0) {
      writer.uint32(16).int64(message.userGroupId);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddNotificationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddNotificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recipientIds.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.userGroupId = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.content = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddNotificationRequest {
    return {
      recipientIds: globalThis.Array.isArray(object?.recipientIds)
        ? object.recipientIds.map((e: any) => globalThis.String(e))
        : [],
      userGroupId: isSet(object.userGroupId) ? globalThis.Number(object.userGroupId) : 0,
      type: isSet(object.type) ? typeNotificationFromJSON(object.type) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
    };
  },

  toJSON(message: AddNotificationRequest): unknown {
    const obj: any = {};
    if (message.recipientIds?.length) {
      obj.recipientIds = message.recipientIds;
    }
    if (message.userGroupId !== 0) {
      obj.userGroupId = Math.round(message.userGroupId);
    }
    if (message.type !== 0) {
      obj.type = typeNotificationToJSON(message.type);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddNotificationRequest>, I>>(base?: I): AddNotificationRequest {
    return AddNotificationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddNotificationRequest>, I>>(object: I): AddNotificationRequest {
    const message = createBaseAddNotificationRequest();
    message.recipientIds = object.recipientIds?.map((e) => e) || [];
    message.userGroupId = object.userGroupId ?? 0;
    message.type = object.type ?? 0;
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.senderId = object.senderId ?? "";
    return message;
  },
};

function createBaseNotification(): Notification {
  return {
    id: 0,
    recipientId: "",
    type: 0,
    title: "",
    content: "",
    senderId: "",
    read: false,
    createTimeUnix: 0,
    appPackage: "",
    gameId: "",
  };
}

export const Notification = {
  encode(message: Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.recipientId !== "") {
      writer.uint32(18).string(message.recipientId);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    if (message.read === true) {
      writer.uint32(56).bool(message.read);
    }
    if (message.createTimeUnix !== 0) {
      writer.uint32(64).int64(message.createTimeUnix);
    }
    if (message.appPackage !== "") {
      writer.uint32(74).string(message.appPackage);
    }
    if (message.gameId !== "") {
      writer.uint32(82).string(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotification();
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

          message.recipientId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.title = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.content = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.read = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.createTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.appPackage = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gameId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notification {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      recipientId: isSet(object.recipientId) ? globalThis.String(object.recipientId) : "",
      type: isSet(object.type) ? typeNotificationFromJSON(object.type) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
      read: isSet(object.read) ? globalThis.Boolean(object.read) : false,
      createTimeUnix: isSet(object.createTimeUnix) ? globalThis.Number(object.createTimeUnix) : 0,
      appPackage: isSet(object.appPackage) ? globalThis.String(object.appPackage) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
    };
  },

  toJSON(message: Notification): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.recipientId !== "") {
      obj.recipientId = message.recipientId;
    }
    if (message.type !== 0) {
      obj.type = typeNotificationToJSON(message.type);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.read === true) {
      obj.read = message.read;
    }
    if (message.createTimeUnix !== 0) {
      obj.createTimeUnix = Math.round(message.createTimeUnix);
    }
    if (message.appPackage !== "") {
      obj.appPackage = message.appPackage;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Notification>, I>>(base?: I): Notification {
    return Notification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Notification>, I>>(object: I): Notification {
    const message = createBaseNotification();
    message.id = object.id ?? 0;
    message.recipientId = object.recipientId ?? "";
    message.type = object.type ?? 0;
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.senderId = object.senderId ?? "";
    message.read = object.read ?? false;
    message.createTimeUnix = object.createTimeUnix ?? 0;
    message.appPackage = object.appPackage ?? "";
    message.gameId = object.gameId ?? "";
    return message;
  },
};

function createBaseNotificationRequest(): NotificationRequest {
  return { limit: 0, cusor: "", type: 0 };
}

export const NotificationRequest = {
  encode(message: NotificationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int64(message.limit);
    }
    if (message.cusor !== "") {
      writer.uint32(18).string(message.cusor);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotificationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cusor = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NotificationRequest {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      cusor: isSet(object.cusor) ? globalThis.String(object.cusor) : "",
      type: isSet(object.type) ? typeNotificationFromJSON(object.type) : 0,
    };
  },

  toJSON(message: NotificationRequest): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.cusor !== "") {
      obj.cusor = message.cusor;
    }
    if (message.type !== 0) {
      obj.type = typeNotificationToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotificationRequest>, I>>(base?: I): NotificationRequest {
    return NotificationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotificationRequest>, I>>(object: I): NotificationRequest {
    const message = createBaseNotificationRequest();
    message.limit = object.limit ?? 0;
    message.cusor = object.cusor ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseListNotification(): ListNotification {
  return { notifications: [], nextCusor: "", prevCusor: "", total: 0, offset: 0, limit: 0 };
}

export const ListNotification = {
  encode(message: ListNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCusor !== "") {
      writer.uint32(18).string(message.nextCusor);
    }
    if (message.prevCusor !== "") {
      writer.uint32(26).string(message.prevCusor);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNotification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.notifications.push(Notification.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextCusor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prevCusor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ListNotification {
    return {
      notifications: globalThis.Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => Notification.fromJSON(e))
        : [],
      nextCusor: isSet(object.nextCusor) ? globalThis.String(object.nextCusor) : "",
      prevCusor: isSet(object.prevCusor) ? globalThis.String(object.prevCusor) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: ListNotification): unknown {
    const obj: any = {};
    if (message.notifications?.length) {
      obj.notifications = message.notifications.map((e) => Notification.toJSON(e));
    }
    if (message.nextCusor !== "") {
      obj.nextCusor = message.nextCusor;
    }
    if (message.prevCusor !== "") {
      obj.prevCusor = message.prevCusor;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListNotification>, I>>(base?: I): ListNotification {
    return ListNotification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListNotification>, I>>(object: I): ListNotification {
    const message = createBaseListNotification();
    message.notifications = object.notifications?.map((e) => Notification.fromPartial(e)) || [];
    message.nextCusor = object.nextCusor ?? "";
    message.prevCusor = object.prevCusor ?? "";
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseRangeTime(): RangeTime {
  return { from: 0, to: 0 };
}

export const RangeTime = {
  encode(message: RangeTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== 0) {
      writer.uint32(8).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(16).int32(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RangeTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRangeTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.from = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.to = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RangeTime {
    return {
      from: isSet(object.from) ? globalThis.Number(object.from) : 0,
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
    };
  },

  toJSON(message: RangeTime): unknown {
    const obj: any = {};
    if (message.from !== 0) {
      obj.from = Math.round(message.from);
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RangeTime>, I>>(base?: I): RangeTime {
    return RangeTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RangeTime>, I>>(object: I): RangeTime {
    const message = createBaseRangeTime();
    message.from = object.from ?? 0;
    message.to = object.to ?? 0;
    return message;
  },
};

function createBaseInAppMessageData(): InAppMessageData {
  return { action: 0, target: "", params: {}, showTimes: [] };
}

export const InAppMessageData = {
  encode(message: InAppMessageData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    Object.entries(message.params).forEach(([key, value]) => {
      InAppMessageData_ParamsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    for (const v of message.showTimes) {
      RangeTime.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InAppMessageData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInAppMessageData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.target = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = InAppMessageData_ParamsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.params[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.showTimes.push(RangeTime.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InAppMessageData {
    return {
      action: isSet(object.action) ? inAppMessageActionFromJSON(object.action) : 0,
      target: isSet(object.target) ? globalThis.String(object.target) : "",
      params: isObject(object.params)
        ? Object.entries(object.params).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      showTimes: globalThis.Array.isArray(object?.showTimes)
        ? object.showTimes.map((e: any) => RangeTime.fromJSON(e))
        : [],
    };
  },

  toJSON(message: InAppMessageData): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = inAppMessageActionToJSON(message.action);
    }
    if (message.target !== "") {
      obj.target = message.target;
    }
    if (message.params) {
      const entries = Object.entries(message.params);
      if (entries.length > 0) {
        obj.params = {};
        entries.forEach(([k, v]) => {
          obj.params[k] = v;
        });
      }
    }
    if (message.showTimes?.length) {
      obj.showTimes = message.showTimes.map((e) => RangeTime.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InAppMessageData>, I>>(base?: I): InAppMessageData {
    return InAppMessageData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InAppMessageData>, I>>(object: I): InAppMessageData {
    const message = createBaseInAppMessageData();
    message.action = object.action ?? 0;
    message.target = object.target ?? "";
    message.params = Object.entries(object.params ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.showTimes = object.showTimes?.map((e) => RangeTime.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInAppMessageData_ParamsEntry(): InAppMessageData_ParamsEntry {
  return { key: "", value: "" };
}

export const InAppMessageData_ParamsEntry = {
  encode(message: InAppMessageData_ParamsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InAppMessageData_ParamsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInAppMessageData_ParamsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InAppMessageData_ParamsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: InAppMessageData_ParamsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InAppMessageData_ParamsEntry>, I>>(base?: I): InAppMessageData_ParamsEntry {
    return InAppMessageData_ParamsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InAppMessageData_ParamsEntry>, I>>(object: I): InAppMessageData_ParamsEntry {
    const message = createBaseInAppMessageData_ParamsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseInAppMessage(): InAppMessage {
  return {
    id: 0,
    highPriority: 0,
    groupIds: [],
    type: 0,
    data: undefined,
    startDate: 0,
    endDate: 0,
    createTimeUnix: 0,
    appPackage: "",
    gameId: "",
  };
}

export const InAppMessage = {
  encode(message: InAppMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.highPriority !== 0) {
      writer.uint32(16).int64(message.highPriority);
    }
    writer.uint32(26).fork();
    for (const v of message.groupIds) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.data !== undefined) {
      InAppMessageData.encode(message.data, writer.uint32(42).fork()).ldelim();
    }
    if (message.startDate !== 0) {
      writer.uint32(48).int64(message.startDate);
    }
    if (message.endDate !== 0) {
      writer.uint32(56).int64(message.endDate);
    }
    if (message.createTimeUnix !== 0) {
      writer.uint32(64).int64(message.createTimeUnix);
    }
    if (message.appPackage !== "") {
      writer.uint32(74).string(message.appPackage);
    }
    if (message.gameId !== "") {
      writer.uint32(82).string(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InAppMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInAppMessage();
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
          if (tag !== 16) {
            break;
          }

          message.highPriority = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag === 24) {
            message.groupIds.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupIds.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = InAppMessageData.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.startDate = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.endDate = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.createTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.appPackage = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gameId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InAppMessage {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      highPriority: isSet(object.highPriority) ? globalThis.Number(object.highPriority) : 0,
      groupIds: globalThis.Array.isArray(object?.groupIds) ? object.groupIds.map((e: any) => globalThis.Number(e)) : [],
      type: isSet(object.type) ? typeInAppMessageFromJSON(object.type) : 0,
      data: isSet(object.data) ? InAppMessageData.fromJSON(object.data) : undefined,
      startDate: isSet(object.startDate) ? globalThis.Number(object.startDate) : 0,
      endDate: isSet(object.endDate) ? globalThis.Number(object.endDate) : 0,
      createTimeUnix: isSet(object.createTimeUnix) ? globalThis.Number(object.createTimeUnix) : 0,
      appPackage: isSet(object.appPackage) ? globalThis.String(object.appPackage) : "",
      gameId: isSet(object.gameId) ? globalThis.String(object.gameId) : "",
    };
  },

  toJSON(message: InAppMessage): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.highPriority !== 0) {
      obj.highPriority = Math.round(message.highPriority);
    }
    if (message.groupIds?.length) {
      obj.groupIds = message.groupIds.map((e) => Math.round(e));
    }
    if (message.type !== 0) {
      obj.type = typeInAppMessageToJSON(message.type);
    }
    if (message.data !== undefined) {
      obj.data = InAppMessageData.toJSON(message.data);
    }
    if (message.startDate !== 0) {
      obj.startDate = Math.round(message.startDate);
    }
    if (message.endDate !== 0) {
      obj.endDate = Math.round(message.endDate);
    }
    if (message.createTimeUnix !== 0) {
      obj.createTimeUnix = Math.round(message.createTimeUnix);
    }
    if (message.appPackage !== "") {
      obj.appPackage = message.appPackage;
    }
    if (message.gameId !== "") {
      obj.gameId = message.gameId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InAppMessage>, I>>(base?: I): InAppMessage {
    return InAppMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InAppMessage>, I>>(object: I): InAppMessage {
    const message = createBaseInAppMessage();
    message.id = object.id ?? 0;
    message.highPriority = object.highPriority ?? 0;
    message.groupIds = object.groupIds?.map((e) => e) || [];
    message.type = object.type ?? 0;
    message.data = (object.data !== undefined && object.data !== null)
      ? InAppMessageData.fromPartial(object.data)
      : undefined;
    message.startDate = object.startDate ?? 0;
    message.endDate = object.endDate ?? 0;
    message.createTimeUnix = object.createTimeUnix ?? 0;
    message.appPackage = object.appPackage ?? "";
    message.gameId = object.gameId ?? "";
    return message;
  },
};

function createBaseInAppMessageRequest(): InAppMessageRequest {
  return { limit: 0, cusor: "", type: 0 };
}

export const InAppMessageRequest = {
  encode(message: InAppMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int64(message.limit);
    }
    if (message.cusor !== "") {
      writer.uint32(18).string(message.cusor);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InAppMessageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInAppMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cusor = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InAppMessageRequest {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      cusor: isSet(object.cusor) ? globalThis.String(object.cusor) : "",
      type: isSet(object.type) ? typeInAppMessageFromJSON(object.type) : 0,
    };
  },

  toJSON(message: InAppMessageRequest): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.cusor !== "") {
      obj.cusor = message.cusor;
    }
    if (message.type !== 0) {
      obj.type = typeInAppMessageToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InAppMessageRequest>, I>>(base?: I): InAppMessageRequest {
    return InAppMessageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InAppMessageRequest>, I>>(object: I): InAppMessageRequest {
    const message = createBaseInAppMessageRequest();
    message.limit = object.limit ?? 0;
    message.cusor = object.cusor ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseListInAppMessage(): ListInAppMessage {
  return { inAppMessages: [], nextCusor: "", prevCusor: "", total: 0, offset: 0, limit: 0 };
}

export const ListInAppMessage = {
  encode(message: ListInAppMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inAppMessages) {
      InAppMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextCusor !== "") {
      writer.uint32(18).string(message.nextCusor);
    }
    if (message.prevCusor !== "") {
      writer.uint32(26).string(message.prevCusor);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    if (message.offset !== 0) {
      writer.uint32(40).int64(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(48).int64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInAppMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInAppMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inAppMessages.push(InAppMessage.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextCusor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prevCusor = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ListInAppMessage {
    return {
      inAppMessages: globalThis.Array.isArray(object?.inAppMessages)
        ? object.inAppMessages.map((e: any) => InAppMessage.fromJSON(e))
        : [],
      nextCusor: isSet(object.nextCusor) ? globalThis.String(object.nextCusor) : "",
      prevCusor: isSet(object.prevCusor) ? globalThis.String(object.prevCusor) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: ListInAppMessage): unknown {
    const obj: any = {};
    if (message.inAppMessages?.length) {
      obj.inAppMessages = message.inAppMessages.map((e) => InAppMessage.toJSON(e));
    }
    if (message.nextCusor !== "") {
      obj.nextCusor = message.nextCusor;
    }
    if (message.prevCusor !== "") {
      obj.prevCusor = message.prevCusor;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<ListInAppMessage>, I>>(base?: I): ListInAppMessage {
    return ListInAppMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListInAppMessage>, I>>(object: I): ListInAppMessage {
    const message = createBaseListInAppMessage();
    message.inAppMessages = object.inAppMessages?.map((e) => InAppMessage.fromPartial(e)) || [];
    message.nextCusor = object.nextCusor ?? "";
    message.prevCusor = object.prevCusor ?? "";
    message.total = object.total ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseDefaultResponse(): DefaultResponse {
  return { message: "", code: "", status: "" };
}

export const DefaultResponse = {
  encode(message: DefaultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DefaultResponse {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
    };
  },

  toJSON(message: DefaultResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DefaultResponse>, I>>(base?: I): DefaultResponse {
    return DefaultResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DefaultResponse>, I>>(object: I): DefaultResponse {
    const message = createBaseDefaultResponse();
    message.message = object.message ?? "";
    message.code = object.code ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBasePreSignPutRequest(): PreSignPutRequest {
  return { fileName: "", bucketName: "" };
}

export const PreSignPutRequest = {
  encode(message: PreSignPutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreSignPutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreSignPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fileName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucketName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PreSignPutRequest {
    return {
      fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
      bucketName: isSet(object.bucketName) ? globalThis.String(object.bucketName) : "",
    };
  },

  toJSON(message: PreSignPutRequest): unknown {
    const obj: any = {};
    if (message.fileName !== "") {
      obj.fileName = message.fileName;
    }
    if (message.bucketName !== "") {
      obj.bucketName = message.bucketName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PreSignPutRequest>, I>>(base?: I): PreSignPutRequest {
    return PreSignPutRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PreSignPutRequest>, I>>(object: I): PreSignPutRequest {
    const message = createBasePreSignPutRequest();
    message.fileName = object.fileName ?? "";
    message.bucketName = object.bucketName ?? "";
    return message;
  },
};

function createBasePreSignPutResponse(): PreSignPutResponse {
  return { url: "" };
}

export const PreSignPutResponse = {
  encode(message: PreSignPutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreSignPutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreSignPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PreSignPutResponse {
    return { url: isSet(object.url) ? globalThis.String(object.url) : "" };
  },

  toJSON(message: PreSignPutResponse): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PreSignPutResponse>, I>>(base?: I): PreSignPutResponse {
    return PreSignPutResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PreSignPutResponse>, I>>(object: I): PreSignPutResponse {
    const message = createBasePreSignPutResponse();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseReferUser(): ReferUser {
  return { id: 0, userInvitor: "", userInvitee: "", createTimeUnix: 0 };
}

export const ReferUser = {
  encode(message: ReferUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.userInvitor !== "") {
      writer.uint32(18).string(message.userInvitor);
    }
    if (message.userInvitee !== "") {
      writer.uint32(26).string(message.userInvitee);
    }
    if (message.createTimeUnix !== 0) {
      writer.uint32(32).int64(message.createTimeUnix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReferUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReferUser();
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

          message.userInvitor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userInvitee = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.createTimeUnix = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReferUser {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userInvitor: isSet(object.userInvitor) ? globalThis.String(object.userInvitor) : "",
      userInvitee: isSet(object.userInvitee) ? globalThis.String(object.userInvitee) : "",
      createTimeUnix: isSet(object.createTimeUnix) ? globalThis.Number(object.createTimeUnix) : 0,
    };
  },

  toJSON(message: ReferUser): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userInvitor !== "") {
      obj.userInvitor = message.userInvitor;
    }
    if (message.userInvitee !== "") {
      obj.userInvitee = message.userInvitee;
    }
    if (message.createTimeUnix !== 0) {
      obj.createTimeUnix = Math.round(message.createTimeUnix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReferUser>, I>>(base?: I): ReferUser {
    return ReferUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReferUser>, I>>(object: I): ReferUser {
    const message = createBaseReferUser();
    message.id = object.id ?? 0;
    message.userInvitor = object.userInvitor ?? "";
    message.userInvitee = object.userInvitee ?? "";
    message.createTimeUnix = object.createTimeUnix ?? 0;
    return message;
  },
};

function createBaseRewardReferTemplate(): RewardReferTemplate {
  return { min: 0, max: 0, rate: 0 };
}

export const RewardReferTemplate = {
  encode(message: RewardReferTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).int64(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).int64(message.max);
    }
    if (message.rate !== 0) {
      writer.uint32(29).float(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardReferTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardReferTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.rate = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardReferTemplate {
    return {
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
      rate: isSet(object.rate) ? globalThis.Number(object.rate) : 0,
    };
  },

  toJSON(message: RewardReferTemplate): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    if (message.rate !== 0) {
      obj.rate = message.rate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RewardReferTemplate>, I>>(base?: I): RewardReferTemplate {
    return RewardReferTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RewardReferTemplate>, I>>(object: I): RewardReferTemplate {
    const message = createBaseRewardReferTemplate();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.rate = object.rate ?? 0;
    return message;
  },
};

function createBaseListRewardReferTemplate(): ListRewardReferTemplate {
  return { rewardRefers: [] };
}

export const ListRewardReferTemplate = {
  encode(message: ListRewardReferTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardRefers) {
      RewardReferTemplate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRewardReferTemplate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRewardReferTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardRefers.push(RewardReferTemplate.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRewardReferTemplate {
    return {
      rewardRefers: globalThis.Array.isArray(object?.rewardRefers)
        ? object.rewardRefers.map((e: any) => RewardReferTemplate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListRewardReferTemplate): unknown {
    const obj: any = {};
    if (message.rewardRefers?.length) {
      obj.rewardRefers = message.rewardRefers.map((e) => RewardReferTemplate.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRewardReferTemplate>, I>>(base?: I): ListRewardReferTemplate {
    return ListRewardReferTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRewardReferTemplate>, I>>(object: I): ListRewardReferTemplate {
    const message = createBaseListRewardReferTemplate();
    message.rewardRefers = object.rewardRefers?.map((e) => RewardReferTemplate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRewardRefer(): RewardRefer {
  return {
    id: 0,
    userId: "",
    winAmt: 0,
    estRewardLv: 0,
    estReward: 0,
    estRateReward: 0,
    userRefers: [],
    listRewards: [],
    fromUnix: 0,
    toUnix: 0,
    totalUserRefer: 0,
    updateTimeUnix: 0,
    sendToWallet: false,
    createTimeUnix: 0,
    remainTimeResetSec: 0,
  };
}

export const RewardRefer = {
  encode(message: RewardRefer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.winAmt !== 0) {
      writer.uint32(24).int64(message.winAmt);
    }
    if (message.estRewardLv !== 0) {
      writer.uint32(32).int64(message.estRewardLv);
    }
    if (message.estReward !== 0) {
      writer.uint32(40).int64(message.estReward);
    }
    if (message.estRateReward !== 0) {
      writer.uint32(53).float(message.estRateReward);
    }
    for (const v of message.userRefers) {
      RewardRefer.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.listRewards) {
      RewardReferTemplate.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.fromUnix !== 0) {
      writer.uint32(72).int64(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      writer.uint32(80).int64(message.toUnix);
    }
    if (message.totalUserRefer !== 0) {
      writer.uint32(88).int64(message.totalUserRefer);
    }
    if (message.updateTimeUnix !== 0) {
      writer.uint32(96).int64(message.updateTimeUnix);
    }
    if (message.sendToWallet === true) {
      writer.uint32(104).bool(message.sendToWallet);
    }
    if (message.createTimeUnix !== 0) {
      writer.uint32(112).int64(message.createTimeUnix);
    }
    if (message.remainTimeResetSec !== 0) {
      writer.uint32(120).int64(message.remainTimeResetSec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardRefer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardRefer();
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

          message.winAmt = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.estRewardLv = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.estReward = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.estRateReward = reader.float();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userRefers.push(RewardRefer.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.listRewards.push(RewardReferTemplate.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.fromUnix = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.toUnix = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.totalUserRefer = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.updateTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.sendToWallet = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.createTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.remainTimeResetSec = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RewardRefer {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      winAmt: isSet(object.winAmt) ? globalThis.Number(object.winAmt) : 0,
      estRewardLv: isSet(object.estRewardLv) ? globalThis.Number(object.estRewardLv) : 0,
      estReward: isSet(object.estReward) ? globalThis.Number(object.estReward) : 0,
      estRateReward: isSet(object.estRateReward) ? globalThis.Number(object.estRateReward) : 0,
      userRefers: globalThis.Array.isArray(object?.userRefers)
        ? object.userRefers.map((e: any) => RewardRefer.fromJSON(e))
        : [],
      listRewards: globalThis.Array.isArray(object?.listRewards)
        ? object.listRewards.map((e: any) => RewardReferTemplate.fromJSON(e))
        : [],
      fromUnix: isSet(object.fromUnix) ? globalThis.Number(object.fromUnix) : 0,
      toUnix: isSet(object.toUnix) ? globalThis.Number(object.toUnix) : 0,
      totalUserRefer: isSet(object.totalUserRefer) ? globalThis.Number(object.totalUserRefer) : 0,
      updateTimeUnix: isSet(object.updateTimeUnix) ? globalThis.Number(object.updateTimeUnix) : 0,
      sendToWallet: isSet(object.sendToWallet) ? globalThis.Boolean(object.sendToWallet) : false,
      createTimeUnix: isSet(object.createTimeUnix) ? globalThis.Number(object.createTimeUnix) : 0,
      remainTimeResetSec: isSet(object.remainTimeResetSec) ? globalThis.Number(object.remainTimeResetSec) : 0,
    };
  },

  toJSON(message: RewardRefer): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.winAmt !== 0) {
      obj.winAmt = Math.round(message.winAmt);
    }
    if (message.estRewardLv !== 0) {
      obj.estRewardLv = Math.round(message.estRewardLv);
    }
    if (message.estReward !== 0) {
      obj.estReward = Math.round(message.estReward);
    }
    if (message.estRateReward !== 0) {
      obj.estRateReward = message.estRateReward;
    }
    if (message.userRefers?.length) {
      obj.userRefers = message.userRefers.map((e) => RewardRefer.toJSON(e));
    }
    if (message.listRewards?.length) {
      obj.listRewards = message.listRewards.map((e) => RewardReferTemplate.toJSON(e));
    }
    if (message.fromUnix !== 0) {
      obj.fromUnix = Math.round(message.fromUnix);
    }
    if (message.toUnix !== 0) {
      obj.toUnix = Math.round(message.toUnix);
    }
    if (message.totalUserRefer !== 0) {
      obj.totalUserRefer = Math.round(message.totalUserRefer);
    }
    if (message.updateTimeUnix !== 0) {
      obj.updateTimeUnix = Math.round(message.updateTimeUnix);
    }
    if (message.sendToWallet === true) {
      obj.sendToWallet = message.sendToWallet;
    }
    if (message.createTimeUnix !== 0) {
      obj.createTimeUnix = Math.round(message.createTimeUnix);
    }
    if (message.remainTimeResetSec !== 0) {
      obj.remainTimeResetSec = Math.round(message.remainTimeResetSec);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RewardRefer>, I>>(base?: I): RewardRefer {
    return RewardRefer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RewardRefer>, I>>(object: I): RewardRefer {
    const message = createBaseRewardRefer();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? "";
    message.winAmt = object.winAmt ?? 0;
    message.estRewardLv = object.estRewardLv ?? 0;
    message.estReward = object.estReward ?? 0;
    message.estRateReward = object.estRateReward ?? 0;
    message.userRefers = object.userRefers?.map((e) => RewardRefer.fromPartial(e)) || [];
    message.listRewards = object.listRewards?.map((e) => RewardReferTemplate.fromPartial(e)) || [];
    message.fromUnix = object.fromUnix ?? 0;
    message.toUnix = object.toUnix ?? 0;
    message.totalUserRefer = object.totalUserRefer ?? 0;
    message.updateTimeUnix = object.updateTimeUnix ?? 0;
    message.sendToWallet = object.sendToWallet ?? false;
    message.createTimeUnix = object.createTimeUnix ?? 0;
    message.remainTimeResetSec = object.remainTimeResetSec ?? 0;
    return message;
  },
};

function createBaseListRewardRefer(): ListRewardRefer {
  return { userRefers: [] };
}

export const ListRewardRefer = {
  encode(message: ListRewardRefer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userRefers) {
      RewardRefer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRewardRefer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRewardRefer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userRefers.push(RewardRefer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRewardRefer {
    return {
      userRefers: globalThis.Array.isArray(object?.userRefers)
        ? object.userRefers.map((e: any) => RewardRefer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListRewardRefer): unknown {
    const obj: any = {};
    if (message.userRefers?.length) {
      obj.userRefers = message.userRefers.map((e) => RewardRefer.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListRewardRefer>, I>>(base?: I): ListRewardRefer {
    return ListRewardRefer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListRewardRefer>, I>>(object: I): ListRewardRefer {
    const message = createBaseListRewardRefer();
    message.userRefers = object.userRefers?.map((e) => RewardRefer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHistoryRewardRequest(): HistoryRewardRequest {
  return { userId: "", time: 0, from: 0, to: 0 };
}

export const HistoryRewardRequest = {
  encode(message: HistoryRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    if (message.from !== 0) {
      writer.uint32(24).int64(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(32).int64(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoryRewardRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoryRewardRequest();
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

          message.time = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.from = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.to = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoryRewardRequest {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      time: isSet(object.time) ? historyRewardTimeFromJSON(object.time) : 0,
      from: isSet(object.from) ? globalThis.Number(object.from) : 0,
      to: isSet(object.to) ? globalThis.Number(object.to) : 0,
    };
  },

  toJSON(message: HistoryRewardRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.time !== 0) {
      obj.time = historyRewardTimeToJSON(message.time);
    }
    if (message.from !== 0) {
      obj.from = Math.round(message.from);
    }
    if (message.to !== 0) {
      obj.to = Math.round(message.to);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HistoryRewardRequest>, I>>(base?: I): HistoryRewardRequest {
    return HistoryRewardRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HistoryRewardRequest>, I>>(object: I): HistoryRewardRequest {
    const message = createBaseHistoryRewardRequest();
    message.userId = object.userId ?? "";
    message.time = object.time ?? 0;
    message.from = object.from ?? 0;
    message.to = object.to ?? 0;
    return message;
  },
};

function createBaseWalletTransRequest(): WalletTransRequest {
  return { limit: 0, cusor: "", metaAction: "", metaBankAction: "" };
}

export const WalletTransRequest = {
  encode(message: WalletTransRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int64(message.limit);
    }
    if (message.cusor !== "") {
      writer.uint32(18).string(message.cusor);
    }
    if (message.metaAction !== "") {
      writer.uint32(26).string(message.metaAction);
    }
    if (message.metaBankAction !== "") {
      writer.uint32(34).string(message.metaBankAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WalletTransRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletTransRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cusor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metaAction = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metaBankAction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WalletTransRequest {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      cusor: isSet(object.cusor) ? globalThis.String(object.cusor) : "",
      metaAction: isSet(object.metaAction) ? globalThis.String(object.metaAction) : "",
      metaBankAction: isSet(object.metaBankAction) ? globalThis.String(object.metaBankAction) : "",
    };
  },

  toJSON(message: WalletTransRequest): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.cusor !== "") {
      obj.cusor = message.cusor;
    }
    if (message.metaAction !== "") {
      obj.metaAction = message.metaAction;
    }
    if (message.metaBankAction !== "") {
      obj.metaBankAction = message.metaBankAction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WalletTransRequest>, I>>(base?: I): WalletTransRequest {
    return WalletTransRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WalletTransRequest>, I>>(object: I): WalletTransRequest {
    const message = createBaseWalletTransRequest();
    message.limit = object.limit ?? 0;
    message.cusor = object.cusor ?? "";
    message.metaAction = object.metaAction ?? "";
    message.metaBankAction = object.metaBankAction ?? "";
    return message;
  },
};

function createBaseError(): Error {
  return { code: 0, error: "" };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int64(message.code);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.code = object.code ?? 0;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseRequest(): Request {
  return { userId: "", body: "" };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
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

          message.body = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : "",
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.userId = object.userId ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseResponse(): Response {
  return { body: "", errorMessage: "" };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== "") {
      writer.uint32(10).string(message.body);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.body = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.body = object.body ?? "";
    message.errorMessage = object.errorMessage ?? "";
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
