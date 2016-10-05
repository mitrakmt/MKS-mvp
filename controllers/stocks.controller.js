const stocksModel = require('../models').stocksModel;

const stocksController = {};

stocksController.GET = (req, res) => {

  stocksModel.getStocks((results) => {
    console.log("REQ", req)
    console.log("TICKER", ticker);
    res.json({
      results: results
    });
  }, ticker);
};

stocksController.POST = (req, res) => {
  res.json({
    message: 'stocks POST'
  })
}

module.exports = {
  stocksController: stocksController
}
