const { Schema } = require("mongoose");

const validator = require('validator');
const strongPassword = new RegExp(/^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%&+=|^$*-]).{8,}/g);

const bcrypt = require('bcrypt');

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    unique: true,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    min: 1
  }
})

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: {
      validator: v => validator.isEmail(v),
      message: props => `${props.value} is not a valid email`
    },
    required: true
  },
  password: {
    type: String,
    validate: {
      validator: v => strongPassword.test(v),
      message: "not a strong password"
    },
    required: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address"
  },
  phone: {
    type: String,
    validate: {
      validator: v => validator.isMobilePhone(v),
      message: props => `${props.value} is not a valid phone number`
    }
  },
  cart: [CartItemSchema]
});

UserSchema.pre("validate", async function() {
  if (this.isModified("cart")) {
    this.cart = this.cart.filter(item => item.count > 0);
  }
});

UserSchema.post("validate", async function() {
  if (this.isModified("password")) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

UserSchema.virtual('fullName').get(function() {
  return `${this.name.first} ${this.name.last}`;
});

UserSchema.methods.checkPassword = function(plaintext) {
  return bcrypt.compare(plaintext, this.password);
};

module.exports = UserSchema;