const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Account = new Schema({
    username: {type: String , minLength: 1},
    password: { type: String, minLength : 1},
    slug: {type: String, slug: 'username'},
  });

  module.exports = mongoose.model('Account', Account);