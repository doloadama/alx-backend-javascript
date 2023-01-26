export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(val) {
        this._sqft = val;
    }
}
