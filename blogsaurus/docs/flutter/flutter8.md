---
sidebar_position: 8
---

# 08. [Flutter] 카드 만들기


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart title='이번에 추가한 코드'
Container(
  decoration: BoxDecoration(
    color: const Color(0xFF1F2123),
    borderRadius: BorderRadius.circular(20),
  ),
  child: Padding(
    padding: const EdgeInsets.symmetric(
      vertical: 20,
      horizontal: 15,
    ),
    child: Row(
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Euro",
              style: TextStyle(
                color: Colors.white,
                fontSize: 30,
                fontWeight: FontWeight.w500,
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Row(
              crossAxisAlignment: CrossAxisAlignment.baseline,
              textBaseline: TextBaseline.alphabetic,
              children: [
                const Text(
                  "6 428",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                  ),
                ),
                const SizedBox(
                  width: 10,
                ),
                Text(
                  "EUR",
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.7),
                    fontSize: 15,
                  ),
                ),
              ],
            )
          ],
        ),
      ],
    ),
  ),
),
```


## 공부한 내용
---

글자 baseline 맞추는 방법에 대해서 공부했다.

글자 baseline을 맞춘다는 의미는 Row 위젯에서만 통한다

:::tip 방법
```dart
// 이거 한 후
crossAxisAlignment: CrossAxisAlignment.baseline,

// 이거 또는
textBaseline: TextBaseline.alphabetic,
// 이거
textBaseline: TextBaseline.ideographic,
```
`alphabetic` : 알파벳을 기준선으로  

`ideographic` : 텍스트 영역 최하단을 기준선으로

근데 아직 둘의 큰 차이를 못 느끼겠다.
:::