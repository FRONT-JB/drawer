import Drawer from "./AbstractDrawer";
export default class IEDrawer extends Drawer {
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!IEDrawer.instance) {
            // 인스턴스가 없는 경우에는 인스턴스를 생성
            this.instance = new IEDrawer(document.getElementById("canvas"));
        }
        // 인스턴스가 있는 경우에는 인스턴스를 반환
        return this.instance;
    }
}
