---
slug: 와이어샤크
title: 와이어샤크
authors: [kihyun]
tags: [KOSTA, 와이어샤크 ]
---

# [KOSTA] 와이어샤크 교육 2일차
---

## 문제
---

### PDU

- L1> bits
- L2> frame
- L3> packet
- L4> segement
- L5~L7> message, data stream

### 캐시 확인 및 삭제

- MAC

```bash title='추가'
arp -a
```

```bash title='삭제'
arp -d
```

- DNS

```bash title='추가'
ipconfig/displaydns
```

```bash title='삭제'
ipconfig/flushdns
```

- NetBIOS

```bash title='추가'
nbtstat -c
```

```bash title='삭제'
nbtstat -R
```

### OSI 

MAC주소 포함 : L2 - datalink layer
IP주소 포함 : L3 - network layer

### 기본 최대 크기
Ethernet Frame : 1518 Byte
MTU : 1500 byte 크기변경 가능
MSS : 1460 byte


## 목적지 IP주소에 대한 MAC주소를 찾아오는 프로토콜

arp

### TCP 헤더에서 Flag 6개

syn,ack,fin,rst,psh,urg

###  TCP/IP에서 연결상태를 확인하고 에러메세지를 전달하는 프로토콜

icmp

### 스위치 기본 기능

flooding, learning, fowarding, filtering



## 와이어샤크
---

### 병합

와이어샤크에 일시중지 기능은 없다 정지 이후 다시 캡쳐해서 병합하는 방법밖에 없다.

병합은 파일 > 병합에서 가능

와이어샤크는 두개의 파일을 동시에 열 수 없어서 병합을 사용한다.

병합에는 3가지 옵션이 있는데 기본값은 시간 기준으로 병합하는 것이고 전에 이어붙이기 후에 이어붙이기가 있습니다.

### 캡처 파일

열기 폴더 버튼으로 파일을 연다면 캡처 시간과 사이즈 등을 추가로 확인할 수 있다.


### 새로고침 버튼

와이어샤크는 time 칼럼의 작동방식이 지연 시간 작동방식을 채택한다.


그래서 1번 패킷이 0.00초이고 그다음 부터는 1번 패킷 이후 캡쳐된 지연 시간이다.

그런데 10번 패킷을 0초로 설정하는 방법이 있는데 `시간 참조 설정`을 하면 할 수 있다.

`시간 참조 설정`은 하나에만 할 수 있는 것이 아닌데 그래서 나중에 풀어주려고 하면 너무 어렵다.

이 때 `파일 다시 불러오기` 버튼이 이를 모두 해제해준다.

그래서 `파일 다시 불러오기` 버튼을 자주 사용한다고 한다.


### 이름 해석

보기 > 이름해석 > 네트워크 주소 해석을 키면 패킷의 IPv4에서 dns 주소로 확인할 수 있다.

근데 이러면 쓸데없는 UDP 패킷이 생기기 때문에 실시간 패킷을 캡쳐할 때 이름 해석을 해제하고 하는 것이 좋다.

보기 > 이름해석 > 전송주소 해석을 키면 포트 번호에 이름을 붙여줌


:::tip 이름 해석 커스텀
`MAC addr`  c:\program files\wireshark\ethers
`IP addr`   c:\program files\wireshark\hosts
`port name` c:\program files\wireshark\services
:::
