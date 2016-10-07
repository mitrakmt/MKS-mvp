const express = require('express');
const stocksRouter = express.Router();
const stocksController = require('../controllers').stocksController;

stocksRouter.get('/:ticker', stocksController.GET);
stocksRouter.post('/', stocksController.POST);

module.exports = {
  stocksRouter: stocksRouter
}
