const mongoose = require("mongoose");

module.exports = {
  User: mongoose.model("User", require("./User")),
  Product: mongoose.model("Product", require("./Product")),
  Filter: mongoose.model("Filter", require("./Filter")),
  Seller: mongoose.model("Seller", require("./Seller")),
  Order: mongoose.model("Order", require("./Order"))
}