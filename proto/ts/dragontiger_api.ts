/* eslint-disable */
import type { Card, GameState } from "./chinese_poker_game_api";

export const protobufPackage = "api";

export enum DragonTigerBetCell {
  /** CELL_UNSPECIFIED - unuse */
  CELL_UNSPECIFIED = 0,
  CELL_DRAGON = 1,
  CELL_TIGER = 2,
  CELL_TIE = 3,
  CELL_DRAGON_SMALL = 4,
  CELL_DRAGON_BIG = 5,
  CELL_TIGER_SMALL = 6,
  CELL_TIGER_BIG = 7,
  UNRECOGNIZED = -1,
}

export enum DragonTigerBetAction {
  NORMAL_BET = 0,
  RE_BET = 1,
  DOUBLE_BET = 2,
  UNRECOGNIZED = -1,
}

export interface DragonTigerBet {
  chips: number;
  cell: DragonTigerBetCell;
}

export interface DragonTigerBetResult {
  bet: DragonTigerBet | undefined;
  isWin: boolean;
}

/**
 * client->server when user request bet
 * if action_type is RE_BET or DOUBLE_BET, set "bets" as an empty array
 */
export interface DragonTigerPlayerBets {
  userId: string;
  actionType: DragonTigerBetAction;
  bets: DragonTigerBet[];
}

export interface DragonTigerPlayerBetResult {
  userId: string;
  list: DragonTigerBetResult[];
}

export interface DragonTigerDeskCell {
  cell: DragonTigerBetCell;
  chips: number;
  nUserBet: number;
}

export interface DragonTigerListDeskCell {
  list: DragonTigerDeskCell[];
}

export interface DragonTigerHand {
  dragon: Card | undefined;
  tiger: Card | undefined;
}

/** send from server to client upon game finished */
export interface DragonTigerGameFinish {
  hand: DragonTigerHand | undefined;
  winCells: DragonTigerBetCell[];
  listBetResult: DragonTigerPlayerBetResult[];
}

/**
 * OPCODE_REQUEST_HISTORY_RESULT
 * server->client when request previous games history
 */
export interface DragonTigerHistory {
  histories: DragonTigerHand[];
}

/** unused */
export interface DragonTigerPlayer {
  userName: string;
  vipLevel: number;
  avatarId: string;
  chips: number;
}

/**
 * OPCODE_UPDATE_TABLE
 * server->client when game state changed
 */
export interface DragonTigerUpdateTable {
  gameState: GameState;
  countDown: number;
  /** unused */
  nPlayer: number;
  /** unused */
  notablePlayers: DragonTigerPlayer[];
}

/** server->client when there's a change in table */
export interface DragonTigerUpdateDesk {
  nPlayers: number;
  isUpdateUserBet: boolean;
  isUpdateDeskCell: boolean;
  isUpdateGameHistory: boolean;
  userBet: DragonTigerPlayerBets | undefined;
  deskCell: DragonTigerListDeskCell | undefined;
  history: DragonTigerHistory | undefined;
}

/**
 * server->client when user bet action is illegal
 * OPCODE_UPDATE_REJECTED
 */
export interface DragonTigerActionReject {
  reason: string;
}
