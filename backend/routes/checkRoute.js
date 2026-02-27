const express = require("express");
const router = express.Router();

router.post("/check", (req, res) => {
  const { url } = req.body;

  if (url.includes("login") || url.includes("verify")) {
    return res.json({ status: "⚠ Suspicious Website" });
  }

  res.json({ status: "✅ Safe Website" });
});

module.exports = router;