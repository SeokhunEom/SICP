// recursive
function f1(n) {
  return n < 3 ? n : f1(n - 1) + 2 * f1(n - 2) + 3 * f1(n - 3);
}

// iterative
function f2(n) {
  function iter(a, b, c, count) {
    return count === 0 ? c : iter(a + 2 * b + 3 * c, a, b, count - 1);
  }
  return iter(2, 1, 0, n);
}

console.log(f1(10)); // 1892
console.log(f2(10)); // 1892
