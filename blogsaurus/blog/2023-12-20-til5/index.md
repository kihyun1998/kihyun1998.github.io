---
slug: Bloc
title: Flutter TIL - 3
authors: [kihyun]
tags: [TIL, 플러터, flutter, riverpod,notifier ]
---

# Flutter TIL - 3
---

## NotifierProvider의 notifier 메소드
---

```dart
final cartProvider = NotifierProvider<RiverpodCart, List<Product>>(() {
  return RiverpodCart();
});
```

플러터는 위처럼 provider를 위젯트리에 따로 등록하지 않고 변수로 선언해서 사용한다.

```dart
return ProductTile(
  product: product,
  isInCart: ref.watch(cartProvider).contains(product),
  onPressed: ref.read(cartProvider.notifier).onProductPressed,
);
```
신기한 것이 있었다. 이렇게 전역변수로 선언한 것을 watch하고 read하는 것은 이해를 했는데 갑자기 `.notifier`.. 이건 뭐지

실험해보고 찾아보니 `.notifier`를 붙이면 해당 provider의 class로 접근해서 그 class의 메소드 등을 사용할 수 있다는 것.

즉 위에서 cartProvider의 `NotifierProvider<RiverpodCart, List<Product>>` 중 앞 부분인 `RiverpodCart`에 접근하는 느낌이다.

`.notifier`를 붙이지 않으면 이 provider의 상태로 접근하는 것이다.

즉 `List<Product>`에 접근한다. 그래서 contians 메소드를 사용할 수 있었다.