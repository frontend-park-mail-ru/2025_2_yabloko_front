"use strict";

import {MainPage} from "./pages/MainPage.js";
import {StorePage} from "./pages/StorePage.js";
import {LoginPage} from "./pages/LoginPage.js";
import { Header } from "./components/Header/Header.js";

import { authManager } from "./utils/modules/authManager.js";

const state = {activeMenu: null, prevMenu: null,}

authManager.onAuthChange((isAuthenticated) => {
  state.userAuthed = isAuthenticated;
});

const rootElement = document.getElementById("root");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
rootElement.appendChild(header);
rootElement.appendChild(main);
rootElement.appendChild(footer);

const loginPage = new LoginPage(main, state);
const storePage = new StorePage(main, state);

async function initApp() {
    await authManager.initialize();
    
    const headerComponent = new Header(header);
    
    await new Promise(resolve => setTimeout(resolve, 0));
    
    headerComponent.render();
    
    const mainPage = new MainPage(main, state, loginPage, storePage, headerComponent);
    mainPage.render();
}
initApp();