---
sidebar_position: 2
---

# 02. [Go] Context

context의 뜻은 맥락이다.

golang에서도 맥락의 의미가 통할까?


## Context란
---

context.Background나 context.TODO로 선언할 수 있다. 이 둘의 차이는 이따가 확인해보자




### WithValue

```go
func WithValue(parent Context, key, val interface{}) Context
```

한번 생성된 컨텍스트는 변경할 수 없다고 한다. 값을 추가하려면 WithValue를 사용해야 한다.


### Value

값을 가져올 때는 Value 메서드를 사용한다.

```go
Value(key interface{}) interface{}
```

### WithCancel

취소 신호를 보낼 수 있다.

```go
func WithCancel(parent Context) (ctx Context, cancel CancelFunc)
```


### WithDeadline, WithTimeout

자동 취소 기능도 있다.

```go
func WithDeadline(parent Context, d time.Time) (Context, CancelFunc)
```

```go
func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)
```


### Background와 TODO

`context.Background()` 또는 `context.TODO()`로 context 만들 수 있다.

`Background()`는 탑레벨 context를 생성할 때 사용하고 `context.TODO()`는 어떻게 써야할지 확실치 않을 때 쓴다고 한다 !

결론은 아직 모르겠따
