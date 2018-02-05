//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

var films = films();

//show all films
filmRouter.get('/', function(req, res) {
  res.json({data:films});
});

//show one film by id
filmRouter.get('/:id', function(req, res) {
  res.json({data:films[req.params.id]});
});

//create film
filmRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json({data:films});
});

//update films
filmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({data:films});
});

//delete film
filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data:films});
});

//add new review
filmRouter.post('/:id', function(req, res) {
  films[req.params.id].reviews.push(req.body.reviews);
  res.json({data:films});
})

module.exports = filmRouter;
