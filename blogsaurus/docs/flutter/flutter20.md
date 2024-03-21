---
sidebar_position: 20
---

# 20. [Flutter] fetch

:::tip 목차
1. [고전적인 fetch](#고전적인-fetch)
2. [FutureBuilder](#FutureBuilder)
:::

## 고전적인 fetch
---

### 코드

```dart
List<WebtoonModel> webtoons = [];
bool isLoading = true;

void waitForWebToons() async {
  webtoons = await ApiService.getToday();
  setState(() {
    isLoading = false;
  });
}

@override
void initState() {
  super.initState();
  waitForWebToons();
}
```

### 설명

위와 같은 방식으로 StatefulWidget을 만들어주고 데이터를 받아올 변수와 로딩 중임을 표시하는 변수를 선언하고

initState에 데이터 불러오는 함수를 넣고

데이터 불러오는 함수(**waitForWebToons**)에서는 비동기처리를 하고

비동기 처리 후 데이터를 다 불러왔다면 로딩중인 bool 변수를 변경해주고 ...

고전적인 방법은 복잡하다고 합니다.

위 방법은 데이터를 패치해서 state에 넣는 방법이라고 한다.


## FutureBuilder
---

### 코드

```dart
Future<List<WebtoonModel>> webtoons = ApiService.getToday();

body: FutureBuilder(
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      return const Text("yes data");
    } else {
      return const Text("Loading ...");
    }
  },
  future: webtoons,
),
```


### 설명

statelessWidget을 사용하면서 어떤 변수나 setState없이 fetch할 수 있습니다.

`FutureBuilder`위젯을 사용하면 됩니다.

먼저 Future 변수를 선언해줍니다.

그리고 FutureBuilder를 사용할 텐데 넣어줘야할 값이 future와 builder가 있습니다.

future에는 future 자료형 즉 기다려야 얻을 수 있는 데이터(API 요청한 응답 데이터 등)가 들어가면 됩니다.

builder 부분에는 context와 snapshot을 주는데 context는 buildContext이고 snapshot을 통해서는 다양한 값을 얻을 수 있습니다.

:::tip snapshot
connectionState : 연결 상태
data : 데이터
error : 에러가 났는지
hasData : 값을 갖고 있는지
:::

정리하자면 FutureBuilder 위젯이 알아서 Future값을 기다려줍니다. await를 하지 않더라도 !
