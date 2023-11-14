---
sidebar_position: 26
---

# 26. [BackEnd] docker compose 사용

docker compose는 단일 서버에서 여러 개의 컨테이너를 하나의 서비스로 정의해 컨테이너 묶음으로 관리할 수 있는 도구입니다.

## docker compose 작성하기
---

docker-compose.yaml 파일을 생성합니다.

[이 곳에서](https://docs.docker.com/compose/compose-file/) 다양한 문서를 볼 수 있습니다.



`service`: 서비스 밑에 다양한태그들로 작성합니다.

`image`: 이미지

`environment`: 환경변수

```yaml
services:
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=root
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=simple_bank
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DB_SOURCE=postgresql://root:secret@postgres:5432/simple_bank?sslmode=disable
```

위처럼 작성할 수 있고 주의할 점은 DB_SOURCE에서 아이피 대신 postgres를 사용해서 했습니다.


## 실행하기
---

```bash
docker compose up 
```

하면 됩니다.

## db migrate 추가하기
---


### start.sh

```bash
#!/bin/sh

set -e

echo "**run db migration**"
/app/migrate -path /app/migration -database "$DB_SOURCE" -verbose up

echo "***start the app***"
exec "$@"
```

알파인 리눅스라 bash가 없어서 /bin/sh사용해야 합니다.

set -e는 실행 실패 시 쉘스크립트 종료 하는 구문입니다.

/app/migrate .. 하는 부분이 migrate up 하는 부분이고

exec "$@"는 들어온 매개변수를 실행하는 역할입니다.

여담으로 `exec "$@"`가 아닌 `echo "$@"`로 작성해서 1시간을 버렸습니다.


### Dockerfile

```bash
# Build stage
FROM golang:1.21-alpine3.18 AS builder
WORKDIR /app
COPY . .
RUN go build -o main main.go
RUN apk add curl
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.16.2/migrate.linux-amd64.tar.gz | tar xvz

# Run stage
FROM alpine:3.18
WORKDIR /app
COPY --from=builder /app/main .
COPY --from=builder /app/migrate ./migrate
COPY app.env .
COPY start.sh .
COPY db/migration ./migration

EXPOSE 8080
CMD ["/app/main"]
ENTRYPOINT ["/app/start.sh"]
```

도커 파일도 바뀐 부분이 있습니다. 


기본적으로 alpine 리눅스에는 curl이 설치되어있지 않아서 apk add curl해야합니다.

migrate 설치하고 옮기고.. 마이그레이션 파일들도 옮기고 ENTRYPOINT로 start.sh을 실행할 수 있는데 이러면 CMD는 그저 start.sh로 매개변수로 넣는 역할로 변합니다. (ENTRYPOINT가 있다면)

## 다시 docker-compose 적용하려면
---

```bash
docker compose down 
```

해야 한다. 그러면 docker compose up으로 생긴 것들 삭제함

## 의존성 추가
---

postgres db가 올라오는 시간이 걸리기때문에 migrate 실패함.

이에 대한 의존성 추가하는 방법이 있다.

먼저 `wait-for` 스크립트를 다운로드 한다.

[여기](https://github.com/eficode/wait-for)에서 다운로드하면 된다.

그리고 당연히 프로젝트 root path로 옮긴다.

### Dockerfile

```bash
# Build stage
FROM golang:1.21-alpine3.18 AS builder
WORKDIR /app
COPY . .
RUN go build -o main main.go
RUN apk add curl
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.16.2/migrate.linux-amd64.tar.gz | tar xvz

# Run stage
FROM alpine:3.18
WORKDIR /app
COPY --from=builder /app/main .
COPY --from=builder /app/migrate ./migrate
COPY app.env .
COPY start.sh .
COPY wait-for.sh .
COPY db/migration ./migration

EXPOSE 8080
CMD ["/app/main"]
ENTRYPOINT ["/app/start.sh"]
```

그리고 복사를 하구요

### docker-compose.yaml

```yaml
services:
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=root
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=simple_bank
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DB_SOURCE=postgresql://root:secret@postgres:5432/simple_bank?sslmode=disable
    depends_on:
      - postgres
    entrypoint: ["/app/wait-for.sh","postgres:5432","--","/app/start.sh"]
    command: ["/app/main"]
```

여기에서 entrypoint를 넣었기 때문에 dockerfile의 entrypoint는 무시가되어서 command로 /app/main을 추가해야한다고 합니다.


### 하지만

```bash title='docker-compose.yaml'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=root
      - POSTGRES_PASSWORD=secret
      - POSTGRES_DB=simple_bank
  api:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DB_SOURCE=postgresql://root:secret@postgres:5432/simple_bank?sslmode=disable
    depends_on:
      - postgres
    links:
      - postgres
```

```bash title='Dockerfile'
# Build stage
FROM golang:1.21-alpine3.18 AS builder
WORKDIR /app
COPY . .
RUN go build -o main main.go
RUN apk add curl
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.16.2/migrate.linux-amd64.tar.gz | tar xvz

# Run stage
FROM alpine:3.18
WORKDIR /app
COPY --from=builder /app/main .
COPY --from=builder /app/migrate ./migrate
COPY app.env .
COPY start.sh .
COPY wait-for.sh .
COPY db/migration ./migration

EXPOSE 8080
CMD ["/app/main"]
ENTRYPOINT ["/app/wait-for.sh", "postgres:5432", "--", "/app/start.sh"]
```

이렇게 해도 되는거 같아요