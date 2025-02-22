---
sidebar_position: 1
---

# [Supabse] supabase 시작하기
---


## 시작하는 방법
---

### 1. 가입과 키 발급

회원가입을 한다. 그리고 API 키를 발급 받는다.

[supabase 홈페이지](https://supabase.com/)

하라는거 하다보면 키가 나온다.


### 2. Supabase 연결하기

먼저 `supabase_flutter` 패키지를 추가해줍니다.

그리고 코드에 다음과 같이 반영합니다.

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  const supabaseUrl = "https://xkjqeouyytxoscrdgdwk.supabase.co";
  const supabaseKey = String.fromEnvironment('SUPABASE_KEY');

  await Supabase.initialize(url: supabaseUrl, anonKey: supabaseKey);
  runApp(const MyApp());
}
```

fromEnvironment를 해줬으니 다음과 같이 실행해줘야합니다.

```bash
flutter run --dart-define=SUPABASE_KEY=your_supabase_key
```

이렇게 하면면 `SUPABASE_KEY`라는 환경변수에 `your_supabase_key`이런 키값이 들어가는 겁니다. 여러분이 사용하실 때는 회원가입 후 프로젝트까지 만드시면 나오는 `Project API`에 있는 키값을 사용하시면 됩니다.

Project URL은 공개해도 되는 것 같아요. API Key는 비밀입니다.

아참 근데 매번 저렇게 실행하면 어지러우니 다음과 같이 batch파일을 만듭시다. Windows에서 가능하고

```batch
@echo off
flutter run --dart-define=SUPABASE_KEY=your_supabase_key
pause
```

MAC이나 리눅스에서는 아래같이 shell script를 만들어서 사용해야할 듯 싶네요.

```sh
#!/bin/bash
flutter run --dart-define=SUPABASE_KEY=your_supabase_key
```

vs code에서 무슨 설정하는게 있다고 하는데 저는 이게 더 편한 것 같습니다.

