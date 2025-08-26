const tolerance = 0.00001;

function abs(x) {
  return x >= 0 ? x : -x;
}

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }

  function try_with(guess) {
    const next = f(guess);
    display(next);
    return close_enough(guess, next) ? next : try_with(next);
  }

  return try_with(first_guess);
}

function f1() {
  return fixed_point(x => math_log(1000)/math_log(x), 2.0);
}

function average(x, y) {
  return (x + y) / 2;
}

function f2() {
  return fixed_point(x => average(math_log(1000)/math_log(x), x), 2.0);
}

f1();
// 35 steps
// 4.555532270803653

f2(); 
// 10 steps
// 4.555537551999825