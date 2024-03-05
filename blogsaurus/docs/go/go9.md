---
sidebar_position: 9
---

# [Go] linux golang 설치
---

## 리눅스에 golang 설치
---

### golang 파일 다운로드

[golang all releases](https://go.dev/dl/)에서 원하는 go version을 다운로드 받습니다.

### 압축 해제

```bash
sudo tar -C /usr/local -xzf go1.21.3.linux-amd64.tar.gz
```

### 환경변수 설정 및 적용

```bash
vi ~/.bash_profile
```
에서 아래 내용 추가

```bash
export PATH=$PATH:/usr/local/go/bin
```

```bash
source ~/.bash_profile
```

그리고 로드하면 끝

### golang 설치 확인

```bash
go version
```