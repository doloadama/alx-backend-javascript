const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return rounded second number', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should return rounded first and second numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return rounded first and second numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });
});
