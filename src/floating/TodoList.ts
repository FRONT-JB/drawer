import TodoItem, { TodoData } from './TodoItem.js';

export default class TodoList {
  private element: HTMLElement;
  private items: Map<string, TodoItem> = new Map();
  private onToggle: (id: string) => void;
  private onDelete: (id: string) => void;

  constructor(onToggle: (id: string) => void, onDelete: (id: string) => void) {
    this.onToggle = onToggle;
    this.onDelete = onDelete;
    this.element = this.createElement();
  }

  private createElement(): HTMLElement {
    const container = document.createElement('div');
    container.style.cssText = `
      max-height: 300px;
      overflow-y: auto;
    `;

    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = '할 일이 없습니다.';
    emptyMessage.style.cssText = `
      text-align: center;
      color: #6c757d;
      font-style: italic;
      padding: 20px;
      display: block;
    `;

    container.appendChild(emptyMessage);

    return container;
  }

  addTodo(data: TodoData): void {
    const todoItem = new TodoItem(data, this.onToggle, this.onDelete);
    this.items.set(data.id, todoItem);

    const emptyMessage = this.element.querySelector(
      '.empty-message'
    ) as HTMLElement;
    if (emptyMessage) {
      emptyMessage.style.display = 'none';
    }

    this.element.appendChild(todoItem.getElement());
  }

  updateTodo(data: TodoData): void {
    const item = this.items.get(data.id);
    if (item) {
      item.updateData(data);
    }
  }

  removeTodo(id: string): void {
    const item = this.items.get(id);
    if (item) {
      this.element.removeChild(item.getElement());
      this.items.delete(id);

      if (this.items.size === 0) {
        const emptyMessage = this.element.querySelector(
          '.empty-message'
        ) as HTMLElement;
        if (emptyMessage) {
          emptyMessage.style.display = 'block';
        }
      }
    }
  }

  clear(): void {
    this.items.forEach((item) => {
      this.element.removeChild(item.getElement());
    });
    this.items.clear();

    const emptyMessage = this.element.querySelector(
      '.empty-message'
    ) as HTMLElement;
    if (emptyMessage) {
      emptyMessage.style.display = 'block';
    }
  }

  getElement(): HTMLElement {
    return this.element;
  }

  getItemsCount(): number {
    return this.items.size;
  }

  getCompletedCount(): number {
    let completed = 0;
    this.items.forEach((item) => {
      const checkbox = item
        .getElement()
        .querySelector('input') as HTMLInputElement;
      if (checkbox.checked) {
        completed++;
      }
    });
    return completed;
  }
}
