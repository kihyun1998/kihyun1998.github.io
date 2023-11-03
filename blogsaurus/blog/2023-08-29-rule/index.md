---
slug: design pattern rule
title: "[SOLID] 객체 지향 프로그래밍(OOP) 원칙" 
authors: [kihyun]
tags: [design pattern ,rule]
---

## SRP ( 단일 책임의 원칙 : Single Responsibility Principle )

## OCP ( 계방-폐쇄의 원칙 : Open Close Principle )

1. 바뀌는 부분을 캡슐화한다.
    - 변하는(확장되는) 것과 변하지 않을 것을 구분

2. 상속보다는 구성을 활용한다.

3. 구현보다는 인터페이스에 맞춰서 프로그래밍한다.
    - 정의한 인터페이스에 의존

4. 상호작용하는 객체 사이에서는 가능하면 느슨한 결합을 사용해야 한다.

5. 클래스는 확장에는 열려있어야 하고 변경에는 닫혀 있어야 한다.

## LSP ( 리스코프 치환의 원칙 : The LisKov Substitution Principle )

## ISP ( 인터페이스 분리의 원칙 : Interface Segregation Principle )

## DIP ( 의존성 역전의 원칙 : Dependency Inversion Principle )

1. 추상화된 것에 의존하게 만들고 구상 클래스에 의존하지 않게 만든다.

2. 고수준 구성 요소가 저수준 구성 요소에 의존하면 안되고 항상 추상화에 의존하게 만들어야 한다.
`고수준 구성 요소` : 다른 `저수준 구성 요소`에 의해 정의되는 행동이 들어있는 구성 요소

3. 변수에 구상 클래스의 레퍼런스를 저장하지 않는다.

4. 구상 클래스에서 유도된 클래스를 만들지 않는다.

5. 베이스 클래스에 이미 구현되어 있는 메소드를 오버라이드하지 않는다.