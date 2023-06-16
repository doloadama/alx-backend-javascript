const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct total and be called once', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');

    calculateNumberStub.restore();
  });

  it('should log the correct total and be called once', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');

    calculateNumberStub.restore();
  });
});
