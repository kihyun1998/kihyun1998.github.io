---
sidebar_position: 55
---

# 54. [flutter] [Macos] 오프라인 환경 개발환경 구성 - 1
---

## 준비물

- homebrew
- flutter
- pubcache

vs code는 있다는 가정이 있습니다.

## 준비과정

### 1. homebrew 패키지 설치

```bash
brew install ruby cocoapods
```

### 2. homebrew 백업

```bash
sudo tar -czf homebrew-bundle.tar.gz /opt/homebrew
```

### 3. flutter 백업

```bash
cd ~
tar -czf flutter-sdk.tar.gz dev/flutter
```

또는 그냥 flutter macos 용 다운로드해서 가져가도 됨. 위 폴더는 가정의 경로입니다.


### 4. pub cache 백업

```bash
tar -czf pub-cache.tar.gz ~/.pub-cache
```

### 5. env.sh 만들기

```text
export PATH="$PATH:$HOME/dev/flutter/bin"
export PATH="/opt/homebrew/bin:/opt/homebrew/opt/ruby/bin:$PATH"
```

위처럼 만들어서 가져가면 편합니다.

## 오프라인 환경에서

### 1. homebrew 적용

```bash
sudo rm -rf /opt/homebrew
sudo tar -xzf homebrew-bundle.tar.gz -C /
```


### 2. flutter 적용

```bash
mkdir -p ~/dev
tar -xzf flutter-sdk.tar.gz -C ~/dev
```

### 3. pub cache 적용

```bash
tar -xzf pub-cache.tar.gz -C ~
```

### 4. zshrc에 환경 변수 적용

```bash
source env.sh
echo 'source ~/env.sh' >> ~/.zshrc
source ~/.zshrc
```


## 확인



```bash
# ✅ Flutter SDK 경로 확인
which flutter
# → /Users/yourname/dev/flutter/bin/flutter

# ✅ Flutter 버전 확인
flutter --version
# → Flutter 3.x.x, Dart x.x.x 등

# ✅ Ruby 경로 및 버전 확인
which ruby
# → /opt/homebrew/opt/ruby/bin/ruby
ruby -v
# → ruby 3.2.x

# ✅ gem 경로 및 버전 확인
which gem
# → /opt/homebrew/opt/ruby/bin/gem
gem -v
# → 3.x.x

# ✅ pod 명령어 경로 및 버전 확인
which pod
# → /opt/homebrew/bin/pod
pod --version
# → 1.16.x

# ✅ flutter doctor 결과 확인
flutter doctor
# → 모든 항목이 ✅ 이면 성공!
```

끝.. 은 아니고 macos에서 사용하는 pod 관한 파일만 옮겨주면 되는데 확인중.. 2부에서