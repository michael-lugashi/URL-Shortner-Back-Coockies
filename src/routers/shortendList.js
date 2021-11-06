'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');

// sends all the urls information
router.get('', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./src/model/dataBase.json'))
    res.status(200)
    res.json(data)
  
});

module.exports = router;