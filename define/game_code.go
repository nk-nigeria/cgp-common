package define

const (
	SixiangGameName = "sixiang"
	TarzanGameName  = "tarzan"
	JuicyGardenName = "juicygarden"
	BlackjackName   = "blackjack"
	BandarqqName    = "bandarqq"
	SicboName       = "sicbo"
	BaccaratName    = "baccarat"
	ColorGameName   = "color-game"
	DragontigerName = "dragontiger"
)

func IsAllowJoinInGameOnProgress(gameCode string) bool {
	switch gameCode {
	case SixiangGameName, TarzanGameName, JuicyGardenName:
		return false
	default:
		return true
	}
}
