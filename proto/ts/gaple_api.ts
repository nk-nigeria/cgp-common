/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Domino } from "./bandarqq_api";
import Long = require("long");

export const protobufPackage = "api";

export enum GapleDominoChainPosition {
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_UNSPECIFIED = 0,
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_HEAD = 1,
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_TAIL = 2,
  /** GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH - server->client indicate possible action */
  GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH = 3,
  UNRECOGNIZED = -1,
}

export function gapleDominoChainPositionFromJSON(object: any): GapleDominoChainPosition {
  switch (object) {
    case 0:
    case "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_UNSPECIFIED":
      return GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_UNSPECIFIED;
    case 1:
    case "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_HEAD":
      return GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_HEAD;
    case 2:
    case "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_TAIL":
      return GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_TAIL;
    case 3:
    case "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH":
      return GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GapleDominoChainPosition.UNRECOGNIZED;
  }
}

export function gapleDominoChainPositionToJSON(object: GapleDominoChainPosition): string {
  switch (object) {
    case GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_UNSPECIFIED:
      return "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_UNSPECIFIED";
    case GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_HEAD:
      return "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_HEAD";
    case GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_TAIL:
      return "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_TAIL";
    case GapleDominoChainPosition.GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH:
      return "GAPLE_DOMINO_CHAIN_POSITION_GAPLE_DOMINO_CHAIN_BOTH";
    case GapleDominoChainPosition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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

export function gapleDominoFinishGameTypeFromJSON(object: any): GapleDominoFinishGameType {
  switch (object) {
    case 0:
    case "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_UNSPECIFIED":
      return GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_UNSPECIFIED;
    case 1:
    case "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_SINGLE":
      return GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_SINGLE;
    case 2:
    case "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_DOUBLE":
      return GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_DOUBLE;
    case 3:
    case "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_TRIPLE":
      return GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_TRIPLE;
    case 4:
    case "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUARTET":
      return GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUARTET;
    case 5:
    case "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUINTET":
      return GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUINTET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GapleDominoFinishGameType.UNRECOGNIZED;
  }
}

export function gapleDominoFinishGameTypeToJSON(object: GapleDominoFinishGameType): string {
  switch (object) {
    case GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_UNSPECIFIED:
      return "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_UNSPECIFIED";
    case GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_SINGLE:
      return "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_SINGLE";
    case GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_DOUBLE:
      return "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_DOUBLE";
    case GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_TRIPLE:
      return "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_TRIPLE";
    case GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUARTET:
      return "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUARTET";
    case GapleDominoFinishGameType.GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUINTET:
      return "GAPLE_DOMINO_FINISH_GAME_TYPE_GAPLE_DOMINO_FINISHGAME_TYPE_QUINTET";
    case GapleDominoFinishGameType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
  desk: GapleDominoUpdateDesk | undefined;
}

export interface LewatCount {
  userId: string;
  count: number;
}

export interface ResultChip {
  userId: string;
  balanceChange: number;
}

export interface GapleDoninoUpdateFinish {
  type: GapleDominoFinishGameType;
  winner: string;
  hands: GapleDominoPresenceHand[];
  lewats: LewatCount[];
  result: ResultChip[];
}

function createBaseGapleDominoAction(): GapleDominoAction {
  return { userId: "", domino: undefined, position: 0 };
}

export const GapleDominoAction = {
  encode(message: GapleDominoAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.domino !== undefined) {
      Domino.encode(message.domino, writer.uint32(18).fork()).ldelim();
    }
    if (message.position !== 0) {
      writer.uint32(24).int32(message.position);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoAction();
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

          message.domino = Domino.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.position = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoAction {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      domino: isSet(object.domino) ? Domino.fromJSON(object.domino) : undefined,
      position: isSet(object.position) ? gapleDominoChainPositionFromJSON(object.position) : 0,
    };
  },

  toJSON(message: GapleDominoAction): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.domino !== undefined) {
      obj.domino = Domino.toJSON(message.domino);
    }
    if (message.position !== 0) {
      obj.position = gapleDominoChainPositionToJSON(message.position);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoAction>, I>>(base?: I): GapleDominoAction {
    return GapleDominoAction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoAction>, I>>(object: I): GapleDominoAction {
    const message = createBaseGapleDominoAction();
    message.userId = object.userId ?? "";
    message.domino = (object.domino !== undefined && object.domino !== null)
      ? Domino.fromPartial(object.domino)
      : undefined;
    message.position = object.position ?? 0;
    return message;
  },
};

function createBaseGapleDominoPenalty(): GapleDominoPenalty {
  return { gainPlayer: "", lostPlayer: "", chips: 0, lostPlayerNotHaveFacelets: [] };
}

export const GapleDominoPenalty = {
  encode(message: GapleDominoPenalty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gainPlayer !== "") {
      writer.uint32(10).string(message.gainPlayer);
    }
    if (message.lostPlayer !== "") {
      writer.uint32(18).string(message.lostPlayer);
    }
    if (message.chips !== 0) {
      writer.uint32(24).int32(message.chips);
    }
    writer.uint32(34).fork();
    for (const v of message.lostPlayerNotHaveFacelets) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoPenalty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoPenalty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gainPlayer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lostPlayer = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.chips = reader.int32();
          continue;
        case 4:
          if (tag === 32) {
            message.lostPlayerNotHaveFacelets.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lostPlayerNotHaveFacelets.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoPenalty {
    return {
      gainPlayer: isSet(object.gainPlayer) ? globalThis.String(object.gainPlayer) : "",
      lostPlayer: isSet(object.lostPlayer) ? globalThis.String(object.lostPlayer) : "",
      chips: isSet(object.chips) ? globalThis.Number(object.chips) : 0,
      lostPlayerNotHaveFacelets: globalThis.Array.isArray(object?.lostPlayerNotHaveFacelets)
        ? object.lostPlayerNotHaveFacelets.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: GapleDominoPenalty): unknown {
    const obj: any = {};
    if (message.gainPlayer !== "") {
      obj.gainPlayer = message.gainPlayer;
    }
    if (message.lostPlayer !== "") {
      obj.lostPlayer = message.lostPlayer;
    }
    if (message.chips !== 0) {
      obj.chips = Math.round(message.chips);
    }
    if (message.lostPlayerNotHaveFacelets?.length) {
      obj.lostPlayerNotHaveFacelets = message.lostPlayerNotHaveFacelets.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoPenalty>, I>>(base?: I): GapleDominoPenalty {
    return GapleDominoPenalty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoPenalty>, I>>(object: I): GapleDominoPenalty {
    const message = createBaseGapleDominoPenalty();
    message.gainPlayer = object.gainPlayer ?? "";
    message.lostPlayer = object.lostPlayer ?? "";
    message.chips = object.chips ?? 0;
    message.lostPlayerNotHaveFacelets = object.lostPlayerNotHaveFacelets?.map((e) => e) || [];
    return message;
  },
};

function createBaseGapleDominoChainNode(): GapleDominoChainNode {
  return { domino: undefined, turnNumber: 0 };
}

export const GapleDominoChainNode = {
  encode(message: GapleDominoChainNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domino !== undefined) {
      Domino.encode(message.domino, writer.uint32(10).fork()).ldelim();
    }
    if (message.turnNumber !== 0) {
      writer.uint32(16).int32(message.turnNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoChainNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoChainNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.domino = Domino.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.turnNumber = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoChainNode {
    return {
      domino: isSet(object.domino) ? Domino.fromJSON(object.domino) : undefined,
      turnNumber: isSet(object.turnNumber) ? globalThis.Number(object.turnNumber) : 0,
    };
  },

  toJSON(message: GapleDominoChainNode): unknown {
    const obj: any = {};
    if (message.domino !== undefined) {
      obj.domino = Domino.toJSON(message.domino);
    }
    if (message.turnNumber !== 0) {
      obj.turnNumber = Math.round(message.turnNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoChainNode>, I>>(base?: I): GapleDominoChainNode {
    return GapleDominoChainNode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoChainNode>, I>>(object: I): GapleDominoChainNode {
    const message = createBaseGapleDominoChainNode();
    message.domino = (object.domino !== undefined && object.domino !== null)
      ? Domino.fromPartial(object.domino)
      : undefined;
    message.turnNumber = object.turnNumber ?? 0;
    return message;
  },
};

function createBaseGapleDominoUpdateDesk(): GapleDominoUpdateDesk {
  return {
    nPlayers: 0,
    isNewTurn: false,
    isUpdateChain: false,
    isAppendDominoToChain: false,
    isPenaltyOccur: false,
    isUpdateLegalActions: false,
    isUpdateNumRemainedCard: false,
    chain: [],
    action: undefined,
    legalActions: [],
    penalty: undefined,
    remaineds: [],
    inTurn: "",
    remainedFaceletsCount: [],
  };
}

export const GapleDominoUpdateDesk = {
  encode(message: GapleDominoUpdateDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nPlayers !== 0) {
      writer.uint32(8).int32(message.nPlayers);
    }
    if (message.isNewTurn === true) {
      writer.uint32(16).bool(message.isNewTurn);
    }
    if (message.isUpdateChain === true) {
      writer.uint32(24).bool(message.isUpdateChain);
    }
    if (message.isAppendDominoToChain === true) {
      writer.uint32(32).bool(message.isAppendDominoToChain);
    }
    if (message.isPenaltyOccur === true) {
      writer.uint32(40).bool(message.isPenaltyOccur);
    }
    if (message.isUpdateLegalActions === true) {
      writer.uint32(48).bool(message.isUpdateLegalActions);
    }
    if (message.isUpdateNumRemainedCard === true) {
      writer.uint32(56).bool(message.isUpdateNumRemainedCard);
    }
    for (const v of message.chain) {
      GapleDominoChainNode.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.action !== undefined) {
      GapleDominoAction.encode(message.action, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.legalActions) {
      GapleDominoAction.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.penalty !== undefined) {
      GapleDominoPenalty.encode(message.penalty, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.remaineds) {
      GapleDominoPresenceNumRemained.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.inTurn !== "") {
      writer.uint32(106).string(message.inTurn);
    }
    writer.uint32(114).fork();
    for (const v of message.remainedFaceletsCount) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoUpdateDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoUpdateDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nPlayers = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isNewTurn = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isUpdateChain = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isAppendDominoToChain = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isPenaltyOccur = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isUpdateLegalActions = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isUpdateNumRemainedCard = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.chain.push(GapleDominoChainNode.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.action = GapleDominoAction.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.legalActions.push(GapleDominoAction.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.penalty = GapleDominoPenalty.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.remaineds.push(GapleDominoPresenceNumRemained.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.inTurn = reader.string();
          continue;
        case 14:
          if (tag === 112) {
            message.remainedFaceletsCount.push(reader.int32());

            continue;
          }

          if (tag === 114) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.remainedFaceletsCount.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoUpdateDesk {
    return {
      nPlayers: isSet(object.nPlayers) ? globalThis.Number(object.nPlayers) : 0,
      isNewTurn: isSet(object.isNewTurn) ? globalThis.Boolean(object.isNewTurn) : false,
      isUpdateChain: isSet(object.isUpdateChain) ? globalThis.Boolean(object.isUpdateChain) : false,
      isAppendDominoToChain: isSet(object.isAppendDominoToChain)
        ? globalThis.Boolean(object.isAppendDominoToChain)
        : false,
      isPenaltyOccur: isSet(object.isPenaltyOccur) ? globalThis.Boolean(object.isPenaltyOccur) : false,
      isUpdateLegalActions: isSet(object.isUpdateLegalActions)
        ? globalThis.Boolean(object.isUpdateLegalActions)
        : false,
      isUpdateNumRemainedCard: isSet(object.isUpdateNumRemainedCard)
        ? globalThis.Boolean(object.isUpdateNumRemainedCard)
        : false,
      chain: globalThis.Array.isArray(object?.chain)
        ? object.chain.map((e: any) => GapleDominoChainNode.fromJSON(e))
        : [],
      action: isSet(object.action) ? GapleDominoAction.fromJSON(object.action) : undefined,
      legalActions: globalThis.Array.isArray(object?.legalActions)
        ? object.legalActions.map((e: any) => GapleDominoAction.fromJSON(e))
        : [],
      penalty: isSet(object.penalty) ? GapleDominoPenalty.fromJSON(object.penalty) : undefined,
      remaineds: globalThis.Array.isArray(object?.remaineds)
        ? object.remaineds.map((e: any) => GapleDominoPresenceNumRemained.fromJSON(e))
        : [],
      inTurn: isSet(object.inTurn) ? globalThis.String(object.inTurn) : "",
      remainedFaceletsCount: globalThis.Array.isArray(object?.remainedFaceletsCount)
        ? object.remainedFaceletsCount.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: GapleDominoUpdateDesk): unknown {
    const obj: any = {};
    if (message.nPlayers !== 0) {
      obj.nPlayers = Math.round(message.nPlayers);
    }
    if (message.isNewTurn === true) {
      obj.isNewTurn = message.isNewTurn;
    }
    if (message.isUpdateChain === true) {
      obj.isUpdateChain = message.isUpdateChain;
    }
    if (message.isAppendDominoToChain === true) {
      obj.isAppendDominoToChain = message.isAppendDominoToChain;
    }
    if (message.isPenaltyOccur === true) {
      obj.isPenaltyOccur = message.isPenaltyOccur;
    }
    if (message.isUpdateLegalActions === true) {
      obj.isUpdateLegalActions = message.isUpdateLegalActions;
    }
    if (message.isUpdateNumRemainedCard === true) {
      obj.isUpdateNumRemainedCard = message.isUpdateNumRemainedCard;
    }
    if (message.chain?.length) {
      obj.chain = message.chain.map((e) => GapleDominoChainNode.toJSON(e));
    }
    if (message.action !== undefined) {
      obj.action = GapleDominoAction.toJSON(message.action);
    }
    if (message.legalActions?.length) {
      obj.legalActions = message.legalActions.map((e) => GapleDominoAction.toJSON(e));
    }
    if (message.penalty !== undefined) {
      obj.penalty = GapleDominoPenalty.toJSON(message.penalty);
    }
    if (message.remaineds?.length) {
      obj.remaineds = message.remaineds.map((e) => GapleDominoPresenceNumRemained.toJSON(e));
    }
    if (message.inTurn !== "") {
      obj.inTurn = message.inTurn;
    }
    if (message.remainedFaceletsCount?.length) {
      obj.remainedFaceletsCount = message.remainedFaceletsCount.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoUpdateDesk>, I>>(base?: I): GapleDominoUpdateDesk {
    return GapleDominoUpdateDesk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoUpdateDesk>, I>>(object: I): GapleDominoUpdateDesk {
    const message = createBaseGapleDominoUpdateDesk();
    message.nPlayers = object.nPlayers ?? 0;
    message.isNewTurn = object.isNewTurn ?? false;
    message.isUpdateChain = object.isUpdateChain ?? false;
    message.isAppendDominoToChain = object.isAppendDominoToChain ?? false;
    message.isPenaltyOccur = object.isPenaltyOccur ?? false;
    message.isUpdateLegalActions = object.isUpdateLegalActions ?? false;
    message.isUpdateNumRemainedCard = object.isUpdateNumRemainedCard ?? false;
    message.chain = object.chain?.map((e) => GapleDominoChainNode.fromPartial(e)) || [];
    message.action = (object.action !== undefined && object.action !== null)
      ? GapleDominoAction.fromPartial(object.action)
      : undefined;
    message.legalActions = object.legalActions?.map((e) => GapleDominoAction.fromPartial(e)) || [];
    message.penalty = (object.penalty !== undefined && object.penalty !== null)
      ? GapleDominoPenalty.fromPartial(object.penalty)
      : undefined;
    message.remaineds = object.remaineds?.map((e) => GapleDominoPresenceNumRemained.fromPartial(e)) || [];
    message.inTurn = object.inTurn ?? "";
    message.remainedFaceletsCount = object.remainedFaceletsCount?.map((e) => e) || [];
    return message;
  },
};

function createBaseGapleDominoPresenceNumRemained(): GapleDominoPresenceNumRemained {
  return { userId: "", numCard: 0 };
}

export const GapleDominoPresenceNumRemained = {
  encode(message: GapleDominoPresenceNumRemained, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.numCard !== 0) {
      writer.uint32(16).int32(message.numCard);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoPresenceNumRemained {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoPresenceNumRemained();
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

          message.numCard = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoPresenceNumRemained {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      numCard: isSet(object.numCard) ? globalThis.Number(object.numCard) : 0,
    };
  },

  toJSON(message: GapleDominoPresenceNumRemained): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.numCard !== 0) {
      obj.numCard = Math.round(message.numCard);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoPresenceNumRemained>, I>>(base?: I): GapleDominoPresenceNumRemained {
    return GapleDominoPresenceNumRemained.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoPresenceNumRemained>, I>>(
    object: I,
  ): GapleDominoPresenceNumRemained {
    const message = createBaseGapleDominoPresenceNumRemained();
    message.userId = object.userId ?? "";
    message.numCard = object.numCard ?? 0;
    return message;
  },
};

function createBaseGapleDominoPresenceHand(): GapleDominoPresenceHand {
  return { userId: "", dominos: [] };
}

export const GapleDominoPresenceHand = {
  encode(message: GapleDominoPresenceHand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    for (const v of message.dominos) {
      Domino.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoPresenceHand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoPresenceHand();
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

          message.dominos.push(Domino.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoPresenceHand {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      dominos: globalThis.Array.isArray(object?.dominos) ? object.dominos.map((e: any) => Domino.fromJSON(e)) : [],
    };
  },

  toJSON(message: GapleDominoPresenceHand): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.dominos?.length) {
      obj.dominos = message.dominos.map((e) => Domino.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoPresenceHand>, I>>(base?: I): GapleDominoPresenceHand {
    return GapleDominoPresenceHand.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoPresenceHand>, I>>(object: I): GapleDominoPresenceHand {
    const message = createBaseGapleDominoPresenceHand();
    message.userId = object.userId ?? "";
    message.dominos = object.dominos?.map((e) => Domino.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGapleDominoUpdateDeal(): GapleDominoUpdateDeal {
  return { hand: undefined, desk: undefined };
}

export const GapleDominoUpdateDeal = {
  encode(message: GapleDominoUpdateDeal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hand !== undefined) {
      GapleDominoPresenceHand.encode(message.hand, writer.uint32(10).fork()).ldelim();
    }
    if (message.desk !== undefined) {
      GapleDominoUpdateDesk.encode(message.desk, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDominoUpdateDeal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDominoUpdateDeal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hand = GapleDominoPresenceHand.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.desk = GapleDominoUpdateDesk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDominoUpdateDeal {
    return {
      hand: isSet(object.hand) ? GapleDominoPresenceHand.fromJSON(object.hand) : undefined,
      desk: isSet(object.desk) ? GapleDominoUpdateDesk.fromJSON(object.desk) : undefined,
    };
  },

  toJSON(message: GapleDominoUpdateDeal): unknown {
    const obj: any = {};
    if (message.hand !== undefined) {
      obj.hand = GapleDominoPresenceHand.toJSON(message.hand);
    }
    if (message.desk !== undefined) {
      obj.desk = GapleDominoUpdateDesk.toJSON(message.desk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDominoUpdateDeal>, I>>(base?: I): GapleDominoUpdateDeal {
    return GapleDominoUpdateDeal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDominoUpdateDeal>, I>>(object: I): GapleDominoUpdateDeal {
    const message = createBaseGapleDominoUpdateDeal();
    message.hand = (object.hand !== undefined && object.hand !== null)
      ? GapleDominoPresenceHand.fromPartial(object.hand)
      : undefined;
    message.desk = (object.desk !== undefined && object.desk !== null)
      ? GapleDominoUpdateDesk.fromPartial(object.desk)
      : undefined;
    return message;
  },
};

function createBaseLewatCount(): LewatCount {
  return { userId: "", count: 0 };
}

export const LewatCount = {
  encode(message: LewatCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LewatCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLewatCount();
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

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LewatCount {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: LewatCount): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LewatCount>, I>>(base?: I): LewatCount {
    return LewatCount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LewatCount>, I>>(object: I): LewatCount {
    const message = createBaseLewatCount();
    message.userId = object.userId ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseResultChip(): ResultChip {
  return { userId: "", balanceChange: 0 };
}

export const ResultChip = {
  encode(message: ResultChip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.balanceChange !== 0) {
      writer.uint32(16).int64(message.balanceChange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResultChip {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResultChip();
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

          message.balanceChange = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResultChip {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      balanceChange: isSet(object.balanceChange) ? globalThis.Number(object.balanceChange) : 0,
    };
  },

  toJSON(message: ResultChip): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.balanceChange !== 0) {
      obj.balanceChange = Math.round(message.balanceChange);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResultChip>, I>>(base?: I): ResultChip {
    return ResultChip.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResultChip>, I>>(object: I): ResultChip {
    const message = createBaseResultChip();
    message.userId = object.userId ?? "";
    message.balanceChange = object.balanceChange ?? 0;
    return message;
  },
};

function createBaseGapleDoninoUpdateFinish(): GapleDoninoUpdateFinish {
  return { type: 0, winner: "", hands: [], lewats: [], result: [] };
}

export const GapleDoninoUpdateFinish = {
  encode(message: GapleDoninoUpdateFinish, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.winner !== "") {
      writer.uint32(18).string(message.winner);
    }
    for (const v of message.hands) {
      GapleDominoPresenceHand.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lewats) {
      LewatCount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.result) {
      ResultChip.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GapleDoninoUpdateFinish {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGapleDoninoUpdateFinish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.winner = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hands.push(GapleDominoPresenceHand.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lewats.push(LewatCount.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.result.push(ResultChip.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GapleDoninoUpdateFinish {
    return {
      type: isSet(object.type) ? gapleDominoFinishGameTypeFromJSON(object.type) : 0,
      winner: isSet(object.winner) ? globalThis.String(object.winner) : "",
      hands: globalThis.Array.isArray(object?.hands)
        ? object.hands.map((e: any) => GapleDominoPresenceHand.fromJSON(e))
        : [],
      lewats: globalThis.Array.isArray(object?.lewats) ? object.lewats.map((e: any) => LewatCount.fromJSON(e)) : [],
      result: globalThis.Array.isArray(object?.result) ? object.result.map((e: any) => ResultChip.fromJSON(e)) : [],
    };
  },

  toJSON(message: GapleDoninoUpdateFinish): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = gapleDominoFinishGameTypeToJSON(message.type);
    }
    if (message.winner !== "") {
      obj.winner = message.winner;
    }
    if (message.hands?.length) {
      obj.hands = message.hands.map((e) => GapleDominoPresenceHand.toJSON(e));
    }
    if (message.lewats?.length) {
      obj.lewats = message.lewats.map((e) => LewatCount.toJSON(e));
    }
    if (message.result?.length) {
      obj.result = message.result.map((e) => ResultChip.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GapleDoninoUpdateFinish>, I>>(base?: I): GapleDoninoUpdateFinish {
    return GapleDoninoUpdateFinish.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GapleDoninoUpdateFinish>, I>>(object: I): GapleDoninoUpdateFinish {
    const message = createBaseGapleDoninoUpdateFinish();
    message.type = object.type ?? 0;
    message.winner = object.winner ?? "";
    message.hands = object.hands?.map((e) => GapleDominoPresenceHand.fromPartial(e)) || [];
    message.lewats = object.lewats?.map((e) => LewatCount.fromPartial(e)) || [];
    message.result = object.result?.map((e) => ResultChip.fromPartial(e)) || [];
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
