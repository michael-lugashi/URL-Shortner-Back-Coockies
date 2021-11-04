'use strict'

class shortUrlBuilder {
  constructor(originalUrl) {
    this.originalUrl = originalUrl;
    this.creationDate = new Date(Date.now()).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
    this.redirectCount = 0
  }
}
// let help = new shortUrlBuilder('ndfksdfk')
// console.log(help)
// help.addOneToCount()
// console.log(help)
module.exports = shortUrlBuilder

