package lib

import (
	"context"
	"database/sql"
	"errors"

	"github.com/heroiclabs/nakama-common/runtime"
	pb "github.com/nk-nigeria/cgp-common/proto"
	"github.com/nk-nigeria/cgp-common/utilities"
	"google.golang.org/protobuf/encoding/protojson"
)

const (
	kVipFarmCollection  = "vip-farm-collection"
	kVipFarmTemplateKey = "vip-farm-template"
	kUserVipFarmKey     = "vip-farm-user-data"
)

func ReadVipFarmTemplate(ctx context.Context, unmarshaler *protojson.UnmarshalOptions, logger runtime.Logger, nk runtime.NakamaModule) (*pb.VipFarmTemplate, string, error) {
	results, err := nk.StorageRead(ctx, []*runtime.StorageRead{
		{
			Collection: kVipFarmCollection,
			Key:        kVipFarmTemplateKey,
		},
	})
	if err != nil {
		return nil, "", err
	}
	template := &pb.VipFarmTemplate{}
	if len(results) > 0 {
		if err := unmarshaler.Unmarshal([]byte(results[0].Value), template); err != nil {
			return nil, "", err
		}
	} else {
		return template, "", nil
	}
	return template, results[0].Version, nil
}

func WriteVipFarmTemplate(ctx context.Context, marshaler *protojson.MarshalOptions, logger runtime.Logger, nk runtime.NakamaModule, template *pb.VipFarmTemplate, version string) error {
	jsonStr, err := marshaler.Marshal(template)
	if err != nil {
		return err
	}

	writeRequest := &runtime.StorageWrite{
		Collection:      kVipFarmCollection,
		Key:             kVipFarmTemplateKey,
		UserID:          SystemUid,
		Value:           string(jsonStr),
		PermissionRead:  2,
		PermissionWrite: 0,
	}
	if len(version) != 0 {
		writeRequest.Version = version
	}
	_, err = nk.StorageWrite(ctx, []*runtime.StorageWrite{
		writeRequest,
	})
	return err
}

func ReadUserVipFarm(ctx context.Context, unmarshaler *protojson.UnmarshalOptions, logger runtime.Logger, nk runtime.NakamaModule, userId string) (*pb.UserVipFarm, string, error) {
	results, err := nk.StorageRead(ctx, []*runtime.StorageRead{
		{
			Collection: kVipFarmCollection,
			Key:        kUserVipFarmKey,
			UserID:     userId,
		},
	})
	if err != nil {
		return nil, "", err
	}
	data := &pb.UserVipFarm{}
	if len(results) > 0 {
		if err := unmarshaler.Unmarshal([]byte(results[0].Value), data); err != nil {
			return nil, "", err
		}
	} else {
		return data, "", nil
	}
	return data, results[0].Version, nil
}

func WriteUserVipFarm(ctx context.Context, marshaler *protojson.MarshalOptions, logger runtime.Logger, nk runtime.NakamaModule, userId string, data *pb.UserVipFarm, version string) error {
	if len(data.UserId) == 0 {
		data.UserId = userId
	}
	jsonStr, err := marshaler.Marshal(data)
	if err != nil {
		return err
	}

	writeRequest := &runtime.StorageWrite{
		Collection:      kVipFarmCollection,
		Key:             kUserVipFarmKey,
		UserID:          userId,
		Value:           string(jsonStr),
		PermissionRead:  1,
		PermissionWrite: 1,
	}
	if len(version) != 0 {
		writeRequest.Version = version
	}
	_, err = nk.StorageWrite(ctx, []*runtime.StorageWrite{
		writeRequest,
	})
	return err
}

func AddUserVipFarmAccumulation(ctx context.Context, marshaler *protojson.MarshalOptions, unmarshaler *protojson.UnmarshalOptions, logger runtime.Logger, db *sql.DB, nk runtime.NakamaModule, userId string, cumulativeType pb.VipFarmCumulativeType, amount int64) error {
	user, _, err := GetProfileUser(ctx, db, userId)
	if err != nil {
		return err
	}
	template, _, err := ReadVipFarmTemplate(ctx, unmarshaler, logger, nk)
	if err != nil {
		return err
	}

	userVipFarm, version, err := ReadUserVipFarm(ctx, unmarshaler, logger, nk, userId)
	if err != nil {
		return err
	}

	if userVipFarm == nil {
		userVipFarm = &pb.UserVipFarm{
			Level: user.VipLevel,
		}
	}

	currentVipFarmLevel := userVipFarm.Level

	if vipFarmConfig, ok := template.ConfigMap[currentVipFarmLevel]; ok {
		baseCoeff, _ := vipFarmGetBaseCoeff(userVipFarm.Progress, vipFarmConfig.Chips, template)

		var secondaryCoeff float64
		switch cumulativeType {
		case pb.VipFarmCumulativeType_VIP_FARM_CUMULATIVE_TYPE_CI:
			secondaryCoeff = float64(vipFarmConfig.CiCoeff) / float64(template.CoeffScale)
		case pb.VipFarmCumulativeType_VIP_FARM_CUMULATIVE_TYPE_PVP:
			secondaryCoeff = float64(vipFarmConfig.PvpCoeff) / float64(template.CoeffScale)
		case pb.VipFarmCumulativeType_VIP_FARM_CUMULATIVE_TYPE_BETTING:
			secondaryCoeff = float64(vipFarmConfig.BettingCoeff) / float64(template.CoeffScale)
		case pb.VipFarmCumulativeType_VIP_FARM_CUMULATIVE_TYPE_SLOT:
			secondaryCoeff = float64(vipFarmConfig.SlotCoeff) / float64(template.CoeffScale)
		}

		accumulatedAmount := float64(amount) * secondaryCoeff * baseCoeff
		newProgress := utilities.MinInt64(vipFarmConfig.Chips, int64(accumulatedAmount)+userVipFarm.Progress)
		userVipFarm.Progress = newProgress
		return WriteUserVipFarm(ctx, marshaler, logger, nk, userId, userVipFarm, version)
	}
	return errors.New("user not met requirements for vip-farming")
}

// return baseCoeff and current fillRate index
func vipFarmGetBaseCoeff(progress int64, total int64, template *pb.VipFarmTemplate) (float64, int) {
	v := float64(progress) / float64(total) * 100
	for i := len(template.BaseCoeffs); i >= 0; i-- {
		if v > float64(template.BaseCoeffs[i].FillPercent) {
			return float64(template.BaseCoeffs[i].Coeff) / float64(template.CoeffScale), i
		}
	}
	return float64(template.BaseCoeffs[0].Coeff) / float64(template.CoeffScale), 0
}

func ReadUserVipFarmProgress(ctx context.Context, unmarshaler *protojson.UnmarshalOptions, logger runtime.Logger, db *sql.DB, nk runtime.NakamaModule, userId string) (*pb.UserVipFarmProgress, error) {
	profile, _, err := GetProfileUser(ctx, db, userId)
	if err != nil {
		return nil, err
	}

	data, _, err := ReadUserVipFarm(ctx, unmarshaler, logger, nk, userId)
	if err != nil {
		return nil, err
	}
	if data == nil {
		data = &pb.UserVipFarm{
			Level: profile.VipLevel,
		}
	}

	template, _, err := ReadVipFarmTemplate(ctx, unmarshaler, logger, nk)
	if err != nil || template == nil {
		return nil, err
	}

	if config, ok := template.ConfigMap[data.Level]; ok {
		_, stage := vipFarmGetBaseCoeff(data.Progress, config.Chips, template)
		return &pb.UserVipFarmProgress{
			UserId:        userId,
			Level:         data.Level,
			Progress:      float64(data.Progress) / float64(config.Chips),
			ProgressLevel: int32(stage),
			CurrentReward: config.Chips,
			NextReward:    template.ConfigMap[profile.VipLevel].Chips,
		}, nil
	}
	return &pb.UserVipFarmProgress{}, nil
}
