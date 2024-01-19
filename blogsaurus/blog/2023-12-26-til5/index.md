---
slug: flutter-til-5
title: Flutter TIL - 5
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, 생성자, constructor, nullabel]
---

# Flutter TIL - 5
---

## nullable constructor
---

### 실수한 코드

처음에 class의 인스턴스를 만들 때 nullable로 선언하면 될 줄 알았다.

```dart
class NaviState {
  final int? index;  
  final bool? yesOrNo;  

  NaviState({
    this.index,
    this.yesOrNo,
  });
}
```

이렇게 했더니 사용하는 변수 타입이 nullabe이 되어버려서 계속 사용하는 변수 뒤에 `!`를 붙여줘서 null이 아님을 명시했어야 했는데

### 원했던 코드

```dart
class NaviState {
  final int index;
  final bool yesOrNo;

  NaviState({
    int? index,
    bool? yesOrNo,
  })  : index = index ?? 0,
        yesOrNo = yesOrNo ?? false;
}
```

이렇게 nullable로 선언하는 것이 아닌 생성자에서 nullable로 받고 null인 경우 초기값을 설정하도록 하는 것이 내가 의도한 방향성과 더 맞는 코드인 것을 알게 됐다.


## Navigator.pushNamed
---

flutter에서 라우팅 하는 방법은 좀 다양한 것 같다.

그 중 `Navigator.pushNamed`이다.

Navigator.pushNamed로 context에 불러올 위젯 이름을 push한다.

그러면 정의해 놓은 `onGenerateRoute`를 통해서 page를 불러오면 된다. 간단하다.

## GestureDetector 렌더링 문제
---

갑자기 GestureDetector만 사용하면 렌더링 에러가 났다.

GestureDetector에 사이즈를 제공해주지 않았기 때문이라고 한다. (ListView도 마찬가지다)

```dart
Expanded(
  child: SizedBox(
    height: 200,
    width: 200,
    child: GestureDetector(),
  ),
)
```

이런식으로 구현할 수 있다.