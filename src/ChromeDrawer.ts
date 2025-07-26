import Drawer from "./AbstractDrawer";

export default class ChromeDrawer extends Drawer {
  // 메서드가 static이면 선언한 값도 static이어야 함.
  // 외부에서 접근이 불가능하도록 private로 선언
  private static instance: ChromeDrawer;

  initialize() {}
  initializeMenu() {}

  static override getInstance() {
    if (!ChromeDrawer.instance) {
      // 인스턴스가 없는 경우에는 인스턴스를 생성
      this.instance = new ChromeDrawer(document.getElementById("canvas"));
    }

    // 인스턴스가 있는 경우에는 인스턴스를 반환
    return this.instance;
  }
}
