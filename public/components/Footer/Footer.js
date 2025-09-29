export class Footer {
  #parent;
  #state;

  constructor(parent, state) {
    this.#state = state;
    this.#parent = parent;
  }

  render() {
    const footer = document.createElement("div");
    footer.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
        `;

    const leftBlock = document.createElement("div");
    leftBlock.textContent = "2025-2025 ООО AppleClub";
    leftBlock.style.cssText = `
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #333;
        `;

    const rightBlock = document.createElement("div");
    rightBlock.textContent = "appleclub.support@mail.ru Проект компании VK";
    rightBlock.style.cssText = `
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #333;
        `;

    footer.appendChild(leftBlock);
    footer.appendChild(rightBlock);

    this.#parent.innerHTML = "";
    this.#parent.appendChild(footer);
  }
}
