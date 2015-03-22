'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs'),
	http = require('http'),
	express = require('express'),
	app = express(),
	favicon = require('serve-favicon'),
	path = require('path'),
	errorHandler = require('errorhandler'),
	sio = require('socket.io'),
	configs = require('./server/config/config');
	
// Manage server and socket
var server = http.createServer(app);
var io = sio(server);	
	

// Bootstrap db connection
var db = require('./server/config/db')(configs);
 
// Bootstrap models
var modelsPath = path.join(configs.serverPath+ '/models');
fs.readdirSync(modelsPath).forEach(function (file) {
	require(modelsPath + '/' + file);
});

require(configs.serverPath+'/config/express')(configs,app,db);

 if (app.get('env') === 'development') {
 	app.disable('etag');
	app.use(require('connect-livereload')());
}
app.set('port', process.env.PORT || 3000);

app.use(favicon(path.join(configs.rootPath,configs.releasePath,'favicon.ico')));
app.use(express.static( path.join(configs.rootPath, configs.releasePath)));

// Routes
require(configs.serverPath+'/routers/comments')(app);

app.use(function(err, req, res, next) {
	// If the error object doesn't exists
	if (!err){
		return next();
	}
	// Log it
	console.error(err.stack);
	if (err.status === 405) {
    		res.status(405).send('Method Not Allowed');
  	}
  	res.status(500).send('Internal Server Error');
});

// Assume 404 since no middleware responded
app.use(function(req, res) {
	// Log it
	console.error(req.url);
	res.status(404).send('Not Found');
});

if (app.get('env') === 'development') {
	app.use(errorHandler());
}



io.on('connection', require(configs.serverPath+'/routers/socket')(io));

server.listen(app.get('port'), function () {
	console.log( 'Express started on http://localhost:' + 
		app.get('port') + ' env: ' + app.get('env') +  '; press Ctrl-C to terminate.' );
});

exports = module.exports = app;
