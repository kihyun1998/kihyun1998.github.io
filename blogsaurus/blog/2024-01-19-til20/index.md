---
slug: flutter-til-20
title: Flutter TIL - 20
authors:  [kihyun]
tags:  [TIL, 플러터, flutter, revierpod, path_provider, AsyncValue ]
---

# Flutter TIL - 20
---

## path_provider 종류
---

gpt의 답변을 정리합니다.

1. getApplicationDocumentsDirectory()  
  - Windows에서 이 함수는 사용자의 "Documents" 폴더에 있는 애플리케이션 데이터 디렉토리를 반환합니다. 보통 `C:\Users\<User Name>\Documents` 경로로 찾을 수 있습니다.

2. getApplicationSupportDirectory()  
  - `C:\Users\User\AppData\Roaming\ [패키지이름]\ [프로젝트이름]`

3. getDownloadsDirectory()  
  - 사용자의 "Downloads" 폴더를 반환합니다, 보통 `C:\Users\<User Name>\Downloads`에 위치합니다.

4. getExternalCacheDirectories()  
  - Windows에서 외부 캐시 디렉토리는 일반적으로 해당되지 않습니다. 이 함수는 Windows에서 지원되지 않을 가능성이 높습니다.

5. getExternalStorageDirectories({StorageDirectory? type})  
  - Windows에서 외부 저장소 디렉토리는 일반적으로 해당되지 않으며, 이 함수는 Android 플랫폼에 특화되어 있습니다.

6. getExternalStorageDirectory()
  - 이 함수도 마찬가지로 Windows에서는 일반적으로 사용되지 않습니다. Android에서는 외부 저장소의 루트 디렉토리를 반환합니다.

7. getLibraryDirectory()  
  - macOS에서만 사용되며, Windows에서는 해당 디렉토리가 없습니다.

8. getTemporaryDirectory()  
  - 시스템의 임시 폴더를 반환합니다. Windows에서는 보통 `C:\Users\<User Name>\AppData\Local\Temp`에 위치합니다.


## AsyncValeu - properties
---

### value

<table>
  <tr class="custom_th">
    <th>Async종류</th>
    <th>previous value [X]</th>
    <th>previous value [O]</th>
  </tr>
  <tr>
    <td class="custom_td">AsyncLoading</td>
    <td>null</td>
    <td>previous value</td>
  </tr>
  <tr>
    <td class="custom_td">AsyncData</td>
    <td>current value</td>
    <td>current value</td>
  </tr>
  <tr>
    <td class="custom_td">AsyncError</td>
    <td>rethrow error</td>
    <td>previous value</td>
  </tr>
</table>

### error, stackTrace

<table>
  <tr class="custom_th">
    <th>Async종류</th>
    <th>previous error [X]</th>
    <th>previous error [O]</th>
  </tr>
  <tr>
    <td class="custom_td">AsyncLoading</td>
    <td>null</td>
    <td>previous error</td>
  </tr>
  <tr>
    <td class="custom_td">AsyncData</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <tr>
    <td class="custom_td">AsyncError</td>
    <td>current error</td>
    <td>current error</td>
  </tr>
</table>


### isLoading/hasValue/hasError

<table class="custom_table">
  <tr class="custom_th">
    <th>Async종류</th>
    <th>previous value [X]<br/>previous error [X]</th>
    <th>previous value [X]<br/>previous error [O]</th>
    <th>previous value [O]<br/>previous error [X]</th>
    <th>previous value [O]<br/>previous error [O]</th>
  </tr>
  <tr>
    <td class="custom_td">AsyncLoading</td>
    <td>isLoading [O] <br/>hasValue [X] <br/>hasError [X]</td>
    <td>isLoading [O] <br/>hasValue [O] <br/>hasError [X]</td>
    <td>isLoading [O] <br/>hasValue [X] <br/>hasError [O]</td>
    <td>isLoading [O] <br/>hasValue [O] <br/>hasError [O]</td>
  </tr>
  <tr>
    <td class="custom_td">AsyncData</td>
    <td>isLoading [X] <br/>hasValue [O] <br/>hasError [X]</td>
    <td>isLoading [X] <br/>hasValue [O] <br/>hasError [X]</td>
    <td>isLoading [X] <br/>hasValue [O] <br/>hasError [X]</td>
    <td>isLoading [X] <br/>hasValue [O] <br/>hasError [X]</td>
  </tr>
  <tr>
    <td class="custom_td">AsyncError</td>
    <td>isLoading [X] <br/>hasValue [X] <br/>hasError [O]</td>
    <td>isLoading [X] <br/>hasValue [O] <br/>hasError [O]</td>
    <td>isLoading [X] <br/>hasValue [X] <br/>hasError [O]</td>
    <td>isLoading [X] <br/>hasValue [O] <br/>hasError [O]</td>
  </tr>
</table>