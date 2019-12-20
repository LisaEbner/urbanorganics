const { Schema } = require("mongoose");

const AddressSchema = new Schema({
  line1: {
    type: String,
    required: true,
    trim: true
  },
  line2: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  postcode: {
    type: String,
    required: true,
    trim: true
  },
  district: { // county
    type: String,
    trim: true
  },
  region: { // state
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = AddressSchema;