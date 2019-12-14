const { Schema } = require("mongoose");

const SellerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
});

module.exports = SellerSchema;
