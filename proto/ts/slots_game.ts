/* eslint-disable */
import type { InfoBet } from "./color_game";

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
  SI_XIANG_SYMBOL_RAPIDPAY_LUCKYBOX = 2052,
  /** SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME - SIXANGBONUS */
  SI_XIANG_SYMBOL_SIXANGBONUS_DRAGONPEARL_GAME = 2305,
  SI_XIANG_SYMBOL_SIXANGBONUS_LUCKYDRAW_GAME = 2306,
  SI_XIANG_SYMBOL_SIXANGBONUS_GOLDPICK_GAME = 2307,
  SI_XIANG_SYMBOL_SIXANGBONUS_RAPIDPAY_GAME = 2308,
  /** SI_XIANG_SYMBOL_GORILLE - Tazan symbol */
  SI_XIANG_SYMBOL_GORILLE = 4097,
  SI_XIANG_SYMBOL_ELEPHANT = 4098,
  SI_XIANG_SYMBOL_JAGUAR = 4099,
  SI_XIANG_SYMBOL_SNACK = 4100,
  SI_XIANG_SYMBOL_JANE = 4101,
  SI_XIANG_SYMBOL_JANE_FATHER = 4102,
  SI_XIANG_SYMBOL_CLAYTON = 4103,
  SI_XIANG_SYMBOL_FREE_SPIN = 4104,
  SI_XIANG_SYMBOL_TARZAN = 4105,
  SI_XIANG_SYMBOL_LETTER_J = 4112,
  SI_XIANG_SYMBOL_LETTER_U = 4113,
  SI_XIANG_SYMBOL_LETTER_N = 4114,
  SI_XIANG_SYMBOL_LETTER_G = 4115,
  SI_XIANG_SYMBOL_LETTER_L = 4116,
  SI_XIANG_SYMBOL_LETTER_E = 4117,
  SI_XIANG_SYMBOL_DIAMOND = 4118,
  SI_XIANG_SYMBOL_TARZAN_MORE_TURNX2 = 4128,
  SI_XIANG_SYMBOL_TARZAN_MORE_TURNX3 = 4129,
  SI_XIANG_SYMBOL_TARZAN_RANDOM_1 = 4130,
  SI_XIANG_SYMBOL_TARZAN_RANDOM_2 = 4131,
  SI_XIANG_SYMBOL_TARZAN_RANDOM_3 = 4132,
  SI_XIANG_SYMBOL_TARZAN_RANDOM_4 = 4133,
  SI_XIANG_SYMBOL_TARZAN_RANDOM_5 = 4134,
  /** SI_XIANG_SYMBOL_JUICE_STRAWBERRY - Juice Garden */
  SI_XIANG_SYMBOL_JUICE_STRAWBERRY = 4353,
  SI_XIANG_SYMBOL_JUICE_WATERMELON = 4354,
  SI_XIANG_SYMBOL_JUICE_PINAPPLE = 4355,
  SI_XIANG_SYMBOL_JUICE_MANGOSTEEN = 4356,
  SI_XIANG_SYMBOL_JUICE_STONE_DIAMOND = 4357,
  SI_XIANG_SYMBOL_JUICE_STONE_GREEN = 4358,
  SI_XIANG_SYMBOL_JUICE_STONE_VIOLET = 4359,
  SI_XIANG_SYMBOL_JUICE_SCATTERS_X3 = 4360,
  SI_XIANG_SYMBOL_JUICE_SCATTERS_X4 = 4361,
  SI_XIANG_SYMBOL_JUICE_SCATTERS_X5 = 4368,
  /** SI_XIANG_SYMBOL_JUICE_FRUITBASKET_SPIN - fruit basket game */
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_SPIN = 4369,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_GRAND = 4370,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_MAJOR = 4371,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_MINOR = 4372,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_MINI = 4373,
  /** SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_1 - fruit rain */
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_1 = 4384,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_2 = 4385,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_3 = 4386,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_4 = 4387,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_5 = 4388,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_6 = 4389,
  SI_XIANG_SYMBOL_JUICE_FRUITBASKET_RANDOM_7 = 4390,
  SI_XIANG_SYMBOL_JUICE_FUIT_SELECT_FREE_GAME = 4391,
  SI_XIANG_SYMBOL_JUICE_FUIT_SELECT_FRUIT_RAIN = 4392,
  /** SI_XIANG_SYMBOL_SUIT_HEARTS - inca */
  SI_XIANG_SYMBOL_SUIT_HEARTS = 4608,
  SI_XIANG_SYMBOL_SUIT_DIAMONDS = 4609,
  SI_XIANG_SYMBOL_SUIT_CLUBS = 4610,
  SI_XIANG_SYMBOL_SUIT_SPADES = 4611,
  SI_XIANG_SYMBOL_SUN = 4612,
  SI_XIANG_SYMBOL_EAGLE_GARUDA = 4613,
  SI_XIANG_SYMBOL_ANTIQUE = 4614,
  /** SI_XIANG_SYMBOL_CHRISMAS_GIFT - noel */
  SI_XIANG_SYMBOL_CHRISMAS_GIFT = 4624,
  SI_XIANG_SYMBOL_CHRISMAS_CANDY = 4625,
  SI_XIANG_SYMBOL_CHRISMAS_RING = 4626,
  SI_XIANG_SYMBOL_WILD = 65535,
  UNRECOGNIZED = -1,
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
  /** SI_XIANG_GAME_TARZAN_JUNGLE_TREASURE - Tazan game */
  SI_XIANG_GAME_TARZAN_JUNGLE_TREASURE = 101,
  /** SI_XIANG_GAME_TARZAN_FREESPINX9 - Juice Garden */
  SI_XIANG_GAME_TARZAN_FREESPINX9 = 102,
  SI_XIANG_GAME_JUICE_NORMAL = 200,
  SI_XIANG_GAME_JUICE_FRUIT_BASKET = 201,
  SI_XIANG_GAME_JUICE_FRUIT_RAIN = 202,
  SI_XIANG_GAME_JUICE_FREE_GAME = 203,
  /**
   * SI_XIANG_GAME_INCA_FREE_GAME - SiXiangGame_SI_XIANG_GAME_NOEL_FREE_GAME = 301;
   * SiXiangGame_SI_XIANG_GAME_FRUIT_FREE_GAME = 301;
   */
  SI_XIANG_GAME_INCA_FREE_GAME = 301,
  UNRECOGNIZED = -1,
}

export enum BigWin {
  BIG_WIN_UNSPECIFIED = 0,
  BIG_WIN_NICE = 5,
  BIG_WIN_HUGE = 10,
  BIG_WIN_BIG = 25,
  BIG_WIN_MEGA = 50,
  UNRECOGNIZED = -1,
}

export enum WinJackpot {
  WIN_JACKPOT_UNSPECIFIED = 0,
  WIN_JACKPOT_MINOR = 10,
  WIN_JACKPOT_MAJOR = 20,
  WIN_JACKPOT_MEGA = 30,
  WIN_JACKPOT_GRAND = 150,
  WIN_JACKPOT_MINI = 1,
  UNRECOGNIZED = -1,
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
   *  thể hiện các symbol hiện tại của game, đã áp dụng rule thay thế wild
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
  /**
   * tổng số chip thắng trong game
   * int64 chips_win = 13;
   * cap nhat bien dong so du trong wallet
   * nếu true, có nghĩa có action cộng tiền ở wallet
   * nếu fale, 2 giá trị balance_chips_wallet_before và
   * balance_chips_wallet_after luôn = 0, nên bỏ qua
   * bool update_wallet = 104;
   */
  gameReward:
    | GameReward
    | undefined;
  /**
   * int64 total_chips_win_by_game = 17;
   * số chip trong wallet trước spin
   * các symbol đặc biệt thu thập được,
   * vd như eye ở sixiang, letter ở tarzan
   */
  collectionSymbols: CollectSymbol[];
  /** ngọc rừng xanh ở tarzan game */
  tsUnix: number;
  ratioFruitBasket: number;
  /** số lượt spin còn lại, -1 = unlimited */
  numSpinLeft: number;
  betLevels: number[];
  infoBet: InfoBet | undefined;
  chipsBuyGem: number;
  /**
   * số ngọc collect được để mở SI XIANG BONUS game
   * symbol is
   * SI_XIANG_GAME_DRAGON_PEARL
   * SI_XIANG_GAME_LUCKDRAW
   * SI_XIANG_GAME_GOLDPICK
   * SI_XIANG_GAME_RAPIDPAY
   */
  sixiangGems: SiXiangGame[];
  letterSymbols: SiXiangSymbol[];
  winJpHistory: JackpotHistory | undefined;
  gameConfig: GameConfig | undefined;
}

export interface GameConfig {
  numScatterSeq: number;
  numFreeSpin: number;
  numWild: number;
  ratioWild: number;
  ratioBasket: number;
}

/** Ma trận symbol */
export interface SlotMatrix {
  /** Mảng 2 chiều ở dạng list, rowxcol */
  lists: SiXiangSymbol[];
  /** số hàng tối đa */
  rows: number;
  /** số cột tối đa */
  cols: number;
  spinLists: SpinSymbol[];
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
  ratio: number;
  index: number;
  winJp: WinJackpot;
  winAmount: number;
  ratioBonus: number;
}

export interface CollectSymbol {
  symbol: SiXiangSymbol;
  /** so luong */
  qty: number;
  ratio: number;
}

export interface JackpotReward {
  winJackpot: WinJackpot;
  ratio: number;
  count: number;
  chips: number;
  /** tích lũy lịch sử chơi */
  chipsAccum: number;
}

export interface JackpotHistory {
  minor: JackpotReward | undefined;
  major: JackpotReward | undefined;
  mega: JackpotReward | undefined;
  grand: JackpotReward | undefined;
  mini: JackpotReward | undefined;
}

export interface Payline {
  id: number;
  symbol: SiXiangSymbol;
  numOccur: number;
  rate: number;
  chips: number;
  /** Array contain index of symbol in matrix */
  indices: number[];
}

export interface GameReward {
  updateWallet: boolean;
  /** số chip trong wallet trước spin */
  balanceChipsWalletBefore: number;
  /** số chip trong wallet sau spin */
  balanceChipsWalletAfter: number;
  /** tổng chip win trong 1 game */
  chipsWin: number;
  /**
   * vd trong game tarzan,
   * chip ở đây sẽ là tổng chip trong 9 lần spin
   */
  totalChipsWinByGame: number;
  /** ngọc rừng xanh ở tarzan game */
  updateChipsBonus: boolean;
  /**
   * int64 chips_bonus = 7;
   * save ratio win in some case
   */
  ratioWin: number;
  lineWin: number;
  totalRatioWin: number;
  totalLineWin: number;
  chipBetFee: number;
  chipFee: number;
  /** ratio bonus like tarzan payline cross freespin */
  ratioBonus: number;
  /** tarzan PerlGreenForest */
  perlGreenForest: number;
  perlGreenForestChips: number;
  perlGreenForestChipsCollect: number;
}

export interface SaveGame {
  lastUpdateUnix: number;
  data: string;
}
