function sum(term, a, next, b) {
  return a > b ? 0 : term(a) + sum(term, next(a), next, b);
}

function inc(x) {
  return x + 1;
}

function simpson(f, a, b, n) {
  const h = (b - a) / n;
  function term(k) {
    const factor = k === 0 || k === n ? 1 : k % 2 === 0 ? 2 : 4;
    return f(a + k * h) * factor;
  }
  return (h / 3) * sum(term, 0, inc, n);
}

function cube(x) {
  return x * x * x;
}

simpson(cube, 0, 1, 100); // 0.24999999999999992