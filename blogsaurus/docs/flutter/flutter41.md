---
sidebar_position: 41
---

# 41. [flutter] riverpod invalidate
---

## invalidate
---

`ref.invalidate(provider)`를 사용하면 해당 provider를 강제로 dispose시켜준다.

dialog 창을 닫을 때 버튼으로 안 닫으면 안에서 사용하던 provider들이 dispose되지 않아서 invalidate를 사용해야한다.

```dart
context
  .showFlash(
    ...
  )
  .then(
    (_) => ref.invalidate(provider),
  );
```