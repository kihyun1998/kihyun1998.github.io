---
sidebar_position: 30
---

# 30. [flutter] method channel 사용
---

아래에 있는 튜토리얼을 보고 진행했습니다.

[튜토리얼](https://docs.flutter.dev/platform-integration/platform-channels#step-5-add-a-windows-platform-specific-implementation)

## flutter
---

```dart
static const platform = MethodChannel('samples.flutter.dev/battery');

String _batteryLevel = 'Unkown battery level';
Future<void> _getBatteryLevel() async {
String batteryLevel;
try {
    final result = await platform.invokeMethod<int>('getBatteryLevel');
    batteryLevel = "Battery level at $result % .";
} on PlatformException catch (e) {
    batteryLevel = "Failed to get battery level : '${e.message}' ";
}

setState(() {
    _batteryLevel = batteryLevel;
});
}
```

위와 같은 코드가 필요합니다 !

```dart
static const platform = MethodChannel('samples.flutter.dev/battery');
```

먼저 `samples.flutter.dev/battery`이런 이름을 가진 MethodChannel을 가집니다.

그리고

```dart
final result = await platform.invokeMethod<int>('getBatteryLevel');
```

이렇게 C++로 구현할 getBatteryLevel 함수를 가져온다고 합니다.

## C++
---

::: warning
한가지 문제점이 있었습니다.  
window app으로 실행을 한번이라도 하지 않고는 c++ 개발을 할 수 없다는 사실을 명심해야 합니다.
:::

### include

아래 작업들은 `flutter_window.cpp`에서 진행을 했습니다.

```cpp
#include <flutter/event_channel.h>
#include <flutter/event_sink.h>
#include <flutter/event_stream_handler_functions.h>
#include <flutter/method_channel.h>
#include <flutter/standard_method_codec.h>
#include <windows.h>

#include <memory>
```

필요한 헤더파일을 추가했고 (근데 이 부분은 flutter_window.h에 작성해도 될 것 같습니다.)

### 실제 배터리 값 가져오는 코드

```cpp
static int GetBatteryLevel() {
  SYSTEM_POWER_STATUS status;
  if (GetSystemPowerStatus(&status) == 0 || status.BatteryLifePercent == 255) {
    return -1;
  }
  return status.BatteryLifePercent;
}
```

이부분은 시스템의 배터리를 가져오는 함수입니다.

### 함수 등록 코드

```cpp
bool FlutterWindow::OnCreate() {
    // ...
    RegisterPlugins(flutter_controller_->engine());

    flutter::MethodChannel<> channel(
        flutter_controller_->engine()->messenger(), "samples.flutter.dev/battery",
        &flutter::StandardMethodCodec::GetInstance());

    channel.SetMethodCallHandler(
        [](const flutter::MethodCall<>& call,
        std::unique_ptr<flutter::MethodResult<>> result) {
        if (call.method_name() == "getBatteryLevel") {
            int battery_level = GetBatteryLevel();
            if (battery_level != -1) {
            result->Success(battery_level);
            } else {
            result->Error("UNAVAILABLE", "Battery level not available.");
            }
        } else {
            result->NotImplemented();
        }
        });


    SetChildContent(flutter_controller_->view()->GetNativeWindow());
    return true;
}
```

위처럼 작성할 수 있습니다.

```cpp
bool FlutterWindow::OnCreate() {
    ...
    
    RegisterPlugins(flutter_controller_->engine());
```

OnCreate메서드 밑에 이 부분 밑에 작성합니다.

### 채널 생성

```cpp
flutter::MethodChannel<> channel(
    flutter_controller_->engine()->messenger(), "samples.flutter.dev/battery",
    &flutter::StandardMethodCodec::GetInstance());
```

채널을 생성하는 코드입니다.

`flutter_controller_->engine()->messenger()` 이 코드를 통해서는 메시지 전송에 사용될 메신저를 가져오는 코드이고 

`"samples.flutter.dev/battery"` 통신할 MethodChannel 이름을 특정합니다.

`&flutter::StandardMethodCodec::GetInstance()` 이 코드를 사용해서 메시지의 인코딩과 디코딩에 사용할 표준 코덱을 지정합니다.

```cpp
    channel.SetMethodCallHandler(
        [](const flutter::MethodCall<>& call,
        std::unique_ptr<flutter::MethodResult<>> result) {
        ...
        });
```

`SetMethodCallHandler`는 네이티브 측 처리 로직을 설정하는 함수 입니다. 