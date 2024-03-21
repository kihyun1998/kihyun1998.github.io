---
sidebar_position: 4
---

# [Spring] JPA 및 DB 설정
---


## Mysql server 
---

mysql server를 설정하여 사용합니다.


## jpa dependency
---

```java
dependencies {
	...
	implementation 'org.springframework.boot:spring-boot-starter-jdbc'
	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	runtimeOnly 'com.mysql:mysql-connector-j'
	implementation 'org.hibernate:hibernate-search:5.11.1.Final'
	...
}
```

## mysql setting
---

```java
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/photo_album
spring.datasource.username=<유저이름>
spring.datasource.password=<비밀번호>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
spring.jpa.show-sql=true
```