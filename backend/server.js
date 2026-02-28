const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const emailRoutes = require("./routes/emailRoutes");
const checkRoutes = require("./routes/checkRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/email", emailRoutes);
app.use("/api", checkRoutes);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/emailDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});