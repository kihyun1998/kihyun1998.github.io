---
sidebar_position: 39
---

# 39. [flutter] toJson, fromJson
---

## Json 예제

```json
{
    "test":[{
        "id":"1",
        "name":"one"
    },{
        "id":"2",
        "name":"two"
    }]
}
```

## dart class
---

```dart
class TestItem {
  final String id;
  final String name;

  TestItem({required this.id, required this.name});

  // JSON에서 객체로 변환하는 factory 생성자
  factory TestItem.fromJson(Map<String, dynamic> json) {
    return TestItem(
      id: json['id'] as String,
      name: json['name'] as String,
    );
  }

  // 객체에서 JSON으로 변환
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
    };
  }
}

class TestList {
  final List<TestItem> test;

  TestList({required this.test});

  // JSON에서 객체로 변환하는 factory 생성자
  factory TestList.fromJson(Map<String, dynamic> json) {
    var list = json['test'] as List;
    List<TestItem> testList = list.map((i) => TestItem.fromJson(i)).toList();
    return TestList(test: testList);
  }

  // 객체에서 JSON으로 변환
  Map<String, dynamic> toJson() {
    return {
      'test': test.map((i) => i.toJson()).toList(),
    };
  }
}
```

## fromJson 사용예제

```dart
void fromJsonExample() {
  String jsonString = '''
    {
      "test":[{
          "id":"1",
          "name":"one"
      },{
          "id":"2",
          "name":"two"
      }]
    }
  ''';

  final jsonData = jsonDecode(jsonString);
  TestList testList = TestList.fromJson(jsonData);

  print(testList.test[0].name); // 출력: one
  print(testList.test[1].name); // 출력: two
}
```

## toJson 사용 예제

```dart
void toJsonExample() {
  TestList testList = TestList(test: [
    TestItem(id: "1", name: "one"),
    TestItem(id: "2", name: "two"),
  ]);

  Map<String, dynamic> jsonData = testList.toJson();
  String jsonString = jsonEncode(jsonData);

  print(jsonString);
  // 출력: {"test":[{"id":"1","name":"one"},{"id":"2","name":"two"}]}
}
```