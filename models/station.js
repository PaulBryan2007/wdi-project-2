const mongoose = require("mongoose");

const stationSchema = mongoose.Schema({
  name:        String,
  image:       String,
  lat:         String,
  lng:         String,
  description: String,
});

module.exports = mongoose.model("Station", stationSchema);
