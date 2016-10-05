const request = require('request');
var db = require('../db');

const usersModel = {};

usersModel.getUsers = (callback) => {

};

usersModel.postUsers = (callback) => {
  new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  });
}

module.exports = {
  usersModel: usersModel
}
