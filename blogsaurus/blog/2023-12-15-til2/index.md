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

테스트를 하다보면 왜하나 싶을 수 있는데 변경에 대처하기 위해서 작성하는 것임. 완전 변한다면 또 의미가 없어지긴하는데 리팩토링 했을 때 검증하는 느낌이려나 아직은 잘 모르겠다.


### Mock Object

api 통신 테스트 같은 경우 외부 변수가 많아서 mock object로 한다.

왜냐하면 실제 요청 응답은 변수가 많아서... 재현이 어렵다. 그리고 실제로 서버 응답 실패 테스트 같은 경우도 쉽지 않다. mock object를 사용하면 쉽게 할 수 있다.

mockito랑 build_runner를 사용한다고 한다.

mockito로 어노테이션 달고 build_runner로 코드 생성하는 거임


### DI ( Dependency Injection )

di를 하는데 생성자를 통해 외부 코드를 받는다인 간단한 개념이라고 한다.

  
  

## 위젯 테스트
---

상호작용, 생김새, 상태 확인을 테스트 한다고 한다.


:::tip 위젯 테스트
`testWidgets()`: 테스트 진행  
`pump()`: 화면 갱신  
`find.text()`: 특정 테스트 검색  
`find.byType()`: 특정 클래스의 타입과 일치하는 위젯 검색  
`tester.widget()`: 특정 타입의 위젯 가져옴  
`tester.element()`: 특정 위젯의 BuildContext 가져옴
:::

[golden test](https://api.flutter.dev/flutter/flutter_test/matchesGoldenFile.html)도 있다.

golden test는 이미지 픽셀 비교하는 테스트다 즉 시각적 모습을 테스트할 수 있다.


```bash
flutter test --update-goldens
```

이걸로 골든테스트 정답 생성해줌 신기하넹.


## 통합 테스트
---

GUI테스트 EndToEnd라고 합니다.

실제 에뮬레이터를 통해서 테스트를 하게 된다.

`integration_test`를 추가해야 한다고 합니다.

```bash

  integration_test:
    sdk: flutter
```

dev_dependecies에 붙여넣어주면 된다.


integration_test라는 폴더를 root에 만들어주고 하면 된다.
아주 신기하다.

## 테스트 커버리지
---

[플러터 커버리지](https://marketplace.visualstudio.com/items?itemName=Flutterando.flutter-coverage)

테스트 코드 기반으로 커버리지 측정을 한다.

[커버리지 거터스](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)

이거는 특정 파일에서 좌측 하단 watch를 눌러보면 어디가 테스트가 안됐는지와 커버리지 % 알려준다.