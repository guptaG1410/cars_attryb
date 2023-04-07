const express = require('express');
const router = express.Router();
const carModel = require('../models/carModel');

router.get('/getallcars', async (req, res) => {
  try {
    const cars = await carModel.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/addcar', async (req, res) => {
  try {
    const newCar = new carModel(req.body);
    await newCar.save();
    res.send('Car added successfully');
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/editcar', async (req, res) => {
  try {
    const car = await carModel.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.price = req.body.price;
    car.power = req.body.power;
    car.mileage = req.body.mileage;
    car.maxSpeed = req.body.maxSpeed;
    car.color = req.body.color;

    await car.save();

    res.send('Car details updated successfully');
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/deletecar', async (req, res) => {
  try {
    await Car.findOneAndDelete({ _id: req.body.carid });

    res.send('Car deleted successfully');
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
