// Import the assert module
const assert = require('assert');

// Import the function to test
const calculateNumber = require('./0-calcul.js');

// Describe the test suite
describe('calculateNumber', function() {
  // Test normal cases with different combinations of integers and floats
  it('should return the sum of two numbers rounded to the nearest integer', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.6, -3.6), -6);
  });

  // Test edge cases with zero and infinity
  it('should handle zero and infinity', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, Infinity), Infinity);
    assert.strictEqual(calculateNumber(Infinity, Infinity), Infinity);
    assert.strictEqual(isNaN(calculateNumber(NaN, NaN)), true); // NaN is not equal to anything
  });
});
