const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema(
  {
    name: String,
    chef: String,
    price: Number,
    supplier: String,
    taste: String,
    details: String,
    photoUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coffee", coffeeSchema);
