const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('should return correct status code', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other routes', (done) => {
    request.get(baseUrl + '/other', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
