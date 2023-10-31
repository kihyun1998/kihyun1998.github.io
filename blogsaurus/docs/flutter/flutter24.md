---
sidebar_position: 24
---

# 24. [Flutter] Hero

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title='Hero'
Hero(
  tag: id,
  child: Container(
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
    width: 200,
    child: Image.network(
      thumb,
      headers: const {
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      },
    ),
  ),
),
```


## 공부한 내용
---

### Hero

Hero 위젯은 페이지를 바꿀 때 같은 이미지를 다시 만들어서 띄우는 것이 아닌 이미 있는 이미지를 사용하기 위한 위젯이다.

tag를 사용해서 서로 같은 이미지임을 명시하면 끝이다.

위의 코드는 tag에 같은 아이디를 넣음으로 이어주었고 이미지를 클릭할 때 새 이미지를 띄우는 것이 아닌 이미 있는 이미지 위치에서 이동하는 애니메이션도 볼 수 있다.