---
sidebar_position: 1
---

# [React + Spring + Kube] KOSTA 1
---

첫째 날에는 백엔드 그다음에는 Next.js로 프론트를 그다음에는 쿠벵네 배포하는 과정이다.

## git 설정

```bash
git remote set-url origin https://ACCESS_TOKEN@저장소URL.git
```

## 스프링 시작
---

BookMarker라는 API 백엔드를 시작한다.

프로젝트 스펙은 다음과 같다.

Project : `Maven`  
Language: `Java 17`
Dependencies: `Spring Web`, `Spring Data JPA`, `Lombok`, `Dev Tools`, `Configuration Prociessor`, `Testcontainers`, `Flyway Migration`, `H2 Database`, `PostreSQL`, `Validation`, `Actuator`


## 도메인
---

### 엔티티

어노테이션을 사용해서 엔티티를 정의하고 테이블을 정의했다.

id 값은 SequenceGenerator를 사용했다.

[localhost:8080/h2-console](localhost:8080/h2-console) 로 들어가면 데이터베이스 콘솔에 들어갈 수 있다.


### repository
---

crud 레포지토리와 paging 레포지토리가 분리됐는데 JPARepository로 사용해서 둘다 사용할 수 도 있다.


[여기](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html)에서 JPA 문서를 볼 수 있는데

```java
public interface UserRepository extends JpaRepository<User, Long> {

  @Query("select u from User u where u.emailAddress = ?1")
  User findByEmailAddress(String emailAddress);
}
```

이런식으로 쿼리작성도 할 수 있다고 한다.

### Service
---

#### 어노테이션

`@Transactional`을 사용한다. 이 어노테이션 선언하면 자동으로 쉽게 트랜잭션 사용할 수 있게 해줌.

#### 의존성 주입 DI

- `Setter Injection`
    - 인스턴스 변수 위에 `@Autowired`,`@Resource` 선언
        - `@Autowired` : type base 객체 찾아서 주입
        - `@Resource` : Beand id로 객체 찾아서 주입

- `Constructor Injection`
    - 생성자 주입
        - Mock을 만들 때 할 수 있음. Lombok의 RequiredArgsConstructor 어노테이션 사용

### controller

그냥 생성했습니다.

### runner

runner라는게 있음.

CommandLineRunner를 implements해서 사용하는데

Database에 값을 insert 하기 위해서 사용하기도 함.

`@Order(숫자)` 어노테이션으로 우선순위 정할 수 있음.

profile이 `test`인 경우에 `@Profile("dev")` 이런식으로 하면 runner가 실행하지 않습니다. 

이런식으로 구분할 수 있다.

## 페이징
---

Controller와 Service를 수정해서 페이징 할 수 있다.

PageRequest를 사용해서 진행하면 된다.


## dto
---

dto를 적용하는 이유는 SRP 때문이다.

entity를 그대로 사용하면 entity를 수정하고 암튼 번거로워지기 때문.


## flyway
---

db 마이그레이션 툴이다.

db가 비워져있으면 schema history table 생성하고 상태를 추적한다.

`resources/db/migration` 파일들을 스캔한다.

prefix, version, separator, description, suffix로 구성된다.

`prfix`에서 V는 버전 마이그레이션 R은 반복, U는 취소 마이그레이션,

`version`은 숫자, 점 언더바 조합 ex- V2.1

`description`은 설명 칼럼에 추가

`suffix` 확장자인데 기본은 .sql


### 사용

```
spring.flyway.locations=classpath:/db/migration/{vendor}
# sql 기록
spring.flyway.baselineOnMigrate=true
# flyway로 형상 관리
spring.flyway.enabled=true
```

application.properties에서 이런식으로 설정해서 사용할 수 있다고 합니다.

FlywayAutoConfiguration 클래스가 있어서 vendor를 추적한다고 함.

그니까 `spring.flyway.location` 값에 있는 /db/migration/{vendor} 이렇게 돼있는데 

실제 경로에서 저기에 vendor 자리에 h2가 있으면 h2로 만들어진다 이거임.


## postgresql

docker hub에서 postgres docker를 가져와야한다.

```bash
docker pull postgres:태그명
```

그리고 아래처럼 실행할 수 있다.

```bash
docker run --name PostgreSQL -e POSTGRES_USER=유저명 -e POSTGRES_PASSWORD=비밀번호 -d -p 5432:5432 postgres:태그명
```

## postgresql 실행

```bash
docker exec -it PostgreSQL bin/bash
```

이러면 postgreSQL 들어갈 수 있고

그 안에서도 

### db 접속

```bash
psql -U postgres -W
```

이렇게 해야 연결이 된다.

### 유저 생성

```sql
CREATE USER bookmark PASSWORD 'bookmark' SUPERUSER;
```

이렇게 유저 생성도 할 수 있고

```bash
\du
```

유저 리스트 확인 가능하다.

### db 생성

```sql
CREATE DATABASE bookmarkdb OWNER bookmark;
```

확인 

```bash
\l
```

### 연결

```bash
\c bookmarkdb bookmark
```


### 테이블 조회

```bash
\dt
```

처음에 하면 안되고 설정을 마치고 파일 작성하면 될 것이다.


## dto projection
---

### mapper 사용

mapper와 bookmarkDTO를 구현하여서 map 함수를 사용해서 가져오는 방법도 있다..

```java
@Setter
@Getter
@AllArgsConstructor
public class BookmarkDTO {
    private Long id;
    private String title;
    private String url;
    private Instant createdAt;
}

@Component
public class BookmarkMapper {

    public BookmarkDTO toDTO(Bookmark bookmark) {
        return new BookmarkDTO(
            bookmark.getId(),
            bookmark.getTitle(),
            bookmark.getUrl(),
            bookmark.getCreatedAt()
        );
    }
}
```

```java
public class BookmarkService {
    private final BookmarkRepository repository;
    private final BookmarkMapper mapper;

    @Transactional(readOnly = true)
      public BookmarksDTO getBookmarks(Integer page) {
        int pageNo = page < 1 ? 0 : page - 1;
        Pageable pageable = PageRequest.of(pageNo, 10, Sort.Direction.DESC, "id");
        
        // 여기서 map 사용해서 적용
        Page<BookmarkDTO> bookmarkPage = repository.findAll(pageable)
                //.map(bookmark -> mapper.toDTO(bookmark));
                .map(mapper::toDTO);
        return new BookmarksDTO(bookmarkPage);
    }
}
```



### sql 사용

[참고문서](https://medium.com/javarevisited/mastering-projections-in-spring-data-jpa-a-comprehensive-introduction-7bc2e64e4c14)


```java
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    @Query("""
    select new com.bookmarker.api.dto.BookmarkDTO(b.id, b.title, b.url, b.createdAt) from Bookmark b
    """)
    Page<BookmarkDTO> findBookmarks(Pageable pageable);
}
```

이렇게 repository에 find 메서드를 선언하고 

```java
 @Transactional(readOnly = true)
    public BookmarksDTO getBookmarks(Integer page) {
        int pageNo = page < 1 ? 0 : page - 1;
        Pageable pageable = PageRequest.of(pageNo, 10, Sort.Direction.DESC, "id");
        Page<BookmarkDTO> bookmarkPage = repository.findBookmarks(pageable);
        return new BookmarksDTO(bookmarkPage);
    }
```

이렇게 사용하면 된다.


## test containers
---

통합 테스트를 하는 여러 방법이 있다.

local에서 올려서 test 하던가 in-memory로 하던가 embeded library도 있지만

test container를 활용하는 것이 추천 된다.


## Search 기능 구현
---

### JPQL

```java
 @Query("""
    select new com.bookmarker.api.dto.BookmarkDTO(b.id, b.title, b.url, b.createdAt) from Bookmark b
    where lower(b.title) like lower(concat('%', :query, '%'))
    """)
    Page<BookmarkDTO> searchBookmarks(String query, PageRequest pageRequest);
```

이렇게 jpql을 사용해도 되고

### JPA Query Method

[JPA Query Methods](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html) 이 곳에서 findBy 메서드를 구경할 수 있다.



```java
Page<BookmarkDTO> findByTitleContainsIgnoreCase(String query, PageRequest pageRequest);
```

이렇게 findBy method를 사용해도 된다.

### Interface projection

[Projections](https://docs.spring.io/spring-data/jpa/reference/repositories/projections.html)




## JPA
---

`jakarta.persistence` = `JPA`

`jakarta.validation` = `Java Bean`

이런건가?


## create
---

### 입력 항목 검증

`problem-spring-web`이라는 의존성 추가하면 오류 메시지 괜찮게 나온다.


## cors
---

```java
@Configuration
public class WebConfig {
    @Bean
    public FilterRegistrationBean<?> corsConfigurationSource() {
        /// cors configuration 가져옴
        CorsConfiguration configuration = new CorsConfiguration();

        /// 오리진 모두 허용
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        
        /// 크리덴셜 true
        configuration.setAllowCredentials(true);
        
        /// 헤더 허용
        configuration.setAllowedHeaders(Arrays.asList(
                "Access-Control-Allow-Headers",
                "Access-Control-Allow-Origin",
                "Access-Control-Request-Method",
                "Access-Control-Request-Headers",
                "Origin",
                "Cache-Control",
                "Content-Type", 
                "Authorization"));
        
        /// 메서드 허용
        configuration.setAllowedMethods(Arrays.asList("POST", "DELETE", "GET", "PATCH", "PUT"));

        /// UrlBasedCorsConfigurationSource 클래스
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        
        /// configuration 값을 적용
        source.registerCorsConfiguration("/**", configuration);

        /// CorsFilter에 이 설정값을 적용
        FilterRegistrationBean<?> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(0);
        return bean;
    }
}
```

이런식으로 webConfig 생성해서 bean에 등록하여 사용


## docker 배포
---

### jar 생성

1. 파일 이름 설정  
    `build` 태그 안에 `plugins` 태그 밑에 `finalName`으로 설정한다.

    그리고 maven이나 gradel 업데이트

2. 빌드

- `maven`

```bash
mvnw clean package
```

```bash
mvnw clean package -Dmaven.test.skip=true
```
위처럼 하면 테스트 스킵

```bash
mvnw clean package -Dspring.profiles.active=dev
```
위처럼 하면 프로파일 지정

```bash
mvnw clean package -Denv=production
```

이렇게 하면 변수 지정

- `gradle`

```bash
gradlew.bat clean bootJar
```

3. 실행

```bash
java -jar target\springboot-nextjs-backend.jar --spring.profiles.active=prod
```

이런식으로 할 수 있다.

target.. 이거는 실행할 jar파일이고 profiles.active 설정은 profile 값을 뭐로할지 정하는거다.


### docker 이미지 생성

- **도커파일 생성**

먼저 도커파일 생성하고

```dockerfile
FROM openjdk:20
VOLUME /tmp
COPY target/springboot-nextjs-backend.jar springboot-nextjs-backend.jar
ENTRYPOINT ["java","-jar","/springboot-nextjs-backend.jar","--spring.profiles.active=prod"]
```

위처럼 작성하면 됩니다.

이미지는 openjdk를 사용하고

jar 파일을 복사해서

entry point 명령어들을 실행합니다.

- **도커 이미지 빌드**

도커 이미지 빌드 하고

```bash
docker build -t 도커유저이름/도커저장소이름:도커태그 .
```

- **도커 허브 push**

로그인하고

```bash
docker login -u 도커계정명
```

push

```bash
docker push 도커저장소:태그
```

도커저장소:태그는 이미지를 특정하는 거다.

## github action 설정
---

yaml파일 작성하면 끝.