'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Comment = mongoose.model('Comment'),
  _ = require('lodash');


/**
 * Find comment by id
 */
exports.comment = function(req, res, next, id) {
  Comment.load(id, function(err, comment) {
    if (err){
      return next(err);
    } 
    if (!comment){
      return next(new Error('Failed to load comment ' + id));
    } 
    req.comment = comment;
    next();
  });
};

/**
 * Create an comment
 */
exports.create = function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      return res.status(500).json([{'param':'comment','msg':'Cannot save the comment'}]);
    }
    res.status(201).json(comment);
  });
};

/**
 * Update an comment
 */
exports.update = function(req, res) {
  var comment = req.comment;
  comment = _.extend(comment, req.body);
  comment.save(function(err) {console.log(err);
    if (err) {
      return res.status(500).json([{'param':'comment','msg':'Cannot update the comment'}]);
    }
    res.json(comment);
  });
};

/**
 * Delete a comment
 */
exports.destroy = function(req, res) {
  var comment = req.comment;
  comment.remove(function(err) {
    if (err) {
      return res.status(500).json([{'param':'comment','msg':'Cannot delete the comment'}]);
    }
    // TODO no element found in the browser
    res.sendStatus(204);
  });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
  res.json(req.comment);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {console.log( decodeURIComponent(req.params.url));
  var url =  decodeURIComponent(req.params.url);
  Comment.find({ url: url }).sort('-created').populate('user', 'name username').exec(function(err, comments) {
    if (err) {
      return res.status(500).json([{'param':'comments','msg':'Cannot list the comments'}]);
    }
    res.json(comments);
  });
};
