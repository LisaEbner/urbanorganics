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

const validator = require('validator');
const strongPassword = new RegExp(/^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%&+=|^$*-]).{8,}/g);

UserSchema.statics.parse = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) reject("Bad Request");

    const { email, password, name } = data;
    if (typeof email !== "string" || typeof password !== "string") reject("Bad Request");
    if (typeof name !== "object" || Array.isArray(name)) reject("Bad Request");

    const { first, last } = name;
    if (typeof first !== "string" || typeof last !== "string") reject("Bad Request");

    if (!validator.isEmail(email)) resolve();
    if (!password.match(strongPassword)) resolve();
    if (first.length < 1 || last.length < 1) resolve();

    resolve(
      {
        email,
        password,
        name: { first, last }
      }
    );
  });
}

module.exports = UserSchema;