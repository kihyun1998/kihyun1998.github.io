---
sidebar_position: 1
---

# [TypeScript] 기본 1

타입스크립트는 형을 지정해줄 수 있는 자바스크립트다.

## boolean

```typescript
let bol : boolean = true;
```

## nubmers

```typescript
let dec : number = 6;
let hex : number = 0xf00d;
let bin : number = 0b1010;
let oct : number = 0o744;
```

## string

```typescript
let str : string = "string";
```

## array

```typescript
let lst1 : number[] = [1,2,3];
let lst2 : Array<number> = [1,2,3];
```

## tuple

```typescript
let t : [string,number] = ["str",10];
```

## enum

```typescript
enum ABC {A,B,C}
let a : ABC = ABC.A;
```

## any

```typescript
let anyisany : any = 1;
anyisany = "a";
```

## function

```typescript
function add(x : number,y : number) : number {
    return x+y;
}
```

## struct

```typescript
interface Person{
    name: string;
    age: number;
    readonly address: string;
}

let person: Person{
    name: "A",
    age: 10,
    address: "Seoul"
}
```

readonly 라는게 있는데 이게 박혀있으면 수정 못함 `const`같은거


## void

```typescript
function sayHi() : void {
    console.log("Hi");
}
```

## null & undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

## never

```typescript
function error(message: string): never{
    throw new Error(message);
}
```

`void`랑 `never`의 차이가 헷갈리긴 함. `void`는 반환값이 없는거고 `never`는 무한 반복하는 함수이거나 에러를 throw하는 함수여서 함수의 실행이 멈추지 않기 때문에 never라고 하네요