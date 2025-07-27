import { DrawerMenuButton, DrawerMenuInput } from './DrawerMenuButton.js';
export class AbstractDrawerMenu {
    constructor(drawer, dom) {
        this.drawer = drawer;
        this.dom = dom;
    }
    static getInstance(drawer, dom) { }
}
export class ChromeDrawerMenu extends AbstractDrawerMenu {
    initialize(types) {
        types.forEach(this.drawButtonByType.bind(this));
    }
    drawButtonByType(type) {
        switch (type) {
            case 'back': {
                const btn = new DrawerMenuButton.Builder(this, '뒤로').build();
                btn.draw();
                return btn;
            }
            case 'forward': {
                const btn = new DrawerMenuButton.Builder(this, '앞으로').build();
                btn.draw();
                return btn;
            }
            case 'color': {
                const btn = new DrawerMenuInput.Builder(this, '컬러').build();
                btn.draw();
                return btn;
            }
            case 'pipette': {
                const btn = new DrawerMenuButton.Builder(this, '스포이드').build();
                btn.draw();
                return btn;
            }
            case 'eraser': {
                const btn = new DrawerMenuButton.Builder(this, '지우개').build();
                btn.draw();
                return btn;
            }
            case 'pen': {
                const btn = new DrawerMenuButton.Builder(this, '펜').build();
                btn.draw();
                return btn;
            }
            case 'circle': {
                const btn = new DrawerMenuButton.Builder(this, '원').build();
                btn.draw();
                return btn;
            }
            case 'rectangle': {
                const btn = new DrawerMenuButton.Builder(this, '사각형').build();
                btn.draw();
                return btn;
            }
            case 'save': {
                const btn = new DrawerMenuButton.Builder(this, '저장').build();
                btn.draw();
                return btn;
            }
            default:
                throw new Error(`알 수 없는 타입 ${type}`);
        }
    }
    static getInstance(drawer, dom) {
        if (!this.instance) {
            this.instance = new ChromeDrawerMenu(drawer, dom);
        }
        return this.instance;
    }
}
export class IEDrawerMenu extends AbstractDrawerMenu {
    initialize(types) { }
    static getInstance(drawer, dom) {
        if (!this.instance) {
            this.instance = new IEDrawerMenu(drawer, dom);
        }
        return this.instance;
    }
}
