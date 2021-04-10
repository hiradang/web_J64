const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String , minLength: 1},
    image: { type: String, minLength : 1},
    slug: {type: String, slug: 'name'},
  });

  module.exports = mongoose.model('Course', Course);