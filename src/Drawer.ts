class Drawer {
  // 메서드가 static이면 선언한 값도 static이어야 함.
  // 외부에서 접근이 불가능하도록 private로 선언
  private static instance: Drawer;

  // 외부에서 new로 생성하는것을 막으려면 private로 선언
  constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("Canvas not found");
    }
  }

  initialize() {}
  initializeMenu() {}
  static getInstance() {
    if (!Drawer.instance) {
      // 인스턴스가 없는 경우에는 인스턴스를 생성
      this.instance = new Drawer(document.getElementById("canvas"));
    }

    // 인스턴스가 있는 경우에는 인스턴스를 반환
    return this.instance;
  }
}

// 하나의 canvas를 사용해야 하기 때문에 싱글턴으로 구현
// 이미 React에서 이런 방식을 사용하고 있었기 때문에 싱글톤을 사용하고 있었다고 봐야함
// 자바스크립트 모듈은 기본적으로 싱글턴이다.
export default Drawer;
