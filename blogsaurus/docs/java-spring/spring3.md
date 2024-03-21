---
sidebar_position: 3
---

# [Spring] build 하는 법
---

해당 폴더로 가서 ls를 하면 2가지를 찾을 수 있습니다.

`gradlew`와 `gradlew.bat`입니다.

## macos

```bash
./gradlew build
```

## window

```bash
gradlew.bat build
```

## 실행

build 명령어를 쳤던 폴더에서 

```bash
cd build/libs
```

하고

```bash
java -jar [빌드파일이름].jar
```

을 하면 스프링 서버가 시작합니다 !


## 잘 안되는 경우

```bash
./gradlew clean build
```

clean build를 하면 된다. clean하면 build 폴더를 삭제함