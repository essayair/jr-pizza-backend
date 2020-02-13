const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  descriptiton: {
    type: String,
    default: "This is a description"
  }
});

const model = mongoose.model("Order", schema);

module.exports = model;
