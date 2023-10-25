---
sidebar_position: 4
---

# 04. [Flutter] 위젯

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          backgroundColor: Color(0xFF181818),
          body: Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Column(
              children: [
                SizedBox(
                  height: 50,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Text(
                          "Hey, Park",
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 30,
                              fontWeight: FontWeight.bold),
                        ),
                        Text(
                          "Welcome back",
                          style: TextStyle(
                            color: Colors.white.withOpacity(0.6),
                            fontSize: 15,
                          ),
                        ),
                      ],
                    )
                  ],
                )
              ],
            ),
          )),
    );
  }
}
```


## 공부한 내용
---

### [Widget] Column

children이라는 인자를 통해서 들어온 위젯들을 세로로 쌓음


### [Widget] Row

children이라는 인자를 통해서 들어온 위젯들을 가로로 쌓음


:::tip Column과 Row의 옵션
MainAxisAlignment - 해당 Column 또는 Row에서 메인 축(수직, 수평)에서의 위치 조절할 수 있다.
crossAxisAlignment - 해당 Column 또는 Row에서 반대 축(수직, 수평)에서의 위치 조절할 수 있다.
:::


### [Widget] TextStyle

`Text` 위젯 속에 `style` 옵션 값으로 들어가여 문자열 스타일 지정

:::tip TextStyle 옵션
color - 폰트 색을 변경한다.
fontSize - 폰트 크기를 변경한다.
fontWeight - 폰트 굵기를 변경한다.

색 설정 방법 : `Colors.` 하면 알 수 있다. `.`을 한번 더 하면 채도 등을 정할 수 있음.

아니면 Color(0xFF[R: 16진수 G: 16진수 B: 16진수])로 설정할 수 있다.
:::

### [Widget] Padding

이 위젯으로 감싸진 위젯은 패딩이 걸림

:::tip Padding 옵션
padding: 꼭 넣어줘야 하는데 `EdgeInsets.` 하면 패딩 위치, 값을 넣는 옵션들이 나온다.
child: 패딩이 적용되는 대상
:::

### [Widget] SizeBox

그냥 사이즈를 차지해주는 박스다. 좀더 정교한 패딩 느낌

:::tip SizeBox 옵션
height: 높이 조절
width: 폭 조절
::: 