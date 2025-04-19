function double(x) {
  return x * 2;
}

function halve(x) {
  return x / 2;
}

function fast_times(a, b) {
  if (b === 0) {
    return 0;
  } else if (b % 2 === 0) {
    return double(fast_times(a, halve(b)));
  } else {
    return a + fast_times(a, b - 1);
  }
}

console.log(fast_times(5, 7)); // 35
