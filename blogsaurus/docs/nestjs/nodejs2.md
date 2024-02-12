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
---

controllers는 nodejs의 route 그리고 sprnig boot에서 MVC 패턴을 쓸 때의 controller와 같다.

```typescript
  @Get('/hi')
  sayHello(): string{
    return this.appService.getHi();
  }
```

### CLI로 controller 만들기

```bash
nest g co
```

이렇게 하면 controller 이름 말하라고 하면 자동으로 app.module에도 추가되구 컨트롤러 폴더도 생김


## service
---

```typescript
  getHi():string{
    return "Hi";
  }
```

함수의 모음집같은 느낌
