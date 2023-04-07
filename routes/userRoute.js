const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.post('/login', async (req, res) => {
  const { userName, password } = req.body;

  try {
    const userResp = await userModel.findOne({ userName, password });
    if (userResp) {
      res.status(200).json(userResp);
    } else {
      res.status(400).json(error);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send('User registered successfully');
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
