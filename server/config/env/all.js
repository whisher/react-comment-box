'use strict';

var path = require('path'),
  rootPath =  path.resolve(__dirname, '../../../'),
  serverPath = rootPath + '/server',
  staticPath = rootPath + '/build'; 

module.exports = {
  rootPath: rootPath,
  serverPath: serverPath,
  staticPath: staticPath,
  http: {
    port: process.env.PORT || 3000
  },
  https: {
    port: false,
    // Paths to key and cert as string
    ssl: {
      key: '',
      cert: ''
    }
  },
  hostname: process.env.HOST || process.env.HOSTNAME,
  db: process.env.MONGOHQ_URL,
  templateEngine: 'ejs',
  // The secret should be set to a non-guessable string that
  // is used to compute a session hash
  apiSecret: 'React-Expresso',
  sessionSecret: 'React-Expresso',
  // Time Expiration token
  expiresInMinutes: 60*5,
  // The name of the MongoDB collection to store sessions in
  sessionCollection: 'sessions',
 // The session cookie settings
  sessionCookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: null
  },
  sessionName: 'connect.sid',
  niceErrorPage: true
};
