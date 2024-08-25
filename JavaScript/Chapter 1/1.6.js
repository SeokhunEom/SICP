function conditional(predicate, thenClause, elseClause) {
  return predicate ? thenClause : elseClause;
}

function is_good_enough(guess, x) {
  return Math.abs(guess * guess - x) < 0.001;
}

function improve(guess, x) {
  return (guess + x / guess) / 2;
}

function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x)
  );
}

function sqrt(x) {
  return sqrt_iter(1.0, x);
}

console.log(sqrt(9));

// infinite loop
// because sqrt_iter is called before conditional is evaluated
