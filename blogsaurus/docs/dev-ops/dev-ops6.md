---
sidebar_position: 6
---

# [Gitlab] yml파일 기록
---

## CI tar로 말아서 실행파일 삭제까지
---

```yaml
stages:          
  - test
  - build

🔥 test-add:
  stage: test
  tags:
    - linux
  script:
    - make test-add
  rules:
    - if: '$CI_COMMIT_TAG =~ /^V3/'

🔥 test-sub:
  stage: test
  tags:
    - linux
  script:
    - make test-sub
  rules:
    - if: '$CI_COMMIT_TAG =~ /^V3/'

🛠️ build:
  stage: build
  tags:
    - linux
  script:
    - make build-add
    - make build-sub
    - tar -cvf CAL_$CI_COMMIT_TAG.tar $CI_COMMIT_TAG*
    - echo CAL_$CI_COMMIT_TAG.tar
  after_script:
    - find . ! -name CAL_$CI_COMMIT_TAG.tar -mindepth 1 -delete
  rules:
    - if: '$CI_COMMIT_TAG =~ /^V3/'
```

## CI 삭제 로직 후 scp로 옮기기
---

### scp 통신하기 위한 사전 작업

1. Ubuntu(보내려는 서버) RedHat(받는 서버)

2. Ubuntu에서 ssh-key를 발급받고 개인키를 gitlab에 저장

3. RedHat에 Ubuntu의 ssh pub키 저장 (~/.ssh/authorized_keys)

4. permission 문제 해결해줘야함 chmod 400

5. CI/CD Variables에서 원래는 protect 변수로 해도 되는데 안되서 일단 해제했음