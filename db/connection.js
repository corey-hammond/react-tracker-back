const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jobTrackerDB");

mongoose.Promise = Promise;

module.exports = mongoose;