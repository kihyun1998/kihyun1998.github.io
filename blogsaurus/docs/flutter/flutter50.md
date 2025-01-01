---
sidebar_position: 50
---

# 50. [flutter] dynamic text box
---

동적 텍스트 박스 예제입니다.

## 기본적인 TextBox
---

```dart
import 'package:flutter/material.dart';

class BasicTextBox extends StatelessWidget {
  final String text;
  final IconData icon;

  const BasicTextBox({
    super.key,
    required this.text,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.grey[200],
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        children: [
          Icon(icon),
          const SizedBox(width: 8),
          Text(text),
        ],
      ),
    );
  }
}
```

기본적인 textbox는 이렇게 설계합니다.

## 최대 길이 지정 text box

```dart

class MaxWidthTextBox extends StatelessWidget {
  final String text;
  final IconData icon;
  final double maxWidth;

  const MaxWidthTextBox({
    super.key,
    required this.text,
    required this.icon,
    this.maxWidth = 300,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: maxWidth),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.grey[200],
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        children: [
          Icon(icon),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              text,
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ],
      ),
    );
  }
}

```

이 text box는 최대길이가 지정된 text box입니다. 사실상 기본 text box와의 차이가 거의 없다고 볼 수 있습니다. 기본 text box에서 width를 설정한 수준..

## dynamic text box
---

사실 이거 보여주려고 글 썼습니다.

```dart
class DynamicTextBox extends StatelessWidget {
  final String text;
  final IconData icon;
  final double maxWidth;
  final TextStyle? textStyle;
  final Color backgroundColor;
  final double iconSize;

  const DynamicTextBox({
    super.key,
    required this.text,
    required this.icon,
    this.maxWidth = double.infinity,
    this.textStyle,
    this.backgroundColor = Colors.white,
    this.iconSize = 24.0,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: maxWidth),
      child: IntrinsicWidth(
        child: Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: backgroundColor,
            borderRadius: BorderRadius.circular(8.0),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                icon,
                size: iconSize,
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  text,
                  style: textStyle,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

`IntrinsicWidth` 위젯을 사용하고 Row에 `MainAxisSize.min`을 사용한다면 간단하게 dynamic text box를 만들 수 있습니다.

저는 이걸 몰랐어서 TextPainter를 사용해서 Text 길이를 계산하고.. 그랬는데.. 이게 사기입니다 !!

그리고 Container로 감싸서 `BoxConstraints`로 간단하게 `maxWidth`까지 적용할 수 있는데 `maxWidth`을 `double.infinity`로도 적용할 수 있기에 아주 간편합니다 !

