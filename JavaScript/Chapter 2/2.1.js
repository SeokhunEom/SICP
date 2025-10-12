function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function make_rat(n, d) {
  const isPositive = (n > 0 && d > 0) || (n < 0 && d < 0);
  const positiveN = math_abs(n);
  const positiveD = math_abs(d);
  const g = gcd(positiveN, positiveD);
  const finalN = isPositive ? positiveN / g : -positiveN / g;
  const finalD = positiveD / g;

  return pair(finalN, finalD);
}

function number(x) {
  return head(x);
}

function denom(x) {
  return tail(x);
}

function add_rat(x, y) {
  return make_rat(number(x) * denom(y) + number(y) * denom(x), denom(x) * denom(y));
}

function sub_rat(x, y) {
  return make_rat(number(x) * denom(y) - number(y) * denom(x), denom(x) * denom(y));
}

function mul_rat(x, y) {
  return make_rat(number(x) * number(y), denom(x) * denom(y));
}

function div_rat(x, y) {
  return make_rat(number(x) * denom(y), number(y) * denom(x));
}

function equal_rat(x, y) {
  return number(x) * denom(y) === number(y) * denom(x);
}

function print_rat(x) {
  return display(stringify(number(x)) + "/" + stringify(denom(x)));
}

const one_third = make_rat(1, 3);
const one_sixth = make_rat(1, 6);

print_rat(one_third);