package bot

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"os"
	"time"
)

// ConfigLoader handles loading bot configuration from various sources
type ConfigLoader struct {
	db *sql.DB
}

// NewConfigLoader creates a new configuration loader
func NewConfigLoader(db *sql.DB) *ConfigLoader {
	return &ConfigLoader{
		db: db,
	}
}

// LoadConfigFromDatabase loads bot configuration from database
func (l *ConfigLoader) LoadConfigFromDatabase(ctx context.Context, gameCode string) (*BotConfig, error) {
	config := &BotConfig{}

	// Load bot join rules
	joinRules, err := l.loadBotJoinRules(ctx, gameCode)
	if err != nil {
		return nil, fmt.Errorf("failed to load bot join rules: %w", err)
	}
	config.BotJoinRules = joinRules

	// Load bot leave rules
	leaveRules, err := l.loadBotLeaveRules(ctx, gameCode)
	if err != nil {
		return nil, fmt.Errorf("failed to load bot leave rules: %w", err)
	}
	config.BotLeaveRules = leaveRules

	// Load bot create table rules
	createTableRules, err := l.loadBotCreateTableRules(ctx, gameCode)
	if err != nil {
		return nil, fmt.Errorf("failed to load bot create table rules: %w", err)
	}
	config.BotCreateTableRules = createTableRules

	// Load bot group rules
	groupRules, err := l.loadBotGroupRules(ctx, gameCode)
	if err != nil {
		return nil, fmt.Errorf("failed to load bot group rules: %w", err)
	}
	config.BotGroupRules = groupRules

	return config, nil
}

// LoadConfigFromFile loads bot configuration from JSON file
func (l *ConfigLoader) LoadConfigFromFile(filePath string) (*BotConfig, error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file: %w", err)
	}

	var config BotConfig
	if err := json.Unmarshal(data, &config); err != nil {
		return nil, fmt.Errorf("failed to parse config file: %w", err)
	}

	return &config, nil
}

// SaveConfigToDatabase saves bot configuration to database
func (l *ConfigLoader) SaveConfigToDatabase(ctx context.Context, gameCode string, config *BotConfig) error {
	// Save bot join rules
	if err := l.saveBotJoinRules(ctx, gameCode, config.BotJoinRules); err != nil {
		return fmt.Errorf("failed to save bot join rules: %w", err)
	}

	// Save bot leave rules
	if err := l.saveBotLeaveRules(ctx, gameCode, config.BotLeaveRules); err != nil {
		return fmt.Errorf("failed to save bot leave rules: %w", err)
	}

	// Save bot create table rules
	if err := l.saveBotCreateTableRules(ctx, gameCode, config.BotCreateTableRules); err != nil {
		return fmt.Errorf("failed to save bot create table rules: %w", err)
	}

	// Save bot group rules
	if err := l.saveBotGroupRules(ctx, gameCode, config.BotGroupRules); err != nil {
		return fmt.Errorf("failed to save bot group rules: %w", err)
	}

	return nil
}

// SaveConfigToFile saves bot configuration to JSON file
func (l *ConfigLoader) SaveConfigToFile(filePath string, config *BotConfig) error {
	data, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal config: %w", err)
	}

	if err := os.WriteFile(filePath, data, 0644); err != nil {
		return fmt.Errorf("failed to write config file: %w", err)
	}

	return nil
}

// loadBotJoinRules loads bot join rules from database
func (l *ConfigLoader) loadBotJoinRules(ctx context.Context, gameCode string) ([]BotJoinRule, error) {
	query := `
		SELECT min_bet, max_bet, min_users, max_users, random_time_min, random_time_max, join_percent,
		       add_bot_min, add_bot_max
		FROM bot_join_rules 
		WHERE game_code = $1 
		ORDER BY min_bet ASC
	`

	rows, err := l.db.QueryContext(ctx, query, gameCode)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var rules []BotJoinRule
	for rows.Next() {
		var rule BotJoinRule
		var addBotMin, addBotMax sql.NullInt64
		err := rows.Scan(
			&rule.MinBet,
			&rule.MaxBet,
			&rule.MinUsers,
			&rule.MaxUsers,
			&rule.RandomTimeMin,
			&rule.RandomTimeMax,
			&rule.JoinPercent,
			&addBotMin,
			&addBotMax,
		)
		if err != nil {
			return nil, err
		}

		// Set optional Baccarat/Blackjack properties
		if addBotMin.Valid {
			addBotMinInt := int(addBotMin.Int64)
			rule.AddBotMin = &addBotMinInt
		}
		if addBotMax.Valid {
			addBotMaxInt := int(addBotMax.Int64)
			rule.AddBotMax = &addBotMaxInt
		}

		rules = append(rules, rule)
	}

	return rules, nil
}

// loadBotLeaveRules loads bot leave rules from database
func (l *ConfigLoader) loadBotLeaveRules(ctx context.Context, gameCode string) ([]BotLeaveRule, error) {
	query := `
		SELECT min_bet, max_bet, last_result, leave_percent,
		       min_users, max_users, bot_count_min, bot_count_max, leave_bot_min, leave_bot_max, leave_rate
		FROM bot_leave_rules 
		WHERE game_code = $1 
		ORDER BY min_bet ASC
	`

	rows, err := l.db.QueryContext(ctx, query, gameCode)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var rules []BotLeaveRule
	for rows.Next() {
		var rule BotLeaveRule
		var botCountMin, botCountMax, leaveBotMin, leaveBotMax, leaveRate sql.NullInt64
		err := rows.Scan(
			&rule.MinBet,
			&rule.MaxBet,
			&rule.LastResult,
			&rule.LeavePercent,
			&rule.MinUsers,
			&rule.MaxUsers,
			&botCountMin,
			&botCountMax,
			&leaveBotMin,
			&leaveBotMax,
			&leaveRate,
		)
		if err != nil {
			return nil, err
		}

		// Set optional Baccarat/Blackjack properties
		if botCountMin.Valid {
			botCountMinInt := int(botCountMin.Int64)
			rule.BotCountMin = &botCountMinInt
		}
		if botCountMax.Valid {
			botCountMaxInt := int(botCountMax.Int64)
			rule.BotCountMax = &botCountMaxInt
		}
		if leaveBotMin.Valid {
			leaveBotMinInt := int(leaveBotMin.Int64)
			rule.LeaveBotMin = &leaveBotMinInt
		}
		if leaveBotMax.Valid {
			leaveBotMaxInt := int(leaveBotMax.Int64)
			rule.LeaveBotMax = &leaveBotMaxInt
		}
		if leaveRate.Valid {
			leaveRateInt := int(leaveRate.Int64)
			rule.LeaveRate = &leaveRateInt
		}

		rules = append(rules, rule)
	}

	return rules, nil
}

// loadBotCreateTableRules loads bot create table rules from database
func (l *ConfigLoader) loadBotCreateTableRules(ctx context.Context, gameCode string) ([]BotCreateTableRule, error) {
	query := `
		SELECT min_bet, max_bet, min_active_tables, max_active_tables, 
		       wait_time_min, wait_time_max, retry_wait_min, retry_wait_max,
		       random_table_min, random_table_max, time_check, add_table_min, add_table_max
		FROM bot_create_table_rules 
		WHERE game_code = $1 
		ORDER BY min_bet ASC
	`

	rows, err := l.db.QueryContext(ctx, query, gameCode)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var rules []BotCreateTableRule
	for rows.Next() {
		var rule BotCreateTableRule
		var randomTableMin, randomTableMax, timeCheck, addTableMin, addTableMax sql.NullInt64
		err := rows.Scan(
			&rule.MinBet,
			&rule.MaxBet,
			&rule.MinActiveTables,
			&rule.MaxActiveTables,
			&rule.WaitTimeMin,
			&rule.WaitTimeMax,
			&rule.RetryWaitMin,
			&rule.RetryWaitMax,
			&randomTableMin,
			&randomTableMax,
			&timeCheck,
			&addTableMin,
			&addTableMax,
		)
		if err != nil {
			return nil, err
		}

		// Set optional Baccarat/Blackjack properties
		if randomTableMin.Valid {
			randomTableMinInt := int(randomTableMin.Int64)
			rule.RandomTableMin = &randomTableMinInt
		}
		if randomTableMax.Valid {
			randomTableMaxInt := int(randomTableMax.Int64)
			rule.RandomTableMax = &randomTableMaxInt
		}
		if timeCheck.Valid {
			timeCheckInt := int(timeCheck.Int64)
			rule.TimeCheck = &timeCheckInt
		}
		if addTableMin.Valid {
			addTableMinInt := int(addTableMin.Int64)
			rule.AddTableMin = &addTableMinInt
		}
		if addTableMax.Valid {
			addTableMaxInt := int(addTableMax.Int64)
			rule.AddTableMax = &addTableMaxInt
		}

		rules = append(rules, rule)
	}

	return rules, nil
}

// loadBotGroupRules loads bot group rules from database
func (l *ConfigLoader) loadBotGroupRules(ctx context.Context, gameCode string) ([]BotGroupRule, error) {
	query := `
		SELECT vip_min, vip_max, mcb_min, mcb_max
		FROM bot_group_rules 
		WHERE game_code = $1 
		ORDER BY vip_min ASC
	`

	rows, err := l.db.QueryContext(ctx, query, gameCode)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var rules []BotGroupRule
	for rows.Next() {
		var rule BotGroupRule
		err := rows.Scan(
			&rule.VIPMin,
			&rule.VIPMax,
			&rule.MCBMin,
			&rule.MCBMax,
		)
		if err != nil {
			return nil, err
		}
		rules = append(rules, rule)
	}

	return rules, nil
}

// saveBotJoinRules saves bot join rules to database
func (l *ConfigLoader) saveBotJoinRules(ctx context.Context, gameCode string, rules []BotJoinRule) error {
	// First, delete existing rules
	deleteQuery := `DELETE FROM bot_join_rules WHERE game_code = $1`
	_, err := l.db.ExecContext(ctx, deleteQuery, gameCode)
	if err != nil {
		return err
	}

	// Then insert new rules
	insertQuery := `
		INSERT INTO bot_join_rules (game_code, min_bet, max_bet, min_users, max_users,
		                           random_time_min, random_time_max, join_percent,
		                           add_bot_min, add_bot_max, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
	`

	for _, rule := range rules {
		// Handle optional Baccarat/Blackjack properties
		var addBotMin, addBotMax interface{}
		if rule.AddBotMin != nil {
			addBotMin = *rule.AddBotMin
		} else {
			addBotMin = nil
		}
		if rule.AddBotMax != nil {
			addBotMax = *rule.AddBotMax
		} else {
			addBotMax = nil
		}

		_, err := l.db.ExecContext(ctx, insertQuery,
			gameCode,
			rule.MinBet,
			rule.MaxBet,
			rule.MinUsers,
			rule.MaxUsers,
			rule.RandomTimeMin,
			rule.RandomTimeMax,
			rule.JoinPercent,
			addBotMin,
			addBotMax,
			time.Now(),
		)
		if err != nil {
			return err
		}
	}

	return nil
}

// saveBotLeaveRules saves bot leave rules to database
func (l *ConfigLoader) saveBotLeaveRules(ctx context.Context, gameCode string, rules []BotLeaveRule) error {
	// First, delete existing rules
	deleteQuery := `DELETE FROM bot_leave_rules WHERE game_code = $1`
	_, err := l.db.ExecContext(ctx, deleteQuery, gameCode)
	if err != nil {
		return err
	}

	// Then insert new rules
	insertQuery := `
		INSERT INTO bot_leave_rules (game_code, min_bet, max_bet, last_result, leave_percent,
		                           min_users, max_users, bot_count_min, bot_count_max, leave_bot_min, leave_bot_max, leave_rate, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
	`

	for _, rule := range rules {
		// Handle optional Baccarat/Blackjack properties
		var botCountMin, botCountMax, leaveBotMin, leaveBotMax, leaveRate interface{}
		if rule.BotCountMin != nil {
			botCountMin = *rule.BotCountMin
		} else {
			botCountMin = nil
		}
		if rule.BotCountMax != nil {
			botCountMax = *rule.BotCountMax
		} else {
			botCountMax = nil
		}
		if rule.LeaveBotMin != nil {
			leaveBotMin = *rule.LeaveBotMin
		} else {
			leaveBotMin = nil
		}
		if rule.LeaveBotMax != nil {
			leaveBotMax = *rule.LeaveBotMax
		} else {
			leaveBotMax = nil
		}
		if rule.LeaveRate != nil {
			leaveRate = *rule.LeaveRate
		} else {
			leaveRate = nil
		}

		_, err := l.db.ExecContext(ctx, insertQuery,
			gameCode,
			rule.MinBet,
			rule.MaxBet,
			rule.LastResult,
			rule.LeavePercent,
			rule.MinUsers,
			rule.MaxUsers,
			botCountMin,
			botCountMax,
			leaveBotMin,
			leaveBotMax,
			leaveRate,
			time.Now(),
		)
		if err != nil {
			return err
		}
	}

	return nil
}

// saveBotCreateTableRules saves bot create table rules to database
func (l *ConfigLoader) saveBotCreateTableRules(ctx context.Context, gameCode string, rules []BotCreateTableRule) error {
	// First, delete existing rules
	deleteQuery := `DELETE FROM bot_create_table_rules WHERE game_code = $1`
	_, err := l.db.ExecContext(ctx, deleteQuery, gameCode)
	if err != nil {
		return err
	}

	// Then insert new rules
	insertQuery := `
		INSERT INTO bot_create_table_rules (game_code, min_bet, max_bet, min_active_tables, max_active_tables,
		                                   wait_time_min, wait_time_max, retry_wait_min, retry_wait_max,
		                                   random_table_min, random_table_max, time_check, add_table_min, add_table_max, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
	`

	for _, rule := range rules {
		// Handle optional Baccarat/Blackjack properties
		var randomTableMin, randomTableMax, timeCheck, addTableMin, addTableMax interface{}
		if rule.RandomTableMin != nil {
			randomTableMin = *rule.RandomTableMin
		} else {
			randomTableMin = nil
		}
		if rule.RandomTableMax != nil {
			randomTableMax = *rule.RandomTableMax
		} else {
			randomTableMax = nil
		}
		if rule.TimeCheck != nil {
			timeCheck = *rule.TimeCheck
		} else {
			timeCheck = nil
		}
		if rule.AddTableMin != nil {
			addTableMin = *rule.AddTableMin
		} else {
			addTableMin = nil
		}
		if rule.AddTableMax != nil {
			addTableMax = *rule.AddTableMax
		} else {
			addTableMax = nil
		}

		_, err := l.db.ExecContext(ctx, insertQuery,
			gameCode,
			rule.MinBet,
			rule.MaxBet,
			rule.MinActiveTables,
			rule.MaxActiveTables,
			rule.WaitTimeMin,
			rule.WaitTimeMax,
			rule.RetryWaitMin,
			rule.RetryWaitMax,
			randomTableMin,
			randomTableMax,
			timeCheck,
			addTableMin,
			addTableMax,
			time.Now(),
		)
		if err != nil {
			return err
		}
	}

	return nil
}

// saveBotGroupRules saves bot group rules to database
func (l *ConfigLoader) saveBotGroupRules(ctx context.Context, gameCode string, rules []BotGroupRule) error {
	// First, delete existing rules
	deleteQuery := `DELETE FROM bot_group_rules WHERE game_code = $1`
	_, err := l.db.ExecContext(ctx, deleteQuery, gameCode)
	if err != nil {
		return err
	}

	// Then insert new rules
	insertQuery := `
		INSERT INTO bot_group_rules (game_code, vip_min, vip_max, mcb_min, mcb_max, created_at)
		VALUES ($1, $2, $3, $4, $5, $6)
	`

	for _, rule := range rules {
		_, err := l.db.ExecContext(ctx, insertQuery,
			gameCode,
			rule.VIPMin,
			rule.VIPMax,
			rule.MCBMin,
			rule.MCBMax,
			time.Now(),
		)
		if err != nil {
			return err
		}
	}

	return nil
}
