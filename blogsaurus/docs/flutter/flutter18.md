---
sidebar_position: 18
---

# 18. [Flutter] split & substring

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart
class _HomeScreenState extends State<HomeScreen> {
  static const twentyFiveMinutes = 1500;
  int totalSeconds = twentyFiveMinutes;
  
  ...

  String format(int seconds) {
    var duration = Duration(seconds: seconds);
    return duration.toString().split(".")[0].substring(2);
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
                  format(totalSeconds),
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

### static const

const 상수를 선언하고 싶으면 `static const`로 선언해야 사용할 수 있다.

정적으로 선언해야 하기 때문이다.

:::caution static const로 안한다면
Only static fields can be declared as const.
Try declaring the field as final, or adding the keyword 'static'.

위와 같은 에러를 만난다. 정적으로 해달라고 말하는 오류 메시지다.
:::


### split

다른 언어에서도 많이 사용되는 함수다.

```dart
문자열.split("구분자")
```

구분자를 이용해서 문자열을 나누는 함수다. 그리고 그 결과로 배열을 반환한다.
index를 이용하거나 (ex.. a[0] a[1] .. ) `first`, `second`를 이용해서 접근할 수 있다.


### substring

파이썬의 슬라이싱과 같다. 문자열을 어디서부터 어디까지 잘라서 사용할 수 있는 함수다.

```dart
substring(시작위치)
```

위와 같이 사용하면 자르기 `시작한 위치`부터 문자열의 끝까지 문자열을 반환한다.

```dart
substring(시작위치, 끝위치)
```

위와 같이 사용하면 자르기 `시작한 위치`부터 `끝위치로 입력한 값 - 1`까지 문자열을 반환한다.


