export class Cards {
    #parent
    #lifeTime
    #offset
    #batchSize
    #config

    /**
     * @constructor
     * @param {HTMLElement} parent - Элемент к которому будут крепиться карточки.
     * @param {object} config
     * @param {number} lifeTime - Время хранения следующего батча данных (сек).
     * @param {number} batchSize - Стандартное количество элементов.
     */
    constructor({parent, config, lifeTime, batchSize}) {
        this.#parent = parent;
        this.#lifeTime = lifeTime * 1000;
        this.#batchSize = batchSize;
        this.#config = config;

        this.#offset = 0;
        this.cardsHolder = [];
        this._getNextCards();
        this._getNextCards();
    }

    _offsetInc() {
        this.#offset += this.#batchSize;
    }

    _getNextCards() {
        // TODO backend get
        const curTime = Date.now();
        const data = [];

        for (let i = this.#offset; i < this.#offset + this.#batchSize; i++) {
            data.push({name: "Card " + i, image: "/static/images/restourant.png", id: i, time: i*10 + " минут", rating: i});
        }

        this.cardsHolder.push({time: curTime, content: data});
        this._offsetInc();
    }

    #render(content) {
        // TODO активное
        const template = Handlebars.templates["Cards.hbs"];

        const items = content.map(({name, image, id, time, rating}) => {
            return {name: name, image: image, id: id, time: time, rating: rating};
        });

        this.#parent.innerHTML += template({items, cardPadClass: "cardpad", cardClass: "card"});
    }

    renderNext() {
        // fixme заглушка
        if (this.#offset > 100) return;
        const {time, content} = this.cardsHolder.shift();

        if (Date.now() - time > this.#lifeTime) {
            this._getNextCards();
            this.renderNext();
        } else {
            this.#render(content);
            this._getNextCards();
        }
    }
}
