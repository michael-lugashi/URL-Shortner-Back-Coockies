'use strict';
const express = require('express');
const router = express.Router();
const shortid = require('shortid') // added dependency that helps me generate a short url
const fs = require('fs');

router.post('', (req, res) => {
    const longURL = req.body.longURL
    const shortId = shortid.generate()
    const data = JSON.parse(fs.readFileSync('./src/model.json'))
    data[shortId] = longURL
    fs.writeFileSync('./src/model.json', JSON.stringify(data, null, 2))
    res.status(201) //status for successfull creation
    res.json(data)
    // res.send(`shortId created: ${shortId}`)
});

module.exports = router;