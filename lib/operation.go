package lib

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"github.com/heroiclabs/nakama-common/runtime"
	pb "github.com/nk-nigeria/cgp-common/proto"
)

var httpClient *http.Client
var DefaultHttpKey string = "defaulthttpkey"

// dev http://103.226.250.195:8350
// stg  http://103.226.250.195:7350
var DefaultHostReport = "http://103.226.250.195:9350"

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
	reportEndpoint string
	reportHttpKey  string
	Users          []*pb.PlayerData `json:"users,omitempty"`
	Game           *pb.Game         `json:"game,omitempty"`
	Match          *pb.MatchData    `json:"match,omitempty"`
	Fee            int64            `json:"fee,omitempty"`
	TableId        int64            `json:"table_id,omitempty"`
}

func NewReportGame(ctx context.Context) *reportGame {
	o := &reportGame{
		Users:          make([]*pb.PlayerData, 0),
		reportEndpoint: DefaultHostReport,
		reportHttpKey:  DefaultHttpKey,
	}
	runtimeVal, ok := ctx.Value(runtime.RUNTIME_CTX_ENV).(map[string]string)
	if !ok {
		fmt.Printf("ctx value runtime.RUNTIME_CTX_ENV expect map[string]string , actual %v\r\n", ctx.Value(runtime.RUNTIME_CTX_ENV))
	}
	for k, v := range runtimeVal {
		if strings.ToLower(k) == "report_endpoint" {
			reportEndpoint := strings.ToLower(v)
			o.reportEndpoint = reportEndpoint
			continue
		}
		if strings.ToLower(k) == "http_key" {
			o.reportHttpKey = v
			continue
		}
	}
	fmt.Printf("init report game with endpoint %v , http key %v", o.reportEndpoint, o.reportHttpKey[:len(o.reportHttpKey)/2])
	return o
}

func (o reportGame) ReportEndpoint() string {
	return o.reportEndpoint
}

// call persistent data
func (o *reportGame) Commit(ctx context.Context, nk runtime.NakamaModule) ([]byte, int, error) {
	data, _ := json.Marshal(o)
	// if ctx != nil && nk != nil {
	// 	properties := make(map[string]string)
	// 	properties["payload"] = string(data)
	// 	nk.Event(ctx, &api.Event{
	// 		Name:       string(define.EventName_Game_Report),
	// 		Properties: properties,
	// 	})
	// 	return []byte(string("commit over nk event")), 200, nil
	// }
	// targetUrl := fmt.Sprintf("%s/v2/rpc/op-report", o.reportEndpoint)
	// req, err := http.NewRequest("POST", targetUrl, bytes.NewReader(data))
	// if err != nil {
	// 	return nil, 0, err
	// }

	// query := req.URL.Query()
	// query.Add("http_key", o.reportHttpKey)
	// query.Add("unwrap", "true")
	// req.URL.RawQuery = query.Encode()
	// // res, err := httpClient.Post(targetUrl, http.DetectContentType(data), bytes.NewReader(data))
	// res, err := httpClient.Do(req)
	// if err != nil {
	// 	return nil, 0, err
	// }
	// var bodyRes []byte
	// if res != nil {
	// 	bodyRes, err = io.ReadAll(res.Body)
	// 	res.Body.Close()
	// }
	// return bodyRes, res.StatusCode, err
	event := "match-end"
	req := &pb.Request{
		UserId: "",
		Body:   string(data),
	}
	reqjson, _ := json.Marshal(req)
	path := "metric/event/" + event
	return o.sendHttpReq(path, reqjson)
}

func (o *reportGame) ReportIap(ctx context.Context, userId string, payload string) ([]byte, int, error) {
	return o.ReportEvent(ctx, "iap", userId, payload)
}

func (o *reportGame) ReportEvent(ctx context.Context, event string, userId string, payload string) ([]byte, int, error) {
	req := &pb.Request{
		UserId: userId,
		Body:   payload,
	}
	reqjson, _ := json.Marshal(req)
	path := "metric/event/" + event
	return o.sendHttpReq(path, reqjson)
}

func (o *reportGame) Query(ctx context.Context, path, userId string, payload string) ([]byte, int, error) {
	req := &pb.Request{
		UserId: userId,
		Body:   payload,
	}
	reqjson, _ := json.Marshal(req)
	return o.sendHttpReq(path, reqjson)
}

func (o reportGame) sendHttpReq(path string, body []byte) ([]byte, int, error) {
	targetUrl := fmt.Sprintf("%s/%s", o.reportEndpoint, path)
	req, err := http.NewRequest("POST", targetUrl, bytes.NewReader(body))
	if err != nil {
		return nil, 0, err
	}

	query := req.URL.Query()
	query.Add("http_key", o.reportHttpKey)
	query.Add("unwrap", "true")
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("http_key", o.reportHttpKey)
	req.URL.RawQuery = query.Encode()
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

func (o *reportGame) AddPlayerData(data *pb.PlayerData) *reportGame {
	o.Users = append(o.Users, data)
	return o
}

func (o *reportGame) AddGame(data *pb.Game) *reportGame {
	o.Game = data
	return o
}

func (o *reportGame) AddMatch(data *pb.MatchData) *reportGame {
	o.Match = data
	return o
}

func (o *reportGame) AddFee(fee int64) *reportGame {
	o.Fee += fee
	return o
}
