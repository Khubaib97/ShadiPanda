const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');

userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'account created successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

userRoutes.route('/login').post(function (req, res) {
	User.findOne({username: req.body.username})
  .then(user => {
    if(!user){
      res.sendStatus(204);
    }
    else if(req.body.password===user.password){
      res.sendStatus(200);
    }
    else{
      res.sendStatus(204);
    }
  });
});

userRoutes.route('/change/:user').post(function (req, res) {
	User.findOne({username: req.params.user})
  .then(user => {
    if(!user){
      res.status(404).send('not found');
    }
    else if(req.body.password===user.password){
      user.password = req.body.passwordn;
      user.save().then(user => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
    else{
      res.sendStatus(400);
    }
  });
});

module.exports = userRoutes;
