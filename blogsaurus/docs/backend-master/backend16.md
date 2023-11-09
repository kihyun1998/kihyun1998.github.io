---
sidebar_position: 16
---

# 16. [BackEnd] simplebank + user


## 학습 목표
---

user 테이블 추가하기

## DB 설계
---

### Users 테이블 추가

```sql
Table users as U {
	username varchar [pk]
	hashed_password varchar [not null]
	full_name varchar [not null]
	email varchar [unique, not null]
	password_last_changed_at timestamptz [not null, default: '0001-01-01 00:00:00Z']
	created_at timestamptz [not null, default: `now()`]
}
```

:::tip field 설명
`username` : 유저이름 - 기본키입니다.
`hashed_password` : 해쉬된 비밀번호
`full_name` : 풀네임
`email` : 이메일 - 같은 이메일을 가진 유저는 존재할 수 없습니다.
`password_last_changed_at` : 마지막 비밀번호 변경시간 - default 값이 저런 이유는 golang에서 시간값 zero value가 저렇다고 합니다.
`created_at` : 생성시간, 자동생성 됩니다.
:::

### accounts 테이블 제약조건 변경

```sql
Table accounts as A{
	id bigserial [pk]
	owner varchar [ref: > U.username, not null]
	balance bigint [not null]
	currency varchar [not null]
	created_at timestamptz [not null, default: `now()`]

	Indexes{
		owner
		(owner, currency) [unique]
	}
}
```

:::tip 변경된 제약조건
`owner` : username을 외래키로 가져온다.

`(owner, currency)` 복합 인덱스 : 한 유저당 여러 계정을 소지할 수 있지만 모두 다른 통화를 갖고 있어야 합니다. USD 통화인 계정 2개를 소지할 순 없도록 하는 제약조건
:::


## 테이블 생성하기

기존 sql 파일에 붙여넣는 것이 아닌 새 마이그레이션을 생성하는게 좋다. 다시 돌아갈수도 있기 때문

```bash
migrate create -ext sql -dir db/migration -seq add_users
```

새로운 migration 만들고

```sql
CREATE TABLE "users" (
  "username" varchar PRIMARY KEY,
  "hashed_password" varchar NOT NULL,
  "full_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password_last_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01 00:00:00Z',
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

ALTER TABLE "accounts" ADD FOREIGN KEY ("owner") REFERENCES "users" ("username");

-- CREATE UNIQUE INDEX ON "accounts" ("owner", "currency");

ALTER TABLE "accounts" ADD CONSTRAINT "owner_currency_key" UNIQUE ("owner","currency");
```

이렇게 sql문을 넣을 수 있습니다.


```sql
CREATE UNIQUE INDEX ON "accounts" ("owner", "currency");
```

이 쿼리는 unique 복합 인덱스를 생성하는 쿼리고

```sql
ALTER TABLE "accounts" ADD CONSTRAINT "owner_currency_key" UNIQUE ("owner","currency");
```

이 쿼리는 고유 제약조건을 추가하는 쿼리입니다. 위 제약조건을 추가하면 CREATE.. 한 unique 복합 인덱스가 자동으로 생성됩니다. 


## 에러
---

하지만 migrate up한다면 에러가 날 것입니다. 왜냐하면 이미 owner 필드에는 값이 들어가 있기에 외래키 제약조건을 위반합니다.

이를 해결하려면 기존 데이터를 초기화해야합니다. 실제 서비스 중에는 이럴 수 없지만 이런 상황은 서비스 시작 이전에 나타날 것이라는 가정이 있다고 합니다.

## 초기화
---

1. migrate up 했다면 dirty 가 true 일 것입니다.

2. dirty를 false로 바꾸고 migrate down

3. 다시 migrate up하면 끝


## migration down 작성하기
---

migration up이 잘 됐다면 down파일을 작성해야 합니다.

작성 방법은 up한 것에서 반대로 가면 됩니다.

먼저 unique 제약조건을 삭제합니다.

그리고 외래키 제약조건 삭제하고

users 테이블을 drop합니다.


![Alt text](./img/1-30/16/image1.png)

외래키 제약조건 이름은 위처럼 table plus에서 해당 테이블의 info에서 찾을 수 있습니다.

```sql
ALTER TABLE IF EXISTS "accounts" DROP CONSTRAINT IF EXISTS "owner_currency_key";

ALTER TABLE IF EXISTS "accounts" DROP CONSTRAINT IF EXISTS "accounts_owner_fkey";

DROP TABLE IF EXISTS "users";
```


## migration
---

```yaml

migrateup_onestep:
	migrate -path db/migration/ -database "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable" -verbose up 1

migratedown_onestep:
	migrate -path db/migration/ -database "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable" -verbose down 1

```

migration을 한단계만 up하고 down하는 make command를 추가합니다. 기존에서 그냥 맨 뒤에 1만 붙이면 됩니다.

## 배운 내용
---

- db에 테이블 추가 방법 배움

- 외래키와 고유 제약 조건 추가 방법에 대해 배움

- 마이그레이션 한 단계 씩 하는 방법 배움


