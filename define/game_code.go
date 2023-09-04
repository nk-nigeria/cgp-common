package define

type GameName string

const (
	SixiangGameName GameName = "sixiang"
	TarzanGameName  GameName = "tarzan"
	JuicyGardenName GameName = "juicygarden"
	// clone game JuicyGardenName
	CryptoRush   GameName = "cryptorush"
	IncaGameName GameName = "inca"
	NoelGameName GameName = "noel"

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
