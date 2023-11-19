/* eslint-disable */
import type { Card } from "./chinese_poker_game_api";

export const protobufPackage = "api";

/** status for each hand, user can have maximum 2 hand ( by spliting ) */
export enum BlackjackHandType {
  BLACKJACK_HAND_TYPE_UNSPECIFIED = 0,
  BLACKJACK_HAND_TYPE_BUSTED = 1,
  BLACKJACK_HAND_TYPE_NORMAL = 2,
  BLACKJACK_HAND_TYPE_21P = 3,
  BLACKJACK_HAND_TYPE_BLACKJACK = 4,
  UNRECOGNIZED = -1,
}

export enum BlackjackActionCode {
  BLACKJACK_ACTION_UNSPECIFIED = 0,
  BLACKJACK_ACTION_STAY = 1,
  BLACKJACK_ACTION_HIT = 2,
  BLACKJACK_ACTION_DOUBLE = 3,
  BLACKJACK_ACTION_SPLIT = 4,
  BLACKJACK_ACTION_INSURANCE = 5,
  UNRECOGNIZED = -1,
}

export enum BlackjackBetCode {
  BLACKJACK_BET_NORMAL = 0,
  BLACKJACK_BET_REBET = 1,
  BLACKJACK_BET_DOUBLE = 2,
  UNRECOGNIZED = -1,
}

export enum BlackjackPlayerType {
  BLACKJACK_PLAYER = 0,
  BLACKJACK_BANKER = 1,
  UNRECOGNIZED = -1,
}

export enum BlackjackHandN0 {
  BLACKJACK_HAND_UNSPECIFIED = 0,
  BLACKJACK_HAND_1ST = 1,
  BLACKJACK_HAND_2ND = 2,
  UNRECOGNIZED = -1,
}

export interface BlackjackAction {
  userId: string;
  code: BlackjackActionCode;
}

export interface BlackjackBet {
  userId: string;
  chips: number;
  code: BlackjackBetCode;
}

/** is_win: -1 -> lost, 1 -> win, 0 -> tie */
export interface BlackjackBetResult {
  betAmount: number;
  winAmount: number;
  total: number;
  isWin: number;
}

export interface BlackjackPlayerBet {
  userId: string;
  insurance: number;
  first: number;
  second: number;
}

export interface BlackjackPLayerBetResult {
  userId: string;
  insurance: BlackjackBetResult | undefined;
  first: BlackjackBetResult | undefined;
  second: BlackjackBetResult | undefined;
}

/**
 * when is_banker=true, no user_id is send along
 * if is_reveal_banker_hidden_card, only all_cards is send along
 */
export interface BlackjackUpdateDeal {
  isBanker: boolean;
  isRevealBankerHiddenCard: boolean;
  userId: string;
  handN0: BlackjackHandN0;
  newCards: Card[];
  hand:
    | BlackjackPlayerHand
    | undefined;
  /** only send when user rejoin table, use it to restore the game state, one with userId = "" is banker */
  allPlayerHand: BlackjackPlayerHand[];
}

export interface BlackjackLegalActions {
  userId: string;
  actions: BlackjackActionCode[];
}

export interface BlackjackHand {
  cards: Card[];
  type: BlackjackHandType;
  point: number;
}

export interface BlackjackPlayerHand {
  userId: string;
  first: BlackjackHand | undefined;
  second: BlackjackHand | undefined;
}

/** case player have 2 hands then hand <- 0|1 else 0 */
export interface BlackjackPlayerTurn {
  isPlayer: string;
  userId: string;
  handN0: BlackjackHandN0;
}

export interface BlackjackUpdateDesk {
  isInsuranceTurnEnter: boolean;
  isNewTurn: boolean;
  inTurn: string;
  handN0: BlackjackHandN0;
  isUpdateBet: boolean;
  bet: BlackjackPlayerBet | undefined;
  isUpdateLegalAction: boolean;
  actions: BlackjackLegalActions | undefined;
  isSplitHand: boolean;
  hand: BlackjackPlayerHand | undefined;
  isBankerNotBlackjack: boolean;
  playersBet: BlackjackPlayerBet[];
}

export interface BlackjackUpdateFinish {
  betResults: BlackjackPLayerBetResult[];
}
