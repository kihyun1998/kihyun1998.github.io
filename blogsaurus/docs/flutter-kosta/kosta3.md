---
sidebar_position: 3
---

# 03. [KOSTA] 플러터 상태관리

## 상태란
---

UI 방식은 명령형/선언형이 있는데 flutter는 선언형 UI Framework다.

### 상태관리

공유 상태가 변경될 때 동기화하는 것

중앙집중식으로 상태 관리하면 좋다.


## StatefulWidget
---

부모 위젯이 모든 공유상태를 갖는다. 상태 변경 시 setState()로 자식 위젯 갱신

자식 위젯은 부모 위젯의 공유 상태를 받는다. 이벤트 발생 시 부모 위젯에게 전달하여 공유 상태를 변경

장점: 별도 패키지 없이 손쉽게 가능

단점: 자식 위젯에게 공유 상태 전달할 때 속성이 계속 파고드는 prop drilling 문제가 생긴다. 앞 위젯들에게 const 위젯을 붙일 수 없다.

## InheritedWidget
---

자식 위젯이 중간 위젯을 거치지 않고 곧바로 접근할 수 있는 위젯

`updateShouldNotify()`를 사용해서 갱신할 수 있음.

특징: 중간 위젯들을 거치지 않는다.

자식 위젯 접근 및 갱신여부 결정

단점은 작성해야할 코드가 많고 고려해야할 부분이 너무 많다.

이것을 개선한 것이 Provider

## Provider
---

inheritedWidget을 wrap

:::tip 접근방법
`context.watch()`: `notifyListeners()` 호출 시 위젯 갱신  
`context.read()`: `notifyListeners()` 호출해도 갱신되지 않음  
`context.select()`: `watch`와 동일하나, 특정 속성이 변경된 경우에만 갱신
`Consumer()`: `watch`와 동일하나, 특정 위젯만 갱신
`Selector()`: `select`와 동일하나 특정 위젯만 갱신
:::


ChnageNotifierProvider{create: }로 등록하면 부모에서 dispose() 

ChnageNotifierProvider.value()로 등록하면 부모에서 dispose() 안함 그래서 여기서는 생성자 사용하면 안된다.

특징: 상태를 별도 클래스로 분리하므로 StatefulWidget보다 유지 관리 용이하다. 그리고 작성 코드 감소, 원하는 위젯 선택적 갱신 가능


## Riverpod
---

WidgetRef를 사용한다.

위젯 트리상에 직접 의존성 순서에 맞춰 등록할 필요가 없다.

동일한 Provider도 별도 변수로 선언하기 때문에 접근할 수 있다. 그러면 전역 변수가 늘어나는 단점이 있다.

WidgetRef를 사용하여 Flutter에 의존하지 않는다. ConsumerWidget과 같이 WidgetRef를 사용하기 위한 코드가 필요하다.

## Cubit
---

### Bloc 패턴

Bussiness Logic Component

상태와 비지니스 로직을 분리하는 패턴 즉 state와 event를 분리하는 패턴

[이곳](https://www.flutteris.com/blog/en/reactive-programming-streams-bloc/)에 디테일한 내용 있다.


Stream을 사용하여 Steate와 Event 송수신한다.

StreamController를 만들어서 listen하면 StreamSubscription에서 add한 것을 수신할 수 있다.

Cubit은 Bloc의 간소화

[여기는 공식 페이지](https://bloclibrary.dev/#/gettingstarted)


### Cubit

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// state 타입은 int 제네릭으로 선언
class CounterCubit extends Cubit<int> {
  // state 초기값은 현재 super(0)이다.
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
}

void main() => runApp(const CounterApp());


class CounterApp extends StatelessWidget {
  const CounterApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BlocProvider(
        // 위젯 트리에 등록
        create: (_) => CounterCubit(),
        child: const CounterPage(),
      ),
    );
  }
}

class CounterPage extends StatelessWidget {
  const CounterPage({super.key});

  @override
  Widget build(BuildContext context) {
    CounterCubit counter = context.watch<CounterCubit>();
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(
        child: Text(
          '${counter.state}',
          style: const TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.add),
        onPressed: () => context.read<CounterCubit>().increment(),
      ),
    );
  }
}
```

이런 예제 코드가 있다. 위 부분이 중요함


BlocBuilder<큐빗 타입, 상태 타입> 이런식이다. Provider에서 selector 같은 느낌

상태를 2개 이상 사용하려면 새로운 Class 만들어서 사용

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

@immutable
class CounterState {
  const CounterState({
    required this.itemCount,
    required this.productCount,
  });
  final int itemCount;
  final int productCount;

    // final로 만들고 copyWith를 구현해놓는게 좋다.
  CounterState copyWith({
    int? itemCount,
    int? productCount,
  }) {
    return CounterState(
      itemCount: itemCount ?? this.itemCount,
      productCount: productCount ?? this.productCount,
    );
  }
}

class CounterCubit extends Cubit<CounterState> {
  CounterCubit()
      : super(const CounterState(
          itemCount: 0,
          productCount: 0,
        ));

  void incrementItemCount() {
    emit(state.copyWith(itemCount: state.itemCount + 1));
  }

  void incrementProductCount() {
    emit(state.copyWith(productCount: state.productCount + 1));
  }
}

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: BlocProvider(
        create: (_) => CounterCubit(),
        child: const SignInPage(),
      ),
    );
  }
}

class SignInPage extends StatelessWidget {
  const SignInPage({super.key});

  @override
  Widget build(BuildContext context) {
    final CounterCubit counterCubit = context.watch();
    final CounterState state = counterCubit.state;
    return Scaffold(
      body: Center(
        child: Text(
          "itemCount : ${state.itemCount}\nproductCount : ${state.productCount}",
          style: const TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ElevatedButton(
            onPressed: counterCubit.incrementItemCount,
            child: const Text("itemCount++"),
          ),
          const SizedBox(height: 8),
          ElevatedButton(
            onPressed: counterCubit.incrementProductCount,
            child: const Text("productCount++"),
          ),
        ],
      ),
    );
  }
}
```

### 특징

cubit은 Bloc 기반이고 스트림기반

위젯 트리 등록을 해야함

클래스에서 상태를 하나만 가질 수 있음

## Bloc
---


Bloc<이벤트 타입, 상태 타입>으로 만든 클래스를 상속 받아야 함

이벤트는 부모 이벤트 클래스 만들고 상속 받아서 사용 그래야 여러 이벤트를 사용할 수 있다.

![Alt text](.img/image.png)


### 특징

스트림 기반, 이벤트 클래스를 별도로 분리, 작성 코드 많지만 명확하다.