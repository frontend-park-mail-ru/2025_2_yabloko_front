import {Login} from "../components/Login/Login.js";

export class LoginPage {

    constructor(parent, state) {
        this.parent = parent;
        this.state = state;
        this.login = new Login(parent, state);
    }

    render() {
        this.login.render();
    }
}