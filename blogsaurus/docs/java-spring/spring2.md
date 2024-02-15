---
sidebar_position: 2
---

# [Spring] index.html
---

## index.html

/src/main/java/resources/static/index.html에 파일 작성해서 놓습니다.

그러면 서버 띄우면 그 파일이 띄어집니다.


### controller

```java
@Controller
public class HiController {

    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data","hello!");
        return "hello"; // hello.html
    }
}
```

이렇게 `@Controller`어노테이션이 붙으면 컨트롤러가 될 수 있습니다.

model에 data라는 속성에 hello!라는 값을 넘기겠다는 뜻이고

`return "hello"` 는 `hello.html`을 찾아서 넘기라는 뜻입니다.


### spring-boot-devtools

build.gradle에 

`org.springframework.boot:spring-boot-devtools`

위의 것을 추가해도 되고 dependenceis에서 검색해가지구 add해도 됩니다.


설정을 해야하는데

`Settings` > `Build,Execution,Deployment` > `Compiler`

에서 **Build project autionmatically** 체크

그리고

`Advanced Settings`에서 

**Allow auto-make to start even..** 체크

하고 gradle load하고 프로젝트 재시작 하면 된다고 하네요.