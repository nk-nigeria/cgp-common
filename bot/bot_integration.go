package bot

import (
	"context"
	"database/sql"
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
func NewBotIntegrationHelper(db *sql.DB, integration BotIntegration) *BotIntegrationHelper {
	botService := GetBotManagementService(db, integration.GetGameCode(), integration.GetMinChipBalance())

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

// ShouldBotLeave checks if bot should leave the current match
func (h *BotIntegrationHelper) ShouldBotLeave(ctx context.Context) bool {
	matchInfo := h.integration.GetMatchInfo(ctx)
	return h.botService.ShouldBotLeave(ctx, matchInfo.BetAmount, matchInfo.LastGameResult)
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

// ProcessBotLogic processes all bot-related logic for the current match
func (h *BotIntegrationHelper) ProcessBotLogic(ctx context.Context) error {
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
