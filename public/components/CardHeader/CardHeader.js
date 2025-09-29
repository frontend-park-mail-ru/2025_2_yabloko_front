export class CardHeader {
  #parent;

  constructor(parent) {
    this.#parent = parent;
  }

  render() {
    const template = Handlebars.templates["CardHeader.hbs"];
    this.#parent.innerHTML = template();
  }
}
