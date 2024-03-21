---
sidebar_position: 14
---

# [Github Actions] Self-hosted runner for RedHat 9.x
---


## 준비물

vm에 올라간 RedHat 9.x

##

## docker 설치 절차
---

### docker 관련 파일 초기화

```bash
sudo yum remove docker*
```

### docker 저장소 설정

```bash
sudo yum install -y yum-utils
```

```bash
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

yum-utils를 통해서 repo 등록을 안정적으로 할 수 있습니다.

### docker 저장소 등록 확인

```bash
sudo yum list | grep -i docker-ce
```

위 명령어로 확인할 수 있습니다.

### 에러나는 패키지 제거

```bash
sudo yum remove -y podman
sudo yum remove -y buildah
```

podman과 buildah가 삭제돼야 한다.

### docker 설치

```bash
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

이러면 설치 끝

### docker 실행 절차

```bash
sudo systemctl start docker
sudo systemctl status docker
sudo systemctl enable docker
```

### docker 실행 확인

```bash
docker version
```

그런데 바로 위처럼 하면 안될 것입니다. 권한 변경 먼저 해야합니다.

### docker 권한 변경

```bash
sudo chmod 666 /var/run/docker.sock
```

```bash
docker version
```

권한 변경 후 version 확인하면 버전 볼 수 있습니다 !