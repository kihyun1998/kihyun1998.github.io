---
sidebar_position: 4
---

# 4. [etc] firebase 사용법
---

## 사전 절차

### 1. [파이어베이스 회원가입](https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S-737735538:1710574126573834&flowEntry=SignUp&flowName=GlifWebSignIn&theme=mn&TL=ADg0xR37SPg2RnaEIBH6TxAPEIt90hIZVE9fzDXwTA77w-YoXaiMr4CUcP-djL0a)

### 2. [파이어베이스 링크](https://console.firebase.google.com/u/0/?hl=ko)


### 3. [firebase cli 설치 링크](https://firebase.google.com/docs/cli?hl=ko&_gl=1*xw4fbo*_up*MQ..*_ga*MTA3MDk5NDY0MS4xNzEwNTc0MTky*_ga_CW55HF8NVT*MTcxMDU3NDE5MS4xLjAuMTcxMDU3NDE5MS4wLjAuMA..#setup_update_cli)

```bash
npm install -g firebase-tools
```

아니면 npm을 통해서 설치해야하는데 npm을 통해서 설치하는게 좋습니다. 아니 npm으로 설치해야합니다.

### 4. firebase 설정

```bash
dart pub global activate flutterfire_cli
```

flutterfire_cli에 대한 시스템 환경변수 설정이 필요합니다. 하라는 warning이 나오면 하고 아니면 이미 돼있는 것입니다.

```
C:\Users\유저명\AppData\Local\Pub\Cache\bin
```

위 부분을 설정하면 됩니다.

```bash
flutterfire configure --project=프로젝트이름
```

### 5. firebase 초기화

firebase_core 추가를 추가한다.

```bash
flutter pub add firebase_core
flutter pub get
```


### 6. void main 변경
---

```dart
...
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}
...
```

