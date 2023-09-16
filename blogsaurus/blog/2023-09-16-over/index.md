---
slug: Overloading and Overriding
title: Overloading & Overriding
authors: [kihyun]
tags: [Overriding, Overloading, 오버로딩, 오버라이딩]
---

# 오버로딩과 오버라이딩

오버로딩과 오버라이딩에 대해서 알아보겠습니다.

## 오버로딩 (Overloading)

### 정의

한 클래스 내에 이미 **사용하려는 이름**과 **같은 이름**을 가진 **`메소드`**가 있어도 매개 변수의 개수와 타입이 다르면 같은 이름을 사용해서 메소드를 재정의 할 수 있다.

여기서 핵심은 2가지로 정리할 수 있습니다.

1. 메소드의 이름이 같다.
2. 매개변수의 개수나 타입이 달라야 한다.
3. 리턴값과는 상관 없습니다.


### 오버로딩 함수 코드

```java title='오버로딩 함수'
public class OverringClass {
    
    // 오버로딩 1번 함수
    public void OverloadMethod(){
        System.out.println("============================");
        System.out.println("매개변수 수 : 0개");
        System.out.println("매개변수 타입 : void");
        System.out.println("오버라이딩 1번 함수 입니다.");
        System.out.println("============================");
    }

    // 오버로딩 2번 함수
    public int OverloadMethod(int a, int b){
        System.out.println("============================");
        System.out.println("매개변수 수 : 2개");
        System.out.println("매개변수 타입 : int");
        System.out.println("오버라이딩 2번 함수 입니다. 덧셈 값을 반환합니다.");
        System.out.println("============================");

        return a+b;
    }

    // 오버로딩 3번 함수
    public int OverloadMethod(int a, int b, int c){
        System.out.println("============================");
        System.out.println("매개변수 수 : 3개");
        System.out.println("매개변수 타입 : int");
        System.out.println("오버라이딩 3번 함수 입니다. 곱셈을 반환합니다.");
        System.out.println("============================");

        return a*b*c;
    }


    // 오버로딩 4번 함수
    public boolean OverloadMethod(String str){
        System.out.println("============================");
        System.out.println("매개변수 수 : 1개");
        System.out.println("매개변수 타입 : String");
        System.out.println("오버라이딩 4번 함수 입니다. 이름이 park이면 true를 반환합니다.");
        System.out.println("============================");

        if(str.equals("park")){
            return true;
        }else{
            return false;
        }
    }
}

```

위 함수들을 보시면 `OverloadMethod`로 이름들이 같지만 타입과 매개변수의 수가 다른 것들을 보실 수 있습니다. 함수들에 대한 설명은 코드에 작성돼 있으니 참고해주세요~ 😎

코드를 실행하는 코드와 결과를 확인해보겠습니다.

``` java title='결과 확인 코드'
public class Main {
    public static void main(String[] args) {
        OverringClass oc = new OverringClass();
        
        // 오버로딩 1번 함수
        oc.OverloadMethod();

        // 오버로딩 2번 함수
        int a = oc.OverloadMethod(1,2);
        System.out.println("오버로딩 2번 함수 반환값 : "+a);

        // 오버로딩 3번 함수
        int b = oc.OverloadMethod(4,5,6);
        System.out.println("오버로딩 3번 함수 반환값 : "+b);

        // 오버로딩 4번 함수
        boolean c = oc.OverloadMethod("park");
        System.out.println("오버로딩 4번 함수 반환값 : "+c);
    }
}
```

```text title='결과'
============================
매개변수 수 : 0개
매개변수 타입 : void
오버라이딩 1번 함수 입니다.
============================
============================
매개변수 수 : 2개
매개변수 타입 : int
오버라이딩 2번 함수 입니다. 덧셈 값을 반환합니다.
============================
오버로딩 2번 함수 반환값 : 3
============================
매개변수 수 : 3개
매개변수 타입 : int
오버라이딩 3번 함수 입니다. 곱셈을 반환합니다.
============================
오버로딩 3번 함수 반환값 : 120
============================
매개변수 수 : 1개
매개변수 타입 : String
오버라이딩 4번 함수 입니다. 이름이 park이면 true를 반환합니다.
============================
오버로딩 4번 함수 반환값 : true
```





