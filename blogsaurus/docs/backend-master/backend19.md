---
sidebar_position: 19
---

# 19. [BackEnd] golang Custom Matcher 구현


## 간단한 user api test code
---

test code를 그냥 작성할 수 있는데 비밀번호를 bcrypt로 해시하기 때문에 매번 무작위 솔트가 달라져서 비밀번호 매칭이 안됩니다. 이를 위해서 matcher를 따로 구현해야 한다고 하네요.

## Custom Matcher 구현
---

```go
func Eq(x interface{}) Matcher { return eqMatcher{x} }
```

Eq 함수는 이렇게 구현이 되어있고 반환해야 하는 Matcher를 보면

```go
type Matcher interface {
	// Matches returns whether x is a match.
	Matches(x interface{}) bool

	// String describes what the matcher matches.
	String() string
}
```

위처럼 돼있습니다.

일치여부를 반환하는 Matches와 로깅 목적으로 정의된 String()이 있습니다.


Eq Matcher의 함수들은 아래와 같습니다.

```go
type eqMatcher struct {
	x interface{}
}

func (e eqMatcher) Matches(x interface{}) bool {
	// In case, some value is nil
	if e.x == nil || x == nil {
		return reflect.DeepEqual(e.x, x)
	}

	// Check if types assignable and convert them to common type
	x1Val := reflect.ValueOf(e.x)
	x2Val := reflect.ValueOf(x)

	if x1Val.Type().AssignableTo(x2Val.Type()) {
		x1ValConverted := x1Val.Convert(x2Val.Type())
		return reflect.DeepEqual(x1ValConverted.Interface(), x2Val.Interface())
	}

	return false
}

func (e eqMatcher) String() string {
	return fmt.Sprintf("is equal to %v (%T)", e.x, e.x)
}
```

이를 토대로 커스텀해서 만들면 된다고 한다.


### Custom Matcher

```go
type eqCreateUserParamsMatcher struct {
	arg      db.CreateUserParams
	password string
}

func (e eqCreateUserParamsMatcher) Matches(x interface{}) bool {

	// 형변환
	arg, ok := x.(db.CreateUserParams)
	if !ok {
		// 형변환 not ok 면 return false
		return false
	}

	err := util.CheckPassword(e.password, arg.HashedPassword)
	if err != nil {
		return false
	}

	e.arg.HashedPassword = arg.HashedPassword
	return reflect.DeepEqual(e.arg, arg)
}

func (e eqCreateUserParamsMatcher) String() string {
	return fmt.Sprintf("matches arg %v and password %v", e.arg, e.password)
}
```

이렇게 커스텀할 수 있다.

```go
type eqCreateUserParamsMatcher struct {
	arg      db.CreateUserParams
	password string
}
```

이는 기존에 interface만 있던 것을 더 잘 비교하기 위해서 설정했다.

```go
func (e eqCreateUserParamsMatcher) Matches(x interface{}) bool {

	// 형변환
	arg, ok := x.(db.CreateUserParams)
	if !ok {
		// 형변환 not ok 면 return false
		return false
	}

	err := util.CheckPassword(e.password, arg.HashedPassword)
	if err != nil {
		return false
	}

	e.arg.HashedPassword = arg.HashedPassword
	return reflect.DeepEqual(e.arg, arg)
}
```

이는 먼저 입력받은 interface값을 형변환 해주고 비밀번호 비교를 하고 합니다.

자세히 로그를 찍어서 확인해보니 `x interface` 값은 초기에 생성한 randomUser 값이고 e는 위에서 설정한 비밀번호가 없는 user 값과 비밀번호(평문)이 들어가 있습니다.

```go
func (e eqCreateUserParamsMatcher) String() string {
	return fmt.Sprintf("matches arg %v and password %v", e.arg, e.password)
}
```

이건 그냥 `eqCreateUserParamsMatcher`를 출력하면 나오는 문자열 설정입니다.


추가적으로 아래 함수를 만들어서 사용할 수 있습니다.

```go
func EqCreateUserParams(arg db.CreateUserParams, password string) gomock.Matcher {
	return eqCreateUserParamsMatcher{arg, password}
}
```


## 전체 코드
---

```go
type eqCreateUserParamsMatcher struct {
	arg      db.CreateUserParams
	password string
}

func (e eqCreateUserParamsMatcher) Matches(x interface{}) bool {

	// 형변환
	arg, ok := x.(db.CreateUserParams)
	if !ok {
		// 형변환 not ok 면 return false
		return false
	}

	err := util.CheckPassword(e.password, arg.HashedPassword)
	if err != nil {
		return false
	}

	e.arg.HashedPassword = arg.HashedPassword
	return reflect.DeepEqual(e.arg, arg)
}

func (e eqCreateUserParamsMatcher) String() string {
	return fmt.Sprintf("matches arg %v and password %v", e.arg, e.password)
}

func EqCreateUserParams(arg db.CreateUserParams, password string) gomock.Matcher {
	return eqCreateUserParamsMatcher{arg, password}
}

func TestCreateUserAPI(t *testing.T) {
	user, password := randomUser(t)
	testCases := []struct {
		name          string
		body          gin.H
		buildStubs    func(store *mockdb.MockStore)
		checkResponse func(recoder *httptest.ResponseRecorder)
	}{
		{
			name: "OK",
			body: gin.H{
				"username":  user.Username,
				"password":  password,
				"full_name": user.FullName,
				"email":     user.Email,
			},
			buildStubs: func(store *mockdb.MockStore) {
				arg := db.CreateUserParams{
					Username: user.Username,
					FullName: user.FullName,
					Email:    user.Email,
				}
				store.EXPECT().
					CreateUser(gomock.Any(), EqCreateUserParams(arg, password)).
					Times(1).
					Return(user, nil)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusOK, recoder.Code)
				requireBodyMatchUser(t, recoder.Body, user)
			},
		}, {
			name: "InternalError",
			body: gin.H{
				"username":  user.Username,
				"password":  password,
				"full_name": user.FullName,
				"email":     user.Email,
			},
			buildStubs: func(store *mockdb.MockStore) {
				arg := db.CreateUserParams{
					Username: user.Username,
					FullName: user.FullName,
					Email:    user.Email,
				}
				store.EXPECT().
					CreateUser(gomock.Any(), EqCreateUserParams(arg, password)).
					Times(1).
					Return(db.User{}, sql.ErrConnDone)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusInternalServerError, recoder.Code)
			},
		}, {
			name: "ShortPassword",
			body: gin.H{
				"username":  user.Username,
				"password":  "123",
				"full_name": user.FullName,
				"email":     user.Email,
			},
			buildStubs: func(store *mockdb.MockStore) {
				store.EXPECT().
					CreateUser(gomock.Any(), gomock.Any()).
					Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusBadRequest, recoder.Code)
			},
		}, {
			name: "InvalidUsername",
			body: gin.H{
				"username":  "name!@!#",
				"password":  password,
				"full_name": user.FullName,
				"email":     user.Email,
			},
			buildStubs: func(store *mockdb.MockStore) {
				store.EXPECT().
					CreateUser(gomock.Any(), gomock.Any()).
					Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusBadRequest, recoder.Code)
			},
		}, {
			name: "InvalidEmail",
			body: gin.H{
				"username":  user.Username,
				"password":  password,
				"full_name": user.FullName,
				"email":     "mail",
			},
			buildStubs: func(store *mockdb.MockStore) {
				store.EXPECT().
					CreateUser(gomock.Any(), gomock.Any()).
					Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusBadRequest, recoder.Code)
			},
		}, {
			name: "DupEmailAndUsername",
			body: gin.H{
				"username":  user.Username,
				"password":  password,
				"full_name": user.FullName,
				"email":     user.Email,
			},
			buildStubs: func(store *mockdb.MockStore) {
				store.EXPECT().
					CreateUser(gomock.Any(), gomock.Any()).
					Times(1).
					Return(db.User{}, &pq.Error{Code: "23505"})
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusForbidden, recoder.Code)
			},
		},
	}

	for i := range testCases {
		// 테스트 케이스
		tc := testCases[i]
		t.Run(tc.name, func(t *testing.T) {
			// gomock 컨트롤러
			ctrl := gomock.NewController(t)
			defer ctrl.Finish()

			// gomock db
			store := mockdb.NewMockStore(ctrl)
			// build stub
			tc.buildStubs(store)

			server := NewServer(store)
			recoder := httptest.NewRecorder()

			data, err := json.Marshal(tc.body)
			require.NoError(t, err)

			url := "/users"
			request, err := http.NewRequest(http.MethodPost, url, bytes.NewReader(data))
			require.NoError(t, err)

			server.router.ServeHTTP(recoder, request)
			tc.checkResponse(recoder)
		})
	}

}

func randomUser(t *testing.T) (user db.User, password string) {
	password = util.RandomStr(6)
	hashedPassword, err := util.HashPassword(password)
	require.NoError(t, err)

	user = db.User{
		Username:       util.RandomOwner(),
		HashedPassword: hashedPassword,
		FullName:       util.RandomOwner(),
		Email:          util.RandomEmail(),
	}

	return
}

func requireBodyMatchUser(t *testing.T, body *bytes.Buffer, user db.User) {
	data, err := io.ReadAll(body)
	require.NoError(t, err)

	var gotUser db.User
	err = json.Unmarshal(data, &gotUser)

	require.NoError(t, err)
	require.Equal(t, user.Username, gotUser.Username)
	require.Equal(t, user.FullName, gotUser.FullName)
	require.Equal(t, user.Email, gotUser.Email)
	require.Empty(t, gotUser.HashedPassword)
}

```