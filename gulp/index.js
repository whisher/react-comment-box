'use strict';

var fs = require('fs'),
  tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

tasks.forEach(function (task) {
  require('./tasks/' + task);
});