const Coffee = require("../models/coffee.model");

// get all coffees
exports.getAllCoffees = async (req, res) => {
  const coffees = await Coffee.find();
  res.json(coffees);
};

// get single coffee
exports.getSingleCoffee = async (req, res) => {
  const coffee = await Coffee.findById(req.params.id);
  res.json(coffee);
};

// add coffee
exports.addCoffee = async (req, res) => {
  const coffee = await Coffee.create(req.body);
  res.status(201).json(coffee);
};

// update coffee
exports.updateCoffee = async (req, res) => {
  const { id } = req.params;

  const result = await Coffee.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.send(result);
};

// delete single coffee
exports.deleteCoffee = async (req, res) => {
  const deleted = await Coffee.findByIdAndDelete(req.params.id);
  if (deleted) {
    res.json({ success: true });
  }
};
