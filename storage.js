function saveBestScore(score) {
  let best = localStorage.getItem("bestScore");
  if (!best || score < best) {
    localStorage.setItem("bestScore", score);
  }
}

function getBestScore() {
  return localStorage.getItem("bestScore") || "--";
}
