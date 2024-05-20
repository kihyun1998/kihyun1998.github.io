---
sidebar_position: 2
---

# [Docker & Kubernetes] KOSTA 2
---

도커는 프로세스를 가상화하는 것인데, 컨테이너라는 것으로 가상화한다.

## 내보내기 가져오기

export, import
save, laod

## 도커 관리
---

### 안쓰는거 지우기

```bash
docker system prune
```

### 이미지 지우기

```bash
docker image rm -f $(docker image ls -aq)
```

### volume 지우기

```bash
docker volume rm $(docker volume ls -q)
```

## 도커 container
---

