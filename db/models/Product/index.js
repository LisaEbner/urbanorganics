const { Schema } = require("mongoose");

const ProductSchema = new Schema({
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
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller'
  },
  filters: [{
    type: Schema.Types.ObjectId,
    ref: 'Filter'
  }]
});

module.exports = ProductSchema;
