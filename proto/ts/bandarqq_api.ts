/* eslint-disable */

export const protobufPackage = "api";

export enum QQBetCell {
  CELL_RED = 0,
  CELL_RED_TWIN = 1,
  CELL_RED_QIU = 2,
  CELL_BLUE = 3,
  CELL_BLUE_TWIN = 4,
  CELL_BLUE_QIU = 5,
  CELL_DRAW = 6,
  CELL_QIU_QIU = 7,
  CELL_SIX_TWINS = 8,
  UNRECOGNIZED = -1,
}

export enum QQHandType {
  NORMAL = 0,
  QIU = 1,
  SIX = 2,
  TWIN = 3,
  UNRECOGNIZED = -1,
}

export interface Domino {
  top: number;
  bottom: number;
}

export interface DominoList {
  dominos: Domino[];
}

export interface QQBet {
  chips: number;
  cell: QQBetCell;
}

export interface QQBetResult {
  bet: QQBet | undefined;
  isWin: boolean;
}

/** message from client to server indicate user placing bet */
export interface QQPlayerBets {
  userId: string;
  bets: QQBet[];
}

/**
 * endgame result for 1 player
 * win_bets contains the bets in the cell that player win
 * in_chip is total of bet chips
 * win_chip is raw
 * chip is amount of win chip, if it's negative then player lost that game
 */
export interface QQPlayerBetResult {
  userId: string;
  betResults: QQBetResult[];
}

/** endgame result for all user playing in that game */
export interface QQListPlayerBetResult {
  results: QQPlayerBetResult[];
}

/** info of 1 hand */
export interface QQHand {
  dominos: Domino[];
  type: QQHandType;
  point: number;
}

/**
 * message from server to client when the game end
 * red's and blue's hand
 * win_cells is list of winning cells
 */
export interface QQGameFinish {
  hands: QQGameFinishHand | undefined;
  winCells: QQBetCell[];
  result: QQListPlayerBetResult | undefined;
}

export interface QQGameFinishHand {
  redHand: QQHand | undefined;
  blueHand: QQHand | undefined;
}

/** game history of prev hands */
export interface QQHistory {
  handHistories: QQGameFinishHand[];
}

/** amount and number of user placed bet in a cell */
export interface QQDeskCellBet {
  cell: QQBetCell;
  chips: number;
  nUserBet: number;
}

export interface QQDeskListCellBet {
  listCellBet: QQDeskCellBet[];
}

/**
 * message from server to client
 * indicate changing in desk status
 * - num of playing
 * - acknowledge user bet -> update_user_bets=true
 * - update total bet in each cell by all of the users -> update_cell_bets=true
 * - update game history -> update_game_history=true
 */
export interface QQUpdateDesk {
  nPlayers: number;
  updateUserBets: boolean;
  updateCellBets: boolean;
  updateGameHistory: boolean;
  userBets: QQPlayerBets | undefined;
  listCellBet: QQDeskListCellBet | undefined;
  history: QQHistory | undefined;
}
