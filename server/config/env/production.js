'use strict';
var db = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/angular-expresso-prod';
    
module.exports = {
  db:db,
  app: {
    name: 'React Expresso'
  }
};
