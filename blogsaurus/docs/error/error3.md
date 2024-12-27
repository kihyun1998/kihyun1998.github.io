---
sidebar_position: 3
---

# [Docker] Error response from daemon: Ports are not available: ...
---

```bash
Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3000 -> 0.0.0.0:0: listen tcp 0.0.0.0:3000: bind: An attempt was made to access a socket in a way forbidden by its access permissions.
```

## 해결방법

1. PowerShell을 관리자모드로 실행

2. 다음 명령어 실행

```bash
net stop winnat
net start winnat
```