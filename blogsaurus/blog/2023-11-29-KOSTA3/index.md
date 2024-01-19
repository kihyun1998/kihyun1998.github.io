---
slug: kosta3
title: 와이어샤크
authors: [kihyun]
tags: [KOSTA, 와이어샤크 ]
---

# [KOSTA] 와이어샤크 교육 3일차
---

### 이름 풀이 기능 참조 파일

- mac address 사용자 정의 C:\Program Files\Wireshark\ethers
- port number 정보 C:\Program Files\Wireshark\services
- 호스트 이름 정보 C:\Program Files\Wireshark\hosts

### 와이어샤크는 포트번호가 인식되지 않을때 data로 해석됩니다. 비표준 포트 번호를 사용하는 FTP 서비스를 수동으로 분석기를 설정하는 메뉴는 어디인가요?

Analyze>Decode as

### WLAN 프로파일을 생성시 환경설정 저장 경로는 어디인가요?

C:\Users\user1\AppData\Roaming\Wireshark\Profile

### 원격지 트래픽 캡쳐를 수행하려고 합니다. 캡쳐하고자 하는 컴퓨터에 winpcap을 설치한 후 원격지에 실행해야하는 데몬 실행파일은 무엇인가요?

rpcapd.exe

### 기존 추적파일에는 적용할 수 없고 실시간 캡쳐하는 작업에만 적용되는 필터로 TCPDUMP 구문의 BPF형식을 따르는 필터는 무엇인가요?

캡쳐필터

### 실시간 캡쳐 필터구문을 작성하세요. 

- http와 dns 패킷을 동시 캡쳐 `tcp port 80 or udp port 53`
- 목적지 IP주소가 10.10.10.10 이면서 telnet 패킷만 캡쳐 `ip dst 10.10.10.10 and tcp port 23`
- icmp ttl 에러만 캡쳐 `icmp[0]=11 and icmp[1]=0`

### 전역환경설정 위치에 존재하는 파일로 업그레이드시 복사본을 만들어야 하는 파일을 쓰세요.

- 실시간 캡쳐 필터 cfilters
- 디스플레이 필터 dfilters
- 컬러링 필터 colorfilter

### 실시간 캡쳐시 파일집합으로 최근 10개 파일만 생성을 유지할 수 있는 설정은 무엇인가요?

링버퍼

