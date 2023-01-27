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
      throw new Error();
    }
    this._name = val;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(val) {
    if (typeof val !== 'number') {
      throw new Error();
    }
    this._lenght = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!(val instanceof Array)) {
      throw new Error();
    }
    if (!val.every((student) => typeof student === 'string')) {
      throw new Error();
    }
    this._students = val;
  }
}
