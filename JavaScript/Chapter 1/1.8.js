function is_good_enough(guess, x) {
  return Math.abs(guess * guess * guess - x) < 0.001;
}

function improve(guess, x) {
  return (x / (guess * guess) + 2 * guess) / 3;
}

function cube_root_iter(guess, x) {
  return is_good_enough(guess, x)
    ? guess
    : cube_root_iter(improve(guess, x), x);
}

function cube_root(x) {
  return cube_root_iter(1.0, x);
}

console.log(cube_root(8));
