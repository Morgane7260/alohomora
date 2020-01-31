const express = require('express');

const alohomora = require('./routes');

const app = express();
const port = 4000;

app.use('/alohomora', alohomora);

app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }
});
