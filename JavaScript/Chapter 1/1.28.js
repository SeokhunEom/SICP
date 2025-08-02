function mod(a, n) {
  const r = a % n;
  return r >= 0 ? r : r + n;
}

function mul_mod(a, b, m) {
  function iter(a, b, res) {
    return b === 0
      ? res
      : b % 2 === 1
      ? iter(
          a >= m - a ? a - (m - a) : a + a,
          math_floor(b / 2),
          res >= m - a ? res - (m - a) : res + a
        )
      : iter(a >= m - a ? a - (m - a) : a + a, math_floor(b / 2), res);
  }
  return iter(mod(a, m), mod(b, m), 0);
}

function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

function is_even(x) {
  return x % 2 === 0;
}

function square(x) {
  return x * x;
}

function miller_rabin(n, a) {
  return expmod(a, n - 1, n) === 1;
}

function rand_between(low, high) {
  return low + math_floor(math_random() * (high - low + 1));
}

function is_prime(n, k) {
  return n === 2 ? true : n % 2 === 0 ? false : test_iterations(n, k, 0);
}

function test_iterations(n, k, i) {
  return i >= k
    ? true
    : miller_rabin(n, rand_between(2, n - 2))
    ? test_iterations(n, k, i + 1)
    : false;
}

is_prime(10007, 10); // true
is_prime(561, 10); // false
