function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
  function iter(a, result) {
    return a > b ? result : (filter(a) ? iter(next(a), result) : iter(next(a), combiner(term(a), result)));
  }
  return iter(a, null_value);
}

function square(n) {
  return n * n;
}

function add(x, y) {
  return x + y;
}

function inc(x) {
  return x + 1;
}

function func1(a, b) {
  return filtered_accumulate(
    add,
    0,
    square,
    a,
    inc,
    b,
    is_prime
  );
}

function func2(n) {
  function filter(x) {
    return gcd(x, n) === 1;
  }

  return filtered_accumulate(
    add,
    0,
    identity,
    1,
    inc,
    n,
    filter
  );
}

func1(1, 10);