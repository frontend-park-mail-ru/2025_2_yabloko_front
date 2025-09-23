export class Footer {
    #parent
    #state

    constructor(parent,state) {
        this.#state = state;
        this.#parent = parent;
    }

    render() {
        // TODO
        this.#parent.innerHTML = "Это футер <br>" +
            "Им кто-то пользуется?";
    }
}