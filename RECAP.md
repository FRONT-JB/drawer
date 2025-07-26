# RECAP

## 싱글턴

- 싱글턴은 하나의 인스턴스만을 생성하는 패턴이다
- 외부에서 접근이 불가능한 값이나 함수로 만드려면 `private`로 선언한다
  - 싱글턴이 static으로 선언되는 경우는 그 클래스의 인스턴스가 없이 사용할 수 있는 경우다
  - private로 선언되는 경우는 그 클래스 내부에서만 사용할 수 있는 경우다
  - private로 선언한 구조는 테스트에 어려움이 있다
- 외부에서 new로 생성하는것을 막으려면 **constructor를 private로 선언**한다
- 보통 강결합된 구조로 사용하게 된다
  - 강결합 되어있는 경우 테스트하기 어렵다
- TypeScript에서 JavaScript로 변환되는 과정에서 `private`가 제거되는데 `SYMBOL`을 사용하여 private처럼 사용할 수 있다

---

## SOLID 원칙

### Single Responsibility Principle (SRP)

- 하나의 모듈은 하나의 책임을 가져야 한다

### Open/Closed Principle (OCP)

- 소프트웨어의 모듈은 확장에 대해 열려있고, 변경에 대해 닫혀있어야 한다

### Interface Segregation Principle (ISP)

- 클라이언트가 사용하지 않는 인터페이스에는 의존하지 않아야 한다

### Liskov Substitution Principle (LSP)

- 하위 클래스는 상위 클래스의 역할을 대체할 수 있어야 한다

### Dependency Inversion Principle (DIP)

- 추상성이 높은 클래스와 의존 관계를 맺어야 한다

---

## 팩토리 패턴

- `abstract class`를 사용하여 추상화된 인터페이스를 정의한다
  - 구현체를 생성하는 메서드를 정의한다
  - `private`로 선언된 메서드는 `protected`로 변경해서 상속받은 값이나 함수를 재정의 할 수 있도록 구성한다
  - `interface`와 다른점은 구현체를 구성할 수 없기 때문에 상속받은 자식 클래스에서 구현체를 구성해야 한다
- 상속받은 구현체에서 `private`로 선언된 메서드는 `protected`로 변경해서 상속받은 값이나 함수를 재정의 할 수 있도록 구성한다
- override된 메서드는 `static`으로 선언한다
- `if`, `else if`문으로 작성해서 역할을 구분하는것은 단일 책임 원칙(SRP), 개방 폐쇄 원칙(OCP)을 위반하기 때문에 이런 경우 팩토리 패턴이 사용된다

---

## 추상화 팩토리

- 관련된 객체들의 패밀리를 생성하는 인터페이스를 제공하는 디자인 패턴이다
  - 제품 패밀리 간의 일관성을 보장한다
  - 새로운 제품 패밀리 추가 시 기존 코드 수정 없이 확장이 가능하다
  - 클라이언트 코드와 구체적인 제품 클래스 간의 결합도를 낮춘다
- 구체적인 클래스를 지정하지 않고도 관련된 객체들을 생성할 수 있다

---

## Builder 패턴

- 복잡한 객체를 단계별로 구성하는 디자인 패턴이다

### DrawerMenuButton에 Builder 패턴 적용 이유

- **복잡한 객체 생성**: DrawerMenuButton과 DrawerMenuInput이 여러 옵션을 가진다
- **선택적 매개변수 문제 해결**: 생성자에 모든 매개변수를 넣으면 가독성과 유연성이 떨어진다
- **메서드 체이닝**: 직관적인 형태로 객체를 구성할 수 있다
- **타입별 구분**: DrawerMenuButton과 DrawerMenuInput을 각각 다른 Builder로 관리한다
- **확장성**: 새로운 메뉴 요소 타입 추가 시 기존 코드 수정 없이 새 Builder 추가가 가능하다

### 적용 구조

```typescript
// 추상 Builder 클래스
abstract class DrawerMenuElementBuilder {
  abstract build(): DrawerMenuElement;
}
```

### 사용 예시

```typescript
// 단순 버튼
const btn = new DrawerMenuButton.Builder(this, "저장").build();

// 옵션이 있는 버튼
const activeBtn = new DrawerMenuButton.Builder(this, "펜")
  .setOnClick(handleClick)
  .setActive(true)
  .build();

// 입력 필드
const colorInput = new DrawerMenuInput.Builder(this, "컬러")
  .setOnChange(handleColorChange)
  .setValue("#ff0000")
  .build();
```
