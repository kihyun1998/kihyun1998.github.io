---
sidebar_position: 4
---

# [NextJS] Data fetch
---

```tsx
"use client";

import { useEffect, useState } from "react";

export default function HomePage(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=>{
        const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
        const json =  await res.json();
        setMovies(json);
        setIsLoading(false);
    }
    useEffect(()=>{
        getMovies();
    },[]);
    return (
        <div>
            <h1>Home</h1>
           {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    );
}
```

이런식으로 use client를 사용한 data fetch코드가 있는데 이러면 안된다 이거입니다.

```tsx

export const metadata = {
    title: 'Home',
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
    await new Promise((resolve)=> setTimeout(resolve,5000));
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
        <div>
            <h1>Home</h1>
           {JSON.stringify(movies)}
        </div>
    );
}
```

요래 할 수 있습니다. async await

## Suspense
---

### Promise all

`Promise.all([])`을 사용하면 flutter에서 `Future.wait([])`과 같습니다. 비동기를 한번에 돌리는 함수다.

### Suspense

근데 Suspense도 비동기를 한번에 돌리는건데 이건 Tag다.

즉. 비동기 작업이 있는 component를 표시하는데 동시에 하는데 끝나는 순서대로 화면에 보여주는거다.

```tsx
export default async function MovieDetail(props: { params: { id: string } }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
```

이 방식이 멋진 이유는 loading fallback에 대해서 각각 설정할 수 있는 것에 있는듯?

## Error
---

error.tsx를 만들면 error가 throw됐을 때 보여주는 페이지를 설정할 수 있습니다. 페이지 또는 컴포넌트.

꿀팁 2개

1. use client 써야함
2. error.tsx는 그 폴더 밖에 커버 못함. 즉 loading이나 layout처럼 밑으로 내려가지 않고 올라가지도 않고 딱 그 폴더만 적용할 수 있음.