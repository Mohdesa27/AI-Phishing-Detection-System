const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  url: String,
  result: String,
  score: Number,
  checkedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Scan", scanSchema);