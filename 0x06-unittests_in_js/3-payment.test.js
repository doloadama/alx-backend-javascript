const sinon = require('sinon');
const Utils = require('./utils.js');
const { expect } = require('chai');

describe('Utils', () => {
  describe('calculateNumber', () => {
    it('should call the calculateNumber function from Utils', () => {
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
      calculateNumberSpy.restore();
    });
  });
});
