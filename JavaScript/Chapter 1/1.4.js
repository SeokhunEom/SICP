function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

// if b is negative then minus(a, b) is called, otherwise plus(a, b) is called
// result of a_plus_abs_b(a, b) is a + |b|
