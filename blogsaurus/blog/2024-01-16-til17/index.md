---
slug: Flutter
title: Flutter TIL - 17
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod, FutureProvider, refresh, invalidate]
---

# Flutter TIL - 17
---

## invalidate
---

```dart
onPressed: () async {
  ref.invalidate(userDetailProvider);
},
```

refresh할 때 `invalidate`를 사용한다면 위처럼 onPressed 함수를 구현할 수 있습니다. 물론 skipLoadingOnRefresh도 적용했습니다.

`invalidate`의 인자값 타입은 `ProviderOrFamily`이다. 그래서 Family를 주지 않고 적용한다면 모든 provider가 auto dispose된다.

## refresh
---

```dart
onPressed: () async {
  return ref.refresh(userDetailProvider(userId));
},
```

또는

```dart
onPressed: () {
  return ref.refresh(userDetailProvider(userId).future);
},
```

refresh 인자 타입은 Family Provider라면 family값을 넘겨주어야 한다. 그리고 return을 사용해야 하기에 return값이 없다면 invalidate를 추천한다.