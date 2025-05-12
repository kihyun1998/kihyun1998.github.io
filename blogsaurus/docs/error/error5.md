---
sidebar_position: 5
---

# [Flutter Macos] 폐쇄망 xcode package 관련
---

폐쇄망에 xcode package를 추가하고 싶다면 git clone을 해서 그걸 폐쇄망에 가져가서 add local을 하면 됩니다.

이 때 문제점이 하나 생기는 순간이 있는데 온라인 환경에서 macos 폴더를 만들어 가져가야하는데 이 때 add local이 아니라 인터넷을 바라보게 add package가 된다면 폐쇄망에서도 그렇게 적용되는 현상이 있습니다.

## 해결방법

`macos/Runner.xcodeproj/project.pnxproj`를 확인해서 `https://` 로 추가된게 있나보고 삭제하고 다시 add local로 추가합니다.