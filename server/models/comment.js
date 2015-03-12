'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var CommentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
});

/**
 * Validations
 */

CommentSchema.path('text').validate(function(text) {
  return !!text;
}, 'Text cannot be empty');

CommentSchema.path('author').validate(function(author) {
  return !!author;
}, 'Author cannot be empty');

CommentSchema.path('url').validate(function(url) {
  return !!url;
}, 'Url cannot be empty');

/**
 * Statics
 */
CommentSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Comment', CommentSchema);
