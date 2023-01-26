<<<<<<< HEAD
<<<<<<< HEAD
import Building from './5-building.js';
=======
import Building from './5-building'
>>>>>>> 567b23e8d9eadbc02af35d1939d322b772e53774
=======
import Building from './5-building';
>>>>>>> 1f3357ad48d52b08230107cde67af2a786737711

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
