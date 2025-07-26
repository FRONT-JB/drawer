// typescript를 사용하고 있지만 .js 확장자로 import해야 브라우저 기본 모듈에서 동작한다.
import { ChromeDrawerFactory } from "./DrawerFactory.js";

function main() {
  const factory = ChromeDrawerFactory;

  const drawer = factory.createDrawer();
  const drawerMenu = factory.createDrawerMenu(drawer);
  const drawerHistory = factory.createDrawerHistory(drawer);

  drawer.initialize();
  drawerMenu.initialize();
  drawerHistory.initialize();
}

main();
