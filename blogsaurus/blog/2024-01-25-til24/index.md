---
slug: flutter-til-24
title: Flutter TIL - 24
authors: [kihyun]
tags: [TIL, 플러터, flutter, intl, localization, 다국어 설정 ]
---

# Flutter TIL - 24
---

## 다국어 설정
---

1. `flutter_localization`,`intl` 패키지 추가

2. vs code `Flutter Intl` extension 설치

3. pubspec.yaml파일에 아래 내용 입력
```yaml
flutter_intl:
  enabled: true
  arb_dir: lib/util/lang/l10n
  output_dir: lib/util/lang/generated
```

4. `ctrl`+`shift`+`p`로 명령어 팔레트 열고 flutter intl initialize

5. 그러면 lib/util/lang 밑에 `l10n`과 `generated`가 생김

끝

### 한국어 추가하기

1. `ctrl`+`shift`+`p`로 열고 intl: Add locale하고 `ko`추가

2. 그러면 intl_ko.arb파일 생긴다.

```
{
    "@@locale" : "en",
    "language" : "language"
}

{
    "@@locale" : "ko",
    "language" : "언어"
}
```

이런식으로 설정하면 된다.


### 추가 설정

1. ios에서 사용하려면 `ios/Runner/Info.plist` 파일에서

```
<key>CFBundleDevelopmentRegion</key>
	<array>
		<string>en</string>
		<string>ko</string>
	</array>
```

key태그 밑에 array태그 추가하기


2. main.dart 설정

```dart
import 'package:flutter_localizations/flutter_localizations.dart';

...
      localizationsDelegates: const [
        S.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: S.delegate.supportedLocales,
...
```

해당 내용 추가하기

그리고 추가적으로 구현해야할 것이 locale값을 watch하는 provider 만들어서 `MaterialApp` 안에 `locale` 속성값에 `watch`로 넣기