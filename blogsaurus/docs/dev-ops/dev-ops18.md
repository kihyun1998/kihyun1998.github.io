---
sidebar_position: 18
---

# [TTA] grafana 사용
---

## 오픈소스 grafana

근데 grafana는 AGPL이다.


[grafana 링크](https://grafana.com/auth/sign-in/)

### 개념

`log` : 메시지

`traces` 연관관계

`metric`: 성능 수치

`profile`: 성능데이터 수집?


### 정형 로그 예시

```json
{"asctime": "2024-10-31 15:25:05,533", "levelname": "ERROR", "message": "division by zero", "funcName": "<module>", "lineno": 38, "exc_info": "Traceback (most recent call last):\n  File \"C:\\cicd\\dev-ops-test\\loki-cloud\\main.py\", line 36, in <module>\n    result = 1 / 0\n             ~~^~~\nZeroDivisionError: division by zero", "taskName": null}
{"asctime": "2024-10-31 15:25:06,535", "levelname": "INFO", "message": "This is an INFO log message from my application.", "funcName": "<module>", "lineno": 23, "exc_info": null, "taskName": null}
{"asctime": "2024-10-31 15:25:07,536", "levelname": "INFO", "message": "This is an INFO log message from my application.", "funcName": "<module>", "lineno": 23, "exc_info": null, "taskName": null}
{"asctime": "2024-10-31 15:25:07,536", "levelname": "ERROR", "message": "division by zero", "funcName": "<module>", "lineno": 38, "exc_info": "Traceback (most recent call last):\n  File \"C:\\cicd\\dev-ops-test\\loki-cloud\\main.py\", line 36, in <module>\n    result = 1 / 0\n             ~~^~~\nZeroDivisionError: division by zero", "taskName": null}
{"asctime": "2024-10-31 15:25:08,538", "levelname": "INFO", "message": "This is an INFO log message from my application.", "funcName": "<module>", "lineno": 23, "exc_info": null, "taskName": null}
{"asctime": "2024-10-31 15:25:08,539", "levelname": "WARNING", "message": "This is a simulated ValueError!", "funcName": "<module>", "lineno": 30, "exc_info": null, "taskName": null}       
{"asctime": "2024-10-31 15:25:09,540", "levelname": "INFO", "message": "This is an INFO log message from my application.", "funcName": "<module>", "lineno": 23, "exc_info": null, "taskName": null}
{"asctime": "2024-10-31 15:25:09,541", "levelname": "WARNING", "message": "This is a simulated ValueError!", "funcName": "<module>", "lineno": 30, "exc_info": null, "taskName": null}       
{"asctime": "2024-10-31 15:25:10,542", "levelname": "INFO", "message": "This is an INFO log message from my application.", "funcName": "<module>", "lineno": 23, "exc_info": null, "taskName": null}
{"asctime": "2024-10-31 15:25:10,543", "levelname": "ERROR", "message": "division by zero", "funcName": "<module>", "lineno": 38, "exc_info": "Traceback (most recent call last):\n  File \"C:\\cicd\\dev-ops-test\\loki-cloud\\main.py\", line 36, in <module>\n    result = 1 / 0\n             ~~^~~\nZeroDivisionError: division by zero", "taskName": null}
```

위처럼 로그 작성하면 정형임.


## Loki

Promtail이라는게 로그파일 읽어서 `Loki`로 보냄

### key 발급

grafana에서 `Security` > `Access Policies`에서 정책 생성하고

add token으로 key발급 가능

realms는 `all stacks`

권한은 `log write`만 주고 정책 만들었따.

그리고 `add token`으로 토큰 생성


### promtail agent

promtail 다운로드해야함.

(여기에서)[https://grafana.com/docs/loki/latest/send-data/promtail/installation/] 다운로드 할 수 있따.

docker, helm, binary 등등 있음

docker로 하는 예시는 아래와 같다.

1. docker container pull하기

```bash
docker pull grafana/promtail:3.0.0
```

2. promtail yaml파일 생성

grafana 페이지에서 `launch` 누르고 `Loki` 에서 `Send log` 클릭해서 yaml파일 복사

```yaml
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: ./tmp/positions.yaml

clients:
  - url: https://1037811:<Your Grafana.com API Token>@logs-prod-030.grafana.net/loki/api/v1/push


scrape_configs:
  - job_name: app_logs
    static_configs:
      - targets:
          - localhost
        labels:
          job: my-devops-practice
          host: my-labtop
        #   __path__: ./tmp/*.log
          __path__: /var/log/*.log  # config for container
```

container는 /var/log 저거 써야한다. 위에꺼는 windwos binary 전용

3. docker run

```bash
docker run --name promtail --volume "$PWD/promtail:/etc/promtail" --volume "$PWD/tmp:/var/log" grafana/promtail:3.0.0 --config.file=/etc/promtail/config.yaml
```

그럼 확인하는 방법은

Home에서 `grafana` `launch` 클릭해서 cloud home으로 들어가서

`Explore` 들어가서 `grafanacloud-<username>-logs`을 눌른다.

그리고 query에서 config.yaml에 입력했던 `host: my-labtop`을 이용해서

`host` = `my-labtop`을 만들어줌

sync 하고 live 하면 끝

근데 실제 app을 실행해서 로그 생성되도록 해야한다.

promtail은 로그를 읽고 전송만하는 친구임



## 오픈소스 프로메테우스 대시보드

프로메테우스는 apache다.

[prometheus 링크](https://artifacthub.io/packages/helm/prometheus-community/prometheus)

