---
sidebar_position: 32
---

# 32. [flutter] Image.asset 색 변경
---



Image.asset의 색을 변경하려면 `color`와 `colorBlendMode`를 사용한다.

사용할 때 2가지 방법이 있다. modulate와 color 다.


## 설명
---

이미지가 png라면 이미지의 색과 배경색이 있다.

modulate는 이미지색을 변경하는 것이고 color는 배경색을 변경하는 것이다.

## 예시
---

### modulate

```dart
Image.asset(
  'assets/your_image.png',
  color: Color.fromRGBO(255, 0, 0, 0.5), // 적용할 색상과 투명도
  colorBlendMode: BlendMode.modulate, // 색상 혼합 모드
)
```

### color

```dart
Image.asset(
  'assets/your_image.png',
  color: Colors.red, // 적용할 색상
  colorBlendMode: BlendMode.color, // 색상 혼합 모드
)
```