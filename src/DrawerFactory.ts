import Drawer from "./AbstractDrawer";
import ChromeDrawer from "./ChromeDrawer";
import { ChromeDrawerHistory, IEDrawerHistory } from "./DrawerHistory";
import { ChromeDrawerMenu, IEDrawerMenu } from "./DrawerMenu";
import IEDrawer from "./IEDrawer";

export abstract class AbstractDrawerFactory {
  // 추상적인 인터페이스를 정의한다.
  static createDrawer() {
    // 구현체에서 꼭 override해야 한다.
    throw new Error("Not implemented");
  }

  static createDrawerMenu(drawer: Drawer) {
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

  static override createDrawerMenu(drawer: Drawer): ChromeDrawerMenu {
    return ChromeDrawerMenu.getInstance(drawer);
  }

  static override createDrawerHistory(drawer: Drawer): ChromeDrawerHistory {
    return ChromeDrawerHistory.getInstance(drawer);
  }
}

export class IEDrawerFactory extends AbstractDrawerFactory {
  static override createDrawer(): Drawer {
    return IEDrawer.getInstance();
  }

  static override createDrawerMenu(drawer: Drawer): IEDrawerMenu {
    return IEDrawerMenu.getInstance(drawer);
  }

  static override createDrawerHistory(drawer: Drawer): IEDrawerHistory {
    return IEDrawerHistory.getInstance(drawer);
  }
}
