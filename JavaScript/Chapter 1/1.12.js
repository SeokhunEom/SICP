function pascalsTriangle(row, col) {
  if (row < 0 || col < 0 || col > row) return 0;
  if (col === 0 || col === row) return 1;
  return pascalsTriangle(row - 1, col - 1) + pascalsTriangle(row - 1, col);
}

console.log(pascalsTriangle(5, 2)); // 10
