# RECAP

## 싱글턴

- 싱글턴은 하나의 인스턴스만을 생성하는 패턴이다.
- 외부에서 접근이 불가능한 값이나 함수로 만드려면 `private`로 선언한다.
  - 싱글턴이 static으로 선언되는 경우는 그 클래스의 인스턴스가 없이 사용할 수 있는 경우다. 이 때는 클래스에 직접 접근이 가능하고, 클래스의 인스턴스를 생성하지 않아도 사용할 수 있다.
  - private로 선언되는 경우는 그 클래스 내부에서만 사용할 수 있는 경우다. 이 때는 클래스의 인스턴스를 생성해야지만 사용할 수 있고, 클래스의 인스턴스를 생성하지 않으면 사용할 수 없다.
  - private로 선언한 구조는 테스트에 어려움이 있다.
- 외부에서 new로 생성하는것을 막으려면 **constructor를 private로 선언**한다.
- 보통 강결합된 구조로 사용하게 된다. 약결합으로 사용하려면 함수의 인자로 사용해서 호출한다.
  - 강결합 되어있는 경우 테스트하기 어렵다.
- typescript에서 javascript로 변환되는 과정에서 `private`가 제거되는데 `SYMBOL`을 사용하여 private처럼 사용할 수 있다.

---

## SOLID 원칙

### Single Responsibility Principle (SRP)

- 하나의 모듈은 하나의 책임을 가져야 한다.

### Open/Closed Principle (OCP)

- 소프트웨어의 모듈은 확장에 대해 열려있고, 변경에 대해 닫혀있어야 한다.

### Interface Segregation Principle (ISP)

- 클라이언트가 사용하지 않는 인터페이스에는 의존하지 않아야 한다.

### Liskov Substitution Principle (LSP)

- 하위 클래스는 상위 클래스의 역할을 대체할 수 있어야 한다.

### Dependency Inversion Principle (DIP)

- 추상성이 높은 클래스와 의존 관계를 맺어야 한다.
