var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feedback = require('../models/Feedback.js');

/* GET ALL FEEDBACK */
router.get('/', function(req, res, next) {
  Feedback.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE FEEDBACK BY ID */
router.get('/:id', function(req, res, next) {
  Feedback.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE FEEDBACK */
router.post('/', function(req, res, next) {
  Feedback.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE FEEDBACK */
router.put('/:id', function(req, res, next) {
  Feedback.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE FEEDBACK */
router.delete('/:id', function(req, res, next) {
  Feedback.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;