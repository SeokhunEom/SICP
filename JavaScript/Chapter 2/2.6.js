const zero = f => x => x;

function add_1(n) {
  return f => x => f(n(f)(x));
}

const one = f => x => f(x);

const two = f => x => f(f(x));

function plus(n, m) {
  return f => x => n(f)(m(f)(x));
}
