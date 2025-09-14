function iterative_improve(good_enough, improve) {
  function iter(guess) {
    return good_enough(guess) ? guess : iter(improve(guess));
  }
  return iter;
}

function sqrt() {
  return iterative_improve(
    guess => abs(square(guess) - 2) < tolerance,
    guess => average(guess, 2 / guess)
  )(1.0);
}

function fixed_point(f, first_guess) {
  return iterative_improve(
    guess => abs(f(guess) - guess) < tolerance,
    guess => f(guess)
  )(first_guess);
}
