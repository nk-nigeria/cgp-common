package bot

import (
	"context"
	"database/sql"
	"fmt"
	"math/rand"
	"sync"
	"time"

	"github.com/nk-nigeria/cgp-common/define"
)

// BotJoinRequest represents a pending bot join request with timer
type BotJoinRequest struct {
	MatchID    string
	BetAmount  int64
	UserCount  int
	ExpireTime time.Time
	Rule       *BotJoinRule
}

// BotLeaveRequest represents a pending bot leave request with timer
type BotLeaveRequest struct {
	MatchID    string
	BetAmount  int64
	LastResult int
	BotUserID  string
	ExpireTime time.Time
	Rule       *BotLeaveRule
}

// BotJoinRule represents bot join configuration
type BotJoinRule struct {
	MinBet        int64 `json:"min_bet"`
	MaxBet        int64 `json:"max_bet"`
	MinUsers      int   `json:"min_users"`
	MaxUsers      int   `json:"max_users"`
	RandomTimeMin int   `json:"random_time_min"` // WHOT & Baccarat/Blackjack: random time range for joining
	RandomTimeMax int   `json:"random_time_max"` // WHOT & Baccarat/Blackjack: random time range for joining
	JoinPercent   int   `json:"join_percent"`    // WHOT & Baccarat/Blackjack: percentage chance to join

	// Additional properties for Baccarat/Blackjack
	AddBotMin *int `json:"add_bot_min,omitempty"` // Min number of bots to add
	AddBotMax *int `json:"add_bot_max,omitempty"` // Max number of bots to add
}

// BotLeaveRule represents bot leave configuration
type BotLeaveRule struct {
	MinBet       int64 `json:"min_bet"`
	MaxBet       int64 `json:"max_bet"`
	LastResult   int   `json:"last_result"`
	LeavePercent int   `json:"leave_percent"`

	// Additional properties for Baccarat/Blackjack
	MinUsers    int  `json:"min_users"`               // Min number of users in table (including bots)
	MaxUsers    int  `json:"max_users"`               // Max number of users in table (including bots)
	BotCountMin *int `json:"bot_count_min,omitempty"` // Min number of bots in table
	BotCountMax *int `json:"bot_count_max,omitempty"` // Max number of bots in table
	LeaveBotMin *int `json:"leave_bot_min,omitempty"` // Min number of bots leaving
	LeaveBotMax *int `json:"leave_bot_max,omitempty"` // Max number of bots leaving
	LeaveRate   *int `json:"leave_rate,omitempty"`    // Bot leaving rate percentage
}

// BotCreateTableRule represents bot create table configuration
type BotCreateTableRule struct {
	MinBet          int64 `json:"min_bet"`
	MaxBet          int64 `json:"max_bet"`
	MinActiveTables int   `json:"min_active_tables"`
	MaxActiveTables int   `json:"max_active_tables"`
	WaitTimeMin     int   `json:"wait_time_min"`
	WaitTimeMax     int   `json:"wait_time_max"`
	RetryWaitMin    int   `json:"retry_wait_min"`
	RetryWaitMax    int   `json:"retry_wait_max"`

	// Additional properties for Baccarat/Blackjack
	RandomTableMin *int `json:"random_table_min,omitempty"` // Min random number for table comparison
	RandomTableMax *int `json:"random_table_max,omitempty"` // Max random number for table comparison
	TimeCheck      *int `json:"time_check,omitempty"`       // Time check interval (seconds)
	AddTableMin    *int `json:"add_table_min,omitempty"`    // Min number of tables to add
	AddTableMax    *int `json:"add_table_max,omitempty"`    // Max number of tables to add
}

// BotGroupRule represents bot group configuration
type BotGroupRule struct {
	VIPMin int   `json:"vip_min"`
	VIPMax int   `json:"vip_max"`
	MCBMin int64 `json:"mcb_min"`
	MCBMax int64 `json:"mcb_max"`
}

// BotConfig represents the complete bot configuration
type BotConfig struct {
	BotJoinRules        []BotJoinRule        `json:"bot_join_rules"`
	BotLeaveRules       []BotLeaveRule       `json:"bot_leave_rules"`
	BotCreateTableRules []BotCreateTableRule `json:"bot_create_table_rules"`
	BotGroupRules       []BotGroupRule       `json:"bot_group_rules"`
}

// BotManagementService manages bot behavior with optimized timing
type BotManagementService struct {
	db                *sql.DB
	config            *BotConfig
	joinRequests      map[string]*BotJoinRequest  // key: matchID
	leaveRequests     map[string]*BotLeaveRequest // key: matchID
	botLeaveDecisions map[string]bool             // key: matchID_botUserID, tracks if bot has been decided to leave
	botJoinDecisions  map[string]bool             // key: matchID, tracks if join decision has been made for this match
	joinRequestsMux   sync.RWMutex
	leaveRequestsMux  sync.RWMutex
	decisionsMux      sync.RWMutex
	cleanupTicker     *time.Ticker
	stopCleanup       chan bool
	botLoader         *botLoader
}

// Singleton instance
var (
	botServiceInstance *BotManagementService
	botServiceOnce     sync.Once
)

// GetBotManagementService returns the singleton instance of BotManagementService
func GetBotManagementService(db *sql.DB, botLoader *botLoader) *BotManagementService {
	botServiceOnce.Do(func() {
		botServiceInstance = newBotManagementService(db, botLoader)
	})
	return botServiceInstance
}

func newBotManagementService(db *sql.DB, botLoader *botLoader) *BotManagementService {
	service := &BotManagementService{
		db:                db,
		joinRequests:      make(map[string]*BotJoinRequest),
		leaveRequests:     make(map[string]*BotLeaveRequest),
		botLeaveDecisions: make(map[string]bool),
		botJoinDecisions:  make(map[string]bool),
		stopCleanup:       make(chan bool),
		botLoader:         botLoader,
	}

	// Load default config
	service.config = &BotConfig{}

	// Start cleanup goroutine
	service.startCleanupRoutine()

	return service
}

// SetBotConfig allows updating bot configuration
func (s *BotManagementService) SetBotConfig(config *BotConfig) {
	s.config = config
}

// GetBotConfig returns current bot configuration
func (s *BotManagementService) GetBotConfig() *BotConfig {
	return s.config
}

// FindBotJoinRule finds appropriate join rule
func (s *BotManagementService) FindBotJoinRule(betAmount int64, userCount int) *BotJoinRule {
	for _, rule := range s.config.BotJoinRules {
		if betAmount >= rule.MinBet && betAmount < rule.MaxBet &&
			userCount >= rule.MinUsers && userCount <= rule.MaxUsers {
			return &rule
		}
	}
	return nil
}

// FindBotJoinRuleWithBotCount finds appropriate join rule with bot count consideration (for Baccarat/Blackjack)
func (s *BotManagementService) FindBotJoinRuleWithBotCount(betAmount int64, userCount int, botCount int) *BotJoinRule {
	for _, rule := range s.config.BotJoinRules {
		if betAmount >= rule.MinBet && betAmount < rule.MaxBet &&
			userCount >= rule.MinUsers && userCount <= rule.MaxUsers {
			// For Baccarat/Blackjack, we can add additional bot count logic here if needed
			// For now, just return the rule if it matches basic criteria
			return &rule
		}
	}
	return nil
}

// FindBotLeaveRule finds appropriate leave rule
func (s *BotManagementService) FindBotLeaveRule(betAmount int64, lastResult int) *BotLeaveRule {
	for _, rule := range s.config.BotLeaveRules {
		if betAmount >= rule.MinBet && betAmount < rule.MaxBet &&
			(rule.LastResult == 0 || rule.LastResult == lastResult) {
			return &rule
		}
	}
	return nil
}

// FindBotLeaveRuleWithBotCount finds appropriate leave rule with bot count consideration (for Baccarat/Blackjack)
func (s *BotManagementService) FindBotLeaveRuleWithBotCount(betAmount int64, lastResult int, botCount int) *BotLeaveRule {
	for _, rule := range s.config.BotLeaveRules {
		if betAmount >= rule.MinBet && betAmount < rule.MaxBet &&
			(rule.LastResult == 0 || rule.LastResult == lastResult) {
			// Check bot count constraints if they exist (Baccarat/Blackjack specific)
			if rule.BotCountMin != nil && rule.BotCountMax != nil {
				if botCount >= *rule.BotCountMin && botCount <= *rule.BotCountMax {
					return &rule
				}
			} else {
				// For WHOT, use the rule without bot count constraints
				return &rule
			}
		}
	}
	return nil
}

// FindBotCreateTableRule finds appropriate create table rule
func (s *BotManagementService) FindBotCreateTableRule(betAmount int64, activeTables int) *BotCreateTableRule {
	for _, rule := range s.config.BotCreateTableRules {
		if betAmount >= rule.MinBet && betAmount < rule.MaxBet &&
			activeTables >= rule.MinActiveTables && activeTables <= rule.MaxActiveTables {
			return &rule
		}
	}
	return nil
}

// FindBotCreateTableRuleWithRandom finds appropriate create table rule with random table comparison (for Baccarat/Blackjack)
func (s *BotManagementService) FindBotCreateTableRuleWithRandom(betAmount int64, activeTables int, randomNumber int) *BotCreateTableRule {
	for _, rule := range s.config.BotCreateTableRules {
		if betAmount >= rule.MinBet && betAmount < rule.MaxBet &&
			activeTables >= rule.MinActiveTables && activeTables <= rule.MaxActiveTables {
			// Check random table constraints if they exist (Baccarat/Blackjack specific)
			if rule.RandomTableMin != nil && rule.RandomTableMax != nil {
				if randomNumber >= *rule.RandomTableMin && randomNumber <= *rule.RandomTableMax {
					return &rule
				}
			} else {
				// For WHOT, use the rule without random table constraints
				return &rule
			}
		}
	}
	return nil
}

// FindBotGroupRule finds appropriate group rule
func (s *BotManagementService) FindBotGroupRule(vip int, mcb int64) *BotGroupRule {
	for _, rule := range s.config.BotGroupRules {
		if vip >= rule.VIPMin && vip <= rule.VIPMax &&
			mcb >= rule.MCBMin && mcb < rule.MCBMax {
			return &rule
		}
	}
	return nil
}

// ShouldBotJoin determines if bot should join match (only random once per match)
func (s *BotManagementService) ShouldBotJoin(ctx context.Context, betAmount int64, userCount int) bool {
	rule := s.FindBotJoinRule(betAmount, userCount)
	if rule == nil {
		fmt.Printf("[DEBUG] No bot join rule found for betAmount=%d, userCount=%d\n", betAmount, userCount)
		return false
	}

	fmt.Printf("[DEBUG] Found bot join rule: betRange=[%d,%d), userRange=[%d,%d], joinPercent=%d\n",
		rule.MinBet, rule.MaxBet, rule.MinUsers, rule.MaxUsers, rule.JoinPercent)

	// Get match ID from context
	matchID, ok := ctx.Value("match_id").(string)
	if !ok {
		// If no match ID, use immediate join (fallback)
		fmt.Printf("[DEBUG] No match ID in context, using immediate join\n")
		return true
	}

	// Check if a join decision has already been made for this match
	s.decisionsMux.RLock()
	alreadyDecided := s.botJoinDecisions[matchID]
	s.decisionsMux.RUnlock()

	if alreadyDecided {
		fmt.Printf("[DEBUG] Bot join decision already made for match %s, skipping new decision\n", matchID)
		return false // Don't create new request, let the existing one be processed
	}

	// Check if there's already a pending request for this match
	s.joinRequestsMux.RLock()
	if existing, exists := s.joinRequests[matchID]; exists {
		s.joinRequestsMux.RUnlock()
		// Check if the existing request has expired
		if time.Now().Before(existing.ExpireTime) {
			fmt.Printf("[DEBUG] Bot join request already pending for match %s, expires at %v\n", matchID, existing.ExpireTime)
			return false // Still waiting
		}
		// Expired but not yet executed, don't create new request
		fmt.Printf("[DEBUG] Bot join request expired but not yet executed for match %s, skipping new request creation\n", matchID)
		return false // Don't create new request, let the expired one be executed
	} else {
		s.joinRequestsMux.RUnlock()
	}

	// Determine game type and apply appropriate logic
	if s.IsWhotGame(rule) {
		// WHOT: Use join_percent for single bot join
		fmt.Printf("[DEBUG] WHOT rule detected, using join_percent for single bot\n")

		// Check join probability
		randomValue := rand.Intn(100)
		if randomValue >= rule.JoinPercent {
			fmt.Printf("[DEBUG] Bot join failed probability check: random=%d >= joinPercent=%d\n", randomValue, rule.JoinPercent)
			return false
		}

		fmt.Printf("[DEBUG] Bot join passed probability check: random=%d < joinPercent=%d\n", randomValue, rule.JoinPercent)

		// Calculate random delay using random_time_min/max
		fmt.Printf("[DEBUG] RandomTimeMin=%d, RandomTimeMax=%d\n", rule.RandomTimeMin, rule.RandomTimeMax)
		if rule.RandomTimeMax > rule.RandomTimeMin {
			delay := rand.Intn(rule.RandomTimeMax-rule.RandomTimeMin+1) + rule.RandomTimeMin
			expireTime := time.Now().Add(time.Duration(delay) * time.Second)

			fmt.Printf("[DEBUG] Creating delayed bot join request: matchID=%s, delay=%ds, expires=%v\n", matchID, delay, expireTime)

			// Create pending request
			request := &BotJoinRequest{
				MatchID:    matchID,
				BetAmount:  betAmount,
				UserCount:  userCount,
				ExpireTime: expireTime,
				Rule:       rule,
			}

			// Store the request
			s.joinRequestsMux.Lock()
			s.joinRequests[matchID] = request
			s.joinRequestsMux.Unlock()

			// Mark that a decision has been made for this match
			s.decisionsMux.Lock()
			s.botJoinDecisions[matchID] = true
			s.decisionsMux.Unlock()

			fmt.Printf("[DEBUG] Stored pending request for matchID=%s, total pending requests: %d\n",
				matchID, len(s.joinRequests))

			return false // Don't join immediately
		}

		fmt.Printf("[DEBUG] Bot join approved immediately for WHOT\n")
		return true // Join immediately if no random delay
	} else {
		// Baccarat/Blackjack: IGNORE join_percent, only use add_bot_min/max and random_time_min/max
		fmt.Printf("[DEBUG] Baccarat/Blackjack rule detected, IGNORING join_percent, using add_bot_min/max and random_time_min/max\n")

		// For Baccarat/Blackjack, we don't check join_percent - bots will always join
		fmt.Printf("[DEBUG] Baccarat/Blackjack: Skipping join_percent check, bots will join based on timing only\n")

		// Calculate random delay using random_time_min/max
		fmt.Printf("[DEBUG] RandomTimeMin=%d, RandomTimeMax=%d\n", rule.RandomTimeMin, rule.RandomTimeMax)
		if rule.RandomTimeMax > rule.RandomTimeMin {
			delay := rand.Intn(rule.RandomTimeMax-rule.RandomTimeMin+1) + rule.RandomTimeMin
			expireTime := time.Now().Add(time.Duration(delay) * time.Second)

			fmt.Printf("[DEBUG] Creating delayed bot join request: matchID=%s, delay=%ds, expires=%v\n", matchID, delay, expireTime)

			// Create pending request
			request := &BotJoinRequest{
				MatchID:    matchID,
				BetAmount:  betAmount,
				UserCount:  userCount,
				ExpireTime: expireTime,
				Rule:       rule,
			}

			// Store the request
			s.joinRequestsMux.Lock()
			s.joinRequests[matchID] = request
			s.joinRequestsMux.Unlock()

			// Mark that a decision has been made for this match
			s.decisionsMux.Lock()
			s.botJoinDecisions[matchID] = true
			s.decisionsMux.Unlock()

			fmt.Printf("[DEBUG] Stored pending request for matchID=%s, total pending requests: %d\n",
				matchID, len(s.joinRequests))

			return false // Don't join immediately
		}

		fmt.Printf("[DEBUG] Bot join approved immediately for Baccarat/Blackjack\n")
		return true // Join immediately if no random delay
	}
}

// ShouldBotJoinNow checks if bot should join based on time (without random)
func (s *BotManagementService) ShouldBotJoinNow(ctx context.Context) bool {
	matchID, ok := ctx.Value("match_id").(string)
	if !ok {
		return false
	}

	// Check if there's a pending join request for this match
	s.joinRequestsMux.RLock()
	request, exists := s.joinRequests[matchID]
	s.joinRequestsMux.RUnlock()

	if !exists {
		return false
	}

	// Check if the request has expired
	if time.Now().After(request.ExpireTime) {
		fmt.Printf("[DEBUG] Bot join request expired for match %s, should join now\n", matchID)
		return true
	}

	return false
}

// GetPendingBotJoin checks if there's a pending bot join request that should be executed
func (s *BotManagementService) GetPendingBotJoin(matchID string) *BotJoinRequest {
	s.joinRequestsMux.RLock()
	defer s.joinRequestsMux.RUnlock()

	fmt.Printf("[DEBUG] GetPendingBotJoin called for matchID=%s\n", matchID)
	fmt.Printf("[DEBUG] Current pending requests count: %d\n", len(s.joinRequests))

	if request, exists := s.joinRequests[matchID]; exists {
		now := time.Now()
		fmt.Printf("[DEBUG] Found pending request for matchID=%s, expires=%v, now=%v\n",
			matchID, request.ExpireTime, now)

		timeUntilExpire := request.ExpireTime.Sub(now)
		fmt.Printf("[DEBUG] Time until expire: %v\n", timeUntilExpire)

		if now.After(request.ExpireTime) {
			fmt.Printf("[DEBUG] Request has expired, returning it for execution\n")
			// Request has expired, return it for execution
			// Note: We don't remove it immediately to avoid race condition
			// It will be removed after successful execution
			return request
		} else {
			fmt.Printf("[DEBUG] Request not yet expired, still waiting\n")
		}
	} else {
		fmt.Printf("[DEBUG] No pending request found for matchID=%s\n", matchID)
	}

	return nil
}

// GetPendingBotLeave checks if there's a pending bot leave request that should be executed
func (s *BotManagementService) GetPendingBotLeave(matchID string) *BotLeaveRequest {
	s.leaveRequestsMux.RLock()
	defer s.leaveRequestsMux.RUnlock()

	fmt.Printf("[DEBUG] GetPendingBotLeave called for matchID=%s\n", matchID)
	fmt.Printf("[DEBUG] Current pending leave requests count: %d\n", len(s.leaveRequests))

	if request, exists := s.leaveRequests[matchID]; exists {
		now := time.Now()
		fmt.Printf("[DEBUG] Found pending leave request for matchID=%s, expires=%v, now=%v\n",
			matchID, request.ExpireTime, now)

		timeUntilExpire := request.ExpireTime.Sub(now)
		fmt.Printf("[DEBUG] Time until expire: %v\n", timeUntilExpire)

		if now.After(request.ExpireTime) {
			fmt.Printf("[DEBUG] Leave request has expired, returning it for execution\n")
			// Request has expired, return it for execution
			// Note: We don't remove it immediately to avoid race condition
			// It will be removed after successful execution
			return request
		} else {
			fmt.Printf("[DEBUG] Leave request not yet expired, still waiting\n")
		}
	} else {
		fmt.Printf("[DEBUG] No pending leave request found for matchID=%s\n", matchID)
	}

	return nil
}

// RemovePendingRequest removes a pending request for the given matchID
func (s *BotManagementService) RemovePendingJoinRequest(matchID string) {
	s.joinRequestsMux.Lock()
	defer s.joinRequestsMux.Unlock()

	if _, exists := s.joinRequests[matchID]; exists {
		delete(s.joinRequests, matchID)
		fmt.Printf("[DEBUG] Removed pending request for matchID=%s\n", matchID)
	}
}

// RemovePendingLeaveRequest removes a pending leave request for the given matchID
func (s *BotManagementService) RemovePendingLeaveRequest(matchID string) {
	s.leaveRequestsMux.Lock()
	defer s.leaveRequestsMux.Unlock()

	if _, exists := s.leaveRequests[matchID]; exists {
		delete(s.leaveRequests, matchID)
		fmt.Printf("[DEBUG] Removed pending leave request for matchID=%s\n", matchID)
	}
}

// ShouldBotLeave determines if bot should leave match
func (s *BotManagementService) ShouldBotLeave(ctx context.Context, betAmount int64, lastResult int) bool {
	rule := s.FindBotLeaveRule(betAmount, lastResult)
	if rule == nil {
		fmt.Printf("[DEBUG] No bot leave rule found for betAmount=%d, lastResult=%d\n", betAmount, lastResult)
		return false
	}

	fmt.Printf("[DEBUG] Found bot leave rule: betRange=[%d,%d), lastResult=%d, leavePercent=%d\n",
		rule.MinBet, rule.MaxBet, rule.LastResult, rule.LeavePercent)

	// Check leave probability
	randomValue := rand.Intn(100)
	if randomValue >= rule.LeavePercent {
		fmt.Printf("[DEBUG] Bot leave failed probability check: random=%d >= leavePercent=%d\n", randomValue, rule.LeavePercent)
		return false
	}

	fmt.Printf("[DEBUG] Bot leave passed probability check: random=%d < leavePercent=%d\n", randomValue, rule.LeavePercent)

	// Get match ID from context
	matchID, ok := ctx.Value("match_id").(string)
	if !ok {
		// If no match ID, use immediate leave (fallback)
		fmt.Printf("[DEBUG] No match ID in context, using immediate leave\n")
		return true
	}

	// For leave requests, we need to get a bot user ID from context
	botUserID, ok := ctx.Value("bot_user_id").(string)
	if !ok {
		fmt.Printf("[DEBUG] No bot user ID in context, using immediate leave\n")
		return true // Immediate leave if no bot user ID
	}

	// Check if a decision has already been made for this bot in this match
	s.decisionsMux.RLock()
	decisionKey := fmt.Sprintf("%s_%s", matchID, botUserID)
	alreadyDecided := s.botLeaveDecisions[decisionKey]
	s.decisionsMux.RUnlock()

	if alreadyDecided {
		fmt.Printf("[DEBUG] Bot leave decision already made for match %s, bot user %s, skipping new decision\n", matchID, botUserID)
		return false // Don't create new request, let the previous one be executed
	}

	// Calculate random delay (using join rule timing as reference)
	// You can add specific leave timing rules if needed
	delay := rand.Intn(9) + 1 // 1-9 seconds default
	expireTime := time.Now().Add(time.Duration(delay) * time.Second)

	fmt.Printf("[DEBUG] Creating delayed bot leave request: matchID=%s, botUserID=%s, delay=%ds, expires=%v\n",
		matchID, botUserID, delay, expireTime)

	// Create pending leave request
	request := &BotLeaveRequest{
		MatchID:    matchID,
		BetAmount:  betAmount,
		LastResult: lastResult,
		BotUserID:  botUserID,
		ExpireTime: expireTime,
		Rule:       rule,
	}

	// Store the request
	s.leaveRequestsMux.Lock()
	s.leaveRequests[matchID] = request
	s.leaveRequestsMux.Unlock()

	// Mark that a decision has been made for this bot in this match
	s.decisionsMux.Lock()
	s.botLeaveDecisions[decisionKey] = true
	s.decisionsMux.Unlock()

	fmt.Printf("[DEBUG] Stored pending leave request for matchID=%s, total pending leave requests: %d\n",
		matchID, len(s.leaveRequests))

	return false // Don't leave immediately
}

// ShouldBotCreateTable determines if bot should create table
func (s *BotManagementService) ShouldBotCreateTable(ctx context.Context, betAmount int64, activeTables int) (bool, int, int) {
	rule := s.FindBotCreateTableRule(betAmount, activeTables)
	if rule == nil {
		return false, 0, 0
	}
	waitTime := rule.WaitTimeMin
	if rule.WaitTimeMax > rule.WaitTimeMin {
		waitTime = rand.Intn(rule.WaitTimeMax-rule.WaitTimeMin+1) + rule.WaitTimeMin
	}
	retryWait := rule.RetryWaitMin
	if rule.RetryWaitMax > rule.RetryWaitMin {
		retryWait = rand.Intn(rule.RetryWaitMax-rule.RetryWaitMin+1) + rule.RetryWaitMin
	}
	return true, waitTime, retryWait
}

// GetBotGroup gets bot group rule
func (s *BotManagementService) GetBotGroup(vip int, mcb int64) *BotGroupRule {
	return s.FindBotGroupRule(vip, mcb)
}

// GetFreeBots gets free bots from bot loader
func (s *BotManagementService) GetFreeBots(numBots int) ([]*BotPresence, error) {
	return s.botLoader.GetFreeBot(numBots)
}

// FreeBot frees a bot back to the pool
func (s *BotManagementService) FreeBot(userId string) {
	s.botLoader.FreeBot(userId)
}

// IsBot checks if a user is a bot
func (s *BotManagementService) IsBot(userId string) bool {
	return s.botLoader.IsBot(userId)
}

// startCleanupRoutine starts a background goroutine to clean up expired requests
func (s *BotManagementService) startCleanupRoutine() {
	s.cleanupTicker = time.NewTicker(30 * time.Second) // Clean up every 30 seconds

	go func() {
		for {
			select {
			case <-s.cleanupTicker.C:
				s.cleanupExpiredRequests()
			case <-s.stopCleanup:
				s.cleanupTicker.Stop()
				return
			}
		}
	}()
}

// cleanupExpiredRequests removes expired bot join requests
func (s *BotManagementService) cleanupExpiredRequests() {
	now := time.Now()

	// Clean up expired join requests
	s.joinRequestsMux.Lock()
	for matchID, request := range s.joinRequests {
		if now.After(request.ExpireTime) {
			delete(s.joinRequests, matchID)
		}
	}
	s.joinRequestsMux.Unlock()

	// Clean up expired leave requests
	s.leaveRequestsMux.Lock()
	for matchID, request := range s.leaveRequests {
		if now.After(request.ExpireTime) {
			delete(s.leaveRequests, matchID)
		}
	}
	s.leaveRequestsMux.Unlock()

	// Clean up expired decisions - for now, we'll keep decisions until match ends
	// This can be enhanced later if needed
	s.decisionsMux.Lock()
	// TODO: Add logic to clean up decisions when matches end
	s.decisionsMux.Unlock()
}

// Stop stops the cleanup routine
func (s *BotManagementService) Stop() {
	if s.cleanupTicker != nil {
		s.stopCleanup <- true
	}
}

// DebugPendingRequests prints all pending requests for debugging
func (s *BotManagementService) DebugPendingRequests() {
	s.joinRequestsMux.RLock()
	defer s.joinRequestsMux.RUnlock()

	fmt.Printf("[DEBUG] === Pending Bot Join Requests ===\n")
	fmt.Printf("[DEBUG] Total pending requests: %d\n", len(s.joinRequests))

	now := time.Now()
	for matchID, request := range s.joinRequests {
		expired := now.After(request.ExpireTime)
		status := "ACTIVE"
		if expired {
			status = "EXPIRED"
		}
		fmt.Printf("[DEBUG] MatchID: %s, Status: %s, Expires: %v, BetAmount: %d, UserCount: %d\n",
			matchID, status, request.ExpireTime, request.BetAmount, request.UserCount)
	}
	fmt.Printf("[DEBUG] =================================\n")

	// Also show pending leave requests
	s.leaveRequestsMux.RLock()
	defer s.leaveRequestsMux.RUnlock()

	fmt.Printf("[DEBUG] === Pending Bot Leave Requests ===\n")
	fmt.Printf("[DEBUG] Total pending leave requests: %d\n", len(s.leaveRequests))

	for matchID, request := range s.leaveRequests {
		expired := now.After(request.ExpireTime)
		status := "ACTIVE"
		if expired {
			status = "EXPIRED"
		}
		fmt.Printf("[DEBUG] MatchID: %s, Status: %s, Expires: %v, BotUserID: %s, BetAmount: %d, LastResult: %d\n",
			matchID, status, request.ExpireTime, request.BotUserID, request.BetAmount, request.LastResult)
	}
	fmt.Printf("[DEBUG] =================================\n")
}

// GetBotLeaveRemainingTime returns the remaining time for a bot leave request
func (s *BotManagementService) GetBotLeaveRemainingTime(ctx context.Context, botUserID string) (time.Duration, bool) {
	matchID, ok := ctx.Value("match_id").(string)
	if !ok {
		return 0, false
	}

	// Check if there's a pending leave request for this match
	s.leaveRequestsMux.RLock()
	request, exists := s.leaveRequests[matchID]
	s.leaveRequestsMux.RUnlock()

	if !exists {
		return 0, false
	}

	// Check if this request is for the specific bot
	if request.BotUserID != botUserID {
		return 0, false
	}

	remaining := time.Until(request.ExpireTime)
	if remaining <= 0 {
		return 0, true // Expired
	}

	return remaining, true // Has pending request
}

// ClearBotJoinDecision clears the join decision for a specific match
func (s *BotManagementService) ClearBotJoinDecision(matchID string) {
	s.decisionsMux.Lock()
	delete(s.botJoinDecisions, matchID)
	s.decisionsMux.Unlock()
	fmt.Printf("[DEBUG] Cleared bot join decision for match %s\n", matchID)
}

// GetBotJoinRemainingTime returns the remaining time for a bot join request
func (s *BotManagementService) GetBotJoinRemainingTime(ctx context.Context) (time.Duration, bool) {
	matchID, ok := ctx.Value("match_id").(string)
	if !ok {
		return 0, false
	}

	// Check if there's a pending join request for this match
	s.joinRequestsMux.RLock()
	request, exists := s.joinRequests[matchID]
	s.joinRequestsMux.RUnlock()

	if !exists {
		return 0, false
	}

	remaining := time.Until(request.ExpireTime)
	if remaining <= 0 {
		return 0, true // Expired
	}

	return remaining, true // Has pending request
}

// ShouldBotBeKicked checks if a bot should be kicked based on time (without random)
func (s *BotManagementService) ShouldBotBeKicked(ctx context.Context, botUserID string) bool {
	matchID, ok := ctx.Value("match_id").(string)
	if !ok {
		return false
	}

	// Check if there's a pending leave request for this match
	s.leaveRequestsMux.RLock()
	request, exists := s.leaveRequests[matchID]
	s.leaveRequestsMux.RUnlock()

	if !exists {
		return false
	}

	// Check if this request is for the specific bot
	if request.BotUserID != botUserID {
		return false
	}

	// Check if the request has expired
	if time.Now().After(request.ExpireTime) {
		fmt.Printf("[DEBUG] Bot leave request expired for match %s, bot %s, should be kicked\n", matchID, botUserID)
		return true
	}

	return false
}

// GetBotLeaveDecisionKey generates the key for tracking bot leave decisions
func (s *BotManagementService) GetBotLeaveDecisionKey(matchID, botUserID string) string {
	return fmt.Sprintf("%s_%s", matchID, botUserID)
}

// ClearBotLeaveDecision clears the leave decision for a specific bot in a match
func (s *BotManagementService) ClearBotLeaveDecision(matchID, botUserID string) {
	s.decisionsMux.Lock()
	decisionKey := s.GetBotLeaveDecisionKey(matchID, botUserID)
	delete(s.botLeaveDecisions, decisionKey)
	s.decisionsMux.Unlock()
	fmt.Printf("[DEBUG] Cleared bot leave decision for match %s, bot %s\n", matchID, botUserID)
}

// Helper methods for Baccarat/Blackjack specific properties

// GetBotJoinTimeRange returns the time range for bot joining (common for both WHOT and Baccarat/Blackjack)
func (s *BotManagementService) GetBotJoinTimeRange(rule *BotJoinRule) (int, int) {
	// Both WHOT and Baccarat/Blackjack use random_time_min/max
	return rule.RandomTimeMin, rule.RandomTimeMax
}

// GetBotAddCount returns the number of bots to add (Baccarat/Blackjack specific)
func (s *BotManagementService) GetBotAddCount(rule *BotJoinRule) (int, int) {
	if rule.AddBotMin != nil && rule.AddBotMax != nil {
		return *rule.AddBotMin, *rule.AddBotMax
	}
	// Default to 1 bot for WHOT
	return 1, 1
}

// GetBotLeaveCount returns the number of bots leaving (Baccarat/Blackjack specific)
func (s *BotManagementService) GetBotLeaveCount(rule *BotLeaveRule) (int, int) {
	if rule.LeaveBotMin != nil && rule.LeaveBotMax != nil {
		return *rule.LeaveBotMin, *rule.LeaveBotMax
	}
	// Default to 1 bot for WHOT
	return 1, 1
}

// GetBotLeaveRate returns the bot leaving rate percentage (Baccarat/Blackjack specific)
func (s *BotManagementService) GetBotLeaveRate(rule *BotLeaveRule) int {
	if rule.LeaveRate != nil {
		return *rule.LeaveRate
	}
	// Fallback to WHOT leave percent
	return rule.LeavePercent
}

// GetTableCreationRandomRange returns the random range for table creation (Baccarat/Blackjack specific)
func (s *BotManagementService) GetTableCreationRandomRange(rule *BotCreateTableRule) (int, int) {
	if rule.RandomTableMin != nil && rule.RandomTableMax != nil {
		return *rule.RandomTableMin, *rule.RandomTableMax
	}
	// Default range for WHOT
	return 1, 10
}

// GetTableCreationTimeCheck returns the time check interval (Baccarat/Blackjack specific)
func (s *BotManagementService) GetTableCreationTimeCheck(rule *BotCreateTableRule) int {
	if rule.TimeCheck != nil {
		return *rule.TimeCheck
	}
	// Default to 60 seconds for WHOT
	return 60
}

// GetTableCreationAddCount returns the number of tables to add (Baccarat/Blackjack specific)
func (s *BotManagementService) GetTableCreationAddCount(rule *BotCreateTableRule) (int, int) {
	if rule.AddTableMin != nil && rule.AddTableMax != nil {
		return *rule.AddTableMin, *rule.AddTableMax
	}
	// Default to 1 table for WHOT
	return 1, 1
}

// IsBaccaratBlackjackRule checks if a rule has Baccarat/Blackjack specific properties
func (s *BotManagementService) IsWhotGame(rule *BotJoinRule) bool {
	return s.botLoader.gameCode == define.WhotGame.String()
}

// IsBaccaratBlackjackLeaveRule checks if a leave rule has Baccarat/Blackjack specific properties
func (s *BotManagementService) IsBaccaratBlackjackLeaveRule(rule *BotLeaveRule) bool {
	return rule.BotCountMin != nil && rule.BotCountMax != nil && rule.LeaveBotMin != nil && rule.LeaveBotMax != nil && rule.LeaveRate != nil
}

// IsBaccaratBlackjackCreateTableRule checks if a create table rule has Baccarat/Blackjack specific properties
func (s *BotManagementService) IsBaccaratBlackjackCreateTableRule(rule *BotCreateTableRule) bool {
	return rule.RandomTableMin != nil && rule.RandomTableMax != nil && rule.TimeCheck != nil && rule.AddTableMin != nil && rule.AddTableMax != nil
}

// GetBotJoinCount returns the number of bots to join based on game type
func (s *BotManagementService) GetBotJoinCount(rule *BotJoinRule) int {
	if s.IsWhotGame(rule) {
		// WHOT: Always add 1 bot
		fmt.Printf("[DEBUG] WHOT: Adding 1 bot (single bot join)\n")
		return 1
	} else {
		// Baccarat/Blackjack: Random between add_bot_min and add_bot_max
		if rule.AddBotMin != nil && rule.AddBotMax != nil {
			if *rule.AddBotMax > *rule.AddBotMin {
				count := rand.Intn(*rule.AddBotMax-*rule.AddBotMin+1) + *rule.AddBotMin
				fmt.Printf("[DEBUG] Baccarat/Blackjack: Random bot count between %d-%d, selected: %d\n",
					*rule.AddBotMin, *rule.AddBotMax, count)
				return count
			} else {
				fmt.Printf("[DEBUG] Baccarat/Blackjack: Using fixed bot count: %d\n", *rule.AddBotMin)
				return *rule.AddBotMin
			}
		}
		// Fallback to 1 if add_bot_min/max not set
		fmt.Printf("[DEBUG] Baccarat/Blackjack: add_bot_min/max not set, using default: 1\n")
		return 1
	}
}
