---
sidebar_position: 1
---

# 팩토리 메소드 패턴

## 정의

- **상위 클래스**에서 `객체`를 생성하는 인터페이스를 정의, **하위 클래스**에서는 `인스턴스`를 생성, 즉 객체 생성 처리를 서브클래스로 분리하여서 객체 생성에 대한 인터페이스를 정의할 때 사용한다.

- **상위 클래스**에서 `인스턴스`에 대한 방법만 정의, **하위 클래스** 데이터의 생성을 책임지는 함수들 오버로딩해서 *인터페이스*와 *실제 객체를 생성하는 클래스*를 분리

:::tip 요약
객체 생성 인터페이스가 정의돼있고 실제 객체 생성에 대한 로직은 서브 클래스로 분리

장점은 시스템 유연성과 확장성을 높일 수 있다.
:::


## 예시 코드
---

```java
// Product 인터페이스
public interface Vehicle {
    void design();
}

// Car 생성 클래스
class Car implements Vehicle {
    @Override
    public void design() {
        System.out.println("A car is designed.");
    }
}

// Bike 생성 클래스
class Bike implements Vehicle {
    @Override
    public void design() {
        System.out.println("A bike is designed.");
    }
}

// Creator 클래스
public abstract class VehicleFactory {
    public abstract Vehicle createVehicle();
    
    public Vehicle orderVehicle() {
        Vehicle vehicle = createVehicle();
        vehicle.design();
        return vehicle;
    }
}

// ConcreteCreator 클래스
class CarFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Car();
    }
}

class BikeFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Bike();
    }
}

// 사용 예
public class FactoryMethodDemo {
    public static void main(String[] args) {
        VehicleFactory carFactory = new CarFactory();
        Vehicle car = carFactory.orderVehicle();
        
        VehicleFactory bikeFactory = new BikeFactory();
        Vehicle bike = bikeFactory.orderVehicle();
    }
}
```


