---
slug: Flutter
title: Flutter TIL - 2
authors: [kihyun]
tags: [TIL, 플러터, flutter, const, provider, riverpod]
---

# Flutter TIL - 2
---

## const에 대해
---

class에서 생성자를 `const`로 만들지 않았을 때

```dart
class Product {
  final int id;
  final String name;
  final String desc;
  final String price;
  final String imageUrl;

  Product({
    required this.id,
    required this.name,
    required this.desc,
    required this.price,
    required this.imageUrl,
  });
}
```

위처럼 만들면 아래 코드는 에러난다.

```dart
const List<Product> storeProductList = [];
```

생성자 Product에 `const`를 붙여주면 해결할 수 있다.

## context.read에 대해

---

```dart
void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (context) => MyCart(),
        ),
        ChangeNotifierProvider(
          create: (context) => MyBadge(myCart: context.read()),
        ),
      ],
      child: MaterialApp(
        home: MyApp(),
      ),
    ),
  );
}
```

코드 상황이 위와 같을 때 어떻게 MyCart의 정보를 `contex.read()`로 가져오나 의문이 있었다.

본론부터 말하면

```dart
        ChangeNotifierProvider(
          create: (context) => MyBadge(myCart: context.read<MyCart>()),
        ),
```

위와 같이 사용하면 헷갈릴 일이 없고 가져올 수 있는 이유는 `ChangeNotifierProvider`를 통해서 `MyCart`를 위젯 트리 상 등록 했기에 바로 가져와지는 것이다. 만약 중간에 `MyStore` 같은 다른 위젯이 있었다면 `MyCart`는 저런식으로 가져오지 못한다.

## List의 값에 const에 대해

---

```dart
List<Product> cartProductList = const [];
```

리스트의 불변을 보장해주기 위해 []앞에 `const` 키워드를 붙일 수 있다. `List<Product>` 앞에 붙이는 것과는 다르다. 리스트를 바꿀 수 있지만(요소 말고) 리스트에 직접적인 값을추가하거나 삭제 수정은 못한다.

삭제를 원한다면 where를 사용할 수 있다.

```dart
list.where((p)=>p!= product).toList();
```

위처럼 작성하면 list를 돌면서 돌고 있는 값이 p인데 product와 비교하면서 product는 빼고 다시 리스트를 만드는 코드이다.

추가를 원한다면

```dart
[...list,product]
```

아래처럼 간단하게 `...`연산자를 사용할 수 있다.

## dart 자동 매개변수..?

---

```dart
  void onProductPressed(Product product) {
    if (cartProductList.contains(product)) {
      cartProductList = cartProductList.where((p) => p != product).toList();
    } else {
      cartProductList = [...cartProductList, product];
    }
    notifyListeners();
  }
```

이렇게 매개변수가 필요한 함수로 구현돼있는데

```dart
      return ProductTile(
        product: product,
        isInCart: providerCart.cartProductList.contains(product),
        onPressed: providerCart.onProductPressed,
      );
```

이렇게 사용하길래 깜짝 놀랐다. 뭔가 싶었는데 ProductTile class에 비밀이 있었다.

```dart
  final Product product;
  final bool isInCart;
  final void Function(Product product) onPressed;
```

이렇게 onPressed가 구현돼있으면 product를 넣지 않아도 알아서 넣어준다고..

product를 넣지 않았는데 어떻게 아냐구요? ProductTile 위젯을 만들 때 product값을 전달하기 때문에 인지할 수 있다고 하네요 !

정리하자면 특정 위젯에 a라는 값을 통해서 구현하고 그 a라는 값을 매개변수로 사용하는 함수가 있을 때 다른 함수도 그 a라는 값을 필요로 한다면 사용하지 않는다.. 라는 것입니다. 근데 100% 이해를 못했다. 마음에 담아두자.

## context.read() 2

---

한 가지를 더 이해해 버렸다.

위젯 트리 상에 등록해서 context로 가져올 수 있다면

```dart
context.read<ProviderCart>().onProductPressed
```

위 처럼 ProviderCart의 함수를 가져올 수 있다.

## context.select()

---

이거 좀 이상하긴 하다. 그래서 이제 완벽히 이해했다.

`context.watch()` : Provider의 모든 상태를 구독한다.

`context.select()`: Provider의 특정 상태를 구독한다.

```dart
final count = context.select<Counter,int>((counter) => counter.count);
```

위 처럼 사용하기 때문에 select는 특정 상태 구독 가능

`context.read()`: 구독안하고 현재 상태 그냥 가져오기

드디어 context 3형제는 이해한듯

## Riverpod

---

provider 만든 사람이 만든거라고 해서 provider랑 비슷할 줄 알았는데 다르다.

provider 등록을 MultiProvider에 등록하는 것이 아닌 그냥 전역 변수로 등록한다. 별도 변수에 할당하기 때문에 같은 Provider를 다른 변수에 할당할 수 있다. 그리고 BuildContex를 사용하지 않고 별도의 WidgetRef라는 것을 사용한다.

:::tip 변경점 정리

1. provider를 전역 변수로 선언해서 사용
2. BuildContext 대신 WidgetRef 사용
   :::

나머지는 차차 알아가보는걸로

`StatelessWidget`은 `ConsumerWidget`으로 바꿔야한다.
그리고 `build()`메소드 파라미터에 `WidgetRef ref`를 추가해야 ref사용할 수 있다.

`StatefulWidget`은 `ConsumerStatefulWidget`으로 바꿔야 한다.

바꾸기 싫으면 `Consumer` 위젯으로 감싸서 사용할 수 있다.

### provider 종류

1. `StateProvider` : 별로 클래스 선언 없이 가볍게 사용할 수 있다.

2. `NotifierProvider` : 클래스를 만들어서 사용할 수 있습니다.

3. `Provider` : 기존 Provider의 Provider와 같음 즉 상태가 없는 Provider들

### 잡기술

1. `AutoDispose` : `NotifierProvider`뒤에 `.autoDispose`를 붙이고 `Notifier` extends한 것을 `AutoDisposeNotifier`로 수정하면 됩니다. 자동으로 dispose 해줍니다.

2. `family` : `NotifierProvider`뒤에 `family`를 추가해서 사용하면 되느데 매개변수 타입을 추가해주면 `build()`에 매개변수 추가해서 사용할 수 있습니다.

3. `AutoDisposeFamilyNotifier` : 1,2번을 합친 것.

## Error: Unable to find git in your PATH.

---

간혹 flutter를 처음할 때 아래와 같은 에러가 괴롭힌다.

```bash
Error: Unable to find git in your PATH.
```

```bash
git config --global --add safe.directory '*'
```

위 명령어로 해결할 수 있음 저장소 권한 문제인 것같다. 관리자 powershell은 flutter 됐었음
