---
slug: flutter-til-16
title: Flutter TIL - 16
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod, FutureProvider]
---

# Flutter TIL - 16
---

## skipLoadingOnRefresh
---

when 메서드에서 `skipLoadingOnRefresh`라는 메서드가 있는데 true가 디폴트다. 새로고침해도 loading 창 안보여주는건데 false로 해주는 편이 좋다.

## 새로고침
---

`ref.refresh()` 또는 `ref.invalidate()`를 사용한다. 예시로는 `RefreshIndicator`로 했지만 버튼으로 하는게 좋은 UI라고 하는 듯

그리고 윈도우에서는 `RefreshIndicator` 동작안한다..

## freezed class override
---

```dart
@freezed
class User with _$User {
  const User._();
  
  ...
  @override
  String toString() => 'User(id:$id)';
}
```

freezed data class 에서 User._()를 선언하고 toString을 다시 오버라이딩 할 수 있던데 이에 대해서 조금 더 알아봐야 할 듯
