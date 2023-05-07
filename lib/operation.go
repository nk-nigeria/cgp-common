package lib

import (
	pb "github.com/ciaolink-game-platform/cgp-common/proto"
)

type reportGame struct {
	users []*pb.PlayerData
	game  *pb.Game
	match *pb.Match
	fee   int64
}

func NewReportGame() *reportGame {
	o := &reportGame{
		users: make([]*pb.PlayerData, 0),
	}
	return o
}

// save to db
func (o *reportGame) Commit() error {
	return nil
}

func (o *reportGame) AddPlayerDate(data *pb.PlayerData) *reportGame {
	o.users = append(o.users, data)
	return o
}

func (o *reportGame) AddGame(data *pb.Game) *reportGame {
	o.game = data
	return o
}

func (o *reportGame) AddMatch(data *pb.Match) *reportGame {
	o.match = data
	return o
}

func (o *reportGame) AddFee(fee int64) *reportGame {
	o.fee += fee
	return o
}
