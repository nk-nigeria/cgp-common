package lib

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
)

var httpClient *http.Client
var defaultHttpKey string = ""

func init() {
	t := http.DefaultTransport.(*http.Transport).Clone()
	t.MaxIdleConns = 100
	t.MaxConnsPerHost = 100
	t.MaxIdleConnsPerHost = 100

	httpClient = &http.Client{
		Timeout:   10 * time.Second,
		Transport: t,
	}
}

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

// call persistent data
func (o *reportGame) Commit(host string) ([]byte, int, error) {
	targetUrl := fmt.Sprintf("%s/v2/console/api/endpoints/rpc/op-report", host)
	data, _ := json.Marshal(o)
	req, err := http.NewRequest("POST", targetUrl, bytes.NewReader(data))
	if err != nil {
		return nil, 0, err
	}
	req.Header.Add("defaultkey", defaultHttpKey)
	// res, err := httpClient.Post(targetUrl, http.DetectContentType(data), bytes.NewReader(data))
	res, err := httpClient.Do(req)
	if err != nil {
		return nil, 0, err
	}
	var bodyRes []byte
	if res != nil {
		bodyRes, err = io.ReadAll(res.Body)
		res.Body.Close()
	}
	return bodyRes, res.StatusCode, err
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
