export default class FloatingButton {
  private button: HTMLElement;
  private static instance: FloatingButton;

  private constructor() {
    this.button = this.createButton();
  }

  static getInstance(): FloatingButton {
    if (!FloatingButton.instance) {
      FloatingButton.instance = new FloatingButton();
    }
    return FloatingButton.instance;
  }

  private createButton(): HTMLElement {
    const button = document.createElement('button');
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background-color: #007bff;
      color: white;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      transition: all 0.3s ease;
    `;
    button.innerHTML = '⚙️';

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });

    return button;
  }

  initialize(onClickCallback: () => void): void {
    this.button.addEventListener('click', onClickCallback);
    document.body.appendChild(this.button);
  }

  show(): void {
    this.button.style.display = 'block';
  }

  hide(): void {
    this.button.style.display = 'none';
  }
}
