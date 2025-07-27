import TodoItem from './TodoItem.js';
export default class TodoList {
    constructor(onToggle, onDelete) {
        this.items = new Map();
        this.onToggle = onToggle;
        this.onDelete = onDelete;
        this.element = this.createElement();
    }
    createElement() {
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
    addTodo(data) {
        const todoItem = new TodoItem(data, this.onToggle, this.onDelete);
        this.items.set(data.id, todoItem);
        const emptyMessage = this.element.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.style.display = 'none';
        }
        this.element.appendChild(todoItem.getElement());
    }
    updateTodo(data) {
        const item = this.items.get(data.id);
        if (item) {
            item.updateData(data);
        }
    }
    removeTodo(id) {
        const item = this.items.get(id);
        if (item) {
            this.element.removeChild(item.getElement());
            this.items.delete(id);
            if (this.items.size === 0) {
                const emptyMessage = this.element.querySelector('.empty-message');
                if (emptyMessage) {
                    emptyMessage.style.display = 'block';
                }
            }
        }
    }
    clear() {
        this.items.forEach((item) => {
            this.element.removeChild(item.getElement());
        });
        this.items.clear();
        const emptyMessage = this.element.querySelector('.empty-message');
        if (emptyMessage) {
            emptyMessage.style.display = 'block';
        }
    }
    getElement() {
        return this.element;
    }
    getItemsCount() {
        return this.items.size;
    }
    getCompletedCount() {
        let completed = 0;
        this.items.forEach((item) => {
            const checkbox = item.getElement().querySelector('input');
            if (checkbox.checked) {
                completed++;
            }
        });
        return completed;
    }
}
