const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  username: {
      type: String,
      required: true
  }
},{
    collection: 'booking'
});

module.exports = mongoose.model('Book', Book);