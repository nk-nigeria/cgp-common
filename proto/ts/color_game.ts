/* eslint-disable */

export const protobufPackage = "api";

export enum Color {
  COLOR_UNSPECIFIED = 0,
  COLOR_YELLOW = 1,
  COLOR_WHITE = 2,
  COLOR_PINK = 4,
  COLOR_BLUE = 8,
  COLOR_RED = 16,
  COLOR_GREEN = 32,
  UNRECOGNIZED = -1,
}

export interface BetResult {
  userId: string;
  bets: InfoBet[];
  isWin: boolean;
}

export interface ColorGameFinish {
  rollColor: ListColor | undefined;
  betResults: BetResult[];
  historyRolls: HistoryRoll | undefined;
}

export interface ListColor {
  colors: number[];
}

export interface RateColor {
  id: number;
  percent: number;
}

export interface HistoryRoll {
  listColors: ListColor[];
  rateColors: RateColor[];
}

export interface InfoBet {
  id: number;
  chips: number;
  nUserBet: number;
  desp: string;
  reqSpecGame: number;
  /** broadcast new game data */
  emitNewgameEvent: boolean;
  /** delay broadcast result endgame, unit 1s,1m, 1h, golang durationformat */
  delayEmitResult: string;
}

export interface ListInfoBet {
  listBets: InfoBet[];
}

export interface UpdateDesk {
  nPlayer: number;
  updateUserBets: boolean;
  updateCellBets: boolean;
  userBets: InfoBet[];
  cellBets: InfoBet[];
  updateHistoryRoll: boolean;
  historyRolls: HistoryRoll | undefined;
}
