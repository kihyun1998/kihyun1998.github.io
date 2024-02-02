---
sidebar_position: 11
---

# [Github Actions] Golang private module 가져오기
---

## 무결성 검사 무시 설정
---

```yaml
      - name: 🧙 Config GO env
        run: |
          go env -w GOPRIVATE=[비공개저장소]
```

비공개 저장소 예시는 `github.com/privatetema` 이렇습니다.


## config
---

```yaml
      - name: 🧙 Config Git
        run: |
          git config --global url."https://${{secrets.GIT_USERNAME}}:${{secrets.TOKEN}}@[비공개저장소]".insteadOf "https://[비공개저장소]"
          git config -l
```

위처럼 할 수 있습니다.

여기서 `GIT_USERNAME`은 github username이고 

`TOKEN`은  `Github` > `Settings` > `Developer Settings` > `Personal access tokens` > `Tokens(classic)` > `Generate new token(classic)` 에서 적절한 권한으로 만들어진 토큰입니다.


## go get
---

```yaml
      - name: 🔥 Get dependencies
        run: go mod tidy
```

사실 go get 해도 되는데 저는 go mod tidy를 선호합니다.

그럼 끝