---
sidebar_position: 46
---

# 46. [flutter] riverpod - ProviderScope  
---

riverpod에서는 state를 가장 가까운 provide scope에서 찾는다. 그래서 페이지에서 필요로하는 state가 있다면 provide로 감싸는 기술이 필요함.

그렇지 않으면 계속해서 만들어내기 때문에 성능 저하를 가져온다.

## 사용처 
--- 

1. 위젯 리빌딩을 최적화  
2. sync provider 초기화  
3. dialog에서 dialog를 띄운 state에 접근할 수 있도록 하게 해줌.
  > 원래 안되는 기능인데 되게 해주는 것이다.  
4. 서브트리관련

### 위젯 리빌딩

ListView.builder 할 때 ListTile같은 걸 사용할 때 추가, 삭제, 조회 등을 할 때 있던 값을 유지하지 않고 리빌딩하는 현상이 있어서 성능상 좋지 않다. 이를 ProviderScope로 감싸주어야 함.


:::tip
`warning`: `scoped_providers_should_specify_dependencies`

> 해당 경고문은 root widget tree를 감싸주는 provider scope가 아니라 widget subtree를 감싸주는 provider scope에서 override된 provider는 dependencie를 명시해야한다는 경고문이라고 합니다.

riverpod provider에서 `@riverpod`을 `@Riverpod(dependencies: [의존하는 provider])` 이런식으로 작성하면 된다고 합니다.
:::
