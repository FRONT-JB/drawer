interface TodoData {
  id: string;
  text: string;
  completed: boolean;
}

export default class TodoItem {
  private element: HTMLElement;
  private data: TodoData;
  private onToggle: (id: string) => void;
  private onDelete: (id: string) => void;

  constructor(
    data: TodoData,
    onToggle: (id: string) => void,
    onDelete: (id: string) => void
  ) {
    this.data = data;
    this.onToggle = onToggle;
    this.onDelete = onDelete;
    this.element = this.createElement();
  }

  private createElement(): HTMLElement {
    const item = document.createElement('div');
    item.style.cssText = `
      display: flex;
      align-items: center;
      padding: 8px 12px;
      margin-bottom: 4px;
      background-color: ${this.data.completed ? '#f8f9fa' : 'white'};
      border: 1px solid #e9ecef;
      border-radius: 6px;
      transition: all 0.2s ease;
    `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = this.data.completed;
    checkbox.style.cssText = `
      margin-right: 8px;
      cursor: pointer;
    `;
    checkbox.addEventListener('change', () => {
      this.onToggle(this.data.id);
    });

    const textElement = document.createElement('span');
    textElement.textContent = this.data.text;
    textElement.style.cssText = `
      flex: 1;
      font-size: 14px;
      color: ${this.data.completed ? '#6c757d' : '#333'};
      text-decoration: ${this.data.completed ? 'line-through' : 'none'};
    `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.style.cssText = `
      background: none;
      border: none;
      color: #dc3545;
      font-size: 18px;
      cursor: pointer;
      padding: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    deleteButton.addEventListener('click', () => {
      this.onDelete(this.data.id);
    });

    deleteButton.addEventListener('mouseenter', () => {
      deleteButton.style.backgroundColor = '#f8d7da';
    });

    deleteButton.addEventListener('mouseleave', () => {
      deleteButton.style.backgroundColor = 'transparent';
    });

    item.appendChild(checkbox);
    item.appendChild(textElement);
    item.appendChild(deleteButton);

    return item;
  }

  getElement(): HTMLElement {
    return this.element;
  }

  updateData(data: TodoData): void {
    this.data = data;
    this.updateElement();
  }

  private updateElement(): void {
    const checkbox = this.element.querySelector('input') as HTMLInputElement;
    const textElement = this.element.querySelector('span') as HTMLSpanElement;

    checkbox.checked = this.data.completed;
    textElement.textContent = this.data.text;
    textElement.style.color = this.data.completed ? '#6c757d' : '#333';
    textElement.style.textDecoration = this.data.completed
      ? 'line-through'
      : 'none';
    this.element.style.backgroundColor = this.data.completed
      ? '#f8f9fa'
      : 'white';
  }
}

export { TodoData };
