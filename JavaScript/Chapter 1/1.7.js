function is_good_enough(guess, x) {
  const tolerance = (9 / 4) * Math.pow(2, -52);
  return guess === 0 || Math.abs(improve(guess, x) - guess) < tolerance * guess;
}

function improve(guess, x) {
  return (guess + x / guess) / 2;
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
  return sqrt_iter(1.0, x);
}

console.log(sqrt(0.0001));
