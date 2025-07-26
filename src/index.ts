// typescript를 사용하고 있지만 .js 확장자로 import해야 브라우저 기본 모듈에서 동작한다.
import ChromeDrawer from "./ChromeDrawer.js";
import Drawer from "./IEDrawer.js";
import AbstractDrawerFactory from "./AbstractDrawerFactory.js";
import IEDrawer from "./IEDrawer.js";

class ChromeDrawerFactory extends AbstractDrawerFactory {
  static override createDrawer(): Drawer {
    return ChromeDrawer.getInstance();
  }
}

class IEDrawerFactory extends AbstractDrawerFactory {
  static override createDrawer() {
    return IEDrawer.getInstance();
  }
}

function main() {
  const drawer = ChromeDrawerFactory.createDrawer();
  drawer.initialize();
  drawer.initializeMenu();
}

main();
