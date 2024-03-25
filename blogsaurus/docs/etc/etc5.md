---
sidebar_position: 5
---

# 5. [etc] windows에서 자체 서명 인증서 발급
---

## 절차

1. powershell을 관리자 권한으로 실행

2. 서명하기

```bash
$cert = New-SelfSignedCertificate -DnsName www.example.com -CertStoreLocation "cert:\LocalMachine\My"
```

3. 로컬에 저장

```bash
Export-Certificate -Cert $cert -FilePath C:\certificate.cer
```

4. base64로 인코딩

```bash
CertUtil -encode .\certificate.cer .\certification.txt
```