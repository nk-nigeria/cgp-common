package lib

type Engine interface {
	NewGame(matchState interface{}) (interface{}, error)
	Random(min, max int) int
	Finish(matchState interface{}) interface{}
}
