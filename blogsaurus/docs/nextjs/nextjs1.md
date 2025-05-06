---
sidebar_position: 1
---

# [NextJS] NextJS 시작 전 기본 상식 정리
---

NextJS는 ReactJS의 프레임워크입니다. 그러므로 ReactJS에서 사용하는 핵심 개념에 대해서 알 필요가 있습니다.


## JSX
---

`JSX` = `JavaScript` + `HTML`입니다.

JavaScript안에 HTML을 쓸 수 있게 해주는 문법입니다.

```jsx
function App() {
  return <h1>Hello, world!</h1>;  // 이게 JSX
}
```

## State
---

컴포넌트 안에서 값을 기억하고 바뀔 수 있게 하는 변수라고 합니다.

값이바뀌면 화면을 다시 렌더링하게 됩니다.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
```

## Props
---

부모 컴포넌트가 자식 컴포넌트에게 값을 전달할 때 사용합니다.

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

<Welcome name="John" />  // name이 prop으로 전달됨

```


## Data Fetch
---

API로 값을 받아올 때 사용합니다.

`useEffect` + `fetch()`를 사용하거나 `axios`를 사용합니다. 

```jsx
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users').then(res => res.json()).then(data => setUsers(data));
  }, []);

  return <pre>{JSON.stringify(users)}</pre>;
}
```

## Router
---

React 자체에는 라우터는 없구 react-router-dom 사용한다고 하네요

## React dom
---

React로 만든 컴포넌트를 실제 HTML로 바꿔서 브라우저에 표시하는 엔진입니다.

