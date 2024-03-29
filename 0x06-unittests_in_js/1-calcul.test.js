const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('when type is DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 7, 2), 3.5);
      assert.strictEqual(calculateNumber('DIVIDE', -2, -2), 1);
    });

    it('should return "Error" when roundedB is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
