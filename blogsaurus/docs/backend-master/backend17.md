---
sidebar_position: 17
---

# 17. [BackEnd] db error handle


## 학습 목표
---

users 작동하도록 golang 추가 및 db error 조작

## user sql 작성
---

```sql
-- name: CreateUser :one
INSERT INTO users(
    username,
    hashed_password,
    full_name,
    email
) VALUES (
    $1, $2, $3, $4
) RETURNING *;

-- name: GetUser :one
SELECT * FROM users
WHERE username = $1 LIMIT 1;
```

작성 후 sqlc하면 된다.


## 테스트 코드 작성
---

```go
func createRandomUser(t *testing.T) User {
	arg := CreateUserParams{
		Username:       util.RandomOwner(),
		HashedPassword: "secret", // bcrypt사용하여 변경예정
		FullName:       util.RandomOwner(),
		Email:          util.RandomEmail(),
	}

	user, err := testQueries.CreateUser(context.Background(), arg)
	// is Error not nil?
	require.NoError(t, err)

	// is account empty?
	require.NotEmpty(t, user)

	// is value equal?
	require.Equal(t, arg.Username, user.Username)
	require.Equal(t, arg.HashedPassword, user.HashedPassword)
	require.Equal(t, arg.FullName, user.FullName)
	require.Equal(t, arg.Email, user.Email)

	// is timestamp generate automatically?
	require.True(t, user.PasswordLastChangedAt.IsZero())
	require.NotZero(t, user.CreatedAt)

	return user
}

func TestCreateUser(t *testing.T) {
	createRandomUser(t)
}

func TestGetUser(t *testing.T) {
	// create account
	user1 := createRandomUser(t)
	user2, err := testQueries.GetUser(context.Background(), user1.Username)

	require.NoError(t, err)
	require.NotEmpty(t, user2)

	require.Equal(t, user1.Username, user2.Username)
	require.Equal(t, user1.HashedPassword, user2.HashedPassword)
	require.Equal(t, user1.FullName, user2.FullName)
	require.Equal(t, user1.Email, user2.Email)

	require.WithinDuration(t, user1.PasswordLastChangedAt, user2.PasswordLastChangedAt, time.Second)
	require.WithinDuration(t, user1.CreatedAt, user2.CreatedAt, time.Second)
}
```

이전과 동일하게 작성했습니다.

user에 관한 test code는 통과되지만 package test는 통과되지 못합니다. 외래키 제약조건을 만족하지 못해서인데 이를 수정해보겠습니다.

### 수정

```go
func createRandomAccount(t *testing.T) Account {
	user := createRandomUser(t)
	arg := CreateAccountParams{
		Owner:    user.Username,
		Balance:  util.RandomMoney(),
		Currency: util.RandomCurrency(),
	}
	.
	.
	.
}
```

그냥 간단하게 createRandomAccount에서 owner 값만 수정하면 해결됩니다.


### 그래도 에러

mock store를 생성한 부분 때문에 에러가 난다고 합니다. 왜냐하면 새로운 테이블을 추가했고 새로운 쿼리를 추가했는데 mock store엔 반영이 안됐습니다.

make mock 하여 다시 mock store를 생성합니다.

그러면 package test도 통과합니다.


## 에러 메시지 커스텀
---

create account api를 요청할 때 없는 유저 이름을 owner에 넣으면 500에러가 납니다. 이를 403으로 수정해야합니다.

왜냐하면 서버 에러가 아닌 클라이언트 입력값 에러이기 때문


추가로 동일한 owner 이름을 사용시에도 500에러가 나지만 403에러를 반환하려 합니다.

```go
	account, err := server.store.CreateAccount(ctx, arg)
	if err != nil {
		// 추가한 코드
		if pqErr, ok := err.(*pq.Error); ok {
			switch pqErr.Code.Name() {
			case "foreign_key_violation", "unique_violation":
				ctx.JSON(http.StatusForbidden, errorResponse(err))
				return
			}
		}
		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 서버 에러
		return
	}
```

err을 pq.Error로 형 변환 후 switch case로 해당 에러 메시지가 오면 forbidden을 반환하도록 하면 된다.