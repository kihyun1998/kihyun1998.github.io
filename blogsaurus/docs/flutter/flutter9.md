---
sidebar_position: 9
---

# 09. [Flutter] 카드에 아이콘 넣기


:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::



## 코드


```dart title='이번에 추가한 코드'
child: Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  children: [
    Column( ... ) // 코드 생략
    Transform.scale(
      scale: 2.1,
      child: Transform.translate(
        offset: const Offset(-5, 14),
        child: const Icon(
          Icons.euro_rounded,
          color: Colors.white,
          size: 80,
        ),
      ),
    )
  ],
),
```


## 공부한 내용
---

### 아이콘

플러터에서는 아이콘을 쉽게 추가할 수 있다.

```dart
const Icon(
  Icons.euro_rounded,
  color: Colors.white,
  size: 80,
),
```

위와 같이 `Icons` 안에 다양한 아이콘이 있고 색, 크기 등을 변경할 수 있다.


### Transform.scale

일부로 무언가를 크기를 키우고 싶을 때 사용한다. 간단하게 말하면 이 위젯에 감싸진 위젯의 크기를 다른 위젯의 영향 없이 몇 배 키울지 정한다.

:::tip 속성
`scale` : 감싼 위젯을 몇 배수로 키울지 정한다.
:::

### Transform.translate

해당 위젯으로 감싼 위젯의 위치를 좌표단위로 옮겨주는 위젯이다.

:::tip 속성
`offset` : 아래와 같이 작성하여 감싼 위젯의 위치를 조정한다.
```dart
offset: const Offset(-5, 14),
```
:::


