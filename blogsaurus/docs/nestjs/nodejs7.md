---
sidebar_position: 7
---

# [NestJS] 유효성 검사

## DTO
---

```typescript
export class CreateMoiveDto {
  readonly title: string;
  readonly year: number;
  readonly genres: string[];
}
```

이렇게 dto를 구현해놓고

```typescript
  create(data: CreateMoiveDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...data,
    });
  }
```

```typescript
  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.moviesService.create(data);
  }
```

이런식으로 사용할 수 있습니다.

## class-validator, class-transformer
---

```bash
npm i class-validator class-transformer
```

npm 설치를 하면 사용할 수 있다.

### 사용

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
```

main.ts에서 `ValidationPipe` 사용을 선언한다.


```typescript
export class CreateMoiveDto {

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;
  
  @IsString({each: true})
  readonly genres: string[];
}

```

그리고 dto를 이렇게 변환한다.

그럼 API가 Bad Request라면 자동으로 Bad Request 날려준다.


### whitelist

```typescript
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
```

이런식으로 `whitelist`와 `forbidNonWhitelisted`를 설정할 수 있는데 

whitelist만 있으면

```json
{
	"hack":"hack"
}
```

이렇게 보내면

```json
{
    "message": [
        "title must be a string",
        "year must be a number conforming to the specified constraints",
        "each value in genres must be a string"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```
이렇게 무시하게 되고

### forbidNonWhitelisted

```typescript
  app.useGlobalPipes(new ValidationPipe({
    ...
    forbidNonWhitelisted: true
  }));
```

`forbidNonWhitelisted`를 사용해주면

```json
{
    "message": [
        "property hack should not exist",
        "title must be a string",
        "year must be a number conforming to the specified constraints",
        "each value in genres must be a string"
    ],
    "error": "Bad Request",
    "statusCode": 400
}
```


### transform

```typescript
  app.useGlobalPipes(new ValidationPipe({
    ...
    transform: true,
  }));
```

transform을 사용하면 url Param을 numer로 받을 수 있다. 안쓰면 string으로 날라온다.

즉 id를 number로 받을 수 있어서 좋다. (보안도 안전해짐)

```typescript
  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }
```

예를 들어서이런식이다.