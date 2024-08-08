---
sidebar_position: 48
---

# 48. [flutter] riverpod에서 AsyncValue가 Loading이 되는 경우
---

## 정리
---

flutter_riverpod을 사용할 때 갑자기 AsyncValue가 Data에서 Loading으로 변하는 경우를 마주쳤던 적이 있다.

이 경우는 AsyncValue를 구하는 fetch(예시임) 함수 안에 다른 provider를 watch하는 경우에

그 watch하던 값이 변경되어서 값이 update된다면 AsyncValue가 Loading으로 변하는 현상이 있다.

왠만하면 AsyncNotifierProvider 안에는 ref.watch()를 자주 사용하지 말자.

사용하더라도 신중하게 사용하기 !!