---
slug: Flutter
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

페이지 나오면 autodispose해준다.

