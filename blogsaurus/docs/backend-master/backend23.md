---
sidebar_position: 23
---

# 23. [BackEnd] 인증 미들웨어와 인가 규칙

## 목표
---

현재 인증이 되면 토큰은 발급해주지만 그 토큰으로 인가에 사용하지 않고 있다.

예를들어 다른 사용자의 계좌 정보를 마음대로 볼 수 있는 경우

그래서 토큰으로 해당 사용자를 식별하고 사용자별 권한에 맞는 정보를 보여줄 수 있도록 해야 한다.


1. 사용자가 소유한 계정만 조회

2. 해당 토큰의 주인만 fromAccount 되도록


## 미들웨어
---

### authMiddleware

```go
func authMiddleware(tokenMaker token.MakerForPaseto) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		authorizationHeader := ctx.GetHeader(authorizationHeaderKey)

		// 클라이언트에서 authorization 헤더 제공 안하는 경우
		if len(authorizationHeader) == 0 {
			err := errors.New("[ERR] AUTHORIZATION HEADER IS NOT PROVIDED")

			// 요청 중단하고 상태코드와 json 보냄
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, errorResponse(err))
			return
		}

		// authorization 값 공백으로 구분해야 함
		// Bearer abcdefg... 로 키가 입력받아서 fields[0]에는 Bearer fields[1]에는 토큰값이 들어갈 것임.
		fields := strings.Fields(authorizationHeader)
		if len(fields) < 2 {
			err := errors.New("[ERR] INVALID AUTHORIZATION HEADER FORMAT")

			// 요청 중단하고 상태코드와 json 보냄
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, errorResponse(err))
			return
		}

		// 인증 타입 비교
		authorizationType := strings.ToLower(fields[0])
		// 지원하지 않는 인증 타입일 경우
		if authorizationType != authorizationTypeBearer {
			err := fmt.Errorf("[ERR] UNSUPPORTED AUTHORIZATION TYPE %s", authorizationType)
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, errorResponse(err))
			return
		}

		// 액세스 토큰 추출
		accessToken := fields[1]
		// 토큰 유효 검증
		payload, err := tokenMaker.VerifyToken(accessToken)
		// 토큰 유효하지 않으면 에러
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, errorResponse(err))
			return
		}

		// context에 payload 저장
		ctx.Set(authorizationPayloadKey, payload)
		// 다음 핸들러 호출
		ctx.Next()
	}
}
```

### server.go

```go
func (server *Server) setupRouter() {
	router := gin.Default()

	// 보안 미들웨어 추가
	// 이 route로 요청 쏘면 이 미들웨어를 거쳐야 한다.
	authRoutes := router.Group("/").Use(authMiddleware(server.tokenMaker))

	// 계정 생성
	authRoutes.POST("/accounts", server.createAccount)
	// 계정 조회 by ID
	authRoutes.GET("/accounts/:id", server.getAccount)
	// 여러 계정 조회
	authRoutes.GET("/accounts", server.listAccount)
	// 계정 업데이트
	authRoutes.PUT("/accounts/:id", server.updateAccount)
	// 계정 삭제
	authRoutes.DELETE("/accounts/:id", server.deleteAccount)
	// 송금
	authRoutes.POST("/transfers", server.createTransfer)

	// 유저 생성
	router.POST("/users", server.createUser)
	// 로그인
	router.POST("/users/login", server.loginUser)

	server.router = router
}
```

authRoutes를 사용하는 요청은 인증 미들웨어를 거친다. 그래서 인증 토큰이 필수로 필요한 api가 된다.


## 인증 규칙
---

### create account

로그인한 사용자는 자신이 소유자인 계정만 만들 수 있다.

```go
type CreateAccountRequest struct {
	Currency string `json:"currency" binding:"required,currency"`
}

func (server *Server) createAccount(ctx *gin.Context) {
	.
	.
	.

	// 해당 키의 값을 authPayload에 저장
	// 인터페이스로 반환하기에 형변환함
	authPayload := ctx.MustGet(authorizationPayloadKey).(*token.PasetoPayload)
	// 인자 생성
	arg := db.CreateAccountParams{
		Owner:    authPayload.Username,
		Currency: req.Currency,
		Balance:  0,
	}
	.
	.
}
```

MustGet으로 설정한 키값의 페이로드를 가져와서 owner를 설정했습니다.



### get account

로그인한 사용자는 자신의 계정만 조회할 수 있다.

```go
	.
	.
	authPayload := ctx.MustGet(authorizationPayloadKey).(*token.PasetoPayload)
	if authPayload.Username != account.Owner {
		err := errors.New("[ERR] IT IS NOT YOUR ACCOUNT")
		ctx.JSON(http.StatusUnauthorized, errorResponse(err))
		return
	}
	.
	.
```

페이로드 가져와서 조회한 계정과 비교 후 owner 다르면 401 반환한다.



### list account

로그인한 사용자는 자신의 계정들만 조회할 수 있다.

sql부터 바꿔야 한다.

```sql
-- name: ListAccounts :many
SELECT * FROM accounts
WHERE owner = $1
ORDER BY id
LIMIT $2
OFFSET $3;
```

```go
.
.
.
	authPayload := ctx.MustGet(authorizationPayloadKey).(*token.PasetoPayload)

	arg := db.ListAccountsParams{
		Owner:  authPayload.Username,
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}
.
.
.
```

간단합니다.








### transfer money

자신의 계좌에서만 송금 가능

```go
.
.
.
	fromAccount, valid := server.validAccount(ctx, req.FromAccountID, req.Currency)

	if !valid {
		return
	}

	authPayload := ctx.MustGet(authorizationPayloadKey).(*token.PasetoPayload)
	if authPayload.Username != fromAccount.Owner {
		err := errors.New("[ERR] FROM ACCOUNT IS NOT YOURS")
		ctx.JSON(http.StatusUnauthorized, errorResponse(err))
		return
	}

	_, valid = server.validAccount(ctx, req.ToAccountID, req.Currency)
	if !valid {
		return
	}
.
.
.


func (server *Server) validAccount(ctx *gin.Context, accountID int64, currency string) (db.Account, bool) {
	// 아이디 유효 확인
	account, err := server.store.GetAccount(ctx, accountID)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err)) //ID 없을 때 404
			return db.Account{}, false
		}

		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 데이터베이스 서버 에러
		return db.Account{}, false
	}
	.
	.
}
```

