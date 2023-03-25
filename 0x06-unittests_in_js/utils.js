const Utils = {
  calculateNumber(type, a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw TypeError('Parameters must be numbers');
    }

    a = Math.round(a);
    b = Math.round(b);

    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) {
          return 'ERROR';
        }
        return a / b;
      default:
        throw Error('Invalid type');
    }
  }
};

module.exports = Utils;
