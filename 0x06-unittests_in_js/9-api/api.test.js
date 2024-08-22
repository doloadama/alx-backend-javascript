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
    request.get(baseUrl + '/other', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request.get(baseUrl + '/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get(baseUrl + '/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is not a number', (done) => {
    request.get(baseUrl + '/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});


const request = require('supertest');
const app = require('./api');

describe('GET /cart/:id', () => {
    it('should return 200 and correct message when :id is a number', (done) => {
        request(app)
            .get('/cart/12')
            .expect(200)
            .expect('Payment methods for cart 12', done);
    });

    it('should return 404 when :id is NOT a number', (done) => {
        request(app)
            .get('/cart/hello')
            .expect(404, done);
    });
});

