const expect = require('Chai').expect;
const calculateNumber = require('./2-calcul.js');

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
});
