---
sidebar_position: 17
---

# 17. [Flutter] Timer

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart
import 'dart:async';

class _HomeScreenState extends State<HomeScreen> {
  int totalSeconds = 1500;
  bool isRunning = false;
  late Timer timer;

  void onTick(Timer timer) {
    setState(() {
      totalSeconds -= 1;
    });
  }

  void onClickedStart() {
    setState(() {
      isRunning = true;
    });
    timer = Timer.periodic(
      const Duration(seconds: 1),
      onTick,
    );
  }

  void onClickedPause() {
    setState(() {
      isRunning = false;
    });
    timer.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      body: Column(
        children: [
          Flexible(
            flex: 1,
            child: Container(
                alignment: Alignment.bottomCenter,
                child: Text(
                  '$totalSeconds',
                  style: TextStyle(
                    color: Theme.of(context).cardColor,
                    fontSize: 100,
                    fontWeight: FontWeight.w600,
                  ),
                )),
          ),
          Flexible(
            flex: 3,
            child: Center(
              child: IconButton(
                iconSize: 100,
                color: Theme.of(context).cardColor,
                onPressed: isRunning ? onClickedPause : onClickedStart,
                icon: Icon(
                  isRunning
                      ? Icons.pause_circle_outline
                      : Icons.play_circle_outline,
                ),
              ),
            ),
          ),
          ...
        ],
      ),
    );
  }
}
```


## 공부한 내용
---

### Timer

시간에 관한 동작을 제공해주는 class

:::tip Timer.periodic
Timer.periodic( 주기, 실행 함수) 형식이다.

`실행 함수`에는 Timer class의 변수를 인자로 넣어줘야 한다.

정지 동작을 위해서는 timer.cancel()을 사용한다.
:::

### LateError (LateInitializationError: Field '변수명' has not been initialized.)

변수를 late로 지정해서 초기화를 시키지 않은 상태에서 사용하면 나오는 에러다.

변수를 사용하기 전에 꼭 초기화 시키기
