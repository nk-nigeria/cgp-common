/* eslint-disable */

export const protobufPackage = "api";

/** The complete set of rpc used for communication between clients and server. */
export enum RPCCode {
  /** RPC_FIND_MATCH - No opcode specified. Unused. */
  RPC_FIND_MATCH = 0,
  RPC_CREATE_MATCH = 1,
  UNRECOGNIZED = -1,
}

/** Payload for an RPC request to find a match. */
export interface RpcFindMatchRequest {
  /** User can choose a fast or normal speed match. */
  markUnit: number;
  gameCode: string;
  withNonOpen: boolean;
  create: boolean;
  mockCodeCard: number;
  userData: string;
}

export interface Match {
  matchId: string;
  size: number;
  maxSize: number;
  name: string;
  markUnit: number;
  open: boolean;
  mockCodeCard: number;
  userData: string;
}

/** Payload for an RPC response containing match IDs the user can join. */
export interface RpcFindMatchResponse {
  /** One or more matches that fit the user's request. */
  matches: Match[];
}

/** Payload for an RPC request to find a match. */
export interface RpcCreateMatchRequest {
  markUnit: number;
  gameCode: string;
  name: string;
  password: string;
}

/** Payload for an RPC response containing match IDs the user can join. */
export interface RpcCreateMatchResponse {
  /** One or more matches that fit the user's request. */
  matchId: string;
}

export interface Bet {
  enable: boolean;
  /** mức cược (chip) */
  markUnit: number;
}

export interface Bets {
  bets: Bet[];
}
