var express = require('express');
var app = express();
var db = require('./db');
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
var UserController = require('./user/UserController');
app.use('/users', UserController);
global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;