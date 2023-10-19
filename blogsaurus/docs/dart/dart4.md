---
sidebar_position: 4
---

# 04. [Dart] 클래스

## 1. class
---

클래스 안에서는 var를 사용할 수 없다.

그래서 모든 변수의 자료형을 명시적으로 선언해줘야 한다.


```dart
class Player {
    String name = 'park';
    final int power = 100;

    void sayHi() {
        print("Hi ! I'm $name");
    }
}

void main() {
    var player = Player();
    print(player.name);

    player.name = 'kim';
    print(player.name);

    player.sayHi();
}
```

:::tip
다른 언어들과 다른점은 굳이 this를 안써도 된다. Dart에서는 함수에 class에 선언된 같은 이름의 변수가 없다면 this를 사용하지 않는 것을 추천한다.

그리고 class의 값은 바꿀 수 있기 때문에 바뀌길 원치 않는다면 final을 사용하자.
:::


## 02. Constructor
---

dart의 클래스에도 생성자는 있다.

```dart
class Player {
    late final String name;
    late int power;

    // dart에서 생성자를 사용하려면 아래와 같이 사용하면된다.
    // 다른 언어들과 비슷한데 차이점은 위를 보면 late를 써야한다.
    // 값이 할당이 되어있지 않기 때문이다.
    Player(String name, int power) {
        this.name = name;
        this.power = power;
        //생성자 함수도 사용 가능
        print("Hi I'm ${this.name}");
    }
}

class Player2 {
    final String name;
    int power;

    // 하지만 아래와 같이 late안쓰고 축약 가능
    Player2(this.name, this.power) {
        //생성자 함수도 사용 가능
        print("Hi I'm $name");
    }
}

void main() {
    var player1 = Player('park', 100);
    var player2 = Player('kim', 60);

    var player3 = Player2('lee', 60);
}
```

다른 언어와 같이 생성자를 선언해줘야 하는데 생성자를 축약하는 방법이 있다.

위 코드처럼 this를 사용해서 축약하는 방식이 있다.


### named constructor parameters

```dart
class Player {
    final String? name;
    int? power;
    String? team;
    int? age;

    Player({required this.name, this.power, this.team, this.age}) {
        print("Hi I'm $name");
    }
}

void main() {
    var player1 = Player(
        name: 'lee',
        power: 60,
        team: 'white',
        age: 20,
    );
}
```

생성자 함수에도 named parameters 형식으로 사용하면 더 좋다. 

그리고 위에 변수 형 옆에 ? 붙여서 null 들어오게 해줄 수도 있고 required붙여서 필수 값 만들어 줄 수도 있다.


### 생성자를 하나만 가질 수 있는 것이 아니다.

```dart
class Player {
    final String name;
    int power, age;
    String team;

    // 베이직한 생성자
    Player(
        {required this.name,
        required this.power,
        required this.team,
        required this.age}) {
        print("Hi I'm $name");
    }

    // 조금 특별한 생성자
    // : 를 사용해서 사용할 수 있다.
    Player.createBlackPlayer({required String name, required int age})
        : this.age = age,
            this.name = name,
            this.team = 'black',
            this.power = 0;

    Player.createWhitePlayer({required String name, required int age})
        : this.age = age,
            this.name = name,
            this.team = 'white',
            this.power = 0;

    void who() {
        print("This is $name and $age years old");
    }
}

void main() {
    var player1 = Player.createBlackPlayer(name: 'park', age: 20);
    var player2 = Player.createWhitePlayer(name: 'kim', age: 30);
    player1.who();
    player2.who();
}
```

:::tip
`:`를 사용하여 특별한 생성자를 만들 수 있다.
:::


## 3. cascade notation
---

```dart
class Player {
    String name;
    int power;
    String team;

    Player({required this.name, required this.power, required this.team});

    void who() {
        print("This is $name in $team");
    }
}

// .. 연산자라는거임
// 전에 있던 변수를 가리킴
// ..을 사용해서 함수 호출 뿐만 아니라 값도 변경할 수 있음

void main() {
    var park = Player(name: 'park', power: 100, team: 'black');
    var kim = park
        ..who()
        ..name = 'kim'
        ..power = 1000
        ..team = "white";

    park.who();
    kim.who();

    // print 결과
    // This is park in black
    // This is kim in white
    // This is kim in white
    // Exited.
}
```

위의 주석 설명처럼 `..`연산자를 통해서 전의 변수를 지정할 수 있다.

값 수정은 물론 해당 변수의 메소드도 사용할 수 있다.


## 4. enum
---

열거형을 사용하려면 `enum`을 붙이면 된다.

사용하는 이유는 오타를 줄여주기 위해서이다.

그리고 코드가 길어지고 오래된 코드가 되면 종류의 디테일이 변할 수 있는데 이를 방지할 수 있다.

```dart
enum Team { red, blue, white, black }

enum Power { Low, Middle, High }

class Player {
    String name;
    Enum power, team; //enum으로 바꿔줌

    Player({required this.name, required this.power, required this.team});

    void who() {
        print("This is $name in $team");
    }
}

void main() {
    var park = Player(name: 'park', power: Power.Low, team: Team.black);
    var kim = park
        ..name = 'kim'
        ..power = Power.High
        ..team = Team.white;
}

```

## 5. abstract class
---

추상 클래스로는 객체를 생성할 수 없다.

요약하자면 메소드 모음집이다.

class 이름 옆에 `extends`를 작성해서 가져올 수 있다.


```dart
abstract class Human {
  void walk();
}

enum Team { red, blue, white, black }

enum Power { Low, Middle, High }

// 추상 클래스를 상속받으려면 extends를 사용하면 된다.
class Player extends Human {
    String name;
    Enum power, team; //enum으로 바꿔줌

    Player({required this.name, required this.power, required this.team});

    void who() {
        print("This is $name in $team");
    }

    void walk() {
        print("I'm walking");
    }
}

class Coach extends Human {
    void walk() {
        print("coach is walking");
    }
}

void main() {
    var park = Player(name: 'park', power: Power.Low, team: Team.black);
    var kim = park
        ..name = 'kim'
        ..power = Power.High
        ..team = Team.white;
}
```

`추상 클래스`에서 메소드 정의는 자세한 코드를 적지 않고 메소드 타입과 메소드 이름만 지정해준다.

해당 `추상 클래스`를 상속받은 클래스들은 `추상 클래스`에 있는 메소드의 동작을 구현해야하는 의무가 있다.

이 역시 코드가 길어지면 유용하게 사용된다.


## 6. inheritance

dart에서 상속은 다른 언어들에서 제공하는 상속과 크게 다른 부분은 없다.

다른 부분은 생성자에서 있는데 생성자 코드를 잘 살펴보길 바란다.

```dart
class Human {
    final String name;

    Human({required this.name});

    void hi() {
        print("hi Im $name");
    }
}

enum Class {
    one,
    two,
}

class Student extends Human {
    final Class class_;

    // Human에서 name을 상속받아서 생성자(Student)로 받아서 생성자(Human)로 전달하는 코드입니다.
    // super는 부모 클래스를 의미하는 거다.
    Student({
        required this.class_,
        required String name,
    }) : super(name: name);

    // super를 활용한 override 예시
    @override
    void hi() {
        super.hi();
        print("And I study in $class_");
    }
}

void main() {
    var student1 = Student(
        class_: Class.one,
        name: "park",
    );
}
```

:::tip
상속을 받게 되면 super를 통해서 부모 class에 접근할 수 있다.
:::



## 7. mixin
---

mixin은 생성자가 없는 class이다.

mixin을 앞에 붙여서 mixin class를 사용할 수 있는데 예전 버전에서는 mixin이라는 자료형은 없고 생성자가 없는 class를 mixin으로 인식했던 것 같다.

클래스에 properties를 추가할 때 유용하게 사용되는데 재사용성을 높이는데 큰 역할을 한다.

사용 방법은 상속받는 것처럼 하는데 대신에 `with`을 사용하면 된다.

```dart
mixin HighScore {
    final String grade = 'A+';
}

mixin AI {
    void sayHi() {
        print("Hi!");
    }
}

enum Class {
    one,
    two,
}

class Student with AI, HighScore {
    final Class class_;

    Student({
        required this.class_,
    });
}

void main() {
    var student1 = Student(
        class_: Class.one,
    );

    print(student1.grade);
    student1.sayHi();
}
```

:::tip 상속과 mixin의 차이점
`상속` : class의 정보들을 받아오는 것, super 사용 가능

`mixin` : class의 정보들을 뺐어오는 것, super 사용 불가
:::