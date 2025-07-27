import FloatingButton from './FloatingButton.js';
import FloatingPanel from './FloatingPanel.js';
export function initializeFloatingFeature() {
    const floatingButton = FloatingButton.getInstance();
    const floatingPanel = FloatingPanel.getInstance();
    floatingPanel.initialize();
    floatingButton.initialize(() => {
        floatingPanel.toggle();
    });
}
