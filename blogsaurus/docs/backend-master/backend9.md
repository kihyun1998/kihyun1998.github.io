---
sidebar_position: 9
---

# 09. [BackEnd] avoid db deadlock


## 추가적인 deadlock 상황
---

```sql
-- TX1 : transfer $10 from account 1 to account2
BEGIN;

UPDATE accounts SET balance = balance - 10 WHERE id=1 RETURNING *;
UPDATE accounts set balance = balance + 10 WHERE id=2 RETURNING *; 

ROLLBACK;

-- TX2 : transfer $10 from account 2 to account1

BEGIN;

UPDATE accounts SET balance = balance - 10 WHERE id=2 RETURNING *;
UPDATE accounts set balance = balance + 10 WHERE id=1 RETURNING *; 

ROLLBACK;
```

이렇게 위처럼 1 > 2, 2 > 1 통신을 하면 deadlock이 걸림

왜냐하면 서로 둘 다 다른 트랜잭션을 기다리기 때문입니다.


```go

func TestTransferTxDeadlock(t *testing.T) {
	store := NewStore(testDB)

	account1 := createRandomAccount(t)
	account2 := createRandomAccount(t)
	fmt.Println("[LOG] before balance (account1) : ", account1.Balance)
	fmt.Println("[LOG] before balance (account2) : ", account2.Balance)

	// 동시성 테스트를 위해 go routine을 활용
	n := 10
	amount := int64(10)

	errs := make(chan error)
	results := make(chan TransferTxResult)

	for i := 0; i < n; i++ {
		fromAccountID := account1.ID
		toAccountID := account2.ID

		if i%2 == 1 {
			fromAccountID = account2.ID
			toAccountID = account1.ID
		}

		go func() {

			result, err := store.TransferTx(context.Background(), TransferTxParams{
				FromAccountID: fromAccountID,
				ToAccountID:   toAccountID,
				Amount:        amount,
			})
			errs <- err
			results <- result
		}()
	}

	for i := 0; i < n; i++ {
		err := <-errs
		require.NoError(t, err)
	}

	updatedAccount1, err := testQueries.GetAccount(context.Background(), account1.ID)
	require.NoError(t, err)

	updatedAccount2, err := testQueries.GetAccount(context.Background(), account2.ID)
	require.NoError(t, err)

	fmt.Println("[LOG] update balance (account1) : ", updatedAccount1.Balance)
	fmt.Println("[LOG] update balance (account2) : ", updatedAccount2.Balance)

	require.Equal(t, account1.Balance, updatedAccount1.Balance)
	require.Equal(t, account2.Balance, updatedAccount2.Balance)
}
```

그래서 위의 테스트 코드를 실행 시 deadlock 에러가 나는 것을 알 수 있습니다.

위의 테스트 코드는 5개는 1 > 2로 송금 5개는 2 > 1로 송금하는 테스트입니다.

## deadlock이 난 이유
---


위의 sql을 보시면 `TX1`은 account1을 먼저 업데이트 하고 account2를 업데이트하는데 `TX2`는 account2를 업데이트하고 account1을 업데이트합니다.

업데이트 순서가 다르기에 deadlock이 나는 것이라 업데이트 순서(업데이트 하는 계정 순서)를 같게 해줍니다.

## deadlock 해결방안
---

언제나 업데이트의 순서를 일관되게 설정해놓으면 해결할 수 있다.

### 코드 수정

```go
    if arg.FromAccountID < arg.ToAccountID {
			// fromAccount
			result.FromAccount, err = q.AddAccountBalance(ctx, AddAccountBalanceParams{
				ID:     arg.FromAccountID,
				Amount: -arg.Amount,
			})
			if err != nil {
				return err
			}

			// toAccount
			result.ToAccount, err = q.AddAccountBalance(ctx, AddAccountBalanceParams{
				ID:     arg.ToAccountID,
				Amount: arg.Amount,
			})
			if err != nil {
				return err
			}
		} else {
			// toAccount
			result.ToAccount, err = q.AddAccountBalance(ctx, AddAccountBalanceParams{
				ID:     arg.ToAccountID,
				Amount: arg.Amount,
			})
			if err != nil {
				return err
			}
			// fromAccount
			result.FromAccount, err = q.AddAccountBalance(ctx, AddAccountBalanceParams{
				ID:     arg.FromAccountID,
				Amount: -arg.Amount,
			})
			if err != nil {
				return err
			}
		}
```


account update하는 부분에 id를 검사하는 로직을 추가하여 업데이트하는 계정 순서를 맞춰주면 해결할 수 있습니다.


### 리팩토링

```go
func addMoney(
	ctx context.Context,
	q *Queries,
	accountID1 int64,
	amount1 int64,
	accountID2 int64,
	amount2 int64,
) (account1 Account, account2 Account, err error) {
	account1, err = q.AddAccountBalance(ctx, AddAccountBalanceParams{
		ID:     accountID1,
		Amount: amount1,
	})
	if err != nil {
		// return에 아무것도 안적어도 return account1, account2, err가 반환됨
		// 왜냐하면 return 변수명을 정해줘서
		return
	}
	account2, err = q.AddAccountBalance(ctx, AddAccountBalanceParams{
		ID:     accountID2,
		Amount: amount2,
	})
	return
}
```

위 함수를 통해서 리팩토링할 수 있다.

```go
		if arg.FromAccountID < arg.ToAccountID {
			result.FromAccount, result.ToAccount, err = addMoney(ctx, q, arg.FromAccountID, -arg.Amount, arg.ToAccountID, arg.Amount)
		} else {
			result.FromAccount, result.ToAccount, err = addMoney(ctx, q, arg.ToAccountID, arg.Amount, arg.FromAccountID, -arg.Amount)
		}
```

길었던 코드가 이렇게 짧게 변했다.
