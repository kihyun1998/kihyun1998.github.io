---
sidebar_position: 3
---

# [React + Spring + Kube] KOSTA 3
---

## 쿠버네티스
---

미니 쿠베를 사용해본다.

`kubectl`과 `minikube`를 설치한다.

[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)

[minikube](https://minikube.sigs.k8s.io/docs/start/)

### 시작하기
---

docker를 띄운 환경에서

```bash
minikube start --driver=docker
```

### 확인 명령어

- 버전 확인

```bash
kubectl version
```

- 클라이언트 버전 확인

```bash
kubectl version --client
```

- minikube 상태 확인

```bash
minikube status
```

- 클러스터 정보 확인

```bash
kubectl cluster-info
```

- 노드 확인

```bash
kubectl get node
```

- 도커 읽도록 설정

```bash
minikube docker-env
```

해서 나오는 마지막 줄인

```bash
@FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env --shell cmd') DO @%i
```

를 넣는다.

- 멈추기

```bash
minikube stop
```

- 삭제하기

```bash
minikube delete
```


## 쿠버네티스 개념

클라우드 네이티브 앱으로 방법론은 `데브옵스` 구조는 `MSA` 인프라는 `컨테이너`이다.

[쿠버네티스란](https://kubernetes.io/ko/docs/concepts/overview/)

master와 node로 구성되는데 master는 설정 환경을 저장하고 node는 컴퓨터를 의미한다.

master는 `Control Plane Node`이고 node는 `Worker Nodes`이다.

master는 node들을 관리하는 역할을 하고 node는 실제 작업이 이루어진다.

### Master 구성요소

master에는 `api-server`, `controller`, `scheduler`, `etcd`

- api server

API 인터페이스를 제공하는 frontend 구성요소다. CRUD 요청을 api server를 통해서 하게 된다.

응답값은 etcd에 key value로 저장한다.

쿠버네티스의 저장소가 etcd라고 할 수 있다.

- controller

desired state를 유지하기 위해서 변경사항 확인하는역할

desired state와 current state를 비교해서 desired state를 유지하기 위해 조치함.

- scheduler

새로운 pod를 띄워야 한다고 했을 때 어떤 node에 띄울지 스케줄링하는 역할

### Node 구성요소

node는 `kubelet`과 `kube-proxy`가 주요하다. 그리고 컨테이너 런타임도 있다.

- kubelet

kubelete은 컨테이너가 pod에서 확실하게 동작하도록 관리한다.

- kube-proxy

노드로 들어오는 트래픽을 라우팅, 로드밸런싱 한다. 노드와 마스터간 **네트워크 통신** 관리

이것들이 docker로 떠있음


## 쿠버네티스 명령어
---

### 상태 설정

```bash
kubectl apply -f 파일명
```

-f을 통해서 yaml 파일과 함께 사용한다.

### 목록 조회

```bash
kubectl get 타입
```

예시로 아래처럼

```bash
kubectl get pod

# 단축
kubectl get pods
kubectl get po

# 여러 개
kubectl get po,service
kubectl get po,svc

# pod, replicaset, deployment, job 모두 조회
kubectl get all

# 결과 포맷
kubectl get pod -o wide
kubectl get pod -o yaml
kubectl get pod -o json

# label 조회
kubectl get pod --show-labels
```

### 리스트 상태 보기

쿠버네티스 리소스의 상세한 상태 확인

```bash
kubectl describe 타입/이름 or 타입 이름
```

- 예시

```bash
# pod로 이름 보고
kubectl get pod
# 자세한 정보 검색
kubectl describe pod/spring-abcd-1234
```

### 리소스 제거

```bash
kubectl delete 타입/이름 or 타입 이름
```

- 예시

```bash
# pod로 이름 보고
kubectl get pod
# 제거
kubectl delete pod/spring-abcd-1234

# or 파일로 제거
kubectl delete -f pod.yaml

# 전체 삭제
kubectl delete all --all
```

### 로그 조회

```bash
kubectl logs POD이름
```

- 예시 

```bash
kubectl get pod

kubectl logs springboot-1234-1234

# 실시간 확인
kubectl logs -f springboot-1234-1234
```

### 명령어 전달

shell 접속하여 상태확인은 -it를 사용한다

```bash
kubectl exec [-it] POD이름 -- 명령어
```

- 예시

```bash
kubectl get pod
kubectl exec -it springboot-1234-asdf -- bin/bash
```

### 설정 관리

현재 어떤 컨텍스트로 설정되어 있는지 확인하고 원하는 컨텍스트 지정

```bash
# 현재 컨텍스트 확인
kubectl config current-context
# 컨텍스트 설정
kubectl config use-context minikube
```

## 쿠버네티스 객체
---

모든 객체 정보는 etcd에 저장되고 yaml이나 json으로 관리된다.

`pod` :  가장 작은 배포 단위  
`deployment` : pod의 replicaset을 생성하고 관리  
`service`: pod에 대한 네트워크 엔드포인트 노출  
`volume`: 데이터 저장하기 위한 디렉토리 또는 트리  
`namespace`: 쿠버네티스 클러스터 내 가상 클러스터 생성  
`statefulset`: 디스크 상태가 있는 앱 배포&관리  
`daemonSet` : 모든 노드에서 실행되는 pod 배포&관리  
`job`: 일시적인 작업 실행하고 완료까지 대기



### pod

pod는 한개 또는 여러 컨테이너를 포함하고 있다. 즉 클러스터 안에 pod 그리고 pod안에 컨테이너가 있다.

- 생성

```bash
kubectl run boot-kube --image bmsvega2k/springboot-kube:0.1
```

예시로 위처럼 pod 생성

- yaml파일로 작성

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: boot-kube
  labels:
    app: boot-kube
spec:
  containers:
    - name: bootapp
      image: bmsvega2k/springboot-kube:0.1
```

version은 버전이고 kind는 종류, metadata에는 name과 label이 있고 spec은 상세 명세다.

지금은 컨테이너에대한 정보가 담겨있음.

yaml파일로는 아래처럼 pod 생성함.

```bash
kubectl apply -f ./k8s/boot-kube-pod.yml
```

### ReplicaSet

pod를 단독으로 만들면 문제가 생겼을 때 복구 되지 않아서 pod를 정해진 수만큼 복제하고 관리

- yaml 파일

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: boot-kube-rs
spec:
  replicas: 1
  selector:
    matchLabels:
      app: boot-kube
      tier: app
  template:
    metadata:
      labels:
        app: boot-kube
        tier: app
    spec:
      containers:
        - name: boot-kube
          image: bmsvega2k/springboot-kube:0.1
```

label을 체크해서 원하는 수의 pod가 없으면 새 pod를 생성한다고 한다.

`spec.selector`: label 체크 조건  
`spec.replicas`: 원하는 pod 수  
`spec.template`: pod 명세

- 생성

```bash
kubectl apply -f ./k8s/boot-kube-rs.yml
```

- 확인

```bash
kubectl get po,rs
```

- 레이블 확인

```bash
kubectl get pod --show-labels
```

- app- 로 app label 제거

```bash
kubectl label pod/boot-kube-rs-z48lp app-
```

- app label 추가

```bash
kubectl label pod/boot-kube-rs-z48lp app=boot-kube
```

app label을 지우면 새로 pod를 하나 띄우고 다시 추가하면 띄었던거 내린다.


```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: boot-kube-rs
spec:
  replicas: 4
  selector:
    matchLabels:
      app: boot-kube
      tier: app
  template:
    metadata:
      labels:
        app: boot-kube
        tier: app
    spec:
      containers:
        - name: boot-kube
          image: bmsvega2k/springboot-kube:0.1
```

scale up도 할 수 있다.


### Deployment


```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: boot-kube-deploy
spec:
  replicas: 4
  selector:
    matchLabels:
      app: boot-kube
      tier: app
  template:
    metadata:
      labels:
        app: boot-kube
        tier: app
    spec:
      containers:
        - name: boot-kube
          image: bmsvega2k/springboot-kube:0.1
```

위처러 yaml 작성

apply -f 하고 ... 등ㅇ...

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: boot-kube-deploy
spec:
  replicas: 4
  selector:
    matchLabels:
      app: boot-kube
      tier: app
  template:
    metadata:
      labels:
        app: boot-kube
        tier: app
    spec:
      containers:
        - name: boot-kube
          image: bmsvega2k/springboot-kube:0.2
```


이렇게 이미지 태그 변경하고 하면 pod 업데이트 된다.

debployment는 update를 위해서 사용하는 것이다.


yaml파일 없이도 아래처럼 할 수도 있다.

```bash
kubectl set image deployment/이미지 boot-kube=업데이트_이미지
```

- 변경사항 확인

```bash
kubectl rollout history deploy
kubectl rollout history deploy --revision=1
```

- 수동 deployment

```bash
kubectl set image deployment/boot-kube-deploy boot-kube=bmsvega2k/springboot-kube:0.3
```


### Service

서비스가 pod와 통신한다.


- db 서비스 yaml 예시

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mysql
spec:
  selector:
    matchLabels:
      app: mysql
      tier: db
  template:
    metadata:
      labels:
        app: mysql
        tier: db
    spec:
      containers:
        - name: mysql
          image: mariadb:10.4.16
          env:
            - name: MYSQL_ROOT_PASSWORD
              value: maria
            - name: MYSQL_DATABASE
              value: boot_db
          ports:
            - containerPort: 3306
              protocol: TCP

---
apiVersion: v1
kind: Service
metadata:
  name: mysql
spec:
  ports:
    - port: 3306
      protocol: TCP
  selector:
    app: mysql
    tier: db
```

한 파일 안에 deployment와 service가 들어가있다.

생성하려면 apply -f 하면 된다.


```bash
kubectl exec -it pod/이미지이름 -- bin/bash
```

이렇게 하면 pod에 들어갈 수 있고 vscode에서 plugin을 사용해서도 들어갈 수 있다.


- spring boot service

```bash
docker build -t bmsvega2k/springboot-crud-k8s:0.1 .
```

spring boot를 도커 이미지로 만들고 진행

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: boot-crud
spec:
  selector:
    matchLabels:
      app: boot-crud
      tier: app
  template:
    metadata:
      labels:
        app: boot-crud
        tier: app
    spec:
      containers:
        - name: boot-crud
          image: bmsvega2k/springboot-crud-k8s:0.1
          ports:
            - containerPort: 8080
          env:
            - name: DB_HOST
              value: "mysql"
            - name: DB_NAME
              value: "boot_db"
            - name: DB_USERNAME
              value: "root"
            - name: DB_PASSWORD # Setting Database password from Secret
              value: "maria"

```

중요한 부분은 여기 선언한 spec.containers.env 값들은 application.yml에서 활용될 수 있다.

db 들어가서 보면 다 잘 나옴

---

서비스는 Endpoint controller가 서비스와 pod를 감시하고 pod의 ip 수집한다. 그렇게 endpoint 생성된다.

```bash
kubectl get endpoints
```

하면 endpoint를 확인할 수 있다.

```bash
kubectl describe ep/엔드포인트이름
```

로 자세히 볼 수 있다.

kube-proxy는 endpoint 변화 감시하고 iptable 설정하고 core dns는 service 감시해서 서비스 이름과 ip를 core dns에 추가한다.


- node port 생성

서비스의 기본 타입은 ClusterIP이다.

외부 접근을 하려면 NodePort로 만들어야 한다. port는 30000~40000을 사용한다.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: boot-crud-np
spec:
  type: NodePort
  ports:
    - port: 8080
      protocol: TCP
      targetPort: 8080
  selector:
    app: boot-crud
    tier: app
```

위 yaml파일 처럼 type을 NodePort로 줘야한다.


```bash
minikube service boot-crud-np --url
```

이렇게 하면 url 나오는걸로 간단하게 해볼 수 있다 이후는 로드밸런서를 활용해서 해야함.

- 로드밸런스

NodePort 단점은 노드가 사라지면 자동으로 다른 노드 접근이 어려움

그래서 로드밸런서가 필요함. 브라우저는 NodePort에 보내느게 아닌 Load Balancer에 보내서 일관성 유지 가능

```yaml
apiVersion: v1
kind: Service
metadata:
  name: boot-crud-lb
spec:
  type: LoadBalancer
  ports:
    - port: 8080
      protocol: TCP
      targetPort: 8080
  selector:
    app: boot-crud
    tier: app
```

근데 미니 쿠베는 원래 로드밸런서 못 만드는데 metalib을 사용해서 만들 수 있다.

[metalib](https://metallb.universe.tf/)

근데 패스

### ConfigMap과 Secrets

민감정보들을 하드코딩 하지 않고 사용하는 방법

vault라는 솔루션도 있다.


```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: db-config
data:
  host: mysql
  dbName: boot_db
```

config Map은 이렇게 사용할 수 있다.


```bash
kubectl get cm
```

확인은 이렇게 가능

비슷한데 데이터를 Base64로 저장하는 Secrets도 있다.


```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysql-secrets
data:
  username: cm9vdA==
  password: bWFyaWE=
```

이런식이다. 확인은 아래처럼

```bash
kubectl get secret
```

그래서 deployment로 사용하면 아래와 같음.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: boot-crud
spec:
  selector:
    matchLabels:
      app: boot-crud
      tier: app
  template:
    metadata:
      labels:
        app: boot-crud
        tier: app
    spec:
      containers:
        - name: boot-crud
          image: bmsvega2k/springboot-crud-k8s:0.1
          ports:
            - containerPort: 8080
          env:
            - name: DB_HOST
              valueFrom :
                configMapKeyRef :
                  name : db-config
                  key :  host
            - name: DB_NAME
              valueFrom :
                configMapKeyRef :
                  name : db-config
                  key :  dbName
            - name: DB_USERNAME
              valueFrom :
                secretKeyRef :
                  name : mysql-secrets
                  key :  username
            - name: DB_PASSWORD
              valueFrom :
                secretKeyRef :
                  name : mysql-secrets
                  key :  password
```

config map의 값은 configMapKeyRef이고 secrets은 secretKeyRef로 사용한다.


## minikube
---

### dashboard

```bash
minikube dashboard
```

대시보드를 볼 수 있다.

### 삭제

```bash
minikube delete
```

## gke
---

[gke url](https://cloud.google.com/kubernetes-engine?hl=ko)

위에 들어가서 사용할 수 있음.

### 클러스터 생성

잘 생성하면된다.

### google cloud cli 설치

[gcloud cli url](https://cloud.google.com/sdk/docs/install?hl=ko)


[gke-gcloud-auth-plugin 설치](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl?hl=ko#install_plugin)


### yaml 파일 들

- config map 

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: bookmarker-config
data:
  postgres_host: postgres-svc
  postgres_port: "5432"
  postgres_dbname: appdb
---
apiVersion: v1
kind: Secret
metadata:
  name: bookmarker-secrets
type: Opaque
data:
  postgres_username: cG9zdGdyZXM=
  postgres_password: cG9zdGdyZXM=
```

```bash
kubectl apply -f 1-config.yaml
```

```bash
kubectl get secrets
kubectl get configmap
```

- db

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres-deployment
spec:
  selector:
    matchLabels:
      app: postgres-pod
  template:
    metadata:
      labels:
        app: postgres-pod
    spec:
      containers:
        - name: postgres
          image: "postgres:14-alpine"
          ports:
            - name: postgres
              containerPort: 5432
          env:
            - name: POSTGRES_USER
              valueFrom:
                secretKeyRef:
                  name: bookmarker-secrets
                  key: postgres_username
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: bookmarker-secrets
                  key: postgres_password
            - name: POSTGRES_DB
              valueFrom:
                configMapKeyRef:
                  name: bookmarker-config
                  key: postgres_dbname
            - name: PGDATA
              value: /var/lib/postgresql/data/pgdata
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-svc
  labels:
    app: postgres
spec:
  type: ClusterIP
  selector:
    app: postgres-pod
  ports:
    - port: 5432
      targetPort: 5432
```

```bash
kubectl apply -f 2-postgres-db.yaml
```

```bash
kubectl get deploy,svc,pod
```

```bash
kubectl exec -it pod/postgres-deployment-74cbc9c598-m7zjm bin/bash
```

- backend

```yaml
apiVersion: v1
kind: Service
metadata:
  name: bookmarker-api-svc
spec:
  type: NodePort
  selector:
    app: bookmarker-api-pod
  ports:
    - name: app-port-mapping
      protocol: TCP
      port: 8080
      targetPort: 8080
      nodePort: 30090
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bookmarker-api-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: bookmarker-api-pod
  template:
    metadata:
      labels:
        app: bookmarker-api-pod
    spec:
      containers:
        - name: bookmarker
          image: bmsvega2k/springbootnextjs:1.1
          ports:
            - containerPort: 8080
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: prod
            - name: DB_HOST
              valueFrom:
                configMapKeyRef:
                  key: postgres_host
                  name: bookmarker-config
            - name: DB_PORT
              valueFrom:
                configMapKeyRef:
                  key: postgres_port
                  name: bookmarker-config
            - name: DB_DATABASE
              valueFrom:
                configMapKeyRef:
                  key: postgres_dbname
                  name: bookmarker-config
            - name: DB_USERNAME
              valueFrom:
                secretKeyRef:
                  key: postgres_username
                  name: bookmarker-secrets
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  key: postgres_password
                  name: bookmarker-secrets
```

```bash
kubectl apply -f 3-bookmarker-api.yaml
```

```bash
kubectl get deploy,svc
kubectl get pod
```

```bash
kubectl logs bookmarker-api-deployment-97f597cb5-rkmjw
```

```bash
kubectl exec -it postgres-deployment-74768df574-mtsh9 /bin/bash

psql -U postgres -W
\c appdb postgres
\dt
```

```bash
kubectl get service
kubectl get nodes -o wide
```

external ip가 배포 ip

- backend load balance

```yaml
apiVersion: v1
kind: Service
metadata:
  name: bookmarker-api-svc
spec:
  type: LoadBalancer
  # type: NodePort
  selector:
    app: bookmarker-api-pod
  ports:
    - name: app-port-mapping
      protocol: TCP
      port: 8080
      targetPort: 8080
      nodePort: 30090
```

타입을 LoadBalancer로만 바꾸면 된다.

```bash
kubectl apply -f 3-bookmarker-api.yaml

kubectl get svc,deploy,pod
```

external-ip가 url




- front

```yaml
apiVersion: v1
kind: Service
metadata:
  name: bookmarker-ui-svc
spec:
  # type: LoadBalancer
  type: NodePort
  selector:
    app: bookmarker-ui-pod
  ports:
    - name: app-port-mapping
      protocol: TCP
      port: 3000
      targetPort: 3000
      nodePort: 30080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bookmarker-ui-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: bookmarker-ui-pod
  template:
    metadata:
      labels:
        app: bookmarker-ui-pod
    spec:
      containers:
        - name: bookmarker-ui
          image: bmsvega2k/springboonextjs:client0.2
          ports:
            - containerPort: 3000
          env:
            - name: NEXT_PUBLIC_CLIENT_API_BASE_URL
              value: http://localhost:18080
            - name: NEXT_PUBLIC_SERVER_API_BASE_URL
              value: http://bookmarker-api-svc:8080

```

```bash
kubectl apply -f 4-bookmarker-ui.yaml
```

```bash
kubectl get svc,deploy,pod
kubectl get nodes -o wide
```

external-ip에 url

- front load balance

```yaml
apiVersion: v1
kind: Service
metadata:
  name: bookmarker-ui-svc
spec:
  type: LoadBalancer
  # type: NodePort
  selector:
    app: bookmarker-ui-pod
  ports:
    - name: app-port-mapping
      protocol: TCP
      port: 3000
      targetPort: 3000
      nodePort: 30080
```

```bash
kubectl apply -f 4-bookmarker-ui.yaml
kubectl get svc,deploy,pod
```

external-ip가 배포 url