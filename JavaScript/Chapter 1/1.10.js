function A(x, y) {
  return y === 0 ? 0 : x === 0 ? 2 * y : y === 1 ? 2 : A(x - 1, A(x, y - 1));
}

A(1, 10); // 1024
A(2, 4); // 65536
A(3, 3); // 65536

function f(n) {
  return A(0, n);
} // 2n

function g(n) {
  return A(1, n);
} // 2^n

function h(n) {
  return A(2, n);
} // 2^(2^(2^(2...(n times))))

function k(n) {
  return 5 * n * n;
} // 5n^2
