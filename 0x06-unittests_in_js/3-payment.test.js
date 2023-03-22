const sinon = require('sinon');
const Utils = require('../utils');

describe('sendPaymentRequestToApi', function() {
    it('calls Utils.calculateNumber with the correct arguments', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        const totalAmount = 100;
        const totalShipping = 20;
        sendPaymentRequestToApi(totalAmount, totalShipping);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWithExactly(spy, 'SUM', totalAmount, totalShipping);
        spy.restore();
      });
});
