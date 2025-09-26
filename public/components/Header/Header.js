export class Header {

    constructor(parent, state) {
        this.parent = parent;
        this.state = {
          userAuthed: false,
        };

    }

    render() {
        // TODO проверка логина
        const template = Handlebars.templates["Header.hbs"];

        this.parent.innerHTML = template(this.state);
    }
}