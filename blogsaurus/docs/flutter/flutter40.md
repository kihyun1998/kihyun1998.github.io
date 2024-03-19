---
sidebar_position: 40
---

# 40. [flutter] Isolate로 dll 함수 호출
---

## Isolate
---

Isolate는 쓰레드를 사용하는 것과 같습니다. 병령작업에 용이합니다.

## 과정
---

### dll

평소처럼 dll imprt 하고 dll 함수를 선언합니다.

### isolate

해당 함수를 isolate하게 호출하는 함수를 선언합니다. 아래는 예제 코드입니다.

```dart
final class DllValue extends Struct {
  external Pointer<Utf8> text;

  @Int8()
  external int check;
}

class DartValue {
  String text;
  bool check;
  DartValue({
    required this.text,
    required this.check,
  });
}

```

```dart
final dll = DynamicLibrary.open('Dll.dll');

typedef CallDialNative = GoResValue Function(
    Pointer<Utf8> arg1, Pointer<Utf8> arg2);
typedef CallDialDart = GoResValue Function(Pointer<Utf8> arg1, Pointer<Utf8> arg2);

class Dllfunc {
  static final CallDialDart dial =
      dll.lookupFunction<CallDialNative, CallDialDart>('dial');
}

.
.
.


  void callFunc(SendPort sendPort) async {
    // 새로운 ReceivePort 생성
    ReceivePort port = ReceivePort();
    // 메인 Isolate에 sendPort 보냄
    sendPort.send(port.sendPort); 

    // 새로운 ReceivePort에서 메시지 수신 대기
    await for (var msg in port) {
      List<dynamic> args = msg;
      String arg1Str = args[0];
      String arg2Str = args[1];
      SendPort replyTo = args[2];

      final Pointer<Utf8> arg1 = arg1Str.toNativeUtf8();
      final Pointer<Utf8> arg2 = arg2Str.toNativeUtf8();

      // Comm.dial 함수 호출
      DllValue result = Comm.dial(arg1, arg2);
      final rst = DartValue(
        msg: result.text.toDartString(),
        ok: result.check == 0 ? false : true,
      );
      replyTo.send(rst);

      calloc.free(arg1);
      calloc.free(arg2);
      port.close();
    }
  }
```

기본적으로 위 처럼 작성하면 된다.

처음에 ReceviePort를 선언해서 sendPort를 합니다. (메인 Isolate에 sendPort를 하는 것이다.)

그리고 인자값을 받기 위한 수신 대기를 한다.

여기서 **중요한 부분**은 처음부터 `Pointer<UTF8>`로 받지 않은 것이다.

그 이유는 Isolate는 `int`, `String`, `bool`, `List`, `Map` 등 기본적인 타입만 지원하기 때문이다. 

그래서 그냥 받고 안에서 형변환해서 처리하고 다시 형변환해서 return하는 구조이다.

그리고 사용한 Pointer는 free도 해주고 하면 된다.

위는 Isolate를 사용해서 함수를 호출하는 코드고 아래는 호출한 함수를 사용하는 코드다.

```dart
  Future<ResValue> dialInIsolate(String arg1, String arg2) async {
     // 메인 Isolate의 ReceivePort 생성
    ReceivePort receivePort = ReceivePort();

    // 새 Isolate 생성 및 callDial 함수 실행
    await Isolate.spawn(callFunc, receivePort.sendPort);

    // 첫 번째 메시지로부터 새 Isolate의 SendPort 받기
    SendPort sendPort = await receivePort.first as SendPort;

    // 결과를 받기 위한 새 ReceivePort
    ReceivePort response = ReceivePort();

    // 새 Isolate에 작업 요청 보내기 (함수 인자와 결과를 받을 SendPort 포함)
    sendPort.send([arg1, arg2, response.sendPort]);

    // 새 Isolate로부터의 응답 기다림
    final result = await response.first;

    return result;
  }

.
.
.

  onPressed: () async {
    final res = await connect.dialInIsolate(
      "arg1",
      "arg2",
    );
    print(res.text);
    print(res.check);
  },
``` 

위는 main에서 사용할 함수이다.

이렇게 사용할 수 있다.