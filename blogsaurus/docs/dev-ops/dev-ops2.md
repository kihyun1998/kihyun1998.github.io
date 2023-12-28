---
sidebar_position: 2
---

# [Gitlab] CI/CD 실습
---

파이썬 데모 앱을 통해서 `실행 테스트`와 `docker Image build`, `docker repository에 push`, `서버에 배포`까지 따라 해보겠습니다.

## CI/CD
---

지속적인 integration과 지속적인 deployment 또는 delivary이다.

테스트, 빌드, 릴리즈를 자동화하는 것이다.

cd에는 또 종류가 많은데(개발용, 상품용 등..) 일단 간단한 CI/CD를 경험해보려 한다.

## gitlab CI/CD 작동방식
---

gitlab instance 또는 gitlab server가 있는데 gitlab의 runner에게 job을 던진다. 모두 gitlab이 제공한다고 한다.

근데 자체 설정 기능도 사용할 수 있음.


## push/pull 하기
---

### 글로벌 설정

```bash
git config --global user.name "<이름>"
git config --global user.email "<이메일>"
```

### create new repo (clone)

```bash
git clone https://gitlab.com/<조직명>/<프로젝트명>.git
cd <프로젝트명>
git switch --create main
touch README.md
git add README.md
git commit -m "add README"
git push --set-upstream origin main
```

### create new repo.. (upload)

```bash
cd <폴더명>
git init --initial-branch=main
git remote add origin https://gitlab.com/<조직명>/<프로젝트명>.git
git add .
git commit -m "Initial commit"
git push --set-upstream origin main
```

```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/<조직명>/<프로젝트명>.git
git push --set-upstream origin --all
git push --set-upstream origin --tags
```