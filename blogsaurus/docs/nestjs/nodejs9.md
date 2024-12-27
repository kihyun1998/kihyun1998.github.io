---
sidebar_position: 9
---

# [NestJS] nest CLI 사용법

## 모듈 생성

```bash
nest g module auth
# 생성: auth.module.ts
```

## 컨트롤러 생성

```bash
nest g controller auth
# 생성: auth.controller.ts
```

## 서비스 생성

```bash
nest g service auth
# 생성: auth.service.ts
```

## DTO 클래스 생성

```bash
nest g class auth/dto/login.dto
nest g class auth/dto/register.dto
# 생성: login.dto.ts, register.dto.ts
```

## 필터 생성

```bash
nest g filter common/filters/http-exception
# 생성: http-exception.filter.ts
```



## 인터셉터 생성

```bash
nest g interceptor common/interceptors/transform
# 생성: transform.interceptor.ts
```