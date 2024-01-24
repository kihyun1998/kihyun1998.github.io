---
slug: flutter-til-23
title: Flutter TIL - 23
authors: [kihyun]
tags: [TIL, 플러터, flutter, TextOverflow ]
---

# Flutter TIL - 23
---

## TextOverflow
---

Text위젯에서 maxLines를 정하고 overflow를 정의할 수 있다.

### 종류

- `TextOverflow.clip`: 텍스트가 그 경계를 넘어가면 잘라냅니다. 이는 기본값입니다.

- `TextOverflow.fade`: 텍스트가 그 경계를 넘어가면 점점 흐려지게 만듭니다.

- `TextOverflow.ellipsis`: 텍스트가 그 경계를 넘어가면 끝에 '...'를 추가합니다.

- `TextOverflow.visible`: 텍스트가 그 경계를 넘어가도 잘리거나 사라지지 않고 그대로 보이게 합니다.

fade나 ellipsis를 많이 쓸 듯