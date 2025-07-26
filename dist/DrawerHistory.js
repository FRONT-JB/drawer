export class AbstractDrawerHistory {
    constructor(drawer) {
        this.drawer = drawer;
    }
    static getInstance(drawer) { }
}
export class ChromeDrawerHistory extends AbstractDrawerHistory {
    initialize() { }
    static getInstance(drawer) {
        if (!ChromeDrawerHistory.instance) {
            this.instance = new ChromeDrawerHistory(drawer);
        }
        return this.instance;
    }
}
export class IEDrawerHistory extends AbstractDrawerHistory {
    initialize() { }
    static getInstance(drawer) {
        if (!IEDrawerHistory.instance) {
            this.instance = new IEDrawerHistory(drawer);
        }
        return this.instance;
    }
}
