'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const urlSchema = new Schema({
 originalUrl: {
  type: String,
  required: true,
 },
 shortUrlId: {
  type: String,
  required: true,
 },
 redirectCount: {
  type: Number,
  required: true,
 },
 creationDate: {
  type: String,
  required: true,
 },
});

const Url = mongoose.model('URL', urlSchema);
module.exports = Url;

