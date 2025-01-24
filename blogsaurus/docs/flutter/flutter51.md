---
sidebar_position: 51
---

# 51. [flutter] [ERROR] 폐쇄망 package 업데이트가 안된다면
---


## 기가막히는 일
---

패키지 업데이트가 안되는 기가막히는 일이 있었습니다.

### 할 일

```bash
flutter clean
```

우선 초기화를 시켜줍니다.

```bash
flutter pub get --offline
```

오프라인으로 받기를 했는데 1초 이상 걸린다? 그냥 뭔가가 없다는겁니다.
하나하나 주석처리해가며 누가 범인인지 찾습니다.


범인을 찾았다면 로컬에서 flutter pub get add.. 해가지구 추가해서 `Cache`폴더를 이동시켜서 교체해줍니다.

```bash
dart run build_runner clean
```

저는 riverpod을 사용하기에 build_runner가 필요합니다.

```bash
dart run build_runner watch -d
```

보통이라면 여기서 돼야 하는데 안되는 경우가 있습니다. 위에서 에러가 안나서 하나하나 다시 안하셨던 분들이 이런 경우에 빠질텐데.

그럼 `pubspec.yml`에서 기본적인거 빼고 다 주석처리해서 `flutter pub get --offline` 합니다.

그리고 나서 


```bash
dart run build_runner clean
```

```bash
dart run build_runner watch -d
```

이 명령어들을 실행하면 아마 될겁니다.. 이 이후의 현상에 대해선 만나본 적이 없어서 해결해볼 기회가 없었습니다. 그럼이만..