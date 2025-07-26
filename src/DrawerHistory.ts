import Drawer from "./AbstractDrawer.js";
import ChromeDrawer from "./ChromeDrawer.js";
import IEDrawer from "./IEDrawer.js";

export abstract class AbstractDrawerHistory {
  drawer: Drawer;
  protected constructor(drawer: Drawer) {
    this.drawer = drawer;
  }

  abstract initialize(): void;

  static getInstance(drawer: Drawer) {}
}

export class ChromeDrawerHistory extends AbstractDrawerHistory {
  private static instance: ChromeDrawerHistory;
  override initialize(): void {}

  static override getInstance(drawer: ChromeDrawer): ChromeDrawerHistory {
    if (!ChromeDrawerHistory.instance) {
      this.instance = new ChromeDrawerHistory(drawer);
    }

    return this.instance;
  }
}

export class IEDrawerHistory extends AbstractDrawerHistory {
  private static instance: IEDrawerHistory;
  override initialize(): void {}

  static override getInstance(drawer: IEDrawer): IEDrawerHistory {
    if (!IEDrawerHistory.instance) {
      this.instance = new IEDrawerHistory(drawer);
    }

    return this.instance;
  }
}
