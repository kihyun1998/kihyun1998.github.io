---
slug: Flutter
title: Flutter TIL - 9
authors: [kihyun]
tags: [TIL, 플러터, flutter, dart, data class generator, equatable, json]
---

# Flutter TIL - 9
---

## Equatable
---

`dart class generator`라는 vs code extension을 사용할 때 객체 비교를 위해서 `equatable`이라는 dart 패키지를 이용할 수 있습니다.

vs code preferences에서 equatable 관련 설정을 `true`로 변경한다면 generator를 이용할 수 있습니다.

함수를 통해 객체를 생성하면 주소 값이 달라져서 같은 값을 갖고 있는 객체를 비교해도 false로 나오는데 `equatable`을 이용해서 비교하면 true를 반환할 수 있습니다.

## Json 관련
---

json object로 자동 data class가 생성되는 마법이 있다고 합니다.

1. 일단 dart 파일을 만듭니다.

2. api 응답 json 값을 넣습니다.

3. `ctrl`+`shift`+`p`해서 Generate from JSON 입력해서 선택

4. class 이름 입력

5. no 선택

그럼 data class 자동 생성 해준다.

fromMap, toMap만 잘 확인해보면 된다. (beta 단계임)

## dio
---