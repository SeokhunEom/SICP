function pair(a, b) {
  return math_pow(2, a) * math_pow(3, b);
}

function count_divides(a, b) {
  function count(a, n) {
    const q = a / b;
    if (q === math_floor(q)) {
      return count(q, n + 1);
    } else {
      return n;
    }
  }
  return count(a, 0);
}

function head(z) {
  return count_divides(z, 2);
}

function tail(z) {
  return count_divides(z, 3);
}

// Example
const myPair = pair(3, 4);
head(myPair); // 3
tail(myPair); // 4