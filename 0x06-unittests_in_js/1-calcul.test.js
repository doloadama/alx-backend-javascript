const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return the sum of two integers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the difference of two integers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -3.1);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the quotient of two integers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" if the second number is 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
