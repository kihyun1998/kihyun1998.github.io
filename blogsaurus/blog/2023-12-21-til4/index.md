---
slug: flutter-til-4
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


## svg icon에 대해서
---

지금 저는 IconButton을 사용하지 않고 Custom으로 Button위젯을 만들어서 사용하고 있습니다.

이 때 버튼 등 다양한 값들을 `GestureDetector`의 `Row` 위젯으로 감싸아서 했는데 width가 넘어갔다는고 하네요.. 그래서 appbar가 좀 밀려보였습니다.

svg파일의 크기를 줄여야 합니다. vs code에서 위젯트리 디버깅 확인해보며 Row에 할당된 width를 확인하고 그 이하로 svg 파일 크기를 줄이면 해결됩니다.

## NaviagtionRail
---

navigationRail을 사용하면 사이드 네비게이션 바를 사용할 수 있다.

`NavigationRail`안에 `NavigationRailDestination`으로 Navigator를 하나하나 정의할 수 있다.

`selectedIndex`가 필수로 필요하다.

`onDestinationSelected`로 어떤 것을 선택했는지 정의할 수 있다. setState로도 할 수 있는데 provider를 사용해서 watch해서 사용할 수도 있다.

예를 들어서 `selectedIndex`를 state를 watch하고 `onDestinationSelected`에는 값을 바꿔주는 함수를 정의해서 read로 호출하면 될 듯

`selectedIconTheme`과 `unselectedIconTheme`을 통하여 테마 지정 가능 아직은 큰 필요성 모르겠다.

trailing을 사용하면 맨 밑에 버튼 같은 걸 만들 수 있습니다.

이 과정도 복잡했는데 Expanded와 Align 을 사용해야 할 수 있었습니다. 이에 대해서는 또 찾아봐야겠네요

## body에 border-radius
---

사실 body에 border-radius줘도 안바뀐다 왜냐하면 배경색과 색이 같아서

그래서 body를 이루고 있는 Row위젯을 ColorBox로 감쌉니다. 그렇게 배경색을 주고 밑에서 Container에 해당했던 부분(기존에 border-radius를 줬던 부분)을 Expanded로 확장시킵니다 그럼 끝 ! 

