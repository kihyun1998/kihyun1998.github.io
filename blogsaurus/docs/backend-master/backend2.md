---
sidebar_position: 1
---

# 02. [BackEnd] WSL2 + Go + VSCode + Docker + Make + Sqlc


## WSL 설치
---

1. 관리자모드로 powershell 실행

2. wsl 설치

```powershell
wsl --install
```

3. microsoft store에서 `windows terminal` 설치

4. reboot

5. 유저 이름과 비밀번호 생성


## make 설치
---

1. apt 업데이트

```bash
sudo apt update
```

2. make 설치

```bash
sudo apt install make
```

3. 버전 확인

```bash
make -version
```

4. 실행방법

시작에서 `ubuntu` 검색해서 실행하면 된다.

## Golang 설치

[이거로 생략..](https://learn.microsoft.com/ko-kr/azure/developer/go/configure-visual-studio-code)

**but !** linux에서도 golang 설치해야 한다.

1. golang 설치

```bash
sudo snap install go --classic
```

2. golang 버전 확인

```bash
go version
```


## Sqlc 설치

쿼리문을 Golang CRUD code로 작성해준다.

1. Sqlc 설치

```bash
sudo snap install sqlc
```

## VS Code 설치

1. VS Code 설치

2. Extension 설치하기

Extensions에서 `wsl`,`go` 검색하고 설치


## Docker 설치

1. Docker 다운로드

[이곳](https://docs.docker.com/desktop/wsl/)에서 다운로드

2. 다운로드 파일 실행하지 말고 powershell 관리자 모드로 실행

3. 다운로드 폴더로 이동

```powershell
cd C:\Users\유저\Downloads
```

4. 명령어로 설치

```powershell
Start-Process "Docker Desktop Installer.exe" -Verb RunAs -Wait -ArgumentList "install --installation-dir=C:\Docker\"
```

5. 설치 후 reboot

6. Docker app 실행

7. 설정에서 `Use the WSL 2 based engine` 켜져있는지 확인

8. Add the *.docker.internal names to the host's etc/hosts file (Requires password) 체크하기

9. 우분투 터미널 켜서 확인하기

```bash
docker ps
```

```bash
go version
```

