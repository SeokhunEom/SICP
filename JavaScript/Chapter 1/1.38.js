function cont_frac(n, d, k) {
  function frac(i) {
    return i === k ? 0 : n(i) / (d(i) + frac(i + 1));
  }
  return frac(1);
}

function approx_e(k) {
  function d(i) {
    return i % 3 === 0 ? (2 / 3) * (i + 1) : 1;
  }
  return 2 + cont_frac(x => 1, d, k);
}

approx_e(1000); // 2.5673757699776822 ≈ e
