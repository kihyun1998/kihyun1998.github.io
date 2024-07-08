---
sidebar_position: 4
---

# [NestJS] Decorators

다양한 데코레이터에 대해 알아볼 예정

## @Body
---

```typescript
  @Post()
  create(@Body() data) {
    return data;
  }
```

이렇게 사용해서 json으로된(다른 것일 수도 있고) data를 return 할 수 있다.

```typescript
  @Patch('/:id')
  updateOne(@Param('id') id: string, @Body() updateData) {
    return {
      id: id,
      ...updateData,
    };
  }
```

## @Query
---

```typescript
  @Get('/search')
  search(@Query('year') year: string) {
    return `search year is ${year}`;
  }
```

query를 사용해서 parameter를 받아올 수 있다.

`/movies/search?year=1998` 이렇게 요청한다면 아래와 같이 연도 설정에 따라 잘 나오게 된다.

```
search year is 1998
```