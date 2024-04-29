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
)

func (g GameName) String() string {
	return string(g)
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
