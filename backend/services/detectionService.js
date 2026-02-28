function analyzeURL(url) {
  let score = 0;

  if (url.includes("login")) score += 2;
  if (url.includes("verify")) score += 2;
  if (url.includes("@")) score += 3;
  if (url.length > 75) score += 1;

  let result = "Safe";

  if (score >= 3) {
    result = "Suspicious";
  }

  return { score, result };
}

module.exports = { analyzeURL };