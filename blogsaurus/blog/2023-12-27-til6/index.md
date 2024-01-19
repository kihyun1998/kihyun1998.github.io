---
slug: flutter-til-6
title: Flutter TIL - 6
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, listview, clipping,GestureDetector, divider]
---

# Flutter TIL - 6
---

## ClipRRect
---

container를 border radius하게 디자인 했는데 스크롤 바가 오버플로우 되는 현상이 있었다.

ClipRRect로 스크롤바를 만드는 listview 위젯을 감싸니 오버플로우 되는 부분은 안보이게 됐다.

ClipRRect위젯은 클리핑하는 위젯인데 클리핑이란 주어진 경계 내에서만 내용을 보여주고 경계 넘어서는 잘라내는 것을 의미한다고 한다.

주로 이미지를 둥근 액자에 넣고 싶을 때도 사용한다고 한다..

## listView
---

사실 바보같은 짓을 했다 listView 안에 expanded를 넣으려고 했다. 왜냐하면 width를 double.infinity하게 하고싶었었다. 그러나 listView를 잘 몰랐었다.

listView의 자식들은 listView의 크기를 따라간다. 그래서 listView를 Expanded안에 infinity로 두면 그 안에도 infinity다. 그렇게 해결했다.

## GestureDetector의 behavior
---

:::tip
`deferToChild`: 자식 중 하나가 적중 시 이벤트 수신(투명한 대상 이벤트 수신 x)  
`translucent` : 반투명한 대상 & 시각적으로 뒤에 있는 대상도 이벤트 수신  
`opaque` : 시각적으로 뒤에 있는 대상은 이벤트 수신 불가능
:::

```dart
behavior: HitTestBehavior.translucent,
```

이와 같이 사용한다면 패딩부분도 클릭한다면 이벤트 수신될 수 있다.


## Divider
---

`ListView.separated`를 사용하여 `separatorBuilder`를 통해 구분자를 넣을 수 있었다.

줄을 긋고 싶었는데 `Divider`를 사용할 수 있었다.

`height`로 상하 여백을 정할 수 있었고  
`thickness`로 줄의 굵기를  
`indent`,`endIndent`로 좌우 여백을  
`color`로 색상을 정할 수 있었다.

## 리랜더링
---

다국어 지원 설정을 했는데 값은 변경 됐는데 화면 리랜더링을 못해서 계속 애먹었었다. 결국에는 riverpod provider를 수정하여 다국어도 watch하는 방법으로 변경했는데 현업에서 이렇게 사용하는지는 아직 모르겠다..