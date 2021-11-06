'use strict';
const validUrl = require('valid-url');
function validateUrl(req, res, next) {
    const originalUrl = req.body.longURL
    if (validUrl.isWebUri(originalUrl)){
        console.log('Looks like an URI');
        next();
    } else {
        res.status(400).send('not a valid url')
    }

}

module.exports = validateUrl;
