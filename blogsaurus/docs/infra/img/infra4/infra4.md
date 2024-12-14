---
sidebar_position: 4
---

# Oracle Cloud IP 고정
---

클라우드 서비스는 서버를 껏다가 키면 아이피가 변동된다.


## IP 고정하기

Oracle Cloud 페이지 에서

`메뉴` > `네트워킹` > `예약된 공용(Public) IP`로 이동


![alt text](./img/infra4/image.png)

이곳에서 퍼블릭 IP 주소 예약 클릭해서 추가할 수 있습니다.

![alt text](./img/infra4/image1.png)

이렇게 그냥 이름 입력해서 추가할 수 있습니다.


이렇게 해서 IP가 나오는데 제가 연결하고 싶은 서버와 연결할 수 있습니다.


## IP 연결

`컴퓨터` > `인스턴스` > `IP 고정하려는 인스턴스` > `연결된 VNIC (내 인스턴스 다시 클릭)` > `IPv4 주소` >  `(우측 메뉴버튼에서) 편집`

![alt text](./img/infra4/image2.png)

퍼블릭 IP 유형을 `퍼블릭 IP 없음`으로 변경 후 업데이트 하시고 다시 편집에 들어와서 `예약된 퍼블릭 IP` 를 선택합니다.

그리고 예약된 IP 주소에 위에서 만든 퍼블릭 IP를 넣어주고 `업데이트`.

