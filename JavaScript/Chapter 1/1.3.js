function func(a, b, c) {
  if (a > c && b > c) {
    return a ** 2 + b ** 2;
  } else if (a > b && c > b) {
    return a ** 2 + c ** 2;
  } else {
    return b ** 2 + c ** 2;
  }
}
