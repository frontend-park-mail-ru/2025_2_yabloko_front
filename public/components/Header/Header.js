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

    setListeners({mainPage, loginPage}) {
        this.parent.querySelector(".icon").addEventListener("click", (e) => {
            e.preventDefault();

            mainPage.render();
        });

        this.parent.querySelector(".login").addEventListener("click", (e) => {
            e.preventDefault();

            if (this.state.activeMenu === "login") return;

            this.state.prevMenu = this.state.activeMenu;
            this.state.activeMenu = "login";

            loginPage.render();
        });


        this.parent.querySelector(".search-bar").addEventListener("submit", (e) => {
            e.preventDefault();

            const inputStr = this.parent.querySelector("input").value.trim();
            if (inputStr.length > 0) {
                alert(inputStr);
            }
        });
    }
}