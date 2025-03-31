---
sidebar_position: 54
---

# 54. [flutter] [Macos] system tray에서 hide menu 허용하기
---

Macos에서 system_tray를 사용할 때 그대로 사용할 수 있습니다.
그런데 hide menu할 때가 살짝 다르더라구요.

`Macos`>`Runner`>`AppDelegate.switft`에서 코드가 아래와 같습니다.

```swift
import Cocoa
import FlutterMacOS

@main
class AppDelegate: FlutterAppDelegate {
  override func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
    return true
  }

  override func applicationSupportsSecureRestorableState(_ app: NSApplication) -> Bool {
    return true
  }
}
```

여기에서 꼭 아래와 같이 수정해줘야 합니다.

```swift
override func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
    return false
  }
```

그럼 나머지 코드처럼 적용하면 hide window를 잘 사용할 수 있습니다.