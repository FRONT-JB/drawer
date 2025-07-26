import Drawer from "./AbstractDrawer";
export default class ChromeDrawer extends Drawer {
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!ChromeDrawer.instance) {
            // 인스턴스가 없는 경우에는 인스턴스를 생성
            this.instance = new ChromeDrawer(document.getElementById("canvas"));
        }
        // 인스턴스가 있는 경우에는 인스턴스를 반환
        return this.instance;
    }
}
