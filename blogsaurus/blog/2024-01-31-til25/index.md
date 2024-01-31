---
slug: flutter-til-25
title: Flutter TIL - 25
authors: [kihyun]
tags: [TIL, 플러터, flutter, navigator, named push,라우팅, 애니메이션 ]
---

# Flutter TIL - 25
---

## Navigator
---

플러터에서 창 전환하는 방법은 여러 가지가 있다.

나는 Navigator.pushNamed가 좋다.

방법은 간단하다. onGenerateRoute 함수를 만들어서 어떤 이름이 들어왔을 때 어떤 페이지로 라우팅 해줄지 정하면 된다.

```dart
  static const String main = 'main';
  static const String login = 'login';

  static Route<dynamic>? onGenerateRoute(RouteSettings settings) {
    late final Widget page;
    switch (settings.name) {
      case RoutePath.login:
        page = const LoginPage();
        break;
      case RoutePath.main:
        page = const MainPage();
        break;
    }

     return MaterialPageRoute(builder: (context) => page);
  }
```

간단하게 이런식이다. 페이지 이름들을 정의하고 switch case를 사용하여 `=> page` 이런식으로 라우팅을 한다.

main.dart에서 MaterialApp안에 아래와 같이 작성만 하면된다.

```dart
      // 초기 페이지 설정
      initialRoute: RoutePath.login,
      // onGenerateRoute 설정
      onGenerateRoute: RoutePath.onGenerateRoute,
```


### 페이드 아웃 방식

```dart
return PageRouteBuilder(
  pageBuilder: (context, animation, secondaryAnimation) => page,
  transitionsBuilder: (context, animation, secondaryAnimation, child) {
    return FadeTransition(
      opacity: animation,
      child: child,
    );
  },
  transitionDuration: const Duration(seconds: 1),
);
```

페이드 아웃을 하려면 FadeTransition을 사용할 수 있다.

그리고 `transitionDuration` 속성을 사용해서 페이드 아웃 시간도 정할 수 있다.

### 슬라이드 방식

```dart
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => page,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(10.0, 0.0);
      const end = Offset.zero;
      const curve = Curves.ease;
      final tween =
          Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
      final offsetAnimation = animation.drive(tween);
      return SlideTransition(
        position: offsetAnimation,
        child: child,
      );
    },
    transitionDuration: const Duration(milliseconds: 500),
  );
```

이건 슬라이드 방식이다.

begin, end에서 사용하는 Offset은 좌표를 나타낸다. bigin의 Offset x좌표 크기가 작으면 움직이는 속도도 작아짐

curve 관련해서는 아래 정리한다.

:::tip curve
`Curves.linear`: 일정한 속도로 애니메이션을 진행합니다.
`Curves.ease`: 처음과 끝은 천천히, 중간은 빠르게 가속하는 가속도 곡선입니다.
`Curves.easeIn`: 처음에 천천히 가속하는 가속도 곡선입니다.
`Curves.easeOut`: 끝에서 천천히 감속하는 감속도 곡선입니다.
`Curves.easeInOut`: 처음과 끝에서 천천히 가속하고 중간에서 천천히 감속하는 곡선입니다.
`Curves.bounceIn`: 바운스 효과가 있는 곡선으로, 처음에 튀어오르는 효과가 있습니다.
`Curves.bounceOut`: 바운스 효과가 있는 곡선으로, 끝에서 튀어오르는 효과가 있습니다.
`Curves.elasticIn`: 탄력 효과가 있는 곡선으로, 처음에 잠깐 튕기는 효과가 있습니다.
`Curves.elasticOut`: 탄력 효과가 있는 곡선으로, 끝에서 잠깐 튕기는 효과가 있습니다.
:::

그렇게 해서 `SlideTransition`를 사용해서 슬라이드 형식으로 한다. 

`transitionsBuilder`의 `child`값에는 `pageBuilder`에서 return한 page가 들어간다.


## 애니메이션
---

```dart
  void _animateWindowAndNavigate(BuildContext context) {
    const targetSize = Size(800, 800);
    const duration = Duration(milliseconds: 500); // 애니메이션 지속 시간
    const stepDuration = Duration(milliseconds: 10);
    int steps = duration.inMilliseconds ~/ stepDuration.inMilliseconds;
    double widthStep = (targetSize.width - appWindow.size.width) / steps;
    double heightStep = (targetSize.height - appWindow.size.height) / steps;

    Timer.periodic(stepDuration, (timer) {
    appWindow.size = Size(
      appWindow.size.width + widthStep,
      appWindow.size.height + heightStep,
    );

      if (appWindow.size.width >= targetSize.width ||
          appWindow.size.height >= targetSize.height) {
        timer.cancel();
        appWindow.size = targetSize;

        // 창 크기 조정 후 페이지 전환
        Navigator.pushNamed(context, RoutePath.main);
      }
    });
  }
```

페이지가 변할 때 각 페이지에 맞는 크기를 위해서 처음에 페이지에 도달하면 그냥 바로 변하게 했더니 버벅거리는 것 같아서 사이즈를 키우고 화면 전환하도록 해봤다.

기존 크기에서 스텝마다 계산된 값(`widthStep`,`heightStep`)을 스텝의 시간(`stepDuration`)마다 키우는 것이다.

```dart
    Timer.periodic(stepDuration, (timer) {
    appWindow.size = Size(
      appWindow.size.width + widthStep,
      appWindow.size.height + heightStep,
    );

  ...
  
  })
```

`Timer.periodic`을 사용해서 `stepDuration` 마다 아래 로직을 수행하면서 if문을 통해 조건이 충족한다면 `timer.cancel` 즉 무한루프를 나오는 듯한 break를 거는 로직ㅇ비니다.

근데 위는 화면이 커질수록 버벅거린다. 그래서 마지막에 커지는 속도를 줄여야 하나 했다. 아래와 같은 코드가 나왔다.


```dart
  void _animateWindowAndNavigate(BuildContext context) {
    const targetSize = Size(800, 800);
    const duration = Duration(milliseconds: 500); // 애니메이션 지속 시간
    const timerDuration = Duration(milliseconds: 10);
    const curve = Curves.decelerate;
    int steps = duration.inMilliseconds ~/ timerDuration.inMilliseconds;
    int currentStep = 0;

    Timer.periodic(timerDuration, (timer) {
      double fraction = (currentStep / steps);
      // 'Curves.decelerate' 커브를 사용하여 변화율을 계산합니다.
      double easedFraction = curve.transform(fraction);
      double width = appWindow.size.width +
          ((targetSize.width - appWindow.size.width) * easedFraction);
      double height = appWindow.size.height +
          ((targetSize.height - appWindow.size.height) * easedFraction);

      appWindow.size = Size(width, height);

      currentStep++;
      if (fraction >= 1) {
        timer.cancel();
        appWindow.size = targetSize; 

        // 창 크기 조정 후 페이지 전환
        Navigator.pushNamed(context, RoutePath.main);
      }
    });
  }
```

위 코드는 마지막에 속도를 줄여야 하기에 `Curves.decelerate`를 사용해서 커브 값을 얻었고 변화율을 계산하여 적용해봤지만

그래도 버벅거림은 해결하지 못했습니다.


```dart
  static void animateWindowForMain(BuildContext context, String routePath) {
    const targetSize = mainPageSize; // 정의된 main page size
    const duration = Duration(milliseconds: 500); // 애니메이션 지속 시간
    const curve = Curves.easeOutExpo; // 보다 부드러운 애니메이션을 위한 커브
    final numFrames = duration.inMilliseconds ~/ 16; // 약 60fps

    List<Size> frameSizes = List.generate(numFrames, (index) {
      double progress = (index / numFrames);
      double animatedValue = curve.transform(progress);
      double width = appWindow.size.width +
          ((targetSize.width - appWindow.size.width) * animatedValue);
      double height = appWindow.size.height +
          ((targetSize.height - appWindow.size.height) * animatedValue);
      return Size(width, height);
    });

    int currentFrame = 0;
    Timer.periodic(const Duration(milliseconds: 16), (timer) {
      Size newSize = frameSizes[currentFrame];
      appWindow.size = newSize;

      currentFrame++;
      if (currentFrame >= frameSizes.length) {
        timer.cancel();
        appWindow.size = targetSize;

        // 창 크기 조정 후 페이지 전환
        Navigator.pushNamed(context, routePath);
      }
    });
  }
```

그래서 List<Size> 타입의 변수 안에 미리 크기들을 계산해서 넣어놓고 Timer.periodic에선 리스트에 있는 값을 꺼내기만 하면 되니 더욱 깔끔해질 수 있었습니다.