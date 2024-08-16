---
sidebar_position: 2
---

# [Spring-Cloud] Spring Cloud MSA 구성
---

## 구성요소
---

`Service`, `API Gateway`, `Service Discovery`, `Config Service`

이런식으로 존재합니다.

`API Gateway`가 user에게 요청을 받아서 각각 Service에게 알맞게 다시 전달합니다.

`Service Discovery`는 `Spring Cloud Eureka`로 사용하는데 모니터링 서비스라고 생각하면 됩니다. 갖고 있는 서비스의 아이피, 포트를 등록하여 사용할 수 있습니다.

Eureka 서버라고 한다면 서비스는 Eureka Cliet가 됩니다.

환경변수를 제공해주는 `Config Server`도 존재합니다.
