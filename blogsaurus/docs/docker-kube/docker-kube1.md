---
sidebar_position: 1
---

# [Docker & Kubernetes] KOSTA 1
---

도커는 리눅스 명령어 집합이라 생각하면 된다.

## 이미지 만들기

아래의 명령어를 하면 layer가 쌓인다.

그래서 잦은 ADD와 RUN은 지양해야한다.

ADD를 많이하지말고 최대한 COPY를 하고 RUN할 때도 && 를 사용해서 여러 명령어 하기

1. `FROM` : base image 
2. `RUN` : 실행할 리눅스 명령어
3. `ADD` : 추가하는거 근데 COPY 쓰는게 좋음
4. `WORKDIR` : cd랑 같은거임
5. `ENTRYPOINT` : 지정한 명령어 실행, 근데 써진 명령어는 무조건 실행된다.
6. `CMD` : 지정한 명령어 실행, 근데 override된다.
7. `ENV` : 환경변수 세팅
8. `USER` : su같은거