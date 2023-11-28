---
sidebar_position: 34
---

# 34. [BackEnd] dbdocs 사용

dbdocs는 어마어마합니다.

## dbdocs 시작하기
---

[이곳](https://dbdocs.io/docs)에서 `dbdocs`를 시작할 수 있습니다.

npm을 사용하여 설치할 수 있습니다.

```bash
npm install -g dbdocs
```


설치가 완료됩니다.


### dbml 파일 작성

sql 파일을 doc/db.dbml에 저장합니다. 이 내용은 dbdiagram.io에서 작성한 sql같은 그 코드를 복붙하는 것입니다.

(vscode에서 vscode-dbml 확장을 설치해주면 syntax 강조가 작동할 것임.)

```sql
Table users as U {
  username varchar [pk]
.
.
.
}
```

그리고 프로젝트 소개를 작성할 수 있습니다.

```sql
Project Ecommerce {
  database_type: 'PostgreSQL'
  Note: '''
    # Ecommerce Database
    **markdown content here**
  '''
}
```

마크다운으로 작성할 수 있습니다.


### 로그인

```bash
dbdocs login
```

으로 로그인할 수 있는데 email이나 github로 로그인할 수 있습니다.

### DB 문서 페이지 생성

```bash
dbdocs build <dbml파일_위치>
```

dbml파일 위치를 인자값으로 넣으면 생성됩니다.


### 페이지 비밀번호 생성

```bash
dbdocs password --set <password> --project <project name>
```

위처럼 적용할 수 있습니다.


### 페이지 제거

```bash
dbdocs remove <project name>
```

하면 페이지 지워집니다.


## dbml to sql
---

[이곳](https://dbml.dbdiagram.io/cli/#installation)에서 설치할 수 있습니다. 

```bash
npm install -g @dbml/cli
```

### 사용

```bash
dbml2sql --<데이터베이스_종류> -o <출력파일_경로> <dbml파일 경로>
```

끝.