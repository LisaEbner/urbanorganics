const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  products: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    count: {
      type: Number
    }
  }]
});

module.exports = OrderSchema;
