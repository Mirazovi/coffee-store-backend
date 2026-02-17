const express = require("express");
const router = express.Router();

const {
  getAllCoffees,
  getSingleCoffee,
  addCoffee,
  updateCoffee,
  deleteCoffee,
} = require("../controllers/coffee.controller");

router.get("/coffees", getAllCoffees);
router.get("/coffees/:id", getSingleCoffee);
router.post("/coffees", addCoffee);
router.put("/coffees/:id", updateCoffee);
router.delete("/coffees/:id", deleteCoffee);

module.exports = router;
