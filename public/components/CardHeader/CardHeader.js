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

    setListeners(storePage) {
        this.#parent.querySelector(".container").addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target.classList.item(0) === "card") {
                storePage.render(e.target.id);
            }
        });
    }
}