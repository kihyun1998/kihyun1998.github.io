---
sidebar_position: 22
---

# 22. [Flutter] Route & Animation

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title='추가한 코드'
return GestureDetector(
  onTap: () {
    // Navigator.push(
    //   context,
    //   MaterialPageRoute(
    //     builder: (context) => DetailScreen(
    //       title: title,
    //       thumb: thumb,
    //       id: id,
    //     ),
    //     fullscreenDialog: true,
    //   ),
    // );
    Navigator.push(
      context,
      PageRouteBuilder(
        pageBuilder: (context, animation, secondaryAnimation) =>
            DetailScreen(id: id, title: title, thumb: thumb),
        transitionsBuilder:
            (context, animation, secondaryAnimation, child) {
          var begin = const Offset(0, 1);
          var end = Offset.zero;
          var curve = Curves.ease;
          var tween =
              Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
          return SlideTransition(
            position: animation.drive(tween),
            child: child,
          );
        },
      ),
    );
  },
)
```


## 공부한 내용
---

### GestureDetector

동작을 감지하는 위젯이다.

많은 동작들을 감지한다. onTapDown, onTapUp, onTap.. 등

### Navigator.push

Navigator.push는 `context`와 `route`를 정의해줘야함.

`route`는 2가지 방법이 있다. 하나는 `MaterialPageRoute`를 사용하는 것이고 다른 하나는 `PageRouteBuilder`를 사용하는 것이다.

### MaterialPageRoute

builder만 정의해주면 되서 간단하다.

fullscreenDialog 속성을 통해서 불러오는 방식을 다르게 할 수 있는데 안드로이드 환경에서는 잘 안된다.

### PageRouteBuilder

`pageBuilder`와 `transitionBuilder` 2가지 콜백 함수가 있다.

`pageBuilder`는 페이지를 빌드하는 부분이다.

`transitionBuilder`는 전환하는 부분을 빌드한다.

`transitionBuilder`에는 begin값과 end값이 필요한 tween을 정해줘야 하고 추가적으로 curve 값을 chain을 통해 추가할 수 있다.

curve에 대한 정보는 [여기](https://api.flutter.dev/flutter/animation/Curves-class.html)에 자세히 나와있다.


`pageBuilder`한 페이지는 `transitionBuilder`의 child로 들어간다.

`transitionBuilder`의 return은 AnimationWidget을 상속받은 것 중 하나를 사용해주면 된다.