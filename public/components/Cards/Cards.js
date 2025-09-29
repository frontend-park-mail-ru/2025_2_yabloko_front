import {StoreApi} from '../../utils/api/storeApi.js'

export class Cards {
  #parent;
  #batchSize;
  #api;
  #baseURL;

  constructor({ parent, batchSize, baseURL}) {
    this.#parent = parent;
    this.#batchSize = batchSize;
    this.#baseURL = baseURL;
    this.#api = new StoreApi(baseURL);

    this.lastId = null;
    this.hasMore = true;
    this.isLoading = false;
    this.currentFilter = null;
    this.currentSort = null;
  }

  async renderNext() {
    if (this.isLoading) return;

    this.isLoading = true;

    try {
      const response = await this.#api.getStores({
        limit: this.#batchSize,
        lastId: this.lastId,
      });

      const data = response;

      if (data.length > 0) {
        this.lastId = data[data.length - 1].store_id;
        this.hasMore = data.length === this.#batchSize;
        this.#render(data);
      } else {
        this.hasMore = false;
      }
    } catch (error) {
      console.error("Error loading cards:", error);
      this.hasMore = false;
    } finally {
      this.isLoading = false;
    }
  }
  #render(stores) {
    const template = Handlebars.templates["Cards.hbs"];

    const items = stores.map((store) => ({
      name: store.name,
      image: `${this.#baseURL}/api/v0/image${store.card_img}`,
      time: "30 мин",
      rating:
        typeof store.rating === "number"
          ? store.rating.toFixed(1)
          : store.rating,
    }));

    this.#parent.innerHTML += template({
      items,
      cardPadClass: "cardpad",
      cardClass: "card",
    });
  }
}