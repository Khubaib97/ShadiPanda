const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    dropDups: true
  },
  password: {
    type: String,
    required: true
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);