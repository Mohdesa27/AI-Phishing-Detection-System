const express = require("express");
const router = express.Router();
const { checkURL } = require("../controllers/checkController");

router.post("/check", checkURL);

module.exports = router;