'use strict';
const express = require('express');
const router = express.Router();
const Url = require('../model/urlSchema.js');


// sends all the urls information
router.get('', (req, res) => {
    Url.find().then(allUrls=>{
        console.log(allUrls)
        res.status(200).json(allUrls)
    }).catch(err=>{
        console.log(err)
        res.status(500).send('Database not functional!')
    })
  
});

module.exports = router;