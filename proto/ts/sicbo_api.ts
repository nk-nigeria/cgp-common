/* eslint-disable */

export const protobufPackage = "api";

export enum Dice {
  DICE_UNSPECTIFIED = 0,
  DICE_1 = 1,
  DICE_2 = 2,
  DICE_3 = 3,
  DICE_4 = 4,
  DICE_5 = 5,
  DICE_6 = 6,
  UNRECOGNIZED = -1,
}

export enum SicboBetCell {
  /** SICBO_CELL_UNSPECIFIED - unused */
  SICBO_CELL_UNSPECIFIED = 0,
  /** SICBO_CELL_SMALL - x1 */
  SICBO_CELL_SMALL = 1,
  SICBO_CELL_BIG = 2,
  /** SICBO_CELL_1 - x number of same face */
  SICBO_CELL_1 = 11,
  SICBO_CEll_2 = 12,
  SICBO_CELL_3 = 13,
  SICBO_CELL_4 = 14,
  SICBO_CELL_5 = 15,
  SICBO_CELL_6 = 16,
  /** SICBO_CELL_DOUBLE_1 - x10 */
  SICBO_CELL_DOUBLE_1 = 21,
  SICBO_CELL_DOUBLE_2 = 22,
  SICBO_CELL_DOUBLE_3 = 23,
  SICBO_CELL_DOUBLE_4 = 24,
  SICBO_CELL_DOUBLE_5 = 25,
  SICBO_CELL_DOUBLE_6 = 26,
  /** SICBO_CELL_TRIPLE - x30 */
  SICBO_CELL_TRIPLE = 31,
  /** SICBO_CELL_TOTAL_4 - x60 */
  SICBO_CELL_TOTAL_4 = 41,
  SICBO_CELL_TOTAL_17 = 42,
  /** SICBO_CELL_TOTAL_5 - x30 */
  SICBO_CELL_TOTAL_5 = 43,
  SICBO_CELL_TOTAL_16 = 44,
  /** SICBO_CELL_TOTAL_6 - x18 */
  SICBO_CELL_TOTAL_6 = 45,
  SICBO_CELL_TOTAL_15 = 46,
  /** SICBO_CELL_TOTAL_7 - x12 */
  SICBO_CELL_TOTAL_7 = 47,
  SICBO_CELL_TOTAL_14 = 48,
  /** SICBO_CELL_TOTAL_8 - x8 */
  SICBO_CELL_TOTAL_8 = 49,
  SICBO_CELL_TOTAL_13 = 50,
  /** SICBO_CELL_TOTAL_9 - x7 */
  SICBO_CELL_TOTAL_9 = 51,
  SICBO_CELL_TOTAL_12 = 52,
  /** SICBO_CELL_TOTAL_10 - x6 */
  SICBO_CELL_TOTAL_10 = 53,
  SICBO_CELL_TOTAL_11 = 54,
  UNRECOGNIZED = -1,
}

export enum SicboBetAction {
  SICBO_BET_NORMAL = 0,
  SICBO_BET_REBET = 1,
  SICBO_BET_DOUBLE = 2,
  UNRECOGNIZED = -1,
}

export enum SicboBetRejectReason {
  UNSPECIFIED = 0,
  BALANCE_NOT_ENOUGH = 1,
  PREVIOUS_BET_NOT_EXIST = 2,
  ALREADY_BET = 3,
  UNRECOGNIZED = -1,
}

export interface SicboBet {
  chips: number;
  cell: SicboBetCell;
}

export interface SicboBetResult {
  bet: SicboBet | undefined;
  isWin: boolean;
}

export interface SicboPlayerBet {
  userId: string;
  action: SicboBetAction;
  bets: SicboBet[];
}

export interface SicboPlayerBetResult {
  userId: string;
  list: SicboBetResult[];
}

export interface SicboHand {
  dices: Dice[];
}

export interface SicboGameFinish {
  hand: SicboHand | undefined;
  winCells: SicboBetCell[];
  listBetResult: SicboPlayerBetResult[];
}

export interface SicboBetCellInfo {
  cell: SicboBetCell;
  chips: number;
  nUserBet: number;
}

export interface SicboUpdateDesk {
  nPlayers: number;
  isUpdateUserBet: boolean;
  isUpdateDeskCell: boolean;
  isUpdateGameHistory: boolean;
  userBet: SicboPlayerBet | undefined;
  deskCell: SicboBetCellInfo[];
  history: SicboHand[];
}

export interface SicboActionReject {
  reason: SicboBetRejectReason;
}
