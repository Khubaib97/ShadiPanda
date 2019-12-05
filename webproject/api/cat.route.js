const express = require('express');
const venueRoutes = express.Router();

let Venue = require('./cat.model');

venueRoutes.route('/').get(function (req, res) {
    Venue.find(function(err, venues){
    if(err){
      console.log(err);
    }
    else {
      res.json(venues);
    }
  });
});

venueRoutes.route('/:sort').get(function (req, res) {
    Venue.find({}).sort(req.params.sort).exec(function(err, venues){
    if(err){
      console.log(err);
    }
    else {
      res.json(venues);
    }
  });
});

venueRoutes.route('/name/:value').get(function (req, res) {
  Venue.find({ name: { $regex: req.params.value, $options: "i" } }, function(err, venues){
  if(err){
    console.log(err);
  }
  else {
    res.json(venues);
  }
});
});

venueRoutes.route('/location/:value').get(function (req, res) {
  Venue.find({ location: { $regex: req.params.value, $options: "i" } }, function(err, venues){
  if(err){
    console.log(err);
  }
  else {
    res.json(venues);
  }
});
});

venueRoutes.route('/rate/:value').get(function (req, res) {
  Venue.find({rate: req.params.value}, function(err, venues){
  if(err){
    console.log(err);
  }
  else {
    res.json(venues);
  }
});
});

venueRoutes.route('/capacity/:value').get(function (req, res) {
  Venue.find({capacity: req.params.value}, function(err, venues){
  if(err){
    console.log(err);
  }
  else {
    res.json(venues);
  }
});
});

module.exports = venueRoutes;