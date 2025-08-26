function cont_frac(n, d, k) {
  function frac(i) {
    return i === k ? 0 : n(i) / (d(i) + frac(i + 1));
  }
  return frac(1);
}

function cont_frac_iter(n, d, k) {
  function iter(i, acc) {
    return i === 0 ? acc : iter(i - 1, n(i) / (d(i) + acc));
  }
  return iter(k, 0);
}

cont_frac(i => 1, i => 1, 10); // 0.6181818181818182 ≈ 1/φ
cont_frac_iter(i => 1, i => 1, 10); // 0.6179775280898876 ≈ 1/φ
