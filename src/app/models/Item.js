const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Item = new Schema({
    level: {type: String},
    videoID: {type: String},
    type: {type: String},
    name: {type: String , minLength: 1},
    image: { type: String},
    linkBuy: {type: String},
    slug: {type: String},
  });

  module.exports = mongoose.model('Item', Item);