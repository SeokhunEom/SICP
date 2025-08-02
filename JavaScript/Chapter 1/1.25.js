function expmod(base, exp, m) {
  return fast_expt(base, exp) % m;
}

function fast_expt(base, exp) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? square(fast_expt(base, exp / 2))
    : base * fast_expt(base, exp - 1);
}

function is_even(x) {
  return x % 2 === 0;
}

function square(x) {
  return x * x;
}
