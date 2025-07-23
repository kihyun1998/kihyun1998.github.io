---
sidebar_position: 13
---

#  12. [etc] windows에서 go dll-32비트로 빌드
---

```bat
set DLL32_NAME=hash-validator32.dll


:build-dll32
echo Start build %DLL32_NAME%...
set GOOS=windows
set GOARCH=386
set CGO_ENABLED=1
set CC=C:\mingw32\bin\gcc.exe
go build -buildmode=c-shared -o %DLL32_NAME% ./lib/main/
if %ERRORLEVEL% neq 0 (
    echo Build failed for %DLL32_NAME%
    exit /b %ERRORLEVEL%
)
echo Complete build %DLL32_NAME%...

```
mingw32를 설치하고 

위처럼 set CC=..32\gcc.exe 해주면 가능
