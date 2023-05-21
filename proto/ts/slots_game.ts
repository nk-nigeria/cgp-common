/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

/**  */
export enum SiXiangSymbol {
  SI_XIANG_SYMBOL_UNSPECIFIED = 0,
  SI_XIANG_SYMBOL_10 = 1,
  SI_XIANG_SYMBOL_J = 2,
  SI_XIANG_SYMBOL_Q = 4,
  SI_XIANG_SYMBOL_K = 8,
  SI_XIANG_SYMBOL_A = 16,
  SI_XIANG_SYMBOL_BLUE_DRAGON = 32,
  SI_XIANG_SYMBOL_WHITE_TIGER = 64,
  SI_XIANG_SYMBOL_VERMILION_BIRD = 128,
  SI_XIANG_SYMBOL_WARRIOR = 256,
  SI_XIANG_SYMBOL_SCATTER = 512,
  /** SI_XIANG_SYMBOL_BONUS_DRAGONBALL - Bonus game */
  SI_XIANG_SYMBOL_BONUS_DRAGONBALL = 1025,
  SI_XIANG_SYMBOL_BONUS_LUCKYDRAW = 1026,
  SI_XIANG_SYMBOL_BONUS_GOLDPICK = 1027,
  SI_XIANG_SYMBOL_BONUS_RAPIDPAY = 1028,
  SI_XIANG_SYMBOL_BONUS_GOLDX10 = 1029,
  SI_XIANG_SYMBOL_BONUS_GOLDX20 = 1030,
  SI_XIANG_SYMBOL_BONUS_GOLDX30 = 1031,
  SI_XIANG_SYMBOL_BONUS_GOLDX50 = 1032,
  /**
   * SI_XIANG_SYMBOL_DRAGONPEARL_LUCKMONEY - Dragon Pearl
   * bao li xi, quay random ra eye bird/dragon...
   */
  SI_XIANG_SYMBOL_DRAGONPEARL_LUCKMONEY = 1280,
  /** SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM1 - ngoc tien random mcb */
  SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM1 = 1281,
  SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM2 = 1282,
  SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM3 = 1283,
  SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM4 = 1284,
  SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM5 = 1285,
  SI_XIANG_SYMBOL_DRAGONPEARL_EYE_BIRD = 1296,
  SI_XIANG_SYMBOL_DRAGONPEARL_EYE_TIGER = 1297,
  SI_XIANG_SYMBOL_DRAGONPEARL_EYE_WARRIOR = 1298,
  SI_XIANG_SYMBOL_DRAGONPEARL_EYE_DRAGON = 1299,
  SI_XIANG_SYMBOL_DRAGONPEARL_JP_MINOR = 1300,
  SI_XIANG_SYMBOL_DRAGONPEARL_JP_MAJOR = 1301,
  SI_XIANG_SYMBOL_DRAGONPEARL_JP_MEGA = 1302,
  SI_XIANG_SYMBOL_DRAGONPEARL_JP_GRAND = 1303,
  /** SI_XIANG_SYMBOL_LUCKYDRAW_MINOR - LUCKY DRAW SYMBOL */
  SI_XIANG_SYMBOL_LUCKYDRAW_MINOR = 1536,
  SI_XIANG_SYMBOL_LUCKYDRAW_MAJOR = 1537,
  SI_XIANG_SYMBOL_LUCKYDRAW_MEGA = 1538,
  SI_XIANG_SYMBOL_LUCKYDRAW_GRAND = 1539,
  SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_1 = 1540,
  SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_2 = 1541,
  SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_3 = 1542,
  /** SI_XIANG_SYMBOL_GOLD_PICK_TRYAGAIN - GOLP PICK */
  SI_XIANG_SYMBOL_GOLD_PICK_TRYAGAIN = 1792,
  SI_XIANG_SYMBOL_GOLD_PICK_GOLD1 = 1793,
  SI_XIANG_SYMBOL_GOLD_PICK_GOLD2 = 1794,
  SI_XIANG_SYMBOL_GOLD_PICK_GOLD3 = 1795,
  SI_XIANG_SYMBOL_GOLD_PICK_GOLD4 = 1796,
  SI_XIANG_SYMBOL_GOLD_PICK_GOLD5 = 1797,
  SI_XIANG_SYMBOL_GOLD_PICK_JP_MINOR = 1798,
  SI_XIANG_SYMBOL_GOLD_PICK_JP_MAJOR = 1799,
  SI_XIANG_SYMBOL_GOLD_PICK_JP_MEGA = 1800,
  /** SI_XIANG_SYMBOL_RAPIDPAY_END - RAPID PAY SYMBOL */
  SI_XIANG_SYMBOL_RAPIDPAY_END = 2048,
  SI_XIANG_SYMBOL_RAPIDPAY_X2 = 2049,
  SI_XIANG_SYMBOL_RAPIDPAY_X3 = 2050,
  SI_XIANG_SYMBOL_RAPIDPAY_X4 = 2051,
  /** SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME - SIXANGBONUS */
  SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME = 2305,
  SI_XIANG_SYMBOL_SIXANGBONUS_LUCKYDRAW_GAME = 2306,
  SI_XIANG_SYMBOL_SIXANGBONUS_GOLDPICK_GAME = 2307,
  SI_XIANG_SYMBOL_SIXANGBONUS_RAPIDPAY_GAME = 2308,
  SI_XIANG_SYMBOL_WILD = 4095,
  UNRECOGNIZED = -1,
}

export function siXiangSymbolFromJSON(object: any): SiXiangSymbol {
  switch (object) {
    case 0:
    case "SI_XIANG_SYMBOL_UNSPECIFIED":
      return SiXiangSymbol.SI_XIANG_SYMBOL_UNSPECIFIED;
    case 1:
    case "SI_XIANG_SYMBOL_10":
      return SiXiangSymbol.SI_XIANG_SYMBOL_10;
    case 2:
    case "SI_XIANG_SYMBOL_J":
      return SiXiangSymbol.SI_XIANG_SYMBOL_J;
    case 4:
    case "SI_XIANG_SYMBOL_Q":
      return SiXiangSymbol.SI_XIANG_SYMBOL_Q;
    case 8:
    case "SI_XIANG_SYMBOL_K":
      return SiXiangSymbol.SI_XIANG_SYMBOL_K;
    case 16:
    case "SI_XIANG_SYMBOL_A":
      return SiXiangSymbol.SI_XIANG_SYMBOL_A;
    case 32:
    case "SI_XIANG_SYMBOL_BLUE_DRAGON":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BLUE_DRAGON;
    case 64:
    case "SI_XIANG_SYMBOL_WHITE_TIGER":
      return SiXiangSymbol.SI_XIANG_SYMBOL_WHITE_TIGER;
    case 128:
    case "SI_XIANG_SYMBOL_VERMILION_BIRD":
      return SiXiangSymbol.SI_XIANG_SYMBOL_VERMILION_BIRD;
    case 256:
    case "SI_XIANG_SYMBOL_WARRIOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_WARRIOR;
    case 512:
    case "SI_XIANG_SYMBOL_SCATTER":
      return SiXiangSymbol.SI_XIANG_SYMBOL_SCATTER;
    case 1025:
    case "SI_XIANG_SYMBOL_BONUS_DRAGONBALL":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_DRAGONBALL;
    case 1026:
    case "SI_XIANG_SYMBOL_BONUS_LUCKYDRAW":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_LUCKYDRAW;
    case 1027:
    case "SI_XIANG_SYMBOL_BONUS_GOLDPICK":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDPICK;
    case 1028:
    case "SI_XIANG_SYMBOL_BONUS_RAPIDPAY":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_RAPIDPAY;
    case 1029:
    case "SI_XIANG_SYMBOL_BONUS_GOLDX10":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX10;
    case 1030:
    case "SI_XIANG_SYMBOL_BONUS_GOLDX20":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX20;
    case 1031:
    case "SI_XIANG_SYMBOL_BONUS_GOLDX30":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX30;
    case 1032:
    case "SI_XIANG_SYMBOL_BONUS_GOLDX50":
      return SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX50;
    case 1280:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_LUCKMONEY":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_LUCKMONEY;
    case 1281:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM1":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM1;
    case 1282:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM2":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM2;
    case 1283:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM3":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM3;
    case 1284:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM4":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM4;
    case 1285:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM5":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM5;
    case 1296:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_BIRD":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_BIRD;
    case 1297:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_TIGER":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_TIGER;
    case 1298:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_WARRIOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_WARRIOR;
    case 1299:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_DRAGON":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_DRAGON;
    case 1300:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_JP_MINOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_MINOR;
    case 1301:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_JP_MAJOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_MAJOR;
    case 1302:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_JP_MEGA":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_MEGA;
    case 1303:
    case "SI_XIANG_SYMBOL_DRAGONPEARL_JP_GRAND":
      return SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_GRAND;
    case 1536:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_MINOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_MINOR;
    case 1537:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_MAJOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_MAJOR;
    case 1538:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_MEGA":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_MEGA;
    case 1539:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_GRAND":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GRAND;
    case 1540:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_1":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_1;
    case 1541:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_2":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_2;
    case 1542:
    case "SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_3":
      return SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_3;
    case 1792:
    case "SI_XIANG_SYMBOL_GOLD_PICK_TRYAGAIN":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_TRYAGAIN;
    case 1793:
    case "SI_XIANG_SYMBOL_GOLD_PICK_GOLD1":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD1;
    case 1794:
    case "SI_XIANG_SYMBOL_GOLD_PICK_GOLD2":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD2;
    case 1795:
    case "SI_XIANG_SYMBOL_GOLD_PICK_GOLD3":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD3;
    case 1796:
    case "SI_XIANG_SYMBOL_GOLD_PICK_GOLD4":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD4;
    case 1797:
    case "SI_XIANG_SYMBOL_GOLD_PICK_GOLD5":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD5;
    case 1798:
    case "SI_XIANG_SYMBOL_GOLD_PICK_JP_MINOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_JP_MINOR;
    case 1799:
    case "SI_XIANG_SYMBOL_GOLD_PICK_JP_MAJOR":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_JP_MAJOR;
    case 1800:
    case "SI_XIANG_SYMBOL_GOLD_PICK_JP_MEGA":
      return SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_JP_MEGA;
    case 2048:
    case "SI_XIANG_SYMBOL_RAPIDPAY_END":
      return SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_END;
    case 2049:
    case "SI_XIANG_SYMBOL_RAPIDPAY_X2":
      return SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_X2;
    case 2050:
    case "SI_XIANG_SYMBOL_RAPIDPAY_X3":
      return SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_X3;
    case 2051:
    case "SI_XIANG_SYMBOL_RAPIDPAY_X4":
      return SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_X4;
    case 2305:
    case "SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME":
      return SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME;
    case 2306:
    case "SI_XIANG_SYMBOL_SIXANGBONUS_LUCKYDRAW_GAME":
      return SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_LUCKYDRAW_GAME;
    case 2307:
    case "SI_XIANG_SYMBOL_SIXANGBONUS_GOLDPICK_GAME":
      return SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_GOLDPICK_GAME;
    case 2308:
    case "SI_XIANG_SYMBOL_SIXANGBONUS_RAPIDPAY_GAME":
      return SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_RAPIDPAY_GAME;
    case 4095:
    case "SI_XIANG_SYMBOL_WILD":
      return SiXiangSymbol.SI_XIANG_SYMBOL_WILD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SiXiangSymbol.UNRECOGNIZED;
  }
}

export function siXiangSymbolToJSON(object: SiXiangSymbol): string {
  switch (object) {
    case SiXiangSymbol.SI_XIANG_SYMBOL_UNSPECIFIED:
      return "SI_XIANG_SYMBOL_UNSPECIFIED";
    case SiXiangSymbol.SI_XIANG_SYMBOL_10:
      return "SI_XIANG_SYMBOL_10";
    case SiXiangSymbol.SI_XIANG_SYMBOL_J:
      return "SI_XIANG_SYMBOL_J";
    case SiXiangSymbol.SI_XIANG_SYMBOL_Q:
      return "SI_XIANG_SYMBOL_Q";
    case SiXiangSymbol.SI_XIANG_SYMBOL_K:
      return "SI_XIANG_SYMBOL_K";
    case SiXiangSymbol.SI_XIANG_SYMBOL_A:
      return "SI_XIANG_SYMBOL_A";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BLUE_DRAGON:
      return "SI_XIANG_SYMBOL_BLUE_DRAGON";
    case SiXiangSymbol.SI_XIANG_SYMBOL_WHITE_TIGER:
      return "SI_XIANG_SYMBOL_WHITE_TIGER";
    case SiXiangSymbol.SI_XIANG_SYMBOL_VERMILION_BIRD:
      return "SI_XIANG_SYMBOL_VERMILION_BIRD";
    case SiXiangSymbol.SI_XIANG_SYMBOL_WARRIOR:
      return "SI_XIANG_SYMBOL_WARRIOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_SCATTER:
      return "SI_XIANG_SYMBOL_SCATTER";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_DRAGONBALL:
      return "SI_XIANG_SYMBOL_BONUS_DRAGONBALL";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_LUCKYDRAW:
      return "SI_XIANG_SYMBOL_BONUS_LUCKYDRAW";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDPICK:
      return "SI_XIANG_SYMBOL_BONUS_GOLDPICK";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_RAPIDPAY:
      return "SI_XIANG_SYMBOL_BONUS_RAPIDPAY";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX10:
      return "SI_XIANG_SYMBOL_BONUS_GOLDX10";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX20:
      return "SI_XIANG_SYMBOL_BONUS_GOLDX20";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX30:
      return "SI_XIANG_SYMBOL_BONUS_GOLDX30";
    case SiXiangSymbol.SI_XIANG_SYMBOL_BONUS_GOLDX50:
      return "SI_XIANG_SYMBOL_BONUS_GOLDX50";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_LUCKMONEY:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_LUCKMONEY";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM1:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM1";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM2:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM2";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM3:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM3";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM4:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM4";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM5:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_GEM_RANDOM5";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_BIRD:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_BIRD";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_TIGER:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_TIGER";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_WARRIOR:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_WARRIOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_EYE_DRAGON:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_EYE_DRAGON";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_MINOR:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_JP_MINOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_MAJOR:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_JP_MAJOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_MEGA:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_JP_MEGA";
    case SiXiangSymbol.SI_XIANG_SYMBOL_DRAGONPEARL_JP_GRAND:
      return "SI_XIANG_SYMBOL_DRAGONPEARL_JP_GRAND";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_MINOR:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_MINOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_MAJOR:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_MAJOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_MEGA:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_MEGA";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GRAND:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_GRAND";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_1:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_1";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_2:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_2";
    case SiXiangSymbol.SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_3:
      return "SI_XIANG_SYMBOL_LUCKYDRAW_GOLD_3";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_TRYAGAIN:
      return "SI_XIANG_SYMBOL_GOLD_PICK_TRYAGAIN";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD1:
      return "SI_XIANG_SYMBOL_GOLD_PICK_GOLD1";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD2:
      return "SI_XIANG_SYMBOL_GOLD_PICK_GOLD2";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD3:
      return "SI_XIANG_SYMBOL_GOLD_PICK_GOLD3";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD4:
      return "SI_XIANG_SYMBOL_GOLD_PICK_GOLD4";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_GOLD5:
      return "SI_XIANG_SYMBOL_GOLD_PICK_GOLD5";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_JP_MINOR:
      return "SI_XIANG_SYMBOL_GOLD_PICK_JP_MINOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_JP_MAJOR:
      return "SI_XIANG_SYMBOL_GOLD_PICK_JP_MAJOR";
    case SiXiangSymbol.SI_XIANG_SYMBOL_GOLD_PICK_JP_MEGA:
      return "SI_XIANG_SYMBOL_GOLD_PICK_JP_MEGA";
    case SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_END:
      return "SI_XIANG_SYMBOL_RAPIDPAY_END";
    case SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_X2:
      return "SI_XIANG_SYMBOL_RAPIDPAY_X2";
    case SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_X3:
      return "SI_XIANG_SYMBOL_RAPIDPAY_X3";
    case SiXiangSymbol.SI_XIANG_SYMBOL_RAPIDPAY_X4:
      return "SI_XIANG_SYMBOL_RAPIDPAY_X4";
    case SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME:
      return "SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME";
    case SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_LUCKYDRAW_GAME:
      return "SI_XIANG_SYMBOL_SIXANGBONUS_LUCKYDRAW_GAME";
    case SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_GOLDPICK_GAME:
      return "SI_XIANG_SYMBOL_SIXANGBONUS_GOLDPICK_GAME";
    case SiXiangSymbol.SI_XIANG_SYMBOL_SIXANGBONUS_RAPIDPAY_GAME:
      return "SI_XIANG_SYMBOL_SIXANGBONUS_RAPIDPAY_GAME";
    case SiXiangSymbol.SI_XIANG_SYMBOL_WILD:
      return "SI_XIANG_SYMBOL_WILD";
    case SiXiangSymbol.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SiXiangGame {
  SI_XIANG_GAME_UNSPECIFIED = 0,
  SI_XIANG_GAME_NORMAL = 1,
  SI_XIANG_GAME_BONUS = 2,
  SI_XIANG_GAME_DRAGON_PEARL = 3,
  SI_XIANG_GAME_LUCKDRAW = 4,
  SI_XIANG_GAME_GOLDPICK = 5,
  SI_XIANG_GAME_RAPIDPAY = 6,
  SI_XIANG_GAME_SIXANGBONUS = 7,
  SI_XIANG_GAME_SIXANGBONUS_DRAGON_PEARL = 8,
  SI_XIANG_GAME_SIXANGBONUS_LUCKDRAW = 9,
  SI_XIANG_GAME_SIXANGBONUS_GOLDPICK = 10,
  SI_XIANG_GAME_SIXANGBONUS_RAPIDPAY = 11,
  UNRECOGNIZED = -1,
}

export function siXiangGameFromJSON(object: any): SiXiangGame {
  switch (object) {
    case 0:
    case "SI_XIANG_GAME_UNSPECIFIED":
      return SiXiangGame.SI_XIANG_GAME_UNSPECIFIED;
    case 1:
    case "SI_XIANG_GAME_NORMAL":
      return SiXiangGame.SI_XIANG_GAME_NORMAL;
    case 2:
    case "SI_XIANG_GAME_BONUS":
      return SiXiangGame.SI_XIANG_GAME_BONUS;
    case 3:
    case "SI_XIANG_GAME_DRAGON_PEARL":
      return SiXiangGame.SI_XIANG_GAME_DRAGON_PEARL;
    case 4:
    case "SI_XIANG_GAME_LUCKDRAW":
      return SiXiangGame.SI_XIANG_GAME_LUCKDRAW;
    case 5:
    case "SI_XIANG_GAME_GOLDPICK":
      return SiXiangGame.SI_XIANG_GAME_GOLDPICK;
    case 6:
    case "SI_XIANG_GAME_RAPIDPAY":
      return SiXiangGame.SI_XIANG_GAME_RAPIDPAY;
    case 7:
    case "SI_XIANG_GAME_SIXANGBONUS":
      return SiXiangGame.SI_XIANG_GAME_SIXANGBONUS;
    case 8:
    case "SI_XIANG_GAME_SIXANGBONUS_DRAGON_PEARL":
      return SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_DRAGON_PEARL;
    case 9:
    case "SI_XIANG_GAME_SIXANGBONUS_LUCKDRAW":
      return SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_LUCKDRAW;
    case 10:
    case "SI_XIANG_GAME_SIXANGBONUS_GOLDPICK":
      return SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_GOLDPICK;
    case 11:
    case "SI_XIANG_GAME_SIXANGBONUS_RAPIDPAY":
      return SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_RAPIDPAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SiXiangGame.UNRECOGNIZED;
  }
}

export function siXiangGameToJSON(object: SiXiangGame): string {
  switch (object) {
    case SiXiangGame.SI_XIANG_GAME_UNSPECIFIED:
      return "SI_XIANG_GAME_UNSPECIFIED";
    case SiXiangGame.SI_XIANG_GAME_NORMAL:
      return "SI_XIANG_GAME_NORMAL";
    case SiXiangGame.SI_XIANG_GAME_BONUS:
      return "SI_XIANG_GAME_BONUS";
    case SiXiangGame.SI_XIANG_GAME_DRAGON_PEARL:
      return "SI_XIANG_GAME_DRAGON_PEARL";
    case SiXiangGame.SI_XIANG_GAME_LUCKDRAW:
      return "SI_XIANG_GAME_LUCKDRAW";
    case SiXiangGame.SI_XIANG_GAME_GOLDPICK:
      return "SI_XIANG_GAME_GOLDPICK";
    case SiXiangGame.SI_XIANG_GAME_RAPIDPAY:
      return "SI_XIANG_GAME_RAPIDPAY";
    case SiXiangGame.SI_XIANG_GAME_SIXANGBONUS:
      return "SI_XIANG_GAME_SIXANGBONUS";
    case SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_DRAGON_PEARL:
      return "SI_XIANG_GAME_SIXANGBONUS_DRAGON_PEARL";
    case SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_LUCKDRAW:
      return "SI_XIANG_GAME_SIXANGBONUS_LUCKDRAW";
    case SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_GOLDPICK:
      return "SI_XIANG_GAME_SIXANGBONUS_GOLDPICK";
    case SiXiangGame.SI_XIANG_GAME_SIXANGBONUS_RAPIDPAY:
      return "SI_XIANG_GAME_SIXANGBONUS_RAPIDPAY";
    case SiXiangGame.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BigWin {
  BIG_WIN_UNSPECIFIED = 0,
  BIG_WIN_NICE = 5,
  BIG_WIN_HUGE = 10,
  BIG_WIN_BIG = 25,
  BIG_WIN_MEGA = 50,
  UNRECOGNIZED = -1,
}

export function bigWinFromJSON(object: any): BigWin {
  switch (object) {
    case 0:
    case "BIG_WIN_UNSPECIFIED":
      return BigWin.BIG_WIN_UNSPECIFIED;
    case 5:
    case "BIG_WIN_NICE":
      return BigWin.BIG_WIN_NICE;
    case 10:
    case "BIG_WIN_HUGE":
      return BigWin.BIG_WIN_HUGE;
    case 25:
    case "BIG_WIN_BIG":
      return BigWin.BIG_WIN_BIG;
    case 50:
    case "BIG_WIN_MEGA":
      return BigWin.BIG_WIN_MEGA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BigWin.UNRECOGNIZED;
  }
}

export function bigWinToJSON(object: BigWin): string {
  switch (object) {
    case BigWin.BIG_WIN_UNSPECIFIED:
      return "BIG_WIN_UNSPECIFIED";
    case BigWin.BIG_WIN_NICE:
      return "BIG_WIN_NICE";
    case BigWin.BIG_WIN_HUGE:
      return "BIG_WIN_HUGE";
    case BigWin.BIG_WIN_BIG:
      return "BIG_WIN_BIG";
    case BigWin.BIG_WIN_MEGA:
      return "BIG_WIN_MEGA";
    case BigWin.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum WinJackpot {
  WIN_JACKPOT_UNSPECIFIED = 0,
  WIN_JACKPOT_MINOR = 10,
  WIN_JACKPOT_MAJOR = 50,
  WIN_JACKPOT_MEGA = 100,
  WIN_JACKPOT_GRAND = 500,
  UNRECOGNIZED = -1,
}

export function winJackpotFromJSON(object: any): WinJackpot {
  switch (object) {
    case 0:
    case "WIN_JACKPOT_UNSPECIFIED":
      return WinJackpot.WIN_JACKPOT_UNSPECIFIED;
    case 10:
    case "WIN_JACKPOT_MINOR":
      return WinJackpot.WIN_JACKPOT_MINOR;
    case 50:
    case "WIN_JACKPOT_MAJOR":
      return WinJackpot.WIN_JACKPOT_MAJOR;
    case 100:
    case "WIN_JACKPOT_MEGA":
      return WinJackpot.WIN_JACKPOT_MEGA;
    case 500:
    case "WIN_JACKPOT_GRAND":
      return WinJackpot.WIN_JACKPOT_GRAND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WinJackpot.UNRECOGNIZED;
  }
}

export function winJackpotToJSON(object: WinJackpot): string {
  switch (object) {
    case WinJackpot.WIN_JACKPOT_UNSPECIFIED:
      return "WIN_JACKPOT_UNSPECIFIED";
    case WinJackpot.WIN_JACKPOT_MINOR:
      return "WIN_JACKPOT_MINOR";
    case WinJackpot.WIN_JACKPOT_MAJOR:
      return "WIN_JACKPOT_MAJOR";
    case WinJackpot.WIN_JACKPOT_MEGA:
      return "WIN_JACKPOT_MEGA";
    case WinJackpot.WIN_JACKPOT_GRAND:
      return "WIN_JACKPOT_GRAND";
    case WinJackpot.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SlotDesk {
  /**
   * ma trận rowxcol ở dạng array 1 chiều,
   * thể hiện các symbol hiện tại của game
   */
  matrix:
    | SlotMatrix
    | undefined;
  /**
   * ma trận 5x3 ở dạng array 1 chiều,
   * thể hiện các symbol hiện tại của game, đã áp dụng rule thay thế wild
   */
  spreadMatrix:
    | SlotMatrix
    | undefined;
  /** mảng chưa danh sách payline đã win. */
  paylines: Payline[];
  /** mức cược hiện tại của lần spin */
  chipsMcb: number;
  /** loại game kế tiếp user sẽ chơi */
  nextSixiangGame: SiXiangGame;
  /** loại game hiện tại user đang chơi */
  currentSixiangGame: SiXiangGame;
  /**
   * true khi kết thúc game, và có hành động cập nhật số dư ví của user
   * ví dụ game bình thường mỗi lần spin thì sẽ kết thúc game và + tiền
   * nhưng các game đặc biệt như bonus, lucky draw ...
   * thì sau x lần spin mới end game
   * khi đó mới cộng tiền
   */
  isFinishGame: boolean;
  /** Is sixinag bonus, x4 reward, chưa làm */
  isInSixiangBonus: boolean;
  /** các mảng symbol quay được ở các game đặc biệt. */
  spinSymbols: SpinSymbol[];
  /** loại jackot đã win */
  winJp: WinJackpot;
  /** loại big win (mega, huge, big...) */
  bigWin: BigWin;
  /** tổng số chip thắng trong game */
  chipsWin: number;
  /**
   * cap nhat bien dong so du trong wallet
   * nếu true, có nghĩa có action cộng tiền ở wallet
   * nếu fale, 2 giá trị balance_chips_wallet_before và
   * balance_chips_wallet_after luôn = 0, nên bỏ qua
   */
  updateWallet: boolean;
  /** số chip trong wallet trước spin */
  balanceChipsWalletBefore: number;
  /** số chip trong wallet sau spin */
  balanceChipsWalletAfter: number;
}

/** Ma trận symbol */
export interface SlotMatrix {
  /** Mảng 2 chiều ở dạng list, rowxcol */
  lists: SiXiangSymbol[];
  /** số hàng tối đa */
  rows: number;
  /** số cột tối đa */
  cols: number;
}

/**
 * Symbol quay được
 * có số hàng là row, côt là col
 * với ô đầu tính ở (0,0)
 */
export interface SpinSymbol {
  symbol: SiXiangSymbol;
  col: number;
  row: number;
}

export interface Payline {
  id: number;
  symbol: SiXiangSymbol;
  numOccur: number;
  rate: number;
  chips: number;
}

function createBaseSlotDesk(): SlotDesk {
  return {
    matrix: undefined,
    spreadMatrix: undefined,
    paylines: [],
    chipsMcb: 0,
    nextSixiangGame: 0,
    currentSixiangGame: 0,
    isFinishGame: false,
    isInSixiangBonus: false,
    spinSymbols: [],
    winJp: 0,
    bigWin: 0,
    chipsWin: 0,
    updateWallet: false,
    balanceChipsWalletBefore: 0,
    balanceChipsWalletAfter: 0,
  };
}

export const SlotDesk = {
  encode(message: SlotDesk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matrix !== undefined) {
      SlotMatrix.encode(message.matrix, writer.uint32(10).fork()).ldelim();
    }
    if (message.spreadMatrix !== undefined) {
      SlotMatrix.encode(message.spreadMatrix, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.paylines) {
      Payline.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.chipsMcb !== 0) {
      writer.uint32(48).int64(message.chipsMcb);
    }
    if (message.nextSixiangGame !== 0) {
      writer.uint32(56).int32(message.nextSixiangGame);
    }
    if (message.currentSixiangGame !== 0) {
      writer.uint32(800).int32(message.currentSixiangGame);
    }
    if (message.isFinishGame === true) {
      writer.uint32(808).bool(message.isFinishGame);
    }
    if (message.isInSixiangBonus === true) {
      writer.uint32(880).bool(message.isInSixiangBonus);
    }
    for (const v of message.spinSymbols) {
      SpinSymbol.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.winJp !== 0) {
      writer.uint32(72).int32(message.winJp);
    }
    if (message.bigWin !== 0) {
      writer.uint32(88).int32(message.bigWin);
    }
    if (message.chipsWin !== 0) {
      writer.uint32(104).int64(message.chipsWin);
    }
    if (message.updateWallet === true) {
      writer.uint32(832).bool(message.updateWallet);
    }
    if (message.balanceChipsWalletBefore !== 0) {
      writer.uint32(112).int64(message.balanceChipsWalletBefore);
    }
    if (message.balanceChipsWalletAfter !== 0) {
      writer.uint32(120).int64(message.balanceChipsWalletAfter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlotDesk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlotDesk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matrix = SlotMatrix.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spreadMatrix = SlotMatrix.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.paylines.push(Payline.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chipsMcb = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.nextSixiangGame = reader.int32() as any;
          continue;
        case 100:
          if (tag !== 800) {
            break;
          }

          message.currentSixiangGame = reader.int32() as any;
          continue;
        case 101:
          if (tag !== 808) {
            break;
          }

          message.isFinishGame = reader.bool();
          continue;
        case 110:
          if (tag !== 880) {
            break;
          }

          message.isInSixiangBonus = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.spinSymbols.push(SpinSymbol.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.winJp = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.bigWin = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.chipsWin = longToNumber(reader.int64() as Long);
          continue;
        case 104:
          if (tag !== 832) {
            break;
          }

          message.updateWallet = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.balanceChipsWalletBefore = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.balanceChipsWalletAfter = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SlotDesk {
    return {
      matrix: isSet(object.matrix) ? SlotMatrix.fromJSON(object.matrix) : undefined,
      spreadMatrix: isSet(object.spreadMatrix) ? SlotMatrix.fromJSON(object.spreadMatrix) : undefined,
      paylines: Array.isArray(object?.paylines) ? object.paylines.map((e: any) => Payline.fromJSON(e)) : [],
      chipsMcb: isSet(object.chipsMcb) ? Number(object.chipsMcb) : 0,
      nextSixiangGame: isSet(object.nextSixiangGame) ? siXiangGameFromJSON(object.nextSixiangGame) : 0,
      currentSixiangGame: isSet(object.currentSixiangGame) ? siXiangGameFromJSON(object.currentSixiangGame) : 0,
      isFinishGame: isSet(object.isFinishGame) ? Boolean(object.isFinishGame) : false,
      isInSixiangBonus: isSet(object.isInSixiangBonus) ? Boolean(object.isInSixiangBonus) : false,
      spinSymbols: Array.isArray(object?.spinSymbols) ? object.spinSymbols.map((e: any) => SpinSymbol.fromJSON(e)) : [],
      winJp: isSet(object.winJp) ? winJackpotFromJSON(object.winJp) : 0,
      bigWin: isSet(object.bigWin) ? bigWinFromJSON(object.bigWin) : 0,
      chipsWin: isSet(object.chipsWin) ? Number(object.chipsWin) : 0,
      updateWallet: isSet(object.updateWallet) ? Boolean(object.updateWallet) : false,
      balanceChipsWalletBefore: isSet(object.balanceChipsWalletBefore) ? Number(object.balanceChipsWalletBefore) : 0,
      balanceChipsWalletAfter: isSet(object.balanceChipsWalletAfter) ? Number(object.balanceChipsWalletAfter) : 0,
    };
  },

  toJSON(message: SlotDesk): unknown {
    const obj: any = {};
    message.matrix !== undefined && (obj.matrix = message.matrix ? SlotMatrix.toJSON(message.matrix) : undefined);
    message.spreadMatrix !== undefined &&
      (obj.spreadMatrix = message.spreadMatrix ? SlotMatrix.toJSON(message.spreadMatrix) : undefined);
    if (message.paylines) {
      obj.paylines = message.paylines.map((e) => e ? Payline.toJSON(e) : undefined);
    } else {
      obj.paylines = [];
    }
    message.chipsMcb !== undefined && (obj.chipsMcb = Math.round(message.chipsMcb));
    message.nextSixiangGame !== undefined && (obj.nextSixiangGame = siXiangGameToJSON(message.nextSixiangGame));
    message.currentSixiangGame !== undefined &&
      (obj.currentSixiangGame = siXiangGameToJSON(message.currentSixiangGame));
    message.isFinishGame !== undefined && (obj.isFinishGame = message.isFinishGame);
    message.isInSixiangBonus !== undefined && (obj.isInSixiangBonus = message.isInSixiangBonus);
    if (message.spinSymbols) {
      obj.spinSymbols = message.spinSymbols.map((e) => e ? SpinSymbol.toJSON(e) : undefined);
    } else {
      obj.spinSymbols = [];
    }
    message.winJp !== undefined && (obj.winJp = winJackpotToJSON(message.winJp));
    message.bigWin !== undefined && (obj.bigWin = bigWinToJSON(message.bigWin));
    message.chipsWin !== undefined && (obj.chipsWin = Math.round(message.chipsWin));
    message.updateWallet !== undefined && (obj.updateWallet = message.updateWallet);
    message.balanceChipsWalletBefore !== undefined &&
      (obj.balanceChipsWalletBefore = Math.round(message.balanceChipsWalletBefore));
    message.balanceChipsWalletAfter !== undefined &&
      (obj.balanceChipsWalletAfter = Math.round(message.balanceChipsWalletAfter));
    return obj;
  },

  create<I extends Exact<DeepPartial<SlotDesk>, I>>(base?: I): SlotDesk {
    return SlotDesk.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SlotDesk>, I>>(object: I): SlotDesk {
    const message = createBaseSlotDesk();
    message.matrix = (object.matrix !== undefined && object.matrix !== null)
      ? SlotMatrix.fromPartial(object.matrix)
      : undefined;
    message.spreadMatrix = (object.spreadMatrix !== undefined && object.spreadMatrix !== null)
      ? SlotMatrix.fromPartial(object.spreadMatrix)
      : undefined;
    message.paylines = object.paylines?.map((e) => Payline.fromPartial(e)) || [];
    message.chipsMcb = object.chipsMcb ?? 0;
    message.nextSixiangGame = object.nextSixiangGame ?? 0;
    message.currentSixiangGame = object.currentSixiangGame ?? 0;
    message.isFinishGame = object.isFinishGame ?? false;
    message.isInSixiangBonus = object.isInSixiangBonus ?? false;
    message.spinSymbols = object.spinSymbols?.map((e) => SpinSymbol.fromPartial(e)) || [];
    message.winJp = object.winJp ?? 0;
    message.bigWin = object.bigWin ?? 0;
    message.chipsWin = object.chipsWin ?? 0;
    message.updateWallet = object.updateWallet ?? false;
    message.balanceChipsWalletBefore = object.balanceChipsWalletBefore ?? 0;
    message.balanceChipsWalletAfter = object.balanceChipsWalletAfter ?? 0;
    return message;
  },
};

function createBaseSlotMatrix(): SlotMatrix {
  return { lists: [], rows: 0, cols: 0 };
}

export const SlotMatrix = {
  encode(message: SlotMatrix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.lists) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.rows !== 0) {
      writer.uint32(16).int32(message.rows);
    }
    if (message.cols !== 0) {
      writer.uint32(24).int32(message.cols);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlotMatrix {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlotMatrix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.lists.push(reader.int32() as any);

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lists.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rows = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cols = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SlotMatrix {
    return {
      lists: Array.isArray(object?.lists) ? object.lists.map((e: any) => siXiangSymbolFromJSON(e)) : [],
      rows: isSet(object.rows) ? Number(object.rows) : 0,
      cols: isSet(object.cols) ? Number(object.cols) : 0,
    };
  },

  toJSON(message: SlotMatrix): unknown {
    const obj: any = {};
    if (message.lists) {
      obj.lists = message.lists.map((e) => siXiangSymbolToJSON(e));
    } else {
      obj.lists = [];
    }
    message.rows !== undefined && (obj.rows = Math.round(message.rows));
    message.cols !== undefined && (obj.cols = Math.round(message.cols));
    return obj;
  },

  create<I extends Exact<DeepPartial<SlotMatrix>, I>>(base?: I): SlotMatrix {
    return SlotMatrix.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SlotMatrix>, I>>(object: I): SlotMatrix {
    const message = createBaseSlotMatrix();
    message.lists = object.lists?.map((e) => e) || [];
    message.rows = object.rows ?? 0;
    message.cols = object.cols ?? 0;
    return message;
  },
};

function createBaseSpinSymbol(): SpinSymbol {
  return { symbol: 0, col: 0, row: 0 };
}

export const SpinSymbol = {
  encode(message: SpinSymbol, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== 0) {
      writer.uint32(8).int32(message.symbol);
    }
    if (message.col !== 0) {
      writer.uint32(16).int32(message.col);
    }
    if (message.row !== 0) {
      writer.uint32(24).int32(message.row);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpinSymbol {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpinSymbol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.symbol = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.col = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.row = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpinSymbol {
    return {
      symbol: isSet(object.symbol) ? siXiangSymbolFromJSON(object.symbol) : 0,
      col: isSet(object.col) ? Number(object.col) : 0,
      row: isSet(object.row) ? Number(object.row) : 0,
    };
  },

  toJSON(message: SpinSymbol): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = siXiangSymbolToJSON(message.symbol));
    message.col !== undefined && (obj.col = Math.round(message.col));
    message.row !== undefined && (obj.row = Math.round(message.row));
    return obj;
  },

  create<I extends Exact<DeepPartial<SpinSymbol>, I>>(base?: I): SpinSymbol {
    return SpinSymbol.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SpinSymbol>, I>>(object: I): SpinSymbol {
    const message = createBaseSpinSymbol();
    message.symbol = object.symbol ?? 0;
    message.col = object.col ?? 0;
    message.row = object.row ?? 0;
    return message;
  },
};

function createBasePayline(): Payline {
  return { id: 0, symbol: 0, numOccur: 0, rate: 0, chips: 0 };
}

export const Payline = {
  encode(message: Payline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.symbol !== 0) {
      writer.uint32(16).int32(message.symbol);
    }
    if (message.numOccur !== 0) {
      writer.uint32(24).int32(message.numOccur);
    }
    if (message.rate !== 0) {
      writer.uint32(33).double(message.rate);
    }
    if (message.chips !== 0) {
      writer.uint32(40).int64(message.chips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payline {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.symbol = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.numOccur = reader.int32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.rate = reader.double();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.chips = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Payline {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      symbol: isSet(object.symbol) ? siXiangSymbolFromJSON(object.symbol) : 0,
      numOccur: isSet(object.numOccur) ? Number(object.numOccur) : 0,
      rate: isSet(object.rate) ? Number(object.rate) : 0,
      chips: isSet(object.chips) ? Number(object.chips) : 0,
    };
  },

  toJSON(message: Payline): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.symbol !== undefined && (obj.symbol = siXiangSymbolToJSON(message.symbol));
    message.numOccur !== undefined && (obj.numOccur = Math.round(message.numOccur));
    message.rate !== undefined && (obj.rate = message.rate);
    message.chips !== undefined && (obj.chips = Math.round(message.chips));
    return obj;
  },

  create<I extends Exact<DeepPartial<Payline>, I>>(base?: I): Payline {
    return Payline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Payline>, I>>(object: I): Payline {
    const message = createBasePayline();
    message.id = object.id ?? 0;
    message.symbol = object.symbol ?? 0;
    message.numOccur = object.numOccur ?? 0;
    message.rate = object.rate ?? 0;
    message.chips = object.chips ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
