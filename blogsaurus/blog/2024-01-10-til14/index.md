---
slug: flutter-til-14
title: Flutter TIL - 14
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod, stateprovider,remote api, FutureProvider]
---

# Flutter TIL - 14
---

## state provider
---

특징으로는 code generator가 안되고

state를 갖고 있다는 점

```dart
floatingActionButton: FloatingActionButton(
  onPressed: () {
    ref.read(counterProvider.notifier).state++;
  },
  child: const Icon(Icons.add),
),
```

위와 같이 read를 하는데 notifier를 사용해서 state에 접근할 수 있다.

그리고 추가로 UI를 그리려면 `Future.delay` 또는 Listen을 사용할 수 있다.  
(그냥 그리려면 에러난다. 충돌나서)

```dart
ref.listen<int>(counterProvider, (previous, next) {
  if (next == 3) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          content: Text('counter : $next'),
        );
      },
    );
  }
});
```

요런식으로 listen할 수 있다. 이전 값 다음 값이 있다.

## update
---

```dart
onPressed: () {
  ref
      .read(autoDisposecounterProvider.notifier)
      .update((state) => state + 10);
},
```

위 코드는

```dart
ref.read(autoDisposecounterProvider.notifier).state + 
  ref.read(autoDisposecounterProvider.notifier).state + 10
```

과 같은 코드이다. 너무 길기 때문에 그냥 update 사용하는 것이 편리하다.

state를 인자로 사용할 로직이 필요하면 `update` 사용하기

## Future Provider의 이야기
---

remote api를 호출하면 3가지 상태 처리가 필요하다.

`in progress`, `success`, `error`이다.

3가지 모두 동시에 2가지 이상 상태가 될 수 없다.

`FutureProvider`는 이 3가지 상태에 대한 값을 처리해준다.

`AsyncData`, `AsyncError`, `AsyncLoading`이 있다.

생성자도 3가지 있다.

`AsyncValue`가 중요하다는 뜻

## 소소한 팁
---

1. provider 안에 ref.read()를 사용하지 말 것

2. StateProvider 대신 NotifierProvider 사용할 것