function expmod(base, exp, m) {
  return exp === 0
    ? 1
    : is_even(exp)
    ? (expmod(base, exp / 2, m) * expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
}

function is_even(x) {
  return x % 2 === 0;
}
