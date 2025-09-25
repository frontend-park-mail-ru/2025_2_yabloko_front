export class CardHeader {
    #parent

    constructor(parent) {
        this.#parent = parent;
    }

    render() {
        // TODO проверка логина
        // TODO active
        const template = Handlebars.templates["CardHeader.hbs"];
        this.#parent.innerHTML = template();
    }
}