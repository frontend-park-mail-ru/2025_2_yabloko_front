export class Header {

    constructor(parent, state) {
        this.parent = parent;
        this.state = state;
    }

    render() {
        // TODO проверка логина
        const template = Handlebars.templates["Header.hbs"];

        this.parent.innerHTML = template();
    }
}