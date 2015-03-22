'use strict';
var db = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/react-expresso-prod';
    
module.exports = {
  db:db,
  app: {
    name: 'React Expresso'
  }
};
