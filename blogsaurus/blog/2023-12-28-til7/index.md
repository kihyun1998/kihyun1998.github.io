---
slug: Flutter
title: Flutter TIL - 7
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, future_wait]
---

# Flutter TIL - 7
---

## Future.wait
---

```dart
  Future<void> searchProductList() async {
    isBusy = true;
    final results = await Future.wait([
      productRepository.searchProductList(keyword),
      Future.delayed(const Duration(milliseconds: 555)),
    ]);
    productList = results[0];
    isBusy = false;
  }
```

`Future.wait`이라는게 있는데 안에 있는 Future wait의 배열 명령어들이 모두 끝날 때까지 기다림

즉 위 코드 상으로는 search하는거와 delayed를 동시에 돌리는데 555 millisecond는 무조건 돌고 그 이상은 search끝날 때까지 기다린다는 뜻