export default class Drawer {
    // 외부에서 new로 생성하는것을 막으려면 private로 선언
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('Canvas not found');
        }
    }
    static getInstance() { }
}
