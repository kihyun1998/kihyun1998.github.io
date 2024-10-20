---
sidebar_position: 3
---

# [Spring-Cloud] Spring Config 서버 구성
---

## 필요성

Spring Config 서버를 사용하면 Server에 MySQL URL이나 민감 정보들을 가져올 수 있습니다.

MAS에서는 spring server에 설정값이 많아지는데 그러면 관리가 어려워서 Config Server를 사용합니다.

## 1. Repository 만들기

Config Server를 사용하기 위해서는 Repository를 먼저 생성합니다.

그리고 설정 파일 생성 및 키를 생성해서 통신할 수 있도록 한다.

## 2. 파일 생성

안에 `.properties` 파일을 생성합니다.

## 3. 키 생성 및 등록

`ssh-keygen` 으로 priv, pub 키 생성 후 pub 키를 repository에 deploy key로 저장합니다.

## 4. Spring boot config server 생성

의존성은 `Config Server` 와 `Spring Security` 를 추가해서 만듭니다.

## 5. 어노테이션 등록

main class에 `@EnableConfigServer` 를 추가해줘야 합니다.