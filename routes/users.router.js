const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers').usersController;

usersRouter.get('/login', function () {
  // render login page
});

usersRouter.post('/login', usersController.loginUser);

usersRouter.get('/signup', function () {
  // render signup page
});
usersRouter.post('/signup', usersController.signupUser);

module.exports = {
  usersRouter: usersRouter
}
