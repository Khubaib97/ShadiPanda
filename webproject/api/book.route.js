const express = require('express');
const bookRoutes = express.Router();

let Book = require('./book.model');

bookRoutes.route('/').get(function (req, res) {
    Book.find(function(err, books){
    if(err){
      console.log(err);
    }
    else {
      res.json(books);
    }
  });
});

bookRoutes.route('/get/:user').get(function (req, res) {
    Book.find({username: req.params.user}, function(err, books){
    if(err){
      console.log(err);
    }
    else {
      res.json(books);
    }
  });
});

bookRoutes.route('/check').post(function (req, res){
    Book.find({name: req.body.name, date: req.body.date}, function(err, books){
        if(books.length){
            res.sendStatus(204);
        }
        else {
            res.sendStatus(200);
        }
    })
});

bookRoutes.route('/add').post(function (req, res) {
    let book = new Book(req.body);
    book.save()
      .then(book => {
        res.status(200).json({'book': 'booking added successfully'});
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});

bookRoutes.route('/delete/:id').get(function (req, res) {
    Book.findByIdAndRemove({_id: req.params.id}, function(err, book){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = bookRoutes;