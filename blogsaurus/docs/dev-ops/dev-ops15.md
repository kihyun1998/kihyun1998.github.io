---
sidebar_position: 15
---

# [Github Actions] Self-hosted runner로 Golang CI 하기
---

## 폴더구조

private organization의 private repository로 쪼개진 golang 코드들을 CI하는 테스트 예제다.



```bash
├── Binary
│   ├── wadd
│   ├── wsub
│   ├── wmul
│   └── wdiv
├── Library
│   ├── libRandom
│   └── libCalculator
└── CI
```

실제로는 repository로 다 쪼개져 있다.

CI에는 저 모든 repository를 clone해서 test와 build를 하는 것을 목표로 하고 있다.


## trigger on
---

어떨 때 workflow를 시작할 지 정할 수 있다.

```yaml
on:
  push:
    tags:
      - 'V*'
  workflow_dispatch:
    inputs:
      file_name:
        description: "Main File Name"
        required: true
        default: "FILE_NAME_VX.X.X(YYYY-MM-DD)"
```

먼저 `push tags`인데 정해놓은 `V*`로 시작하는 tag가 push되어야 workflow를 시작하는 것이다.

다음으로는 workflow_dispatch인데 이는 workflow 웹 사이트에서 버튼을 통해 수동으로 시작하는 것이다.

![alt text](./img/1-30/10~30/image-1.png)

branch도 정할 수 있고 설정한 `file_name` 값도 수동으로 정할 수 있다.

`inputs`에는 
제목을 뜻하는 `description`과  
필수 여부인 `required`,  
그리고 기본으로 들어가 있는 값인 `default`가 있다.

## jobs
---

### 코드 clone

```yaml
build-and-test:
    name: 🦾 Unit Test & Build
    runs-on: self-hosted
    steps:
    - name: ✅ Checkout CI Repository
      uses: actions/checkout@v3

    - name: ✅ Checkout Add Repository
      uses: actions/checkout@v3
      with:
        repository: 'TeamMakeCalculator/wadd'
        path: 'wadd'
        token: ${{secrets.GH_TOEKN}}

    ...
```

그냥 clone을 해도 되는데 `actions/checkout@v3`을 사용했다. 좀더 보안성이 좋아보여서

secrets.GH_TOKEN은 PAT라고 Personal Access Token이다.

`Github` > `Settings` > `Developer Settings` > `Personal access tokens` > `Tokens(classic)` > `Generate new token(classic)`

경로에서 발급받을 수 있다. 발급 받은 토큰은 

`저장소` > `Settings` > `Secrets and variables` > `Actions` > `New repository secret`에서 등록할 수 있다.


### 파일 이름 환경변수 설정

```yaml
    - name: 💾 If push tag, Register Tag name in env
      if: ${{github.event_name == 'push'}}
      run: | 
        echo "TAG_NAME=$(echo ${{ github.ref_name }})($(date +'%Y-%m-%d'))" >> $GITHUB_ENV
    - name: 💾 If push tag, Register File name in env
      if: ${{github.event_name == 'push'}}
      run: | 
        echo "FILE_NAME=Random_Calculator_${{env.TAG_NAME}}" >> $GITHUB_ENV

    - name: 💾 If workflow_dispatch, Register File name in env
      if: ${{github.event_name == 'workflow_dispatch'}}
      run: | 
        echo "FILE_NAME=${{github.event.inputs.file_name}}" >> $GITHUB_ENV
```

`if`를 사용해서 `push`인지 `workflow_dispatch`인지 구분을 먼저 합니다.

tag를 push한 경우에는 `github.ref_name`을 사용해서 file name을 얻고  
수동인 경우에는 `github.event.inputs.file_name`을 사용해서 file name을 얻습니다.

이는 나중에 Makefile에서 아래와 같이 작용합니다.

```yaml
tar:
	@cd bin && tar -cvf ../'$(FILE_NAME)'.tar *
```


### golang env 설정

```yaml
    - name: 🧙 Config GO env
      run: |
        go env -w GOPRIVATE=github.com/TeamMakeCalculator
```

GOPRIVATE를 설정해서 private repository도 go get할 수 있도록 해줍니다.


### git config

```yaml
    - name: 🧙 Config Git
      run: |
        git config --global --add safe.directory $GITHUB_WORKSPACE
        git config --global url."https://${{secrets.GIT_USERNAME}}:${{secrets.GH_TOEKN}}@github.com/TeamMakeCalculator".insteadOf "https://github.com/TeamMakeCalculator"
```

workspace를 safe directory로 지정하고 private repository go get을 위해서 미리 인증을 해놓습니다.

### go get

```yaml
    - name: 🔥 Get dependencies
      run: |
        go mod init
        go mod tidy
```

정상적인 방법으로 go get을 합니다.

go mod tidy에서 안되는 경우에는 직접 들어가서 해보는게 좋고

저같은 경우에는 GOPATH에 두지 않았어서 안됐는데 GOPATH에 두지 않더라도 go mod init 할 때 이름을 지정해주면 괜찮다고 하더라구요.

### test, build

```yaml
    - name: 💽 Test
      run: make test

    - name: 🛠️ Build
      run: make build
```

test와 build는 위처럼 간단한데 Makefile을 보면

이렇게 적당히 폴더 위치만 잘 맞춰주면 간단하게 잘 됩니다.

```yaml
build:
	go build -o wadd ./wadd
	go build -o wsub ./wsub
	go build -o wmul ./wmul
	go build -o wdiv ./wdiv

test:
	go test -v -cover ./wadd/...
	go test -v -cover ./wsub/...
	go test -v -cover ./wmul/...
	go test -v -cover ./wdiv/...
```

### tar로 묶기

```yaml
    - name: 🚚 Collect binary
      run: make move

    - name: 🔥 Compress with tar
      run: make tar
```

이거도 Makefile로 만들었습니다.

흩어져있는 바이너리를 모아서 tar로 묶는 예제입니다.

```yaml
BINPATH=./bin

move:
	@mkdir -p ./bin
	@mv ./wadd/wadd $(BINPATH)
	@mv ./wsub/wsub $(BINPATH)
	@mv ./wmul/wmul $(BINPATH)
	@mv ./wdiv/wdiv $(BINPATH)

tar:
	@cd bin && tar -cvf ../'$(FILE_NAME)'.tar *
```

### 배포 서버에 sftp 전송
---

```yaml
    - name: 🚀 Transfer files use SFTP
      uses: appleboy/scp-action@master
      with:
        host: 192.168.135.81
        username: ${{secrets.SFTP_USERNAME}}
        password: ${{secrets.SFTP_PASSWORD}}
        source: "${{env.FILE_NAME}}.tar"
        target: "~/"
```

배포 서버의 아이디 패스워드를 알면 이게 제일 간단해서 이렇게 진행했습니다.

`key:`라는 값에 ssh키를 넣고도 진행할 수 있습니다.

`source`는 보낼 파일 이름이고 `target`은 배포서버에 어디에 놓을지 경로입니다.

### clean up
---

```yaml
    - name: 🧹 Clean up local directory
      run: rm -rf ${{ github.workspace }}/*
```

이렇게만 지웁니다. 

`${{ github.workspace }}/../*` 이렇게도 지울 수 있는데 checkout할 때 에러가 나더라구요.

이러면 끝 !