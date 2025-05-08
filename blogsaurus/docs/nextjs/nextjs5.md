---
sidebar_position: 5
---

# [NextJS] styles
---

css를 사용할 수 있다.

보통 css는 styles/global.css에 넣는다.

vanilla js나 react할 때 아마 css를 위해 HTML에 className을 줄텐데. 이게 겹치면 골치아파진다.

그래서 nextJS에서는 `*.module.css`를 사용한다.

```css
.nav {
    background-color: red;
    padding: 50px 100px;
  }
  
  .list {
    display: flex;
  }
```

위가 `navigation.module.css`인거다.

즉 `navigation.tsx`를 꾸며주기 위한 파일이다
아래는 `navigation.tsx`코드다.

```tsx
import styles from '../styles/navigation.module.css';

export default function Nav() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
        ...
```


주의할 점은 이 moduel.css 파일에서는 body{} 이런거는 하지 않는다.