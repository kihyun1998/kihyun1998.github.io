---
sidebar_position: 2
---

# [React + Spring + Kube] KOSTA 2
---

## Next.js
---

검색엔진 최적화를 위해서 사용

리액트의 ssr 버전.

사용하는 이유는 리액트는 SPA여서 HTML이 하나여서 SEO 최적화가 어려운데 Next.js는 SSR이여서 SEO 최적화 가능

### 시작하기

```bash
npx create-next-app@latest --typescript
```

이렇게 시작할 수 있습니다.

### bootstrap 설치

```bash
npm i bootstrap@5.3.3
```

## next 작성하기
---

### 페이지 스니팻

`rafce` 코드 스니팻으로 page를 시작할 수 있다.

```typescript
export default page


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
```

이렇게 나오는데 return 안에 잘 적성해주면 된다.

### 절대 경로

```typescript
import NavBar from "@/app/components/NavBar";
```

위처럼 절대 경로를 사용할 수 있다.

`@`가 `src` 폴더를 가리키고 있는 것 이다.


### redirect


```typescript
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/bookmarks',
            permanent: true
          }
        ]
      }
};
```

만약 root를 비워놓고 bookmarks폴더에 모든 페이지를 넣었을 때

`bookmarks`를 root로 사용할 경우에 이렇게 설정해주면 된다.


### get

`axios`를 사용한다.


### key

Next.js를 사용할 때 태그에 키를 준다.

이 이유는 virtual dom 즉 가상 돔 때문에 그렇다.

가상 돔을 사용하는 이유는 렌더링 하는 수를 줄이기 위해서 이다. 성능을 위한 부분 업데이트를 위해서.


### env

.env파일로 application.properties처럼 설정 바꿀 수 있다.

`.env.development` 또는  `.env.production`

이렇게 설정해서 사용할 수 있다.

### proxy

어떻게 했다..


## 도커로 빌드
---

### .dockerignore

`node_modules`와 `.next`를 .gitignore같은 .dockerignore에 넣어야한다.


### docker file

```dockerfile
FROM node:18-alpine as base
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN npm run build


FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD npm start

FROM base as dev
ENV NODE_ENV=development
RUN npm install 
COPY . .
CMD npm run dev
```

위와 같다.

builder인 경우와 production인 경우를 나눠서 docker file 만들고 있다.

알파인을 사용해서 경량화를 했다.

build stage에서

```bash
npm run build
```

는 빌드 명령어다.

production stage에서는 node env를 production으로 설정하고 npm ci를 실행해서 production 환경에서 필요한 npm을 설치합니다.

그룹을 설정하고 빌드 단계에서 생성된 파일들을 복사해서 시작합니다.