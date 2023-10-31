---
sidebar_position: 25
---

# 25. [Flutter] URL Launcher

:::tip 목차
1. [코드](#코드)
2. [공부한 내용](#공부한-내용)
:::

## 코드
---

```dart title='url launch'
class Method extends StatelessWidget {
  const Method({
    super.key,
    required this.episode,
    required this.webtoonId,
  });

  final WebtoonEpisodesModel episode;
  final String webtoonId;

  onButtonClicked() async {
    await launchUrlString(
        "https://comic.naver.com/webtoon/detail?titleId=$webtoonId&no=${episode.id}");
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onButtonClicked,
      child: Container(
        margin: const EdgeInsetsDirectional.symmetric(
          vertical: 5,
        ),
        decoration: BoxDecoration(
          color: Colors.green.shade500,
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
                color: Colors.black.withOpacity(0.3),
                spreadRadius: 1,
                blurRadius: 5,
                offset: const Offset(1, 1))
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 15),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                episode.title,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 15,
                ),
              ),
              const Icon(
                Icons.chevron_right_outlined,
                color: Colors.white,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```


## 공부한 내용
---

### url_launcher 환경설정

url_launcher
스키마 파일을 이어 붙이고 사용해야 한다.

scheme이 여러가지가 있다.
`sms`,`tel`,`https`,`mailto`,`file`이 있다.


안드로이드라면 아래 코드를 android > app > src > main > AndroidMainfest.xml에 붙여줘야 한다.
```xml title='안드로이드'
// <!-- Provide required visibility configuration for API level 30 and above -->
<queries>
  <!-- If your app checks for SMS support -->
  <intent>
    <action android:name="android.intent.action.VIEW" />
    <data android:scheme="sms" />
  </intent>
  <!-- If your app checks for call support -->
  <intent>
    <action android:name="android.intent.action.VIEW" />
    <data android:scheme="tel" />
  </intent>
  <!-- If your application checks for inAppBrowserView launch mode support -->
  <intent>
    <action android:name="android.support.customtabs.action.CustomTabsService" />
  </intent>
</queries>
```


ios는 ios > Runner > Info.plist 파일에 붙여넣어주면 된다.
```xml title='ios'
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>sms</string>
  <string>tel</string>
</array>
```


### 사용법

```dart
onButtonClicked() async {
  await launchUrlString(
      "https://comic.naver.com/webtoon/detail?titleId=$webtoonId&no=${episode.id}");
}
```

위처럼 `launchUrlString`으로 사용해서 해당 url로 이동할 수 있고 `launchUrl`을 사용해서 Uri.parse를 사용해서 만든 url을 넣는 방법도 있다.