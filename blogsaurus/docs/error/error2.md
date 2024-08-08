---
sidebar_position: 2
---

# [Flutter] Unable to find git in your PATH
---

## 해결방법

1. git을 설치했나, 환경변수 설정했나 확인해보기

2. 다 잘 돼있으면 관리자 권한으로 powershell 실행

3. 아래 명령어 입력

```bash
git config --global --add safe.directory '*'
```