'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:id', (req, res) => {
    const id = req.params.id
    const data = JSON.parse(fs.readFileSync('./src/model.json'))
    res.status(302)
    res.redirect(data[id])
});

module.exports = router;
