---
slug: flutter-til-21
title: Flutter TIL - 21
authors: [kihyun]
tags: [TIL, 플러터, flutter, window manger, bitsdojo_window ]
---

# Flutter TIL - 21
---

## Window app에서 상단바 커스텀
---

[bitdoho_window]("https://pub.dev/packages/bitsdojo_window)라는 패키지를 이용한다.

### 초기값 설정

```dart
void main() {
  runApp(const MyApp());
  doWhenWindowReady(() {
    final win = appWindow; // 정의
    const initialSize = Size(600, 450); // 사이즈 정의
    win.minSize = initialSize; // 최소 사이즈 할당
    win.size = initialSize; // 초기 사이즈 할당
    win.alignment = Alignment.center; // 실행시 화면 위치
    win.title = "Custom Window app"; // 창 이름
    win.show(); // 이거 있어야 보여준다.
  });
}
```

### 테두리 설정
---

```dart
Scaffold(
  // 테두리
  body: WindowBorder(
    color: const Color(0xFF0B4279),
    width: 1,
    child: const Row(
      children: [
        LeftSide(),
        RightSide(),
      ],
    ),
  ),
),
```

`WindowBorder`라는 위젯을 사용해서 테두리를 설정할 수 있다. 테두리의 두께, 색상을 설정할 수 있다.

### 이동 설정

```dart
child: Column(
  children: [
    WindowTitleBarBox(
      child: Row(
        children: [
          Expanded(
            child: MoveWindow(),
          ),
          const WindowButtons(),
        ],
      ),
    ),
  ],
),
```

`WindowTitleBarBox`를 정의하고 안에서 MoveWindow를 정의하면 해당 칸을 잡고 드래그하면 창도 드래그하도록 설정할 수 있다.

### 이벤트 버튼 설정

```dart
WindowButtonColors buttonColors = WindowButtonColors(
  iconNormal: const Color(0xFF0B4279),
  mouseOver: const Color(0xFF2A78C6),
  mouseDown: const Color(0xFF0B4279),
  iconMouseOver: const Color(0xFF0B4279),
  iconMouseDown: const Color(0xFFCEE1FF),
);

Row(
  children: [
    MinimizeWindowButton(
      colors: buttonColors,
    ),
    MaximizeWindowButton(
      colors: buttonColors,
    ),
    CloseWindowButton(),
  ],
);
```

이미 정의 돼있는 이벤트 버튼을 사용할 수 있습니다. 여러 가지 색상 속성을 정의하여 커스텀할 수 있습니다.

## 플랫폼 별 설정
---


### For Windows

```cpp
#include <bitsdojo_window_windows/bitsdojo_window_plugin.h>
auto bdw = bitsdojo_window_configure(BDW_CUSTOM_FRAME | BDW_HIDE_ON_STARTUP);
```

위 내용을 `windows\runner\main.cpp`의 최상단에 작성해야 합니다.

### For Mac

`macos\runner\MainFlutterWindow.swift`에서

```swift
import bitsdojo_window_macos // FlutterMacOS 밑에 추가
```

이 코드를 `import FlutterMacOs`밑에 추가하고

```swift
class MainFlutterWindow: NSWindow {

// 를 아래 코드로 변경

class MainFlutterWindow: BitsdojoWindow {
```

```swift
override func bitsdojo_window_configure() -> UInt {
    return BDW_CUSTOM_FRAME | BDW_HIDE_ON_STARTUP
  }
```

이 코드를

```swift
override func awakeFromNib() {
```

이 코드 위에 추가합니다.

리눅스를 위한 방법도 있는데 따로 정리하진 않겠습니다.