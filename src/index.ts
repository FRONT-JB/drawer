// typescript를 사용하고 있지만 .js 확장자로 import해야 브라우저 기본 모듈에서 동작한다.
import Drawer from "./Drawer.js";

function main() {
  Drawer.getInstance().initialize();
}

main();
