# Bot Leave Logic Implementation

## Tổng quan

Logic bot leave đã được cập nhật để hoạt động tương tự như bot join, với các tính năng:

1. **Random Delay**: Bot sẽ không rời bàn ngay lập tức mà có thể có delay ngẫu nhiên
2. **Pending Requests**: Các yêu cầu rời bàn được lưu trữ với timer
3. **Cleanup Routine**: Tự động dọn dẹp các request hết hạn
4. **Database Integration**: Sử dụng bot_leave_rules từ database

## Cấu trúc Database

### Bot Leave Rules Table
```sql
CREATE TABLE bot_leave_rules (
    id SERIAL PRIMARY KEY,
    game_code VARCHAR(50) NOT NULL,
    min_bet BIGINT NOT NULL DEFAULT 0,
    max_bet BIGINT NOT NULL DEFAULT 999999999,
    last_result INTEGER NOT NULL DEFAULT 0, -- 1 for win, -1 for lose, 0 for any
    leave_percent INTEGER NOT NULL DEFAULT 30,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Cách sử dụng

### 1. Trong State Reward (Sau khi game kết thúc)

```go
// Trong state_machine_state_reward.go
func (s *StateReward) Enter(ctx context.Context, _ ...interface{}) error {
    // ... existing code ...
    
    // Process bot leave logic for each bot in the match
    botPresences := state.GetBotPresences()
    for _, botPresence := range botPresences {
        botUserID := botPresence.GetUserId()
        
        // Add bot_user_id to context for leave logic
        botCtx := context.WithValue(procPkg.GetContext(), "bot_user_id", botUserID)
        
        // Check if bot should leave (this will create pending request if needed)
        if botIntegration.GetBotHelper().ShouldBotLeave(botCtx) {
            log.GetLogger().Info("[reward] Bot leave triggered immediately for bot %s, result=%d", botUserID, lastResult)
            // Remove bot from match immediately
            state.RemovePresence(botPresence)
            // Free the bot back to the pool
            botIntegration.GetBotHelper().FreeBot(botUserID)
        } else {
            log.GetLogger().Info("[reward] Bot leave delayed for bot %s, result=%d", botUserID, lastResult)
            // Bot leave is delayed, will be processed later
        }
    }
    
    return nil
}
```

### 2. Trong State Matching (Xử lý pending requests)

```go
// Trong state_machine_state_matching.go
func (s *StateMatching) Process(ctx context.Context, args ...interface{}) error {
    // ... existing bot join logic ...
    
    // Process pending bot leave requests
    botIntegration := service.NewWhotBotIntegration(procPkg.GetDb())
    matchID := procPkg.GetContext().Value("match_id").(string)
    botIntegration.SetMatchState(
        matchID,
        int64(state.Label.GetMarkUnit()),
        state.GetPresenceSize(),
        0, // lastResult
        0, // activeTables
    )

    // Check for pending bot leave requests
    botCtx := packager.GetContextWithProcessorPackager(procPkg)
    if pendingRequest := botIntegration.GetBotHelper().GetPendingBotLeave(botCtx); pendingRequest != nil {
        procPkg.GetLogger().Info("[matching] Processing pending bot leave request for bot %s", pendingRequest.BotUserID)
        
        // Find the bot presence and remove it
        botPresences := state.GetBotPresences()
        for _, botPresence := range botPresences {
            if botPresence.GetUserId() == pendingRequest.BotUserID {
                state.RemovePresence(botPresence)
                procPkg.GetLogger().Info("[matching] Removed bot %s from match due to pending leave request", pendingRequest.BotUserID)
                
                // Execute the pending leave request
                if err := botIntegration.GetBotHelper().ExecutePendingBotLeave(botCtx, pendingRequest); err != nil {
                    procPkg.GetLogger().Error("[matching] Failed to execute pending bot leave: %v", err)
                }
                break
            }
        }
    }
    
    return nil
}
```

## Cấu hình Bot Leave Rules

### Thêm rules vào database:

```sql
-- Bot có 50% khả năng rời bàn sau khi thắng
INSERT INTO bot_leave_rules (game_code, min_bet, max_bet, last_result, leave_percent) 
VALUES ('whot', 0, 999999999, 1, 50);

-- Bot có 70% khả năng rời bàn sau khi thua
INSERT INTO bot_leave_rules (game_code, min_bet, max_bet, last_result, leave_percent) 
VALUES ('whot', 0, 999999999, -1, 70);

-- Bot có 30% khả năng rời bàn sau khi hòa
INSERT INTO bot_leave_rules (game_code, min_bet, max_bet, last_result, leave_percent) 
VALUES ('whot', 0, 999999999, 0, 30);
```

## Debug và Monitoring

### Debug pending requests:
```go
botIntegration := service.NewWhotBotIntegration(db)
botIntegration.DebugPendingRequests()
```

### Log output sẽ hiển thị:
```
[DEBUG] === Pending Bot Leave Requests ===
[DEBUG] Total pending leave requests: 2
[DEBUG] MatchID: match_123, Status: ACTIVE, Expires: 2024-01-15 10:30:45, BotUserID: bot_001, BetAmount: 50000, LastResult: 1
[DEBUG] MatchID: match_456, Status: EXPIRED, Expires: 2024-01-15 10:25:30, BotUserID: bot_002, BetAmount: 75000, LastResult: -1
[DEBUG] =================================
```

## Lưu ý quan trọng

1. **Context Requirements**: Logic bot leave cần `match_id` và `bot_user_id` trong context
2. **Random Delay**: Mặc định delay 1-5 giây, có thể tùy chỉnh
3. **Cleanup**: Tự động dọn dẹp expired requests mỗi 30 giây
4. **Thread Safety**: Sử dụng mutex để đảm bảo thread safety
5. **Database Integration**: Rules được load từ database, có thể cập nhật runtime

## Testing

Chạy test để kiểm tra logic:
```bash
cd cgp-common/bot
go test -v -run TestBotLeaveLogic
``` 