function square(a) {
  return a * a;
}

function add3(a, b, c) {
  return a + b + c;
}

function minus2(a, b) {
  return a - b;
}

function min3(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else {
    if (b <= a && b <= c) {
      return b;
    } else {
      return c;
    }
  }
}

function func(a, b, c) {
  return minus2(add3(square(a), square(b), square(c)), square(min3(a, b, c)));
}

func(3, 1, 2); // 13
