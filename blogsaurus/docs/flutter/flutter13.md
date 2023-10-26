---
sidebar_position: 13
---

# 13. [Flutter] Build context & another


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드
---

```dart title='ThemeData 사용'
class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // css 같은 느낌?
      theme: ThemeData(
        textTheme: const TextTheme(
          titleLarge: TextStyle(
            color: Colors.red,
          ),
        ),
      ),
      home: const Scaffold(
        backgroundColor: Colors.white,
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              MyTitle(),
            ],
          ),
        ),
      ),
    );
  }
}
```



```dart title='MyTitle 위젯'
class MyTitle extends StatelessWidget {
  const MyTitle({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      "My Title",
      style: TextStyle(
        fontSize: 30,
        color: Theme.of(context).textTheme.titleLarge!.color,
      ),
    );
  }
}
```



## 공부한 내용
---

### Build context

context를 통해서 부모의 위젯 요소에 접근할 수 있다.

```dart title='example use context'
Theme.of(context).textTheme.titleLarge!.color
```

### ThemeData

테마를 저장할 수 있음

테마 Enum 버전으로 생각해야하나? 변수 지정? 암튼 그런 느낌

### 느낌표 연산자

```dart title='느낌표'
Theme.of(context).textTheme.titleLarge!.color
```
다시 위 코드를 보면 titleLarge 옆에 느낌표가 있는데 이는 null이 아님을 확신한다는 연산자이다. 자매품으로 물음표가 있는데 이건 null일 수도 있고 아닐 수도 있다이다.

이렇게 느낌표 해줬는데 null 들어오면 exception 이러난다.