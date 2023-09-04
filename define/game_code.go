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

	BlackjackName   GameName = "blackjack"
	BandarqqName    GameName = "bandarqq"
	SicboName       GameName = "sicbo"
	BaccaratName    GameName = "baccarat"
	ColorGameName   GameName = "color-game"
	DragontigerName GameName = "dragontiger"
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
