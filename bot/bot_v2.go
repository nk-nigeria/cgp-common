package bot

import (
	"context"
	"database/sql"
	"fmt"
	"strconv"
	"sync"
	"time"

	"github.com/ciaolink-game-platform/cgp-common/lib"
)

type botLoader struct {
	db       *sql.DB
	gameCode string
	// usersBot    []*BotPresence
	userBotFree    map[string]*BotPresence
	offset         int
	limit          int
	mt             sync.Mutex
	minChipBalance int64
}

func NewBotLoader(db *sql.DB, gameCode string, minChipBalance int64) *botLoader {
	if minChipBalance < 0 {
		minChipBalance = 100000
	}
	return &botLoader{
		db:             db,
		gameCode:       gameCode,
		minChipBalance: minChipBalance,
		offset:         0,
		limit:          1000,
		userBotFree:    make(map[string]*BotPresence),
	}
}

func (l *botLoader) GetDb() *sql.DB {
	return l.db
}

func (l *botLoader) getUserBot(offset, limit int) ([]*lib.MyAccount, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	tx, err := l.db.QueryContext(ctx, "select user_id from users_bot where game_code=$1 offset $2 limit $3", l.gameCode, offset, limit)
	if err != nil {
		return nil, err
	}
	defer tx.Close()
	var userIds []string
	for tx.Next() {
		var userId string
		err = tx.Scan(&userId)
		if err != nil {
			return nil, err
		}
		userIds = append(userIds, userId)
	}
	if len(userIds) == 0 {
		return make([]*lib.MyAccount, 0), nil
	}
	account, err := lib.GetAccounts(ctx, l.db, userIds...)
	if err != nil {
		return nil, err
	}
	return account, nil
}

func (l *botLoader) GetFreeBot(num int) ([]*BotPresence, error) {
	l.mt.Lock()
	defer l.mt.Unlock()
	ml := make([]*BotPresence, 0, num)
	for {
		for _, userBot := range l.userBotFree {
			ml = append(ml, userBot)
			if len(ml) >= num {
				break
			}
		}
		if len(ml) >= num {
			break
		}

		newUserBot, err := l.getUserBot(l.offset, l.limit)
		if err != nil {
			fmt.Printf("\r\n [ERR] load more user bot, offset = %d, limit = %d err = %v", l.offset, l.limit, err.Error())
			return nil, err
		}
		fmt.Printf("\r\n [DONE] load more %d user bot, offset = %d, limit = %d", len(newUserBot), l.offset, l.limit)
		for _, newBot := range newUserBot {
			v := BotPresence{
				MyAccount: newBot,
				Tick:      0,
				turn:      NewBotTurn(0, 0, nil),
				IsFree:    true,
			}
			// l.userBotFree = append(l.userBotFree, &v)
			l.userBotFree[newBot.User.Id] = &v
		}
		l.offset += l.limit
		if len(newUserBot) == 0 {
			break
		}
	}
	for _, userBot := range ml {
		userBot.IsFree = false
		delete(l.userBotFree, userBot.User.Id)
		l.maintainChipBalance(userBot.User.Id)
	}
	return ml, nil
}

func (l *botLoader) FreeBot(v *BotPresence) {
	l.mt.Lock()
	v.Reset()
	l.userBotFree[v.User.Id] = v
	l.mt.Unlock()
}

func (l *botLoader) maintainChipBalance(userId string) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	profile, _, err := lib.GetProfileUser(ctx, l.db, userId)
	if err != nil {
		return err
	}
	if profile.AccountChip < l.minChipBalance {
		ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		query := `UPDATE users AS u SET metadata = u.wallet || jsonb_build_object('chips',` + strconv.FormatInt(l.minChipBalance, 64) + `) WHERE id = $1;`
		_, err := l.db.ExecContext(ctx, query, userId)
		if err != nil {
			return err
		}
	}
	return nil
}
