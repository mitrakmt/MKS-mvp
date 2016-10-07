const usersModel = require('../models').usersModel;

const usersController = {};

usersController.loginUser = (req, res) => {
  usersModel.getUsers((results) => {
    res.json({
      results: results
    });
  });
};

usersController.signupUser = (req, res) => {
  console.log("HI");
  usersModel.postUsers((results) => {
    res.json({
      results: results
    });
  });
};

module.exports = {
  usersController: usersController
}
