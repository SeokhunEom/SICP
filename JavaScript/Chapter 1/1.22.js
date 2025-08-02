function timed_prime_test(n) {
  display(n);
  return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
  return is_prime(n) ? report_prime(get_time() - start_time) : true;
}

function report_prime(elapsed_time) {
  display(" *** ");
  display(elapsed_time);
}

function is_prime(n) {
  return n === smallest_divisor(n);
}

function smallest_divisor(n) {
  return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
  return b % a === 0;
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
