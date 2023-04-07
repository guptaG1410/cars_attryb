const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const carData = require('./data/carData.js');
const dbConnection = require('./db');
const carRoute = require('./routes/carRoute');
const userRoute = require('./routes/userRoute');
const bookingRoute = require('./routes/bookingRoute')

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/cars/getAllCars', (req, res) => {
  console.log('Data is fetched');
  res.status(201).json(carData);
});

app.use('/api/cars/', carRoute);
app.use('/api/users/', userRoute);
app.use('/api/bookings/', bookingRoute);

app.get('/', (req, res) => {
  res.status(200).json('Hey people :)');
});




const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
