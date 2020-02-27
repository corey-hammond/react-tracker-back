const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name for your material"]
  },
  url: String
});

module.exports = mongoose.model("Material", MaterialSchema);
