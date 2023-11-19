/* eslint-disable */

export const protobufPackage = "api";

export interface Bank {
  senderId: string;
  recipientId: string;
  chips: number;
  chipsInBank: number;
  action: Bank_Action;
  balancePrev: number;
  balanceCurr: number;
  percenFee: number;
  amountFee: number;
}

export enum Bank_Action {
  ACTION_UNSPECIFIED = 0,
  ACTION_SEND_GIFT = 1,
  ACTION_RECV_GIFT = 2,
  ACTION_REVERT_SEND_GIF = 3,
  ACTION_PUSH_TO_SAFE = 4,
  ACTION_WITHDRAW = 5,
  UNRECOGNIZED = -1,
}
