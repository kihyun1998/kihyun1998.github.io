---
sidebar_position: 3
---

# [NestJS] Controller API


## Controller

```typescript
@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll(){
        return "All Movies";
    }
}
```

이렇게 만들어지고 getAll이라는 api를 만들었는데 url은 `/`로 접속해야 하는게 아니라 `/moveis`로 접속해야 not found가 나오지 않는다.

Controller('movies')이기 때문이다.

## Get관련

### :id

```typescript
    @Get('/:id')
    getOne(){
        return "One";
    }
```

위처럼 하면 `/movies/{id}`에 대한 api다