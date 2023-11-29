---
sidebar_position: 4
---

# [gRPC] 5. 다시 gRPC에 대하여

## 작동 방식

1. API 데이터와 구조 정의  
    proto buffer를 사용해서 정의


2. gRPC stub 생성  
    protoc를 사용해서 gRPC 코드 생성

3. 서버 구현

4. 클라이언트 사용

## HTTP Json보다 좋은점
---

1. 빠르다. HTTP2 전송이고 바이너리 형식으로 전송하기 때문에, 헤더 압축도 함.

2. api contract가 강함

3. 코드 자동 생성

## gRPC gateway
---

서버 코드를 한번 작성하고 gRPC와 HTTP JSON 동시에 처리할 수 있는 모델

proto buffer plugin이라고 합니다.

![Alt text](./img/image5.png)


gRPC client는 gRPC와 연결되어 바이너리 응답받고 HTTP Client는 Gateway와 연결되어 JSON 응답을 받습니다.

unary에서만 작동한다. streaming 방식으로 사용하려면 gateway를 프록시 서버로 올려야한다.



## proto 파일 작성

```protobuf
syntax="proto3";

option go_package="simplebank/pb";
import "google/protobuf/timestamp.proto";

message User{
    string username=1;
    string full_name=2;
    string email=3;
    google.protobuf.Timestamp password_changed_at=4;
    google.protobuf.Timestamp created_at=5;
}
```

이런식으로 작성하는데 `message User`에서 숫자는 1~15까지는 1byte 16이상부터는 2byte가 사용된다.

user.proto는 user에 대한 구조를 정의하는 것입니다.

추가로 `CreateUserRequest`, `CreateUserResponse`를 만들 수 있는데 이도 API 요청과 응답 데이터 구조를 정의하는 것입니다.

실제적인 서비스 코드는 다른 파일에 작성합니다.


```protobuf
service Simplebank{
    rpc CreateUser (CreateUserRequest) returns (CreateUserResponse){}
    rpc LoginUser (LoginUserRequest) returns (LoginUserResponse){}
} 
```

서비스는 위와 같이 정의할 수 있습니다.

## go 언어로 생성

protoc를 사용해서 go언어로 변환합니다.

```bash
protoc --proto_path=proto --go_out=pb --go_opt=paths=source_relative --go-grpc_out=pb --go-grpc_opt=paths=source_relative proto/*.proto
```

공식 문서에 나오면 나오긴 하는데요 자세히 설명해보겠습니다.


`--proto_path`는 proto 경로에 대한 정의입니다.

`--go_out`와 `--go-grpc_out`은 go 파일이 나올 경로 입니다.

`--go_opt=paths=source_relative`와 `--go-grpc_opt=paths=source_relative`는 상대경로를 사용하겠다는 뜻입니다. 이 설정을 하지 않으면 모든 경로를 절대경로를 입력해야 합니다.

마지막 `proto/*.proto`는 어떤 파일들을 go로 만들지 정하는 것입니다.

```bash
del /s ./pb/*.go
```

make 파일에 파일 삭제 기능까지 넣으면 잘 작동할 것입니다.

