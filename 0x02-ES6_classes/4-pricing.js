import Currency from "./3-currency";

export default class Pricing{
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

    get amount(){
        return this._amount;
    }

    get currency(){
        return this._currency;
    }

    set amount(val){
        this_amount = val;
    }

    set currency(val){
        this._currency = val;
    }

    displayFullPrice(){
        return '${this.amount} ${this.currency.name} (${this.currency.code})'
    }

    static convertPrice(amount, conversionRate){
        if (typeof amount !== "number" || typeof conversionRate !== "number") throw new Error();
        return amount * conversionRate;
    }
}
