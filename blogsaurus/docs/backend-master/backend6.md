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

![Alt text](./img/6/image1.png)

위 처럼 테스트에 성공한 것을 알 수 있었다.