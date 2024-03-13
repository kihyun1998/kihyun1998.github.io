---
sidebar_position: 34
---

# 34. [flutter] package:auto_updater 사용하기
---


[auto_updater URL](https://pub.dev/packages/auto_updater)에 들어가보면 해당 정보를 확인할 수 있다..


## 시작하기
---

```yaml
dependencies:
  auto_updater: ^0.1.7
```

시작한다.

## Windows
---

### 사전 작업

```bash
choco install openssl
```

windows는 openssl을 설치해야한다.

그리고 `C:\Program Files\OpenSSL-Win64\bin` 이런거 같은 openssl 경로를 시스템 환경 변수로 추가한다.


### 키 발급
---


```bash
dart run auto_updater:generate_keys
```

명령어를 입력하면 

```bash
Generated two files:
dsa_priv.pem: your private key. Keep it secret and don't share it!
dsa_pub.pem: public counterpart to include in youe app.
BACK UP YOUR PRIVATE KEY AND KEEP IT SAFE!
If you lose it, your users will be unable to upgrade!
```

이렇게 나올 것입니다. dsa_prive.pem과 dsa_pub.pem이 생겼다는 뜻입니다.


그럼 `windows/runner/Runner.rc` 맨 아래에

```
...

+/////////////////////////////////////////////////////////////////////////////
+//
+// WinSparkle
+//

+// And verify signature using DSA public key:
+DSAPub      DSAPEM      "../../dsa_pub.pem"
```

이 내용을 추가해주면 됩니다.


### dart 코드 추가

```dart
import 'package:auto_updater/auto_updater.dart';

void main() async {
  // Must add this line.
  WidgetsFlutterBinding.ensureInitialized();

  String feedURL = 'http://localhost:8080/appcast.xml';
  await autoUpdater.setFeedURL(feedURL);
  await autoUpdater.checkForUpdates();
  await autoUpdater.setScheduledCheckInterval(3600);

  runApp(MyApp());
}
```

dart에서 사용하기 위해서 이렇게 추가할 수 있는데 setFeedURL을 통해서 서버에 있는 `appcast.xml` 파일을 확인하기 위한 url을 설정할 수 있고

update가 필요한지 `checkForUpdates()`로 사용할 수 있고

`setScheduledCheckInterval()` 이것이 있는데 주기적으로 업데이트 확인하는 것입니다.


### distribute_options.yaml

distribute_options.yaml를 작성해야합니다.

```yaml
output: dist/
releases:
  - name: dev
    jobs:
      - name: release-windows
        package:
          platform: windows
          target: exe
          build_args:
            dart-define:
              APP_ENV: dev
```

예시로 이렇게 만들 수 있습니다. 패키징 해서 나온 파일은 `dist` 폴더 밑에 나오도록 명시한 것입니다.

### flutter_distributor


[flutter_distributor 링크](https://distributor.leanflutter.dev/) 에 들어가보면 좀 더 자세한 내용을 확인할 수 있습니다.

```bash
flutter_distributor release --name dev --jobs release-windows
```

이렇게 해야하는데 아마 에러가 날 것입니다.

`windows/packaging/exe/make_config.yaml` 파일이 있어야 합니다.

```yaml title="make_config.yaml"
app_id: 15B248E0-3E58-4509-AA5D-1FC749611FE3
publisher: My Company, Inc.
publisher_url: https://www.example.com/
display_name: Update_test
create_desktop_icon: false
install_dir_name: Update_test
locales:
  - kr
```

이런식으로 작성할 수 있습니다.