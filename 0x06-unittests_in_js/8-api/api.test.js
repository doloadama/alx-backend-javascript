const request = require('request');
const { expect } = require('chai');

const app = require('./api');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(error).to.be.null;
      expect(body).to.not.be.empty;
      done();
    });
  });
});
