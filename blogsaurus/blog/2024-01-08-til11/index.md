---
slug: Flutter
title: Flutter TIL - 11
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, freezed,json_annotation,riverpod, provider]
---

# Flutter TIL - 11
---

## factory Constructor
---

factory constructor의 constructor redirection에 대해 알고 있어야 한다. 그리고 const를 사용할 수 있음.

## 필요한 패키지
---

`freezed_annotation`: dep : 코드 생성기에 대한 어노테이션 패키지

`build_runner` : dev-dep : 코드 생성기 실행

`freezed` : dev-dep : 코드 생성기

`json_annotation` : dep : 코드 생성기인 json_serializable의 어노테이션 갖고 있는 패키지

`json_serializable` : dev-dep : 코드 생성기

### freezed와 json_serializable 사용할 경우

analysis_options.yaml에 설정

```yaml
analyzer:
  errors:
    invalid_annotation_target: ignore
  exclude:
    - '**/*.freezed.dart'
    - '**/*.g.dart'
```

### build runner를 사용해서 코드 gen하려면

```bash
dart run build_runner build [--delete-conflicting-outputs]

or

dart run build_runner watch [-d]
```

build는 one-time, watch는 계속 빌드함

watch가 빌드 타임 적다.

`[]`에 있는 옵션은 previous build에서 발생한 것 건너뛰기


## extension

`freezed`라는 확장 설치해야 한다.

`ptf` : part '*.freezed.dart'; 생성
`pts` : part '*.g.dart'; 생성
`fdataclass` : Dataclass 생성
`funion` : Union class 생성


## 기능
---

### 정리

우선 다양한 것들을 override해준다.

toString이나 copyWith, equality 등을 오버라이딩 해줌.

### copyWith

일반적인 copyWith + null도 지원해줌

deep copyWith도 제공해준다. 복잡한 코드를 간단하게 작성할 수 있도록 지원

### Json annotation

```dart
@JsonKey(name: 'parking_lot_capacity') int? parkingLotcapacity,
```

data class를 만들 때 이런 인자값을 볼 수 있다.

변수 parkingLotcapacity를 json키 값 'parking_lot_capacity'로 판단하겠다는 뜻이다.

```dart
  factory Hotel.fromJson(Map<String, dynamic> json) => _$HotelFromJson(json);
```

이런 것도 제공해준다.

## Provider
---

위젯이나 다른 Provider에 값을 제공

riverpod에서는 Provider를 watch할 수 있다.
그리고 그냥 값을 제공하는 Provider다.

### dep

`equatable`,`flutter_riverpod`,`riverpod_annotation`

### dev-dep

`build_runner`,`custom_lint`,`flutter_lints`,`riverpod_generator`, `riverpod_lint`

