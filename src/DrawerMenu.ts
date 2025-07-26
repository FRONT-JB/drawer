import Drawer from "./AbstractDrawer.js";
import ChromeDrawer from "./ChromeDrawer.js";
import { DrawerMenuButton, DrawerMenuInput } from "./DrawerMenuButton.js";
import IEDrawer from "./IEDrawer.js";

type ButtonType =
  | "pen"
  | "circle"
  | "rectangle"
  | "eraser"
  | "back"
  | "forward"
  | "save"
  | "pipette"
  | "color";

export abstract class AbstractDrawerMenu {
  drawer: Drawer;
  dom: HTMLElement;

  protected constructor(drawer: Drawer, dom: HTMLElement) {
    this.drawer = drawer;
    this.dom = dom;
  }

  abstract initialize(types: ButtonType[]): void;

  static getInstance(drawer: Drawer, dom: HTMLElement) {}
}

export class ChromeDrawerMenu extends AbstractDrawerMenu {
  private static instance: ChromeDrawerMenu;

  override initialize(types: ButtonType[]): void {
    types.forEach(this.drawButtonByType.bind(this));
  }

  drawButtonByType(type: ButtonType) {
    switch (type) {
      case "back": {
        const btn = new DrawerMenuButton.Builder(this, "뒤로").build();
        btn.draw();
        return btn;
      }
      case "forward": {
        const btn = new DrawerMenuButton.Builder(this, "앞으로").build();
        btn.draw();
        return btn;
      }
      case "color": {
        const btn = new DrawerMenuInput.Builder(this, "컬러").build();
        btn.draw();
        return btn;
      }
      case "pipette": {
        const btn = new DrawerMenuButton.Builder(this, "스포이드").build();
        btn.draw();
        return btn;
      }
      case "eraser": {
        const btn = new DrawerMenuButton.Builder(this, "지우개").build();
        btn.draw();
        return btn;
      }
      case "pen": {
        const btn = new DrawerMenuButton.Builder(this, "펜").build();
        btn.draw();
        return btn;
      }
      case "circle": {
        const btn = new DrawerMenuButton.Builder(this, "원").build();
        btn.draw();
        return btn;
      }
      case "rectangle": {
        const btn = new DrawerMenuButton.Builder(this, "사각형").build();
        btn.draw();
        return btn;
      }
      case "save": {
        const btn = new DrawerMenuButton.Builder(this, "저장").build();
        btn.draw();
        return btn;
      }
      default:
        throw new Error(`알 수 없는 타입 ${type}`);
    }
  }

  static override getInstance(
    drawer: ChromeDrawer,
    dom: HTMLElement
  ): ChromeDrawerMenu {
    if (!this.instance) {
      this.instance = new ChromeDrawerMenu(drawer, dom);
    }

    return this.instance;
  }
}

export class IEDrawerMenu extends AbstractDrawerMenu {
  private static instance: IEDrawerMenu;

  override initialize(types: ButtonType[]): void {}

  static override getInstance(
    drawer: IEDrawer,
    dom: HTMLElement
  ): IEDrawerMenu {
    if (!this.instance) {
      this.instance = new IEDrawerMenu(drawer, dom);
    }

    return this.instance;
  }
}
