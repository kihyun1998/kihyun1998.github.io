---
sidebar_position: 52
---

# 52. [flutter] [Windows] Flutter windows plugin 개발 시 디버깅 방법
---

Flutter windows plugin 개발할 때 c++ 코드를 사용하는 경우가 있습니다.

`DebugView`를 사용해서 디버깅할 수 있습니다.

## 다운로드

[DebugView 다운로드 링크](https://learn.microsoft.com/ko-kr/sysinternals/downloads/debugview)

이 링크를 들어가서 `DebugView`를 다운받을 수 있습니다.


### 사용법

1. 관리자 권한으로 실행
2. Capture -> Capture Global Win32 체크
3. OutputDebugStringW을 실시간으로 확인


## CPP 코드

```cpp
OutputDebugStringW(L"[DEBUG] I am debug.\n");
```

