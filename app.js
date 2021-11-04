'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const redirect = require('./src/routers/redirect.js')
const shorten = require('./src/routers/shorten.js')

app.use(cors());
app.use(express.json());

app.use('/redirect', redirect)
app.use('/shorten', shorten)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});