---
slug: Flutter
title: Flutter TIL - 13
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod,code generator,provider,stateProvider]
---

# Flutter TIL - 13
---

## code generator
---

`rivp`: `riverpodPart`

```dart
part 'b_provider.g.dart';
```

`riverpodKeepAlive`

riverpod code generator는 자동으로 autoDispose인데 keepAlive:true를 해주면 autoDispose하지 않는다.

```dart
@Riverpod(keepAlive: true)
String hello(HelloRef ref) {
  ref.onDispose(() {
    print("[helloProvider] : disposed");
  });
  return "Hello";
}
```

`String`: return의 타입
`hello`: 나중에 helloProvider라는 이름을 갖는다.
`HelloRef`: generator하면 Ref로 나오는데 hello에서 앞글자를 대문자로 해서 붙이면 HelloRef가 된다. 이걸로 교체해줘야한다.

### 코드생성

```bash
dart run build_runner build -d
```

위 처럼 build runner 실행해서 generate할 수 있다.

`-d`옵션은 generate중 충돌이 나도 그냥 생성하라는 뜻입니다.

```bash
dart run build_runner watch -d
```

watch를 사용하면 한번만 사용하면 변화를 계속 watch해서 적용된다.

### 차이점

수동 생성과 차이점은

1. 기존은 `helloProvider` 이렇게 했다면 자동 생성에서는 hello로만 해도 `helloProvider` 생성해줌.

2. 자동생성에서는 Provider 종류 지정 안해도된다.


## Provider
---

### autoDispose
---

autoDispose Provider는 `riverpod`스니팻 으로 만들 수 있습니다.

```dart
@riverpod
String autoDisposeHello(AutoDisposeHelloRef ref) {
  print('[autoDisposeHelloProvder]: created');
  ref.onDispose(() {
    print('[autoDisposeHelloProvder]: disposed');
  });
  return 'Hello';
}
```



### family
---

family는 그냥 `riverpod`이나 `riverpodkeepalive`에서  ref 옆에 파라미터 추가해주면 family로 자동으로 만들어줍니다.

```dart
@Riverpod(keepAlive: true)
String familyHello(FamilyHelloRef ref, {required String name}) {
  ref.onDispose(() {
    print('[familyHelloProvider] disposed');
  });
  return 'Hello $name';
}
```

참고로 `name`을 사용하면 에러난다. 그 이유는 generator에서 name이라는 변수를 이미 사용하고 있기 때문이다.

### autoDispose, family
---

```dart
@riverpod
String autoDisposeFamilyHello(AutoDisposeFamilyHelloRef ref,
    {required String nom}) {
  ref.onDispose(() {
    print('[autoDisposeFamilyHelloProvider] disposed');
  });
  return 'Hello $nom';
}
```

별로 어렵지 않음

## 한가지 배운 dart 언어 syntax
---

`part`는 `import`다음으로 최상단에 위치해야한다.


## StateProvider
---

### 특징

- stateProvider는 notifierProvider의 간소화된 버전  
- 복잡하지 않는 로직을 쓸 때 사용  
- code generator해서 만들 수 없다.(수동만 가능)


