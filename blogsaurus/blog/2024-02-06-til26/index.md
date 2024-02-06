---
slug: flutter-til-26
title: Flutter TIL - 26
authors: [kihyun]
tags: [TIL, 플러터, flutter, context menu ]
---

# Flutter TIL - 26
---

## ContextMenu
---

GestureDetector를 사용하여 우클릭 이벤트 시 컨텍스트 메뉴가 나오게 할 수 있다.

우클릭 이벤트는 `onSecondaryTapDown` 또는 `onSecondaryTapUp`인데 Up이 좋은게 다운 했다가 다른 곳에서 Up하면 취소되는거도 자연스럽게 적용된다.

먼저 overlay를 구해야 한다.

```dart
final RenderObject? renderObject =
              Overlay.of(context).context.findRenderObject();
          if (renderObject is RenderBox) {
            final RenderBox overlay = renderObject;
            ...
```

렌더링할 object를 위젯 트리 상에서 가장 가까운 위젯을 build context를 통해 찾는다고 하네요

```dart
showMenu(
  context: context,
  position: RelativeRect.fromRect(
    details.globalPosition & const Size(48, 48),
    Offset.zero & overlay.size,
  ),
  items: [
    const PopupMenuItem(
      value: 'menu1',
      child: Text('메뉴 1'),
    ),
    const PopupMenuItem(
      value: 'menu2',
      child: Text('메뉴 2'),
    ),
  ],
).then((value) {
  // 메뉴 선택에 따른 동작
  if (value != null) {
    print('선택된 메뉴: $value');
  }
});
```

showMenu 함수를 사용해서 context 메뉴를 정의할 수 있는데

postion 속성의 값으로 첫 번째 인자로 `Rect rect`를 받고 두 번째 인자로는 `Rect container`를 받습니다.

정확하게는 모르겠는데 Size(,)의 값을 수정하면 context menu가 제한된 곳을 얼만큼 나갈 수 있는지에 대한 값인 것 같고

`item`을 통해서 메뉴 값을 정할 수 있고

`then`을 통해서 눌린 버튼에 대한 이벤트를 정의할 수 있습니다. 눌린 버튼은 item 리스트에 정의된 value값을 then에 넘기기 때문에 switch case로 구분 가능