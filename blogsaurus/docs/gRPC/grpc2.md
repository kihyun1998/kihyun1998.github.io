---
sidebar_position: 2
---

# [gRPC] 2. gRPC 실습

## 학습 목표
---

1. protobuf 작성 방법
    - 기본적인 타입에 대한 학습
    - 주석 작성

2. VS Code 플러그인(protobuf)

3. Go로 컴파일할 수 있는 protoc 설치


## 시작
---

VS Code Extension을 설치합니다.

1. Clang-Format

2. vscode-proto3


## proto 파일 작성법
---

```protobuf
syntax = "proto3";
```

가장 위에 proto 버전을 작성합니다.


## pb 만들기
---

### protoc 다운

[여기](https://github.com/protocolbuffers/protobuf/releases)에서 `protoc`를 다운 받는다.

그리고 bin폴더를 시스템 환경변수에 등록한다.


### go get

```bash
go get -u google.golang.org/protobuf/cmd/protoc-gen-go
go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc
```

### proto 작성
---

```protobuf
syntax = "proto3";

package helloworld;

option go_package = "study-grpc/proto/helloworld";

service Greeter {
    rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
    string name = 1;
}

message HelloReply {
    string message = 1;
}
```

이렇게 package를 지정할 수 있습니다.

### pb 만들기
---

```bash
protoc --go_out=../pb --go_opt=paths=source_relative --go-grpc_out=../pb --go-grpc_opt=paths=source_relative helloworld.proto
```

이렇게 할 수 있는데 helloworld.proto 파일이 study/proto 밑에 있다면

protoc를 하려면 study/proto로 가야합니다.


### 강의의 경우
---

```protobuf title='processor_message.proto'
syntax = "proto3";

option go_package = "study-grpc/proto";

message CPU{
    // Brand of the CPU
    string brand = 1;
    // Name of the Name
    string name = 2;
    uint32 number_cores = 3;
    uint32 number_threads = 4;
    double min_ghz = 5;
    double max_ghz = 6;
}
```

```bash
protoc --go_out=../pb --go_opt=paths=source_relative --go-grpc_out=../pb --go-grpc_opt=paths=source_relative processor_message.proto
```

요로케하면 된다.

여담으로 

```bash
protoc --go_out=../pb --go_opt=paths=source_relative --go-grpc_out=../pb --go-grpc_opt=paths=source_relative *
```

*을 주면 모든 파일 다 하게 된다.


여기서 궁금한거

`--go_out` 옵션은 pb파일 출력하는 곳인건 알겠다.

`--go_opt=paths=source_relative`는 뭐냐? 상대경로 기반으로 저장하겠다는 선언이다.