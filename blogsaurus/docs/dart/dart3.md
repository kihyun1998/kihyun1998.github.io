---
sidebar_position: 3
---

# 03. [Dart] 함수

## 1. 함수 선언
---

void 함수는 return값이 없다.

```dart
void sayHi(String name) {
    print("Hi $name");
}
```

String 함수는 String을 return한다.
이처럼 앞에 자료형이 붙으면 그 자료형을 return한다.

```dart
String sayHi2(String name) {
    return "Hi $name";
}
```

:::tip
위 함수는 fat arrow syntax를 사용하여 축약 선언할 수 있다.

```dart
String sayHi3(String name) => "Hi $name";
```
:::


## 2. named parameters

named parameters를 사용하면 파라미터가 많은 함수일 때 도움을 받을 수 있다.

밑의 예시는 named parameter를 사용하지 않은 함수다.

```dart
String sayHi4(String name, int age, String country) {
    return "Hi, $name, you are $age years and leave in $country";
}

void main(){
    print(sayHi4('park', 25, 'Korea'));
}
```

아래는 named parameter를 사용한 방식이다.
default value를 지정해줌으로 사용자가 함수의 파라미터를 전달하지 않아도 사용할 수 있다.

```dart
String sayHi5({String name = 'kim', int age = 20, String country = 'USA'}) {
    return "Hi, $name, you are $age years and leave in $country";
}

void main(){
    print(sayHi5(name: 'park', age: 25, country: 'Korea'));
}
```

아래는 사용자가 꼭 데이터를 전달해야만 사용할 수 있는 예시이다.  
필수 입력을 받고 싶은 파라미터 앞에 `required`를 사용하면 된다.

```dart
String sayHi6({String name = 'kim', required int age, String country = 'USA'}) {
    return "Hi, $name, you are $age years and leave in $country";
}

void main(){
    print(sayHi6(age: 50));
}
```


## 3. Optional Positional Parameters

positional parameter는 순서에 맞춰서 입력을 해야한다.  
(named parameter를 사용하지 않은 상황을 말한다.)

만약 positional parameter를 사용하는데 하나의 파라미터만 (또는 그 이상) 입력 받지 않고 싶다면 아래와 같이 사용할 수 있다.

```dart
String sayHi7(String name, int age, [String? country = 'USA']) {
    return "Hi, $name, you are $age years and leave in $country";
}

void main(){
    print(sayHi7('park',20));
}
```

## 4. QQ Operator

`??` 연산자와 `??=` 연산자인데 우선 3항 연산자를 통해서 해당 값이 null이 아니면 upper하고 null이면 'NULL'을 반환하는 코드를 보겠다.

```dart
String upperName(String? name) => name != null ? name.toUpperCase() : 'NULL';
```

위처럼 작성할 수 있는데 `??` 연산자를 사용하면 더 축약할 수 있다.

```dart
String upperName2(String? name) => name?.toUpperCase() ?? 'NULL';
```

`??=` 연산자는 해당 변수가 비어있다면 값을 추가할 수 있는 연산자다. if문을 축약시킨 느낌

```dart
String? name;
name ??= 'park';
```

## 05. typedef

자료형을 커스텀할 수 있는 기능이다.

```dart
typedef Li = List<int>;

Li reverseListOfNum(Li list) {
  var reversed = list.reversed;
  return reversed.toList();
}
```

유용하게 사용하려면 UserInfo, 등등으로 자료형을 변환해서 사용할 수 있다.


