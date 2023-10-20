---
sidebar_position: 5
---

# 05. [Flutter] Container


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          backgroundColor: const Color(0xFF181818),
          body: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(
                  height: 30,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [ //...생략
                  ],
                ),
                // 추가한 내용 시작
                const SizedBox(
                  height: 60,
                ),
                Text(
                  "Total Balance",
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.6),
                    fontSize: 20,
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
                const Text(
                  "\$5 194 382",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 40,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(
                  height: 15,
                ),
                Row(
                  children: [
                    Container(
                        decoration: BoxDecoration(
                          color: const Color(0xFFF2B33A),
                          borderRadius: BorderRadius.circular(35),
                        ),
                        child: const Padding(
                          padding: EdgeInsets.symmetric(
                            vertical: 20,
                            horizontal: 50,
                          ),
                          child: Text(
                            "Transfer",
                            style: TextStyle(
                              fontSize: 18,
                            ),
                          ),
                        )),
                  ],
                )
                // 추가한 내용 끝
              ],
            ),
          )),
    );
  }
}
```


## 공부한 내용
---

### [Widget] Container

html의 div 같은 느낌이다. 근데 decorate 옵션을 통해서 커스텀이 많이 가능하다. (html의 div도 css를 통해 커스텀할 수 있는 것 처럼)

### [Widget] BoxDecoration

Container 위젯을 꾸며줄 수 있는 위젯이다.

:::tip BoxDecoration의 옵션
color : 색상 변경
borderRadius : 테두리 휘는 정도
:::