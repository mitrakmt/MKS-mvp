const request = require('request');
var db = require('../db');
var User = require('../db').User;

const usersModel = {};

usersModel.getUsers = (callback) => {

};

usersModel.postUsers = (callback) => {
  var collection = mongo.DB.collection('Users');

  var chris = new User({
    name: 'Chris',
    username: 'sevilayha',
    password: 'password'
  });

  collection.insert(chris)

  console.log('User saved successfully!');
});

// db.insert(Users, {name: "Michael", password: "TESTING"});
  callback();
}

module.exports = {
  usersModel: usersModel
}
