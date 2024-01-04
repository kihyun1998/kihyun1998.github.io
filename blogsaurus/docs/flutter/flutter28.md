---
sidebar_position: 28
---

# flutter riverpod을 위한 필요사항
---

## vs code extensions
---

`dart`: 기본

`flutter`: 기본

`awesome flutter snippet`: class와 method 빠르게 만들어줌

`dart-import`: flutter import 쉽게

`pubspec assist`: pub add 쉽게 해줌

`dart data class generator`: 여러 class 관련 코드 생성 쉽다.

`freezed`: freezed class 만들기 쉬움

`flutter riverpod snippets`: provider 쉽게 만듬

`remove comments`: 주석 제거

`error lens`:에러 더 잘 보임

`Bracket Pair Colorizer 2`: 코드 구분 (preferences 설정 필요)

"dart.previewFlutterUiGuides": true,


## pub
---

`flutter_riverpod`: 필수

### riverpod lint

`riverpod_lint`: 실수 방지 (dev_dependencies)

`custom_lint`: riverpod_lint를 위해서 (dev_dependencies)  
추가로 analysis_options.yaml파일의

```yaml
analyzer:
  plugins:
    - custom_lint
```  
위를 추가해야 한다.

### provider 생성

code generation 사용하려면

`riverpod_annotation`: dependencies

`build_runner`,`riverpod_generator`: dev-dependencies

이게 있어야함


### 코드 관련

```dart
void main(){
  runApp(
    ProviderScope(
      child: MyApp(),
    )
  )
}
```

위처럼 root widget(MyApp)을 `ProviderScope`로 감싸야한다.