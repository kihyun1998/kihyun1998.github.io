---
sidebar_position: 16
---

# [TTA] dev-ops의 개념
---

## 역사

### 가상화 등장

가상화 환경 등장

### agile

agile 방법론으로 빠른 개발 but 운영측면에서 dev ops 필요성 느낌

### git

git 

### cloud

AWS 등장


### devops

자동화에 초점이 맞춰진 devops.

### IaC

terraform 같은거

### docker

container를 편하게 사용할 수 있게 해줌

### kube

kubernetes

### git ops

### observabillity

monitoring


## Container

vm과의 차이점은 `vm`은 host-os와 guest-os가 있어서 오버헤드 발생한다.

`container`는 host-os 사용해서 그런 오버헤드는 없다.

`container`에는 Isolate라는 기술이 있음. 자원 격리된다.

> 자원: process, cpu, ram...

[container 격리 예제](https://tech.kakaoenterprise.com/154)


container는 host-os의 linux-cernul을 사용한다.


## kubernetes

...


## docker 실습

### Isolate 실습

Isolate가 잘 돼있다..


## kubernetes 실습

[쿠버네티스 playground](https://labs.play-with-k8s.com/)

`CentOS Linux release 7.9.2009 (core)`를 사용하면 kube 사용하기 위한 툴 제공함.

kubeadm 사용하면 편함.

그게 아니라면 kubectl apply로 Admin Node 설정 후 kubeadm token create로 토큰정보 발급받아서 다른 node 에서 kubeadm join으로 join할 수 있음.

### kubeconfig

보통 kubeconfig는 `/etc/kubernetes/admin.conf`에 있는걸 사용함

`KUBECONFIG` 환경변수로 등록돼있음.

### kubectl

kubectl apply -f 를 많이 쓴다.

kubectl은 kube-api-server와 REST 통신한다.