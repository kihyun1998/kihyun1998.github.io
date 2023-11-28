---
sidebar_position: 34
---

# 34. [BackEnd] 세션을 위한 refresh token


## 현재 Access 토큰의 문제점
---

Access 토큰이 만료시간이 있는 이유는 탈취당했을 때를 대비한 그나마의 보안 대책입니다. 그렇기 때문에 세션을 오랫동안 유지할 수 없는 문제점이 있습니다. ( 토큰이 만료되면 다시 로그인해야 하기 때문 )


## refresh token 추가 절차

### 설정값 추가

- app.env에 refresh_token 시간 설정

- config.go에서 새로운 값 업데이트

### sessions 데이터베이스 생성

- db 마이그레이션

우선 파일 만들고

```bash
migrate create -ext sql -dir db/migration -seq <마이그레이션_이름>
```

작성해야한다.

```sql title='up파일'
CREATE TABLE "sessions" (
	"id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "refresh_token" varchar NOT NULL,
  "user_agent" varchar NOT NULL,
  "client_ip" varchar NOT NULL,
  "is_blocked" boolean NOT NULL,
	"expires_at" timestamptz NOT NULL,
  "created_at" timestamptz NOT	 NULL DEFAULT (now())
);

ALTER TABLE "sessions" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");
```

세션 테이블을 만듭니다.

```sql title='down파일'
DROP TABLE IF EXISTS "sessions";
```

- migrateup

```bash
make migrateup
```

한다.

### sessions 테이블 sql 작성

```sql
-- name: CreateSession :one
INSERT INTO sessions(
    id,
    username,
    refresh_token,
    user_agent,
    client_ip,
    is_blocked,
    expires_at
) VALUES (
    $1, $2, $3, $4, $5, $6, $7
) RETURNING *;

-- name: GetSession :one
SELECT * FROM sessions
WHERE id = $1 LIMIT 1;
```

작성 후

```bash
make sqlc
```

하면된다.


### mock store 업데이트

```bash
make mock
```

이제 refresh token을 사용할 수 있는 기반은 마련됐습니다.


## 로그인 시 적용하기
---

로그인 함수에서 access token 생성할 때 refresh token을 응답에 추가해줍니다.

LoginRequest에 추가합니다.


## refresh_toekn을 사용해서 access_token 재발급
---

refresh token을 사용하여 만료된 access token을 재발급해야 합니다.