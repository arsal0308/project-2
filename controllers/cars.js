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
  res.render('cars/edit', { title: 'Edit Car', car});
}

// async function updateOne(req, res) {
//   console.log(“====updateOne reached===”)
//    console.log(req.body);
//    console.log(req.params);
  
//   const dbres = await Car.updateOne({ id: req.params.id}, req.body);
//     console.log(dbres);
//     res.redirect(`cars/${req.params.id}`);
//   }
  async function updateOne(req, res) {
    try {
      const updatedCar = await Car.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        req.body,
        {new: true}
      );
      return res.redirect(`/cars/${updatedCar._id}`);
    } catch (e) {
      console.log(e.message);
      return res.redirect('/cars');
    }
  }

function newCar(req, res) {
  res.render('cars/new', { title: 'Add Car'});
}

async function create(req, res) {
  if (req.body.available === 'no') {
    req.body.available = false
  }
  try {
    const car = await Car.create(req.body);
    res.redirect(`/cars/${car._id}`);
  } catch (err) {
    console.log(err);
    res.render('cars/new', { errorMsg: err.message });
  }
}

async function deleteOne(req, res) {
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
  updateOne,
  new: newCar,
  create,
  delete: deleteOne
};
