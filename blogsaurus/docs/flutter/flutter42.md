---
sidebar_position: 42
---

# 42. [flutter] riverpod NotifierProvider list state 관리
---

## state 관리
---

riverpod에서 NotifierProvider는 immutable한 값을 제공해줘서 불변 객체다. 그래서 `state.add()`나 `state.remove()`를 사용할 수 없다.

그래서 아래와 같은 방법을 사용해야 한다.

```dart
void add(newValue){
  state = state[...state,newValue];
}

void remove(value){
  if (state.contains(value)) {
    state = state.where((element) => element != value).toList();
  } 
}
```