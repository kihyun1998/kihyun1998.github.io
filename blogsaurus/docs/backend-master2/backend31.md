---
sidebar_position: 31
---

# 31. [BackEnd] kubectl & k9s

위 두 도구들은 kubernates 클러스터에 접속하는 2개 cli 툴이다.

## kubectl
---

[여기](https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/) 보구 설치 가능


### AWS EKS와 연결 방법

```bash
aws eks update-kubeconfig --name <클러스터이름> --region <지역 코드>
```

근데 권한이 필요하다는 에러가 나올 것입니다.

### 권한 설정 방법

AWS IAM > 액세스 관리 > 사용자 그룹 > 권한 > 권한 추가 > 인라인 정책 생성 >

서비스 : EKS, All 체크, Resource: ALL > 정책이름 설정하면 끝

권한 설정하고 위 연결 명령어를 실행하면 작동합니다.

하게 된다면 `~/.kube/config`가 생깁니다.

이 파일을 봤을 때 contexts.context.cluster가 이름이 됩니다.

이를 사용해서 여러 클러스터가 있을 때 아래 명령어로 전환할 수 있습니다.

```bash
kubectl config user-context <이름>
```


## 에러 해결
---

```bash
error: You must be logged in to the server (the server has asked for the client to provide credentials)
```

위와 같은 에러가 납니다. 해결 방법은 아래와 같습니다.

IAM > 내 보안 자격 증명 > 액세스 키 > 액세스 키 만들기 > 만든키로 값넣기

```bash
vi ~/.aws/credentials
```

기존 `[default]`키는 `[github]`로 변경하고 이 액세스키 값을 default에 추가합니다.

```bash
kubectl cluster-info
```
로 확인할 수 있습니다.

## GitHub CLI Credential 사용 방법
---

```bash
export AWS_PROFILE=github
```

## Github user가 cluster 사용가능하도록 설정
---

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: aws-auth
  namespace: kube-system
data:
  mapUsers: |
    - groups:
      - system:masters
      userarn: <유저 arn>
      username: <유저 이름>
```

영상이랑 format이 바뀌어서 꽤나 고생했습니다.

그래서 참조할 수 있는 URL을 저장해놔야겠습니다. [여기](https://docs.aws.amazon.com/ko_kr/eks/latest/userguide/add-user-role.html)는 aws-auth.yaml에 대한 예시가 담겼습니다.


[여기](https://repost.aws/ko/knowledge-center/amazon-eks-cluster-access)는 전체적인 과정이 담겼습니다.


이게 Github 유저에게 cluster 사용 권한을 주는 것입니다.


## k9s
---

kubectl보다 쉽고 좋은 툴이다.

[여기](https://k9scli.io/)에서 다운로드할 수 있다.

근데 이거 잘 안된다.

[이 분](https://jusths.tistory.com/267)이 잘 정리해놓으셨다.