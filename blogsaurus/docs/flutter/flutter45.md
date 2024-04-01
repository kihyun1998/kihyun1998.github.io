---
sidebar_position: 45
---

# 45. [flutter] Don't use BuildContext across async gaps 
---

## 메시지
---

```
Don't use 'BuildContext's across async gaps.
Try rewriting the code to not reference the 'BuildContext'.
```

비동기 작업 시작 후 완료되기 까지 UI가 변경될 수 있어서 BuilContext가 현재 위젯의 정확한 위치를 반영하지 않을 수 있습니다.
그래서 BuildContext가 유효한지 확인이 필요합니다.

## 간단한 해결방법
---

```dart
class MyWidget extends StatefulWidget {
  @override
  _MyWidgetState createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Async Context Example')),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            String data = await fetchData();

            /// BuildContext 유효한지 검사
            if (!mounted) return; 
            Navigator.of(context).push(
              MaterialPageRoute(builder: (context) => DetailPage(data: data)),
            );
          },
          child: Text('Load Data'),
        ),
      ),
    );
  }

  Future<String> fetchData() async {
    await Future.delayed(Duration(seconds: 2));
    return 'Fetched Data';
  }
}
```

위 예시 코드처럼 StatefulWidget에서 제공해주는 `mounted`값을 통해서 BuildContext가 유효한지 알 수 있습니다.
이를 통해서 해결할 수 있습니다.