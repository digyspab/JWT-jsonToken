var express = require('express');
var app = express();
var db = require('./db')();
var port = process.env.PORT || 3000;
// const InitiateMongoServer = require('./db')();
var AuthController = require('./auth/AuthController');
var UserController = require('./user/UserController');


app.use('/users', UserController);
app.use('/api/auth', AuthController);



app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

module.exports = app;