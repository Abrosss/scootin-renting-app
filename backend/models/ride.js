const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  duration:{
    type: Number,
  },
  distance:{
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Ride", RideSchema);
