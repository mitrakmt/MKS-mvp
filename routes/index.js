const express = require('express');

// Require routing
const usersRouter = require('./users.router').usersRouter;
const stocksRouter = require('./stocks.router').stocksRouter;
const newsRouter = require('./news.router').newsRouter;
const rootRouter = express.Router();

// Routing throughout entire app
rootRouter.use('/users', usersRouter);
rootRouter.use('/news', newsRouter);
rootRouter.use('/stocks', stocksRouter);

// Export root router
module.exports = {
  rootRouter: rootRouter
}
