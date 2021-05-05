const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    level: {type: String},
    name: {type: String},
    description: {type: String},
    image: { type: String, minLength : 1},
    slug: {type: String},
  });

  module.exports = mongoose.model('Course', Course);