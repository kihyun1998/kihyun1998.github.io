---
sidebar_position: 28
---

# 28. [BackEnd] AWS RDS

## RDS 사용하기
---

### 만들기

RDS > Databases > Create database > Standard create > DB 엔진 선택 및 버전 선택 > 템플릿(프리 티어) > DB 인스턴스 이름, 마스터 이름 설정 > 암호 자동 생성 체크 > 스토리지 자동 조정 비활성화 > 퍼블릭 액세스 yes > VPC 보안 그룹 새로 생성  > 추가구성(초기 데이터베이스 이름 작성) > 데이터베이스 생성

보안 그룹에서 허용 아이피를 anywhere로 한다.


### migrate 하기

```bash
migrateup:
	migrate -path db/migration/ -database "postgresql://root:Password@URL:5432/simple_bank" -verbose up
```

make파일을 위처럼 설정했다.

처음에 안됐는데 그 이유는 sslmode=disabled여서 안됐었다.