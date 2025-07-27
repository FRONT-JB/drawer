export default class TodoInput {
    constructor(onAdd) {
        this.onAdd = onAdd;
        this.element = this.createElement();
        this.input = this.element.querySelector('input');
    }
    createElement() {
        const container = document.createElement('div');
        container.style.cssText = `
      margin-bottom: 16px;
    `;
        const inputContainer = document.createElement('div');
        inputContainer.style.cssText = `
      display: flex;
      gap: 8px;
    `;
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '새 할 일을 입력하세요...';
        input.style.cssText = `
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s ease;
    `;
        input.addEventListener('focus', () => {
            input.style.borderColor = '#007bff';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ced4da';
        });
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleAdd();
            }
        });
        const addButton = document.createElement('button');
        addButton.textContent = '추가';
        addButton.style.cssText = `
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.2s ease;
    `;
        addButton.addEventListener('mouseenter', () => {
            addButton.style.backgroundColor = '#0056b3';
        });
        addButton.addEventListener('mouseleave', () => {
            addButton.style.backgroundColor = '#007bff';
        });
        addButton.addEventListener('click', () => {
            this.handleAdd();
        });
        inputContainer.appendChild(input);
        inputContainer.appendChild(addButton);
        container.appendChild(inputContainer);
        return container;
    }
    handleAdd() {
        const text = this.input.value.trim();
        if (text) {
            this.onAdd(text);
            this.input.value = '';
        }
    }
    getElement() {
        return this.element;
    }
    focus() {
        this.input.focus();
    }
}
