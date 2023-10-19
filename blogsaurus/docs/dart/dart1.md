---
sidebar_position: 1
---

# 01. [Dart] 언어의 변수 타입

## 01. var
---

### 묵시적 사용


```dart
var implied = "묵시적";
implied = "implied";
```
:::tip
함수나 메소드 내부에서 지역 변수를 선언할 때 사용
:::

### 명시적 사용

```dart
String explicit = "명시적";
explicit = "explicit";
```
:::tip
class에서 변수나 속성을 선언할 때 사용
:::

## 02. dynamic
---

### 묵시적 dynamic

```dart
var value;
value = "abc";
value = 123;
value = true;
```

### 명시적 dynamic

```dart
dynamic dnm;
dnm = "qwerty";
dnm = 999;
dnm = false;
```

## 03. null safety 변수
---

dart에는 null값 들어와도 null 참조 에러 안나게 하는 방법이 있다.

바로 `?`를 사용하면 된다. 자바스크립트 처럼

```dart
String? nullSafe = "null";
nullSafe = null;
```

```dart
nullSafe?.isNotEmpty;
```

위와 같이도 사용 가능

## 04. final
---

dart에서 상수 선언하는 방법이다.

```dart
final fn = "can only be set once";
final String fn2 = "명시적 선언도 가능하다.";
```

## 05. late
---

late는 초기 데이터 없이 변수를 명시적으로 선언할 수 있도록 해준다.

:::tip
"late키워드는 값의 초기화를 뒤로 미루지만, 개발자가 null을 실수로 사용하는것을 막아준다."
:::

```dart
late final String str;
str="aaa";
```

정리하자면 nullable과 헷갈리지 않기 위해 사용 그리고 API 응답 받아오는데 많이 사용한다니 알고있자

## 06. const
---

띠용? 할 수 있는 변수
다트에도 const가 있지만 자바스크립트와는 다름
const > compile time constant를 만들어줌
compile time constant > compile-time에 값을 알고 있어야 함.
final보다 엄격한 상수라고 생각하면 된다.

```dart
// 이건 가능
const APIKey = "asdkl1ltl1bajf092j1";

// 밑은 불가능 final쓰세요
const cant = "어떤 함수의 return값은 const로 사용할 수 없음 ex) const sum = add(1,2)";
```

:::tip 정리
final > 그냥 상수  
const > 엄격한 상수 (무조건 하드코딩)
:::