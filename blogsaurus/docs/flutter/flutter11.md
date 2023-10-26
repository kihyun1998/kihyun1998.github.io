---
sidebar_position: 11
---

# 11. [Flutter] 카드 클래스 구조 변경


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart title='카드 클래스 변경'
class CustomCard extends StatelessWidget {
  final String name, code, amount;
  final IconData icon;
  final bool isInverted;
  final Color _blackColor = const Color(0xFF1F2123);
  final Color _whiteColor = Colors.white;
  
  // 추가한 부분
  double dx;
  double dy;

  CustomCard({
    super.key,
    required this.name,
    required this.code,
    required this.amount,
    required this.icon,
    required this.isInverted,
    
    // 추가한 부분
    this.dx = 0,
    this.dy = 0,
  });

  @override
  Widget build(BuildContext context) {

    // Transform 위젯으로 감싸줌
    return Transform.translate(
      offset: Offset(dx, dy),
      child: Container(
        ...
      )
    );
  }
}
```

```dart title='CustomCard 적용 부분'
CustomCard(
  name: "Euro",
  code: "EUR",
  amount: "6 428",
  icon: Icons.euro_rounded,
  isInverted: false,
),
CustomCard(
  name: "Dollar",
  code: "USD",
  amount: "55 622",
  icon: Icons.attach_money_outlined,
  isInverted: true,
  dx: 0,
  dy: -20,
),
CustomCard(
  name: "Rupee",
  code: "INR",
  amount: "28 981",
  icon: Icons.currency_rupee_sharp,
  isInverted: false,
  dx: 0,
  dy: -40,
)
```


## 공부한 내용
---

커스텀한 위젯은 최대한 공통부분이 있다면 같이 감싸주는게 좋다.

클래스 생성자에 디폴트 값을 넣는 것은 처음에 어려워 했는데 어렵지 않다.

그냥 생성자에서 required를 제외하고 값을 지정해주면 된다.

값이 들어오면 자동으로 들어온 값으로 대체된다.