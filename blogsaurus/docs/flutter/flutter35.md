---
sidebar_position: 35
---

# 35. [flutter] nullable 타입의 copyWith
---

## 예시 코드
---

```dart
import 'package:flutter/widgets.dart';

class Example {
  final int? number;
  final String name;
  Example({
    this.number,
    required this.name,
  });

  Example copyWith({
    ValueGetter<int?>? number,
    String? name,
  }) {
    return Example(
      number: number != null ? number() : this.number,
      name: name ?? this.name,
    );
  }
}
```

나는 copyWith할 때 nullable타입 즉 ?가 붙은 타입에서 `ValueGetter<int?>?` 이렇게 하는 것을 이해하지 못했다.

그런데 저렇게 해야 동작한다.

riverpod에서 적용한다고 할 때 아래처럼 해야한다.

```dart

...
state = state.copyWith(
  number: ()=>null,
)
...

```

참고 하세요.