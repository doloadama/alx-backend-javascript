const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(
      calculateNumberStub,
      'SUM',
      100,
      20
    );
    sinon.assert.calledWithExactly(
      consoleSpy,
      'The total is: 10'
    );

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
