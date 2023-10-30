---
sidebar_position: 21
---

# 21. [Flutter] ListView

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title="ListView"
body: FutureBuilder(
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      return ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: snapshot.data!.length,
        itemBuilder: (context, index) {
          print(index);
          var webtoon = snapshot.data![index];
          return Text(webtoon.title);
        },
        separatorBuilder: (context, index) => const SizedBox(
          width: 20,
        ),
      );
    } else {
      return const Center(
        child: CircularProgressIndicator(),
      );
    }
  },
  future: webtoons,
),
```

## 공부한 내용
---

### CircularProgressIndicator

로딩할 때 돌아가는 동그라미

![Alt text](./img/flutter21/image.png)

### ListView

항목들을 나열해서 보여주는 Widget

자동으로 스크롤 기능도 제공해줌

```dart
return ListView(
  children: [
    for (var webtoon in snapshot.data!) Text(webtoon.title)
  ],
);
```

하지만 위에 코드처럼 사용하면 비효율적이다. 

한번에 불러오면 메모리 낭비가 심하고 결국 메모리 죽을수도 있다.

그래서 다른 종류의 ListView를 사용해야 한다.

### ListView.builder

옵션이 완전 많다.

ListView.builder는 한 번에 모든 데이터를 빌드하지 않고 화면상의 데이터만 빌드한다.

:::tip ListView.builder 옵션
`scrollDirection` : 스크롤 방향 
`itemCount` : 몇개를 가져올지
**(필수)** `itemBuilder` : context와 index가 있음. FutureBuilder와 비슷하지만 snapshot 대신 index가 있다.
:::

### ListView.separated

separated는 separatorBuilder 속성을 필수로 추가해줘야 한다.

separated를 사용하면 아이템과 아이템 사이에 어떤 것(separatorBuilder에서 정의한 것)을 추가할 수 있다.