---
sidebar_position: 44
---

# 44. [flutter] windows desktop에서 인증서 저장소에 인증서 추가
---

## 사전 설정

wincrypt.h의 함수들을 사용하면 됩니다. 

이것을 사용하기 위해서 2곳에 코드를 추가해줘야 합니다.

1. windows/CMakeLists.txt에 윗부분 `target_link_libraries`

```
...

target_link_libraries(${PLUGIN_NAME} PRIVATE flutter flutter_wrapper_plugin Crypt32.lib)
set(x509_cert_store_bundled_libraries
  ""
  PARENT_SCOPE
)
...

```

위처럼 Crypt32.lib를 추가해줘야 합니다.

2. windows/CMakeLists.txt에 아랫부분 `target_link_libraries`

```
# === Tests ===
...
target_link_libraries(${TEST_RUNNER} PRIVATE flutter_wrapper_plugin Crypt32.lib)
target_link_libraries(${TEST_RUNNER} PRIVATE gtest_main gmock)
...

```

```cpp
#include <wincrypt.h>
#include <vector>

using flutter::EncodableMap;
using flutter::EncodableValue;
```

필요한 것들 추가해줍니다.

## CertOpenSystemStoreA

```cpp
HCERTSTORE hStore = CertOpenSystemStoreA(NULL, storeNameData.c_str());

if (!hStore) {
  DWORD dwError = GetLastError();
  std::stringstream ss;
  ss << dwError;
  result->Error("CERT_OPEN_FAILED", ss.str());
}
```

CertOpenSystemStoreA는 시스템의 Cert 저장소를 여는 역할을 한다.

`LPCSTR`타입으로 된 저장소 이름 값을 받기 때문에 String으로 받아온 값에 `c_str()`을 해줘야 한다.


## CertCreateCertificateContext

```cpp
PCCERT_CONTEXT pCertContext = CertCreateCertificateContext(
    X509_ASN_ENCODING | PKCS_7_ASN_ENCODING,
    certificateData.data(),
    static_cast<DWORD>(certificateData.size()));

if (!pCertContext) {
    CertCloseStore(hStore, 0);
    result->Error("CONTEXT_CREATE_FAILED","Failed to create a certificate context");
}
```
CertCreateCertificateContext로 인증서 context를 만든다.

위처럼 작성하면 된다.

## CertAddCertificateContextToStore

```cpp
        BOOL rst = CertAddCertificateContextToStore(
            hStore,
            pCertContext,
            // CERT_STORE_ADD_REPLACE_EXISTING,
            // CERT_STORE_ADD_NEWER,
            CERT_STORE_ADD_NEW,
            NULL
        );
```

저장소에 추가하는 행위다

`CERT_STORE_ADD_REPLACE_EXISTING`는 같은 인증서가 있어도 교체하는거고

`CERT_STORE_ADD_NEWER`는 같은 인증서가 있을 때 유효기간이 더 길면 추가 아니면 에러 내보내고

`CERT_STORE_ADD_NEW`는 같은 인증서가 없을 때만 추가 있으면 에러 내보낸다.


## free

```cpp
CertFreeCertificateContext(pCertContext);
CertCloseStore(hStore, 0);
```

사용이 끝난 context와 store는 free시켜준다.