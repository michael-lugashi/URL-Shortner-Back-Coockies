'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const validateRedirect = require('../middleware/validateRedirect.js')

router.get('/:shortUrlId', validateRedirect, (req, res) => {
    const shortUrlId = req.params.shortUrlId
    const data = JSON.parse(fs.readFileSync('./src/model/dataBase.json'))
    const urlInfo = data[shortUrlId]
    urlInfo.redirectCount += 1
    fs.writeFileSync('./src/model/dataBase.json', JSON.stringify(data, null, 2))
    res.status(302)
    res.redirect(urlInfo.originalUrl)
});

// function findUrlInfo(id){
//     return data.filter(urlInfo => urlInfo.shortUrlId === id)[0]
// }

module.exports = router;

