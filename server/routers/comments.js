'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  comments = require('../controllers/comments');

function isMongoId(req, res, next) {
  if ((_.size(req.params) === 1) && (!mongoose.Types.ObjectId.isValid(_.values(req.params)[0]))) {
      return res.status(500).send('Parameter passed is not a valid Mongo ObjectId');
  }
  next();
};

module.exports = function(app, io) {

  // Send available options on OPTIONS requests
  app.options( '/api/comments', function (req, res) {
    res.send(['GET', 'PUT', 'DELETE', 'OPTIONS']);
  });

  // Root routing
  app.route('/api/comments/:url')
    .get(comments.all);

  app.route('/api/comments').post(comments.create)
    // 405 Method Not Allowed
    .all(function (req, res, next) {
      var err = new Error();
      err.route = '/api/comments';
      err.status = 405;
      next(err);
    });

  app.route('/api/comments/:commentId')
    .get(isMongoId, comments.show)
    .put(isMongoId,  comments.update)
    .delete(isMongoId, comments.destroy);

  // Setting up the articleId param
  app.param('commentId', comments.comment);

};