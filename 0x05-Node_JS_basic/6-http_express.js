const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for use in other modules or testing
module.exports = app;
