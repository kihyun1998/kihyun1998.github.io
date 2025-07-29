---
sidebar_position: 56
---

# 56. [flutter] [WSL] 개발환경 구성
---

# WSL에 Flutter 설치하기

WSL(Windows Subsystem for Linux)에 Flutter를 설치하는 완벽한 가이드입니다. Windows와 별개로 독립적인 Flutter 환경을 구축할 수 있습니다.

## 🚨 주의사항

WSL은 Windows PATH를 자동으로 가져오기 때문에, Windows에 Flutter가 이미 설치되어 있다면 충돌이 발생할 수 있습니다. 이 가이드는 이런 문제들을 해결하는 방법도 포함합니다.

## 📋 사전 요구사항

- WSL2가 설치되어 있어야 합니다
- Ubuntu 또는 다른 Linux 배포판이 WSL에서 실행 중이어야 합니다

## 🛠️ 설치 과정

### 1. 필수 종속성 설치

```bash
# 시스템 업데이트
sudo apt update && sudo apt upgrade -y

# 필수 패키지 설치
sudo apt install -y curl git unzip xz-utils zip libglu1-mesa
```

### 2. Flutter SDK 다운로드 및 설치

```bash
# 홈 디렉토리로 이동
cd ~

# development 디렉토리 생성
mkdir -p ~/development

# 최신 Flutter 3.32.x 안정 버전 다운로드
wget https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.32.7-stable.tar.xz

# 압축 해제
tar -xf flutter_linux_3.32.7-stable.tar.xz -C ~/development/

# 다운로드 파일 정리
rm flutter_linux_3.32.7-stable.tar.xz
```

### 3. 환경변수 설정 (중요!)

**Windows PATH 충돌 문제 해결**을 위해 WSL Flutter를 우선순위로 설정:

```bash
# WSL Flutter를 PATH 맨 앞에 추가 (Windows Flutter보다 우선)
echo 'export PATH="$HOME/development/flutter/bin:$PATH"' >> ~/.bashrc

# 현재 터미널에 적용
source ~/.bashrc
```

### 4. 설치 확인

```bash
# Flutter 경로 확인 (WSL 경로가 나와야 함)
which flutter
# 예상 결과: /home/사용자명/development/flutter/bin/flutter

# Flutter 버전 확인
flutter --version

# Flutter doctor 실행
flutter doctor
```

## ✅ 최종 확인

설치가 완료되면 다음과 같이 출력됩니다:

```
Flutter 3.32.5 • channel stable • https://github.com/flutter/flutter.git
Framework • revision xxxxx
Engine • revision xxxxx  
Tools • Dart 3.8.1 • DevTools 2.45.1
```

## 🎯 추가 설정

### Flutter 사전 캐시 (선택사항)
```bash
# 빌드 속도 향상을 위한 사전 캐시
flutter precache
```

### Dart SDK 확인
```bash
dart --version
```

## 💡 팁

1. **WSL 내부 설치의 장점**:
   - 파일시스템 호환성 문제 없음
   - Windows Flutter와 독립적 환경
   - 더 빠른 성능

2. **Windows Flutter 계속 사용 가능**:
   - WSL에서 설정을 변경해도 Windows 환경변수는 그대로 유지
   - Windows cmd/PowerShell에서는 여전히 Windows Flutter 사용 가능

3. **IDE 설정**:
   - VS Code에서 WSL 확장 설치 후 WSL 환경에서 개발 가능
   - Android Studio도 WSL 프로젝트 지원

## 🚀 다음 단계

1. `flutter doctor`로 추가 설정 필요 사항 확인
2. Android SDK 설치 (Android 개발용)
3. Chrome 설치 (웹 개발용)
4. VS Code + Flutter 확장 설치

이제 WSL에서 Flutter 개발을 시작할 수 있습니다! 🎉