-- Migration: Add Baccarat/Blackjack specific fields to bot configuration tables
-- This migration adds new optional fields to support both WHOT and Baccarat/Blackjack games

-- Add new fields to bot_join_rules table
ALTER TABLE bot_join_rules 
ADD COLUMN IF NOT EXISTS time_min INTEGER,
ADD COLUMN IF NOT EXISTS time_max INTEGER,
ADD COLUMN IF NOT EXISTS add_bot_min INTEGER,
ADD COLUMN IF NOT EXISTS add_bot_max INTEGER;

-- Add new fields to bot_leave_rules table
ALTER TABLE bot_leave_rules 
ADD COLUMN IF NOT EXISTS bot_count_min INTEGER,
ADD COLUMN IF NOT EXISTS bot_count_max INTEGER,
ADD COLUMN IF NOT EXISTS leave_bot_min INTEGER,
ADD COLUMN IF NOT EXISTS leave_bot_max INTEGER,
ADD COLUMN IF NOT EXISTS leave_rate INTEGER;

-- Add new fields to bot_create_table_rules table
ALTER TABLE bot_create_table_rules 
ADD COLUMN IF NOT EXISTS random_table_min INTEGER,
ADD COLUMN IF NOT EXISTS random_table_max INTEGER,
ADD COLUMN IF NOT EXISTS time_check INTEGER,
ADD COLUMN IF NOT EXISTS add_table_min INTEGER,
ADD COLUMN IF NOT EXISTS add_table_max INTEGER;

-- Add comments to explain the new fields
COMMENT ON COLUMN bot_join_rules.time_min IS 'Time range min for Baccarat/Blackjack (seconds)';
COMMENT ON COLUMN bot_join_rules.time_max IS 'Time range max for Baccarat/Blackjack (seconds)';
COMMENT ON COLUMN bot_join_rules.add_bot_min IS 'Min number of bots to add for Baccarat/Blackjack';
COMMENT ON COLUMN bot_join_rules.add_bot_max IS 'Max number of bots to add for Baccarat/Blackjack';

COMMENT ON COLUMN bot_leave_rules.bot_count_min IS 'Min number of bots in table for Baccarat/Blackjack';
COMMENT ON COLUMN bot_leave_rules.bot_count_max IS 'Max number of bots in table for Baccarat/Blackjack';
COMMENT ON COLUMN bot_leave_rules.leave_bot_min IS 'Min number of bots leaving for Baccarat/Blackjack';
COMMENT ON COLUMN bot_leave_rules.leave_bot_max IS 'Max number of bots leaving for Baccarat/Blackjack';
COMMENT ON COLUMN bot_leave_rules.leave_rate IS 'Bot leaving rate percentage for Baccarat/Blackjack';

COMMENT ON COLUMN bot_create_table_rules.random_table_min IS 'Min random number for table comparison in Baccarat/Blackjack';
COMMENT ON COLUMN bot_create_table_rules.random_table_max IS 'Max random number for table comparison in Baccarat/Blackjack';
COMMENT ON COLUMN bot_create_table_rules.time_check IS 'Time check interval for Baccarat/Blackjack (seconds)';
COMMENT ON COLUMN bot_create_table_rules.add_table_min IS 'Min number of tables to add for Baccarat/Blackjack';
COMMENT ON COLUMN bot_create_table_rules.add_table_max IS 'Max number of tables to add for Baccarat/Blackjack';

-- Create indexes for better performance on new fields
CREATE INDEX IF NOT EXISTS idx_bot_join_rules_time_range ON bot_join_rules(time_min, time_max);
CREATE INDEX IF NOT EXISTS idx_bot_join_rules_add_bot ON bot_join_rules(add_bot_min, add_bot_max);
CREATE INDEX IF NOT EXISTS idx_bot_leave_rules_bot_count ON bot_leave_rules(bot_count_min, bot_count_max);
CREATE INDEX IF NOT EXISTS idx_bot_leave_rules_leave_bot ON bot_leave_rules(leave_bot_min, leave_bot_max);
CREATE INDEX IF NOT EXISTS idx_bot_create_table_rules_random ON bot_create_table_rules(random_table_min, random_table_max);
CREATE INDEX IF NOT EXISTS idx_bot_create_table_rules_add_table ON bot_create_table_rules(add_table_min, add_table_max);
