'use strict'

class shortUrlBuilder {
  constructor(originalUrl, shortUrlId) {
    this.originalUrl = originalUrl;
    this.creationDate = new Date(Date.now()).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
    this.redirectCount = 0
    this.shortUrl = `https://url-shortner-04.herokuapp.com/redirect/${shortUrlId}`
  }
}

module.exports = shortUrlBuilder

