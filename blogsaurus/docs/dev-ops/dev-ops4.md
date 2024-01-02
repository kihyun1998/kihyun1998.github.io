---
sidebar_position: 3
---

# [Gitlab] Gitlab ce 설치
---

자체 vm에 gitlab ce를 설치해야 gitlab self-host runner를 사용할 수 있는 것 같다.

### 패키지 설치

```bash
apt install ca-certificates curl openssh-server postfix tzdata perl
```

postfix 설치할 때 configuration에서 local 전용으로

## gitlab 설치
---


### 저장소 설정

```bash
curl -LO https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh
```

이 gitlab의 script를 이용해서 설치가능합니다.

/tmp에서 이걸 다운받아서

```bash
chmod u+x script.deb.sh
```

권한 바꿔주고

```bash
 ./script.deb.sh 
```

스크립트 실행합니다. 그럼 저장소 설정은 완료됩니다.

### 설치

```bash
apt install gitlab-ce
```

### 설정 파일

```bash
vim /etc/gitlab/gitlab.rb
```

### 재설정

```bash
gitlab-ctl reconfigure
```