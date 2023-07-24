const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const carSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  price: Number,
  bodyStyle: String,
  exterior: String,
  interior: String,
  fuelEconomy: String,
  engine: String,
  transmission: String,
  vehicleCondition: String,
  Available: { type: Boolean, default: true },
  reviews: [reviewSchema]
}, {
  timestamps: true
});
	

module.exports = mongoose.model('Car', carSchema);