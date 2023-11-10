---
sidebar_position: 21
---

# 21. [BackEnd] PASETO & JWT in Golang

## 사전 코드

---

```go
type Maker interface {
	CreateToken(username string, duration time.Duration) (string, error)

	VerifyToken(token string) (*Payload, error)
}
```

토큰에 대한 생성과 검증을 해주는 함수입니다.

```go
type Payload struct {
	ID        uuid.UUID `json:"id"`
	Username  string    `json:"username"`
	IssueAt   time.Time `json:"issued_at"`
	ExpiredAt time.Time `json:"expired_at"`
}
```

검증에 후 반환되는 페이로드 구조체입니다.

uuid를 위해서

```bash
go get github.com/google/uuid
```

패키지 다운로드를 해야합니다.

```go
// 페이로드 생성
func NewPayload(username string, duration time.Duration) (*Payload, error) {
	tokenID, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	payload := &Payload{
		ID:        tokenID,
		Username:  username,
		IssueAt:   time.Now(),
		ExpiredAt: time.Now().Add(duration),
	}
	return payload, nil
}
```

해당 함수로 Payload를 생성할 수 있습니다. 특별한 부분은 없습니다.

## JWT

---

### 설치하는 방법

```bash
go get -u github.com/golang-jwt/jwt/v5
```

근데 영상이랑 버전이 다릅니다.

### 구조체, 생성자

```go
type JWTMaker struct {
	secretKey string
}

func NewJWTMaker(secretKey string) (Maker, error) {
	if len(secretKey) < minSecretKeySize {
		return nil, fmt.Errorf("secretKey is too short ! Must be at least %d characters", minSecretKeySize)
	}
	return &JWTMaker{secretKey}, nil
}
```

JWTMaker 구조체와 생성자입니다. Maker를 반환하는데 Maker 필수 메소드 들을 구현해야 합니다.

### Maker 필수 메소드

.
.
.

아마 payload를 공유하려 했던 것 같은데 그렇지 못합니다.

jwt 전용 claim을 생성해야 합니다.

```go
ype Payload struct {
	jwt.RegisteredClaims
}

// 페이로드 생성
func NewPayload(username string, duration time.Duration) (*Payload, error) {
	tokenID, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	payload := &Payload{
		jwt.RegisteredClaims{
			ID:        tokenID.String(),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(duration)),
			Issuer:    username,
		},
	}
	return payload, nil
}
```

jwt.RegisteredClaims를 활용해서 설정한 값을 통해

### CreateToken

```go
func (maker *JWTMaker) CreateToken(username string, duration time.Duration) (string, error) {
	payload, err := NewPayload(username, duration)
	if err != nil {
		return "", nil
	}

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)
	return jwtToken.SignedString([]byte(maker.secretKey))
}
```

이렇게 해야 payload가 NewWithClaims에 들어갈 수 있습니다. 안그러면 커스텀 함수들을 엄청나게 많이 구현해야합니다.

### VerifyToken

```go
func (maker *JWTMaker) VerifyToken(token string) (*Payload, error) {
	keyFunc := func(token *jwt.Token) (interface{}, error) {
		_, ok := token.Method.(*jwt.SigningMethodHMAC)
		if !ok {
			return nil, ErrTokenInvalid
		}
		return []byte(maker.secretKey), nil
	}
	jwtToken, err := jwt.ParseWithClaims(token, &Payload{}, keyFunc)
	if err != nil {
		log.Fatal(err)
	}

	payload, ok := jwtToken.Claims.(*Payload)
	if !ok {
		return nil, ErrTokenInvalid
	}
	return payload, nil
}
```

검증함수도 그렇습니다. 에러 메시지를 정확하게 전달하지 못하고 log.Fatal로 돼있습니다. 저걸 안하면 좀 이상하더라구요. 값이 안와야하는데 값이 전달되고 암튼.. 그렇습니다.

## PASETO

---

### 설치하기

```bash
go get -u github.com/o1egl/paseto
```

이건 다행히 영상과 동일합니다.

### 구현

```go
type PasetoMaker struct {
	paseto       *paseto.V2
	symmetricKey []byte
}

func NewPasetoMaker(symmetricKey string) (MakerWantPaseto, error) {
	if len(symmetricKey) != chacha20poly1305.KeySize {
		return nil, fmt.Errorf("secretKey is too short ! Must be at least %d characters", minSecretKeySize)
	}

	maker := &PasetoMaker{
		paseto:       paseto.NewV2(),
		symmetricKey: []byte(symmetricKey),
	}
	return maker, nil
}

func (maker *PasetoMaker) CreateToken(username string, duration time.Duration) (string, error) {
	payload, err := NewPasetoPayload(username, duration)
	if err != nil {
		return "", err
	}
	return maker.paseto.Encrypt(maker.symmetricKey, payload, nil)
}

func (maker *PasetoMaker) VerifyToken(token string) (*PasetoPayload, error) {
	payload := &PasetoPayload{}
	err := maker.paseto.Decrypt(token, maker.symmetricKey, payload, nil)
	if err != nil {
		return nil, ErrTokenInvalid
	}

	err = payload.Valid()
	if err != nil {
		return nil, err
	}
	return payload, nil
}
```

그냥 Encrypt함수 쓰고 Decrypt 함수 쓰면 끝입ㄴ디ㅏ. 쉽습니다.

## JWT 테스트 코드 해결

---

JWT 테스트 코드 해결했습니다. 집에서 마저 정리하려 합니다.

```go
func TestJWTMaker(t *testing.T) {
	maker, err := NewJWTMaker(util.RandomStr(32))
	require.NoError(t, err)

	username := util.RandomOwner()
	duration := time.Minute

	issuedAt := time.Now()
	expiredAt := issuedAt.Add(duration)

	token, err := maker.CreateToken(username, duration)
	require.NoError(t, err)
	require.NotEmpty(t, token)

	payload, err := maker.VerifyToken(token)
	require.NoError(t, err)
	require.NotEmpty(t, payload)

	require.NotZero(t, payload.ID)
	require.Equal(t, username, payload.Issuer)
	require.WithinDuration(t, issuedAt, payload.IssuedAt.Time, time.Second)
	require.WithinDuration(t, expiredAt, payload.ExpiresAt.Time, time.Second)
}

func TestExpiredJWTToken(t *testing.T) {
	maker, err := NewJWTMaker(util.RandomStr(32))
	require.NoError(t, err)

	token, err := maker.CreateToken(util.RandomOwner(), -time.Minute)
	require.NoError(t, err)
	require.NotEmpty(t, token)

	payload, err := maker.VerifyToken(token)
	require.Error(t, err)
	require.EqualError(t, err, ErrTokenExpired.Error())
	require.Nil(t, payload)
}

func TestInvalidJWTTokenAlgNone(t *testing.T) {
	payload, err := NewJWTPayload(util.RandomOwner(), time.Minute)
	require.NoError(t, err)

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodNone, payload)
	token, err := jwtToken.SignedString(jwt.UnsafeAllowNoneSignatureType)
	require.NoError(t, err)

	maker, err := NewJWTMaker(util.RandomStr(32))
	require.NoError(t, err)

	payload, err = maker.VerifyToken(token)
	require.Error(t, err)
	require.EqualError(t, err, ErrTokenInvalid.Error())
	require.Nil(t, payload)
}
```

토큰 테스트 코드는 이랬습니다.

토큰의 Verify 함수가 바뀌었는데요. (그리고 Payload도 PASETO랑 JWT 나눔)

```go
func (maker *JWTMaker) VerifyToken(token string) (*JWTPayload, error) {
	keyFunc := func(token *jwt.Token) (interface{}, error) {
		_, ok := token.Method.(*jwt.SigningMethodHMAC)
		if !ok {
			return nil, ErrTokenInvalid
		}
		return []byte(maker.secretKey), nil
	}
	jwtToken, err := jwt.ParseWithClaims(token, &JWTPayload{}, keyFunc)
	if err != nil {
		if strings.Contains(err.Error(), "token is expired") {
			return nil, ErrTokenExpired
		} else if strings.Contains(err.Error(), "token is unverifiable") {
			return nil, ErrTokenInvalid
		} else {
			log.Println(err.Error())
			return nil, err
		}
	}

	payload, ok := jwtToken.Claims.(*JWTPayload)
	if !ok {
		return nil, ErrTokenInvalid
	}
	return payload, nil
}
```

Fatal 하니까 return nil이 안되서 그냥 이상하더라구요 그래서 꼭 return nil을 위해서 필요했습니다.

방법은 로그를 찍어보고 해당 로그가 나온 문자열을 포함한 에러 문자열이라면(err.Error()) return nil과 해당 에러를 반환하도록 했네요 이러면 테스트 코드 전부 통과됩니다.
