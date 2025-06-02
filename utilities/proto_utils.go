package utilities

import (
	"encoding/base64"

	"google.golang.org/protobuf/proto"
)

func DecodeBase64Proto(encoded string, msg proto.Message) error {
	data, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		return err
	}
	if err := proto.Unmarshal(data, msg); err != nil {
		return err
	}
	return nil
}

func EncodeBase64Proto(msg proto.Message) (string, error) {
	data, err := proto.Marshal(msg)
	if err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(data), nil
}
