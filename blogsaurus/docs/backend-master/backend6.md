---
sidebar_position: 6
---

# 06. [BackEnd] Golang CRUD Unit test

## 오늘 공부할 내용
---

Golang으로 CRUD 유닛 테스트하는 방법 알아보기


## account.sql.go 유닛테스트
---

1. db/sqlc 폴더에 `account_test.go` 파일 생성

2. 코드 작성

```go
func TestCreateAccount(t *testing.T) {

}
```

golang 테스트 코드는 위의 모습이 디폴트다

`*testing.T` 값이 인자로 들어가야한다.

그런데 db와 연결이 먼저 되어야 하니 Queries 객체와 연결하는 테스트를 먼저 해야 한다.


### main_test.go


`var testQueries *Queries`: 유닛 테스트 때 항상 사용할 것이기 때문에 전역변수로 설정


```go
func TestMain(m *testing.M) {

}
```

위 코드는 테스트 코드들의 main 함수다.

```go
package db

import (
	"database/sql"
	"log"
	"os"
	"testing"

	_ "github.com/lib/pq"
)

const (
	dbDriver = "postgres"
	dbSource = "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable"
)

var testQueries *Queries

func TestMain(m *testing.M) {

	// db 연결 테스트
	conn, err := sql.Open(dbDriver, dbSource)
	if err != nil {
		log.Fatal("cannot connect : ", err)
	}

	// db 접속 객체를 testQueries에 저장
	testQueries = New(conn)

	// 테스트 시작
	os.Exit(m.Run())
}
```

위는 완성된 코드 입니다.

`github.com/lib/pq` 이 라이브러리는 

```bash
go get github.com/lib/pq
```

명령어를 통해서 모듈 추가 후 사용했다.

왜냐하면 postgres 설정 때문이다.

dbDriver에는 사용 DB 드라이버 이름을 적었고 dbSource에는 migrate할 때 db 접속하는 명령어 중 일부를 적었다.

해당 경로로 가서

```bash
go test
```
를 하니 

![Alt text](./img/1-30/6/image1.png)

위 처럼 테스트에 성공한 것을 알 수 있었다.


## Create 테스트
---


이제 본격적으로 테스트 해보겠다.

```go
func TestCreateAccount(t *testing.T) {
	arg := CreateAccountParams{
		Owner:    "park",
		Balance:  1000,
		Currency: "KRW",
	}

	account, err := testQueries.CreateAccount(context.Background(), arg)
}
```

이렇게 account 계정 만들 수 있는데 testify 사용해야 한다. 테스트 결과를 확인할 수 있다.

[여기](https://github.com/stretchr/testify)가 깃허브 경로고 다운로드는 아래 명령어를 치면 된다.

```bash
go get github.com/stretchr/testify
```

```go
require.NoError(t, err)
```

위와 같이 에러가 났는지 확인할 수 있다. 먼저 에러가 nil인지 확인도 하고 테스트도 해줌

```go
require.NotEmpty(t, account)
```

계정 객체가 비면 안되니까 체크

```go
require.Equal(t, arg.Owner, account.Owner)
require.Equal(t, arg.Balance, account.Balance)
require.Equal(t, arg.Currency, account.Currency)
```

만든 값과 만들어진 값이 동일한지 테스트 .. java spring에도 비슷한게 있었는데 까먹음



테스트 해보면 아래와 같이 나온다.

![Alt text](./img/1-30/6/image2.png)

### 전체 테스트 코드

```go
package db

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestCreateAccount(t *testing.T) {
	arg := CreateAccountParams{
		Owner:    "park",
		Balance:  1000,
		Currency: "KRW",
	}

	account, err := testQueries.CreateAccount(context.Background(), arg)
	// is Error not nil?
	require.NoError(t, err)

	// is account empty?
	require.NotEmpty(t, account)

	// is value equal?
	require.Equal(t, arg.Owner, account.Owner)
	require.Equal(t, arg.Balance, account.Balance)
	require.Equal(t, arg.Currency, account.Currency)

	// is id generate automatically?
	require.NotZero(t, account.ID)
	// is timestamp generate automatically?
	require.NotZero(t, account.CreatedAt)
}
```

### 랜덤 데이터로 테스트 하기

1. `util` 폴더에 `random.go` 생성

2. 작성

```go
package util

import (
	"math/rand"
	"strings"
	"time"
)

const alphabet = "abcdefghijklmnopqrstuvwxyz"

// 처음 한번 실행 like 초기화
func init() {

	// 보통 현재 시간으로 Random Seed 정함
	// 그리고 UnixNano 하는 이유는 rand.Seed가 int64이기 때문
	// rand.Seed(time.Now().UnixNano())
	rand.New(rand.NewSource(time.Now().UnixNano()))
}

// RandomInt generated a radom integer between min and max
func RandomInt(max, min int64) int64 {
	return min + rand.Int63n(max-min+1) // Int63n: min-max 사이 반환
}

// RandomStr generated a random string of length n
func RandomStr(n int) string {
	var sb strings.Builder
	k := len(alphabet)
	for i := 0; i < n; i++ {
		c := alphabet[rand.Intn(k)] // Intn: 0-k-1
		sb.WriteByte(c)
	}
	return sb.String()
}

func RandomOwner() string {
	return RandomStr(6)
}

func RandomMoney() int64 {
	return RandomInt(0, 1000)
}

func RandomCurrency() string {
	currencies := []string{"EUR", "USD", "KRW"}
	n := len(currencies)
	return currencies[rand.Intn(n)]
}
```

random 함수들에 대해서 다시 정리할 필요가 있다.


그래서 아래와 같이 활용할 수 있다.

```go
arg := CreateAccountParams{
		Owner:    util.RandomOwner(),
		Balance:  util.RandomMoney(),
		Currency: util.RandomCurrency(),
	}
```

테스트 해보면 Table Plus에서 추가된것을 볼 수 있다.

![Alt text](./img/1-30/6/image3.png)


### Makefile에 명령어 추가

```yaml
test:
	go test -v -cover ./...
```


`-v`: verbose 옵션
`-cover`: 코드 커버리지 옵션
`./...` 모든 유닛 테스트 실행


## Read 테스트
---

CRUD 테스트를 하기 위해서는 모든 과정에서 Create 테스트가 진행된다.

그래서 계정을 자동으로 만들어주는 함수를 먼저 선언한다.

```go
func createRandomAccount(t *testing.T) Account {
	arg := CreateAccountParams{
		Owner:    util.RandomOwner(),
		Balance:  util.RandomMoney(),
		Currency: util.RandomCurrency(),
	}

	account, err := testQueries.CreateAccount(context.Background(), arg)
	// is Error not nil?
	require.NoError(t, err)

	// is account empty?
	require.NotEmpty(t, account)

	// is value equal?
	require.Equal(t, arg.Owner, account.Owner)
	require.Equal(t, arg.Balance, account.Balance)
	require.Equal(t, arg.Currency, account.Currency)

	// is id generate automatically?
	require.NotZero(t, account.ID)
	// is timestamp generate automatically?
	require.NotZero(t, account.CreatedAt)

	return account
}

func TestCreateAccount(t *testing.T) {
	createRandomAccount(t)
}
```

위처럼 `TestCreateAccount` 코드도 바꿔준다.


### TestGetAccount

```go
func TestGetAccount(t *testing.T) {
	// create account
	account1 := createRandomAccount(t)
	account2, err := testQueries.GetAccount(context.Background(), account1.ID)

	require.NoError(t, err)
	require.NotEmpty(t, account2)

	require.Equal(t, account1.ID, account2.ID)
	require.Equal(t, account1.Owner, account2.Owner)
	require.Equal(t, account1.Balance, account2.Balance)
	require.Equal(t, account1.Currency, account2.Currency)
	require.WithinDuration(t, account1.CreatedAt, account2.CreatedAt, time.Second)
}
```

createAccount 테스트와 거의 동일하다.

다른점은 timestamp 비교하는 부분인데 `Equal`이 아닌 `WithinDuration`을 사용하여 1초 오차범위를 뒀다.



### TestListAccounts

```go
func TestListAccounts(t *testing.T) {
	for i := 0; i < 10; i++ {
		createRandomAccount(t)
	}

	// 이렇게 날리면 5개 나와야 한다.
	arg := ListAccountsParams{
		Limit:  5,
		Offset: 5,
	}

	accounts, err := testQueries.ListAccounts(context.Background(), arg)
	require.NoError(t, err)
	require.Len(t, accounts, 5) // 5개 로우가 맞는지
	for _, account := range accounts {
		require.NotEmpty(t, account)
	}
}
```

특이한 점은 여러개의 계정을 만들어야 하기에 for문을 쓴 것과 반환한 개수를 `require.Len`을 사용해서 테스트한 점이다.


## Update 테스트
---

### TestUpdateAccount

```go
func TestUpdateAccount(t *testing.T) {
	//create account
	account1 := createRandomAccount(t)

	arg := UpdateAccountParams{
		ID:      account1.ID,
		Balance: util.RandomMoney(),
	}

	account2, err := testQueries.UpdateAccount(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, account2)

	require.Equal(t, arg.ID, account2.ID)
	require.Equal(t, account1.Owner, account2.Owner)
	require.Equal(t, arg.Balance, account2.Balance)
	require.Equal(t, account1.Currency, account2.Currency)
	require.WithinDuration(t, account1.CreatedAt, account2.CreatedAt, time.Second)
}
```

크게 다른 점은 없다.


## Delete 테스트
---

### TestDeleteAccount

```go
func TestDeleteAccount(t *testing.T) {
	account1 := createRandomAccount(t)
	err := testQueries.DeleteAccount(context.Background(), account1.ID)
	require.NoError(t, err)

	account2, err := testQueries.GetAccount(context.Background(), account1.ID)
	require.Error(t, err)                             //에러 반환을 해야만한다.
	require.EqualError(t, err, sql.ErrNoRows.Error()) // 그냥 에러가 아니라 NoRows 에러가 나와야한다.
	require.Empty(t, account2)                        // 찾은 계정도 없어야함 삭제한거 찾은거니까
}
```

삭제 테스트는 약간 특이하게 에러가 나야하는걸 require한다.


## 숙제

entry와 transfer 관련한 테이블도 해야한다.

아니 애초에 sqlc 안했네 이거부터 해야 한다.