'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:shortUrlId', (req, res) => {
    const shortUrlId = req.params.shortUrlId
    const data = JSON.parse(fs.readFileSync('./src/model/dataBase.json'))
    const urlInfo = data[shortUrlId]
    console.log(urlInfo)
    urlInfo.redirectCount += 1
    fs.writeFileSync('./src/model/dataBase.json', JSON.stringify(data, null, 2))
    res.status(302)
    res.redirect(urlInfo.originalUrl)
});

// function findUrlInfo(id){
//     return data.filter(urlInfo => urlInfo.shortUrlId === id)[0]
// }

module.exports = router;

