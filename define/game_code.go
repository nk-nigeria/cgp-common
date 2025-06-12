package define

type GameName string

const (
	SixiangGameName GameName = "sixiang"
	TarzanGameName  GameName = "tarzan"
	JuicyGardenName GameName = "juicygarden"
	// clone game JuicyGardenName
	CryptoRush   GameName = "cryptorush"
	IncaGameName GameName = "inca"
	// clone inca
	NoelGameName  GameName = "noel"
	FruitGameName GameName = "fruit"

	// Duō Fú Duō Cái
	FortuneFoundFortune GameName = "fortunefoundfortune" // clone TarzanGameName
	// Clone Si Xiang Slots
	JourneyToTheWest GameName = "journeytothewest"

	BlackjackName   GameName = "blackjack"
	BandarqqName    GameName = "bandarqq"
	SicboName       GameName = "sicbo"
	BaccaratName    GameName = "baccarat"
	ColorGameName   GameName = "color-game"
	DragontigerName GameName = "dragontiger"
	GapleDomino     GameName = "gaple"
	ChinesePoker    GameName = "chinese-poker"
	Tongits         GameName = "tongits"
	WhotGame        GameName = "whot-game"
)

func (g GameName) String() string {
	return string(g)
}

func IsSlotGame(gameName GameName) bool {
	switch gameName {
	case SixiangGameName, TarzanGameName, JuicyGardenName,
		CryptoRush, IncaGameName, NoelGameName,
		FruitGameName, FortuneFoundFortune, JourneyToTheWest:
		return true
	default:
		return false
	}
}

func IsAllowJoinInGameOnProgress(gameCode string) bool {
	switch GameName(gameCode) {
	case SixiangGameName, TarzanGameName, JuicyGardenName:
		return false
	default:
		return true
	}
}

type CurrencyName string

const (
	CurrencyNameVND = "vnd"
	CurrencyNameUS  = "$"
)

func (g CurrencyName) String() string {
	return string(g)
}

func (g CurrencyName) FromId(id int) string {
	switch id {
	case 1:
		return CurrencyNameVND
	case 2:
		return CurrencyNameUS
	default:
		return ""
	}
}

// Black Jack : max 3
// Bandar : 20
// Baccarat : 5
// Sicbo : 20
// Gaple : 4
// Binh : 4
// Dragon Tiger : 20

var kDefaultMaxSize = 1
var MaxSizeMatchByGame map[GameName]int

func GetMaxSizeByGame(gameName GameName) int {
	size, exist := MaxSizeMatchByGame[gameName]
	if !exist {
		return kDefaultMaxSize
	}
	return size
}

func Init() {
	MaxSizeMatchByGame = make(map[GameName]int)
	MaxSizeMatchByGame[BlackjackName] = 3
	MaxSizeMatchByGame[BandarqqName] = 20
	MaxSizeMatchByGame[SicboName] = 20
	MaxSizeMatchByGame[BaccaratName] = 5
	MaxSizeMatchByGame[ColorGameName] = 4
	MaxSizeMatchByGame[DragontigerName] = 20
	MaxSizeMatchByGame[GapleDomino] = 4
	MaxSizeMatchByGame[ChinesePoker] = 4
	MaxSizeMatchByGame[Tongits] = 4
	MaxSizeMatchByGame[WhotGame] = 4
}

const (
	MinJpTreasure = 250 * 1000 * 1000
)
