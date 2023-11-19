/* eslint-disable */
import type { Card } from "./chinese_poker_game_api";

export const protobufPackage = "api";

export enum BaccaratBetCell {
  BACCARAT_BET_CELL_BACCARAT_CELL_UNSPECIFIED = 0,
  BACCARAT_BET_CELL_BACCARAT_CELL_PLAYER = 1,
  BACCARAT_BET_CELL_BACCARAT_CELL_BANKER = 2,
  BACCARAT_BET_CELL_BACCARAT_CELL_TIE = 3,
  BACCARAT_BET_CELL_BACCARAT_CELL_PLAYER_PAIR = 4,
  BACCARAT_BET_CELL_BACCARAT_CELL_BANKER_PAIR = 5,
  UNRECOGNIZED = -1,
}

export enum BaccaratBetActionType {
  BACCARAT_BET_ACTION_TYPE_BACCARAT_BET_NORMAL_UNSPECIFIED = 0,
  BACCARAT_BET_ACTION_TYPE_BACCARAT_BET_REBET = 1,
  BACCARAT_BET_ACTION_TYPE_BACCARAT_BET_DOUBLE = 2,
  UNRECOGNIZED = -1,
}

export enum BaccaratBetRejectedReason {
  BACCARAT_BET_REJECTED_REASON_BACCARAT_BET_REJECTED_UNSPECIFIED = 0,
  BACCARAT_BET_REJECTED_REASON_BACCARAT_BET_REJECTED_BALANCE_NOT_ENOUGH = 1,
  BACCARAT_BET_REJECTED_REASON_BACCARAT_BET_REJECTED_PREVIOUS_BET_NOT_EXIST = 2,
  BACCARAT_BET_REJECTED_REASON_BACCARAT_BET_REJECTED_ALREADY_BET = 3,
  BACCARAT_BET_REJECTED_REASON_BACCARAT_BET_REJECTED_EXCEED_MAX_BET_ALLOWED = 4,
  UNRECOGNIZED = -1,
}

export interface BaccaratBet {
  chips: number;
  cell: BaccaratBetCell;
}

export interface BaccaratBetResult {
  bet: BaccaratBet | undefined;
  isWin: boolean;
}

export interface BaccaratPlayerBet {
  userId: string;
  actionType: BaccaratBetActionType;
  bets: BaccaratBet[];
}

export interface BaccaratPlayerBetResult {
  userId: string;
  lists: BaccaratBetResult[];
}

export interface BaccaratHand {
  cards: Card[];
  point: number;
  isPair: boolean;
}

export interface BaccaratHands {
  banker: BaccaratHand | undefined;
  player: BaccaratHand | undefined;
}

export interface BaccaratGameFinish {
  hand: BaccaratHands | undefined;
  winCells: BaccaratBetCell[];
  listBetResults: BaccaratPlayerBetResult[];
}

export interface BaccaratBetCellInfo {
  cell: BaccaratBetCell;
  chips: number;
  nUserBet: number;
}

export interface BaccaratSimpleHistory {
  bankerWin: number;
  playerWin: number;
  tie: number;
}

export interface BaccaratUpdateDesk {
  nPlayers: number;
  isUpdateUserBet: boolean;
  isUpdateDeskCell: boolean;
  isUpdateGameHistory: boolean;
  userBet: BaccaratPlayerBet | undefined;
  deskCells: BaccaratBetCellInfo[];
  history: BaccaratSimpleHistory | undefined;
}

export interface BaccaratBetActionReject {
  reason: BaccaratBetRejectedReason;
}

/**
 * send deal card server->client, is_player = true mean that that card is for
 * player, else banker append those card into respectively player hand hands
 * field is purely for sync between server and client, use it as u want
 */
export interface BaccaratUpdateDeal {
  isPlayer: boolean;
  cards: Card[];
  hands: BaccaratHands | undefined;
}
