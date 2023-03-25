function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      }
      // No else statement needed, the promise will be pending if success is false
    });
  }
  
  module.exports = getPaymentTokenFromAPI;
  