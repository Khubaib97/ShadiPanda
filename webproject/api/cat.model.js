const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Venue = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rate: {
      type: String,
      required: true
  },
  capacity: {
      type: String,
      required: true
  },
  images: {
      type: Array,
      required: true
  }
},{
    collection: 'venue'
});

module.exports = mongoose.model('Venue', Venue);