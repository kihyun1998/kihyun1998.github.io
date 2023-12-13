---
sidebar_position: 1
---

# 02. [KOSTA] 플러터 심화 교육

## Dart 학습
---

### 객체 생성

객체 변수에는 메모리 주소를 반환한다.

그래서 

객체1 == 객체1은 참조비교라고 주소를 비교하는 것이다.

```dart
'a' == 'a' // true
[1] == [1] //false
```

### 가변 객체와 불변 객체

`불변 객체`는 `'a'`같은 값이다. 값이 변경되지 않는다.

`가변 객체`는 같은 내용인 것처럼 보여도 수정이 가능해서 항상 새로운 메모리 주소 할당

예시로 list, set, map, class 등이 있다.

`가변 객체`는 항상 다른 메모리 주소 할당

`불변 객체` 예시는 string, int, double, bool, const로 선언된 객체 등이 있다.


Flutter에서는 값이 변경되지 않는 위젯은 const를 붙이는 것이 메모리 절약할 수 있다.

### 값 비교

직접 코드로 짜려면 비교하는 operator를 오버라이딩해서 사용해야한다.

주의할 점은 final이나 const로 불변객체로 만들지 않으면 hashcode도 바꿔줘야한다.

```dart
class A {
  final int value;

  // final로 선언된 인스턴스가 있어야 const로 생성자 만들 수 있음.
  const A(this.value);

  // ==라는 operator를 오버라이딩한 것임.

  @override
  bool operator ==(Object other) {
    // identical은 참조 비교
    // 그러나 값 비교를 위해서 ||를 추가함
    return identical(this, other) ||
        // this.runtimeType == other.runtimeType이다.
        // this.value와 other.value이다.
        // 둘이 메모리 주소는 달라도 값이 다르면 true를 반환할 것이다.
        other is A && runtimeType == other.runtimeType && value == other.value;
  }

  // 불변객체로 선언하면 이거 안해도 된다.
  @override
  int get hashCode => value.hashCode;

  // toString함수를 오버라이딩 해서 문자열로 출력되도록 한 것
  @override
  String toString() {
    return "A($value)";
  }
}

void main() {
  print(A(1) == A(1));
  print(A(1));
}
```

equatable 라이브러리를 사용하면 쉽게 값 비교를 할 수 있다.

```dart
import 'package:equatable/equatable.dart';

class A extends Equatable {
  final int value;

  const A(this.value);

  @override
  List<Object?> get props => [value];
}

void main() {
  print(A(1) == A(1));
  print(A(1));
}
```



## 복사
---

`얕은 복사` : 메모리 주소만 전달하는 것


`깊은 복사` :

### Map

Map 자료형은 [...<변수>]으로 깊은 복사를 할 수 있다.

### List

리스트는 아래와 같은 방법들이 있음

```dart
List<int> a = [1];

/// 방법1) 배열.toList() 활용
List<int> b = a.toList();

/// 방법2) 전개 연산자(Spread Operator) 활용
List<int> b = [...a];

/// 방법3) 반복문 활용
List<int> b = [for (var i in a) i];

/// 방법4) JSON 직렬화 & 역직렬화 활용
import 'dart:convert';
List<int> b = jsonDecode(jsonEncode(a)).cast<int>();
```

그러나 2차원 배열을 to.List()로 생성하면 밖에 있는거만 깊은 복사고 안에는 얕게 복사된다.

```dart
List<List<int>> a = [[1]];

/// map() & toList() & Spread Operator
List<List<int>> b = a.map((i) => i.toList()).toList();
List<List<int>> b = a.map((i) => [...i]).toList();
List<List<int>> b = [...a.map((i) => i.toList())];
List<List<int>> b = [...a.map((i) => [...i])];
```

2중 중첩 리스트의 경우는 위와 같은 방법들로 깊은 복사를 할 수 있음


### CustomClass

어려움

## 불변객체
---

const로 불변객체를 만든다면 얕은 복사를 한 이후 값을 수정하려 한다면 깊은 복사를 강조하기 때문에 메모리 낭비가 없다가 필요할 때 필요한 메모리만 사용할 수 있게 된다.

const로 생성된 객체는 값이 같으면 같은 메모리를 사용하기 때문에 메모리 절약도 된다.


## JSON 직렬화, 역직렬화
---

`직렬화(Serialization)`: 인스턴스를 문자열로 변환하는 과정, 네트워크 통신을 위해서

`역직렬화(Deserialization)` : 문자열을 인스턴스로 변환하는 과정, 원하는 값을 원할하게 추출하기 위해서

## 코드 생성기
---

### Flutter freezed Helpers

frf해서 속성추가

```bash
dart run build_runner build
```

위 명령어로 코드 생성

### Build runner

좌측 하단의 watch 누르면 된다.

## 기타
---

getter, setter, 캡슐화, mixin, extends, extension등에 대해서 학습함.