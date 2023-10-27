---
sidebar_position: 15
---

# 15. [Flutter] initState & dispose


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드
---

```dart title='initState와 dispose를 추가한 위젯'
class _MyTitleState extends State<MyTitle> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print("initState");
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    print("dispose");
  }

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



```dart title='버튼을 통해 title 바꾸기'
class _MyAppState extends State<MyApp> {
  bool show = true;

  void toggleTitle() {
    setState(() {
      show = !show;
    });
  }

  @override
  Widget build(BuildContext context) {
    print("build");
    return MaterialApp(
      ...
      children: [
        show ? const MyTitle() : const Text("error"),
        IconButton(
            onPressed: toggleTitle,
            icon: const Icon(
              Icons.check_box_rounded,
            ))
      ],
    ),
  }
}
```



## 공부한 내용
---

### initState

statefulWidget에는 build메서드 말고도 initState 메서드가 있다.

initState는 상태를 초기화하기 위한 메서드이다. 그렇지만 그냥 initState없이 초기화되지 않는가?

사용하는 곳이 있다. 바로 **부모 요소에 의존하는 데이터**를 초기화할 때 사용한다. context를 초기화할 때다

주로 API 구도할 때 사용한다고 한다. (아직 감이 안잡힘)


:::caution 주의할 점
1. build 메서드보다 먼저 호출해야 한다.
2. initState 메서드는 한번만 호출된다.
3. build 전에 호출해서 사용할 변수들이 초기화되는 것임.
:::

### dispose

위젯이 스크린에서 제거될 때 호출되는 메서드다.

위 코드도 dispose에 관한 예시를 테스트하기 위한 코드다. (완성된 코드는 아니다 생략된 부분있음)

API 업데이트나 리스너로 부터 구독을 취소하거나 form의 리스너로부터 벗어날 때 사용한다고 하는데 아직 이해가 안된다.


### lifecycle

이러한 `build`, `initState`, `dispose`들을 **Widget lifecycle**라고 부른다.