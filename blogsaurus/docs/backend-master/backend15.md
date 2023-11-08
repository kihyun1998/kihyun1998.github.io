---
sidebar_position: 15
---

# 15. [BackEnd] transfer api에 validator 활용

## 학습 목표

---

transfer api 코드를 작성할 때 currency도 비교할 수 있는 실습을 진행

## transfer api 코드

```go
type transferRequest struct {
	FromAccountID int64  `json:"from_account_id" binding:"required,min=1"`
	ToAccountID   int64  `json:"to_account_id" binding:"required,min=1"`
	Amount        int64  `json:"amount" binding:"required,gt=0"`
	Currency      string `json:"currency" binding:"required,oneof=USD EUR"`
}

func (server *Server) createTransfer(ctx *gin.Context) {
	var req transferRequest

	// 입력값 유효성 검사
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err)) // 사용자 에러
		return
	}

	// 인자 생성
	arg := db.TransferTxParams{
		FromAccountID: req.FromAccountID,
		ToAccountID:   req.ToAccountID,
		Amount:        req.Amount,
	}

	// 생성
	result, err := server.store.TransferTx(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 서버 에러
		return
	}

	// 성공 시
	ctx.JSON(http.StatusOK, result)
}
```

## currency 유효값 검사

---

```go
func (server *Server) validAccount(ctx *gin.Context, accountID int64, currency string) bool {
	// 아이디 유효 확인
	account, err := server.store.GetAccount(ctx, accountID)
	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err)) //ID 없을 때 404
			return false
		}

		ctx.JSON(http.StatusInternalServerError, errorResponse(err)) // 데이터베이스 서버 에러
		return false
	}
	if account.Currency != currency {
		err := fmt.Errorf("[ERR] account [%d] currency mismatch : %s vs %s", accountID, account.Currency, currency)
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return false
	}
	return true
}
```

해당 함수로 해당 아이디가 존재하는지 그리고 해당 아이디의 currency가 request currency와 동일한지 검사합니다.

```go
func (server *Server) createTransfer(ctx *gin.Context) {

	// 입력값 유효성 검사
	...
	if !server.validAccount(ctx, req.FromAccountID, req.Currency) {
		return
	}
	if !server.validAccount(ctx, req.ToAccountID, req.Currency) {
		return
	}
	...
}
```

## API 등록

---

서버에 API 등록합니다.

```go
func NewServer(store db.Store) *Server {
	...
	// 송금
	router.POST("/transfers", server.createTransfer)
	...
}
```

잘 동작합니다.

## validator 등록

---

그러나 한가지 문제는 currency 종류가 많아지면 어떻게 대응하느냐는 문제가 생깁니다.

이를 해결하는 방법이 있습니다.

### util/currency.go 생성

```go
// is supported currencies
const (
	USD = "USD"
	EUR = "EUR"
	KRW = "KRW"
)

func IsSupportedCurrency(currency string) bool {
	switch currency {
	case USD, EUR, KRW:
		return true
	}
	return false
}
```

상수로 currency들을 정의할 수 있고 `IsSupportedCurrency` 함수를 사용해서 유효한 currency인지 체크할 수 있다.

### validator.go 생성

```go
var validCurrency validator.Func = func(fieldLevel validator.FieldLevel) bool {
	// FieldLevel.Field()는 reflect value여서 interface로 가져옴
	if currency, ok := fieldLevel.Field().Interface().(string); ok {
		//ok == true면 field가 문자열임
		return util.IsSupportedCurrency(currency)
	} else {
		//ok == false면 field가 문자열이 아님
		return false
	}
}
```

위 함수를 사용해서 먼저 입력값이 문자열인지 구분하고 문자열이라면 방금 위에서 만든 유효한 currency인지 검사하는 함수에 넣어서 return합니다.

### gin에 등록

```go
func NewServer(store db.Store) *Server {
	...
	// 유효성 검사 로직 등록 과정
	if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
		v.RegisterValidation("currency", validCurrency)
	}
	...
}
```

validator 패키지를 이용해서 등록할 수 있습니다.

무언가를 더 추가하라고 하면 아래처럼 v10을 사용하시면 됩니다.

```go
"github.com/go-playground/validator/v10"
```

### currency의 validator 변경

```go
Currency      string `json:"currency" binding:"required,currency"`
```

위처럼 `oneof`를 사용하지 않고 그냥 `currency`를 사용하면 됩니다.

## 숙제

---

transfer api 테스트코드 작성하기

### 코드

```go
func TestCreateTransfer(t *testing.T) {
	amount := int64(100)
	fromAccount := randomAccount()
	toAccount := randomAccount()
	krwAccount := randomAccount()

	fromAccount.Currency = util.USD
	toAccount.Currency = util.USD
	krwAccount.Currency = util.KRW

	testCases := []struct {
		name          string
		body          gin.H
		buildStubs    func(store *mockdb.MockStore)
		checkResponse func(recoder *httptest.ResponseRecorder)
	}{
		{
			name: "OK",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(fromAccount, nil)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(1).Return(toAccount, nil)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(1)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusOK, recoder.Code)
			},
		}, {
			name: "NotFoundFromAccount",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(db.Account{}, sql.ErrNoRows)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(0)
				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusNotFound, recoder.Code)
			},
		}, {
			name: "NotFoundToAccount",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(fromAccount, nil)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(1).Return(db.Account{}, sql.ErrNoRows)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusNotFound, recoder.Code)
			},
		}, {
			name: "InternalErrorFromAccount",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(db.Account{}, sql.ErrConnDone)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(0)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusInternalServerError, recoder.Code)
			},
		}, {
			name: "InternalErrorToAccount",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(fromAccount, nil)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(1).Return(db.Account{}, sql.ErrConnDone)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusInternalServerError, recoder.Code)
			},
		}, {
			name: "InternalErrorTransferTX",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(fromAccount, nil)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(1).Return(toAccount, nil)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(1).Return(db.TransferTxResult{}, sql.ErrConnDone)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusInternalServerError, recoder.Code)
			},
		}, {
			name: "FromAccountBadCurreny",
			body: gin.H{
				"from_account_id": krwAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(krwAccount.ID)).Times(1).Return(krwAccount, nil)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(0)

				arg := db.TransferTxParams{
					FromAccountID: krwAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusBadRequest, recoder.Code)
			},
		}, {
			name: "ToAccountBadCurreny",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   krwAccount.ID,
				"amount":          amount,
				"currency":        util.USD,
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(1).Return(fromAccount, nil)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(krwAccount.ID)).Times(1).Return(krwAccount, nil)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   krwAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusBadRequest, recoder.Code)
			},
		}, {
			name: "InvalidCurrency",
			body: gin.H{
				"from_account_id": fromAccount.ID,
				"to_account_id":   toAccount.ID,
				"amount":          amount,
				"currency":        "BTC",
			},
			buildStubs: func(store *mockdb.MockStore) {
				//계정 유효성 검사
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(fromAccount.ID)).Times(0)
				store.EXPECT().GetAccount(gomock.Any(), gomock.Eq(toAccount.ID)).Times(0)

				arg := db.TransferTxParams{
					FromAccountID: fromAccount.ID,
					ToAccountID:   toAccount.ID,
					Amount:        amount,
				}
				store.EXPECT().TransferTx(gomock.Any(), gomock.Eq(arg)).Times(0)
			},
			checkResponse: func(recoder *httptest.ResponseRecorder) {
				require.Equal(t, http.StatusBadRequest, recoder.Code)
			},
		},
	}

	for i := range testCases {
		tc := testCases[i]
		t.Run(tc.name, func(t *testing.T) {
			ctrl := gomock.NewController(t)
			defer ctrl.Finish()

			store := mockdb.NewMockStore(ctrl)
			// build stub
			tc.buildStubs(store)

			server := NewServer(store)
			recoder := httptest.NewRecorder()

			data, err := json.Marshal(tc.body)
			require.NoError(t, err)

			url := "/transfers"
			request, err := http.NewRequest(http.MethodPost, url, bytes.NewReader(data))
			require.NoError(t, err)

			server.router.ServeHTTP(recoder, request)
			tc.checkResponse(recoder)
		})
	}
}
```

테스트 케이스 종류가 엄청 많았다. 이걸 토대로 updaetAccount 테스트나 deleteAccount 테스트 코드를 개선할 수 있겠다.
