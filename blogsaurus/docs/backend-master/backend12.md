---
sidebar_position: 12
---

# 12. [BackEnd] Implement RESTful HTTP API in Go use Gin

## Gin
---

HTTP 기능이 있는 웹 프레임워크는 많다.

그 중 이번 강의는 Gin을 사용할 것이다.

### 설치

```bash
go get -u github.com/gin-gonic/gin
```

## 코드 작성
---

그리고 api 폴더에 server.go를 만들어서 시작합니다.

### Sever 구조체

```go
type Server struct {
	store  *db.Store
	router *gin.Engine
}
```

서버 구조체를 만드는데 store는 db와 상호작용할 수 있도록 해주고
router는 라우팅을 해줍니다. 올바른 handler로 보내준다고 하네요.

```go
func NewServer(store *db.Store) *Server {
	server := &Server{store: store}
	router := gin.Default()

	// 계정 생성
	router.POST("/accounts", server.createAccount)

	server.router = router
	return server
}
```

서버 인스턴스를 만들어주는 NewServer 함수를 만드느데 위와 같은 형식입니다.

router.Post에서 경로를 설정해주고 handler는 하나 이상 넣을 수 있고 여러개가 오는 경우는 중간에는 다 미들웨어고 마지막에 들어오는 handler가 실제 처리기입니다.

### gin 유효성 검사

`binding` : required 설정할 수 있다. 그리고 `ShouldBindJson`으로 검사할 수 있다.
`oneof` : enum같은 느낌, 이 값 중 하나가 와야 함.

```go
type CreateAccountRequest struct {
	Owner    string `json:"owner" binding:"required"`
	Currency string `json:"currency" binding:"required,oneof=USD EUR"`
}
```

그래서 위처럼 param을 정할 수 있다.

### createAccount 함수

```go
func (server *Server) createAccount(ctx *gin.Context) {

}
```

gin context를 입력 받는 이유는 gin에서 그렇게 하기 때문입니다.


api를 만들 때 유효성 검사도 굉장히 중요한데 gin은 유효성 검사 패키지가 들어있어서 자동으로 해준다. 예를 들어서 `binding`태그로 필수 입력을 알리는 것처럼이다.


```go
func (server *Server) createAccount(ctx *gin.Context) {
	var req CreateAccountParams
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}
}
```


첫 번째 인자는 http status code고 두 번째 인자는 클라이언트에게 보내는 JSON 객체입니다.

```go
func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
```

잠깐 에러 함수를 확인해보면 gin.H를 반환하는데 이는 map[string]any 형식이라 간단하게 키-발류 값을 반환할 수 있습니다.


```go
func (server *Server) createAccount(ctx *gin.Context) {
	var req CreateAccountParams

	// 입력값 유효성 검사
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err)) // 사용자 에러
		return
	}

	// 인자 생성
	arg := db.CreateAccountParams{
		Owner:    req.Owner,
		Currency: req.Currency,
		Balance:  0,
	}

	// 계정 생성
	account, err := server.store.CreateAccount(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 서버 에러
	}

	// 성공 시
	ctx.JSON(http.StatusOK, account)
}
```

그래서 이런식으로 완성할 수 있습니다. 중간 중간 오류 반환하는 것과 값을 반환하는 것을 제외하면 db transaction과 살짝 비슷합니다.


### route run

```go
// 요청 서버에서 HTTP 서버 실행, API 송수신 시작
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}
```

gin에서 제공하는 함수로 요청 서버에 api 송수신 할 수 있습니다.


### main.go

```go
package main

import (
	"database/sql"
	"log"
	"simplebank/api"
	db "simplebank/db/sqlc"

	_ "github.com/lib/pq"
)

func main() {
	const (
		dbDriver      = "postgres"
		dbSource      = "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable"
		serverAddress = "0.0.0.0:8080"
	)

	// 서버 생성하려면 db에 연결하고 store 생성해야한다.

	// db 연결
	conn, err := sql.Open(dbDriver, dbSource)
	if err != nil {
		log.Fatal("cannot connect : ", err)
	}

	store := db.NewStore(conn)
	server := api.NewServer(store)

	err = server.Start(serverAddress)
	if err != nil {
		log.Fatalln("CANNOT START SERVER")
	}
}
```

위처럼 db를 연결하고 store를 생성하고 server를 생성하여 server를 start하는 코드 입니다.

## Request 하기
---

talend api에서 요청을 날렸습니다.

`method`는 `POST`

`주소`는 http://localhost:8080/accounts로 날리고

Body는 raw데이터로 보냈습니다.

```json
{
  "owner": "Park",
  "currency":"USD"
}
```

아래 처럼 날리면

![Alt text](./img/12/image1.png)


아래 처럼 성공했다고 나옵니다 ! 신기하네요

![Alt text](./img/12/image2.png)


## GET 만들기
---

account id로 계정 조회하는 api만들어봅니다.


### GetRequest

```go
type getAccountRequest struct {
	ID int64 `uri:"id" binding:"required,min=1"`
}
```

계정 아이디는 url로 받습니다. uri:id를 통해서 url로 받습니다.( 여러개면 어떻게 하지? )

binding을 통해서 `required` 역시 설정했는데 `min=1`도 설정했습니다. 이는 최소값이 1이라는 소리입니다.

:::caution 주의할 점
```go
ID int64 `uri:"id" binding:"required,min=1"
```

위에서 binding할 때 `required,min` 이렇게 돼있는데 `required, min` 이렇게 띄어쓰기 하면 에러난다.
:::

```go
func (server *Server) getAccount(ctx *gin.Context) {
	var req getAccountRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	account, err := server.store.GetAccount(ctx, req.ID)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err)) //ID 없을 때 404
			return
		}

		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 데이터베이스 서버 에러
	}
	ctx.JSON(http.StatusOK, account)
}
```

이 코드에서 특별한 점은 `ShouldBindJSON`이 아니라 `ShouldBindUri`라는 점입니다.


### 요청

![Alt text](./img/12/image3.png)

위처럼 요청하면 됩니다.


## ListAccount 조회하기
---

```go
type listAccountRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=5,max=10"`
}
```

쿼리 스트링을 사용하려면 `form`으로 선언해야 하고 안에 있는 page_id나 page_size같은게 변수명이 됩니다.


```go
func (server *Server) listAccount(ctx *gin.Context) {
	var req listAccountRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.ListAccountsParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}

	account, err := server.store.ListAccounts(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 데이터베이스 서버 에러
	}
	ctx.JSON(http.StatusOK, account)
}
```

특별한게 2가지 있는데 하나는 `ShouldBindQuery`이고 이건 굳이 설명하지 않아도 알고.... 사실 설명하자면 위에서 form을 썼기 때문이다. bind한 변수의 앞에 form을 썼으니 !

다음으로 특별한 것은 바로 Offset의 값이다.

```go
	arg := db.ListAccountsParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}
```

여기서 왜 Offset의 계산식이 저렇게 나오는지 처음보면 이해가 안갈 수도 있는데 page_id이기 때문이다. 예를들어 page_size를 5로잡았을 때 어디에 있는 페이지를 보겠다. 이것이기 때문에 저렇게 표현해야 한다.

### 개선사항

만약 page_id를 100, 1000 이렇게 없는 값을 넣으면 null이 반환되는데 사실 null보단 빈 배열을 반환하는게 좋다.

이를 위해서 sqlc.yaml 파일을 수정해줘야 한다.

```yaml
emit_empty_slices: true
```

위의 코드를 gen: go: 의 맨 밑에 추가해주면 된다. 그럼 끝

## 숙제
---

계정 `delete api`와 `update api` 생성

### Update API


```go title='server.go'
	...
	// 계정 업데이트
	router.PUT("/accounts/:id", server.updateAccount)
	...
```


```go title='account.go'
type updateAccountURIRequest struct {
	ID int64 `uri:"id" binding:"required,min=1"`
}
type updateAccountJSONRequest struct {
	Balance int64 `json:"balance" binding:"required,min=0"`
}

func (server *Server) updateAccount(ctx *gin.Context) {
	var reqURI updateAccountURIRequest
	var reqJSON updateAccountJSONRequest
	if err := ctx.ShouldBindUri(&reqURI); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	if err := ctx.ShouldBindJSON(&reqJSON); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	arg := db.UpdateAccountParams{
		ID:      reqURI.ID,
		Balance: reqJSON.Balance,
	}
	account, err := server.store.UpdateAccount(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
	}
	ctx.JSON(http.StatusOK, account)
}
```

하면서 한가지 깨달은 사실은 uri와 json을 하나의 구조체에 넣고 `ShouldBind`를 할 수 없다는 것이다. 그래서 나눠줬더니 잘 작동한다.

그리고 한가지 깨달은 것이

```go
type updateAccountJSONRequest struct {
	Balance int64 `json:"balance" binding:"required,min=0"`
}
```

위처럼 설정한다면 말이 안된다.

애초에 `required` validator는 zero value가 오지 않아야 하는데 그래서 0이 들어가면 400을 반환한다.

이를 해결하려면 `required`를 사용하지 않고 아래처럼 하는 방법이 있는데 온전한 해결법이 되지 못한다.

```go
type updateAccountJSONRequest struct {
	Balance int64 `json:"balance" default:"0" binding:"min=0"`
}
```

### delete account


```go title='server.go'
	...
	// 계정 삭제
	router.DELETE("/accounts/:id", server.deleteAccount)
	...
```


```go title='account.go'
type deleteAccountRequest struct {
	ID int64 `uri:"id" binding:"required,min=1"`
}

func (server *Server) deleteAccount(ctx *gin.Context) {
	var req deleteAccountRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	err := server.store.DeleteAccount(ctx, req.ID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, nil)
}
```

별 문제는 없다. 다만 한 가지 개선하면 좋은 것이 해당 id가 없다면 404를 반환하는 것이다.

그러려면 삭제 전에 탐색하는 동작을 하면 된다. 그런데 일단 내버려 두기로... 하려 했으나 간단하게 개선했다.

```go title='account.go'
func (server *Server) deleteAccount(ctx *gin.Context) {
	var req deleteAccountRequest
	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	_, err := server.store.GetAccount(ctx, req.ID)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err)) //ID 없을 때 404
			return
		}

		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 데이터베이스 서버 에러
		return
	}

	err = server.store.DeleteAccount(ctx, req.ID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}
	ctx.JSON(http.StatusOK, nil)
}
```

그냥 중간에 getAccount 하는거 넣으면 된다.