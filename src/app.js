const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

/* =====================
   MIDDLEWARE
===================== */
app.use(cors());
app.use(express.json());

/* =====================
   MONGODB CONNECTION
===================== */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected to coffeeDB"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

/* =====================
   ROUTES
===================== */
const coffeeRoutes = require("./routes/coffee.routes");
app.use(coffeeRoutes);

module.exports = app;
