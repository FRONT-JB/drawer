# Floating Panel Todo List

이 모듈은 화면 우측하단에 플로팅 버튼과 투두리스트 패널을 제공합니다.

## 구조 및 설계 원칙

### 파일 구조
```
src/floating/
├── FloatingButton.ts    # 우측하단 플로팅 버튼
├── FloatingPanel.ts     # 투두리스트 패널 컨테이너
├── TodoInput.ts         # 할 일 입력 컴포넌트
├── TodoList.ts          # 할 일 목록 관리 컴포넌트
├── TodoItem.ts          # 개별 할 일 항목 컴포넌트
├── index.ts            # 모듈 초기화 진입점
└── README.md           # 문서
```

## 설계 결정사항

### 1. Singleton 패턴 적용
```typescript
static getInstance(): FloatingButton {
  if (!FloatingButton.instance) {
    FloatingButton.instance = new FloatingButton();
  }
  return FloatingButton.instance;
}
```

**이유:**
- 기존 프로젝트의 코드 패턴을 따름 (`ChromeDrawer.getInstance()` 등)
- 전역에서 하나의 인스턴스만 필요한 UI 컴포넌트에 적합
- 메모리 효율성과 상태 일관성 보장

### 2. 컴포넌트 분리 설계

#### FloatingButton
- **책임**: 플로팅 버튼의 렌더링과 클릭 이벤트 처리
- **이유**: 단일 책임 원칙, 재사용 가능성

#### FloatingPanel
- **책임**: 패널 컨테이너, 투두 데이터 관리, 하위 컴포넌트 조합
- **이유**: 컴포지션 패턴으로 복잡한 UI를 관리

#### TodoInput, TodoList, TodoItem
- **책임**: 각각 입력, 목록, 개별 항목의 UI와 로직
- **이유**: 관심사 분리, 테스트 용이성, 유지보수성

### 3. 콜백 기반 이벤트 처리
```typescript
constructor(
  onToggle: (id: string) => void,
  onDelete: (id: string) => void
) {
  // ...
}
```

**이유:**
- 의존성 역전: 하위 컴포넌트가 상위 로직에 직접 의존하지 않음
- 테스트 용이성: 콜백 함수를 모킹하여 단위 테스트 가능
- 재사용성: 다른 컨텍스트에서도 같은 컴포넌트 사용 가능

### 4. TypeScript 인터페이스 활용
```typescript
interface TodoData {
  id: string;
  text: string;
  completed: boolean;
}
```

**이유:**
- 타입 안정성 보장
- IDE 자동완성 지원
- 리팩토링 시 컴파일 타임 오류 검출

### 5. CSS-in-JS 스타일링
```typescript
button.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  // ...
`;
```

**이유:**
- 외부 CSS 파일 의존성 제거
- 컴포넌트와 스타일의 응집도 향상
- 동적 스타일링 용이성
- 기존 프로젝트가 별도의 CSS 프레임워크를 사용하지 않음

### 6. ES6 모듈 시스템 + .js 확장자
```typescript
import TodoInput from './TodoInput.js';
```

**이유:**
- 기존 프로젝트 코드 컨벤션 준수
- 브라우저 네이티브 모듈 시스템 호환성
- TypeScript 컴파일 후 올바른 모듈 해석

## 사용법

```typescript
import { initializeFloatingFeature } from './floating/index.js';

// 메인 애플리케이션 초기화 후 호출
initializeFloatingFeature();
```

## 주요 기능

- ⚙️ 우측하단 플로팅 버튼 (호버 효과 포함)
- 📝 할 일 추가 (Enter 키 지원)
- ✅ 할 일 완료/미완료 토글
- 🗑️ 할 일 삭제
- 📊 완료/전체 통계 표시
- 🎨 부드러운 애니메이션 효과

## 클래스 기반 모듈 설계의 장단점

### 장점

#### 1. 캡슐화 (Encapsulation)
- **private/protected 접근제어자**: 내부 구현을 숨기고 공개 API만 노출
- **상태 보호**: 외부에서 직접 접근할 수 없는 내부 상태 관리
```typescript
private panel: HTMLElement;  // 외부에서 직접 접근 불가
public toggle(): void;       // 공개 인터페이스만 제공
```

#### 2. 상태 관리의 일관성
- **인스턴스 기반 상태**: 각 컴포넌트가 자신만의 상태를 유지
- **메서드를 통한 상태 변경**: 일관된 방식으로 상태 업데이트
- **상태 검증**: 메서드 내부에서 상태 유효성 검사 가능

#### 3. 타입 안정성
- **TypeScript 지원**: 컴파일 타임 타입 검사
- **IDE 지원**: 자동완성, 리팩토링, 오류 검출
- **인터페이스 정의**: 명확한 데이터 구조와 메서드 시그니처

#### 4. 재사용성과 확장성
- **상속**: 기본 클래스를 확장하여 새로운 기능 추가 가능
- **컴포지션**: 여러 클래스를 조합하여 복잡한 기능 구현
- **모듈화**: 독립적인 컴포넌트로 다른 프로젝트에서 재사용

#### 5. 테스트 용이성
- **의존성 주입**: 콜백 함수를 통한 외부 의존성 제어
- **모킹**: 개별 컴포넌트를 독립적으로 테스트 가능
- **단위 테스트**: 각 메서드를 개별적으로 테스트

### 단점

#### 1. 복잡성 증가
- **보일러플레이트 코드**: 클래스 정의, 생성자, 접근자 메서드
- **과도한 추상화**: 간단한 기능도 복잡한 클래스 구조로 구현
- **학습 곡선**: OOP 개념 이해 필요

#### 2. 메모리 오버헤드
- **인스턴스 생성**: 각 객체마다 메모리 할당
- **메서드 중복**: 프로토타입이 아닌 인스턴스 메서드 사용 시
- **가비지 컬렉션**: 객체 생명주기 관리 필요

#### 3. 함수형 프로그래밍 대비 단점
- **불변성**: 클래스 기반은 상태 변경이 기본
- **부작용**: 메서드 호출 시 객체 상태 변경 가능성
- **함수 조합**: 함수형 스타일의 파이프라인 구성이 어려움

#### 4. JavaScript 생태계와의 괴리
- **React/Vue 트렌드**: 함수형 컴포넌트와 Hooks 패턴 선호
- **웹 표준**: Web Components API는 클래스 기반이지만 React 생태계와 차이
- **번들 크기**: 클래스 구조로 인한 코드 크기 증가 가능성

#### 5. 런타임 오버헤드
- **메서드 바인딩**: 이벤트 리스너 등록 시 컨텍스트 바인딩 필요
- **프로토타입 체인**: 메서드 호출 시 프로토타입 탐색
- **this 바인딩**: JavaScript의 동적 this 바인딩으로 인한 혼란

### 대안적 접근법 비교

#### 함수형 접근법
```typescript
// 함수형 스타일
const createTodoItem = (data: TodoData, callbacks: Callbacks) => {
  const element = createElement(data);
  attachEventListeners(element, callbacks);
  return element;
};
```

#### Web Components 접근법
```typescript
// Web Components 스타일
class TodoItemElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
}
customElements.define('todo-item', TodoItemElement);
```

## 결론

클래스 기반 설계는 **복잡한 상태 관리**와 **재사용성**이 중요한 경우에 적합하지만, 
**간단한 UI 컴포넌트**나 **함수형 프로그래밍**을 선호하는 환경에서는 오버엔지니어링일 수 있습니다.

본 프로젝트에서는 기존 코드베이스의 일관성과 TypeScript의 타입 안정성을 고려하여 클래스 기반 설계를 선택했습니다.

## 확장 가능성

- 로컬 스토리지 연동으로 데이터 영속성
- 카테고리 및 우선순위 기능
- 키보드 단축키 지원
- 드래그 앤 드롭 순서 변경