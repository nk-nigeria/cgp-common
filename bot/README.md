# Bot Management System

A generic bot management system for multiple games, designed to be easily integrated into any game module.

## Overview

The bot management system provides:
- **Generic bot logic** that can be used across different games
- **Configurable rules** for bot behavior (join, leave, create table)
- **Delayed bot joining** with expiration timers
- **Database persistence** for bot configuration
- **Easy integration** through a simple interface

## Architecture

```
cgp-common/bot/
├── bot_management_service.go  # Core bot management logic
├── bot_integration.go         # Integration interface and helper
├── config_loader.go           # Configuration loading/saving
├── bot.go                     # Bot presence and basic bot logic
├── bot_v2.go                  # Enhanced bot loader
└── migrations/                # Database schema
    └── 001_create_bot_tables.sql
```

## Key Components

### 1. BotManagementService
The core service that manages bot behavior:
- **Singleton pattern** - One instance per game
- **Delayed join requests** - Bots join with random delays
- **Rule-based decisions** - Configurable join/leave/create table rules
- **Cleanup routines** - Automatic cleanup of expired requests

### 2. BotIntegration Interface
Interface that games must implement:
```go
type BotIntegration interface {
    GetGameCode() string
    GetMinChipBalance() int64
    GetMatchInfo(ctx context.Context) *MatchInfo
    AddBotToMatch(ctx context.Context, numBots int) error
    GetMaxPlayers() int
    GetMinPlayers() int
    IsMatchFull() bool
    GetCurrentPlayerCount() int
    GetCurrentBetAmount() int64
    GetLastGameResult() int
    GetActiveTablesCount() int
}
```

### 3. BotIntegrationHelper
Helper class that provides easy access to bot functionality:
- **ProcessBotLogic()** - Main method to process all bot logic
- **Configuration management** - Load/save bot rules
- **Debug utilities** - Debug pending requests

### 4. ConfigLoader
Handles loading/saving bot configuration:
- **Database persistence** - Store rules in database
- **JSON file support** - Load/save from JSON files
- **Game-specific rules** - Separate rules per game

## Usage

### 1. Implement BotIntegration

For each game, implement the `BotIntegration` interface:

```go
type MyGameBotIntegration struct {
    db        *sql.DB
    matchID   string
    betAmount int64
    // ... other fields
}

func (m *MyGameBotIntegration) GetGameCode() string {
    return "mygame"
}

func (m *MyGameBotIntegration) GetMinChipBalance() int64 {
    return 100000
}

// ... implement other methods
```

### 2. Create Bot Integration Helper

```go
func NewMyGameBotIntegration(db *sql.DB) *MyGameBotIntegration {
    integration := &MyGameBotIntegration{
        db: db,
        // ... initialize fields
    }
    
    integration.botHelper = bot.NewBotIntegrationHelper(db, integration)
    return integration
}
```

### 3. Use in Game Logic

```go
// In your game's match loop or state machine
func (game *MyGame) ProcessMatch() {
    ctx := context.Background()
    
    // Update match state
    game.botIntegration.SetMatchState(
        game.matchID,
        game.betAmount,
        game.playerCount,
        game.lastResult,
        game.activeTables,
    )
    
    // Process bot logic
    err := game.botIntegration.ProcessBotLogic(ctx)
    if err != nil {
        log.Printf("Bot logic error: %v", err)
    }
}
```

### 4. Load Configuration

```go
// Load bot configuration from database
err := game.botIntegration.LoadBotConfig(ctx)
if err != nil {
    log.Printf("Failed to load bot config: %v", err)
}
```

## Configuration

### Bot Join Rules
Control when bots should join matches:
```json
{
  "bot_join_rules": [
    {
      "min_bet": 1000,
      "max_bet": 10000,
      "min_users": 1,
      "max_users": 3,
      "random_time_min": 1,
      "random_time_max": 5,
      "join_percent": 50
    }
  ]
}
```

### Bot Leave Rules
Control when bots should leave matches:
```json
{
  "bot_leave_rules": [
    {
      "min_bet": 1000,
      "max_bet": 10000,
      "last_result": -1,
      "leave_percent": 30
    }
  ]
}
```

### Bot Create Table Rules
Control when bots should create new tables:
```json
{
  "bot_create_table_rules": [
    {
      "min_bet": 1000,
      "max_bet": 10000,
      "min_active_tables": 0,
      "max_active_tables": 5,
      "wait_time_min": 30,
      "wait_time_max": 60,
      "retry_wait_min": 10,
      "retry_wait_max": 20
    }
  ]
}
```

## Database Schema

The system creates the following tables:
- `bot_join_rules` - Bot join behavior rules
- `bot_leave_rules` - Bot leave behavior rules  
- `bot_create_table_rules` - Bot create table rules
- `bot_group_rules` - Bot grouping rules

Run the migration to create these tables:
```sql
-- Run the migration file
\i migrations/001_create_bot_tables.sql
```

## Examples

### Whot Game Integration
See `whot-module/usecase/service/whot_bot_integration.go` for a complete example.

### Slots Game Integration  
See `slots-game-module/handler/slots_bot_integration.go` for a complete example.

## Features

### ✅ Delayed Bot Joining
- Bots join with random delays (1-5 seconds by default)
- Prevents immediate bot joining for more natural behavior
- Expiration timers ensure bots eventually join

### ✅ Rule-Based Decisions
- Configurable rules based on bet amount, player count, etc.
- Probability-based decisions (e.g., 50% chance to join)
- Game-specific rule sets

### ✅ Database Persistence
- Store bot rules in database
- Separate rules per game
- Easy to update rules without code changes

### ✅ Singleton Pattern
- One bot service instance per game
- Shared state across all match instances
- Prevents duplicate bot join requests

### ✅ Debug Support
- Debug pending requests
- Detailed logging
- Easy troubleshooting

## Migration from Old System

If you're migrating from the old `BotManagementService` in `whot-module`:

1. **Remove old service** - Delete `whot-module/usecase/service/bot_management_service.go`
2. **Implement BotIntegration** - Create new integration following the examples
3. **Update imports** - Change imports to use `cgp-common/bot`
4. **Test thoroughly** - Ensure bot behavior remains the same

## Best Practices

1. **Game-Specific Logic** - Keep game-specific bot logic in your integration
2. **Configuration Management** - Use database for production, JSON for development
3. **Error Handling** - Always handle errors from bot operations
4. **Debug Logging** - Use debug methods during development
5. **Performance** - Bot logic should be lightweight and non-blocking

## Troubleshooting

### Bots Not Joining
1. Check if `ProcessBotLogic()` is being called
2. Verify bot configuration is loaded
3. Check if match is full
4. Use `DebugPendingRequests()` to see pending requests

### Configuration Issues
1. Ensure database tables exist
2. Check game code matches configuration
3. Verify rule ranges are correct
4. Use `LoadBotConfig()` to reload configuration

### Performance Issues
1. Check cleanup routine frequency
2. Monitor pending requests count
3. Ensure bot loader is efficient
4. Profile bot logic execution time 