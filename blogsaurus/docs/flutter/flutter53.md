---
sidebar_position: 53
---

# 53. [flutter] [Windows] 앱 이름 바꾸기
---

## Binary name
---

`windows/CMakeLists.txt`에 7번째 줄 쯤에

```txt
set(BINARY_NAME "app_name")
```

이 부분에서 app_name을 원하는 이름으로 수정할 수 있습니다. 이 부분은 `.exe` 이름을 설정하는 부분인데 보통 띄어쓰기를 하지 않는다고 합니다.

그럼 띄어쓰기 있는 exe파일은 뭔가요? 라는 질문을 하실 수 있는데 다른 회사들은 바로가기 파일을 띄어쓰기 하여서 표현하더라구요. 그렇게 하면 될 것 같습니다.

### 사용 예시

```txt
set(BINARY_NAME "NewName")
```

## 창 제목
---

`windows/runner/main.cpp`에서 30번째 줄 쯤에

```cpp
...
  FlutterWindow window(project);
  Win32Window::Point origin(10, 10);
  Win32Window::Size size(1280, 720);
  if (!window.Create(L"app_name", origin, size)) {
    return EXIT_FAILURE;
  }
  window.SetQuitOnClose(true);
...

```

이 부분에서 app_name을 원하는 이름으로 수정할 수 있습니다. 이 부분은 공백을 포함할 수 있습니다.

### 사용 예시

```cpp
...
  FlutterWindow window(project);
  Win32Window::Point origin(10, 10);
  Win32Window::Size size(1280, 720);
  if (!window.Create(L"New Name", origin, size)) {
    return EXIT_FAILURE;
  }
  window.SetQuitOnClose(true);
...

```


## 제품 정보
---

`windows/runner/Runner.rc`에서 90번째 줄 쯤에

```txt
BEGIN
    BLOCK "StringFileInfo"
    BEGIN
        BLOCK "040904e4"
        BEGIN
            VALUE "CompanyName", "io.github.kihyun1998" "\0"
            VALUE "FileDescription", "app_name" "\0"
            VALUE "FileVersion", VERSION_AS_STRING "\0"
            VALUE "InternalName", "app_name" "\0"
            VALUE "LegalCopyright", "Copyright (C) 2025 io.github.kihyun1998. All rights reserved." "\0"
            VALUE "OriginalFilename", "app_name.exe" "\0"
            VALUE "ProductName", "app_name" "\0"
            VALUE "ProductVersion", VERSION_AS_STRING "\0"
        END
    END
    BLOCK "VarFileInfo"
    BEGIN
        VALUE "Translation", 0x409, 1252
    END
END
```

`FileDescription`, `InternalName`, `OriginalFilename`, `ProductName`을 설정할 수 있습니다.


### FileDescription

`FileDescription`는 windows 파일 탐색기에서 파일 속성을 볼 때 설명필드에 표시되는 이름이라고 합니다.

### InternalName

`InternalName`는 내부 식별 목적으로 사용되는 이름입니다. 일반적으로 BINARY_NAME과 비슷하거나 동일하게 설정하지만 같을 필요는 없다고 합니다.

### OriginalFilename

`OriginalFilename`는 원본 파일의 이름을 나타냅니다. 이값은 반드시 실제 생성되는 `.exe` 파일의 이름과 일치해야합니다.

`{OriginalFilename}.exe` 형태가 됩니다.

### ProductName

`ProductName`는 제품의 전체 이름을 나타냅니다.
제어판의 프로그램 추가/제거 목록에 표시됩니다.

파일 속성 대화상자의 제품 이름 필드에 표시됩니다.


### 실제 사용 예시

Microsoft Word라면

```txt
FileDescription: "Microsoft Word"
InternalName: "WINWORD"
OriginalFilename: "WINWORD.EXE"
ProductName: "Microsoft Office"
```

로 한다고 합니다.


```txt
BEGIN
    BLOCK "StringFileInfo"
    BEGIN
        BLOCK "040904e4"
        BEGIN
            VALUE "CompanyName", "io.github.kihyun1998" "\0"
            VALUE "FileDescription", "Microsoft Word" "\0"
            VALUE "FileVersion", VERSION_AS_STRING "\0"
            VALUE "InternalName", "WINWORD" "\0"
            VALUE "LegalCopyright", "Copyright (C) 2025 io.github.kihyun1998. All rights reserved." "\0"
            VALUE "OriginalFilename", "WINWORD.EXE" "\0"
            VALUE "ProductName", "Microsoft Office" "\0"
            VALUE "ProductVersion", VERSION_AS_STRING "\0"
        END
    END
    BLOCK "VarFileInfo"
    BEGIN
        VALUE "Translation", 0x409, 1252
    END
END
```

그럼 이렇게 되겠죠?
