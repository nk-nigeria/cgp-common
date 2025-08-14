# Bot Configuration for Baccarat/Blackjack

## Tổng quan

Code base bot đã được mở rộng để hỗ trợ cả **WHOT** và **Baccarat/Blackjack** với các thuộc tính config mới. Hệ thống vẫn giữ được tính tương thích ngược với WHOT.

## Cấu trúc mới

### 1. BotJoinRule - Bot vào bàn

**Thuộc tính WHOT (hiện tại):**
- `min_bet`, `max_bet` - Phạm vi mức cược
- `min_users`, `max_users` - Số lượng user trong bàn
- `random_time_min`, `random_time_max` - Thời gian random vào bàn (dùng chung cho cả WHOT và Baccarat/Blackjack)
- `join_percent` - Tỷ lệ bot tham gia

**Thuộc tính mới cho Baccarat/Blackjack:**
- `add_bot_min`, `add_bot_max` - Số lượng bot sẽ thêm vào

**Ví dụ config:**
```json
{
  "min_bet": 0,
  "max_bet": 101,
  "min_users": 1,
  "max_users": 2,
  "random_time_min": 3,
  "random_time_max": 5,
  "join_percent": 100,
  "add_bot_min": 1,
  "add_bot_max": 3
}
```

### 2. BotLeaveRule - Bot thoát bàn

**Thuộc tính WHOT (hiện tại):**
- `min_bet`, `max_bet` - Phạm vi mức cược
- `last_result` - Kết quả ván gần nhất (1: Win, -1: Lose)
- `leave_percent` - Tỷ lệ bot rời bàn

**Thuộc tính mới cho Baccarat/Blackjack:**
- `min_users`, `max_users` - Số lượng user trong bàn (tính cả bot)
- `bot_count_min`, `bot_count_max` - Số lượng bot trong bàn
- `leave_bot_min`, `leave_bot_max` - Số lượng bot sẽ rời bàn
         - `leave_percent` - Tỷ lệ bot rời bàn (%) (dùng chung cho cả WHOT và Baccarat/Blackjack)

**Ví dụ config:**
```json
{
  "min_bet": 0,
  "max_bet": 101,
  "last_result": -1,
  "leave_percent": 50,
  "min_users": 3,
  "max_users": 5,
  "bot_count_min": 3,
  "bot_count_max": 5,
  "leave_bot_min": 1,
  "leave_bot_max": 2,
           "leave_percent": 50
}
```

### 3. BotCreateTableRule - Bot tạo bàn

**Thuộc tính WHOT (hiện tại):**
- `min_bet`, `max_bet` - Phạm vi mức cược
- `min_active_tables`, `max_active_tables` - Số bàn active
- `wait_time_min`, `wait_time_max` - Thời gian chờ
- `retry_wait_min`, `retry_wait_max` - Thời gian retry

**Thuộc tính mới cho Baccarat/Blackjack:**
- `random_table_min`, `random_table_max` - Số random so với số bàn hiện tại
- `time_check` - Thời gian kiểm tra (giây)
- `add_table_min`, `add_table_max` - Số lượng bàn sẽ thêm

**Ví dụ config:**
```json
{
  "min_bet": 0,
  "max_bet": 11,
  "min_active_tables": 1,
  "max_active_tables": 1,
  "wait_time_min": 1000,
  "wait_time_max": 10000,
  "retry_wait_min": 0,
  "retry_wait_max": 1,
  "random_table_min": 5,
  "random_table_max": 10,
  "time_check": 60,
  "add_table_min": 1,
  "add_table_max": 2
}
```

## Cách sử dụng

### 1. Kiểm tra loại rule

```go
// Kiểm tra xem rule có phải là Baccarat/Blackjack không
if botService.IsBaccaratBlackjackRule(rule) {
    // Sử dụng thuộc tính mới
    timeMin, timeMax := botService.GetBotJoinTimeRange(rule)
    addBotMin, addBotMax := botService.GetBotAddCount(rule)
} else {
    // Sử dụng thuộc tính WHOT cũ
    timeMin, timeMax := rule.RandomTimeMin, rule.RandomTimeMax
}
```

### 2. Tìm rule với thuộc tính mới

```go
// Tìm rule với thời gian (Baccarat/Blackjack)
rule := botService.FindBotJoinRuleWithTime(betAmount, userCount, currentTime)

// Tìm rule với số lượng bot (Baccarat/Blackjack)
rule := botService.FindBotLeaveRuleWithBotCount(betAmount, lastResult, botCount)

// Tìm rule với random table (Baccarat/Blackjack)
rule := botService.FindBotCreateTableRuleWithRandom(betAmount, activeTables, randomNumber)
```

### 3. Lấy giá trị thuộc tính

```go
// Lấy thời gian vào bàn
timeMin, timeMax := botService.GetBotJoinTimeRange(rule)

// Lấy số lượng bot thêm vào
addBotMin, addBotMax := botService.GetBotAddCount(rule)

// Lấy số lượng bot rời bàn
leaveBotMin, leaveBotMax := botService.GetBotLeaveCount(rule)

// Lấy tỷ lệ bot rời bàn
leaveRate := botService.GetBotLeaveRate(rule)

// Lấy phạm vi random table
randomMin, randomMax := botService.GetTableCreationRandomRange(rule)

// Lấy thời gian kiểm tra
timeCheck := botService.GetTableCreationTimeCheck(rule)

// Lấy số lượng bàn thêm
addTableMin, addTableMax := botService.GetTableCreationAddCount(rule)
```

## Database Migration

Chạy file migration để thêm các cột mới:

```sql
-- Chạy file migration_add_baccarat_blackjack_fields.sql
psql -d your_database -f migration_add_baccarat_blackjack_fields.sql
```

## Backward Compatibility

- **WHOT**: Vẫn hoạt động bình thường với các thuộc tính cũ
- **Baccarat/Blackjack**: Sử dụng các thuộc tính mới
- **Fallback**: Nếu thuộc tính mới không có, hệ thống sẽ sử dụng giá trị mặc định

## Ví dụ sử dụng thực tế

### WHOT (không thay đổi)
```go
// WHOT sử dụng random_time_min/max
rule := botService.FindBotJoinRule(betAmount, userCount)
delay := rand.Intn(rule.RandomTimeMax-rule.RandomTimeMin+1) + rule.RandomTimeMin
```

### Baccarat/Blackjack (sử dụng thuộc tính mới)
```go
// Baccarat/Blackjack sử dụng time_min/max
rule := botService.FindBotJoinRuleWithTime(betAmount, userCount, currentTime)
if botService.IsBaccaratBlackjackRule(rule) {
    timeMin, timeMax := botService.GetBotJoinTimeRange(rule)
    delay := rand.Intn(timeMax-timeMin+1) + timeMin
    
    addBotMin, addBotMax := botService.GetBotAddCount(rule)
    numBots := rand.Intn(addBotMax-addBotMin+1) + addBotMin
}
```

## Lưu ý

1. **Optional Fields**: Các thuộc tính mới đều là optional (pointer)
2. **Null Safety**: Luôn kiểm tra `!= nil` trước khi sử dụng
3. **Fallback Values**: Có giá trị mặc định cho WHOT
4. **Database**: Cần chạy migration trước khi sử dụng
5. **Testing**: Test cả 2 loại rule để đảm bảo tương thích
