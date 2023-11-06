---
sidebar_position: 5
---

# [Go] go routines와 go channel

## Go routines
---

go routine은 동기 처리를 할 수 있도록 해주는 키워드다.

함수 앞에 go를 붙이면 됩니다.

단점은 main함수가 돌 때만 돌기 때문에 이에 대한 처리가 필요합니다.


```go
func main() {
	go count("a")
	go count("b")
	time.Sleep(time.Second * 5)
}

func count(s string) {
	for i := 0; i < 10; i++ {
		fmt.Println(s, " count ", i)
		time.Sleep(time.Second)
	}
}
```

위 코드를 실행하면

```bash
b  count  0
a  count  0
a  count  1
b  count  1
a  count  2
b  count  2
b  count  3
a  count  3
a  count  4
b  count  4
```

위처럼 출력됩니다. for문은 10까지 돼있지만 main 함수가 5초만 돌기 때문에 5개만 나오는 모습이고 a와 b에 정해진 순서 없이 돌아가는 모습입니다.


## Go channel
---

채널을 통해서 값을 go routine의 값을 전달할 수 있다.

```go
func main() {
	c := make(chan bool)
	vars := [2]string{"a", "b"}

	for _, v := range vars {
		go count(v, c)
	}
	fmt.Println(<-c)
	fmt.Println(<-c)
}

func count(s string, c chan bool) {
	time.Sleep(time.Second * 1)
	fmt.Println(s)
	c <- true
}
```

```bash
a
true
b
true
```

위처럼 결과가 나온다. 만약 `fmt.Println(<-c)`를 한번 더 해주면 교착상태 에러가 난다.

`c := make(chan bool)` 채널은 이렇게 선언할 수 있는데 bool은 전달하는 값의 타입이다.

```go
func main() {
	c := make(chan string)
	vars := [4]string{"a", "b", "c", "d"}

	for _, v := range vars {
		go count(v, c)
	}
	for i := 0; i < len(vars); i++ {
		fmt.Println(<-c)
	}
}

func count(s string, c chan string) {
	time.Sleep(time.Second * 1)
	c <- s + " here"
}
```

채널 여러 개를 다룬다면 이렇게 하면 된다.


## URL check

### channel send-only

```go
func hitURL(url string, c chan<- result) {
	fmt.Println("Check : ", url)
}
```

위처럼 인자 받을 때 `chan<-` 처리해주면 send-only다.

```go
package main

import (
	"fmt"
	"net/http"
)

type request struct {
	url    string
	status string
}

func main() {
	results := make(map[string]string)
	c := make(chan request)

	urls := []string{
		"https://www.airbnb.com/",
		"https://www.google.com/",
		"https://www.amazon.com/",
		"https://www.reddit.com/",
		"https://www.google.com/",
		"https://soundcloud.com/",
		"https://www.facebook.com/",
		"https://www.instagram.com/",
		"https://academy.nomadcoders.co/",
	}

	for _, url := range urls {
		go hitURL(url, c)
	}
	for i := 0; i < len(urls); i++ {
		result := <-c
		results[result.url] = result.status
	}
	for url, status := range results {
		fmt.Println(url, ":", status)
	}
}

func hitURL(url string, c chan<- request) {
	_, err := http.Get(url)
	status := "OK"
	if err != nil {
		status = "FAILED"
	}
	c <- request{url: url, status: status}
}
```

위처럼 채널 값을 변수로 할당할 수도 있다.