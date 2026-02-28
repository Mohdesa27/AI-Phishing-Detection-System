const Scan = require("../models/Scan");
const { analyzeURL } = require("../services/detectionService");

const checkURL = async (req, res) => {
  try {
    const { url } = req.body;

    const { score, result } = analyzeURL(url);

    await Scan.create({
      url,
      result,
      score
    });

    res.json({ result, score });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { checkURL };