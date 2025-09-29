import {CardHeader} from "../components/CardHeader/CardHeader.js";
import {Cards} from "../components/Cards/Cards.js";
import {Header} from "../components/Header/Header.js";
import {Footer} from "../components/Footer/Footer.js";
import { authManager } from "../utils/modules/authManager.js";
import {URL} from "../utils/const.js";

export class MainPage {
  constructor(parent, state, loginPage, storePage, headerComponent) {
    this.parent = parent;
    this.state = state;
    this.loginPage = loginPage;
    this.storePage = storePage;
    this.headerComponent = headerComponent;

    this.config = {
      //header: { object: new Header(document.querySelector("header"))},
      footer: { object: new Footer(document.querySelector("footer"), state) },
      cardHeader: { object: new CardHeader(parent) },
    };
  }

  async render() {
    if (this.state.activeMenu === "main") return;

    this.parent.innerHTML = "";
    this.state.prevMenu = this.state.activeMenu;
    this.state.activeMenu = "main";

    const isAuthenticated = authManager.isAuthenticated();

    this.config.footer.object.render();
    this.headerComponent.render();

    this.parent.innerHTML = Handlebars.templates["MainPage.hbs"];

    this.config.cardHeader.object.render();
    this.card = new Cards({
      parent: document.querySelector(".container"),
      config: {},
      lifeTime: 300,
      batchSize: 12,
      baseURL: URL,

    });

    this.card.renderNext();
    this.setEventListeners();
    this.setHeaderEventListener();
  }

  #scrollListener = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      this.card.renderNext();
    }
  };

  #clickCard = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("card")) {
      this.removeEventListeners();
      this.storePage.render(e.target.id);
    }
  };

  #clickIcon = (e) => {
    e.preventDefault();
    this.render();
  };

  #clickLogin = (e) => {
    e.preventDefault();

    if (this.state.activeMenu === "login") return;

    if (this.state.activeMenu === "main") {
      this.removeEventListeners();
    }

    this.state.prevMenu = this.state.activeMenu;
    this.state.activeMenu = "login";

    this.loginPage.render();
  };

  #submitSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    const inputStr = form.querySelector('input[name="search"]').value.trim();

    if (inputStr.length > 0) {
      alert(inputStr);
    }
  };

  setEventListeners() {
    this.parent
      .querySelector(".container")
      .addEventListener("click", this.#clickCard);
    window.addEventListener("scroll", this.#scrollListener);
  }

  setHeaderEventListener() {
    document
      .querySelector("header .logo")
      .addEventListener("click", this.#clickIcon);
    document
      .querySelector("header .search-bar")
      .addEventListener("submit", this.#submitSearch);
    if (document.querySelector("header .login")) {
      document
        .querySelector("header .login")
        .addEventListener("click", this.#clickLogin);
    }
  }

  removeEventListeners() {
    this.parent
      .querySelector(".container")
      .removeEventListener("click", this.#clickCard);
    window.removeEventListener("scroll", this.#scrollListener);
  }
}