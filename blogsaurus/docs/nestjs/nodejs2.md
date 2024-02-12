---
sidebar_position: 2
---

# [NestJS] 구조

nestjs는 main.ts에서 시작한다. 여기에서 appmodule을 시작한다.

## module

```typescript
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
```

모듈은 init하는 부분인가?

## controller

controllers는 nodejs의 route 그리고 sprnig boot에서 MVC 패턴을 쓸 때의 controller와 같다.

```typescript
  @Get('/hi')
  sayHello(): string{
    return this.appService.getHi();
  }
```

## service

```typescript
  getHi():string{
    return "Hi";
  }
```

함수의 모음집같은 느낌
