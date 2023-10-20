---
sidebar_position: 7
---

# 07. [Flutter] 위젯 재사용 만들기


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart title='RadiusButton'
class RadiusButton extends StatelessWidget {
  final String text;
  final Color bgColor;
  final Color textColor;

  const RadiusButton({
    super.key,
    required this.text,
    required this.bgColor,
    required this.textColor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(35),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: 20,
            horizontal: 50,
          ),
          child: Text(
            text,
            style: TextStyle(
              color: textColor,
              fontSize: 18,
            ),
          ),
        ));
  }
}
```

```dart title='RadiusButton 사용 예시'
const Row(
  mainAxisAlignment: MainAxisAlignment.spaceAround,
  children: [
    RadiusButton(
      text: "Transfer",
      bgColor: Color(0xFFF2B33A),
      textColor: Colors.black,
    ),
    RadiusButton(
      text: "Request",
      bgColor: Color(0xFF1F2123),
      textColor: Colors.white,
    )
  ],
)
```


## 공부한 내용
---

액션으로 추가할 수도 있긴한데 직접 코드 추가 했다.

액션으로 하려면 extract widget 하면 된다.

그냥 위젯을 클래스화 시킨다는 느낌이다.