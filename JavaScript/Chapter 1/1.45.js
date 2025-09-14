function abs(x) {
  return x >= 0 ? x : -x;
}

const tolerance = 0.00001;

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }

  function try_with(guess) {
    const next = f(guess);
    return close_enough(guess, next) ? next : try_with(next);
  }

  return try_with(first_guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function average_damp(f) {
  return x => average(x, f(x));
}

function compose(f, g) {
  return x => f(g(x));
}

function repeated(f, n) {
  return n === 1 ? f : compose(f, repeated(f, n - 1));
}

function nth_root(x, n) {
  return fixed_point(
    repeated(average_damp, math_floor(math_log(n) / math_log(2)))(
      y => x / math_pow(y, n - 1)
    ),
    1.0
  );
}

nth_root(4, 2); // 2.000000000000002