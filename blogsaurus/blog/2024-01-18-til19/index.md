---
slug: Flutter
title: Flutter TIL - 19
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod, notifierProvider, asyncNotifierProvider, tear-offs, enum based class, sealed based class ]
---

# Flutter TIL - 19
---

## AutoDispose
---

autodispose를 사용하려면

```dart
final counterProvider = NotifierProvider.autoDispose<Counter, int>(Counter.new);
```  

로 선언해야 하고

```dart
class Counter extends AutoDisposeNotifier<int>{}
```

위처럼 Notifier를 사용해야 한다.


## Family
---

```dart
final counterProvider = NotifierProvider.family<Counter, int, int>(Counter.new);
```

family를 사용하려면 family와 넘겨줄 인자값을 추가해야하고

```dart
class Counter extends FamilyNotifier<int, int> {
  @override
  int build(int arg) {return arg;}
}
```

Notifier도 FamilyNotifier와 인자 추가와 build함수에 인자를 추가해야 한다.


## AutoDispose Family
---

위의 둘을 합치면 된다.

## riverpod generator 이용
---

generator를 이용해서 notifier를 만들면 더 쉽다.

1. riverpodpart 만들기

2. riverpodclass로 만들기 (riverpodclass가 notifier다.)

3. 이름 넣고 build 함수 타입 지정하기

4. 나머지 구현

AutoDispose는 어노테이션에 따라 결정되고 family 여부는 build함수 인자값 존재 유무로 결정된다고 합니다.

추가 특이사항이 있으면 그 때 정리해야지.


## state shape
---

2가지 있다고 한다.

`enum`, `sealed` .. 그렇다

추가로 `AsyncValue`도 있다.


[이곳의 API](https://www.boredapi.com/)를 활용한다.


## data model을 freezed로 만드는 절차
---

1. `ptf`

2. `pts`

3. `fdataclass`

4. factory 생성자에 인자값 넣기 required로 아니여도되구

5. `fromJson`키워드로 fromJson 만들기 (이름은 class이름붙이고)

6. 메서드들 만들기(empty,add,remove 등)

## stat를 freezed로 만드는 절차
---

1. `ptf`

2. `fdataclass`

3. 필요한 factory 메서드 만들기


## dio provier 만들기 절차
---

1. `riverpodpart`

2. `riverpod`으로 provider만들기

3. 아래 문법 처럼

```dart
@riverpod
Dio dio(DioRef ref) {
  return Dio(BaseOptions(baseUrl: '[Target URL]'));
}
```

## Enum based에서 값 요청 provider 만드는 절차
---

1. `riverpodpart`와  `riverpodclass`로 초기 설정 후 이름 설정

2. build 함수 타입 정해주고 return 값 정해주기

3. 여러 상태 컨트롤하는 함수 만들기(loading, error, success 등등)

4. 흐름을 적자면 먼저 state의 `status를 loading`으로 바꿔주고 `Get요청`을 날린다음에 성공적으로 값을 가져오면 `fromJson`해가지구 `copyWith`해서 `status success와 값을 가져온 값으로 변경`을 한다. 에러가 난다면 `copyWith해서 status failure와 error에 e.toString` 넣어줌

### 특이점 정리

- copyWith로 값 변경  
- single state class임

## inistate modifier 주의할 점

페이지에 진입했을 때 바로 api를 쏘는 동작을 하고 싶어서 initState에 api 통신하는 코드를 넣었다. 이 때 UI를 수정하는 동작도 포함돼있어서

`FlutterError (Tried to modify a provider while the widget tree was building....` 에러가 났다. 

```dart
  @override
  void initState() {
    super.initState();
    ref.read(enumActivityProvider.notifier).fetchActivity(activityTypes[0]);
  }

// 이거를 아래로 수정

  @override
  void initState() {
    super.initState();
    Future.delayed(Duration.zero, () {
      ref.read(enumActivityProvider.notifier).fetchActivity(activityTypes[0]);
    });
  }
```

`Future.delayed`로 감싸면 에러가 해결된다. 이걸 사용하면 비동기적으로 실행하는듯 그래서 UI 그려지기 까지 기다려주는 것 같음.


## Sealed class based
---

특징은 multi class 이다.


## 절차

1. sealed class를 만든다.

```dart
sealed class StateClass {
  const StateClass();
}
```

2. StateClass를 extend하여 init, loading, success, fail을 구현한다.

```dart
final class StateClassInit extends StateClass {
  const StateClassInit();

  @override
  String toString() => 'StateClass()';
}
```

3. provider에서 state 할당할 때 copyWith을 사용하는게 아니라 구현한 class를 사용한다. 나머지는 비슷


## async처럼 보이게하는 notifier
---

### enum

setInit 대신에 provider에서 build함수 안에 fetch해주면 된다.

```dart
  @override
  StateClass build() {
    fetchActivity(types[0]);
    return StateClass.init();
  }

```

### 주의할 점

이 때도 위처럼만 해버리면 에러가난다.

future.delayed로 감싸는 것이 아닌 state에 init()을 먼저 할당해준다.

```dart
  @override
  StateClass build() {
    state = StateClass.init();
    fetchActivity(types[0]);
    return StateClass.init();
  }
```


## AsyncNotifier
---

방식은 Notifier와 비슷하지만 안에 생성하는 메서드들은  모두 `Future<void>`타입이다.

`AsyncValue`가 좋은게 `AsyncLoading`에서 이전값을 가지고 있고 `AsyncData`에서 바뀐 next값을 가지고 있다.

`AsyncError`에서도 value에는 이전값 보유한다.

### guard

Async할 때 try catch문에서 보통 try에 AsyncData, catch에선 AsyncError을 정의합니다. 이를 간소화시켜주는 방법입니다.


```dart
state = await AsyncValue.guard(() async {
  await wait();
  return state.value! + 1;
});
```

이렇게 하면 알아서 AsyncData와 AsyncError에 값을 넣어준다.

### riverpod annotation 절차

1. riverpodpart

2. riverpodAsyncClass / 작명 / build함수 타입 지정

3. build에 async 추가 및 family 할거면 build에 인자 추가 

4. 추가 값들 추가


```dart
FutureOr<int> build({required int init}) async {
    
    return init;
  }
```

riverpod annotation 사용하면 named parameter 사용할 수 있다.


### skip error

`AsyncValue`의 `when` 메서드 사용 시 `skipError` 속성이 있다.

이 속성은 default가 false고 true로 바꾸면 에러 발생 시 error: 로직에 처리된게 실행되는게 아닌 data가 있다면 이전 데이터를 보여주는 것이다.