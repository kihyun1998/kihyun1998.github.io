---
sidebar_position: 1
---

# 02. Dart 데이터 타입들

## 01. basic data type
---


dart에서 데이터 타입은 다 클래스이다.
그래서 라이브러리를 import 하지 않아도 메소드 사용 가능하다.

```dart
String name = "park";
bool check = true;
int age = 19;
double tall = 170.1;

num x = 10;
x = 1.1;
```

:::tip
int와 double은 num이라는 클래스에 상속받은 데이터 타입임
그래서 아래와 같은 동작할 수 있다.

```dart
num x =10
x = 1.1;
```
:::

## 02. 리스트

dart에도 리스트 자료형이 있다.

```dart
var nums = [
    1,
    2,
    3,
    4,
];
nums.add(5);
```
위의 자료형을 명시적으로 표현하면 `List<int>`이다.

그리고 클래스이기 때문에 많은 메소드들이 내장되어 있다.

### collection if

리스트에는 `collection if`와 `collection for`가 있다.

```dart
var addSome = true;
var nums2 = [
    1,
    2,
    3,
    if (addSome) 4,
];
```

`collection if`는 리스트 안에 if 문이 통과되면 값을 추가할 수 있는 기능이다.


### collection for

`collection for`는 `collection if`처럼 리스트에 값을 추가하는 기능인데 반복문을 사용해서 추가할 수 있다.

```dart
var arr = ['a', 'b'];
var newArr = [
    'c',
    'd',
    'e',
    for (var old in arr) "old $old",
];
```

위에서 달러 표시를 통해 string format을 한거는 밑에 정리하겠다.

## 03. string interpolation
---

다른 언어들이 갖고 있는 스트링 포맷하는 기능이다.

```dart
var name2 = 'park';
var hello = "Hello, My name is $name";

```

대괄호를 사용해서 연산도 할 수 있다.

```dart
var age2 = 20;
var hello2 = "Hello, My name is $name and I'm ${age + 4}";
```

## 04. Maps
---

키와 값으로 이루어진 자료형이다.

```dart
var player = {
'name': 'park',
'power': 10.1,
};
```

명시적으로도 선언이 가능하다.

```dart
Map<List<int>, bool> player2 = {
[1, 2, 3]: true,
[4, 5, 6]: false,
};
```

주로 이런 형태를 많이 사용한다고 한다.
```dart
List<Map<String, Object>> player3 = [
{'name': 'a', 'power': 1.1},
{'name': 'b', 'power': 2.2},
];
```


## 05. Set

집합 자료형이다. 중복요소가 제거된다.

```dart
// Set은 아래처럼 묵시적으로 사용할 수 있다.
var numbers = {1, 2, 3, 4};

// 명시적으로 사용한다면 아래처럼 가능
Set<int> numbers2 = {6, 7, 8, 9};
```

`numbers` set에 이미 들어있는 값인 1을 추가한다면
{1,2,3,4,1}이 되는 것이 아닌 그냥 {1,2,3,4}이다.