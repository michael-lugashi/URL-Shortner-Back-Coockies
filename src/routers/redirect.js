'use strict';
const express = require('express');
const router = express.Router();

router.get('/:num', (req, res) => {
    res.status(302)
    res.redirect('https://www.youtube.com/')
});

module.exports = router;
