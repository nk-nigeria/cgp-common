package define

const (
	SixiangGameName = "sixiang"
	TarzanGameName  = "tarzan"
	JuicyGarden     = "juicygarden"
)

func IsAllowJoinInGameOnProgress(gameCode string) bool {
	switch gameCode {
	case SixiangGameName, TarzanGameName, JuicyGarden:
		return false
	default:
		return true
	}
}
