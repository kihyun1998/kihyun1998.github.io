---
sidebar_position: 7
---

# 07. [BackEnd] golang transaction 구현

## transaction이란
---

- 하나의 일의 단위다.

### 예시

```
Transfer 10 USD 
from bank account1 
to account2
```

위와 같은 동작을 하려면 5개의 transaction이 필요하다고 합니다.

1. amount가 10인 transfer를 만든다.

2. amount가 -10이고 account_id가 account1의 것인 entry를 만든다.

3. amount가 10이고 account_id가 account2의 것인 entry를 만든다.

4. account1의 balance를 10 뺀다.

5. account2의 balance를 10 더한다.

위와 같은 5가지 transaction이 필요하다.

### transaction이 필요한 이유

1. 시스템 장애 시에도 신뢰할 수 있고 일관된 일의 단위를 제공한다.

2. 데이터베이스에 동시에 접근할 때 프로그램 간 isolation(격리)를 제공한다.


### ACID

transaction이 만족해야 하는 속성

1. A (Atomicity) - 원자성

모든 작업이 성공적으로 실행 하든 실패든 입니다. 실패하면 모두 반영이 안되어야 합니다. 성공하면 모두 반영이 되어야 합니다.

2. C (Consistency) - 일관성

transaction 이후 db 상태가 유효해야 한다. 모든 제약 조건을 만족해야 한다.

3. I (Isolation) - 격리성

동시에 transaction이 발생하더라도 서로 영향을 미치지 않는다.

4. D (Durability) - 영속성

transaction에 의해 작성된 데이터는 영구 저장소에 기록되어야 한다.


### transaction 실행법

```sql
BEGIN;
...
COMMIT;
```

위는 성공한다면

```sql
BEGIN;
...
ROLLBACK;
```

위는 실패하면 이렇게 됩니다.


## transaction 하기
---

```go
type Store struct {
	*Queries         // 상속
	db       *sql.DB // db 만드는데 필수
}

// store 생성
func NewStore(db *sql.DB) *Store {
	return &Store{
		db:      db,
		Queries: New(db), // NewQueries
	}
}

func (store *Store) execTx(ctx context.Context, fn func(*Queries) error) error {
	tx, err := store.db.BeginTx(ctx, &sql.TxOptions{})
}
```

Queries 객체를 상속받고 db를 값으로 받는 store 구조체 생성합니다.

execTx는 transaction 실행하는 함수인데 sql.TxOptions에서 isolation level을 정할 수있습니다. 지금은 nil로 설정한다고 합니다.


```go
func (store *Store) execTx(ctx context.Context, fn func(*Queries) error) error {
	tx, err := store.db.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	q := New(tx)
	err = fn(q)
	// transaction에서 에러나면 롤백하기
	if err != nil {
		if rbErr := tx.Rollback(); rbErr != nil {
			return fmt.Errorf("tx err: %v, rb err: %v", err, rbErr)
		}
		return err
	}

	// transaction 모두 성공하면 commit
	return tx.Commit()
}
```

전체 코드는 위와 같다. BeginTx할 때 에러나면 그냥 에러 반환하고

transaction 수행 중 에러나면 Rollback하고 안나면 Commit을 return한다. 하지만 위 함수는 소문자로 시작한다. 직접 호출해서 사용하지 않고 다른 함수로 호출해서 사용하는 방식으로 사용해야 한다.

### transfer transaction

```go
type TransferTxParams struct {
	FromAccountID int64 `json:"from_account_id"`
	ToAccountID   int64 `json:"to_account_id"`
	Amount        int64 `json:"amount"`
}
```

transfer transaction의 파라미터는 3개다.

```go
type TransferTxResult struct {
	Transfer    Transfer `json:"transfer"`
	FromAccount Account  `json:"from_account"`
	ToAccount   Account  `json:"to_account"`
	FromEntry   Entry    `json:"from_entry"`
	ToEntry Entry    `json:"to_entry"`
}
```

TransferTxResult는 5개이다.

transfer는 transfer FromAccount, ToAccount는 balance 업데이트를 위해 FromEntry와 ToEntry는 돈의 in out을 위해


### 1. transfer recode 생성

```go
func (store *Store) TransferTx(ctx context.Context, arg TransferTxParams) (TransferTxResult, error) {
	var result TransferTxResult

	err := store.execTx(ctx, func(q *Queries) error {
		var err error
		result.Transfer, err = q.CreateTransfer(ctx, CreateTransferParams{
			FromAccountsID: arg.FromAccountID,
			ToAccountsID:   arg.ToAccountID,
			Amount:         arg.Amount,
		})
		if err != nil {
			return err
		}
		return nil
	})

	return result, err
}
```

### 2. FromEntry

```go
result.FromEntry, err = q.CreateEntry(ctx, CreateEntryParams{
	AccountsID: arg.FromAccountID,
	Amount:     -arg.Amount,
})
if err != nil {
	return err
}
```

특이한 부분은 `-arg.Amount`인데 왜냐하면 돈이 FromAccount로 부터 빠져나가는 것이기 때문이다.

### 3. ToEntry

```go
result.ToEntry, err = q.CreateEntry(ctx, CreateEntryParams{
	AccountsID: arg.ToAccountID,
	Amount:     arg.Amount,
})
if err != nil {
	return err
}
```

### 4, 5 Account 

deadlock을 알아야 해서 일단 패스


## 테스트 코드 작성

```go
var testQueries *Queries
var testDB *sql.DB

func TestMain(m *testing.M) {
	var err error
	// db 연결 테스트
	testDB, err = sql.Open(dbDriver, dbSource)
	if err != nil {
		log.Fatal("cannot connect : ", err)
	}

	// db 접속 객체를 testQueries에 저장
	testQueries = New(testDB)

	// 테스트 시작
	os.Exit(m.Run())
}
```

sql.Open으로 testDB를 할당합니다.


```go
package db

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestTransferTx(t *testing.T) {
	store := NewStore(testDB)

	account1 := createRandomAccount(t)
	account2 := createRandomAccount(t)

	// 동시성 테스트를 위해 go routine을 활용
	n := 5
	amount := int64(10)

	errs := make(chan error)
	results := make(chan TransferTxResult)

	for i := 0; i < n; i++ {
		go func() {
			result, err := store.TransferTx(context.Background(), TransferTxParams{
				FromAccountID: account1.ID,
				ToAccountID:   account2.ID,
				Amount:        amount,
			})
			errs <- err
			results <- result
		}()
	}
	for i := 0; i < n; i++ {
		err := <-errs
		require.NoError(t, err)

		result := <-results
		require.NotEmpty(t, result)

		// check transfer
		transfer := result.Transfer
		require.NotEmpty(t, transfer)
		require.Equal(t, account1.ID, transfer.FromAccountsID)
		require.Equal(t, account2.ID, transfer.ToAccountsID)
		require.Equal(t, amount, transfer.Amount)
		require.NotZero(t, transfer.ID)
		require.NotZero(t, transfer.CreatedAt)

		_, err = store.GetTransfer(context.Background(), transfer.ID)
		require.NoError(t, err)

		// check entries
		fromEntry := result.FromEntry
		require.NotEmpty(t, fromEntry)
		require.Equal(t, account1.ID, fromEntry.AccountsID)
		require.Equal(t, -amount, fromEntry.Amount)
		require.NotZero(t, fromEntry.ID)
		require.NotZero(t, fromEntry.CreatedAt)

		_, err = store.GetEntry(context.Background(), fromEntry.ID)
		require.NoError(t, err)

		toEntry := result.ToEntry
		require.NotEmpty(t, toEntry)
		require.Equal(t, account2.ID, toEntry.AccountsID)
		require.Equal(t, amount, toEntry.Amount)
		require.NotZero(t, toEntry.ID)
		require.NotZero(t, toEntry.CreatedAt)

		_, err = store.GetEntry(context.Background(), toEntry.ID)
		require.NoError(t, err)

		// ToDo check accounts
	}
}
```

store변수에 NewStore로 만들어서 넣어주면 Queries를 사용할 수 있습니다.


## 숙제
---

```go
// fromAccount

fromAccount, err := q.GetAccount(ctx, arg.FromAccountID)
if err != nil {
	return err
}

result.FromAccount, err = q.UpdateAccount(ctx, UpdateAccountParams{
	ID:      arg.FromAccountID,
	Balance: fromAccount.Balance - arg.Amount,
})
if err != nil {
	return err
}

// toAccount
toAccount, err := q.GetAccount(ctx, arg.ToAccountID)
if err != nil {
	return err
}

result.ToAccount, err = q.UpdateAccount(ctx, UpdateAccountParams{
	ID:      arg.ToAccountID,
	Balance: toAccount.Balance + arg.Amount,
})
if err != nil {
	return err
}
```

위처럼 추가해봤는데 맞는지는 모르겠다.