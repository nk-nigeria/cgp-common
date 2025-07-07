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
		SELECT min_bet, max_bet, min_users, max_users, random_time_min, random_time_max, join_percent
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
		err := rows.Scan(
			&rule.MinBet,
			&rule.MaxBet,
			&rule.MinUsers,
			&rule.MaxUsers,
			&rule.RandomTimeMin,
			&rule.RandomTimeMax,
			&rule.JoinPercent,
		)
		if err != nil {
			return nil, err
		}
		rules = append(rules, rule)
	}

	return rules, nil
}

// loadBotLeaveRules loads bot leave rules from database
func (l *ConfigLoader) loadBotLeaveRules(ctx context.Context, gameCode string) ([]BotLeaveRule, error) {
	query := `
		SELECT min_bet, max_bet, last_result, leave_percent
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
		err := rows.Scan(
			&rule.MinBet,
			&rule.MaxBet,
			&rule.LastResult,
			&rule.LeavePercent,
		)
		if err != nil {
			return nil, err
		}
		rules = append(rules, rule)
	}

	return rules, nil
}

// loadBotCreateTableRules loads bot create table rules from database
func (l *ConfigLoader) loadBotCreateTableRules(ctx context.Context, gameCode string) ([]BotCreateTableRule, error) {
	query := `
		SELECT min_bet, max_bet, min_active_tables, max_active_tables, 
		       wait_time_min, wait_time_max, retry_wait_min, retry_wait_max
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
		err := rows.Scan(
			&rule.MinBet,
			&rule.MaxBet,
			&rule.MinActiveTables,
			&rule.MaxActiveTables,
			&rule.WaitTimeMin,
			&rule.WaitTimeMax,
			&rule.RetryWaitMin,
			&rule.RetryWaitMax,
		)
		if err != nil {
			return nil, err
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
		                           random_time_min, random_time_max, join_percent, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
	`

	for _, rule := range rules {
		_, err := l.db.ExecContext(ctx, insertQuery,
			gameCode,
			rule.MinBet,
			rule.MaxBet,
			rule.MinUsers,
			rule.MaxUsers,
			rule.RandomTimeMin,
			rule.RandomTimeMax,
			rule.JoinPercent,
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
		INSERT INTO bot_leave_rules (game_code, min_bet, max_bet, last_result, leave_percent, created_at)
		VALUES ($1, $2, $3, $4, $5, $6)
	`

	for _, rule := range rules {
		_, err := l.db.ExecContext(ctx, insertQuery,
			gameCode,
			rule.MinBet,
			rule.MaxBet,
			rule.LastResult,
			rule.LeavePercent,
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
		                                   wait_time_min, wait_time_max, retry_wait_min, retry_wait_max, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
	`

	for _, rule := range rules {
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
