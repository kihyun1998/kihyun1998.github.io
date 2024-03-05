---
sidebar_position: 8
---

# [Go] private repository module import
---

몇 가지 설정을 해야합니다.

## GOPRIVATE 설정
---

```bash
go env -w GOPRIVATE=[비공개 저장소]
```

비공개 저장소 경로의 예시는 

`github.com/privateTeam` 이런 것입니다.

+ 그럼 아래와 같이 설정할 수 있습니다.

```bash
go env -w GOPRIVATE=github.com/privateTeam
```

잘 설정됐는지는 env로 확인할 수 있습니다.

```bash
go env -json
```

## 토큰 발급
---

`Github` > `Settings` > `Developer Settings` > `Personal access tokens` > `Tokens(classic)` > `Generate new token(classic)` 

해서 권한 적절히 할당해주고 나온 키를 복사해서 저장합니다.


## git config
---

```bash
git config --global url."https://[깃 유저 이름]:[토큰]@[비공개 저장소]".insteadOf "https://[비공개 저장소]"
```

이렇게 git config를 해줘야 합니다.


## 가져오기
---

```bash
go mod init
go mod tidy
```

끝

## 수정하기

```bash
git config --global --edit
```

여기서 잘못된거 수정해야한다. 이거 때문에 1시간 버림