export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  
  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
