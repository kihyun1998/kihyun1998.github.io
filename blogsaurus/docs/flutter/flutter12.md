---
sidebar_position: 12
---

# 12. [Flutter] StatefulWidget


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드
---

```dart title='StatefulWidget'

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int counter = 0;

  void onClicked() {
    setState(() {
      counter += 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.white,
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                "Click Count",
                style: TextStyle(
                  fontSize: 30,
                ),
              ),
              Text(
                '$counter',
                style: const TextStyle(
                  fontSize: 30,
                ),
              ),
              IconButton(
                  iconSize: 40,
                  onPressed: onClicked,
                  icon: const Icon(
                    Icons.add_box_rounded,
                  ))
            ],
          ),
        ),
      ),
    );
  }
}
```



## 공부한 내용
---

### StatefulWidget

생성은 2가지 방법이 있다.

첫 번째는 `st` 입력 후 나오는 옵션에 따라 선택

두 번째는 StatelessWidget에서 code action으로 자동 변경

  
  

StatefulWidget은 크게 두 가지 부분으로 나뉘는데

첫 번째는 그냥 위젯 부분 ! MyApp 그자체?
두 번째는 UI를 구성하는 부분 ! 실제로 위젯들을 넣는 곳이다.

### IconButton

아이콘 버튼은 아이콘 버튼이다.
onPressed 속성에 클릭 시 호출할 함수를 넣으면 되고
icon 속성에 아이콘을 넣으면 된다.

### setState ( 중요 )

중요한 개념이다.  
`setState`를 사용해야 build 메소드가 다시 호출된다. 리액트의 리렌더링같은 느낌이다.

그냥 `setState`라는 함수가 호출되어야 리렌더링된다. `setState`안에 있는 내용만 영향을 주는 것이 아니다.

요약하자면 `새로고침`하는거라고 생각하면 된다.

변수 안에는 값이 계속해서 할당 될 것이지만 새로고침을 해주지 않으면 UI에 적용이 안된다. 변수의 값들을 UI 적용시키고 싶다면 **새로고침** ! 즉 `setState`를 사용해야 한다.