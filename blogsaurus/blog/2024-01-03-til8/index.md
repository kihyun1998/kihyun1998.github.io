---
slug: Flutter
title: Flutter TIL - 8
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, tree-view]
---

# Flutter TIL - 8
---

## Treeview
---

[이 라이브러리](https://pub.dev/packages/animated_tree_view)를 사용한다.

`animated_tree_view`다.

`TreeNode.root`에 `..addAll([])` 해서 배열을 넣을 수 있다.

```dart
  final myTree = TreeNode.root()
    ..addAll([
      TreeNode(key: "Today"),
      TreeNode(key: "Tomorrow")
        ..addAll([
          TreeNode(key: "task 1"),
          TreeNode(key: "task 2"),
          TreeNode(key: "task 3"),
        ]),
      TreeNode(key: "Upcoming"),
    ]);
```

`TreeView.simple`을 사용해봤는데 builder에서 인자로 `context`, `node`를 받는다.

주의할 점은 key로 하기 때문에 key 중복되지 않게 조심해야한다. 같은 level만 아니면 괜찮다. (같은 level아니면 이름 중복 가능)