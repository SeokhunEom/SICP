const dx = 0.001;

function smooth(f) {
  return x => (f(x - dx) + f(x) + f(x + dx)) / 3;
}

function square(x) {
  return x * x;
}

smooth(square)(2); // 4.000000666666667