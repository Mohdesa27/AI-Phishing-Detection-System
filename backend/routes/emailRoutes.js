const express = require("express");
const router = express.Router();
const Email = require("../models/Email");

router.post("/submit", async (req, res) => {
  try {
    const { content } = req.body;

    const newEmail = new Email({ content });
    await newEmail.save();

    res.status(201).json({ message: "Email stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;