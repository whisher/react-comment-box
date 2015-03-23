'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Comment = mongoose.model('Comment');


module.exports = function(io){
	return function (socket) {
		console.log('a user connected');
		socket.on('comment sent', function(data){
			var comment = new Comment(data);
    			comment.save(function(err) {
	      			if (err) {
	        				return io.emit('comment error',err);
	      			}
	      			socket.emit('comment added socket', comment);
	      			socket.broadcast.emit('comment added other', comment);
      			});
		});
	};
};



