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
  late Timer timer;

  void onTick(Timer timer) {
    setState(() {
      totalSeconds -= 1;
    });
  }

  void onClicked() {
    timer = Timer.periodic(
      const Duration(seconds: 1),
      onTick,
    );
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
:::