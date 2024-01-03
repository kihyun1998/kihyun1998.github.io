---
sidebar_position: 5
---

# [Gitlab] self host runner
---

[이곳에서](https://docs.gitlab.com/runner/install/linux-repository.html) 확인 가능

## 저장소 추가
---

```bash
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
```


## runner 설치
---

```bash
apt-get install gitlab-runner
```

## project runner 생성
---

runner를 사용할 project에서 ( github로 치면 repository )

`Settings` > `CI/CD` > `Runner` > `Expand` > `New Project runner`로 생성 

만들 때 태그를 지정할 수도 있다.

## runner 등록
---

```bash
gitlab-runner register
```

`url` > `https://gitlab.com`
`token` > `토큰값`
`name` > `이름 입력`
`executor` > `shell`

그럼 등록완료

등록이 완료됐다면 아까 project runner 생성한 곳에서 초록불이 들어올 것임.

## test ci
---

```yaml
stages:          
  - test

test:
    stage: test
    tags:
      - linux
    script:
      - make test
```

이렇게 테스트 코드를 작성할 수 있었다.

## tag시 ci하려면
---

```yaml
stages:          
  - test

test:
    stage: test
    tags:
      - linux
    script:
      - make test
    rules:
      - if: '$CI_COMMIT_TAG'
```

rules에서 `if: '$CI_COMMIT_TAG'`를 넣어주면 된다.


```yaml
    ...
    rules:
      - if: '$CI_COMMIT_TAG =~ /^V3/'
```

이렇게 하면 `V3`이 앞에 붙은 태그가 push될 때만 ci 발동한다.


```yaml
    rules:
    - if: '$CI_COMMIT_MESSAGE =~ /^\[test\]/'
```

커밋 메시지는 이런식으로 할 수 있다.

## build
---

```yaml
build:
  stage: build
  tags:
    - linux
  script:
    - make build
  rules:
    - if: '$CI_COMMIT_TAG =~ /^V3/'
```

build도 같다.

make build에서 특이한 것이 있다.

```yaml
test:
	go test -v -cover ./...

build:
	go build -o $(CI_COMMIT_TAG)_wadd

.PHONY: test build
```
build할 때 `$(CI_COMMIT_TAG)`가 반영이 안될 줄 알았는데 반영이 된다. 신기하다.

`$(CI_COMMIT_TAG)`는 gitlab에서 제공하는 변수라 안될 줄 알았다.


`$CI_PROJECT_DIR` : 프로젝트 폴더 경로


## 지금 상황
---

기존에는 여러 repository당 각각 ci를 했다.

이제는 여러 repository를 한 project안에 두어서 각각 build 된다.

근데 문제점이 하나있는게 job 하나가 끝나면 그곳의 환경이 초기화된다.

그래서 build하고 좀 옮겨 놓을 필요성이 있다. (build할 때도 job별로 나누는 것이 아닌 build할 땐 하나의 job에 할당해야 한다.)


### 해결방법

`artifacts`라는 것을 사용하면 된다.

```yaml
  artifacts:
    paths:
      - $CI_PROJECT_DIR
```

이렇게 사용하면 Gitlab의 `Build` > `Pipelines` > 해당 파이프라인에서 다운로드 받을 수 있다.

```yaml
  artifacts:
    paths:
      - $CI_PROJECT_DIR
    expire_in: 1 week
```

만료 시간 제한도 걸 수 있음

