const Car = require('../models/car');

function index(req, res) {
    res.render('cars/index', {
      cars: Car.getAll()
    });
  }


  module.exports = {
    index
  };