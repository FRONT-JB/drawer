import ChromeDrawer from './ChromeDrawer.js';
import { ChromeDrawerHistory, IEDrawerHistory } from './DrawerHistory.js';
import { ChromeDrawerMenu, IEDrawerMenu } from './DrawerMenu.js';
import IEDrawer from './IEDrawer.js';
export class AbstractDrawerFactory {
    // 추상적인 인터페이스를 정의한다.
    static createDrawer() {
        // 구현체에서 꼭 override해야 한다.
        throw new Error('Not implemented');
    }
    static createDrawerMenu(drawer, dom) {
        throw new Error('Not implemented');
    }
    static createDrawerHistory(drawer) {
        throw new Error('Not implemented');
    }
}
export class ChromeDrawerFactory extends AbstractDrawerFactory {
    static createDrawer() {
        return ChromeDrawer.getInstance();
    }
    static createDrawerMenu(drawer, dom) {
        return ChromeDrawerMenu.getInstance(drawer, dom);
    }
    static createDrawerHistory(drawer) {
        return ChromeDrawerHistory.getInstance(drawer);
    }
}
export class IEDrawerFactory extends AbstractDrawerFactory {
    static createDrawer() {
        return IEDrawer.getInstance();
    }
    static createDrawerMenu(drawer, dom) {
        return IEDrawerMenu.getInstance(drawer, dom);
    }
    static createDrawerHistory(drawer) {
        return IEDrawerHistory.getInstance(drawer);
    }
}
