const Utils = require('./utils.js');
const sinon = require('sinon');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const spy = sinon.spy(Utils, 'calculateNumber');
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);

  // Validate the usage of Utils.calculateNumber
  console.log(`Spy called with args: ${spy.args[0]}`);
  console.log(`Spy return value: ${spy.returnValues[0]}`);

  // Restore the spy
  spy.restore();
}

sendPaymentRequestToApi(100, 20);
