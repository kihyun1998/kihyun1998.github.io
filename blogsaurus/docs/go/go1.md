---
sidebar_position: 1
---

# 01. [Go] 윈도우에서 리눅스 빌드 하기

1. Git Bash를 실행한다.

2. 빌드할 main.go 가 있는 폴더로 이동한다.

3. 명령어를 입력한다.

```bash title='git bash'
$ GOOS=linux go build -o [파일명] main.go
```

아니면 `set GOOS=linux` 하고 build 해도 된다.

:::warning 주의할 점
파워쉘에선 안된다.
:::