const net = require('net');

const server = net.createServer();
server.once('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 7865 is already in use');
  }
});

server.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

const express = require('express');

const app = express();

const port = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
