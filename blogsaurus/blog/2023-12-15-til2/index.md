---
slug: test code
title: 테스트 코드
authors: [kihyun]
tags: [KOSTA, 플러터, flutter,테스트 코드, test code ]
---

# 테스트 코드
---

[테스트 코드 작성 요령](https://github.com/flutter/flutter/tree/master/packages/flutter/test/material)

테스트 코드를 작성하면 기능들의 의존성도 확인할 수 있고 테스트할 기능이 많아질 수록 자동화 해놓면 좋다.

:::tip 테스트 종류
`단위 테스트 ( Unit Test )`: 특정 함수 및 클래스 테스트  
`위젯 테스트 ( Widget Test )`: 단일 위젯 테스트  
`통합 테스트 ( Integration Test )`: 앱의 전체적인 테스트 동작
:::

## 단위 테스트
---

내장 테스트로 테스트를 진행할 수 있습니다.

테스트 파일은 `파일이름_test.dart`여야 한다. 즉 `_test.dart`로 끝나야 함

:::tip 테스트 관련 함수
`test()`: 테스트 시작
`expect()`: 값 검증  
`group()`: 테스트 그룹 만들기  
`setUp()`: 테스트 시작 전 실행하는 함수(계속 테스트 시작할 때마다 실행)  
`setUpAll()`: 최초 한 번만 실행  
`tearDown()`: 테스트 후 실행  
`tearDownAll()`: 테스트 종료 후 마지막 한 번 실행
:::