---
sidebar_position: 9
---

# [Github Actions] Docker Container를 이용한 Gihub Actions CI
---

## 컨테이너 이용하는 방법
---

```yaml
    
    container:
      image: [my-docker-hub-username]/[my-image]:[tag]
      credentials:
        username: ${{ secrets.DOCKERHUB_USERNAME }}
        password: ${{ secrets.DOCKERHUB_PASSWORD }}
```

이런식으로 작성하면 된다.

Docker Hub에 대한 IP/PW는 미리 Github secret에 정의하면 된다.

자세한 경로는 해당 `저장소` > `Settings` > `Secrets and variables` > `Actions` > `New repository secret`으로 추가할 수 있다.


## CI 과정
---

```yaml
    steps:
      - name: ✅ Checkout code
        uses: actions/checkout@v3
      
      - name: 💾 Register Tag name in env
        run:  echo "TAG_NAME=$(echo ${{ github.ref }} | sed 's|refs/tags/||')" >> $GITHUB_ENV

      - name: 🧙 Config Safe Git Directory
        run: git config --global --add safe.directory $GITHUB_WORKSPACE

      - name: ✅ git check
        run: git status

      - name: 🔥 Get dependencies
        run: go mod download

      - name: 💽 Test
        run: make test
        
      - name: 🛠️ Build
        run: make build
```

여기서 중요한 부분은 바로 `Config Safe Git Directory`다.

그냥 저거 없이 무대포로 해버리면 build가 안된다. 신기하다. safe directroy 지정을 안해주면 git check 부분에서 아래와 같은 경고를 발견할 수 있다.

```bash
fatal: detected dubious ownership in repository at '[작업 디렉토리]'
To add an exception for this directory, call:

	git config --global --add safe.directory [작업 디렉토리]
Error: Process completed with exit code 128.
```

위 경고문에서 해결방안도 제시해줬다 저 명령어를 추가하면 해결된다.

작업 디렉토리를 하드코딩하는 방법도 있지만 코드 재사용을 위해서 제공하는 환경변수를 사용할 수도 있다.

`$GITHUB_WORKSPACE`를 사용하면 된다. 자주 사용할 듯

### fatal: detected dubious ownership in repository at ... 이유

Github에서 `CVE-2022-24765` 보안 이슈를 해결하면서 업데이트를 했는데 이 때문에 이 설정이 필요해졌다.