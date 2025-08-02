function timed_prime_test(n) {
  display(n);
  return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
  return fast_is_prime(n, 5) ? report_prime(get_time() - start_time) : true;
}

function report_prime(elapsed_time) {
  display(" *** ");
  display(elapsed_time);
}

function fast_is_prime(n, times) {
  return times === 0
    ? true
    : fermat_test(n)
    ? fast_is_prime(n, times - 1)
    : false;
}

function fermat_test(n) {
  function try_it(a) {
    return expmod(a, n, n) === a;
  }
  return try_it(1 + math_floor(math_random() * (n - 1)));
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

function search_for_primes(a, b) {
  function iter(current, end) {
    current <= end ? timed_prime_test(current) : iter(current + 2, end);
  }
  iter(a % 2 === 1 ? a : a + 1, b);
}

search_for_primes(1000, 1000000);
