---
sidebar_position: 3
---

# [gRPC] 3. gRPC 실습 - 2

## 학습 목표
---

1. 열거형, 메시지 등..



## 메모리와 관련된 enum 타입

```protobuf
syntax = "proto3";

option go_package = "study-grpc/proto";

message Memory{
    enum Unit{
        UNKNOW = 0;
        BIT=1;
        BYTE=2;
        KILOBYTE=3;
        MEGABYTE=4;
        GIGABYTE=5;
        TERABYTE=6;
    }

    uint64 value = 1;
    Unit unit=2;
}
```

그리고 package를 이용하면 같은 packe로 설정할 수 있다. 근데 이미 go_package를 이용하고 있어서 안해도된다.


```protobuf
syntax = "proto3";

import "processor_message.proto";
import "memory_message.proto";
import "storage_message.proto";
import "keyboard_message.proto";
import "screen_message.proto";
import "google/protobuf/timestamp.proto";

option go_package = "study-grpc/pb";

message Laptop{
    string id =1;
    string brand=2;
    string name=3;
    CPU cpu =4;
    Memory ram=5;
    repeated GPU gpus=6;
    repeated Storage storages=7;
    Screen screen=8;
    Keyboard keyboard=9;
    oneof weigh{
        double weight_kg=10;
        double weight_lb=11;
    }
    double price_usd=12;
    uint32 release_year=13;
    google.protobuf.Timestamp updated_at=14;
}
```

`repeated` : 반복하는 값 !
`oneof` : 마지막으로 할당된 필드만 값을 넣는다.