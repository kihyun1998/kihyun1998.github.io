---
sidebar_position: 5
---

# [NestJS] Services

servie에 대해 알아본다

## 만드는 법

```bash
nest g s
```

약자를 통해 간단하게 생성할 수 있다.

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {}
```

이런식으로 만들어진다.

## 서비스
---

### 엔티티

```typescript
export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
```

이런식으로 엔티티를 구현했다.

### 서비스

```typescript
import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }
  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }
  create(data) {
    this.movies.push({
      id: this.movies.length + 1,
      ...data,
  });
}
```

get에 대한 서비스는 이렇게 간단하게 구현된다. 원래는 데이터베이스에서 값을 가져오는 로직이 들어가야한다.


### controller

```typescript
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() data) {
    return this.moviesService.create(data);
  }
  
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }
```

controller는 이렇게 수정할 수 있다.