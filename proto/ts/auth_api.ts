/* eslint-disable */

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
