---
sidebar_position: 31
---

# 31. [flutter] pub.dev에 패키지 올리기
---

## 패키지 종류
---

dart 패키지와 plugin 패키지가 있다고 합니다.

### dart package

```bash
flutter create --template=package [패키지이름]
```

이렇게 생성가능합니다.

### plugin package

```bash
flutter create --org com.example --template=plugin --platforms=windows [패키지이름]
```

이런식으로 할 수 있다.

1) `--org` : reverse domain name notation을 이용해서 자신의 organization을 나타냅니다.

2) `--platforms` : 자신이 만드는 플러그인이 support하는 플랫폼 리스트를 나타냅니다. 콤마로 연결하면 되고 android, ios, web, linux, macos, windows 가 가능합니다.

3) `-a` : 안드로이드 launguage로 java를 쓸 건지 kotlin을 쓸 건지를 나타냅니다. (명시안하면 기본은 kotlin)

4) `-i` : iOS launguage로 objc를 쓸 건지 swift를 쓸 건지를 나타냅니다. (명시안하면 기본은 swift)


## plugin package 생성
---

만들고 싶은 plugin 코드와 `test`코드와 `example`코드를 작성합니다. 그리고 github repo에 올립니다.

## 라이센스
---

라이센스 파일을 올립니다.

Github repo 만들 때 다양한 라이센스 예제들이 있는데 이를 활용하면 됩니다. 예시로 MIT는 아래와 같습니다.

```markdown
MIT License

Copyright (c) 2024 Park Ki Hyeon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## pubspec.yaml 수정
---

```yaml
name: 패키지 이름
description: 패키지 설명
version: 버전
homepage: 깃허브 링크
```

를 설정해줍니다.

[참고할만한 사이트](https://www.kodeco.com/19421827-creating-and-publishing-a-flutter-package) 입니다.

## CHANGELOG.md 수정
---

[여기](https://raw.githubusercontent.com/EdsonBueno/infinite_scroll_pagination/master/CHANGELOG.md)를 참고해서 수정하면 됩니다.


## README.md 수정
---

이거도 다른 패키지 보면서 수정합니다.

## publish 하기
---

```bash
flutter pub publish --dry-run
```

으로 검사하고

```bash
flutter pub publish
```

위 코드로 publish 할 수 있습니다. 이름 같으면 실패하니 신중하게 해야합니다.

할 때 url 눌러서 웹 인증하라는 부분도 있어서 하면 됩니다.

## update publish 하기
---

간단합니다.

pubspec.yaml에서 버전 바꿔주고 CHANGELOG.md 수정하고 

```bash
flutter pub publish --dry-run
```

```bash
flutter pub publish
```

다시 해주면 끝납니다.