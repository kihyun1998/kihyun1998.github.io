---
sidebar_position: 10
---

# 10. [Flutter] 카드 재사용


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart title='재사용하는 카드 클래스'
class CustomCard extends StatelessWidget {
  final String name, code, amount;
  final IconData icon;
  final bool isInverted;
  final Color _blackColor = const Color(0xFF1F2123);
  final Color _whiteColor = Colors.white;

  const CustomCard({
    super.key,
    required this.name,
    required this.code,
    required this.amount,
    required this.icon,
    required this.isInverted,
  });
  @override
  Widget build(BuildContext context) {
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        color: isInverted ? _whiteColor : _blackColor,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(
          vertical: 20,
          horizontal: 20,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  name,
                  style: TextStyle(
                    color: isInverted ? _blackColor : _whiteColor,
                    fontSize: 30,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.baseline,
                  textBaseline: TextBaseline.alphabetic,
                  children: [
                    Text(
                      amount,
                      style: TextStyle(
                        color: isInverted ? _blackColor : _whiteColor,
                        fontSize: 20,
                      ),
                    ),
                    const SizedBox(
                      width: 10,
                    ),
                    Text(
                      code,
                      style: TextStyle(
                        color: isInverted
                            ? _blackColor.withOpacity(0.7)
                            : _whiteColor.withOpacity(0.7),
                        fontSize: 15,
                      ),
                    ),
                  ],
                )
              ],
            ),
            Transform.scale(
              scale: 2.1,
              child: Transform.translate(
                offset: const Offset(-5, 14),
                child: Icon(
                  icon,
                  color: isInverted ? _blackColor : _whiteColor,
                  size: 80,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}


```dart title='재사용 카드 & 스크롤 추가'
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF181818),
        body: SingleChildScrollView(
          child: Padding( ... // 생략
                const CustomCard(
                  name: "Euro",
                  code: "EUR",
                  amount: "6 428",
                  icon: Icons.euro_rounded,
                  isInverted: false,
                ),
                Transform.translate(
                  offset: const Offset(0, -20),
                  child: const CustomCard(
                    name: "Dollar",
                    code: "USD",
                    amount: "55 622",
                    icon: Icons.attach_money_outlined,
                    isInverted: true,
                  ),
                ),
                Transform.translate(
                  offset: const Offset(0, -40),
                  child: const CustomCard(
                    name: "Rupee",
                    code: "INR",
                    amount: "28 981",
                    icon: Icons.currency_rupee_sharp,
                    isInverted: false,
                  ),
              )
            ),
          ),
        ),
    ),
  }
}
```


## 공부한 내용
---

### 3항 연산자 

```dart
color: isInverted ? _blackColor : _whiteColor,
```

3항 연산자를 사용하여 많은 것들을 할 수 있다.


### 변수 앞에 언더바

변수 앞에 언더바를 붙이면 private의 의미가 있다.

```dart
final Color _blackColor = const Color(0xFF1F2123);
```


### 스크롤 위젯

SingleChildScrollView 위젯으로 `body`를 감싸면 스크롤을 할 수 있다.


### 위젯을 겹치게 하고 싶다면

위젯을 겹치게 하고 싶다면 `Transform.translate` 위젯을 사용하면 된다.

:::tip
z-index를 주고 싶다면 Container 안에 `Indexer()`라는 위젯 안에 children을 정의하면 된다.  
이 때 children 안에서는 `Indexed()` 위젯 안에 넣으면 된다.

```dart title='예시'
body: Container(
  child: Indexer(
      children: [
          Indexed(
            index: 3, //more the index, upper the order
            child: Positioned(
            top: 50, left: 50,
            child: Container(
                height: 100, width: 100,
                color: Colors.redAccent,
            ), 
            ),
          ),

          Indexed(
          index: 1, //less the value, below the order
            child: Positioned(
            top: 100, left: 100,
            child: Container(
                height: 100, width: 100,
                color: Colors.blueAccent,
            ), 
            ),
          ),

          Indexed(
            index: 2, //last at widget tree, but middle in order
            child: Positioned(
            top: 90, left: 30,
            child: Container(
                height: 100, width: 100,
                color: Colors.purple,
            ), 
            ),
          )
      ],
  ),
)
```
:::