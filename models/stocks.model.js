const request = require('request');
var db = require('../db');
var stockUrl = 'http://dev.markitondemand.com/MODApis/Api/Quote/json?symbol=';
var ticker = 'FB';

const stocksModel = {};

stocksModel.getStocks = (callback) => {
  request(stockUrl + ticker, function(err, request, results) {
    callback(JSON.parse(results));
  });
}

module.exports = {
  stocksModel: stocksModel
}
