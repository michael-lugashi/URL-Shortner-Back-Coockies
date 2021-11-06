'use strict';

const validUrl = require('valid-url');

// uses npm extention to check if its a real url
function validateUrl(req, res, next) {
    const originalUrl = req.body.longURL
    if (validUrl.isWebUri(originalUrl)){
        console.log('Looks like an URI');
        next();
    } else {
        res.status(400).send('Not A Valid URL!')
    }

}

module.exports = validateUrl;
