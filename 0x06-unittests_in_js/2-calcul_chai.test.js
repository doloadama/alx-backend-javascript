const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return the sum of two integers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the difference of two integers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the quotient of two integers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if the second number is 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
  it('throws an error when the type is not one of SUM, SUBTRACT, or DIVIDE', () => {
    expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error, 'Invalid operation type. Valid types are SUM, SUBTRACT, and DIVIDE');
  });

  it('throws a TypeError when either of the first two arguments is not a number', () => {
    expect(() => calculateNumber('SUM', 1.4, '4.5')).to.throw(TypeError, 'Parameters must be numbers');
  });
});
