---
sidebar_position: 6
---

# [NestJS] Services2

## Not found 반환
---

```typescript
  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }
```

Not found를 반환하려면 `NotFoundException`을 사용하면 된다.

delete나 update할 때도 반환하고 싶다면

```typescript
  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }
  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
```

이런식으로 서비스마다 `getOne`을 호출하여 검사하면 된다.  