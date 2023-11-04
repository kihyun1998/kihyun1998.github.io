---
sidebar_position: 4
---

# 04. [BackEnd] DB Migration in golang

## DB Migration이란
---

### 마이그레이션이란?

한 운영환경으로부터 다른 운영환경으로 옮기는 작업이다. 하드웨어, 소프트웨어, 네트워크 등 넓은 범위에서 사용하는 개념이다.

### DB 마이그레이션이란?

코드를 작성한 클래스를 실제 데이터베이스에 테이블로 옮기는 과정

Models > Migrations > Database

2가지 방법이 있다.

1. 생성한 모델 클래스를 바로 db에 반영

2. 데이터 베이스로 적용되기 전 create만 먼저 해두는 것 such as commit


## 오늘 배울 내용
---

- golang으로 DB 마이그레이션 하기


## Golang migrate library 
---

### scoop 설치

```powershell
irm get.scoop.sh -outfile 'install.ps1'
iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
```


### 설치하기

1. 사용할 라이브러리는 [golang migrate](https://github.com/golang-migrate/migrate)다.

2. 설치를 위해 [cli document](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate)로 이동한다.

3. 윈도우는 아래 명령어 설치

```powershell
scoop install migrate
```

리눅스는 아래 명령어 설치

```bash
$ curl -L https://packagecloud.io/golang-migrate/migrate/gpgkey | apt-key add -
$ echo "deb https://packagecloud.io/golang-migrate/migrate/ubuntu/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/migrate.list
$ apt-get update
$ apt-get install -y migrate
```

4. 버전 확인

```bash
migrate -version
```


## Migrate 사용
---

### 도움말

```bash
migrate -help
```

### initialize schema

```bash
migrate create -ext sql -dir db/migration -seq init_schema
```

db/migration 폴더를 생성해줬었다. 그래서 위치할 폴더를 db/migration으로 할 것이다.

`-ext`는 확장자를 정하는 옵션이다.  
`-dir`은 마이그레이션이 위치할 폴더다.  
`-seq`는 버전을 시퀀스하게 하기 위한 옵션이다.  
`init_schema` 마이그레이션 이름이다.  


![Alt text](./img/4/image1.png)

사진처럼 2개의 마이그레이션 파일이 생성된다. up파일과 down파일이 생성됐다.

:::tip up & down

`UP 파일`은 old DB에서 새로운 내용을 New DB에 반영한 것이고  
`Down 파일`은 New DB에서 Up script로 반영한 것 중 Old DB로 revert한 것이다. 

`migrate up`을 하면 up 파일들이 prefix 버전에 따라 순차적으로 실행된다.  
```
old db >> 1 > 2 > 3 >> new db
```

`migrate down`을 하면 down 파일들이 prefix 버전에 따라 역순으로 실행된다. like 3 > 2 > 1  
```
new db >> 3 > 2 > 1 >> old db
```
:::

### 연습

1. simple bank sql을 up 파일로 옮기기

2. 그럼 up 파일엔 3개의 테이블을 만드는 sql이 들어있다. (`accounts`, `entries`, `transfers` )

3. down 파일엔 revert 하는 파일이기 때문에 만들어진 3개의 테이블을 drop하는 코드를 넣는다.

```sql
DROP TABLE IF EXISTS entries;
DROP TABLE IF EXISTS transfers;
DROP TABLE IF EXISTS accounts;
```

:::caution DROP TABLE 시 주의할 점
entries와 transfers 테이블이 accounts의 키를 외래키로 쓰고 있기 때문에 accounts 테이블보다 먼저 DROP 해줘야한다.
:::

4. postgres 켜져 있나 확인 

```bash
docker ps
```

5. 꺼져있으면 키고 켜져있으면 들어가기

```bash title='들어가기'
docker exec -it postgres15 /bin/sh
```

6. db 생성

```bash
createdb --username=root --owner=root <데이터베이스 이름>
```

:::tip 옵션 설명
`--username` : 접속 유저 이름  
`--owner` : 소유자 이름    
:::

7. db 접속

```bash
psql <데이터베이스 이름>
```

8. db 삭제

```bash
dropdb <데이터베이스 이름>
```

9. postgres shell에서 나오기

```bash
exit
```

### 근데 접속 안하고 가능


1. db 만들기

```bash
docker exec -it postgres15 createdb --username=<유저이름> --owner=<소유자이름> <데이터베이스 이름>
```

2. 접속하기

```bash
docker exec -it postgres15 psql -U <유저이름>  <데이터베이스 이름>
```


## Makefile 만들기
---

### .PHONY란

.PHONY를 사용함으로써 실제 파일이름과 충돌을 해결해줍니다.

![Alt text](./img/4/image2.png)

그리고 위처럼 설정한다면 서브루틴처럼 동작합니다.

### 형식

```yaml
postgres:
	docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root simple_bank

dropdb:
	docker exec -it postgres15 dropdb simple_bank

.PHONY: postgres createdb dropdb
```

위처럼 했을 때

```bash
make postgres
```

를 하면 docker가 실행이 되고

```bash
make createdb
```

를 하면 db가 생성이 되고

```bash
make dropdb
```

를 하면 db가 삭제됩니다.


## migration
---

### 명령어

```bash
migrate -path <경로> -database "<drivers 이름>://<유저이름>:<유저비밀번호>@<주소>:<포트>/<DB이름>?sslmode=disable" -verbose up
```

여기서 drivers 이름은 MySQL, mongodb 같은 것입니다.

`migrate -help` 하면 나옵니다.

`sslmode`: disable해야 에러가 안난다.

`-verbose`: 로그 보기 옵션

`up`: up한다는 뜻

위 명령어를 실행하면 마이그레이션이 잘 실행된다.

데이터베이스에는 4가지 테이블이 생성된다.

`accounts`, `entries`, `transfers`는 내가 추가한 테이블이고 자동으로 생성되는 테이블은 `schema_migrations`이다.

`schema_migrations`에는 migration 버전이 저장된다.


### Makefile에 저장

migrate up하는 것과 down하는 명령어를 Makefile에 설정합니다.

```yaml
postgres:
	docker run --name postgres15 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:15-alpine

createdb:
	docker exec -it postgres15 createdb --username=root --owner=root simple_bank

dropdb:
	docker exec -it postgres15 dropdb simple_bank

migrateup:
	migrate -path db/migration/ -database "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable" -verbose up

migratedown:
	migrate -path db/migration/ -database "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable" -verbose down

.PHONY: postgres createdb dropdb migrateup migratedown
```

현재 Makefile입니다.