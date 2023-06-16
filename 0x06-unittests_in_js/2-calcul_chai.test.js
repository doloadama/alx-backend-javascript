const calculateNumber = require('./2-calcul_chai');
const { expect } = require("chai");

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5).to.equal(4));
      expect(calculateNumber('SUM', 1, 3.7).to.equal(5));
    });
  });

  describe('when type is SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5).to.equal(-3));
      expect(calculateNumber('SUBTRACT', 1, 3.7).to.equal(-3));
      expect(calculateNumber('SUBTRACT', 1.2, 3.7).to.equal(-3));
      expect(calculateNumber('SUBTRACT', 1.5, 3.7).to.equal(-2));
    });
  });

  describe('when type is DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8, 2).to.equal(4));
      expect(calculateNumber('DIVIDE', 2, 2).to.equal(1));
      expect(calculateNumber('DIVIDE', 7, 2).to.equal(3.5));
      expect(calculateNumber('DIVIDE', -2, -2).to.equal(1));
    });

    it('should return "Error" when roundedB is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
