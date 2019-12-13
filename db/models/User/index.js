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
    if (!data) reject("no data to parse");

    const { email, password, name } = data;

    let typeError = "";
    if (typeof email !== "string") typeError += "email is not a string";
    if (typeof password !== "string") typeError += `${typeError ? "AND " : ""}password is not a string`;
    if (typeof name !== "object") typeError += `${typeError ? "AND " : ""}name is not an object`;
    else if (Array.isArray(name)) typeError += `${typeError ? "AND " : ""}name is an array`;
    else {
      const { first, last } = name;
      if (typeof first !== "string") typeError += `${typeError ? "AND " : ""}name.first is not a string`;
      if (typeof last !== "string") typeError += `${typeError ? "AND " : ""}name.first is not a string`;
    }
    if (typeError) reject(typeError);

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