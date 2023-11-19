/* eslint-disable */
import type { Domino } from "./bandarqq_api";

export const protobufPackage = "api";

export enum GapleDominoChainPosition {
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_UNSPECIFIED = 0,
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_HEAD = 1,
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_TAIL = 2,
  /** GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH - server->client indicate possible action */
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH = 3,
  UNRECOGNIZED = -1,
}

export enum GapleDominoFinishGameType {
  GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_UNSPECIFIED = 0,
  GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_SINGLE = 1,
  GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_DOUBLE = 2,
  GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_TRIPLE = 3,
  GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUARTET = 4,
  GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUINTET = 5,
  UNRECOGNIZED = -1,
}

export interface GapleDominoAction {
  userId: string;
  domino: Domino | undefined;
  position: GapleDominoChainPosition;
}

export interface GapleDominoPenalty {
  gainPlayer: string;
  lostPlayer: string;
  chips: number;
  lostPlayerNotHaveFacelets: number[];
}

export interface GapleDominoChainNode {
  domino: Domino | undefined;
  turnNumber: number;
}

/**
 * note: when user that was disconnected reenter the table and that game not yet
 * ended server will:
 *  - send the hand cards to client
 *  - send update desk that CONTAINS CHAIN BUT NOT HAVE ACTION like normal would
 *  do
 */
export interface GapleDominoUpdateDesk {
  nPlayers: number;
  isNewTurn: boolean;
  isUpdateChain: boolean;
  isAppendDominoToChain: boolean;
  isPenaltyOccur: boolean;
  isUpdateLegalActions: boolean;
  isUpdateNumRemainedCard: boolean;
  /** update entire chain on tables */
  chain: GapleDominoChainNode[];
  /** last piece of domino, adding it to the table */
  action:
    | GapleDominoAction
    | undefined;
  /** chain in correspond chain's end */
  legalActions: GapleDominoAction[];
  penalty: GapleDominoPenalty | undefined;
  remaineds: GapleDominoPresenceNumRemained[];
  /** uid of player in current turn */
  inTurn: string;
  /** count facelets remained on all players hand */
  remainedFaceletsCount: number[];
}

export interface GapleDominoPresenceNumRemained {
  userId: string;
  numCard: number;
}

export interface GapleDominoPresenceHand {
  userId: string;
  dominos: Domino[];
}

/**
 * server->client at the beginning of the game, also when a disconnected player
 * reenter
 */
export interface GapleDominoUpdateDeal {
  hand: GapleDominoPresenceHand | undefined;
}

export interface GapleDoninoUpdateFinish {
  type: GapleDominoFinishGameType;
  winner: string;
  hands: GapleDominoPresenceHand[];
}
