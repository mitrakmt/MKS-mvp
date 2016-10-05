const newsModel = require('../models').newsModel;
const url = require('url');
const path = require('path');
const _ = require('lodash');

const newsController = {};

newsController.GET = (req, res) => {
  let url = req._parsedOriginalUrl.path;
  if (_.includes(url, 'financial')) {
    newsModel.getFinancialNews((results) => {
      res.json({
        results: results
      });
    });
  } else if (_.includes(url, 'tech')) {
    newsModel.getTechNews((results) => {
      res.json({
        results: results
      });
    });
  } else {
    newsModel.getBusinessNews((results) => {
      res.json({
        results: results
      });
    });
  }
};

newsController.POST = (req, res) => {
  res.json({
    message: 'news POST'
  })
}

module.exports = {
  newsController: newsController
}
