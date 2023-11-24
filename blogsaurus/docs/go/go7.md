---
sidebar_position: 7
---

# [Go] 문자열

## 큰따옴표와 백틱
---

```go
package main

import "fmt"

func main() {
	str1 := "Hello \t 'world' \n"
	str2 := `Hello \t 'world' \n`
	fmt.Println(str1)
	fmt.Println(str2)
}

```

백틱을 이용하면 특수문자가 적용이 안됩니다.

```bash
Hello    'world' 

Hello \t 'world' \n
```


```go
package main

import "fmt"

func main() {
	str1 := "여러 문자열을 사용하고 싶다.\n 그럴려면 엔터 특수문자를 사용해줘야 한다."
	str2 := `여러 문자열을 사용하고 싶다.
그냥 엔터를 치면 된다.`
	fmt.Println(str1)
	fmt.Println(str2)
}
```

백틱에서는 엔터를 칠 수 있습니다. 근데 tap도 유의해야 합니다.

```bash
여러 문자열을 사용하고 싶다.
 그럴려면 엔터 특수문자를 사용해줘야 한다.
여러 문자열을 사용하고 싶다.
그냥 엔터를 치면 된다.
```


## rune
---

golang에는 rune이라는게 있는데 int32의 별칭 char 타입이라고 합니다.

```go
package main

import "fmt"

func main() {
	var ch rune = '닭'

	fmt.Printf("타입은 : %T\n", ch)
	fmt.Println("값은 : ", ch)
	fmt.Printf("문자는 : %c", ch)
}
```

int32 타입이라 값은 숫자가 들어있습니다.

```bash
타입은 : int32
값은 :  45805
문자는 : 닭
```

```go
var ch rune = 'a'
fmt.Print(ch)
```

`a`를 출력해보면 `97`이 출력됩니다. 아스키 코드 값이 나오는 것을 알 수 있습니다.



## len
---

```go
package main

import "fmt"

func main() {
	str1 := "abcdefg"
	str2 := "가나다라마바사"

	fmt.Printf("영어 %s의 크기 : %d\n", str1, len(str1))
	fmt.Printf("한글 %s의 크기 : %d\n", str2, len(str2))
}
```

len을 사용하면 문자열의 길이가 아닌 크기를 출력합니다. 

크기의 단위는 바이트 입니다.

```bash
영어 abcdefg의 크기 : 7
한글 가나다라마바사의 크기 : 21
```

영어는 문자 하나에 1byte 한글은 3byte입니다.


## 문자열의 길이 구하기
---

```go
package main

import "fmt"

func main() {
	str := "real 문자열의 길이는 ?"

	runes := []rune(str)

	fmt.Printf("문자열의 길이 : %d\n", len(str))
	fmt.Printf("rune으로 변환한 문자열의 길이 : %d", len(runes))
}
```

```bash
문자열의 길이 : 29
rune으로 변환한 문자열의 길이 : 1
```

문자열을 rune 타입으로 변환하고 `len()`을 사용하면 진짜 문자열의 길이를 구할 수 있습니다.

그 이유는

```go
package main

import "fmt"

func main() {
	str := "real 문자열의 길이는 ?"

	runes := []rune(str)
	fmt.Printf("rune : %v", runes)
}
```

```go
rune : [ 114 101 97 108 32 47928 51088 50676 51032 32 44600 51060 45716 32 63 ]
```

rune으로 변환하면 한글자 씩 값으로 담기기 때문에 영어와 한글이 같이 있어도 문자열의 길이를 쉽게 알 수 있습니다.