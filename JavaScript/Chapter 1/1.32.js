function accumulate(combiner, null_value, term, a, next, b) {
  return a > b ? null_value : combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b));
}

function accumulate_iter(combiner, null_value, term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), combiner(result, term(a)));
  }
  return iter(a, null_value);
}

function sum(term, a, next, b) {
  function add(a, b) {
    return a + b;
  }
  return accumulate(add, 0, term, a, next, b);
}

function product(term, a, next, b) {
  function multiply(a, b) {
    return a * b;
  }
  return accumulate(multiply, 1, term, a, next, b);
}

