---
sidebar_position: 13
---

# 13. [BackEnd] load config file & env vars use VIPER


## 오늘 학습 내용
---

viper를 사용해서 파일이나 환경 변수에서 load config 하는 방법


## file & env vars
---

파일에서 값을 읽으면 기본 구성을 쉽게 지정할 수 있음

환경변수에서 값을 읽으면 docker 컨테이너로 배포할 때 기본 설정을 재정의하는데 도움이 된다.


## Viper
---

viper는 값을 찾고 로드하고 unmarshal 한다고 한다.

1. JSON,TOML,YAML,ENV,INI 파일을 지원한다.

2. 환경 변수나 flag에서도 값을 읽을 수 있고 기본 값을 설정하거나 재정의할 수 있다.

3. 원격 시스템에서 config 읽을 수 있다. Etcd, consul같은 (암호화 non-암호화 다 가능)

4. config file의 변경사항 감시 가능


## 목표
---

simple bank에 있는 설정 값들(하드코딩 돼있는거) 파일이나 환경변수로 변경

## viper 설치
---

[여기](https://github.com/spf13/viper)에서 viper 설치 명령어를 받아서 터미널에 실행합니다.

```bash
go get github.com/spf13/viper
```

## viper 사용
---

### 1. 파일 만들기

app.env 파일을 만듭니다.

```go
dbDriver      = "postgres"
dbSource      = "postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable"
serverAddress = "0.0.0.0:8080"
```

해당 변수들을 env format에 맞게 변경해야 한다.

변수명은 대문자고 단어 사이에는 `_`로 구분한다.

vs code에서 `dot env`라는 extension을 설치한다면 더 이쁘다.


```go
DB_DRIVER=postgres
DB_SOURCE=postgresql://root:secret@localhost:5432/simple_bank?sslmode=disable
SERVER_ADDRESS=0.0.0.0:8080
```

형식을 바꾸면 위처럼 작성하게 된다.


### 2. 불러오기

1. config.go 파일을 util 밑에 만듭니다.

2. 구조체 생성

```go
type Config struct {
	DBDriver      string
	DBSource      string
	ServerAddress string
}
```

3. unmarshal을 위한 mapstructure 설정

```go
type Config struct {
	DBDriver      string `mapstructure:"DB_DRIVER"`
	DBSource      string `mapstructure:"DB_SOURCE"`
	ServerAddress string `mapstructure:"SERVER_ADDRESS"`
}
```

4. loadConfig 함수 생성

```go
func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName("app")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
```

:::tip 코드 설명
`viper.AddConfigPath(path)`: config file의 경로 알려준다. 현재 코드에서는 인자로 받음

`viper.SetConfigName("app")` : 해당 이름의 config file을 찾도록 한다.

`viper.SetConfigType("env")` : config file 타입을 알려준다. ( json과 xml 등도 사용할 수 있음 )

`viper.AutomaticEnv()` : config file에서 읽은 값을 자동으로 환경 변수 값으로 재정의되도록 지시

`viper.ReadInConfig()` : config file로 부터 읽어오기

`viper.Unmarshal(&config)` : config object로 unmarshal
:::

5. 적용하기

```go
func main() {

	config, err := util.LoadConfig(".")
	if err != nil {
		log.Fatal("CANNOT LOAD CONFIG", err)
	}

	// 서버 생성하려면 db에 연결하고 store 생성해야한다.

	// db 연결
	conn, err := sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("cannot connect : ", err)
	}

	store := db.NewStore(conn)
	server := api.NewServer(store)

	err = server.Start(config.ServerAddress)
	if err != nil {
		log.Fatalln("CANNOT START SERVER")
	}
}
```

위처럼 바꿀 수 있다. LoadConfig할 때 경로를 `.`으로 보낸 이유는 같은 경로에 있기 때문


`app.env`가 다른 경로에 있다면 아래와 같이 할 수 있다.

```go
func TestMain(m *testing.M) {
	config, err := util.LoadConfig("../../")
	if err != nil {
		log.Fatal("cannot connect : ", err)
	}

	// db 연결
	testDB, err = sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("cannot connect : ", err)
	}

	// db 접속 객체를 testQueries에 저장
	testQueries = New(testDB)

	// 테스트 시작
	os.Exit(m.Run())
}

```