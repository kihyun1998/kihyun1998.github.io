---
slug: mvvm
title: MVVM 아키텍처
authors: [kihyun]
tags: [KOSTA, 플러터, flutter,mvvm ]
---

# MVVM 아키텍처
---

## 관심사 분리
---

모듈 별 경계를 나누고 모듈간 약속을 정하는 것 like a 전기 콘센트와 플러그의 관계라고 한다.


## MVVM 이론
---

`View`와 `ViewModel` 그리고 `Model`을 나누어 View를 쉽게 변경할 수 있는 목적을 갖고 있는 아키텍처 패턴

:::tip 역할
`View` : UI  
`ViewModel`: View 상태 및 로직 담당  
`Model`: 비지니스 로직과 데이터 입출력 담당
:::

핵심은 `데이터 바인딩`이다.

`데이터 바인딩`이란 간단히 말하면 ViewModel과 View가 서로를 의존하지 않는 것 `Provider` 패키지를 사용해서 데이터 바인딩 이용한다는데 나는 Bloc를 사용해서 하고 싶다.. 당장은 Provider로 구현해보기

페이지 마다 하나의 ViewModel이 있어야 하고 ViewModel은 View의 상태와 로직을 관리한다.

Model은 `Service`, `Model`, `Repository`가 있는데 `Service`는 전역 상태와 비지니스 로직을 관리하고 `Model`은 데이터 `Repository`는 데이터 요청 로직을 담당한다.