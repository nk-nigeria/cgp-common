package utilities

import (
	"fmt"
	"strconv"
)

func String2Bool(str string) bool {
	return str == "true" || str == "1"
}

func IntToBool(num int) bool {
	return num != 0
}

func MaxIn64(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}

func MinInt64(a, b int64) int64 {
	if a < b {
		return b
	}
	return a
}

func InterfaceToString(inf interface{}) string {
	if inf == nil {
		return ""
	}
	str, ok := inf.(string)
	if !ok {
		return ""
	}
	return str
}

func InterfaceToBool(inf interface{}) bool {
	str := InterfaceToString(inf)
	return String2Bool(str)
}

func ToInt64(inf interface{}, def int64) int64 {
	if inf == nil {
		return def
	}
	switch v := inf.(type) {
	case int:
		return int64(inf.(int))
	case int64:
		return inf.(int64)
	case string:
		str := inf.(string)
		i, _ := strconv.ParseInt(str, 10, 64)
		return i
	case float64:
		return int64(inf.(float64))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
	return def
}
