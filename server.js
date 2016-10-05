const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var db = require('./db');

// Port number
const port = 4000;

// User bodyParser in app
app.use(bodyParser.json());

// Server static files
app.use('/', express.static(__dirname + '/client'));

const rootRouter = require('./routes').rootRouter;

app.use('/api', rootRouter);

// Start server
app.listen(port);
console.log(`Server listening on port ${port}`)
