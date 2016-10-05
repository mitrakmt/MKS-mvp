const request = require('request');
var db = require('../db');
const apiKey = "656fe12723b04803b15864ee52b566df";

const newsModel = {};

newsModel.getFinancialNews = (callback) => {
  request('https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=' + apiKey, function(err, request, results) {
    callback(JSON.parse(results));
  });
}

newsModel.getTechNews = (callback) => {
  request('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + apiKey, function (err, request, results) {
    callback(JSON.parse(results));
  });
}

newsModel.getBusinessNews = (callback) => {
  request('https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=' + apiKey, function (err, request, results) {
    callback(JSON.parse(results));
  });
}

module.exports = {
  newsModel: newsModel
}
