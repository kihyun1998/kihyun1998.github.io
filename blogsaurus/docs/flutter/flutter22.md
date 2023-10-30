---
sidebar_position: 22
---

# 22. [Flutter] 

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title='추가한 코드'
return Column(
  children: [
    Text(
      webtoon.title,
      style: const TextStyle(
        fontSize: 20,
      ),
    ),
    const SizedBox(
      height: 20,
    ),
    Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(30),
          boxShadow: [
            BoxShadow(
              blurRadius: 5,
              offset: const Offset(5, 5),
              color: Colors.black.withOpacity(0.5),
            )
          ]),
      width: 300,
      child: Image.network(
        webtoon.thumb,
        headers: const {
          "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        },
      ),
    )
  ],
)
```


## 공부한 내용
---

### Image.network

URL을 사용해서 이미지를 불러오는 함수입니다.

webtoon.thumb에는 이미지 URL이 들어가 있습니다. `headers` 속성을 통해서 **헤더 정보**를 넣어줘야 합니다.