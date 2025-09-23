import {CardHeader} from "../components/CardHeader/CardHeader.js";
import {Card} from "../components/Card/Card.js";
import {Header} from "../components/Header/Header.js";
import {Footer} from "../components/Footer/Footer.js";

export class MainPage {

    constructor(parent, state, loginPage, storePage) {
        this.parent = parent;
        this.state = state;
        this.loginPage = loginPage;
        this.storePage = storePage;

        this.config = {
            header:
                {
                    object: new Header(document.querySelector("header"), state),
                },
            footer:
                {
                    object: new Footer(document.querySelector("footer"), state),
                },
            cardHeader:
                {
                    object: new CardHeader(parent),
                },
        };
    }

    render() {
        if (this.state.activeMenu === "main") return;

        this.parent.innerHTML = "";
        this.state.prevMenu = this.state.activeMenu;
        this.state.activeMenu = "main";

        this.config.header.object.render();
        this.config.header.object.setListeners({mainPage: this, loginPage: this.loginPage});

        this.config.footer.object.render();

        this.config.cardHeader.object.render();

        this.card = new Card({
            parent: document.querySelector(".container"),
            config: this.config,
            lifeTime: 60,
            batchSize: 12,
        });

        this.config.cardHeader.object.setListeners(this.storePage);

        this.card.renderNext();

        this.activateScroll();
    }

    activateScroll() {
        window.addEventListener("scroll", () => {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                this.card.renderNext();
            }
        });
    }

    deactivateScroll() {
        window.removeEventListener("scroll", () => {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                this.card.renderNext();
            }
        });
    }
}