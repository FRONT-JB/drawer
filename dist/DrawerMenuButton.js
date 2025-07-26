class DrawerMenuElementBuilder {
    constructor() { }
    build() {
        return this.button;
    }
}
class DrawerMenuElement {
    constructor(menu, name) {
        this.menu = menu;
        this.name = name;
    }
}
export class DrawerMenuInput extends DrawerMenuElement {
    constructor(menu, name, onChange, value) {
        super(menu, name);
        this.onChange = onChange;
        this.value = value;
    }
    draw() {
        const input = document.createElement("input");
        input.title = this.name;
        input.type = "color";
        if (this.onChange) {
            input.addEventListener("change", this.onChange.bind(this));
        }
        this.menu.dom.append(input);
    }
}
DrawerMenuInput.Builder = class DrawerMenuInputBuilder extends DrawerMenuElementBuilder {
    constructor(menu, name) {
        super();
        this.button = new DrawerMenuInput(menu, name);
    }
    setOnChange(onChange) {
        this.button.onChange = onChange;
        return this;
    }
    setValue(value) {
        this.button.value = value;
        return this;
    }
    build() {
        return this.button;
    }
};
export class DrawerMenuButton extends DrawerMenuElement {
    constructor(menu, name, onClick, active) {
        super(menu, name);
        this.onClick = onClick;
        this.active = active;
    }
    draw() {
        const button = document.createElement("button");
        button.textContent = this.name;
        if (this.onClick) {
            button.addEventListener("click", this.onClick.bind(this));
        }
        this.menu.dom.append(button);
    }
}
DrawerMenuButton.Builder = class DrawerMenuButtonBuilder extends DrawerMenuElementBuilder {
    constructor(menu, name) {
        super();
        this.button = new DrawerMenuButton(menu, name);
    }
    setOnClick(onClick) {
        this.button.onClick = onClick;
        return this;
    }
    setActive(active) {
        this.button.active = active;
        return this;
    }
};
// Builder를 추가해 환경마다 다른 버튼을 만들 수 있다.
// export class ChromeDrawerMenuButtonBuilder implements DrawerButtonBuilder {
//   button: DrawerMenuButton;
//   constructor(name: string, type: string) {
//     this.button = new DrawerMenuButton(name, type);
//   }
//   setName(name: string): this {
//     this.button.name = name;
//     return this;
//   }
//   setType(type: string): this {
//     this.button.type = type;
//     return this;
//   }
//   setOnClick(onClick: () => void): this {
//     this.button.onClick = onClick;
//     return this;
//   }
//   setOnChange(onChange: () => void): this {
//     this.button.onChange = onChange;
//     return this;
//   }
//   setActive(active: boolean): this {
//     this.button.active = active;
//     return this;
//   }
//   setValue(value: string | number): this {
//     this.button.value = value;
//     return this;
//   }
//   build(): DrawerMenuButton {
//     return this.button;
//   }
// }
// Builder를 추가해 환경마다 다른 버튼을 만들 수 있다.
// export class IEDrawerMenuButtonBuilder implements DrawerButtonBuilder {
//   button: DrawerMenuButton;
//   constructor(name: string, type: string) {
//     this.button = new DrawerMenuButton(name, type);
//   }
//   setName(name: string): this {
//     this.button.name = name;
//     return this;
//   }
//   setType(type: string): this {
//     this.button.type = type;
//     return this;
//   }
//   setOnClick(onClick: () => void): this {
//     this.button.onClick = onClick;
//     return this;
//   }
//   setOnChange(onChange: () => void): this {
//     this.button.onChange = onChange;
//     return this;
//   }
//   setActive(active: boolean): this {
//     this.button.active = active;
//     return this;
//   }
//   setValue(value: string | number): this {
//     this.button.value = value;
//     return this;
//   }
//   build(): DrawerMenuButton {
//     return this.button;
//   }
// }
// Director를 추가해 만드는 방식
// class DrawerMenuButtonDirector {
//   static createBackButton(builder: DrawerButtonBuilder) {
//     const backButton = builder.setOnClick(() => {}).build();
//     return backButton;
//   }
//   static createNextButton(builder: DrawerButtonBuilder) {
//     const nextButton = builder.setOnClick(() => {}).build();
//     return nextButton;
//   }
// }
