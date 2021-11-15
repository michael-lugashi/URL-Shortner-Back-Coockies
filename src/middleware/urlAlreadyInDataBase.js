'use strict';
const fs = require('fs');
const Url = require('../model/urlSchema.js');

// if the url is already in the data base I send back to the user the urls without creating a new one
function validateRedirect(req, res, next) {
 const originalUrl = req.body.originalUrl;
 Url.findOne({ originalUrl }).then((url) => {
  if (url) {
   res.status(400).send('Url already shortened!');
   return;
  }
  next();
 });
}

module.exports = validateRedirect;
