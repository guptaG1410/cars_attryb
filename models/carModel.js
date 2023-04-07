const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    power: { type: String, required: true },
    mileage: { type: String, required: true },
    maxSpeed: { type: String, required: true },
    color: String,
    description: String,
  },
  { timestamps: true }
);

const carModel = mongoose.model('cars', carSchema);

module.exports = carModel;
