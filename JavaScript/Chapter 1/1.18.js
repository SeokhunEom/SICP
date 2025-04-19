function double(x) {
  return x * 2;
}

function halve(x) {
  return x / 2;
}

function fastMultiply(a, b) {
  function iter(a, b, c) {
    if (b === 0) {
      return c;
    } else if (b % 2 === 0) {
      return iter(double(a), halve(b), c);
    } else {
      return iter(a, b - 1, a + c);
    }
  }

  return iter(a, b, 0);
}

console.log(fastMultiply(5, 7)); // 35
