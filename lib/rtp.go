package lib

import "encoding/json"

type Rtp struct {
	Id            int
	PercentExpect int // exp: 200%
	PercentActual int
}

type Rtps []Rtp

func (r Rtps) Parse(dataJson string) (Rtps, error) {
	ml := make([][]int, 0)
	err := json.Unmarshal([]byte(dataJson), &ml)
	if err != nil {
		return nil, err
	}
	for _, v := range ml {
		if len(v) == 0 {
			continue
		}
		r = append(r, Rtp{
			Id:            v[0],
			PercentExpect: v[1],
		})
	}
	return r, nil
}
