export class AbstractDrawerMenu {
    constructor(drawer) {
        this.drawer = drawer;
    }
    static getInstance(drawer) { }
}
export class ChromeDrawerMenu extends AbstractDrawerMenu {
    initialize() { }
    static getInstance(drawer) {
        if (!ChromeDrawerMenu.instance) {
            this.instance = new ChromeDrawerMenu(drawer);
        }
        return this.instance;
    }
}
export class IEDrawerMenu extends AbstractDrawerMenu {
    initialize() { }
    static getInstance(drawer) {
        if (!IEDrawerMenu.instance) {
            this.instance = new IEDrawerMenu(drawer);
        }
        return this.instance;
    }
}
