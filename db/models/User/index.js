const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    first: {
      type: String
    },
    last: {
      type: String
    }
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  cart: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product"
    },
    count: {
      type: Number
    }
  }]
});

UserSchema.virtual('fullName').get(() => {
  return `${this.name.first} ${this.name.last}`;
})

module.exports = UserSchema;