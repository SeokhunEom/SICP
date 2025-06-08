function pascalsTriangle(row, col) {
  if (row < 0 || col < 0 || col > row) {
    return 0;
  } else {
    if (col === 0 || col === row) {
      return 1;
    } else {
      return pascalsTriangle(row - 1, col - 1) + pascalsTriangle(row - 1, col);
    }
  }
}

pascalsTriangle(5, 2); // 10
