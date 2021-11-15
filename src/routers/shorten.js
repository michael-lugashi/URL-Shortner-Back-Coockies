'use strict';
const express = require('express');
const router = express.Router();
const Url = require('../model/urlSchema.js');
const validateUrl = require('../middleware/validateUrl.js');
const urlAlreadyInDataBase = require('../middleware/urlAlreadyInDataBase.js');
const shortId = require('shortid');

// here I gather all the info from the data base append what the user added and rewrite the database
router.post('', validateUrl, urlAlreadyInDataBase, (req, res) => {
 const originalUrl = req.body.originalUrl;

 const url = new Url({
  originalUrl,
  redirectCount: 0,
  shortUrlId: shortId.generate(),
  creationDate: dateFormat()
 });
 url.save().then(async () => {
  res.status(201).json(await Url.find());
 });
});

module.exports = router;

function dateFormat() {
    const date = new Date(Date.now()).toLocaleString('en-US', {
     month: 'long',
     day: 'numeric',
     year: 'numeric',
     hour: 'numeric',
     minute: '2-digit',
    });
    return date;
   }