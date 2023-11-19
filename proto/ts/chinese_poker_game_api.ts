/* eslint-disable */

export const protobufPackage = "api";

export enum CardStatus {
  STATUS_HOLD = 0,
  STATUS_UNHOLD = 1,
  UNRECOGNIZED = -1,
}

export enum CardSuit {
  SUIT_UNSPECIFIED = 0,
  SUIT_HEARTS = 1,
  SUIT_DIAMONDS = 2,
  SUIT_CLUBS = 3,
  SUIT_SPADES = 4,
  UNRECOGNIZED = -1,
}

export enum CardRank {
  RANK_UNSPECIFIED = 0,
  RANK_A = 1,
  RANK_2 = 2,
  RANK_3 = 3,
  RANK_4 = 4,
  RANK_5 = 5,
  RANK_6 = 6,
  RANK_7 = 7,
  RANK_8 = 8,
  RANK_9 = 9,
  RANK_10 = 10,
  RANK_J = 11,
  RANK_Q = 12,
  RANK_K = 13,
  UNRECOGNIZED = -1,
}

export enum ChoiceCode {
  /** CHOICE_UNSPECIFIED - No choice specified. Unused. */
  CHOICE_UNSPECIFIED = 0,
  CHOICE_STAND = 1,
  CHOICE_HIT = 2,
  UNRECOGNIZED = -1,
}

/** The complete set of opcodes used for communication between clients and server. */
export enum OpCodeRequest {
  /** OPCODE_UNSPECIFIED - No opcode specified. Unused. */
  OPCODE_UNSPECIFIED = 0,
  /** OPCODE_REQUEST_NEW_GAME - New game round starting. */
  OPCODE_REQUEST_NEW_GAME = 1,
  /** OPCODE_REQUEST_LEAVE_GAME - Request leave game */
  OPCODE_REQUEST_LEAVE_GAME = 3,
  OPCODE_REQUEST_COMBINE_CARDS = 4,
  /** OPCODE_REQUEST_SHOW_CARDS - message Organize */
  OPCODE_REQUEST_SHOW_CARDS = 5,
  /** OPCODE_REQUEST_DECLARE_CARDS - message Organize */
  OPCODE_REQUEST_DECLARE_CARDS = 6,
  /** OPCODE_USER_INTERACT_CARDS - message noti user move card */
  OPCODE_USER_INTERACT_CARDS = 7,
  OPCODE_REQUEST_BET = 8,
  /** OPCODE_REQUEST_USER_IN_TABLE - get table info */
  OPCODE_REQUEST_USER_IN_TABLE = 9,
  /** OPCODE_REQUEST_INFO_TABLE -  */
  OPCODE_REQUEST_INFO_TABLE = 10,
  /** OPCODE_REQUEST_HISTORY_RESULT -  */
  OPCODE_REQUEST_HISTORY_RESULT = 11,
  OPCODE_REQUEST_SPIN = 12,
  OPCODE_REQUEST_BUY_SIXIANG_GEM = 13,
  UNRECOGNIZED = -1,
}

/** The complete set of opcodes used for communication between clients and server. */
export enum OpCodeUpdate {
  OPCODE_UPDATE_UNSPECIFIED = 0,
  /** OPCODE_UPDATE_TABLE - message UpdateTable */
  OPCODE_UPDATE_TABLE = 1,
  /** OPCODE_UPDATE_DEAL - message UpdateDeal */
  OPCODE_UPDATE_DEAL = 2,
  /** OPCODE_UPDATE_FINISH - message UpdateFinish */
  OPCODE_UPDATE_FINISH = 3,
  /** OPCODE_UPDATE_REJECTED - Request was rejected. */
  OPCODE_UPDATE_REJECTED = 4,
  /** OPCODE_UPDATE_GAME_STATE - Update game state */
  OPCODE_UPDATE_GAME_STATE = 5,
  /** OPCODE_UPDATE_CARD_STATE - update card state/combine, show, declare */
  OPCODE_UPDATE_CARD_STATE = 6,
  OPCODE_UPDATE_WALLET = 7,
  OPCODE_KICK_OFF_THE_TABLE = 8,
  OPCODE_UPDATE_USER_INFO = 9,
  OPCODE_USER_IN_TABLE_INFO = 10,
  OPCODE_ERROR = 11,
  OPCODE_BUY_SIXIANG_GEM = 13,
  UNRECOGNIZED = -1,
}

export enum GameState {
  GameStateUnknown = 0,
  GameStateIdle = 1,
  GameStateMatching = 2,
  GameStatePreparing = 3,
  GameStatePlay = 4,
  GameStateReward = 5,
  GameStateFinish = 6,
  UNRECOGNIZED = -1,
}

export enum CardEvent {
  COMBINE = 0,
  SHOW = 1,
  DECLARE = 2,
  UNRECOGNIZED = -1,
}

export enum HandRanking {
  StraightFlush = 0,
  FourOfAKind = 1,
  FullHouse = 2,
  Flush = 3,
  Straight = 4,
  ThreeOfAKind = 5,
  TwoPairs = 6,
  Pair = 7,
  HighCard = 8,
  NaturalThreeStraights = 101,
  NaturalThreeOfFlushes = 102,
  NaturalSixPairs = 103,
  NaturalFullColors = 104,
  NaturalDragon = 105,
  NaturalCleanDragon = 106,
  UNRECOGNIZED = -1,
}

export enum HandBonusType {
  None = 0,
  MisSet = 1,
  Scoop = 2,
  ScoopAll = 3,
  BonusFullHouseMidHand = 101,
  BonusThreeOfAKindFrontHand = 102,
  BonusFourOfAKindBackHand = 103,
  BonusStraightFlushBackHand = 104,
  BonusFourOfAKindMidHand = 105,
  BonusStraightFlushMidHand = 106,
  BonusNaturalThreeStraights = 201,
  BonusNaturalThreeOfFlushes = 202,
  BonusNaturalSixPairs = 203,
  BonusNaturalFullColors = 204,
  BonusNaturalDragon = 205,
  BonusNaturalCleanDragon = 206,
  UNRECOGNIZED = -1,
}

export enum PointType {
  Point_Normal = 0,
  Point_Mis_Set = -1,
  Point_Natural = 1,
}

/** The card */
export interface Card {
  rank: CardRank;
  suit: CardSuit;
  status: CardStatus;
}

export interface ListCard {
  cards: Card[];
}

/** Message data sent by client to server representing the cards was organize. */
export interface NewGame {
}

/** Message data sent by client to server representing the cards was organize. */
export interface Organize {
  /** The current state of the cards. */
  cards: ListCard | undefined;
}

/** Message data sent by server to clients representing the joining or leaving of presence */
export interface UpdateTable {
  players: Player[];
  playingPlayers: Player[];
  joinPlayers: Player[];
  leavePlayers: Player[];
  /** chip bet info */
  bet: number;
  /** min level vip require join room */
  vip: number;
  /** timestamp play game */
  timePlay: number;
  /** remain time to end game */
  remainTime: number;
  gameState: GameState;
  jpTreasure: Jackpot | undefined;
}

export interface PresenceCards {
  presence: string;
  cards: Card[];
}

/** Complete game round with winner announcement. */
export interface UpdateDeal {
  presenceCard: PresenceCards | undefined;
}

export interface UpdateGameState {
  state: GameState;
  countDown: number;
  arrangeCard: ArrangeCard | undefined;
  presenceCards: PresenceCards[];
}

export interface ArrangeCard {
  Presence: string;
  cardEvent: CardEvent;
}

export interface HandBonus {
  win: string;
  lose: string;
  type: HandBonusType;
  factor: number;
}

export interface HandResult {
  ranking: HandRanking;
  point: number;
  lpoint: number;
}

export interface PointResult {
  front: HandResult | undefined;
  middle: HandResult | undefined;
  back: HandResult | undefined;
  natural: HandResult | undefined;
  type: PointType;
}

export interface ScoreResult {
  frontFactor: number;
  middleFactor: number;
  backFactor: number;
  frontBonusFactor: number;
  middleBonusFactor: number;
  backBonusFactor: number;
  naturalFactor: number;
  /** mis set, scoop, scoop all */
  bonusFactor: number;
  scoop: number;
  numHandWin: number;
  totalFactor: number;
}

export interface ComparisonResult {
  userId: string;
  scoreResult: ScoreResult | undefined;
  pointResult: PointResult | undefined;
}

export interface UpdateFinish {
  results: ComparisonResult[];
  bonuses: HandBonus[];
  jackpot: Jackpot | undefined;
  jpTreasure: Jackpot | undefined;
}

export interface BalanceUpdate {
  userId: string;
  amountChipBefore: number;
  amountChipCurrent: number;
  amountChipAdd: number;
}

export interface BalanceResult {
  updates: BalanceUpdate[];
  jackpot: Jackpot | undefined;
}

export interface Player {
  id: string;
  userName: string;
  wallet: string;
  isPlaying: boolean;
  cardStatus: CardStatus;
  cards: ListCard | undefined;
  vipLevel: number;
  avatarId: string;
}

export interface Jackpot {
  id: number;
  userId: string;
  gameCode: string;
  chips: number;
  createTimeUnix: number;
}
