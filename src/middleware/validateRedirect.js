'use strict';
const fs = require('fs');

function validateRedirect(req, res, next) {
  const shortUrlId = req.params.shortUrlId;
  const data = JSON.parse(fs.readFileSync('./src/model/dataBase.json'));
  if (!data[shortUrlId]) {
      res.status(404).send('Not A Valid Redirect')
  } else {
    next();
  }
}

module.exports = validateRedirect;
