const mongoose = require("../db/connection");

const materialSchema = new mongoose.Schema({
  name: String,
  url: String
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
