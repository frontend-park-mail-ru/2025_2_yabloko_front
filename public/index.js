"use strict";

import {MainPage} from "./pages/MainPage.js";
import {StorePage} from "./pages/StorePage.js";
import {LoginPage} from "./pages/LoginPage.js";

const URL = "http://localhost:8080/";

const rootElement = document.getElementById("root");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
rootElement.appendChild(header);
rootElement.appendChild(main);
rootElement.appendChild(footer);

const state = {activeMenu: null, prevMenu: null,}

const loginPage = new LoginPage(main, state);
const storePage = new StorePage(main, state);
const mainPage = new MainPage(main, state, loginPage, storePage);

mainPage.render();
