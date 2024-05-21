---
sidebar_position: 47
---

# 46. [flutter] 에러 -  FlutterError (Tried to modify a provider while the widget tree was building.)
---

## 메시지
---

```
FlutterError (Tried to modify a provider while the widget tree was building.
If you are encountering this error, chances are you tried to modify a provider
in a widget life-cycle, such as but not limited to:
- build
- initState
- dispose
- didUpdateWidget
- didChangeDependencies

Modifying a provider inside those life-cycles is not allowed, as it could
lead to an inconsistent UI state. For example, two widgets could listen to the
same provider, but incorrectly receive different states.


To fix this problem, you have one of two solutions:
- (preferred) Move the logic for modifying your provider outside of a widget
  life-cycle. For example, maybe you could update your provider inside a button's
  onPressed instead.

- Delay your modification, such as by encapsulating the modification
  in a `Future(() {...})`.
  This will perform your update after the widget tree is done building.)
```

## 이유
---

flutter에서 riverpod을 사용할 때 initState함수에서 ref.read로 async한 함수를 호출하면 만날 수 있는 에러다.

즉, state를 위젯이 다 그려지기 전에 statet를 수정하려고 하면 나타나는 에러다.

## 해결법
---

1. 버튼을 만들어서 콜백을 하는 방법

2. Future.delayed로 감싸기

```dart
Future.delayed(
      Duration.zero,
      () {
        ref.read(weatherProvider.notifier).fetchWeather("london");
      },
    );
```

그럼 해결.
