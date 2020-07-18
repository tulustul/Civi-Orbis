// derived from https://github.com/mock-end/random-normal/blob/master/index.js
export function randomNormal(mu: number, sigma: number) {
  // The Marsaglia Polar method
  let u, v, s: number;

  do {
    // U and V are from the uniform distribution on (-1, 1)
    u = Math.random() * 2 - 1;
    v = Math.random() * 2 - 1;

    s = u * u + v * v;
  } while (s >= 1);

  // Compute the standard normal variate
  const norm = u * Math.sqrt((-2 * Math.log(s)) / s);

  // Shape and scale
  return sigma * norm + mu;
}
