---
sidebar_position: 22
---

# 22. [BackEnd] PASETO & JWT 를 이용한 로그인

## 서버에 토큰 메이커 추가

---

```go
func NewServer(store db.Store) (*Server, error) {
	// 대칭키를 환경변수로 넣을 예정
	tokenMaker, err := token.NewPasetoMaker("")
	if err != nil {
		return nil, fmt.Errorf("[ERR] CANNOT CREATE TOKEN MAKER : %w", err)
	}
	server := &Server{
		store:      store,
		tokenMaker: tokenMaker,
	}
	.
	.
}
```

## 환경변수 설정

```go title='app.env'
TOKEN_SYMMETRIC_KEY=12345678901234567890123456789012
ACCESS_TOKEN_DURATION=15m
```

```go title='config.go'
type Config struct {
	...
	TokenSymmetricKey   string        `mapstructure:"TOKEN_SYMMETRIC_KEY"`
	AccessTokenDuration time.Duration `mapstructure:"ACCESS_TOKEN_DURATION"`
}
```

config 구조체에 환경변수 등록하고 server에서 불러와서 사용할 수 있습니다.

이에 따른 수정사항들은 따로 기록하지 않습니다.

## 로그인 API 구현

---

```go
func (server *Server) loginUser(ctx *gin.Context) {
	var req loginUserRequest

	// 입력값 유효성 검사
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}

	// 유저가 있나
	user, err := server.store.GetUser(ctx, req.Username)
	if err != nil {
		// 없으면 NotFound
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			return
		}

		// 그게 아니면 서버에러
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	// 유저있으면 비밀번호 체크
	err = util.CheckPassword(req.Password, user.HashedPassword)
	if err != nil {
		// 비밀번호 틀리면 인가 에러
		ctx.JSON(http.StatusUnauthorized, errorResponse(err))
		return
	}

	// 비밀번호 일치하면 토큰 발급
	accessToken, err := server.tokenMaker.CreateToken(
		user.Username,
		server.config.AccessTokenDuration,
	)
	if err != nil {
		// 토큰 발급 실패하면 서버에러
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	res := loginUserResponse{
		AccessToken: accessToken,
		User:        newUserResponse(user),
	}

	ctx.JSON(http.StatusOK, res)
}
```

간단합니다.
