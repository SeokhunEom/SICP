// p' = p^2 + q^2
// q' = 2pq + q^2

function fib(n) {
  function iter(a, b, p, q, count) {
    if (count === 0) {
      return b;
    } else if (count % 2 === 0) {
      const nextP = p * p + q * q;
      const nextQ = q * q + 2 * p * q;
      return iter(a, b, nextP, nextQ, count / 2);
    } else {
      const nextA = b * q + a * q + a * p;
      const nextB = b * p + a * q;
      return iter(nextA, nextB, p, q, count - 1);
    }
  }

  return iter(1, 0, 0, 1, n);
}

fib(10); // 55
