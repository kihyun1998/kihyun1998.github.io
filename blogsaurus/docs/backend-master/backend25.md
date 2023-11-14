---
sidebar_position: 25
---

# 25. [BackEnd] 도커와 AWS 배포 - 2 ( go 컨테이너와 DB 컨테이너 통신하기 )

## go 컨테이너와 DB 컨테이너 통신하기
---

아이피가 맞지 않기 때문에 localhost로만 설정하면 통신이 되지 않습니다.

### 네트워크 확인

```bash
docker container inspect <대상>
```

확인해보면 db와 go 컨테이너는 다른 아이피에 있다는 것을 알 수 있습니다.

가장 쉬운 방법은 설정 파일에서 db 연결 명령어에서 localhost를 db 아이피로 바꾸는 것 입니다. 하지만 이미지 빌드를 바꿀 때마다 해야해서 비효율적입니다.

그래서 app.env의 DB_SOURCE를 -e 옵션을 통해서 주는 방법이 있습니다.

```bash
docker run --name simplebank -p 8080:8080 -e GIN_MODE=release -e DB_SOURCE=postgresql://root:secret@172.17.0.2:5432/simple_bank?sslmode=disable simplebank:latest
```

이렇게 하면 정상 작동합니다.


### 제일 좋은 방법

사실 위 방법도 불편합니다.

네트워크를 만들어서 서로 통신할 수 있게 해야합니다.

다시 컨테이너를 지우고 네트워크를 만듭니다.

```bash
docker network create bank-network
```

새로만든 네트워크에 컨테이너를 연결합니다.

```bash
docker network connect bank-network postgres15
```

그리고 simplebank 컨테이너를 만듭니다.

```bash
docker run --name simplebank --network bank-network -p 8080:8080 -e GIN_MODE
=release -e DB_SOURCE=postgresql://root:secret@postgres15:5432/simple_bank?sslmode=disable simplebank:latest
```

추가된 부분은 `--network`인데 이것은 어떤 네트워크에 이 컨테이너를 추가할지에 대한옵션이고 또 다른 부분은 이전에는 DB_SOURCE에서 postgres15의 아이피를 직접 넣었었다면 이제는 그냥 이름을 넣음으로써 알아서 찾을 수 있게 됩니다.