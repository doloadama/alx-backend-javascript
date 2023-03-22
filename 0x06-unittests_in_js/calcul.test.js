const assert = require('assert');
const calculateNumber = require('./calculateNumber');

describe('calculateNumber', () => {
  it('returns the sum of two rounded numbers', () => {
    assert.equal(calculateNumber(3.7, 2.2), 6);
    assert.equal(calculateNumber(2.4, 3.6), 6);
    assert.equal(calculateNumber(-3.7, -2.2), -6);
  });
});
