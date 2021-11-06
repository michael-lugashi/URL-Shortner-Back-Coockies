'use strict'
const fs = require('fs');

// if the url is already in the data base I send back to the user the urls without creating a new one
function validateRedirect(req, res, next) {
  const data = JSON.parse(fs.readFileSync('./src/model/dataBase.json'));
  const _originalUrl = req.body.longURL
  for (const urlInfo in data) {
      if (data[urlInfo].originalUrl === _originalUrl) {
          res.status(200).send(data)
          return
      } 
  }
  next()
}

module.exports = validateRedirect;
