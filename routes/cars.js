var express = require('express');
var router = express.Router();

  // All actual paths start with "/cars"
  var carsCtrl = require('../controllers/cars');

  // GET /cars
  router.get('/', carsCtrl.index);

module.exports = router;
