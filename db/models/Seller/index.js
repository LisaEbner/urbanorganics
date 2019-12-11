const { Schema } = require("mongoose");

const SellerSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = SellerSchema;
