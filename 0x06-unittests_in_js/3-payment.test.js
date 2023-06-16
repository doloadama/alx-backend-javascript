const sinon = require('sinon');
const Utils = require('./utils.js');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  describe('calculateNumber', () => {
    it('should call the calculateNumber function from Utils', () => {
      const calculateNumberSpy = sinon.spy(Utils);

      sendPaymentRequestToApi(100, 20);
      expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
      expect(calculateNumberSpy.callCount).to.be.equal(1);
      calculateNumberSpy.restore();
    });
  });
});
