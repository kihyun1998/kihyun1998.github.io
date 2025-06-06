---
sidebar_position: 3
---

# [NextJS] Routing
---

## 방식
---

nextjs에서 라우팅은 폴더이름으로 합니다. 따로 url을 지정하는 것이 아닌 폴더구조로 하는데 폴더에 page.tsx가 있으면 경로가 생깁니다.

## notfound 설정
---

`app/not-found.tsx`를 생성하면 notfound 시 이 페이지가 나타납니다.



## usePathname
---

hook인데 path name을 가져오는 훅입니다.


## use client
---

use clinet를 해야 hydration을 받을 수 있습니다.

hydration은 CSR한 HTML에 JavaScript 기능을 추가해주는거에요.

use client한 애들한테만 hydration을 하는 이유는 효율성 때문이고 react hook을 사용하면 use client를 써야해요


## layout
---

```
app/
 └── layout.tsx       <-- 🥇 가장 먼저 실행
 └── page.tsx         <-- 🥈 실제 페이지 내용
 └── loading.tsx      <-- 🕓 로딩 중일 때 보여줌 (선택)
 └── error.tsx        <-- ❌ 에러 발생 시 보여줌 (선택)
 └── not-found.tsx    <-- 🔍 404 처리 (선택)
```

---

### 렌더링 순서 흐름 요약

1. **layout.tsx**

   * 페이지의 공통 레이아웃 (Header, Sidebar 등)
   * 모든 자식 페이지에 적용됨
   * 서버에서 먼저 렌더링됨
   * 상태나 훅은 사용 못함 (`use client` 없이 작성해야 함)

2. **page.tsx**

   * 라우트에 해당하는 실제 페이지 내용
   * 여기도 서버 컴포넌트가 기본
   * 데이터를 `fetch`해서 렌더링함

3. **loading.tsx** (선택)

   * 서버 컴포넌트가 데이터를 fetch하는 동안 표시
   * `suspense` 기반으로 작동

4. **client 컴포넌트(`use client`)**

   * 필요한 부분만 클라이언트로 전달돼 hydration 됨
   * 여기에만 React Hook(`useState`, `useEffect`) 사용 가능

---

## 🔧 예시: 간단한 구조

```
app/
 └── layout.tsx
 └── dashboard/
      └── page.tsx
      └── loading.tsx
```

> `localhost:3000/dashboard` 접속 시:

* `layout.tsx` → 공통 레이아웃 먼저 실행됨
* `page.tsx` → dashboard 내용 로딩
* (필요 시) `loading.tsx` → fetch 중에 보여짐

---

이게 어마어마 한게 dashboard 안에 layout.tsx가 있으면 또 wrapping해서 적용할 수도 있습니다..

이게 진짜 중요한거임.

정리하자면 layout은 전역적인 설정을 해주는 그런거

더 중요한 것은 layout은 경로(폴더)마다 layout.tsx를 갖을 수 있는데 이는 위에서(상위에서) 설정한 layout을 상속받는다는 거임. 정확히 상속이라기보다는 중첩? 된다. 이를 유의해야함.

## metadata
---

metadata는 page, layout에서만 export할 수 있는건데 title, description을 설정하는건데 layout과 같이 밑에 중첩되서 적용되지만. 폴더에 page, layout에서 같은 키값으로 다른 값이 들어가있다면 그 페이지는 그 metadata를 이용함.

metadata를 템플릿으로 만들수 있다는 소식도 있음

```tsx
export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'Generated by Next.js',
}
```

이렇게 상위 layout이나 page에서 metadata 정의하고

```tsx
export const metadata = {
    title: 'Home',
}

```

home/page.tsx에서 이렇게 하면 잘 나옴

## dynamic route
---

dynamic route를 하려면 폴더에 `[id]`이런걸 해주면 됨. 그럼 dynamic routing할 수 있는데 이거는 `[id]` 밑에 있는 page 컴포넌트가 params로 받음. searchParams도 받을 수 있음.

이걸 props로 받아서 잘 처리하면 사용가능.

use client를 사용하면 useParams, useSearchParams를 사용할 수도 있음.

