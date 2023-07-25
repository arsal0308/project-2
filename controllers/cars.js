const Car = require('../models/car');

async function index(req, res) {
  const cars = await Car.find({});
  res.render('cars/index', { title: 'All Cars', cars });
}
async function show(req, res) {
  const car = await Car.findById(req.params.id);
  res.render('cars/show', { title: 'Car Detail', car });
}
async function edit(req, res) {
  const car = await Car.findById(req.params.id);
  console.log(car);
  res.render('cars/edit', { title: 'Edit Car', car});
}

async function update(req, res) {
  Car.update(req.params.id, req.body);
  res.redirect(`cars/${req.params.id}`);
}

function newCar(req, res) {
  res.render('cars/new', { title: 'Add Car'});
}

async function create(req, res) {
  req.body.available = !!req.body.available;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const car = await Car.create(req.body);
    res.redirect(`/cars/${car._id}`);
  } catch (err) {
    console.log(err);
    res.render('cars/new', { errorMsg: err.message });
  }
}

async function deleteCar(req, res) {
  const car = await Car.findOne({ 'cars._id': req.params.id, 'cars.user': req.user._id });
  if (!car) return res.redirect('/cars');
  car.remove(req.params.id);
  await car.save();
  res.redirect(`/cars/${car._id}`);
}

module.exports = {
  index,
  show,
  edit,
  update,
  new: newCar,
  create,
  delete: deleteCar
};
