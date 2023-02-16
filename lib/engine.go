package lib

type Engine interface {
	NewGame(matchState interface{}) (interface{}, error)
	Random(min, max int) int
	Process(matchState interface{}) (interface{}, error)
	Finish(matchState interface{}) (interface{}, error)
}
