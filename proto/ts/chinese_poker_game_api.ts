/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "api";

export enum CardStatus {
  STATUS_HOLD = 0,
  STATUS_UNHOLD = 1,
  UNRECOGNIZED = -1,
}

export function cardStatusFromJSON(object: any): CardStatus {
  switch (object) {
    case 0:
    case "STATUS_HOLD":
      return CardStatus.STATUS_HOLD;
    case 1:
    case "STATUS_UNHOLD":
      return CardStatus.STATUS_UNHOLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardStatus.UNRECOGNIZED;
  }
}

export function cardStatusToJSON(object: CardStatus): string {
  switch (object) {
    case CardStatus.STATUS_HOLD:
      return "STATUS_HOLD";
    case CardStatus.STATUS_UNHOLD:
      return "STATUS_UNHOLD";
    case CardStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CardSuit {
  SUIT_UNSPECIFIED = 0,
  SUIT_HEARTS = 1,
  SUIT_DIAMONDS = 2,
  SUIT_CLUBS = 3,
  SUIT_SPADES = 4,
  UNRECOGNIZED = -1,
}

export function cardSuitFromJSON(object: any): CardSuit {
  switch (object) {
    case 0:
    case "SUIT_UNSPECIFIED":
      return CardSuit.SUIT_UNSPECIFIED;
    case 1:
    case "SUIT_HEARTS":
      return CardSuit.SUIT_HEARTS;
    case 2:
    case "SUIT_DIAMONDS":
      return CardSuit.SUIT_DIAMONDS;
    case 3:
    case "SUIT_CLUBS":
      return CardSuit.SUIT_CLUBS;
    case 4:
    case "SUIT_SPADES":
      return CardSuit.SUIT_SPADES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardSuit.UNRECOGNIZED;
  }
}

export function cardSuitToJSON(object: CardSuit): string {
  switch (object) {
    case CardSuit.SUIT_UNSPECIFIED:
      return "SUIT_UNSPECIFIED";
    case CardSuit.SUIT_HEARTS:
      return "SUIT_HEARTS";
    case CardSuit.SUIT_DIAMONDS:
      return "SUIT_DIAMONDS";
    case CardSuit.SUIT_CLUBS:
      return "SUIT_CLUBS";
    case CardSuit.SUIT_SPADES:
      return "SUIT_SPADES";
    case CardSuit.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function cardRankFromJSON(object: any): CardRank {
  switch (object) {
    case 0:
    case "RANK_UNSPECIFIED":
      return CardRank.RANK_UNSPECIFIED;
    case 1:
    case "RANK_A":
      return CardRank.RANK_A;
    case 2:
    case "RANK_2":
      return CardRank.RANK_2;
    case 3:
    case "RANK_3":
      return CardRank.RANK_3;
    case 4:
    case "RANK_4":
      return CardRank.RANK_4;
    case 5:
    case "RANK_5":
      return CardRank.RANK_5;
    case 6:
    case "RANK_6":
      return CardRank.RANK_6;
    case 7:
    case "RANK_7":
      return CardRank.RANK_7;
    case 8:
    case "RANK_8":
      return CardRank.RANK_8;
    case 9:
    case "RANK_9":
      return CardRank.RANK_9;
    case 10:
    case "RANK_10":
      return CardRank.RANK_10;
    case 11:
    case "RANK_J":
      return CardRank.RANK_J;
    case 12:
    case "RANK_Q":
      return CardRank.RANK_Q;
    case 13:
    case "RANK_K":
      return CardRank.RANK_K;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardRank.UNRECOGNIZED;
  }
}

export function cardRankToJSON(object: CardRank): string {
  switch (object) {
    case CardRank.RANK_UNSPECIFIED:
      return "RANK_UNSPECIFIED";
    case CardRank.RANK_A:
      return "RANK_A";
    case CardRank.RANK_2:
      return "RANK_2";
    case CardRank.RANK_3:
      return "RANK_3";
    case CardRank.RANK_4:
      return "RANK_4";
    case CardRank.RANK_5:
      return "RANK_5";
    case CardRank.RANK_6:
      return "RANK_6";
    case CardRank.RANK_7:
      return "RANK_7";
    case CardRank.RANK_8:
      return "RANK_8";
    case CardRank.RANK_9:
      return "RANK_9";
    case CardRank.RANK_10:
      return "RANK_10";
    case CardRank.RANK_J:
      return "RANK_J";
    case CardRank.RANK_Q:
      return "RANK_Q";
    case CardRank.RANK_K:
      return "RANK_K";
    case CardRank.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ChoiceCode {
  /** CHOICE_UNSPECIFIED - No choice specified. Unused. */
  CHOICE_UNSPECIFIED = 0,
  CHOICE_STAND = 1,
  CHOICE_HIT = 2,
  UNRECOGNIZED = -1,
}

export function choiceCodeFromJSON(object: any): ChoiceCode {
  switch (object) {
    case 0:
    case "CHOICE_UNSPECIFIED":
      return ChoiceCode.CHOICE_UNSPECIFIED;
    case 1:
    case "CHOICE_STAND":
      return ChoiceCode.CHOICE_STAND;
    case 2:
    case "CHOICE_HIT":
      return ChoiceCode.CHOICE_HIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChoiceCode.UNRECOGNIZED;
  }
}

export function choiceCodeToJSON(object: ChoiceCode): string {
  switch (object) {
    case ChoiceCode.CHOICE_UNSPECIFIED:
      return "CHOICE_UNSPECIFIED";
    case ChoiceCode.CHOICE_STAND:
      return "CHOICE_STAND";
    case ChoiceCode.CHOICE_HIT:
      return "CHOICE_HIT";
    case ChoiceCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function opCodeRequestFromJSON(object: any): OpCodeRequest {
  switch (object) {
    case 0:
    case "OPCODE_UNSPECIFIED":
      return OpCodeRequest.OPCODE_UNSPECIFIED;
    case 1:
    case "OPCODE_REQUEST_NEW_GAME":
      return OpCodeRequest.OPCODE_REQUEST_NEW_GAME;
    case 3:
    case "OPCODE_REQUEST_LEAVE_GAME":
      return OpCodeRequest.OPCODE_REQUEST_LEAVE_GAME;
    case 4:
    case "OPCODE_REQUEST_COMBINE_CARDS":
      return OpCodeRequest.OPCODE_REQUEST_COMBINE_CARDS;
    case 5:
    case "OPCODE_REQUEST_SHOW_CARDS":
      return OpCodeRequest.OPCODE_REQUEST_SHOW_CARDS;
    case 6:
    case "OPCODE_REQUEST_DECLARE_CARDS":
      return OpCodeRequest.OPCODE_REQUEST_DECLARE_CARDS;
    case 7:
    case "OPCODE_USER_INTERACT_CARDS":
      return OpCodeRequest.OPCODE_USER_INTERACT_CARDS;
    case 8:
    case "OPCODE_REQUEST_BET":
      return OpCodeRequest.OPCODE_REQUEST_BET;
    case 9:
    case "OPCODE_REQUEST_USER_IN_TABLE":
      return OpCodeRequest.OPCODE_REQUEST_USER_IN_TABLE;
    case 10:
    case "OPCODE_REQUEST_INFO_TABLE":
      return OpCodeRequest.OPCODE_REQUEST_INFO_TABLE;
    case 11:
    case "OPCODE_REQUEST_HISTORY_RESULT":
      return OpCodeRequest.OPCODE_REQUEST_HISTORY_RESULT;
    case 12:
    case "OPCODE_REQUEST_SPIN":
      return OpCodeRequest.OPCODE_REQUEST_SPIN;
    case 13:
    case "OPCODE_REQUEST_BUY_SIXIANG_GEM":
      return OpCodeRequest.OPCODE_REQUEST_BUY_SIXIANG_GEM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpCodeRequest.UNRECOGNIZED;
  }
}

export function opCodeRequestToJSON(object: OpCodeRequest): string {
  switch (object) {
    case OpCodeRequest.OPCODE_UNSPECIFIED:
      return "OPCODE_UNSPECIFIED";
    case OpCodeRequest.OPCODE_REQUEST_NEW_GAME:
      return "OPCODE_REQUEST_NEW_GAME";
    case OpCodeRequest.OPCODE_REQUEST_LEAVE_GAME:
      return "OPCODE_REQUEST_LEAVE_GAME";
    case OpCodeRequest.OPCODE_REQUEST_COMBINE_CARDS:
      return "OPCODE_REQUEST_COMBINE_CARDS";
    case OpCodeRequest.OPCODE_REQUEST_SHOW_CARDS:
      return "OPCODE_REQUEST_SHOW_CARDS";
    case OpCodeRequest.OPCODE_REQUEST_DECLARE_CARDS:
      return "OPCODE_REQUEST_DECLARE_CARDS";
    case OpCodeRequest.OPCODE_USER_INTERACT_CARDS:
      return "OPCODE_USER_INTERACT_CARDS";
    case OpCodeRequest.OPCODE_REQUEST_BET:
      return "OPCODE_REQUEST_BET";
    case OpCodeRequest.OPCODE_REQUEST_USER_IN_TABLE:
      return "OPCODE_REQUEST_USER_IN_TABLE";
    case OpCodeRequest.OPCODE_REQUEST_INFO_TABLE:
      return "OPCODE_REQUEST_INFO_TABLE";
    case OpCodeRequest.OPCODE_REQUEST_HISTORY_RESULT:
      return "OPCODE_REQUEST_HISTORY_RESULT";
    case OpCodeRequest.OPCODE_REQUEST_SPIN:
      return "OPCODE_REQUEST_SPIN";
    case OpCodeRequest.OPCODE_REQUEST_BUY_SIXIANG_GEM:
      return "OPCODE_REQUEST_BUY_SIXIANG_GEM";
    case OpCodeRequest.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
  OPCODE_UPDATE_USER_MOVE = 14,
  UNRECOGNIZED = -1,
}

export function opCodeUpdateFromJSON(object: any): OpCodeUpdate {
  switch (object) {
    case 0:
    case "OPCODE_UPDATE_UNSPECIFIED":
      return OpCodeUpdate.OPCODE_UPDATE_UNSPECIFIED;
    case 1:
    case "OPCODE_UPDATE_TABLE":
      return OpCodeUpdate.OPCODE_UPDATE_TABLE;
    case 2:
    case "OPCODE_UPDATE_DEAL":
      return OpCodeUpdate.OPCODE_UPDATE_DEAL;
    case 3:
    case "OPCODE_UPDATE_FINISH":
      return OpCodeUpdate.OPCODE_UPDATE_FINISH;
    case 4:
    case "OPCODE_UPDATE_REJECTED":
      return OpCodeUpdate.OPCODE_UPDATE_REJECTED;
    case 5:
    case "OPCODE_UPDATE_GAME_STATE":
      return OpCodeUpdate.OPCODE_UPDATE_GAME_STATE;
    case 6:
    case "OPCODE_UPDATE_CARD_STATE":
      return OpCodeUpdate.OPCODE_UPDATE_CARD_STATE;
    case 7:
    case "OPCODE_UPDATE_WALLET":
      return OpCodeUpdate.OPCODE_UPDATE_WALLET;
    case 8:
    case "OPCODE_KICK_OFF_THE_TABLE":
      return OpCodeUpdate.OPCODE_KICK_OFF_THE_TABLE;
    case 9:
    case "OPCODE_UPDATE_USER_INFO":
      return OpCodeUpdate.OPCODE_UPDATE_USER_INFO;
    case 10:
    case "OPCODE_USER_IN_TABLE_INFO":
      return OpCodeUpdate.OPCODE_USER_IN_TABLE_INFO;
    case 11:
    case "OPCODE_ERROR":
      return OpCodeUpdate.OPCODE_ERROR;
    case 13:
    case "OPCODE_BUY_SIXIANG_GEM":
      return OpCodeUpdate.OPCODE_BUY_SIXIANG_GEM;
    case 14:
    case "OPCODE_UPDATE_USER_MOVE":
      return OpCodeUpdate.OPCODE_UPDATE_USER_MOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OpCodeUpdate.UNRECOGNIZED;
  }
}

export function opCodeUpdateToJSON(object: OpCodeUpdate): string {
  switch (object) {
    case OpCodeUpdate.OPCODE_UPDATE_UNSPECIFIED:
      return "OPCODE_UPDATE_UNSPECIFIED";
    case OpCodeUpdate.OPCODE_UPDATE_TABLE:
      return "OPCODE_UPDATE_TABLE";
    case OpCodeUpdate.OPCODE_UPDATE_DEAL:
      return "OPCODE_UPDATE_DEAL";
    case OpCodeUpdate.OPCODE_UPDATE_FINISH:
      return "OPCODE_UPDATE_FINISH";
    case OpCodeUpdate.OPCODE_UPDATE_REJECTED:
      return "OPCODE_UPDATE_REJECTED";
    case OpCodeUpdate.OPCODE_UPDATE_GAME_STATE:
      return "OPCODE_UPDATE_GAME_STATE";
    case OpCodeUpdate.OPCODE_UPDATE_CARD_STATE:
      return "OPCODE_UPDATE_CARD_STATE";
    case OpCodeUpdate.OPCODE_UPDATE_WALLET:
      return "OPCODE_UPDATE_WALLET";
    case OpCodeUpdate.OPCODE_KICK_OFF_THE_TABLE:
      return "OPCODE_KICK_OFF_THE_TABLE";
    case OpCodeUpdate.OPCODE_UPDATE_USER_INFO:
      return "OPCODE_UPDATE_USER_INFO";
    case OpCodeUpdate.OPCODE_USER_IN_TABLE_INFO:
      return "OPCODE_USER_IN_TABLE_INFO";
    case OpCodeUpdate.OPCODE_ERROR:
      return "OPCODE_ERROR";
    case OpCodeUpdate.OPCODE_BUY_SIXIANG_GEM:
      return "OPCODE_BUY_SIXIANG_GEM";
    case OpCodeUpdate.OPCODE_UPDATE_USER_MOVE:
      return "OPCODE_UPDATE_USER_MOVE";
    case OpCodeUpdate.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function gameStateFromJSON(object: any): GameState {
  switch (object) {
    case 0:
    case "GameStateUnknown":
      return GameState.GameStateUnknown;
    case 1:
    case "GameStateIdle":
      return GameState.GameStateIdle;
    case 2:
    case "GameStateMatching":
      return GameState.GameStateMatching;
    case 3:
    case "GameStatePreparing":
      return GameState.GameStatePreparing;
    case 4:
    case "GameStatePlay":
      return GameState.GameStatePlay;
    case 5:
    case "GameStateReward":
      return GameState.GameStateReward;
    case 6:
    case "GameStateFinish":
      return GameState.GameStateFinish;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GameState.UNRECOGNIZED;
  }
}

export function gameStateToJSON(object: GameState): string {
  switch (object) {
    case GameState.GameStateUnknown:
      return "GameStateUnknown";
    case GameState.GameStateIdle:
      return "GameStateIdle";
    case GameState.GameStateMatching:
      return "GameStateMatching";
    case GameState.GameStatePreparing:
      return "GameStatePreparing";
    case GameState.GameStatePlay:
      return "GameStatePlay";
    case GameState.GameStateReward:
      return "GameStateReward";
    case GameState.GameStateFinish:
      return "GameStateFinish";
    case GameState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CardEvent {
  COMBINE = 0,
  SHOW = 1,
  DECLARE = 2,
  UNRECOGNIZED = -1,
}

export function cardEventFromJSON(object: any): CardEvent {
  switch (object) {
    case 0:
    case "COMBINE":
      return CardEvent.COMBINE;
    case 1:
    case "SHOW":
      return CardEvent.SHOW;
    case 2:
    case "DECLARE":
      return CardEvent.DECLARE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CardEvent.UNRECOGNIZED;
  }
}

export function cardEventToJSON(object: CardEvent): string {
  switch (object) {
    case CardEvent.COMBINE:
      return "COMBINE";
    case CardEvent.SHOW:
      return "SHOW";
    case CardEvent.DECLARE:
      return "DECLARE";
    case CardEvent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function handRankingFromJSON(object: any): HandRanking {
  switch (object) {
    case 0:
    case "StraightFlush":
      return HandRanking.StraightFlush;
    case 1:
    case "FourOfAKind":
      return HandRanking.FourOfAKind;
    case 2:
    case "FullHouse":
      return HandRanking.FullHouse;
    case 3:
    case "Flush":
      return HandRanking.Flush;
    case 4:
    case "Straight":
      return HandRanking.Straight;
    case 5:
    case "ThreeOfAKind":
      return HandRanking.ThreeOfAKind;
    case 6:
    case "TwoPairs":
      return HandRanking.TwoPairs;
    case 7:
    case "Pair":
      return HandRanking.Pair;
    case 8:
    case "HighCard":
      return HandRanking.HighCard;
    case 101:
    case "NaturalThreeStraights":
      return HandRanking.NaturalThreeStraights;
    case 102:
    case "NaturalThreeOfFlushes":
      return HandRanking.NaturalThreeOfFlushes;
    case 103:
    case "NaturalSixPairs":
      return HandRanking.NaturalSixPairs;
    case 104:
    case "NaturalFullColors":
      return HandRanking.NaturalFullColors;
    case 105:
    case "NaturalDragon":
      return HandRanking.NaturalDragon;
    case 106:
    case "NaturalCleanDragon":
      return HandRanking.NaturalCleanDragon;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HandRanking.UNRECOGNIZED;
  }
}

export function handRankingToJSON(object: HandRanking): string {
  switch (object) {
    case HandRanking.StraightFlush:
      return "StraightFlush";
    case HandRanking.FourOfAKind:
      return "FourOfAKind";
    case HandRanking.FullHouse:
      return "FullHouse";
    case HandRanking.Flush:
      return "Flush";
    case HandRanking.Straight:
      return "Straight";
    case HandRanking.ThreeOfAKind:
      return "ThreeOfAKind";
    case HandRanking.TwoPairs:
      return "TwoPairs";
    case HandRanking.Pair:
      return "Pair";
    case HandRanking.HighCard:
      return "HighCard";
    case HandRanking.NaturalThreeStraights:
      return "NaturalThreeStraights";
    case HandRanking.NaturalThreeOfFlushes:
      return "NaturalThreeOfFlushes";
    case HandRanking.NaturalSixPairs:
      return "NaturalSixPairs";
    case HandRanking.NaturalFullColors:
      return "NaturalFullColors";
    case HandRanking.NaturalDragon:
      return "NaturalDragon";
    case HandRanking.NaturalCleanDragon:
      return "NaturalCleanDragon";
    case HandRanking.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function handBonusTypeFromJSON(object: any): HandBonusType {
  switch (object) {
    case 0:
    case "None":
      return HandBonusType.None;
    case 1:
    case "MisSet":
      return HandBonusType.MisSet;
    case 2:
    case "Scoop":
      return HandBonusType.Scoop;
    case 3:
    case "ScoopAll":
      return HandBonusType.ScoopAll;
    case 101:
    case "BonusFullHouseMidHand":
      return HandBonusType.BonusFullHouseMidHand;
    case 102:
    case "BonusThreeOfAKindFrontHand":
      return HandBonusType.BonusThreeOfAKindFrontHand;
    case 103:
    case "BonusFourOfAKindBackHand":
      return HandBonusType.BonusFourOfAKindBackHand;
    case 104:
    case "BonusStraightFlushBackHand":
      return HandBonusType.BonusStraightFlushBackHand;
    case 105:
    case "BonusFourOfAKindMidHand":
      return HandBonusType.BonusFourOfAKindMidHand;
    case 106:
    case "BonusStraightFlushMidHand":
      return HandBonusType.BonusStraightFlushMidHand;
    case 201:
    case "BonusNaturalThreeStraights":
      return HandBonusType.BonusNaturalThreeStraights;
    case 202:
    case "BonusNaturalThreeOfFlushes":
      return HandBonusType.BonusNaturalThreeOfFlushes;
    case 203:
    case "BonusNaturalSixPairs":
      return HandBonusType.BonusNaturalSixPairs;
    case 204:
    case "BonusNaturalFullColors":
      return HandBonusType.BonusNaturalFullColors;
    case 205:
    case "BonusNaturalDragon":
      return HandBonusType.BonusNaturalDragon;
    case 206:
    case "BonusNaturalCleanDragon":
      return HandBonusType.BonusNaturalCleanDragon;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HandBonusType.UNRECOGNIZED;
  }
}

export function handBonusTypeToJSON(object: HandBonusType): string {
  switch (object) {
    case HandBonusType.None:
      return "None";
    case HandBonusType.MisSet:
      return "MisSet";
    case HandBonusType.Scoop:
      return "Scoop";
    case HandBonusType.ScoopAll:
      return "ScoopAll";
    case HandBonusType.BonusFullHouseMidHand:
      return "BonusFullHouseMidHand";
    case HandBonusType.BonusThreeOfAKindFrontHand:
      return "BonusThreeOfAKindFrontHand";
    case HandBonusType.BonusFourOfAKindBackHand:
      return "BonusFourOfAKindBackHand";
    case HandBonusType.BonusStraightFlushBackHand:
      return "BonusStraightFlushBackHand";
    case HandBonusType.BonusFourOfAKindMidHand:
      return "BonusFourOfAKindMidHand";
    case HandBonusType.BonusStraightFlushMidHand:
      return "BonusStraightFlushMidHand";
    case HandBonusType.BonusNaturalThreeStraights:
      return "BonusNaturalThreeStraights";
    case HandBonusType.BonusNaturalThreeOfFlushes:
      return "BonusNaturalThreeOfFlushes";
    case HandBonusType.BonusNaturalSixPairs:
      return "BonusNaturalSixPairs";
    case HandBonusType.BonusNaturalFullColors:
      return "BonusNaturalFullColors";
    case HandBonusType.BonusNaturalDragon:
      return "BonusNaturalDragon";
    case HandBonusType.BonusNaturalCleanDragon:
      return "BonusNaturalCleanDragon";
    case HandBonusType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PointType {
  Point_Normal = 0,
  Point_Mis_Set = -1,
  Point_Natural = 1,
}

export function pointTypeFromJSON(object: any): PointType {
  switch (object) {
    case 0:
    case "Point_Normal":
      return PointType.Point_Normal;
    case -1:
    case "Point_Mis_Set":
      return PointType.Point_Mis_Set;
    case 1:
    case "Point_Natural":
      return PointType.Point_Natural;
    default:
      return PointType.Point_Mis_Set;
  }
}

export function pointTypeToJSON(object: PointType): string {
  switch (object) {
    case PointType.Point_Normal:
      return "Point_Normal";
    case PointType.Point_Mis_Set:
      return "Point_Mis_Set";
    case PointType.Point_Natural:
      return "Point_Natural";
    default:
      return "Point_Mis_Set";
  }
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

function createBaseCard(): Card {
  return { rank: 0, suit: 0, status: 0 };
}

export const Card = {
  encode(message: Card, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rank !== 0) {
      writer.uint32(8).int32(message.rank);
    }
    if (message.suit !== 0) {
      writer.uint32(16).int32(message.suit);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Card {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rank = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.suit = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Card {
    return {
      rank: isSet(object.rank) ? cardRankFromJSON(object.rank) : 0,
      suit: isSet(object.suit) ? cardSuitFromJSON(object.suit) : 0,
      status: isSet(object.status) ? cardStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Card): unknown {
    const obj: any = {};
    if (message.rank !== 0) {
      obj.rank = cardRankToJSON(message.rank);
    }
    if (message.suit !== 0) {
      obj.suit = cardSuitToJSON(message.suit);
    }
    if (message.status !== 0) {
      obj.status = cardStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Card>, I>>(base?: I): Card {
    return Card.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Card>, I>>(object: I): Card {
    const message = createBaseCard();
    message.rank = object.rank ?? 0;
    message.suit = object.suit ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseListCard(): ListCard {
  return { cards: [] };
}

export const ListCard = {
  encode(message: ListCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cards) {
      Card.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cards.push(Card.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListCard {
    return { cards: globalThis.Array.isArray(object?.cards) ? object.cards.map((e: any) => Card.fromJSON(e)) : [] };
  },

  toJSON(message: ListCard): unknown {
    const obj: any = {};
    if (message.cards?.length) {
      obj.cards = message.cards.map((e) => Card.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCard>, I>>(base?: I): ListCard {
    return ListCard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCard>, I>>(object: I): ListCard {
    const message = createBaseListCard();
    message.cards = object.cards?.map((e) => Card.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNewGame(): NewGame {
  return {};
}

export const NewGame = {
  encode(_: NewGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NewGame {
    return {};
  },

  toJSON(_: NewGame): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NewGame>, I>>(base?: I): NewGame {
    return NewGame.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NewGame>, I>>(_: I): NewGame {
    const message = createBaseNewGame();
    return message;
  },
};

function createBaseOrganize(): Organize {
  return { cards: undefined };
}

export const Organize = {
  encode(message: Organize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cards !== undefined) {
      ListCard.encode(message.cards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Organize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrganize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cards = ListCard.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Organize {
    return { cards: isSet(object.cards) ? ListCard.fromJSON(object.cards) : undefined };
  },

  toJSON(message: Organize): unknown {
    const obj: any = {};
    if (message.cards !== undefined) {
      obj.cards = ListCard.toJSON(message.cards);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Organize>, I>>(base?: I): Organize {
    return Organize.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Organize>, I>>(object: I): Organize {
    const message = createBaseOrganize();
    message.cards = (object.cards !== undefined && object.cards !== null)
      ? ListCard.fromPartial(object.cards)
      : undefined;
    return message;
  },
};

function createBaseUpdateTable(): UpdateTable {
  return {
    players: [],
    playingPlayers: [],
    joinPlayers: [],
    leavePlayers: [],
    bet: 0,
    vip: 0,
    timePlay: 0,
    remainTime: 0,
    gameState: 0,
    jpTreasure: undefined,
  };
}

export const UpdateTable = {
  encode(message: UpdateTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.playingPlayers) {
      Player.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.joinPlayers) {
      Player.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.leavePlayers) {
      Player.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.bet !== 0) {
      writer.uint32(40).int64(message.bet);
    }
    if (message.vip !== 0) {
      writer.uint32(48).int64(message.vip);
    }
    if (message.timePlay !== 0) {
      writer.uint32(56).int64(message.timePlay);
    }
    if (message.remainTime !== 0) {
      writer.uint32(64).int64(message.remainTime);
    }
    if (message.gameState !== 0) {
      writer.uint32(72).int32(message.gameState);
    }
    if (message.jpTreasure !== undefined) {
      Jackpot.encode(message.jpTreasure, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.players.push(Player.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playingPlayers.push(Player.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.joinPlayers.push(Player.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.leavePlayers.push(Player.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.bet = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.vip = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.timePlay = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.remainTime = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.gameState = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.jpTreasure = Jackpot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTable {
    return {
      players: globalThis.Array.isArray(object?.players) ? object.players.map((e: any) => Player.fromJSON(e)) : [],
      playingPlayers: globalThis.Array.isArray(object?.playingPlayers)
        ? object.playingPlayers.map((e: any) => Player.fromJSON(e))
        : [],
      joinPlayers: globalThis.Array.isArray(object?.joinPlayers)
        ? object.joinPlayers.map((e: any) => Player.fromJSON(e))
        : [],
      leavePlayers: globalThis.Array.isArray(object?.leavePlayers)
        ? object.leavePlayers.map((e: any) => Player.fromJSON(e))
        : [],
      bet: isSet(object.bet) ? globalThis.Number(object.bet) : 0,
      vip: isSet(object.vip) ? globalThis.Number(object.vip) : 0,
      timePlay: isSet(object.timePlay) ? globalThis.Number(object.timePlay) : 0,
      remainTime: isSet(object.remainTime) ? globalThis.Number(object.remainTime) : 0,
      gameState: isSet(object.gameState) ? gameStateFromJSON(object.gameState) : 0,
      jpTreasure: isSet(object.jpTreasure) ? Jackpot.fromJSON(object.jpTreasure) : undefined,
    };
  },

  toJSON(message: UpdateTable): unknown {
    const obj: any = {};
    if (message.players?.length) {
      obj.players = message.players.map((e) => Player.toJSON(e));
    }
    if (message.playingPlayers?.length) {
      obj.playingPlayers = message.playingPlayers.map((e) => Player.toJSON(e));
    }
    if (message.joinPlayers?.length) {
      obj.joinPlayers = message.joinPlayers.map((e) => Player.toJSON(e));
    }
    if (message.leavePlayers?.length) {
      obj.leavePlayers = message.leavePlayers.map((e) => Player.toJSON(e));
    }
    if (message.bet !== 0) {
      obj.bet = Math.round(message.bet);
    }
    if (message.vip !== 0) {
      obj.vip = Math.round(message.vip);
    }
    if (message.timePlay !== 0) {
      obj.timePlay = Math.round(message.timePlay);
    }
    if (message.remainTime !== 0) {
      obj.remainTime = Math.round(message.remainTime);
    }
    if (message.gameState !== 0) {
      obj.gameState = gameStateToJSON(message.gameState);
    }
    if (message.jpTreasure !== undefined) {
      obj.jpTreasure = Jackpot.toJSON(message.jpTreasure);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTable>, I>>(base?: I): UpdateTable {
    return UpdateTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTable>, I>>(object: I): UpdateTable {
    const message = createBaseUpdateTable();
    message.players = object.players?.map((e) => Player.fromPartial(e)) || [];
    message.playingPlayers = object.playingPlayers?.map((e) => Player.fromPartial(e)) || [];
    message.joinPlayers = object.joinPlayers?.map((e) => Player.fromPartial(e)) || [];
    message.leavePlayers = object.leavePlayers?.map((e) => Player.fromPartial(e)) || [];
    message.bet = object.bet ?? 0;
    message.vip = object.vip ?? 0;
    message.timePlay = object.timePlay ?? 0;
    message.remainTime = object.remainTime ?? 0;
    message.gameState = object.gameState ?? 0;
    message.jpTreasure = (object.jpTreasure !== undefined && object.jpTreasure !== null)
      ? Jackpot.fromPartial(object.jpTreasure)
      : undefined;
    return message;
  },
};

function createBasePresenceCards(): PresenceCards {
  return { presence: "", cards: [] };
}

export const PresenceCards = {
  encode(message: PresenceCards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.presence !== "") {
      writer.uint32(10).string(message.presence);
    }
    for (const v of message.cards) {
      Card.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresenceCards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresenceCards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presence = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cards.push(Card.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PresenceCards {
    return {
      presence: isSet(object.presence) ? globalThis.String(object.presence) : "",
      cards: globalThis.Array.isArray(object?.cards) ? object.cards.map((e: any) => Card.fromJSON(e)) : [],
    };
  },

  toJSON(message: PresenceCards): unknown {
    const obj: any = {};
    if (message.presence !== "") {
      obj.presence = message.presence;
    }
    if (message.cards?.length) {
      obj.cards = message.cards.map((e) => Card.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PresenceCards>, I>>(base?: I): PresenceCards {
    return PresenceCards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PresenceCards>, I>>(object: I): PresenceCards {
    const message = createBasePresenceCards();
    message.presence = object.presence ?? "";
    message.cards = object.cards?.map((e) => Card.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateDeal(): UpdateDeal {
  return { presenceCard: undefined };
}

export const UpdateDeal = {
  encode(message: UpdateDeal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.presenceCard !== undefined) {
      PresenceCards.encode(message.presenceCard, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDeal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDeal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presenceCard = PresenceCards.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDeal {
    return { presenceCard: isSet(object.presenceCard) ? PresenceCards.fromJSON(object.presenceCard) : undefined };
  },

  toJSON(message: UpdateDeal): unknown {
    const obj: any = {};
    if (message.presenceCard !== undefined) {
      obj.presenceCard = PresenceCards.toJSON(message.presenceCard);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDeal>, I>>(base?: I): UpdateDeal {
    return UpdateDeal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDeal>, I>>(object: I): UpdateDeal {
    const message = createBaseUpdateDeal();
    message.presenceCard = (object.presenceCard !== undefined && object.presenceCard !== null)
      ? PresenceCards.fromPartial(object.presenceCard)
      : undefined;
    return message;
  },
};

function createBaseUpdateGameState(): UpdateGameState {
  return { state: 0, countDown: 0, arrangeCard: undefined, presenceCards: [] };
}

export const UpdateGameState = {
  encode(message: UpdateGameState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.countDown !== 0) {
      writer.uint32(16).int64(message.countDown);
    }
    if (message.arrangeCard !== undefined) {
      ArrangeCard.encode(message.arrangeCard, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.presenceCards) {
      PresenceCards.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGameState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGameState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.countDown = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arrangeCard = ArrangeCard.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.presenceCards.push(PresenceCards.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateGameState {
    return {
      state: isSet(object.state) ? gameStateFromJSON(object.state) : 0,
      countDown: isSet(object.countDown) ? globalThis.Number(object.countDown) : 0,
      arrangeCard: isSet(object.arrangeCard) ? ArrangeCard.fromJSON(object.arrangeCard) : undefined,
      presenceCards: globalThis.Array.isArray(object?.presenceCards)
        ? object.presenceCards.map((e: any) => PresenceCards.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateGameState): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = gameStateToJSON(message.state);
    }
    if (message.countDown !== 0) {
      obj.countDown = Math.round(message.countDown);
    }
    if (message.arrangeCard !== undefined) {
      obj.arrangeCard = ArrangeCard.toJSON(message.arrangeCard);
    }
    if (message.presenceCards?.length) {
      obj.presenceCards = message.presenceCards.map((e) => PresenceCards.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateGameState>, I>>(base?: I): UpdateGameState {
    return UpdateGameState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGameState>, I>>(object: I): UpdateGameState {
    const message = createBaseUpdateGameState();
    message.state = object.state ?? 0;
    message.countDown = object.countDown ?? 0;
    message.arrangeCard = (object.arrangeCard !== undefined && object.arrangeCard !== null)
      ? ArrangeCard.fromPartial(object.arrangeCard)
      : undefined;
    message.presenceCards = object.presenceCards?.map((e) => PresenceCards.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArrangeCard(): ArrangeCard {
  return { Presence: "", cardEvent: 0 };
}

export const ArrangeCard = {
  encode(message: ArrangeCard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Presence !== "") {
      writer.uint32(10).string(message.Presence);
    }
    if (message.cardEvent !== 0) {
      writer.uint32(16).int32(message.cardEvent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrangeCard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrangeCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Presence = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cardEvent = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArrangeCard {
    return {
      Presence: isSet(object.Presence) ? globalThis.String(object.Presence) : "",
      cardEvent: isSet(object.cardEvent) ? cardEventFromJSON(object.cardEvent) : 0,
    };
  },

  toJSON(message: ArrangeCard): unknown {
    const obj: any = {};
    if (message.Presence !== "") {
      obj.Presence = message.Presence;
    }
    if (message.cardEvent !== 0) {
      obj.cardEvent = cardEventToJSON(message.cardEvent);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrangeCard>, I>>(base?: I): ArrangeCard {
    return ArrangeCard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ArrangeCard>, I>>(object: I): ArrangeCard {
    const message = createBaseArrangeCard();
    message.Presence = object.Presence ?? "";
    message.cardEvent = object.cardEvent ?? 0;
    return message;
  },
};

function createBaseHandBonus(): HandBonus {
  return { win: "", lose: "", type: 0, factor: 0 };
}

export const HandBonus = {
  encode(message: HandBonus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.win !== "") {
      writer.uint32(10).string(message.win);
    }
    if (message.lose !== "") {
      writer.uint32(18).string(message.lose);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.factor !== 0) {
      writer.uint32(32).int64(message.factor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HandBonus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandBonus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.win = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lose = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.factor = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HandBonus {
    return {
      win: isSet(object.win) ? globalThis.String(object.win) : "",
      lose: isSet(object.lose) ? globalThis.String(object.lose) : "",
      type: isSet(object.type) ? handBonusTypeFromJSON(object.type) : 0,
      factor: isSet(object.factor) ? globalThis.Number(object.factor) : 0,
    };
  },

  toJSON(message: HandBonus): unknown {
    const obj: any = {};
    if (message.win !== "") {
      obj.win = message.win;
    }
    if (message.lose !== "") {
      obj.lose = message.lose;
    }
    if (message.type !== 0) {
      obj.type = handBonusTypeToJSON(message.type);
    }
    if (message.factor !== 0) {
      obj.factor = Math.round(message.factor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandBonus>, I>>(base?: I): HandBonus {
    return HandBonus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandBonus>, I>>(object: I): HandBonus {
    const message = createBaseHandBonus();
    message.win = object.win ?? "";
    message.lose = object.lose ?? "";
    message.type = object.type ?? 0;
    message.factor = object.factor ?? 0;
    return message;
  },
};

function createBaseHandResult(): HandResult {
  return { ranking: 0, point: 0, lpoint: 0 };
}

export const HandResult = {
  encode(message: HandResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ranking !== 0) {
      writer.uint32(8).int32(message.ranking);
    }
    if (message.point !== 0) {
      writer.uint32(16).uint64(message.point);
    }
    if (message.lpoint !== 0) {
      writer.uint32(24).uint64(message.lpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HandResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ranking = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.point = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lpoint = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HandResult {
    return {
      ranking: isSet(object.ranking) ? handRankingFromJSON(object.ranking) : 0,
      point: isSet(object.point) ? globalThis.Number(object.point) : 0,
      lpoint: isSet(object.lpoint) ? globalThis.Number(object.lpoint) : 0,
    };
  },

  toJSON(message: HandResult): unknown {
    const obj: any = {};
    if (message.ranking !== 0) {
      obj.ranking = handRankingToJSON(message.ranking);
    }
    if (message.point !== 0) {
      obj.point = Math.round(message.point);
    }
    if (message.lpoint !== 0) {
      obj.lpoint = Math.round(message.lpoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandResult>, I>>(base?: I): HandResult {
    return HandResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandResult>, I>>(object: I): HandResult {
    const message = createBaseHandResult();
    message.ranking = object.ranking ?? 0;
    message.point = object.point ?? 0;
    message.lpoint = object.lpoint ?? 0;
    return message;
  },
};

function createBasePointResult(): PointResult {
  return { front: undefined, middle: undefined, back: undefined, natural: undefined, type: 0 };
}

export const PointResult = {
  encode(message: PointResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.front !== undefined) {
      HandResult.encode(message.front, writer.uint32(10).fork()).ldelim();
    }
    if (message.middle !== undefined) {
      HandResult.encode(message.middle, writer.uint32(18).fork()).ldelim();
    }
    if (message.back !== undefined) {
      HandResult.encode(message.back, writer.uint32(26).fork()).ldelim();
    }
    if (message.natural !== undefined) {
      HandResult.encode(message.natural, writer.uint32(34).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.front = HandResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.middle = HandResult.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.back = HandResult.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.natural = HandResult.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): PointResult {
    return {
      front: isSet(object.front) ? HandResult.fromJSON(object.front) : undefined,
      middle: isSet(object.middle) ? HandResult.fromJSON(object.middle) : undefined,
      back: isSet(object.back) ? HandResult.fromJSON(object.back) : undefined,
      natural: isSet(object.natural) ? HandResult.fromJSON(object.natural) : undefined,
      type: isSet(object.type) ? pointTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: PointResult): unknown {
    const obj: any = {};
    if (message.front !== undefined) {
      obj.front = HandResult.toJSON(message.front);
    }
    if (message.middle !== undefined) {
      obj.middle = HandResult.toJSON(message.middle);
    }
    if (message.back !== undefined) {
      obj.back = HandResult.toJSON(message.back);
    }
    if (message.natural !== undefined) {
      obj.natural = HandResult.toJSON(message.natural);
    }
    if (message.type !== 0) {
      obj.type = pointTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PointResult>, I>>(base?: I): PointResult {
    return PointResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PointResult>, I>>(object: I): PointResult {
    const message = createBasePointResult();
    message.front = (object.front !== undefined && object.front !== null)
      ? HandResult.fromPartial(object.front)
      : undefined;
    message.middle = (object.middle !== undefined && object.middle !== null)
      ? HandResult.fromPartial(object.middle)
      : undefined;
    message.back = (object.back !== undefined && object.back !== null)
      ? HandResult.fromPartial(object.back)
      : undefined;
    message.natural = (object.natural !== undefined && object.natural !== null)
      ? HandResult.fromPartial(object.natural)
      : undefined;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseScoreResult(): ScoreResult {
  return {
    frontFactor: 0,
    middleFactor: 0,
    backFactor: 0,
    frontBonusFactor: 0,
    middleBonusFactor: 0,
    backBonusFactor: 0,
    naturalFactor: 0,
    bonusFactor: 0,
    scoop: 0,
    numHandWin: 0,
    totalFactor: 0,
  };
}

export const ScoreResult = {
  encode(message: ScoreResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frontFactor !== 0) {
      writer.uint32(8).int64(message.frontFactor);
    }
    if (message.middleFactor !== 0) {
      writer.uint32(16).int64(message.middleFactor);
    }
    if (message.backFactor !== 0) {
      writer.uint32(24).int64(message.backFactor);
    }
    if (message.frontBonusFactor !== 0) {
      writer.uint32(32).int64(message.frontBonusFactor);
    }
    if (message.middleBonusFactor !== 0) {
      writer.uint32(40).int64(message.middleBonusFactor);
    }
    if (message.backBonusFactor !== 0) {
      writer.uint32(48).int64(message.backBonusFactor);
    }
    if (message.naturalFactor !== 0) {
      writer.uint32(56).int64(message.naturalFactor);
    }
    if (message.bonusFactor !== 0) {
      writer.uint32(64).int64(message.bonusFactor);
    }
    if (message.scoop !== 0) {
      writer.uint32(72).int64(message.scoop);
    }
    if (message.numHandWin !== 0) {
      writer.uint32(80).int32(message.numHandWin);
    }
    if (message.totalFactor !== 0) {
      writer.uint32(88).int64(message.totalFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScoreResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.frontFactor = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.middleFactor = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.backFactor = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.frontBonusFactor = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.middleBonusFactor = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.backBonusFactor = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.naturalFactor = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.bonusFactor = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.scoop = longToNumber(reader.int64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.numHandWin = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.totalFactor = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScoreResult {
    return {
      frontFactor: isSet(object.frontFactor) ? globalThis.Number(object.frontFactor) : 0,
      middleFactor: isSet(object.middleFactor) ? globalThis.Number(object.middleFactor) : 0,
      backFactor: isSet(object.backFactor) ? globalThis.Number(object.backFactor) : 0,
      frontBonusFactor: isSet(object.frontBonusFactor) ? globalThis.Number(object.frontBonusFactor) : 0,
      middleBonusFactor: isSet(object.middleBonusFactor) ? globalThis.Number(object.middleBonusFactor) : 0,
      backBonusFactor: isSet(object.backBonusFactor) ? globalThis.Number(object.backBonusFactor) : 0,
      naturalFactor: isSet(object.naturalFactor) ? globalThis.Number(object.naturalFactor) : 0,
      bonusFactor: isSet(object.bonusFactor) ? globalThis.Number(object.bonusFactor) : 0,
      scoop: isSet(object.scoop) ? globalThis.Number(object.scoop) : 0,
      numHandWin: isSet(object.numHandWin) ? globalThis.Number(object.numHandWin) : 0,
      totalFactor: isSet(object.totalFactor) ? globalThis.Number(object.totalFactor) : 0,
    };
  },

  toJSON(message: ScoreResult): unknown {
    const obj: any = {};
    if (message.frontFactor !== 0) {
      obj.frontFactor = Math.round(message.frontFactor);
    }
    if (message.middleFactor !== 0) {
      obj.middleFactor = Math.round(message.middleFactor);
    }
    if (message.backFactor !== 0) {
      obj.backFactor = Math.round(message.backFactor);
    }
    if (message.frontBonusFactor !== 0) {
      obj.frontBonusFactor = Math.round(message.frontBonusFactor);
    }
    if (message.middleBonusFactor !== 0) {
      obj.middleBonusFactor = Math.round(message.middleBonusFactor);
    }
    if (message.backBonusFactor !== 0) {
      obj.backBonusFactor = Math.round(message.backBonusFactor);
    }
    if (message.naturalFactor !== 0) {
      obj.naturalFactor = Math.round(message.naturalFactor);
    }
    if (message.bonusFactor !== 0) {
      obj.bonusFactor = Math.round(message.bonusFactor);
    }
    if (message.scoop !== 0) {
      obj.scoop = Math.round(message.scoop);
    }
    if (message.numHandWin !== 0) {
      obj.numHandWin = Math.round(message.numHandWin);
    }
    if (message.totalFactor !== 0) {
      obj.totalFactor = Math.round(message.totalFactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScoreResult>, I>>(base?: I): ScoreResult {
    return ScoreResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScoreResult>, I>>(object: I): ScoreResult {
    const message = createBaseScoreResult();
    message.frontFactor = object.frontFactor ?? 0;
    message.middleFactor = object.middleFactor ?? 0;
    message.backFactor = object.backFactor ?? 0;
    message.frontBonusFactor = object.frontBonusFactor ?? 0;
    message.middleBonusFactor = object.middleBonusFactor ?? 0;
    message.backBonusFactor = object.backBonusFactor ?? 0;
    message.naturalFactor = object.naturalFactor ?? 0;
    message.bonusFactor = object.bonusFactor ?? 0;
    message.scoop = object.scoop ?? 0;
    message.numHandWin = object.numHandWin ?? 0;
    message.totalFactor = object.totalFactor ?? 0;
    return message;
  },
};

function createBaseComparisonResult(): ComparisonResult {
  return { userId: "", scoreResult: undefined, pointResult: undefined };
}

export const ComparisonResult = {
  encode(message: ComparisonResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.scoreResult !== undefined) {
      ScoreResult.encode(message.scoreResult, writer.uint32(18).fork()).ldelim();
    }
    if (message.pointResult !== undefined) {
      PointResult.encode(message.pointResult, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComparisonResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparisonResult();
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

          message.scoreResult = ScoreResult.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pointResult = PointResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ComparisonResult {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      scoreResult: isSet(object.scoreResult) ? ScoreResult.fromJSON(object.scoreResult) : undefined,
      pointResult: isSet(object.pointResult) ? PointResult.fromJSON(object.pointResult) : undefined,
    };
  },

  toJSON(message: ComparisonResult): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.scoreResult !== undefined) {
      obj.scoreResult = ScoreResult.toJSON(message.scoreResult);
    }
    if (message.pointResult !== undefined) {
      obj.pointResult = PointResult.toJSON(message.pointResult);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ComparisonResult>, I>>(base?: I): ComparisonResult {
    return ComparisonResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ComparisonResult>, I>>(object: I): ComparisonResult {
    const message = createBaseComparisonResult();
    message.userId = object.userId ?? "";
    message.scoreResult = (object.scoreResult !== undefined && object.scoreResult !== null)
      ? ScoreResult.fromPartial(object.scoreResult)
      : undefined;
    message.pointResult = (object.pointResult !== undefined && object.pointResult !== null)
      ? PointResult.fromPartial(object.pointResult)
      : undefined;
    return message;
  },
};

function createBaseUpdateFinish(): UpdateFinish {
  return { results: [], bonuses: [], jackpot: undefined, jpTreasure: undefined };
}

export const UpdateFinish = {
  encode(message: UpdateFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      ComparisonResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bonuses) {
      HandBonus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.jackpot !== undefined) {
      Jackpot.encode(message.jackpot, writer.uint32(26).fork()).ldelim();
    }
    if (message.jpTreasure !== undefined) {
      Jackpot.encode(message.jpTreasure, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results.push(ComparisonResult.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bonuses.push(HandBonus.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jackpot = Jackpot.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.jpTreasure = Jackpot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateFinish {
    return {
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) => ComparisonResult.fromJSON(e))
        : [],
      bonuses: globalThis.Array.isArray(object?.bonuses) ? object.bonuses.map((e: any) => HandBonus.fromJSON(e)) : [],
      jackpot: isSet(object.jackpot) ? Jackpot.fromJSON(object.jackpot) : undefined,
      jpTreasure: isSet(object.jpTreasure) ? Jackpot.fromJSON(object.jpTreasure) : undefined,
    };
  },

  toJSON(message: UpdateFinish): unknown {
    const obj: any = {};
    if (message.results?.length) {
      obj.results = message.results.map((e) => ComparisonResult.toJSON(e));
    }
    if (message.bonuses?.length) {
      obj.bonuses = message.bonuses.map((e) => HandBonus.toJSON(e));
    }
    if (message.jackpot !== undefined) {
      obj.jackpot = Jackpot.toJSON(message.jackpot);
    }
    if (message.jpTreasure !== undefined) {
      obj.jpTreasure = Jackpot.toJSON(message.jpTreasure);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateFinish>, I>>(base?: I): UpdateFinish {
    return UpdateFinish.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateFinish>, I>>(object: I): UpdateFinish {
    const message = createBaseUpdateFinish();
    message.results = object.results?.map((e) => ComparisonResult.fromPartial(e)) || [];
    message.bonuses = object.bonuses?.map((e) => HandBonus.fromPartial(e)) || [];
    message.jackpot = (object.jackpot !== undefined && object.jackpot !== null)
      ? Jackpot.fromPartial(object.jackpot)
      : undefined;
    message.jpTreasure = (object.jpTreasure !== undefined && object.jpTreasure !== null)
      ? Jackpot.fromPartial(object.jpTreasure)
      : undefined;
    return message;
  },
};

function createBaseBalanceUpdate(): BalanceUpdate {
  return { userId: "", amountChipBefore: 0, amountChipCurrent: 0, amountChipAdd: 0 };
}

export const BalanceUpdate = {
  encode(message: BalanceUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.amountChipBefore !== 0) {
      writer.uint32(16).int64(message.amountChipBefore);
    }
    if (message.amountChipCurrent !== 0) {
      writer.uint32(24).int64(message.amountChipCurrent);
    }
    if (message.amountChipAdd !== 0) {
      writer.uint32(32).int64(message.amountChipAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceUpdate();
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

          message.amountChipBefore = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amountChipCurrent = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amountChipAdd = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalanceUpdate {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      amountChipBefore: isSet(object.amountChipBefore) ? globalThis.Number(object.amountChipBefore) : 0,
      amountChipCurrent: isSet(object.amountChipCurrent) ? globalThis.Number(object.amountChipCurrent) : 0,
      amountChipAdd: isSet(object.amountChipAdd) ? globalThis.Number(object.amountChipAdd) : 0,
    };
  },

  toJSON(message: BalanceUpdate): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.amountChipBefore !== 0) {
      obj.amountChipBefore = Math.round(message.amountChipBefore);
    }
    if (message.amountChipCurrent !== 0) {
      obj.amountChipCurrent = Math.round(message.amountChipCurrent);
    }
    if (message.amountChipAdd !== 0) {
      obj.amountChipAdd = Math.round(message.amountChipAdd);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalanceUpdate>, I>>(base?: I): BalanceUpdate {
    return BalanceUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalanceUpdate>, I>>(object: I): BalanceUpdate {
    const message = createBaseBalanceUpdate();
    message.userId = object.userId ?? "";
    message.amountChipBefore = object.amountChipBefore ?? 0;
    message.amountChipCurrent = object.amountChipCurrent ?? 0;
    message.amountChipAdd = object.amountChipAdd ?? 0;
    return message;
  },
};

function createBaseBalanceResult(): BalanceResult {
  return { updates: [], jackpot: undefined };
}

export const BalanceResult = {
  encode(message: BalanceResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      BalanceUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.jackpot !== undefined) {
      Jackpot.encode(message.jackpot, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.updates.push(BalanceUpdate.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jackpot = Jackpot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BalanceResult {
    return {
      updates: globalThis.Array.isArray(object?.updates)
        ? object.updates.map((e: any) => BalanceUpdate.fromJSON(e))
        : [],
      jackpot: isSet(object.jackpot) ? Jackpot.fromJSON(object.jackpot) : undefined,
    };
  },

  toJSON(message: BalanceResult): unknown {
    const obj: any = {};
    if (message.updates?.length) {
      obj.updates = message.updates.map((e) => BalanceUpdate.toJSON(e));
    }
    if (message.jackpot !== undefined) {
      obj.jackpot = Jackpot.toJSON(message.jackpot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BalanceResult>, I>>(base?: I): BalanceResult {
    return BalanceResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BalanceResult>, I>>(object: I): BalanceResult {
    const message = createBaseBalanceResult();
    message.updates = object.updates?.map((e) => BalanceUpdate.fromPartial(e)) || [];
    message.jackpot = (object.jackpot !== undefined && object.jackpot !== null)
      ? Jackpot.fromPartial(object.jackpot)
      : undefined;
    return message;
  },
};

function createBasePlayer(): Player {
  return {
    id: "",
    userName: "",
    wallet: "",
    isPlaying: false,
    cardStatus: 0,
    cards: undefined,
    vipLevel: 0,
    avatarId: "",
  };
}

export const Player = {
  encode(message: Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.wallet !== "") {
      writer.uint32(26).string(message.wallet);
    }
    if (message.isPlaying === true) {
      writer.uint32(32).bool(message.isPlaying);
    }
    if (message.cardStatus !== 0) {
      writer.uint32(40).int32(message.cardStatus);
    }
    if (message.cards !== undefined) {
      ListCard.encode(message.cards, writer.uint32(50).fork()).ldelim();
    }
    if (message.vipLevel !== 0) {
      writer.uint32(56).int64(message.vipLevel);
    }
    if (message.avatarId !== "") {
      writer.uint32(106).string(message.avatarId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayer();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wallet = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isPlaying = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.cardStatus = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cards = ListCard.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.vipLevel = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.avatarId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Player {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      wallet: isSet(object.wallet) ? globalThis.String(object.wallet) : "",
      isPlaying: isSet(object.isPlaying) ? globalThis.Boolean(object.isPlaying) : false,
      cardStatus: isSet(object.cardStatus) ? cardStatusFromJSON(object.cardStatus) : 0,
      cards: isSet(object.cards) ? ListCard.fromJSON(object.cards) : undefined,
      vipLevel: isSet(object.vipLevel) ? globalThis.Number(object.vipLevel) : 0,
      avatarId: isSet(object.avatarId) ? globalThis.String(object.avatarId) : "",
    };
  },

  toJSON(message: Player): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.wallet !== "") {
      obj.wallet = message.wallet;
    }
    if (message.isPlaying === true) {
      obj.isPlaying = message.isPlaying;
    }
    if (message.cardStatus !== 0) {
      obj.cardStatus = cardStatusToJSON(message.cardStatus);
    }
    if (message.cards !== undefined) {
      obj.cards = ListCard.toJSON(message.cards);
    }
    if (message.vipLevel !== 0) {
      obj.vipLevel = Math.round(message.vipLevel);
    }
    if (message.avatarId !== "") {
      obj.avatarId = message.avatarId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Player>, I>>(base?: I): Player {
    return Player.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Player>, I>>(object: I): Player {
    const message = createBasePlayer();
    message.id = object.id ?? "";
    message.userName = object.userName ?? "";
    message.wallet = object.wallet ?? "";
    message.isPlaying = object.isPlaying ?? false;
    message.cardStatus = object.cardStatus ?? 0;
    message.cards = (object.cards !== undefined && object.cards !== null)
      ? ListCard.fromPartial(object.cards)
      : undefined;
    message.vipLevel = object.vipLevel ?? 0;
    message.avatarId = object.avatarId ?? "";
    return message;
  },
};

function createBaseJackpot(): Jackpot {
  return { id: 0, userId: "", gameCode: "", chips: 0, createTimeUnix: 0 };
}

export const Jackpot = {
  encode(message: Jackpot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.gameCode !== "") {
      writer.uint32(26).string(message.gameCode);
    }
    if (message.chips !== 0) {
      writer.uint32(32).int64(message.chips);
    }
    if (message.createTimeUnix !== 0) {
      writer.uint32(40).int64(message.createTimeUnix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Jackpot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJackpot();
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
          if (tag !== 26) {
            break;
          }

          message.gameCode = reader.string();
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

  fromJSON(object: any): Jackpot {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      gameCode: isSet(object.gameCode) ? globalThis.String(object.gameCode) : "",
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      createTimeUnix: isSet(object.createTimeUnix) ? globalThis.Number(object.createTimeUnix) : 0,
    };
  },

  toJSON(message: Jackpot): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.gameCode !== "") {
      obj.gameCode = message.gameCode;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.createTimeUnix !== 0) {
      obj.createTimeUnix = Math.round(message.createTimeUnix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Jackpot>, I>>(base?: I): Jackpot {
    return Jackpot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Jackpot>, I>>(object: I): Jackpot {
    const message = createBaseJackpot();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? "";
    message.gameCode = object.gameCode ?? "";
    message.chips = object.chips ?? 0;
    message.createTimeUnix = object.createTimeUnix ?? 0;
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
