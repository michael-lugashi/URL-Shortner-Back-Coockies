'use strict';
const express = require('express');
const router = express.Router();

router.get('/:num', (req, res) => {
    res.send(req.params.num + 1)
});

module.exports = router;
