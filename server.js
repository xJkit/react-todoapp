/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3001;

const fakeData = require('./public/todos');

app.use('/', express.static(__dirname));

app.get('/data.json', (req, res) => {
  res.sendFile(fakeData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
