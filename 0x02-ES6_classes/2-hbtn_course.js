export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string' || typeof lenght !== 'number' || typeof students !== 'string') throw new Error();
    
    this._name = name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(val) {
    this._lenght = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    this._students = val;
  }
}
