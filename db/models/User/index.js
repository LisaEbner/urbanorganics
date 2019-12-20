const { Schema, model } = require("mongoose");

const validator = require('validator');

const strongPassword = new RegExp(/^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%&+=|^$*-]).{8,}/g);

const bcrypt = require('bcrypt');

const AddressSchema = require("./Address.js");

const PaymentMethodSchema = new Schema({

});

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: {
      validator: v => validator.isEmail(v),
      message: props => `${props.value} is not a valid email`
    },
    required: true,
    trim: true
  },
  password: {
    type: String,
    validate: {
      validator: function(v) {
        return (this.isModified("password") ? strongPassword.test(v) : true);
      },
      message: "not a strong password"
    },
    required: true
  },
  name: {
    first: {
      type: String,
      required: true,
      trim: true
    },
    last: {
      type: String,
      required: true,
      trim: true
    }
  },
  addresses: [AddressSchema],
  phone: {
    type: String,
    validate: {
      validator: v => validator.isMobilePhone(v),
      message: props => `${props.value} is not a valid phone number`
    },
    trim: true
  },
  paymentMethods: [PaymentMethodSchema],
  cart: {
    type: Map,
    of: {
      count: {
        type: Number,
        require: true,
        min: 1
      }
    },
    validate: {
      validator: async function(cart) {
        if (!this.isModified("cart")) return;
        for (const [id] of cart) {
          if (!product) return false;
        }
        return true;
      },
      message: "a product does not exist"
    }
  }
});

UserSchema.virtual('emailMasked')
  .get(function() {
    const match = /(..)(.+)(@.+\..+)/.exec(email);
    return match[1] + '*'.repeat(match[2].length) + match[3];
  });

UserSchema.virtual('fullName')
  .get(function() {
    return `${this.name.first} ${this.name.last}`;
  });

UserSchema.methods.checkPassword = function(plaintext) {
  return bcrypt.compare(plaintext, this.password);
};

UserSchema.methods.addToCart = async function(products) {
  if (typeof products !== "object") throw TypeError("products must be an object");

  const entries = (
    products instanceof Map ?
      products.entries() :
      Object.entries(products)
  );
  for (const [id, data] of entries) {
    if (typeof data !== "object") throw TypeError(`data for ${id} is not an object`);
    const product = await model("Product").findById(id);
    if (!product) throw Error(`no product with id ${id}`);
    this.cart.set(id, data);
  }
};

UserSchema.pre("validate", async function() {
  if (this.isModified("cart"))
    for (const [id, item] of this.cart) {
      if (!item || item.count > 0) continue;
      this.cart.delete(id);
    }
});

UserSchema.post("validate", async function() {
  if (this.isModified("password")) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

module.exports = UserSchema;