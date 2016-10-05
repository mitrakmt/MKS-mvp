const express = require('express')
const newsRouter = express.Router();
const newsController = require('../controllers').newsController;

newsRouter.get('/tech', newsController.GET);
newsRouter.get('/business', newsController.GET);
newsRouter.get('/financial', newsController.GET);
newsRouter.post('/', newsController.POST);

module.exports = {
  newsRouter: newsRouter
}
