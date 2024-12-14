---
sidebar_position: 3
---

# Oracle Cloud RAM 용량 늘리기
---

```bash
ubuntu@my-public-server:~$ free
               total        used        free      shared  buff/cache   available
Mem:          981796      296824      103940        1132      581032      522272
Swap:              0           0           0
```

free를 사용해서 메모리를 확인할 수 있습니다.  
Swap을 이용해서 메모리를 늘리는 방법을 알아봅시다.


## Swapfile 만들기

```bash
sudo dd if=/dev/zero of=/swapfile bs=128MB count=32
```

이 명령어를 통해서 swapfile을 만들 수 있습니다.


swapfile을 읽을 수 있도록 권한 설정을 하고

```bash
sudo chmod 600 /swapfile
```

swapfile을 초기화해줍니다.

```bash
sudo mkswap /swapfile
```

swap on을 해줍니다.

```bash
sudo swapon /swapfile
```


swap이 적용된 것을 확인해 볼 수 있습니다.

```bash
ubuntu@my-public-server:~$ free -m
               total        used        free      shared  buff/cache   available
Mem:             958         288         194           1         475         512
Swap:           3906           0        3906

```


## 재시작시 swapon 되도록 설정

```bash
sudo vi /etc/fstab
```

위로 들어가줘서 마지막 줄에 아래와같이 작성하면 된다.

```txt
.
.
/swapfile swap swap defaults 0 0
```

저장은 `esc`를 누른 후 `:wq` 후 엔터로 저장할 수 있다.