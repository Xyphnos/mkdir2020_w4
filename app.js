'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('week2_public_html'));

app.get('./models/catModel.js', (req, res) => {
  res.send('');
});

app.post('/', (req, res) => {
  res.send('With this endpoint you can add cats.');
});

app.put('/', (req, res) => {
  res.send('With this endpoint you can edit cats.');
});

app.delete('/', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
