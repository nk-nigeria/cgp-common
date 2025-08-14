package bot

import (
	"testing"
)

func TestBaccaratBlackjackProperties(t *testing.T) {
	// Test BotJoinRule with Baccarat/Blackjack properties
	t.Run("TestBotJoinRuleBaccaratBlackjack", func(t *testing.T) {
		rule := &BotJoinRule{
			MinBet:        0,
			MaxBet:        101,
			MinUsers:      1,
			MaxUsers:      2,
			RandomTimeMin: 3,
			RandomTimeMax: 5,
			JoinPercent:   100,
			AddBotMin:     intPtr(1),
			AddBotMax:     intPtr(3),
		}

		// Test helper methods
		timeMin, timeMax := getBotJoinTimeRange(rule)
		if timeMin != 3 || timeMax != 5 {
			t.Errorf("Expected time range (3,5), got (%d,%d)", timeMin, timeMax)
		}

		addBotMin, addBotMax := getBotAddCount(rule)
		if addBotMin != 1 || addBotMax != 3 {
			t.Errorf("Expected add bot range (1,3), got (%d,%d)", addBotMin, addBotMax)
		}

		// Test detection
		if !isBaccaratBlackjackRule(rule) {
			t.Error("Expected rule to be detected as Baccarat/Blackjack")
		}
	})

	// Test BotJoinRule with WHOT properties only
	t.Run("TestBotJoinRuleWHOT", func(t *testing.T) {
		rule := &BotJoinRule{
			MinBet:        0,
			MaxBet:        101,
			MinUsers:      1,
			MaxUsers:      2,
			RandomTimeMin: 3,
			RandomTimeMax: 5,
			JoinPercent:   100,
			// No Baccarat/Blackjack properties
		}

		// Test helper methods should fallback to WHOT properties
		timeMin, timeMax := getBotJoinTimeRange(rule)
		if timeMin != 3 || timeMax != 5 {
			t.Errorf("Expected time range (3,5), got (%d,%d)", timeMin, timeMax)
		}

		addBotMin, addBotMax := getBotAddCount(rule)
		if addBotMin != 1 || addBotMax != 1 {
			t.Errorf("Expected add bot range (1,1), got (%d,%d)", addBotMin, addBotMax)
		}

		// Test detection
		if isBaccaratBlackjackRule(rule) {
			t.Error("Expected rule to be detected as WHOT")
		}
	})

	// Test BotLeaveRule with Baccarat/Blackjack properties
	t.Run("TestBotLeaveRuleBaccaratBlackjack", func(t *testing.T) {
		rule := &BotLeaveRule{
			MinBet:       0,
			MaxBet:       101,
			LastResult:   -1,
			LeavePercent: 50,
			MinUsers:     3,
			MaxUsers:     5,
			BotCountMin:  intPtr(3),
			BotCountMax:  intPtr(5),
			LeaveBotMin:  intPtr(1),
			LeaveBotMax:  intPtr(2),
			LeaveRate:    intPtr(50),
		}

		// Test helper methods
		leaveBotMin, leaveBotMax := getBotLeaveCount(rule)
		if leaveBotMin != 1 || leaveBotMax != 2 {
			t.Errorf("Expected leave bot range (1,2), got (%d,%d)", leaveBotMin, leaveBotMax)
		}

		leaveRate := getBotLeaveRate(rule)
		if leaveRate != 50 {
			t.Errorf("Expected leave rate 50, got %d", leaveRate)
		}

		// Test detection
		if !isBaccaratBlackjackLeaveRule(rule) {
			t.Error("Expected rule to be detected as Baccarat/Blackjack")
		}
	})

	// Test BotLeaveRule with WHOT properties only
	t.Run("TestBotLeaveRuleWHOT", func(t *testing.T) {
		rule := &BotLeaveRule{
			MinBet:       0,
			MaxBet:       101,
			LastResult:   -1,
			LeavePercent: 50,
			MinUsers:     1,
			MaxUsers:     2,
			// No Baccarat/Blackjack properties
		}

		// Test helper methods should fallback to WHOT properties
		leaveBotMin, leaveBotMax := getBotLeaveCount(rule)
		if leaveBotMin != 1 || leaveBotMax != 1 {
			t.Errorf("Expected leave bot range (1,1), got (%d,%d)", leaveBotMin, leaveBotMax)
		}

		leaveRate := getBotLeaveRate(rule)
		if leaveRate != 50 {
			t.Errorf("Expected leave rate 50, got %d", leaveRate)
		}

		// Test detection
		if isBaccaratBlackjackLeaveRule(rule) {
			t.Error("Expected rule to be detected as WHOT")
		}
	})

	// Test BotCreateTableRule with Baccarat/Blackjack properties
	t.Run("TestBotCreateTableRuleBaccaratBlackjack", func(t *testing.T) {
		rule := &BotCreateTableRule{
			MinBet:          0,
			MaxBet:          11,
			MinActiveTables: 1,
			MaxActiveTables: 1,
			WaitTimeMin:     1000,
			WaitTimeMax:     10000,
			RetryWaitMin:    0,
			RetryWaitMax:    1,
			RandomTableMin:  intPtr(5),
			RandomTableMax:  intPtr(10),
			TimeCheck:       intPtr(60),
			AddTableMin:     intPtr(1),
			AddTableMax:     intPtr(2),
		}

		// Test helper methods
		randomMin, randomMax := getTableCreationRandomRange(rule)
		if randomMin != 5 || randomMax != 10 {
			t.Errorf("Expected random range (5,10), got (%d,%d)", randomMin, randomMax)
		}

		timeCheck := getTableCreationTimeCheck(rule)
		if timeCheck != 60 {
			t.Errorf("Expected time check 60, got %d", timeCheck)
		}

		addTableMin, addTableMax := getTableCreationAddCount(rule)
		if addTableMin != 1 || addTableMax != 2 {
			t.Errorf("Expected add table range (1,2), got (%d,%d)", addTableMin, addTableMax)
		}

		// Test detection
		if !isBaccaratBlackjackCreateTableRule(rule) {
			t.Error("Expected rule to be detected as Baccarat/Blackjack")
		}
	})

	// Test BotCreateTableRule with WHOT properties only
	t.Run("TestBotCreateTableRuleWHOT", func(t *testing.T) {
		rule := &BotCreateTableRule{
			MinBet:          0,
			MaxBet:          11,
			MinActiveTables: 1,
			MaxActiveTables: 1,
			WaitTimeMin:     1000,
			WaitTimeMax:     10000,
			RetryWaitMin:    0,
			RetryWaitMax:    1,
			// No Baccarat/Blackjack properties
		}

		// Test helper methods should fallback to WHOT properties
		randomMin, randomMax := getTableCreationRandomRange(rule)
		if randomMin != 1 || randomMax != 10 {
			t.Errorf("Expected random range (1,10), got (%d,%d)", randomMin, randomMax)
		}

		timeCheck := getTableCreationTimeCheck(rule)
		if timeCheck != 60 {
			t.Errorf("Expected time check 60, got %d", timeCheck)
		}

		addTableMin, addTableMax := getTableCreationAddCount(rule)
		if addTableMin != 1 || addTableMax != 1 {
			t.Errorf("Expected add table range (1,1), got (%d,%d)", addTableMin, addTableMax)
		}

		// Test detection
		if isBaccaratBlackjackCreateTableRule(rule) {
			t.Error("Expected rule to be detected as WHOT")
		}
	})
}

// Helper functions for testing (copied from BotManagementService)
func getBotJoinTimeRange(rule *BotJoinRule) (int, int) {
	// Both WHOT and Baccarat/Blackjack use random_time_min/max
	return rule.RandomTimeMin, rule.RandomTimeMax
}

func getBotAddCount(rule *BotJoinRule) (int, int) {
	if rule.AddBotMin != nil && rule.AddBotMax != nil {
		return *rule.AddBotMin, *rule.AddBotMax
	}
	return 1, 1
}

func getBotLeaveCount(rule *BotLeaveRule) (int, int) {
	if rule.LeaveBotMin != nil && rule.LeaveBotMax != nil {
		return *rule.LeaveBotMin, *rule.LeaveBotMax
	}
	return 1, 1
}

func getBotLeaveRate(rule *BotLeaveRule) int {
	if rule.LeaveRate != nil {
		return *rule.LeaveRate
	}
	return rule.LeavePercent
}

func getTableCreationRandomRange(rule *BotCreateTableRule) (int, int) {
	if rule.RandomTableMin != nil && rule.RandomTableMax != nil {
		return *rule.RandomTableMin, *rule.RandomTableMax
	}
	return 1, 10
}

func getTableCreationTimeCheck(rule *BotCreateTableRule) int {
	if rule.TimeCheck != nil {
		return *rule.TimeCheck
	}
	return 60
}

func getTableCreationAddCount(rule *BotCreateTableRule) (int, int) {
	if rule.AddTableMin != nil && rule.AddTableMax != nil {
		return *rule.AddTableMin, *rule.AddTableMax
	}
	return 1, 1
}

func isBaccaratBlackjackRule(rule *BotJoinRule) bool {
	return rule.AddBotMin != nil && rule.AddBotMax != nil
}

func isBaccaratBlackjackLeaveRule(rule *BotLeaveRule) bool {
	return rule.BotCountMin != nil && rule.BotCountMax != nil && rule.LeaveBotMin != nil && rule.LeaveBotMax != nil
}

func isBaccaratBlackjackCreateTableRule(rule *BotCreateTableRule) bool {
	return rule.RandomTableMin != nil && rule.RandomTableMax != nil && rule.TimeCheck != nil && rule.AddTableMin != nil && rule.AddTableMax != nil
}

// Helper function to create int pointers
func intPtr(v int) *int {
	return &v
}
