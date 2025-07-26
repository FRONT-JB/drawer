export default class AbstractDrawerFactory {
    // 추상적인 인터페이스를 정의한다.
    static createDrawer() {
        // 구현체에서 꼭 override해야 한다.
        throw new Error("Not implemented");
    }
}
