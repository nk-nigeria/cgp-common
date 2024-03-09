package define

type EventName string

const (
	EventName_Game_Report EventName = "event_game_report"
	EventName_TopUp       EventName = "event_top_up"
)

type NakEvent string

const (
	NakEventMatchEnd NakEvent = "nakama_match_end"
)
