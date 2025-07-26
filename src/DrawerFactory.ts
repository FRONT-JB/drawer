import Drawer from "./AbstractDrawer.js";
import ChromeDrawer from "./ChromeDrawer.js";
import { ChromeDrawerHistory, IEDrawerHistory } from "./DrawerHistory.js";
import { ChromeDrawerMenu, IEDrawerMenu } from "./DrawerMenu.js";
import IEDrawer from "./IEDrawer.js";

export abstract class AbstractDrawerFactory {
  // 추상적인 인터페이스를 정의한다.
  static createDrawer() {
    // 구현체에서 꼭 override해야 한다.
    throw new Error("Not implemented");
  }

  static createDrawerMenu(drawer: Drawer, dom: HTMLElement) {
    throw new Error("Not implemented");
  }

  static createDrawerHistory(drawer: Drawer) {
    throw new Error("Not implemented");
  }
}

export class ChromeDrawerFactory extends AbstractDrawerFactory {
  static override createDrawer(): Drawer {
    return ChromeDrawer.getInstance();
  }

  static override createDrawerMenu(
    drawer: Drawer,
    dom: HTMLElement
  ): ChromeDrawerMenu {
    return ChromeDrawerMenu.getInstance(drawer, dom);
  }

  static override createDrawerHistory(drawer: Drawer): ChromeDrawerHistory {
    return ChromeDrawerHistory.getInstance(drawer);
  }
}

export class IEDrawerFactory extends AbstractDrawerFactory {
  static override createDrawer(): Drawer {
    return IEDrawer.getInstance();
  }

  static override createDrawerMenu(
    drawer: Drawer,
    dom: HTMLElement
  ): IEDrawerMenu {
    return IEDrawerMenu.getInstance(drawer, dom);
  }

  static override createDrawerHistory(drawer: Drawer): IEDrawerHistory {
    return IEDrawerHistory.getInstance(drawer);
  }
}
