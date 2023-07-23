package lib

type Engine interface {
	NewGame(matchState interface{}) (interface{}, error)
	Random(min, max int) int
	Process(matchState interface{}) (interface{}, error)
	Finish(matchState interface{}) (interface{}, error)
	// for sync with loop game of nakame. return if nothing todo
	Loop(matchState interface{}) (interface{}, error)
	// return info match
	Info(matchState interface{}) (interface{}, error)
}
