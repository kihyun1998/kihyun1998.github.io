---
sidebar_position: 3
---

# [Gitlab] CI/CD 실습 2
---

## Continuous Deploy
---

### ssh-key 설정

ssh-keygen을 사용하여 키를 생성합니다.

-i 옵션을 주어 키를 지정합니다.

윈도우에서는

```bash
ssh -i C:\\Users\\User\\.ssh\\custom_key user@<아이피>
```

리눅스/MAC OS에서는

```bash
ssh -i ~/.ssh/custom_key user@<아이피>
```

그리고 대상 우분투 서버에 ~/.ssh/authorized_keys에 public key를 입력한다.

### docker 설치

docker를 사용할 것이기에 대상 서버에 docker를 설치합니다.

```bash
apt install docker.io
```

### 변수 추가

gitlab ci/cd settings에서 SSH_KEY 변수를 file로 추가합니다.

이 때 변수 값은 private키를 넣으면 되고 값에 마지막에 엔터를 쳐서 마지막 빈 한 줄을 만들어줘야한다고 하네요.


### docker 접속 및 실행

```yaml
stages:
  ...
  - deploy

deploy:
  stage: deploy
  script: ssh -o StrictHostKeyChecking=no -i $SSH_KEY root@192.168.135.85 "
    docker login -u $LOGIN_USER -p $LOGIN_PASS &&
    docker ps -aq | xargs docker stop | xargs docker rm &&
    docker run -d -p 5000:5000 $IMAGE_NAME:$IMAGE_TAG
  "
```

deploy stage를 만들고 stage를 deploy로 할당합니다.

script로는 먼저 SSH_KEY를 사용해서 ssh접속을 하는데 `-o StrictHostKeyChecking=no` 옵션을 사용해서 접속 시 수동 확인을 꺼줍니다.

다음은 login을 진행하고

다음은 혹시 불필요한 docker container가 켜져있는지 확인 후 종료 작업을 합니다.

다음은 배포할 도커 이미지를 실행합니다.

### 파일 권한 

```yaml
...
  before_script:
    - chmod 400 $SSH_KEY
```

파일 권한을 위해 SSH_KEY의 권한을 400으로 설정합니다.


## 근데 안된다.
---

배포하려는 서버 IP가 로컬이라 안됩니다.

self-hosted해야합니다.