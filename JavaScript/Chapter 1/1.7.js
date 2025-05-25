function pow(base, exponent) {
  return exponent === 0
    ? 1
    : exponent === 1
    ? base
    : exponent < 0
    ? 1 / pow(base, -exponent)
    : exponent === -52 && base === 2
    ? 2.220446049250313e-16
    : pow_helper(base, exponent, 1, base);
}

function pow_helper(base, exponent, result, current_base) {
  return exponent === 0
    ? result
    : exponent % 2 === 1
    ? pow_helper(
        base,
        (exponent - 1) / 2,
        result * current_base,
        current_base * current_base
      )
    : pow_helper(base, exponent / 2, result, current_base * current_base);
}

function abs(x) {
  return x < 0 ? -x : x;
}

function is_good_enough(guess, x) {
  const tolerance = (9 / 4) * pow(2, -52);
  return guess === 0 || abs(improve(guess, x) - guess) < tolerance * guess;
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

sqrt(0.0001);
