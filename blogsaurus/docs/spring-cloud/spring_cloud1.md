---
sidebar_position: 1
---

# [Spring-Cloud] MSA란
---

## MSA란
---

MSA는 Micro Service Architecture 입니다.

서비스 구축 방식 중 하나입니다.


### 장점

1. 여러 언어, framework로 구축할 수 있다.

2. 서비스 별로 scale-up, scale-out 하기가 쉽다. 그리고 서비스 하나가 종료되어도 다른 서비스들은 종료되지 않음.

3. 그래서 부분적 업데이트를 비교적 쉽게 할 수 있다.

### 단점

1. 복잡도가 너무 크다.

2. 초기 구성이 좀 어렵다.

3. 하나의 서비스 의존성이 클 수 있다.

### 필수 구성요소

- 서비스 서버
- 모니터링 서버
- API Gateway
- 변수 관리 서버 (Config Server)