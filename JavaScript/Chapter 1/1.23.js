function smallest_divisor(n) {
  return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, next(test_divisor));
}

function divides(a, b) {
  return b % a === 0;
}

function next(x) {
  return x === 2 ? 3 : x + 2;
}

function square(x) {
  return x * x;
}
