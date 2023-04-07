const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


      car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      price : {type : Number},
      model : {type : String},
      power: {type : String},
      mileage : {type : String},
      maxSpeed : {type : String},


},
  {timestamps : true}
)

const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel