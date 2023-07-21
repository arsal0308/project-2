const Car = require('../models/car');
      
function deleteCar(req, res) {
    Car.deleteOne(req.params.id);
    res.redirect('/cars');
  }

function create(req, res) {
    console.log(req.body);
    res.redirect('/cars');
  }

  function newCar(req, res) {
    res.render('cars/new', { title: 'New Car' });
  }

function show(req, res) {
    res.render('cars/show', {
      car: Car.getOne(req.params.id),
      title: 'Car Details'
    });
  }

function index(req, res) {
    res.render('cars/index', {
        cars: Car.getAll(),
        title: 'All Cars'
    });
  }


  module.exports = {
    index,
    show,
    new: newCar,
    create,
    delete: deleteCar
  };