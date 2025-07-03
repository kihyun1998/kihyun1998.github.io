---
sidebar_position: 6
---

# [WSL] "가상 머신 플랫폼" 선택적 구성 요소를 사용하도록 설정하고 BIOS에서 가상화가 사용하도록 설정되어 있는지 확인하세요.
---

```
WSL2는 현재 컴퓨터 구성에서 지원되지 않습니다.
"가상 머신 플랫폼" 선택적 구성 요소를 사용하도록 설정하고 BIOS에서 가상화가 사용하도록 설정되어 있는지 확인하세요.
실행하여 "가상 머신 플랫폼"을 사용하도록 설정: wsl.exe --install --no-distribution
자세한 내용은 https://aka.ms/enablevirtualization 참조하세요.
오류 코드: Wsl/Service/CreateInstance/CreateVm/HCS/HCS_E_HYPERV_NOT_INSTALLED
```

이런 문구가 나오면서 wsl이 안되는 현상이 있음.

## 해결방법


### 필요한 Windows 기능들 활성화

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
dism.exe /online /enable-feature /featurename:Microsoft-Hyper-V-All /all /norestart
```

하고 재부팅

```bash
shutdown /r /t 0
```


### 최후 방법

```bash
# PowerShell 관리자 권한으로 실행
# 현재 상태 확인
bcdedit /enum | findstr -i hypervisorlaunchtype
```

`hypervisorlaunchtype Off`로 나오면

```bash
# 강제로 활성화
bcdedit /set hypervisorlaunchtype auto
shutdown /r /t 0
```