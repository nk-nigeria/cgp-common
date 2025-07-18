package bot

import (
	"context"
	"database/sql"
	"fmt"
	"time"
)

// BotIntegration defines the interface that games must implement to integrate with the bot system
type BotIntegration interface {
	// GetGameCode returns the unique game code (e.g., "whot", "slots")
	GetGameCode() string

	// GetMinChipBalance returns the minimum chip balance required for bots
	GetMinChipBalance() int64

	// GetMatchInfo returns current match information for bot decision making
	GetMatchInfo(ctx context.Context) *MatchInfo

	// AddBotToMatch adds bots to the current match
	AddBotToMatch(ctx context.Context, numBots int) error

	// RemoveBotFromMatch removes bots from the current match
	RemoveBotFromMatch(ctx context.Context, botUserID string) error

	// GetMaxPlayers returns the maximum number of players allowed in a match
	GetMaxPlayers() int

	// GetMinPlayers returns the minimum number of players required to start a match
	GetMinPlayers() int

	// IsMatchFull returns true if the match is full
	IsMatchFull() bool

	// GetCurrentPlayerCount returns the current number of players in the match
	GetCurrentPlayerCount() int

	// GetCurrentBetAmount returns the current bet amount for the match
	GetCurrentBetAmount() int64

	// GetLastGameResult returns the result of the last game (1 for win, -1 for lose, 0 for draw)
	GetLastGameResult() int

	// GetActiveTablesCount returns the number of active tables (for create table logic)
	GetActiveTablesCount() int
}

// MatchInfo contains information about the current match state
type MatchInfo struct {
	MatchID           string
	BetAmount         int64
	PlayerCount       int
	MaxPlayers        int
	MinPlayers        int
	IsFull            bool
	LastGameResult    int
	ActiveTablesCount int
}

// BotIntegrationHelper provides helper methods for bot integration
type BotIntegrationHelper struct {
	botService  *BotManagementService
	integration BotIntegration
}

// NewBotIntegrationHelper creates a new bot integration helper
func NewBotIntegrationHelper(db *sql.DB, integration BotIntegration, botLoader *botLoader) *BotIntegrationHelper {
	botService := GetBotManagementService(db, botLoader)

	return &BotIntegrationHelper{
		botService:  botService,
		integration: integration,
	}
}

// SetBotConfig sets the bot configuration
func (h *BotIntegrationHelper) SetBotConfig(config *BotConfig) {
	h.botService.SetBotConfig(config)
}

// GetBotConfig returns the current bot configuration
func (h *BotIntegrationHelper) GetBotConfig() *BotConfig {
	return h.botService.GetBotConfig()
}

// ShouldBotJoin checks if bot should join the current match
func (h *BotIntegrationHelper) ShouldBotJoin(ctx context.Context) bool {
	matchInfo := h.integration.GetMatchInfo(ctx)

	// Add match_id to context
	ctxWithMatchID := context.WithValue(ctx, "match_id", matchInfo.MatchID)

	return h.botService.ShouldBotJoin(ctxWithMatchID, matchInfo.BetAmount, matchInfo.PlayerCount)
}

// GetPendingBotJoin checks if there's a pending bot join request
func (h *BotIntegrationHelper) GetPendingBotJoin(ctx context.Context) *BotJoinRequest {
	matchInfo := h.integration.GetMatchInfo(ctx)
	return h.botService.GetPendingBotJoin(matchInfo.MatchID)
}

// GetPendingBotLeave checks if there's a pending bot leave request
func (h *BotIntegrationHelper) GetPendingBotLeave(ctx context.Context) *BotLeaveRequest {
	matchInfo := h.integration.GetMatchInfo(ctx)
	return h.botService.GetPendingBotLeave(matchInfo.MatchID)
}

// ExecutePendingBotJoin executes a pending bot join request
func (h *BotIntegrationHelper) ExecutePendingBotJoin(ctx context.Context, pendingRequest *BotJoinRequest) error {
	if pendingRequest != nil {
		// Add bot to match
		err := h.integration.AddBotToMatch(ctx, 1)
		if err != nil {
			return err
		}

		// Remove the executed request
		matchInfo := h.integration.GetMatchInfo(ctx)
		h.botService.RemovePendingRequest(matchInfo.MatchID)
	}
	return nil
}

// ExecutePendingBotLeave executes a pending bot leave request
func (h *BotIntegrationHelper) ExecutePendingBotLeave(ctx context.Context, pendingRequest *BotLeaveRequest) error {
	if pendingRequest != nil {
		// Free the bot back to the pool
		h.botService.FreeBot(pendingRequest.BotUserID)

		// Remove the executed request
		matchInfo := h.integration.GetMatchInfo(ctx)
		h.botService.RemovePendingLeaveRequest(matchInfo.MatchID)
	}
	return nil
}

// ShouldBotLeave checks if bot should leave the current match
func (h *BotIntegrationHelper) ShouldBotLeave(ctx context.Context) bool {
	matchInfo := h.integration.GetMatchInfo(ctx)

	// Add match_id to context
	ctxWithMatchID := context.WithValue(ctx, "match_id", matchInfo.MatchID)

	return h.botService.ShouldBotLeave(ctxWithMatchID, matchInfo.BetAmount, matchInfo.LastGameResult)
}

// ShouldBotCreateTable checks if bot should create a new table
func (h *BotIntegrationHelper) ShouldBotCreateTable(ctx context.Context) (bool, int, int) {
	matchInfo := h.integration.GetMatchInfo(ctx)
	return h.botService.ShouldBotCreateTable(ctx, matchInfo.BetAmount, matchInfo.ActiveTablesCount)
}

// GetBotGroup gets bot group rule
func (h *BotIntegrationHelper) GetBotGroup(vip int, mcb int64) *BotGroupRule {
	return h.botService.GetBotGroup(vip, mcb)
}

// GetFreeBots gets free bots
func (h *BotIntegrationHelper) GetFreeBots(numBots int) ([]*BotPresence, error) {
	return h.botService.GetFreeBots(numBots)
}

// FreeBot frees a bot back to the pool
func (h *BotIntegrationHelper) FreeBot(userId string) {
	h.botService.FreeBot(userId)
}

// IsBot checks if a user is a bot
func (h *BotIntegrationHelper) IsBot(userId string) bool {
	return h.botService.IsBot(userId)
}

// DebugPendingRequests prints all pending requests for debugging
func (h *BotIntegrationHelper) DebugPendingRequests() {
	h.botService.DebugPendingRequests()
}

// ShouldBotBeKicked checks if a bot should be kicked based on time (without random)
func (h *BotIntegrationHelper) ShouldBotBeKicked(ctx context.Context, botUserID string) bool {
	matchInfo := h.integration.GetMatchInfo(ctx)
	ctxWithMatchID := context.WithValue(ctx, "match_id", matchInfo.MatchID)
	return h.botService.ShouldBotBeKicked(ctxWithMatchID, botUserID)
}

// ClearBotLeaveDecision clears the leave decision for a specific bot in a match
func (h *BotIntegrationHelper) ClearBotLeaveDecision(ctx context.Context, botUserID string) {
	matchInfo := h.integration.GetMatchInfo(ctx)
	h.botService.ClearBotLeaveDecision(matchInfo.MatchID, botUserID)
}

// GetBotLeaveRemainingTime returns the remaining time for a bot leave request
func (h *BotIntegrationHelper) GetBotLeaveRemainingTime(ctx context.Context, botUserID string) (time.Duration, bool) {
	matchInfo := h.integration.GetMatchInfo(ctx)
	ctxWithMatchID := context.WithValue(ctx, "match_id", matchInfo.MatchID)
	return h.botService.GetBotLeaveRemainingTime(ctxWithMatchID, botUserID)
}

// CheckAndKickExpiredBots checks if any bots should be kicked based on their leave time
func (h *BotIntegrationHelper) CheckAndKickExpiredBots(ctx context.Context, botUserID string) (bool, error) {
	// Check if bot should be kicked based on time (without random)
	if h.ShouldBotBeKicked(ctx, botUserID) {
		fmt.Printf("[DEBUG] Bot %s should be kicked based on time\n", botUserID)
		// Remove bot from match immediately
		err := h.integration.RemoveBotFromMatch(ctx, botUserID)
		if err != nil {
			return false, err
		}
		// Clear the decision for this bot
		h.ClearBotLeaveDecision(ctx, botUserID)
		return true, nil
	}
	return false, nil
}

// ProcessJoinBotLogic processes all bot-related logic for the current match
func (h *BotIntegrationHelper) ProcessJoinBotLogic(ctx context.Context) error {
	// Skip if match is full
	if h.integration.IsMatchFull() {
		return nil
	}

	// Check for immediate bot join
	if h.ShouldBotJoin(ctx) {
		return h.integration.AddBotToMatch(ctx, 1)
	}

	// Check for pending bot joins
	if pendingRequest := h.GetPendingBotJoin(ctx); pendingRequest != nil {
		return h.ExecutePendingBotJoin(ctx, pendingRequest)
	}

	return nil
}

// ProcessBotLeaveLogic processes bot leave logic for the current match
func (h *BotIntegrationHelper) ProcessBotLeaveLogic(ctx context.Context, botUserID string) error {
	// Add bot_user_id to context for leave logic
	ctxWithBotID := context.WithValue(ctx, "bot_user_id", botUserID)

	// Check for immediate bot leave
	if h.ShouldBotLeave(ctxWithBotID) {
		return h.integration.RemoveBotFromMatch(ctx, botUserID)
	}

	// Check for pending bot leaves
	if pendingRequest := h.GetPendingBotLeave(ctx); pendingRequest != nil {
		return h.ExecutePendingBotLeave(ctx, pendingRequest)
	}

	return nil
}
