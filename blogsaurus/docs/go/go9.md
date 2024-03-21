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


### 추가적인 설정 사항

```bash
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc
source ~/.bashrc
```

bash_profile에 설정하면 뭔가 안되는 것같고 껏다가 키면 go가 안되고 그럴 것이다.

.bash_profile은 로그인 시 실행되는 스크립트고 .bashrc는 비로그인일 때도 실행되는 스크립트 입니다.

그래서 정 안되면 bashrc에 설정하는 것도 해결방법 중 하나입니다.