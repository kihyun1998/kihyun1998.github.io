---
slug: flutter-til-22
title: Flutter TIL - 22
authors: [kihyun]
tags: [TIL, 플러터, flutter, dll 사용, typedef ]
---

# Flutter TIL - 22
---

## typedef
---

```dart
typedef HelloThere = Pointer<Utf8> Function(Pointer<Utf8> str);
```

`typedef`를 사용하면 특정 타입을 커스텁 할 수 있다.

단 문제점이 하나 있다. 함수 안에서는 사용못한다. 무조건 함수 밖에서 사용..

## dll 사용하기
---

dll 사용하려면 [ffi](https://pub.dev/packages/ffi)라는 패키지를 설치해야한다.
(dart:ffi랑은 다른 패키지다. 이게 있어야 `Pointer<Utf8>`사용 가능)

### 함수 불러오기

```dart
final DynamicLibrary dylib = DynamicLibrary.open('hello.dll');
```

위처럼 dll파일 읽어서 일단 dll파일 자체를 DynamicLibrary 타입의 변수에 저장하고
(이 때 `hello.dll`파일 위치는 root다.)

```dart
typedef HelloThereFunc = Pointer<Utf8> Function(Pointer<Utf8> str);
typedef HelloThere = Pointer<Utf8> Function(Pointer<Utf8> str);
```

편의를 위해서 2개의 함수형을 typedef로 정의합니다.

`HelloThereFunc`는 C 라이브러리의 native 함수이고
`HelloThere`는 Dart에서 사용하는 함수입니다.

타입이 `Pointer<Utf8>`인 이유는 Dart와 C의 문자열 나타내는 방법이 달라서 어쩔 수 없다고 하네요


```dart
final helloThere =
        dylib.lookupFunction<HelloThereFunc, HelloThere>('HelloThere');
```

이제 실질적으로 dll에 있는 함수를 import하는 방법입니다.

`dll`파일에 `DynamicLibrary`의 `lookupFunction<C_native_func, Dart_func>`을 사용하여서 `('함수이름')`이 함수를 호출하는 것입니다.

코드로 보자면

```dart
final 변수명 = dll이름.lookupFunction<C_네이티브함수_시그니처, Dart_함수_시그니처>(호출할 함수이름);
```

라고 정리할 수 있습니다.

### 사용법

```dart
final Pointer<Utf8> nName = 'Park'.toNativeUtf8();
final Pointer<Utf8> nRst = helloThere(nName);
calloc.free(nName);

Center(
  child: Text(nRst.toDartString()),
),
```

간단한 사용 예시 입니다.

먼저 인자값 선언을 합니다(nName). 스트링을 `toNativeUtf8()`로 변환해주고

함수 호출하고

다 쓴 값은 free 시켜줍니다.

nRst도 free시켜줘야하는데 지금 시키면 프로그램이 꺼집니다. 이에 대해서는 조금 더 공부해봐야 합니다.