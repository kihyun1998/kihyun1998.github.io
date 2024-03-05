---
sidebar_position: 1
---

# 전략 패턴 ( Strategy Pattern )

**2023-08-29**

## 정의
---

알고리즘군을 정의하고 캡슐화해서 각각의 알고리즘군을 수정해서 쓸 수 있게 해준다.
전략 패턴을 사용하면 클라이언트로부터 알고리즘을 분리해서 독립적으로 변경할 수 있다.

## 특징
---

- 함수 중 변하는 코드를 class로 구현하여 상속받는 것이 아닌 interface로 구현하여서 Composition하는게 좋다.

## 예시
---

```java title="/src/interfaces/FlyBehavior.java"
public interface FlyBehavor {
    public void fly();
}
```
위 처럼 나는 행동 인터페이스를 구현하고

```java title="/src/classes/Duck.java"
public abstract class Duck {
    FlyBehavor flyBehavor;

    public void setFlyBehavor(FlyBehavor flyBehavor) {
        this.flyBehavor = flyBehavor;
    }
}
```
추상 클래스에선 interface 선언 및 setter를 구현하고

```java title="/src/classes/FlyNoway ... FlyWithWings.java"
public class FlyNoWay implements FlyBehavor {
    @Override
    public void fly() {
        System.out.println("I can't fly ! TT");
    }
}

public class FlyRocketPowered implements FlyBehavor {
    @Override
    public void fly() {
        System.out.println("ROCKET FLY!!");
    }
}

public class FlyWithWings implements FlyBehavor {
    @Override
    public void fly() {
        System.out.println("I can fly!!");
    }
}
```

위 코드들처럼 interface를 구현하여서 오버라이딩을 합니다.

```java title="/src/classes/MallardDuck.java"
public class MallardDuck extends Duck{
    public MallardDuck(){
        flyBehavor = new FlyWithWings();
    }
}
```
생성자에서 새로 구현한 인터페이스로 생성합니다.