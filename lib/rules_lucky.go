package lib

import (
	"context"
	"database/sql"
	"fmt"
	"strconv"
	"time"

	pb "github.com/ciaolink-game-platform/cgp-common/proto"
)

type rulesLucky struct {
	Id              uint      `gorm:"primarykey" json:"id,omitempty"`
	CreateAt        time.Time `json:"create_at,omitempty"`
	GameCode        string    `json:"game_code,omitempty"`
	CoRateMin       float32   `json:"co_rate_min,omitempty"`
	CoRateMax       float32   `json:"co_rate_max,omitempty"`
	CiMin           float32   `json:"ci_min,omitempty"`
	CiMax           float32   `json:"ci_max,omitempty"`
	CoIndayMin      float32   `json:"co_inday_min,omitempty"`
	CoIndayMax      float32   `json:"co_inday_max,omitempty"`
	Base_1          int       `json:"base_1,omitempty"`
	Base_2          int       `json:"base_2,omitempty"`
	Base_3          int       `json:"base_3,omitempty"`
	Base_4          int       `json:"base_4,omitempty"`
	EmitEventAtUnix int64     `json:"emit_event_at_unix,omitempty"`
	DeletedAt       int64     `json:"deleted_at,omitempty"`
}

func (*rulesLucky) TableName() string {
	return "rules_lucky"
}

func (r *rulesLucky) Copy(rule *pb.RuleLucky) {
	r.Id = uint(rule.Id)
	r.GameCode = rule.GameCode
	r.CoRateMin = rule.CoRateMin
	r.CoRateMax = rule.CoRateMax
	r.CiMin = rule.CiMin
	r.CiMax = rule.CiMax
	r.CoIndayMin = rule.CoIndayMin
	r.CoIndayMax = rule.CoIndayMax
	r.Base_1 = int(rule.Base_1)
	r.Base_2 = int(rule.Base_2)
	r.Base_3 = int(rule.Base_3)
	r.Base_4 = int(rule.Base_4)
	r.EmitEventAtUnix = rule.EmitEventAtUnix
	r.DeletedAt = rule.DeletedAt
}

func (r *rulesLucky) Trasnfer(rule *pb.RuleLucky) {
	rule.Id = int64(r.Id)
	rule.GameCode = r.GameCode
	rule.CoRateMin = r.CoRateMin
	rule.CoRateMax = r.CoRateMax
	rule.CiMin = r.CiMin
	rule.CiMax = r.CiMax
	rule.CoIndayMin = r.CoIndayMin
	rule.CoIndayMax = r.CoIndayMax
	rule.Base_1 = int64(r.Base_1)
	rule.Base_2 = int64(r.Base_2)
	rule.Base_3 = int64(r.Base_3)
	rule.Base_4 = int64(r.Base_4)
	rule.EmitEventAtUnix = r.EmitEventAtUnix
	rule.DeletedAt = r.DeletedAt
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

	query := "SELECT id, game_code, co_rate_min, co_rate_max, ci_min, ci_max, co_inday_min, co_inday_max, base_1, base_2, base_3, base_4 FROM rules_lucky WHERE deleted_at=0"
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
		r := &pb.RuleLucky{}
		err := rows.Scan(&r.Id, &r.GameCode,
			&r.CoRateMin, &r.CoRateMax, &r.CiMin, &r.CiMax,
			&r.CoIndayMin, &r.CoIndayMax,
			&r.Base_1, &r.Base_2, &r.Base_3, &r.Base_4)
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
