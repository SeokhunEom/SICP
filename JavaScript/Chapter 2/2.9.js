function make_interval(x, y) {
  return pair(x, y);
}

function upper_bound(interval) {
  return tail(interval);
}

function lower_bound(interval) {
  return head(interval);
}

function add_interval(x, y) {
  return make_interval(lower_bound(x) + lower_bound(y),
                       upper_bound(x) + upper_bound(y));
}

function mul_interval(x, y) {
  const p1 = lower_bound(x) * lower_bound(y);
  const p2 = lower_bound(x) * upper_bound(y);
  const p3 = upper_bound(x) * lower_bound(y);
  const p4 = upper_bound(x) * upper_bound(y);
  return make_interval(math_min(p1, p2, p3, p4),
                       math_max(p1, p2, p3, p4));
}

function div_interval(x, y) {
  return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)));
}

function sub_interval(x, y) {
  return make_interval(lower_bound(x) - upper_bound(y),
                       upper_bound(x) - lower_bound(y));
}

function width(interval) {
  return (upper_bound(interval) - lower_bound(interval)) / 2;
}

const i1 = make_interval(1, 3);
const i2 = make_interval(2, 4);
width(i1); // 1
width(i2); // 1

const sum = add_interval(i1, i2);
width(sum); // 2
// width(i1) + width(i2) === width(sum)

const difference = sub_interval(i1, i2);
width(difference); // 2
// width(i1) + width(i2) === width(difference)

const product = mul_interval(i1, i2);
width(product); // 5
// width(i1) + width(i2) < width(product)

const quotient = div_interval(i1, i2);
width(quotient); // 0.625
// width(i1) + width(i2) < width(quotient)