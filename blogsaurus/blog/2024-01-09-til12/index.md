---
slug: flutter-til-12
title: Flutter TIL - 12
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod,provider]
---

# Flutter TIL - 12
---

```dart
final helloProvider = Provider<String>((ref) {
  ref.onDispose(() {
    print("[helloProvider] : disposed");
  });
  return "Hello";
});
```

riverpod의 기본 모습이 이렇다.

변수에 할당하고 `Provider` 부분은 사용할 Provider 종류,

`<String>`에는 return값 타입을 정의한다.

ref를 통해서 여러 기능을 사용할 수 있는데 ref.onDispose해주면 dispose된다.

### onDispose

해당 provider가 dispose되면 실행되는 함수

위의 코드는 자동으로 dispose 되지 않는다.

### 대표적 3가지

`watch` : 값 변하는지 계속 확인하고 변하면 리빌드 (async하면안된다.)

`listen` : 값 변경되면 리빌딩 되는 것이 아닌 액션을 수행(navigate같은) (async하면 안된다.)

`read` : 값을 확인하지만 변경을 watch하지 않음(build에서 사용하지마라)

## auto dispose
---

```dart
final autoDisposeHelloProvider = Provider.autoDispose<String>((ref) {
  print('[autoDisposeHelloProvder]: created');
  ref.onDispose(() {
    print('[autoDisposeHelloProvder]: disposed');
  });
  return 'Hello';
});
```

페이지에서 나오면 autodispose해준다.

## family
---

```dart
final familyHelloProvider = Provider.family<String, String>((ref, name) {
  ref.onDispose(() {
    print('[familyHelloProvider] disposed');
  });
  return 'Hello $name';
});
```
이렇게 provider 정의하면 argument 사용할 수 있다.

```dart
    final helloA = ref.watch(familyHelloProvider('A'));
    final helloB = ref.watch(familyHelloProvider('B'));
```
watch할 때도 이런식으로 해야한다.

## autoDisposeFamily
---

```dart
final autoDisposeFamilyHelloProvider =
    Provider.autoDispose.family<String, String>((ref, name) {
  ref.onDispose(() {
    print('[autoDisposeFamilyHelloProvider] disposed');
  });
  return 'Hello $name';
});
```
autoDispose와 family를 모두 사용할 수 있다.

만약 둘의 인자값이 `A`라면 dispose는 한번만 일어납니다. (그냥 autoDispose도 한번만 일어남)


## 객체 넘기기 
---

```dart
class Counter {
  final int count;
  Counter({
    required this.count,
  });

  @override
  String toString() => 'Counter()(count: $count)';
}

final counterProvider = Provider.autoDispose.family<int, Counter>((ref, c) {
  ref.onDispose(() {
    print('[countProvider($c)] disposed');
  });
  return c.count;
});
```

만약 위처럼 객체를 넘겨서

```dart
    ref.watch(counterProvider(Counter(count: 0)));
    ref.watch(counterProvider(Counter(count: 0)));
```

이렇게 watch를 조지면 dispose가 두번 일어납니다. 둘 다 다른 객체로 판단합니다.


```dart
class Counter extends Equatable {
  final int count;
  const Counter({
    required this.count,
  });

  @override
  String toString() => 'Counter()(count: $count)';

  @override
  List<Object> get props => [count];
}
```

Counter 객체를 Equatable해야 dispose 한번만 일어난다.


## 정리
---

autoDispose 조심히 사용해야 한다. 계속 dispose 하기 때문에