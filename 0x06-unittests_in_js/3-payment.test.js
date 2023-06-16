const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendpaymentRequestToApi', () => {
        const haha = sinon.spy(Utils);

        sendPaymentRequestToApi(150, 30);
        expect(haha.calculateNumber.calledWith('SUM', 150, 30)).to.be.true;
        expect(haha.calculateNumber.callCount).to.be.equal(1);
        haha.calculateNumber.restore();
    });
});

module.exports = Utils;
