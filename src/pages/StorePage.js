import {Store} from "../components/Store/Store.js";

export class StorePage {
    constructor(parent, state) {
        this.parent = parent;
        this.state = state;
        this.store = new Store(parent);
    }

    render(storeId) {
        if (this.state.activeMenu === "store") {return;}

        this.parent.innerHTML = "";
        this.state.prevMenu = this.state.activeMenu;
        this.state.activeMenu = "store";

        this.store.render(storeId);
    }
}