---
sidebar_position: 8
---

# 08. [BackEnd] golang db transaction deadlock

## TDD 
---

TDD는 Test Driven Development로 테스트를 먼저하고 그 다음에 테스트가 통과되면 코드를 개선하는 방식입니다.


## account 테스트 코드 작성
---

```go
	existed := make(map[int]bool)
	{
		.
		.
		.
		
		fromAccount := result.FromAccount
		require.NotEmpty(t, fromAccount)
		require.Equal(t, account1.ID, fromAccount.ID)

		toAccount := result.ToAccount
		require.NotEmpty(t, toAccount)
		require.Equal(t, account2.ID, toAccount.ID)

		// check different balance

		diff1 := account1.Balance - fromAccount.Balance
		diff2 := toAccount.Balance - account2.Balance
		require.Equal(t, diff1, diff2)
		require.True(t, diff1 > 0)
		require.True(t, diff1%amount == 0)

		k := int(diff1 / amount)
		require.True(t, k >= 1 && k <= n)
		require.NotContains(t, existed, k)
		existed[k] = true
	}

	updatedAccount1, err := testQueries.GetAccount(context.Background(), account1.ID)
	require.NoError(t, err)

	updatedAccount2, err := testQueries.GetAccount(context.Background(), account2.ID)
	require.NoError(t, err)

	require.Equal(t, account1.Balance-int64(n)*amount, updatedAccount1.Balance)
	require.Equal(t, account2.Balance+int64(n)*amount, updatedAccount2.Balance)
```


## deadlock 해결
---

지난 게시글에서 만들어본 fromAccount와 toAccount가 잘못됐다. 왜냐하면 동시에 transaction begin을 하게 되면 동시에 같은 계정을 가리키기 때문에 업데이트가 제대로 되지 않는다.

이를 해결하기 위해 `For Update`를 사용해줘야 한다.

### For Update 쿼리

```sql
SELECT * FROM accounts
WHERE id = $1 LIMIT 1
FOR UPDATE;
```

FOR UPDATE만 넣어주고 다시 sqlc해준다.

하지만 이렇게 해도 교착상태에 빠집니다.


## deadlock 디버깅
---

디버깅하기 위해서 context에 transaction 이름을 넣어야 합니다.

```go
var txKey = struct{}{}
```

txKey라는 구조체를 만듭니다. `struct{}{}` 이렇게 하는 것은 빈 구조체를 만든다는 뜻입니다.

```go
txName := fmt.Sprintf("tx %d", i+1)
ctx := context.WithValue(context.Background(), txKey, txName)
```

위와 같은 방식으로 context를 만들면 context에 txName이 포함됩니다.

txName은 `context.Value(txKey)` 함수를 통해서 얻을 수 있습니다.


테스트를 실행해보고 나온 결과를 실제 sql로 따라해본다.

```sql
BEGIN;

INSERT INTO transfers (from_accounts_id, to_accounts_id, amount) VALUES (1,2,10) RETURNING *;

INSERT INTO entries (accounts_id, amount) VALUES (1,-10) RETURNING *;
INSERT INTO entries (accounts_id, amount) VALUES (1,10) RETURNING *;

SELECT * FROM accounts WHERE id=1 FOR UPDATE
UPDATE accounts SET balance = 190 WHERE id=1 RETURNING;

SELECT * FROM accounts WHERE id=2 FOR UPDATE
UPDATE accounts SET balance = 210 WHERE id=1 RETURNING;

ROLLBACK;
```

하다보면 get account가 안되는 것을 알 수 있다.

더 자세히 보려면 아래 sql을 입력하면 된다.

```sql
  SELECT blocked_locks.pid     AS blocked_pid,
         blocked_activity.usename  AS blocked_user,
         blocking_locks.pid     AS blocking_pid,
         blocking_activity.usename AS blocking_user,
         blocked_activity.query    AS blocked_statement,
         blocking_activity.query   AS current_statement_in_blocking_process
   FROM  pg_catalog.pg_locks         blocked_locks
    JOIN pg_catalog.pg_stat_activity blocked_activity  ON blocked_activity.pid = blocked_locks.pid
    JOIN pg_catalog.pg_locks         blocking_locks 
        ON blocking_locks.locktype = blocked_locks.locktype
        AND blocking_locks.database IS NOT DISTINCT FROM blocked_locks.database
        AND blocking_locks.relation IS NOT DISTINCT FROM blocked_locks.relation
        AND blocking_locks.page IS NOT DISTINCT FROM blocked_locks.page
        AND blocking_locks.tuple IS NOT DISTINCT FROM blocked_locks.tuple
        AND blocking_locks.virtualxid IS NOT DISTINCT FROM blocked_locks.virtualxid
        AND blocking_locks.transactionid IS NOT DISTINCT FROM blocked_locks.transactionid
        AND blocking_locks.classid IS NOT DISTINCT FROM blocked_locks.classid
        AND blocking_locks.objid IS NOT DISTINCT FROM blocked_locks.objid
        AND blocking_locks.objsubid IS NOT DISTINCT FROM blocked_locks.objsubid
        AND blocking_locks.pid != blocked_locks.pid

    JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid
   WHERE NOT blocked_locks.granted;
```


아래 sql도 같은 역할을 합니다.

```sql
SELECT a.datname,
		 a.application_name
         l.relation::regclass,
         l.transactionid,
         l.mode,
         l.GRANTED,
         a.usename,
         a.query,
         a.query_start,
         age(now(), a.query_start) AS "age",
         a.pid
FROM pg_stat_activity a
JOIN pg_locks l ON l.pid = a.pid
ORDER BY a.query_start;
```

:::tip 속성 의미
`a.application_name` : 잠금이 발생한 어플리케이션

`l.relation::regclass` : 테이블 이름

`l.transactionid` : 트랜젝션 아이디

`l.mode` : 잠금 모드

`l.locktype`: 잠금 유형

`l.GRANTED` : 잠금 부여 여부

`a.usename` : 쿼리 실행 사용자 이름

`a.query` : 잠금 보유하거나 획득하려는 쿼리

`a.pid` : pid
:::

이렇게 해서 알아낸 것이 키 제약조건으로 인해서 교착 상태가 발생한다는 것입니다.

가장 간단한 방법은 키 제약조건을 제거하는 것입니다. 하지만 이는 좋은 방법이 아닌 것이 일관성 유지를 해야하기 때문입니다.

### 해결법

account 업데이트를 할 때 account_id를 변경하는 것이 아니기 때문에

`FOR UPDATE` 대신에 `FOR NO KEY UPDATE`를 사용할 수 있습니다.

```sql
SELECT * FROM accounts
WHERE id = $1 LIMIT 1
FOR NO KEY UPDATE;
```

## 계정 잔액 변경 sql 개선

```sql
-- name: AddAccountBalance :one
UPDATE accounts 
SET balance = balance + sqlc.arg(amount)
WHERE id = sqlc.arg(id)
RETURNING *;
```

위처럼 개선해서 진행할 수 있습니다.

`sqlc.arg(변수명)` 으로 설정하고 `sqlc generate`하면 해당 변수명으로 parameter가 생깁니다.