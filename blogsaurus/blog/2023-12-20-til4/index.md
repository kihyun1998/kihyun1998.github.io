---
slug: Flutter
title: Flutter TIL - 4
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, function]
---

# Flutter TIL - 4

---

## 선택적 매개변수

---

```dart
Color getColor(WidgetRef ref, bool isInactive, [Color? color]) {}
```

위와 같은 함수가 있다고 가정하자. `[Color? color]` 이렇게 대괄호로 받는 매개변수는 넣어도 되고 안 넣어도 되는 선택적 매개변수이다.
