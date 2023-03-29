import selectedWeights from "./weights.js";
import selectedPoints from "./points.js";

function GaussIntegration(f, n, a, b) {
  const weights = selectedWeights(n);
  const points = selectedPoints(n);

  let int = 0;
  for (let i = 0; i < n; i++) {
    int +=
      ((b - a) / 2) * (f(((b - a) / 2) * points[i] + (a + b) / 2) * weights[i]);
  }
  return int;
}

export default GaussIntegration;
