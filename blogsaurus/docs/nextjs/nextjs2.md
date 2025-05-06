---
sidebar_position: 2
---

# [NextJS] 개발환경 구성
---

nvm을 이용해서 npm 환경을 구성합니다.

[nvm 다운로드 링크](https://github.com/coreybutler/nvm-windows/releases)에 들어가서 다운로드하고

설치하면 nvm을 사용할 수 있습니다.

```bash
nvm install 22.15.0

nvm list

    22.15.0
  * 18.17.1 (Currently using 64-bit executable)


nvm use 22.15.0


node -v
v22.15.0

npm -v
10.9.2

```

## 수동설치
---

폴더 생성 후

```bash
# package json 만들기
npm init -y 

# 필요한 패키지 설치
npm install react@latest next@latest react-dom@latest

```

이상태에서 package.json에 있는 script를 수정후 

```json
  "scripts": {
    "dev": "next dev"
  },
```


`app/page.tsx`를 만들고 npm run dev를 실행하면 알아서 layout.tsx를 만들어줍니다.