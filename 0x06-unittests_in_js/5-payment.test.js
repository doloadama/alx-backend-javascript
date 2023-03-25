const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should log "The total is: 120" and call console.log once', function() {
    const total = sendPaymentRequestToApi(100, 20);

    expect(total).to.equal(120);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and call console.log once', function() {
    const total = sendPaymentRequestToApi(10, 10);

    expect(total).to.equal(20);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
