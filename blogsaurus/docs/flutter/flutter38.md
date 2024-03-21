---
sidebar_position: 38
---

# 38. [flutter] MVVM
---

## 논리
---


- `View`에서 사용자 입력 `ViewModel`로

- `ViewModel`에서 `Model`로 요청

- `ViewModel`에서 `View` 업데이트

## 종류
---

`View` : 사용자에게 보여지는 부분  
`ViewModel` : View의 상태를 관리하고 View의 비지니스 로직 담당  
`Repository` : DataSource에 접근
`DataSource` : 데이터를 가져오는 부분
`Model` : 데이터를 설계하는 부분

