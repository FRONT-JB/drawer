import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
export default class FloatingPanel {
    constructor() {
        this.isVisible = false;
        this.todos = [];
        this.nextId = 1;
        this.todoInput = new TodoInput((text) => this.addTodo(text));
        this.todoList = new TodoList((id) => this.toggleTodo(id), (id) => this.deleteTodo(id));
        this.panel = this.createPanel();
    }
    static getInstance() {
        if (!FloatingPanel.instance) {
            FloatingPanel.instance = new FloatingPanel();
        }
        return FloatingPanel.instance;
    }
    createPanel() {
        const panel = document.createElement('div');
        panel.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 300px;
      height: 450px;
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      z-index: 999;
      display: none;
      padding: 20px;
      overflow: hidden;
      transition: all 0.3s ease;
      border: 1px solid #e0e0e0;
    `;
        const header = document.createElement('div');
        header.style.cssText = `
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
      color: #333;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
        const title = document.createElement('span');
        title.textContent = '할 일 목록';
        const stats = document.createElement('span');
        stats.className = 'todo-stats';
        stats.style.cssText = `
      font-size: 12px;
      color: #6c757d;
      font-weight: normal;
    `;
        this.updateStats(stats);
        header.appendChild(title);
        header.appendChild(stats);
        const content = document.createElement('div');
        content.style.cssText = `
      height: calc(100% - 60px);
      display: flex;
      flex-direction: column;
    `;
        const inputContainer = document.createElement('div');
        inputContainer.appendChild(this.todoInput.getElement());
        const listContainer = document.createElement('div');
        listContainer.style.cssText = `
      flex: 1;
      overflow-y: auto;
    `;
        listContainer.appendChild(this.todoList.getElement());
        content.appendChild(inputContainer);
        content.appendChild(listContainer);
        panel.appendChild(header);
        panel.appendChild(content);
        return panel;
    }
    addTodo(text) {
        const todo = {
            id: String(this.nextId++),
            text: text,
            completed: false
        };
        this.todos.push(todo);
        this.todoList.addTodo(todo);
        this.updateStatsInPanel();
    }
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.todoList.updateTodo(todo);
            this.updateStatsInPanel();
        }
    }
    deleteTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            this.todoList.removeTodo(id);
            this.updateStatsInPanel();
        }
    }
    updateStats(statsElement) {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        statsElement.textContent = `${completed}/${total}`;
    }
    updateStatsInPanel() {
        const statsElement = this.panel.querySelector('.todo-stats');
        if (statsElement) {
            this.updateStats(statsElement);
        }
    }
    initialize() {
        document.body.appendChild(this.panel);
    }
    toggle() {
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    show() {
        this.panel.style.display = 'block';
        this.panel.style.transform = 'translateY(20px)';
        this.panel.style.opacity = '0';
        setTimeout(() => {
            this.panel.style.transform = 'translateY(0)';
            this.panel.style.opacity = '1';
        }, 10);
        this.isVisible = true;
    }
    hide() {
        this.panel.style.transform = 'translateY(20px)';
        this.panel.style.opacity = '0';
        setTimeout(() => {
            this.panel.style.display = 'none';
        }, 300);
        this.isVisible = false;
    }
    isOpen() {
        return this.isVisible;
    }
}
