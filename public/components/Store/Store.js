export class Store {
    #parent

    constructor(parent) {
        this.#parent = parent;
    }

    render(storeId) {
        const template = Handlebars.templates["Store.hbs"];
        this.#parent.innerHTML = template();
    }
}
