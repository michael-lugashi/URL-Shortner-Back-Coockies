'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const redirect = require('./src/routers/redirect.js');
const shorten = require('./src/routers/shorten.js');
const shortendList = require('./src/routers/shortendList.js')
const path = require('path')

app.use(cors());
app.use(express.json());

app.use('/', express.static('./dist'));
app.get('/', function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve('./dist/index.html'));
});

app.use('/shortend/list', shortendList); // for displaying the list of urls before the user tries to shorten one
app.use('/redirect', redirect);
app.use('/shorten', shorten);

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));