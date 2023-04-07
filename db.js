const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connectDB() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('MongoDB connected successfully !');
  });

  connection.on('error', () => {
    console.log("Error: MongoDB didn't connect");
  });
}

connectDB();

module.exports = mongoose;
