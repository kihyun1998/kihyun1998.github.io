---
sidebar_position: 3
---

# 03. [KOSTA] 플러터 상태관리

## 상태란
---

UI 방식은 명령형/선언형이 있는데 flutter는 선언형 UI Framework다.

### 상태관리

공유 상태가 변경될 때 동기화하는 것

중앙집중식으로 상태 관리하면 좋다.


## StatefulWidget
---

부모 위젯이 모든 공유상태를 갖는다. 상태 변경 시 setState()로 자식 위젯 갱신

자식 위젯은 부모 위젯의 공유 상태를 받는다. 이벤트 발생 시 부모 위젯에게 전달하여 공유 상태를 변경

장점: 별도 패키지 없이 손쉽게 가능

단점: 자식 위젯에게 공유 상태 전달할 때 속성이 계속 파고드는 prop drilling 문제가 생긴다. 앞 위젯들에게 const 위젯을 붙일 수 없다.

## InheritedWidget
---

자식 위젯이 중간 위젯을 거치지 않고 곧바로 접근할 수 있는 위젯

`updateShouldNotify()`를 사용해서 갱신할 수 있음.

특징: 중간 위젯들을 거치지 않는다.

자식 위젯 접근 및 갱신여부 결정

단점은 작성해야할 코드가 많고 고려해야할 부분이 너무 많다.

이것을 개선한 것이 Provider

## Provider
---

inheritedWidget을 wrap

:::tip 접근방법
`context.watch()`: `notifyListeners()` 호출 시 위젯 갱신  
`context.read()`: `notifyListeners()` 호출해도 갱신되지 않음  
`context.select()`: `watch`와 동일하나, 특정 속성이 변경된 경우에만 갱신
`Consumer()`: `watch`와 동일하나, 특정 위젯만 갱신
`Selector()`: `select`와 동일하나 특정 위젯만 갱신
:::


ChnageNotifierProvider{create: }로 등록하면 부모에서 dispose()

ChnageNotifierProvider.value()로 등록하면 부모에서 dispose() 안함

그래서 여기서는 생성자 사용하면 안된다.

## Riverpod
---

## Cubit
---

## Bloc
---


