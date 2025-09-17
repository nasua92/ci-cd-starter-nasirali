const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'ci-cd-starter' });
});

app.get('/', (req, res) => {
  res.send('Greatings Earthling, We have now landed on Nibiru, prepare for take over! ');
});

module.exports = app;
