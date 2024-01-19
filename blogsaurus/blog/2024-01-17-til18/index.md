---
slug: flutter-til-18
title: Flutter TIL - 18
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod, notifierProvider ]
---

# Flutter TIL - 18
---

## ListView
---

`ListView` 위젯을 `Column/Row`위젯 아래에 둔다면 `ListView`와 `Column/Row`의 사이즈들이 unbounded height가 일어나서 render overflow가 납니다.

`Column/Row` 아래에 `ListView`를 두고 싶다면 `Expanded` 위젯으로 `ListView`를 감싸야 함.

## Notifier Provider
---

### 생성

notifier를 입력해서 먼저 notifier를 정의한다.

```dart
class CounterNotifier extends Notifier<int> {
  @override
  int build() {
    return 0;
  }
}
```

`CounterNotifier`는 Notifier의 이름이고 `Notifier<int>`로 돼있는데 int는 반환 타입이다. build함수 앞에는 반환 타입을 붙여줘야 한다.

`StateNotifier`나 `ChangeNotifier`를 사용하면 `ref`를 사용할 수 없지만(사용하려면 생성자에서 정의해줘야 한다.) `Notifier`를 사용하면 `ref`를 바로 사용할 수 있다.


### tear-offs 지원

```dart
onPressed:(){
  func();
}

# 위와 아래는 같다.

onPressed: func,
```

위 코드와 같은 동작을 하는 것이 tear-offs다.

거추장스러운 부분이 제거가 된다. 함수와 생성자에서 사용할 수 있다.

그래서 아래와 같이 `notifierProvider`를 선언할 수 있다.
```dart
final counterProvider = NotifierProvider<Counter, int>(() {
  return Counter();
});

#위를 아래처럼

final counterProvider = NotifierProvider<Counter, int>(Counter.new);
```

모르면 일단 외우자 tear-offs


### 접근

watch하면 state값을 가져올 수 있고 인스턴스에 접근하려면

```dart
ref.raed(counterProvider.notifier).increment();
```

이렇게 할 수 있다.