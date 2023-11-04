---
sidebar_position: 4
---

# [Go] Dictionary

## 기본
---

```go
type Dictionary map[string]string
```

위와 같이 선언한다 

```go
map[키타입] 값타입
```

위와 같은 방식이다.

```go
func main() {
	dictionary := dict.Dictionary{"a": "is a"}
}
```

main에선 이런식으로 선언한다.


## 메소드
---

### Read

```go
func (d Dictionary) Search(word string) (string, error) {
	value, exists := d[word]
	if exists {
		return value, nil
	}
	return "", errNotFound
}
```

딕셔너리도 struct처럼 메소드를 추가할 수 있다.

딕셔너리는 이렇게 단어가 있으면 value와 exists는 true를 반환하고 단어가 없다면 value는 없고 exists는 false를 반환합니다.


### Create

```go
func (d Dictionary) Add(word, def string) error {
	_, err := d.Search(word)

	switch err {
	case errNotFound:
		d[word] = def
	case nil:
		return err
	}
	return nil
}
```

딕셔너리에 추가할 때는 그 단어가 있는지 검사가 필요합니다.

### Update

```go
func (d Dictionary) Update(word, def string) error {
	_, err := d.Search(word)
	switch err {
	case nil:
		d[word] = def
	case errNotFound:
		return errNotFound
	}
	return nil
}
```

업데이트를 하려면 값이 있는지 확인해야한다.

### Delete

```go
func (d Dictionary) Delete(word string) error {
	_, err := d.Search(word)
	switch err {
	case errNotFound:
		return errNotFound
	case nil:
		delete(d, word)
	}
	return nil
}
```

삭제 역시 값이 있는지 확인해야 한다.