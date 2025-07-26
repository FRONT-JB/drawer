import Drawer from "./AbstractDrawer";
import ChromeDrawer from "./ChromeDrawer";
import IEDrawer from "./IEDrawer";

export abstract class AbstractDrawerMenu {
  drawer: Drawer;

  protected constructor(drawer: Drawer) {
    this.drawer = drawer;
  }

  abstract initialize(): void;

  static getInstance(drawer: Drawer) {}
}

export class ChromeDrawerMenu extends AbstractDrawerMenu {
  private static instance: ChromeDrawerMenu;
  override initialize(): void {}

  static override getInstance(drawer: ChromeDrawer): ChromeDrawerMenu {
    if (!ChromeDrawerMenu.instance) {
      this.instance = new ChromeDrawerMenu(drawer);
    }

    return this.instance;
  }
}

export class IEDrawerMenu extends AbstractDrawerMenu {
  private static instance: IEDrawerMenu;
  override initialize(): void {}

  static override getInstance(drawer: IEDrawer): IEDrawerMenu {
    if (!IEDrawerMenu.instance) {
      this.instance = new IEDrawerMenu(drawer);
    }

    return this.instance;
  }
}
