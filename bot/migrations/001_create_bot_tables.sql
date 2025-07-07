-- Create bot configuration tables
-- This migration creates tables for storing bot rules and configuration

-- Bot join rules table
CREATE TABLE IF NOT EXISTS bot_join_rules (
    id SERIAL PRIMARY KEY,
    game_code VARCHAR(50) NOT NULL,
    min_bet BIGINT NOT NULL DEFAULT 0,
    max_bet BIGINT NOT NULL DEFAULT 999999999,
    min_users INTEGER NOT NULL DEFAULT 1,
    max_users INTEGER NOT NULL DEFAULT 3,
    random_time_min INTEGER NOT NULL DEFAULT 1,
    random_time_max INTEGER NOT NULL DEFAULT 5,
    join_percent INTEGER NOT NULL DEFAULT 50,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bot leave rules table
CREATE TABLE IF NOT EXISTS bot_leave_rules (
    id SERIAL PRIMARY KEY,
    game_code VARCHAR(50) NOT NULL,
    min_bet BIGINT NOT NULL DEFAULT 0,
    max_bet BIGINT NOT NULL DEFAULT 999999999,
    last_result INTEGER NOT NULL DEFAULT 0, -- 1 for win, -1 for lose, 0 for any
    leave_percent INTEGER NOT NULL DEFAULT 30,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bot create table rules table
CREATE TABLE IF NOT EXISTS bot_create_table_rules (
    id SERIAL PRIMARY KEY,
    game_code VARCHAR(50) NOT NULL,
    min_bet BIGINT NOT NULL DEFAULT 0,
    max_bet BIGINT NOT NULL DEFAULT 999999999,
    min_active_tables INTEGER NOT NULL DEFAULT 0,
    max_active_tables INTEGER NOT NULL DEFAULT 10,
    wait_time_min INTEGER NOT NULL DEFAULT 30,
    wait_time_max INTEGER NOT NULL DEFAULT 60,
    retry_wait_min INTEGER NOT NULL DEFAULT 10,
    retry_wait_max INTEGER NOT NULL DEFAULT 20,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bot group rules table
CREATE TABLE IF NOT EXISTS bot_group_rules (
    id SERIAL PRIMARY KEY,
    game_code VARCHAR(50) NOT NULL,
    vip_min INTEGER NOT NULL DEFAULT 0,
    vip_max INTEGER NOT NULL DEFAULT 10,
    mcb_min BIGINT NOT NULL DEFAULT 0,
    mcb_max BIGINT NOT NULL DEFAULT 999999999,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bot_join_rules_game_code ON bot_join_rules(game_code);
CREATE INDEX IF NOT EXISTS idx_bot_join_rules_bet_range ON bot_join_rules(min_bet, max_bet);
CREATE INDEX IF NOT EXISTS idx_bot_join_rules_user_range ON bot_join_rules(min_users, max_users);

CREATE INDEX IF NOT EXISTS idx_bot_leave_rules_game_code ON bot_leave_rules(game_code);
CREATE INDEX IF NOT EXISTS idx_bot_leave_rules_bet_range ON bot_leave_rules(min_bet, max_bet);

CREATE INDEX IF NOT EXISTS idx_bot_create_table_rules_game_code ON bot_create_table_rules(game_code);
CREATE INDEX IF NOT EXISTS idx_bot_create_table_rules_bet_range ON bot_create_table_rules(min_bet, max_bet);

CREATE INDEX IF NOT EXISTS idx_bot_group_rules_game_code ON bot_group_rules(game_code);
CREATE INDEX IF NOT EXISTS idx_bot_group_rules_vip_range ON bot_group_rules(vip_min, vip_max);

-- Insert default rules for common games
INSERT INTO bot_join_rules (game_code, min_bet, max_bet, min_users, max_users, random_time_min, random_time_max, join_percent) VALUES
('whot', 0, 999999999, 1, 3, 1, 5, 50),
('slots', 0, 999999999, 1, 1, 1, 3, 70);

INSERT INTO bot_leave_rules (game_code, min_bet, max_bet, last_result, leave_percent) VALUES
('whot', 0, 999999999, 0, 30),
('slots', 0, 999999999, 0, 20);

INSERT INTO bot_create_table_rules (game_code, min_bet, max_bet, min_active_tables, max_active_tables, wait_time_min, wait_time_max, retry_wait_min, retry_wait_max) VALUES
('whot', 0, 999999999, 0, 10, 30, 60, 10, 20),
('slots', 0, 999999999, 0, 5, 20, 40, 5, 15);

INSERT INTO bot_group_rules (game_code, vip_min, vip_max, mcb_min, mcb_max) VALUES
('whot', 0, 10, 0, 999999999),
('slots', 0, 10, 0, 999999999); 