package utilities

import (
	"math/rand"
	"time"
)

func RandomNumber(min, max int) int {
	if min < 0 {
		min = 0
	}
	if max < min {
		max = min + 1
	}
	n := max - min
	rand.Seed(time.Now().UTC().UnixNano())
	num := rand.Intn(n)
	return num + min
}
