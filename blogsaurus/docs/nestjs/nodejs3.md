---
sidebar_position: 3
---

# [NestJS] Controller API

## generator

```bash
nest g co
```

위를 통해서 controller를 generate 할 수 있다.

g는 generate의 약자이고 co는 controller의 약자이다.

generate를 사용하면 AppModule에 자동으로 import 해준다.

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

## 간단한 CRUD

### Get

```typescript
    @Get('/:id')
    getOne(){
        return "One";
    }
```

위처럼 하면 `/movies/{id}`에 대한 api다


```typescript
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Return One Movie id: ${id}`;
  }
```

이렇게 작성하면 id라는 url 파라미터를 이용할 수 있다.

`http://localhost:3000/movies/1`  이 주소로 보낸다면 

```
Return One Movie id: 1
```

라는 답변을 받을 수 있다.


### Post
---

```typescript
  @Post()
  create() {
    return 'Create movie';
  }
```

post는 이렇게


### Delete
---

```typescript
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `Remove movie : ${id}`;
  }
```


delete는 이런식으로 쉽게 할 수 있다.

## Update
---

```typescript
  @Patch('/:id')
  updateOne(@Param('id') id: string) {
    return `Update one id : ${id}`;
  }
```

Patch로 하나를 업데이트하거나

```typescript
  @Put()
  updateAll() {
    return 'All update';
  }
```

put으로 모두 업데이트 할 수 있다.