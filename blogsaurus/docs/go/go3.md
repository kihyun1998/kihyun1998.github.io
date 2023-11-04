---
sidebar_position: 3
---

# [Go] Struct


## 기본
---


```go
type Account struct {
	Owner   string
	Balance int
}
```

struct의 기본 형식입니다.

```go
func main() {
	account := banking.Account{
		Owner:   "park",
		Balance: 1000,
	}
	fmt.Println(account)
}
```

main에서는 위처럼 선언할 수 있습니다.

Golang의 특이한 점은 변수의 `public` / `private` 여부를 변수명 앞글자로 구분합니다. `public`은 대문자 `private`는 소문자 입니다.


## 생성자를 사용하기
---

```go
type Account struct {
	owner   string
	balance int
}
```

생성자를 사용해서 함부로 struct ㄱ밧을 변경할 수 없도록 합니다.

그러려면 위처럼 변수명 첫 글자를 소문자로 변경합니다.

그리고 아래와 같이 생성자를 생성해서 사용할 수 있습니다.

```go
func NewAccount(owner string) *Account {
	account := Account{
		owner:   owner,
		balance: 0,
	}
	return &account
}
```


```go
func main() {
	account := accounts.NewAccount("park")
	fmt.Println(account)
}
```

위처럼 만들어서 사용할 수 있습니다.


## 메소드
---


### 함수와 메소드 차이

```go
func Deposit(amount int){

}
```

위는 함수고

```go
func (a Account)  Deposit(amount int){

}
```

위는 메소드 입니다.

`a Account`라는 리시버를 갖고 있습니다.


### 리시버 종류

```go
func (a *Account) Deposit(amount int) {
	a.balance += amount
}
```

위는 리시버에 포인터를 사용했습니다. 이는 사용된 객체에 접근할 수 있는 것입니다.

```go
func (a Account) GetBalance() int {
	return a.balance
}
```

위는 리시버에 포인터를 사용하지 않았습니다. 그냥 객체를 복사해서 사용하는 것입니다.


## 에러 관리
---

```go
var errZeroMoney = errors.New("[ERR] MONEY ZERO")

// Withdraw -amount
func (a *Account) Withdraw(amount int) error {
	if a.balance < amount {
		return errZeroMoney
	}
	a.balance -= amount
	return nil
}

func main() {
    ...
	err := account.Withdraw(200)
	if err != nil {
		log.Fatalln(err)
	}
    ...
}
```

`error`를 return 해서 error를 관리할 수 있다.

이 때 에러 변수명은 err로 시작해야 합니다.


## \_\_str\_\_
---

```go
func main() {
	account := accounts.NewAccount("park")
	account.Deposit(100)

	fmt.Println("account : ", account)
}
```

위 코드를 실행시키면 아래와 같이 출력합니다.

```bash
account :  &{park 100}
```

이걸 숨기는 방법이 있습니다.


```go
func (a Account) String() string {
	return fmt.Sprintf("This is %s's account\n", a.owner)
}
```

위와 같은 메소드를 선언한다면

```bash
account :  This is park's account
```

이런 결과가 출력됩니다.