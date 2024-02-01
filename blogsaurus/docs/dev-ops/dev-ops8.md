---
sidebar_position: 7
---

# [Docker] Github Action을 위한 Dockerfile 작성
---

## Dockerfile 작성
---

Github Action에서 사용할 도커를 push하기 위한 docker 파일을 작성합니다.

```dockerfile
# 이미지 선택
FROM debian:buster-slim

# 패키지 설치
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates curl netbase git make && \
    rm -rf /var/lib/apt/lists/*

# Go 설치
ENV GO_VERSION go1.21.6
RUN curl -L https://golang.org/dl/${GO_VERSION}.linux-amd64.tar.gz | tar -C /usr/local -xz

# 환경 변수 추가
ENV PATH="/usr/local/go/bin:${PATH}"

# 작업 디렉토리 정의
WORKDIR /app

# 기본 명령어 설정
CMD ["bash"]
```

별거 없고 golang이 설치된 리눅스 이미지 입니다.

## build & push
---

도커 파일을 빌드하고 푸시하려합니다.

저는 윈도우여서 wsl을 사용하였습니다.

### build

```bash
docker build -t [my-docker-hub-username]/[my-image]:[tag] .
```

### login

```bash
docker login --username [my-docker-hub-username]
```

### push

```bash
docker push [my-docker-hub-username]/[my-image]:[tag]
```

이미지를 private으로 만들고 싶다면 docker-hub 홈페이지에서 할 수 있습니다.