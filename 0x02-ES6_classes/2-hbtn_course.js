export default class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._lenght = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!(val instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!val.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = val;
  }
}
