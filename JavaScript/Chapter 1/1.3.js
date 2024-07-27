function square(a) {
  return a ** 2;
}

function sumAll(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

function minus(a, b) {
  return a - b;
}

function func(a, b, c) {
  return minus(
    sumAll(square(a), square(b), square(c)),
    square(Math.min(a, b, c))
  );
}
