const { Schema } = require("mongoose");

const FliterSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  }
});

FliterSchema.virtual('products')
  .get(function() {
    this.populate({
      ref: "Product"
    })
  });



module.exports = FliterSchema;