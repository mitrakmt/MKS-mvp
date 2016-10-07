var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
var db = mongoose.connection;
var url = 'mongodb://localhost/alfredDb';

db.on('error', console.error);
db.once('open', function() {
  var userSchema = new mongoose.Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });

  var User = mongoose.model('User', userSchema);
});

mongoose.connect('mongodb://localhost/alfredDb');
