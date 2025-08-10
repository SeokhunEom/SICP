function product(term, a, next, b) {
  return a > b ? 1 : term(a) * product(term, next(a), next, b);
}

function product_iter(term, a, next, b) {
  function iter(a, result) {
    return a > b ? result : iter(next(a), term(a) * result);
  }
  return iter(a, 1);
}

function inc(x) {
  return x + 1;
}

function identity(x) {
  return x;
}

function factorial(n) {
  return product(identity, 1, inc, n);
}


function pi() {
  function term(k) {
    const r = k % 2;
    return (k + 2 - r) / (k + 1 + r);
  }
  return 4 * product(term, 1, inc, 100);
}

pi(); // 3.1570301764551645

