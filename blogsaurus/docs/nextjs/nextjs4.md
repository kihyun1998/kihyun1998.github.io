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

