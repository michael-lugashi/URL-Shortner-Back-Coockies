'use strict';
const express = require('express');
const router = express.Router();
const Url = require('../model/urlSchema.js');

// uses the req parameter to find the users orginal url
router.get('/:shortUrlId', (req, res) => {
 const shortUrlId = req.params.shortUrlId;
 Url.findOneAndUpdate({ shortUrlId }, { $inc: { redirectCount: 1 } })
  .then((url) => {
    console.log(url)
   res.status(302).redirect(url.originalUrl);
  })
  .catch((err) => {
   console.log(err);
   res.status(400).send('Not a valid URL!');
  });
});

module.exports = router;
