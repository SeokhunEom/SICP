function p() {
  return p();
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

test(0, p());

// applicative-order evaluation
// infinite loop
// because p() is called before test(0, p()) is evaluated

// normal-order evaluation
// 0
