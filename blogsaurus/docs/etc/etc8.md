---
sidebar_position: 8
---

#  8. [etc] Android 설정값 변경 법
---

1. 스마트폰 제조사 USB 드라이버를 설치합니다.

[삼성 USB 드라이버 설치 링크](https://downloadcenter.samsung.com/content/SW/202012/20201229125900126/SAMSUNG_USB_Driver_for_Mobile_Phones.exe)

2. ADB Tool을 다운로드 합니다.

[ADB Tool 다운로드 링크](https://developer.android.com/tools/releases/platform-tools?hl=ko)

3. PC 환경변수에 ADB Path 추가

2번에서 다운로드받은 `zip` 파일을 푼 경로를 Path에 추가합니다.

예를 들어서 `E:\platform-tools` 이런 경로를 추가합니다.

4. Path 추가 확인하기

```bash
adb --version
```

으로 Path가 잘 적용됐는지 확인할 수 있습니다.

5. 휴대폰에서 개발자 옵션/디버깅 옵션 활성화 하기

개발자 옵션 활성화: `시스템 세팅` > `휴대폰 정보` > `소프트웨어 정보` 에 있는 `빌드 번호` 를 3번 누르기

디버깅 옵션 활성화: `개발자 메뉴` > `USB 디버깅 옵션` 활성화 하기

6. 휴대폰과 PC를 USB로 연결하고 adb 정상 동작 확인하기

```
adb devices
```

7. adb 명령어 치기

예시

```bash
adb shell settings put system csc_pref_camera_forced_shuttersound_key 0
```

