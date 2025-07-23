---
sidebar_position: 12
---

#  12. [etc] make 설치방법
---


[chocolate 설치](https://docs.chocolatey.org/en-us/choco/setup/#install-downloaded-nuget-package-from-powershell)

powershell을 관리자 권한으로 켜서 설치한다.

```bash
[System.Net.WebRequest]::DefaultWebProxy.Credentials = [System.Net.CredentialCache]::DefaultCredentials; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## make 설치

```bash
choco instll make
```

## make 확인

```bash
make -h
```