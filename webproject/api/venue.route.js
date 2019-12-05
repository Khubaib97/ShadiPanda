const express = require('express');
const venueRouter = express.Router();

let Venue = require('./cat.model');

venueRouter.route('/').get(function (req, res) {
    Venue.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

venueRouter.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Venue.findById(id, function (err, venue){
      res.json(venue);
  });
});

venueRouter.route('/update/:id').post(function (req, res) {
    Venue.findById(req.params.id, function(err, venue) {
    if (!venue)
      res.status(404).send("data is not found");
    else {
        venue.name = req.body.name;
        venue.location = req.body.location;
        venue.rate = req.body.rate;
        venue.capacity = req.body.capacity;

        venue.save().then(venue => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

venueRouter.route('/delete/:id').get(function (req, res) {
    Venue.findByIdAndRemove({_id: req.params.id}, function(err, venue){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = venueRouter;