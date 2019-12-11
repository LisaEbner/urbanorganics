const { Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller'
  }
});

module.exports = ProductSchema;
