function cont_frac(n, d, k) {
  function frac(i) {
    return i === k ? 0 : n(i) / (d(i) + frac(i + 1));
  }
  return frac(1);
}

function tan_cf(x, k) {
  return cont_frac(i => i === 1 ? x : -(x * x), i => 2 * i - 1, k);
}

tan_cf(3.141592 / 4, 10); // 0.9999996732051568 ≈ tan(π/4) = 1
