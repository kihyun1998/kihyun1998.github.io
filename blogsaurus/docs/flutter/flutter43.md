---
sidebar_position: 43
---

# 43. [flutter] xml 사용
---

## XML 생성하기
---

```dart
final builder = XmlBuilder();
builder.element('Request', nest: () {
  builder.element('Login', nest: () {
    builder.element('ID', nest: "user");
    builder.element('Password', nest: "password");
    builder.element('Token', nest: "123123");
    builder.element('Email', nest: "test@gamil.co.kr");
    builder.element('Name', nest: "Mark");
  });
});

final doc = builder.buildDocument();
final xmlStr = doc.toXmlString(pretty: true, indent: '  ');
print(xmlStr);
```

위 처럼 XML을 만들 수 있습니다.


```xml-doc
<Request>
  <Login>
    <ID>user</ID>
    <Password>password</Password>
    <Token>123123</Token>
    <Email>test@gmail.co.kr<Email>
    <Name>Mark<Name>
  </Login>
</Request>
```

위와 같은 `xml`도 만들어지고 `xmlStr`에는 스트링으로 들어가있습니다.