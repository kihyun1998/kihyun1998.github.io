---
sidebar_position: 2
---

# [TypeScript] function

## arrow function
---

```typescript
function add(a:number, b:number){
    return a+b
}

const add = (a:nubmer,b:number) => a+b;
```

위처럼 가능


## call signature
---

```typescript
type Add = (a:number, b:number)=>number;

const add:Add = (a,b)=>a+b;
```

Add라는 type을 만들면 위처럼 사용할 수 있어