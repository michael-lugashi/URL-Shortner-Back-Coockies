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
    this.shortUrl = `http://localhost:3000/redirect/${shortUrlId}`
  }
}
// let help = new shortUrlBuilder('ndfksdfk')
// console.log(help)
// help.addOneToCount()
// console.log(help)
module.exports = shortUrlBuilder

