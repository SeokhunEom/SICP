function square(x) {
  return x * x;
}

function fast_expt(b, n) {
  function iter(a, b, n) {
    if (n === 0) {
      return a;
    } else if (n % 2 === 0) {
      return iter(a, square(b), n / 2);
    } else {
      return iter(a * b, b, n - 1);
    }
  }

  return iter(1, b, n);
}

console.log(fast_expt(2, 10)); // 1024
