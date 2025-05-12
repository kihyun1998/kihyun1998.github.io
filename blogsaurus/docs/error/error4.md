---
sidebar_position: 4
---

# [Flutter Macos] network 관련
---

flutter macos app은 네트워크 통신이 막혀있는게 기본값입니다. (tcp)

그래서 tcp 연결을 맺고 싶다면 

`macos/Runner/DebugProfile.entitlements`에서

```xml
	<key>com.apple.security.network.client</key>
	<true/>
```

를 설정해줘야합니다.