package define

type EventName string

const (
	EventName_Game_Report EventName = "event_game_report"
	EventName_TopUp       EventName = "event_top_up"
)

type NakEvent string

const (
	NakEventMatchJoin  NakEvent = "nakama_match_join"
	NakEventMatchLeave NakEvent = "nakama_match_leave"
	NakEventMatchEnd   NakEvent = "nakama_match_end"

	NakEventRuleLuckyChange = "nakama_rule_lucky_change"
)
