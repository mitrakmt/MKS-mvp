const express = require('express');
const stocksRouter = express.Router();
const stocksController = require('../controllers').stocksController;

stocksRouter.get('/', stocksController.GET);
stocksRouter.post('/', stocksController.POST);

module.exports = {
  stocksRouter: stocksRouter
}
