const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    alias: "code"
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    default: 1
  },
  description: {
    type: String
  }
});

const model = mongoose.model("Product", schema);

module.exports = model;
