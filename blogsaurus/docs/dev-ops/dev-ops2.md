---
sidebar_position: 2
---

# [Gitlab] CI/CD 실습
---

파이썬 데모 앱을 통해서 `실행 테스트`와 `docker Image build`, `docker repository에 push`, `서버에 배포`까지 따라 해보겠습니다.

## CI/CD
---

지속적인 integration과 지속적인 deployment 또는 delivary이다.

테스트, 빌드, 릴리즈를 자동화하는 것이다.

cd에는 또 종류가 많은데(개발용, 상품용 등..) 일단 간단한 CI/CD를 경험해보려 한다.

## gitlab CI/CD 작동방식
---

gitlab instance 또는 gitlab server가 있는데 gitlab의 runner에게 job을 던진다. 모두 gitlab이 제공한다고 한다.

근데 자체 설정 기능도 사용할 수 있음.


## push/pull 하기
---

### 글로벌 설정

```bash
git config --global user.name "<이름>"
git config --global user.email "<이메일>"
```

### create new repo (clone)

```bash
git clone https://gitlab.com/<조직명>/<프로젝트명>.git
cd <프로젝트명>
git switch --create main
touch README.md
git add README.md
git commit -m "add README"
git push --set-upstream origin main
```

### create new repo.. (upload)

```bash
cd <폴더명>
git init --initial-branch=main
git remote add origin https://gitlab.com/<조직명>/<프로젝트명>.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin main
```

```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/<조직명>/<프로젝트명>.git
git push --set-upstream origin --all
git push --set-upstream origin --tags
```


## Gitlab CI/CD pipeline
---

### 테스트 CI

yaml파일로 구성할 수 있다. like Github Actions

`/` root path에 `.gitlab-ci.yml`로 만든다.

근데 완전 `yaml`은 아니고 `yml`파일이다.

```yaml
run_tests:
  script:
    - make test
```

이렇게 하면 될 줄 알았는데 이를 성공시키기 위해서는 `make`가 가능해야 하고 `pip`가 가능해야하고 `python`이 가능해야 합니다. 그리고 윈도우인지 리눅스인지도 알아야하는데 이 작업은 `gitlab`러너에서 실행됩니다. 리눅스도 윈도우도 아닌 `shell Executor`라는 곳에서 실행된다고 하네요.
이곳에서 도커 컨테이너를 실행하는 방식입니다. 

Gitlab의 runner는 Ruby 이미지를 사용합니다. 그렇지만 지금 하는 실습에서는 python 이미지가 필요합니다. 이미지르 덮어쓸 수 있다고 하네요.

여러 이미지를 사용해야 하는 경우에는 runner를 나눠서 사용할 수 있겠네요

```yaml
test_go:
  stage: test
  image: golang:latest
  script:
    - go test 

test_node:
  stage: test
  image: node:latest
  before_script:
    - npm install
  script:
    - npm test
```

이런 방식으로 할 수 있다고 합니다.

여기서 처음보는게 나오는데 `stage`랑 `before_script`가 있습니다.

`stage`는 지금 모르겠고 `before_script`는 `script` 전에 필수 실행 script느낌이네요. `after_script`도 있어요. `after_script`는 실패해도 실행할 수 있게 해주기도 한다네요.


```yaml
run_tests:
  image: python:3.12-bookworm
  before_script:
    - apt-get update && apt-get install make
  script:
    - make test
```

실제로는 이렇게 작성했습니다.

pyhton3.12의 bookworm 버전을 사용했고 before_script로 make를 사용할 수 있도록 했습니다.

## Build/Push Docker Image 
---

docker private repository에 push하는 방식이라고 합니다.

### login docker

`Settings` > `CI/CD`에는 다양한 추가 설정들이 모여 있습니다.

로그인 정보를 CI/CD 파일에 직접 저장하는 것은 보안 위험이기에 변수를 만들어서 저장하고 불러오는 것이 좋습니다. 


```yaml
build_image:
  before_script:
    - docker login -u $LOGIN_USER -p $LOGIN_PASS
  script:
    - docker build -t $IMAGE_NAME:$IMAGE_TAG .
    - docker push $IMAGE_NAME:$IMAGE_TAG
```

위처럼 before_script로 login 하고 build, push 할 수 있습니다.

### variables

```yaml
variables:
  IMAGE_NAME: parkkihyun/demo-test
  IMAGE_TAG: python-app-1.0.0
```

사이트에서 설정하는 것 말고 파일에서 직접 지정할 수 있습니다.

```yaml
build_image:
  image: docker:24.0.7-git
  services:
    - docker:24.0.7-dind
  variables:
    DOCKER_TLS_CERTDIR: '/certs'
  before_script:
    - docker login -u $LOGIN_USER -p $LOGIN_PASS
  script:
    - docker build -t $IMAGE_NAME:$IMAGE_TAG .
    - docker push $IMAGE_NAME:$IMAGE_TAG
```

마지막으로 로그인을 위해서 services를 옮겨야 합니다.

docker client에서 docker demon으로 옮겨야한다는데 `services`로 정의할 수 있다고 하는데 이 부분은 아직 잘 모르겠습니다.

docker build를 하기 위해서는 Dockerfile도 필요합니다. 예시는 아래와 같습니다.

```dockerfile
FROM python:3.12-bookworm

LABEL Name="Python Flask Demo App" Version=1.0.0
LABEL org.opencontainers.image.source = "https://github.com/benc-uk/python-demoapp"

ARG srcDir=src
WORKDIR /app
COPY $srcDir/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY $srcDir/run.py .
COPY $srcDir/app ./app

EXPOSE 5000

CMD ["gunicorn", "-b", "0.0.0.0:5000", "run:app"]

```


## stage
---

위에 test ci와 build ci를 작성해봤는데 이렇게 작성하면 병렬로 실행됩니다.

test 먼저 후 build를 하고 싶다면 `stage`라는 것을 사용해야 합니다.

```yaml
stages:
  - test
  - build
```

먼저 이렇게 stage 종류를 선언합니다.

```yaml
run_tests:
  stage: test
  ...

build_image:
  stage: build
  ...
```

이런 식으로 각 작업이 어떤 스테이지에 해당하는지 정의하여 사용할 수 있습니다.

`CD` 즉 배포 자동화는 다음 글에 정리할게요