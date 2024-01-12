---
slug: Flutter
title: Flutter TIL - 15
authors: [kihyun]
tags: [TIL, 플러터, flutter, revierpod, FutureProvider]
---

# Flutter TIL - 15
---

## 가상 API
---

[여기](https://jsonplaceholder.typicode.com) 에서 다양한 API를 제공해준다.

users API로 FutureProvider 실습을 한다.


## autoDispose 사용 여부
---

만약 특정 페이지 진입 시 API를 통해서 값을 가져왔을 때 이 값을 캐싱 할 것이면 `autoDispose` 사용하면 안되고 다시 안 가져올 것이면 `autoDispose` 사용하는 것이 좋다.

설정값 같은 경우는 API를 쏴서 변경하는 경우가 거의 없으므로 캐싱 하는 것이 좋다.


## future provider body
---

### when

값을 불러올 때 when을 사용한 모습입니다.

```dart
body: userList.when(
  data: (users) {
    return ListView.separated(
      itemCount: users.length,
      separatorBuilder: (context, index) {
        return const Divider();
      },
      itemBuilder: (context, index) {
        final user = users[index];
        return ListTile(
          leading: CircleAvatar(
            child: Text(user.id.toString()),
          ),
          title: Text(user.name),
        );
      },
    );
  },
  error: (e, st) {
    return Text(
      e.toString(),
      style: const TextStyle(fontSize: 20, color: Colors.red),
    );
  },
  loading: () => const Center(
    child: CircularProgressIndicator(),
  ),
),
```



### switch expression

값을 불러올 때 switch를 사용한 모습입니다.

```dart
body: switch (userList) {
  AsyncData(value: final users) => ListView.separated(
      itemCount: users.length,
      separatorBuilder: (context, index) {
        return const Divider();
      },
      itemBuilder: (context, index) {
        final user = users[index];
        return ListTile(
          leading: CircleAvatar(
            child: Text(user.id.toString()),
          ),
          title: Text(user.name),
        );
      },
    ),
  AsyncError(error: final e) => Text(
      e.toString(),
      style: const TextStyle(fontSize: 20, color: Colors.red),
    ),
  _ => const Center(
      child: CircularProgressIndicator(),
    ),
},
```

마지막에 원래 `_` 대신 `AsyncLoading`이 들어가야 하지만 무슨 에러가 난다.

userListProvider를 `@Sealed`로 만들었어야 한다고 한다.

## keepalive
---

하면서 궁금증이 생겼었는데 값을 가져왔으면 다시 나갔다 왔을 때 loading 안 보고 싶었습니다.

그러면 autoDispose일 때 ref.keepAlive()를 사용하면 됩니다.  
주의할 점은 http 호출이 끝나고 적용해야 합니다.

값을 가져온 것을 성공한 페이지는 값이 유지가 되고(dispose안함)
error가 나면 dispose 합니다.
