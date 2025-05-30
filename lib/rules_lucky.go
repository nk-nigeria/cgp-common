package lib

import (
	"context"
	"database/sql"
	"fmt"
	"strconv"
	"time"

	pb "github.com/nakama-nigeria/cgp-common/proto"
)

type rulesLucky struct {
	Id              uint      `gorm:"primarykey" json:"id,omitempty"`
	CreateAt        time.Time `json:"create_at,omitempty"`
	GameCode        string    `json:"game_code,omitempty"`
	EmitEventAtUnix int64     `json:"emit_event_at_unix,omitempty"`
	DeletedAt       int64     `json:"deleted_at,omitempty"`
	RtpMin          int64     `json:"rtp_min,omitempty"`
	RtpMax          int64     `json:"rtp_max,omitempty"`
	MarkMin         int64     `json:"mark_min,omitempty"`
	MarkpMax        int64     `json:"markp_max,omitempty"`
	VipMin          int64     `json:"vip_min,omitempty"`
	VipMax          int64     `json:"vip_max,omitempty"`
	ReDeal          int64     `json:"re_deal,omitempty"`
}

func (*rulesLucky) TableName() string {
	return "rules_lucky"
}

func (r *rulesLucky) Copy(rule *pb.RuleLucky) {
	r.Id = uint(rule.Id)
	r.GameCode = rule.GameCode
	r.EmitEventAtUnix = rule.EmitEventAtUnix
	r.DeletedAt = rule.DeletedAt
	r.RtpMax = rule.Rtp.Max
	r.RtpMin = rule.Rtp.Min
	r.MarkMin = rule.Mark.Min
	r.RtpMax = rule.Mark.Max
	r.VipMin = rule.Vip.Min
	r.VipMax = rule.Vip.Max
	r.ReDeal = rule.ReDeal
}

func (r *rulesLucky) Trasnfer(rule *pb.RuleLucky) {
	rule.Id = int64(r.Id)
	rule.GameCode = r.GameCode
	rule.EmitEventAtUnix = r.EmitEventAtUnix
	rule.DeletedAt = r.DeletedAt
	rule.Rtp = &pb.Range{Min: r.RtpMin, Max: r.RtpMax}
	rule.Mark = &pb.Range{Min: r.MarkMin, Max: r.MarkpMax}
	rule.Vip = &pb.Range{Min: r.VipMin, Max: r.VipMax}
	rule.ReDeal = r.ReDeal
}

// func InsertRulesLucky(ctx context.Context, db *sql.DB, rule *pb.RuleLucky) error {
// 	if rule == nil {
// 		return errors.New("rule is nil")
// 	}

// 	tx, err := db.Begin()
// 	if err != nil {
// 		return err
// 	}
// 	defer tx.Rollback()

// 	stmt, err := tx.Prepare("INSERT INTO rules_lucky (co_rate_min, co_rate_max, ci_min, ci_max, co_inday_min, co_inday_max, base_1, base_2, base_3, base_4, create_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
// 	if err != nil {
// 		return err
// 	}
// 	defer stmt.Close()

// 	createAt := time.Now()
// 	_, err = stmt.Exec(
// 		rule.CoRateMin, rule.CoRateMax, rule.CiMin, rule.CiMax, rule.CoIndayMin, rule.CoIndayMax,
// 		rule.Base_1, rule.Base_2, rule.Base_3, rule.Base_4, createAt,
// 	)
// 	if err != nil {
// 		return err
// 	}

// 	if err := tx.Commit(); err != nil {
// 		return err
// 	}

// 	return nil
// }

// func UpdateRulesLucky(ctx context.Context, db *sql.DB, rule *pb.RuleLucky) (*pb.RuleLucky, error) {
// 	if rule == nil {
// 		return &pb.RuleLucky{}, nil
// 	}
// 	tx, err := db.Begin()
// 	if err != nil {
// 		return nil, err
// 	}
// 	query := `
// 		UPDATE rules_lucky
// 		SET co_rate_min=?, co_rate_max=?, ci_min=?, ci_max=?, co_inday_min=?, co_inday_max=?,
// 		    base_1=?, base_2=?, base_3=?, base_4=?
// 		WHERE id=?
// 	`
// 	result, err := tx.Exec(query,
// 		rule.CoRateMin, rule.CoRateMax, rule.CiMin, rule.CiMax, rule.CoIndayMin, rule.CoIndayMax,
// 		rule.Base_1, rule.Base_2, rule.Base_3, rule.Base_4, rule.Id)
// 	if err != nil {
// 		tx.Rollback()
// 		return nil, err
// 	}
// 	rowsAffected, err := result.RowsAffected()
// 	if err != nil {
// 		tx.Rollback()
// 		return nil, err
// 	}
// 	if rowsAffected == 0 {
// 		tx.Rollback()
// 		return nil, fmt.Errorf("no rows were updated for rule with id %d", rule.Id)
// 	}
// 	if err := tx.Commit(); err != nil {
// 		return nil, err
// 	}
// 	return rule, nil
// }

func QueryRulesLucky(ctx context.Context, db *sql.DB, rule *pb.RuleLucky) ([]*pb.RuleLucky, error) {
	if rule == nil {
		rule = &pb.RuleLucky{}
	}

	ml := make([]*pb.RuleLucky, 0)

	query := "SELECT id, game_code, rtp_min, rtp_max, mark_min, mark_max, vip_min, vip_max, win_mark_ratio_min, win_mark_ratio_max, re_deal FROM rules_lucky WHERE deleted_at=0 and emit_event_at_unix > 1"
	// args := make([]interface{}, 0)

	if rule.Id > 0 {
		query += " AND id = " + strconv.Itoa(int(rule.Id))
		// args = append(args, rule.Id)
	}
	if len(rule.GameCode) > 0 {
		query += fmt.Sprintf(" AND game_code = '%s'", rule.GameCode)
		// args = append(args, rule.GameCode)
	}

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		r := &pb.RuleLucky{
			Rtp:          &pb.Range{},
			Mark:         &pb.Range{},
			Vip:          &pb.Range{},
			WinMarkRatio: &pb.Range{},
		}
		err := rows.Scan(&r.Id, &r.GameCode,
			&r.Rtp.Min, &r.Rtp.Max,
			&r.Mark.Min, &r.Mark.Max,
			&r.Vip.Min, &r.Vip.Max,
			&r.WinMarkRatio.Min, &r.WinMarkRatio.Max,
			&r.ReDeal)
		if err != nil {
			return nil, err
		}
		ml = append(ml, r)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return ml, nil
}

// func DeleteRulesLucky(ctx context.Context, db *sql.DB, id int64) error {
// 	if id <= 0 {
// 		return nil
// 	}
// 	query := "DELETE FROM rules_lucky WHERE id = ? and deleted = 0"
// 	result, err := db.Exec(query, id)
// 	if err != nil {
// 		return err
// 	}
// 	rowsAffected, err := result.RowsAffected()
// 	if err != nil {
// 		return err
// 	}
// 	if rowsAffected == 0 {
// 		return fmt.Errorf("no rows were deleted for id: %d", id)
// 	}
// 	return nil
// }
