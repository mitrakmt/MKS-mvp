const express = require('express');
var Router = require('express').Router();

// Require routing
const usersRouter = require('./users.router').usersRouter;
const stocksRouter = require('./stocks.router').stocksRouter;
const newsRouter = require('./news.router').newsRouter;
const rootRouter = express.Router();

// Routing throughout entire appd
rootRouter.use('/users', usersRouter);
rootRouter.use('/news', newsRouter);
rootRouter.use('/stocks', stocksRouter);

// Export root router
module.exports = {
  rootRouter: rootRouter
}
