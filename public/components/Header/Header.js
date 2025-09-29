import { appStore } from "../../utils/modules/store.js";
import { authManager } from "../../utils/modules/authManager.js";

export class Header {
  constructor(parent) {
    this.parent = parent;
    this.unsubscribe = null;
  }

  render() {
    const userAuthed = appStore.get("auth.isAuthenticated");
    const template = Handlebars.templates["Header.hbs"];
    this.parent.innerHTML = template({ userAuthed });

    this.addEventListeners();

    if (this.unsubscribe) {
      this.unsubscribe();
    }

    this.unsubscribe = appStore.subscribe(
      "auth.isAuthenticated",
      (isAuthenticated) => {
        this.updateContent(isAuthenticated);
      }
    );
  }

  addEventListeners() {
    const logoutLink = this.parent.querySelector('a[href="/logout"]');
    if (logoutLink) {
      logoutLink.addEventListener("click", this.handleLogout);
    }

    const loginLink = this.parent.querySelector('a[href="/login"]');
    if (loginLink) {
      loginLink.addEventListener("click", this.handleLogin);
    }

    const searchForm = this.parent.querySelector(".search-bar");
    if (searchForm) {
      searchForm.addEventListener("submit", this.handleSearch);
    }

    const logo = this.parent.querySelector(".logo");
    if (logo) {
      logo.addEventListener("click", this.handleLogoClick);
    }
  }

  updateContent(isAuthenticated) {
    const template = Handlebars.templates["Header.hbs"];
    this.parent.innerHTML = template({ userAuthed: isAuthenticated });
    this.addEventListeners();
  }

  handleLogin = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.router) {
      window.router.navigate("/login");
    } else {
      if (typeof this.onLoginClick === "function") {
        this.onLoginClick();
      }
    }
  };

  handleLogout = async (e) => {
    e.preventDefault();

    try {
      await authManager.logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.querySelector('input[name="search"]');
    const searchTerm = searchInput.value.trim();

    if (searchTerm.length > 0) {
      alert(`Фукнционал пока в разработке`);
    }
  };

  handleLogoClick = async (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  destroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }
}