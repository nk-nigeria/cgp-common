/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface ChangePasswordRequest {
  oldPassword: string;
  password: string;
}

export interface RegisterRequest {
  userName: string;
  password: string;
}

export interface Profile {
  userId: string;
  userName: string;
  displayName: string;
  avatarUrl: string;
  status: string;
  accountChip: number;
  bankChip: number;
  refCode: string;
  langTag: string;
  linkGroup: string;
  linkFanpageFb: string;
  appConfig: string;
  avatarId: string;
  registrable: boolean;
  vipLevel: number;
  lastOnlineTimeUnix: number;
  createTimeUnix: number;
  remainTimeInputRefCode: number;
  langAvailables: LangCode[];
  playingMatch: PlayingMatch | undefined;
  deviceId: string;
  lastDeviceId: string;
  refGame: string;
  currentIp: string;
  vipPoint: number;
  isOnline: boolean;
  isBanned: boolean;
  lastLoginUnix: number;
  userSid: number;
}

export interface PlayingMatch {
  code: string;
  matchId: string;
}

export interface ListProfile {
  profiles: Profile[];
}

export interface SimpleProfile {
  userId: string;
  userName: string;
  displayName: string;
  status: string;
  accountChip: number;
  avatarId: string;
  vipLevel: number;
  playingMatch: PlayingMatch | undefined;
}

export interface ListSimpleProfile {
  profiles: SimpleProfile[];
}

export interface QuickChatUpdateRequest {
  texts: string[];
}

export interface QuickChatResponse {
  texts: string[];
}

export interface LangCode {
  isoCode: string;
  displayName: string;
  sourceUrl: string;
}

function createBaseChangePasswordRequest(): ChangePasswordRequest {
  return { oldPassword: "", password: "" };
}

export const ChangePasswordRequest = {
  encode(message: ChangePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldPassword !== "") {
      writer.uint32(10).string(message.oldPassword);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oldPassword = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangePasswordRequest {
    return {
      oldPassword: isSet(object.oldPassword) ? globalThis.String(object.oldPassword) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: ChangePasswordRequest): unknown {
    const obj: any = {};
    if (message.oldPassword !== "") {
      obj.oldPassword = message.oldPassword;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangePasswordRequest>, I>>(base?: I): ChangePasswordRequest {
    return ChangePasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangePasswordRequest>, I>>(object: I): ChangePasswordRequest {
    const message = createBaseChangePasswordRequest();
    message.oldPassword = object.oldPassword ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseRegisterRequest(): RegisterRequest {
  return { userName: "", password: "" };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterRequest>, I>>(base?: I): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.userName = object.userName ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseProfile(): Profile {
  return {
    userId: "",
    userName: "",
    displayName: "",
    avatarUrl: "",
    status: "",
    accountChip: 0,
    bankChip: 0,
    refCode: "",
    langTag: "",
    linkGroup: "",
    linkFanpageFb: "",
    appConfig: "",
    avatarId: "",
    registrable: false,
    vipLevel: 0,
    lastOnlineTimeUnix: 0,
    createTimeUnix: 0,
    remainTimeInputRefCode: 0,
    langAvailables: [],
    playingMatch: undefined,
    deviceId: "",
    lastDeviceId: "",
    refGame: "",
    currentIp: "",
    vipPoint: 0,
    isOnline: false,
    isBanned: false,
    lastLoginUnix: 0,
    userSid: 0,
  };
}

export const Profile = {
  encode(message: Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.accountChip !== 0) {
      writer.uint32(48).int64(message.accountChip);
    }
    if (message.bankChip !== 0) {
      writer.uint32(56).int64(message.bankChip);
    }
    if (message.refCode !== "") {
      writer.uint32(66).string(message.refCode);
    }
    if (message.langTag !== "") {
      writer.uint32(74).string(message.langTag);
    }
    if (message.linkGroup !== "") {
      writer.uint32(82).string(message.linkGroup);
    }
    if (message.linkFanpageFb !== "") {
      writer.uint32(90).string(message.linkFanpageFb);
    }
    if (message.appConfig !== "") {
      writer.uint32(98).string(message.appConfig);
    }
    if (message.avatarId !== "") {
      writer.uint32(106).string(message.avatarId);
    }
    if (message.registrable === true) {
      writer.uint32(112).bool(message.registrable);
    }
    if (message.vipLevel !== 0) {
      writer.uint32(120).int64(message.vipLevel);
    }
    if (message.lastOnlineTimeUnix !== 0) {
      writer.uint32(128).int64(message.lastOnlineTimeUnix);
    }
    if (message.createTimeUnix !== 0) {
      writer.uint32(136).int64(message.createTimeUnix);
    }
    if (message.remainTimeInputRefCode !== 0) {
      writer.uint32(144).int64(message.remainTimeInputRefCode);
    }
    for (const v of message.langAvailables) {
      LangCode.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.playingMatch !== undefined) {
      PlayingMatch.encode(message.playingMatch, writer.uint32(162).fork()).ldelim();
    }
    if (message.deviceId !== "") {
      writer.uint32(170).string(message.deviceId);
    }
    if (message.lastDeviceId !== "") {
      writer.uint32(178).string(message.lastDeviceId);
    }
    if (message.refGame !== "") {
      writer.uint32(186).string(message.refGame);
    }
    if (message.currentIp !== "") {
      writer.uint32(194).string(message.currentIp);
    }
    if (message.vipPoint !== 0) {
      writer.uint32(200).int64(message.vipPoint);
    }
    if (message.isOnline === true) {
      writer.uint32(208).bool(message.isOnline);
    }
    if (message.isBanned === true) {
      writer.uint32(216).bool(message.isBanned);
    }
    if (message.lastLoginUnix !== 0) {
      writer.uint32(224).int64(message.lastLoginUnix);
    }
    if (message.userSid !== 0) {
      writer.uint32(232).int64(message.userSid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.accountChip = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.bankChip = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.refCode = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.langTag = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.linkGroup = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.linkFanpageFb = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.appConfig = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.avatarId = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.registrable = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.vipLevel = longToNumber(reader.int64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.lastOnlineTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.createTimeUnix = longToNumber(reader.int64() as Long);
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.remainTimeInputRefCode = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.langAvailables.push(LangCode.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.playingMatch = PlayingMatch.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.deviceId = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.lastDeviceId = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.refGame = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.currentIp = reader.string();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.vipPoint = longToNumber(reader.int64() as Long);
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.isOnline = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.isBanned = reader.bool();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.lastLoginUnix = longToNumber(reader.int64() as Long);
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.userSid = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Profile {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      accountChip: isSet(object.accountChip) ? globalThis.Number(object.accountChip) : 0,
      bankChip: isSet(object.bankChip) ? globalThis.Number(object.bankChip) : 0,
      refCode: isSet(object.refCode) ? globalThis.String(object.refCode) : "",
      langTag: isSet(object.langTag) ? globalThis.String(object.langTag) : "",
      linkGroup: isSet(object.linkGroup) ? globalThis.String(object.linkGroup) : "",
      linkFanpageFb: isSet(object.linkFanpageFb) ? globalThis.String(object.linkFanpageFb) : "",
      appConfig: isSet(object.appConfig) ? globalThis.String(object.appConfig) : "",
      avatarId: isSet(object.avatarId) ? globalThis.String(object.avatarId) : "",
      registrable: isSet(object.registrable) ? globalThis.Boolean(object.registrable) : false,
      vipLevel: isSet(object.vipLevel) ? globalThis.Number(object.vipLevel) : 0,
      lastOnlineTimeUnix: isSet(object.lastOnlineTimeUnix) ? globalThis.Number(object.lastOnlineTimeUnix) : 0,
      createTimeUnix: isSet(object.createTimeUnix) ? globalThis.Number(object.createTimeUnix) : 0,
      remainTimeInputRefCode: isSet(object.remainTimeInputRefCode)
        ? globalThis.Number(object.remainTimeInputRefCode)
        : 0,
      langAvailables: globalThis.Array.isArray(object?.langAvailables)
        ? object.langAvailables.map((e: any) => LangCode.fromJSON(e))
        : [],
      playingMatch: isSet(object.playingMatch) ? PlayingMatch.fromJSON(object.playingMatch) : undefined,
      deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : "",
      lastDeviceId: isSet(object.lastDeviceId) ? globalThis.String(object.lastDeviceId) : "",
      refGame: isSet(object.refGame) ? globalThis.String(object.refGame) : "",
      currentIp: isSet(object.currentIp) ? globalThis.String(object.currentIp) : "",
      vipPoint: isSet(object.vipPoint) ? globalThis.Number(object.vipPoint) : 0,
      isOnline: isSet(object.isOnline) ? globalThis.Boolean(object.isOnline) : false,
      isBanned: isSet(object.isBanned) ? globalThis.Boolean(object.isBanned) : false,
      lastLoginUnix: isSet(object.lastLoginUnix) ? globalThis.Number(object.lastLoginUnix) : 0,
      userSid: isSet(object.userSid) ? globalThis.Number(object.userSid) : 0,
    };
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.accountChip !== 0) {
      obj.accountChip = Math.round(message.accountChip);
    }
    if (message.bankChip !== 0) {
      obj.bankChip = Math.round(message.bankChip);
    }
    if (message.refCode !== "") {
      obj.refCode = message.refCode;
    }
    if (message.langTag !== "") {
      obj.langTag = message.langTag;
    }
    if (message.linkGroup !== "") {
      obj.linkGroup = message.linkGroup;
    }
    if (message.linkFanpageFb !== "") {
      obj.linkFanpageFb = message.linkFanpageFb;
    }
    if (message.appConfig !== "") {
      obj.appConfig = message.appConfig;
    }
    if (message.avatarId !== "") {
      obj.avatarId = message.avatarId;
    }
    if (message.registrable === true) {
      obj.registrable = message.registrable;
    }
    if (message.vipLevel !== 0) {
      obj.vipLevel = Math.round(message.vipLevel);
    }
    if (message.lastOnlineTimeUnix !== 0) {
      obj.lastOnlineTimeUnix = Math.round(message.lastOnlineTimeUnix);
    }
    if (message.createTimeUnix !== 0) {
      obj.createTimeUnix = Math.round(message.createTimeUnix);
    }
    if (message.remainTimeInputRefCode !== 0) {
      obj.remainTimeInputRefCode = Math.round(message.remainTimeInputRefCode);
    }
    if (message.langAvailables?.length) {
      obj.langAvailables = message.langAvailables.map((e) => LangCode.toJSON(e));
    }
    if (message.playingMatch !== undefined) {
      obj.playingMatch = PlayingMatch.toJSON(message.playingMatch);
    }
    if (message.deviceId !== "") {
      obj.deviceId = message.deviceId;
    }
    if (message.lastDeviceId !== "") {
      obj.lastDeviceId = message.lastDeviceId;
    }
    if (message.refGame !== "") {
      obj.refGame = message.refGame;
    }
    if (message.currentIp !== "") {
      obj.currentIp = message.currentIp;
    }
    if (message.vipPoint !== 0) {
      obj.vipPoint = Math.round(message.vipPoint);
    }
    if (message.isOnline === true) {
      obj.isOnline = message.isOnline;
    }
    if (message.isBanned === true) {
      obj.isBanned = message.isBanned;
    }
    if (message.lastLoginUnix !== 0) {
      obj.lastLoginUnix = Math.round(message.lastLoginUnix);
    }
    if (message.userSid !== 0) {
      obj.userSid = Math.round(message.userSid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Profile>, I>>(base?: I): Profile {
    return Profile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Profile>, I>>(object: I): Profile {
    const message = createBaseProfile();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.displayName = object.displayName ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.status = object.status ?? "";
    message.accountChip = object.accountChip ?? 0;
    message.bankChip = object.bankChip ?? 0;
    message.refCode = object.refCode ?? "";
    message.langTag = object.langTag ?? "";
    message.linkGroup = object.linkGroup ?? "";
    message.linkFanpageFb = object.linkFanpageFb ?? "";
    message.appConfig = object.appConfig ?? "";
    message.avatarId = object.avatarId ?? "";
    message.registrable = object.registrable ?? false;
    message.vipLevel = object.vipLevel ?? 0;
    message.lastOnlineTimeUnix = object.lastOnlineTimeUnix ?? 0;
    message.createTimeUnix = object.createTimeUnix ?? 0;
    message.remainTimeInputRefCode = object.remainTimeInputRefCode ?? 0;
    message.langAvailables = object.langAvailables?.map((e) => LangCode.fromPartial(e)) || [];
    message.playingMatch = (object.playingMatch !== undefined && object.playingMatch !== null)
      ? PlayingMatch.fromPartial(object.playingMatch)
      : undefined;
    message.deviceId = object.deviceId ?? "";
    message.lastDeviceId = object.lastDeviceId ?? "";
    message.refGame = object.refGame ?? "";
    message.currentIp = object.currentIp ?? "";
    message.vipPoint = object.vipPoint ?? 0;
    message.isOnline = object.isOnline ?? false;
    message.isBanned = object.isBanned ?? false;
    message.lastLoginUnix = object.lastLoginUnix ?? 0;
    message.userSid = object.userSid ?? 0;
    return message;
  },
};

function createBasePlayingMatch(): PlayingMatch {
  return { code: "", matchId: "" };
}

export const PlayingMatch = {
  encode(message: PlayingMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.matchId !== "") {
      writer.uint32(18).string(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayingMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayingMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlayingMatch {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      matchId: isSet(object.matchId) ? globalThis.String(object.matchId) : "",
    };
  },

  toJSON(message: PlayingMatch): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.matchId !== "") {
      obj.matchId = message.matchId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayingMatch>, I>>(base?: I): PlayingMatch {
    return PlayingMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayingMatch>, I>>(object: I): PlayingMatch {
    const message = createBasePlayingMatch();
    message.code = object.code ?? "";
    message.matchId = object.matchId ?? "";
    return message;
  },
};

function createBaseListProfile(): ListProfile {
  return { profiles: [] };
}

export const ListProfile = {
  encode(message: ListProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profiles) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profiles.push(Profile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProfile {
    return {
      profiles: globalThis.Array.isArray(object?.profiles) ? object.profiles.map((e: any) => Profile.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListProfile): unknown {
    const obj: any = {};
    if (message.profiles?.length) {
      obj.profiles = message.profiles.map((e) => Profile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListProfile>, I>>(base?: I): ListProfile {
    return ListProfile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListProfile>, I>>(object: I): ListProfile {
    const message = createBaseListProfile();
    message.profiles = object.profiles?.map((e) => Profile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSimpleProfile(): SimpleProfile {
  return {
    userId: "",
    userName: "",
    displayName: "",
    status: "",
    accountChip: 0,
    avatarId: "",
    vipLevel: 0,
    playingMatch: undefined,
  };
}

export const SimpleProfile = {
  encode(message: SimpleProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.userName !== "") {
      writer.uint32(18).string(message.userName);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.accountChip !== 0) {
      writer.uint32(48).int64(message.accountChip);
    }
    if (message.avatarId !== "") {
      writer.uint32(106).string(message.avatarId);
    }
    if (message.vipLevel !== 0) {
      writer.uint32(120).int64(message.vipLevel);
    }
    if (message.playingMatch !== undefined) {
      PlayingMatch.encode(message.playingMatch, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleProfile();
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

          message.userName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.accountChip = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.avatarId = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.vipLevel = longToNumber(reader.int64() as Long);
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.playingMatch = PlayingMatch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SimpleProfile {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      accountChip: isSet(object.accountChip) ? globalThis.Number(object.accountChip) : 0,
      avatarId: isSet(object.avatarId) ? globalThis.String(object.avatarId) : "",
      vipLevel: isSet(object.vipLevel) ? globalThis.Number(object.vipLevel) : 0,
      playingMatch: isSet(object.playingMatch) ? PlayingMatch.fromJSON(object.playingMatch) : undefined,
    };
  },

  toJSON(message: SimpleProfile): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.accountChip !== 0) {
      obj.accountChip = Math.round(message.accountChip);
    }
    if (message.avatarId !== "") {
      obj.avatarId = message.avatarId;
    }
    if (message.vipLevel !== 0) {
      obj.vipLevel = Math.round(message.vipLevel);
    }
    if (message.playingMatch !== undefined) {
      obj.playingMatch = PlayingMatch.toJSON(message.playingMatch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SimpleProfile>, I>>(base?: I): SimpleProfile {
    return SimpleProfile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SimpleProfile>, I>>(object: I): SimpleProfile {
    const message = createBaseSimpleProfile();
    message.userId = object.userId ?? "";
    message.userName = object.userName ?? "";
    message.displayName = object.displayName ?? "";
    message.status = object.status ?? "";
    message.accountChip = object.accountChip ?? 0;
    message.avatarId = object.avatarId ?? "";
    message.vipLevel = object.vipLevel ?? 0;
    message.playingMatch = (object.playingMatch !== undefined && object.playingMatch !== null)
      ? PlayingMatch.fromPartial(object.playingMatch)
      : undefined;
    return message;
  },
};

function createBaseListSimpleProfile(): ListSimpleProfile {
  return { profiles: [] };
}

export const ListSimpleProfile = {
  encode(message: ListSimpleProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profiles) {
      SimpleProfile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSimpleProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSimpleProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.profiles.push(SimpleProfile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListSimpleProfile {
    return {
      profiles: globalThis.Array.isArray(object?.profiles)
        ? object.profiles.map((e: any) => SimpleProfile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListSimpleProfile): unknown {
    const obj: any = {};
    if (message.profiles?.length) {
      obj.profiles = message.profiles.map((e) => SimpleProfile.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListSimpleProfile>, I>>(base?: I): ListSimpleProfile {
    return ListSimpleProfile.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListSimpleProfile>, I>>(object: I): ListSimpleProfile {
    const message = createBaseListSimpleProfile();
    message.profiles = object.profiles?.map((e) => SimpleProfile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuickChatUpdateRequest(): QuickChatUpdateRequest {
  return { texts: [] };
}

export const QuickChatUpdateRequest = {
  encode(message: QuickChatUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.texts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuickChatUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuickChatUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.texts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuickChatUpdateRequest {
    return { texts: globalThis.Array.isArray(object?.texts) ? object.texts.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: QuickChatUpdateRequest): unknown {
    const obj: any = {};
    if (message.texts?.length) {
      obj.texts = message.texts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuickChatUpdateRequest>, I>>(base?: I): QuickChatUpdateRequest {
    return QuickChatUpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuickChatUpdateRequest>, I>>(object: I): QuickChatUpdateRequest {
    const message = createBaseQuickChatUpdateRequest();
    message.texts = object.texts?.map((e) => e) || [];
    return message;
  },
};

function createBaseQuickChatResponse(): QuickChatResponse {
  return { texts: [] };
}

export const QuickChatResponse = {
  encode(message: QuickChatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.texts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuickChatResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuickChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.texts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuickChatResponse {
    return { texts: globalThis.Array.isArray(object?.texts) ? object.texts.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: QuickChatResponse): unknown {
    const obj: any = {};
    if (message.texts?.length) {
      obj.texts = message.texts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuickChatResponse>, I>>(base?: I): QuickChatResponse {
    return QuickChatResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuickChatResponse>, I>>(object: I): QuickChatResponse {
    const message = createBaseQuickChatResponse();
    message.texts = object.texts?.map((e) => e) || [];
    return message;
  },
};

function createBaseLangCode(): LangCode {
  return { isoCode: "", displayName: "", sourceUrl: "" };
}

export const LangCode = {
  encode(message: LangCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isoCode !== "") {
      writer.uint32(10).string(message.isoCode);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.sourceUrl !== "") {
      writer.uint32(26).string(message.sourceUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LangCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLangCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isoCode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LangCode {
    return {
      isoCode: isSet(object.isoCode) ? globalThis.String(object.isoCode) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      sourceUrl: isSet(object.sourceUrl) ? globalThis.String(object.sourceUrl) : "",
    };
  },

  toJSON(message: LangCode): unknown {
    const obj: any = {};
    if (message.isoCode !== "") {
      obj.isoCode = message.isoCode;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.sourceUrl !== "") {
      obj.sourceUrl = message.sourceUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LangCode>, I>>(base?: I): LangCode {
    return LangCode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LangCode>, I>>(object: I): LangCode {
    const message = createBaseLangCode();
    message.isoCode = object.isoCode ?? "";
    message.displayName = object.displayName ?? "";
    message.sourceUrl = object.sourceUrl ?? "";
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
