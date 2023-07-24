require('dotenv').config();
require('./config/database');

const Car = require('./models/car');

let cars = await Car.find({});
console.log(cars);
