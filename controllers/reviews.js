const Car = require('../models/car');

async function deleteReview(req, res) {
    const car = await Car.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!car) return res.redirect('/cars');
    car.reviews.remove(req.params.id);
    await car.save();
    res.redirect(`/cars/${car._id}`);
  }

async function create(req, res) {
    const car = await Car.findById(req.params.id);
  
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    car.reviews.push(req.body);
    try {
      await car.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/cars/${car._id}`);
  }

  module.exports = {
    create,
    delete: deleteReview
  };
  