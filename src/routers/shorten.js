'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const shortUrlBuilder = require('../model/shortUrlBuilder.js');
const shortId = require('shortid')

router.post('', (req, res) => {
    const originalUrl = req.body.longURL
    const shortUrlId = shortId.generate()
    const urlInfo = new shortUrlBuilder(originalUrl)
    const data = JSON.parse(fs.readFileSync('./src/model/dataBase.json'))
    data[shortUrlId] = urlInfo

    fs.writeFileSync('./src/model/dataBase.json', JSON.stringify(data, null, 2))
    res.status(201) //status for successfull creation
    res.json(data)
  
});

module.exports = router;