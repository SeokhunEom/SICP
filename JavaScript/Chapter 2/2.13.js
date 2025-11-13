function make_interval(x, y) {
  return pair(x, y);
}

function upper_bound(interval) {
  return tail(interval);
}

function lower_bound(interval) {
  return head(interval);
}

function make_center_width(c, w) {
  return make_interval(c - w, c + w);
}

function center(interval) {
  return (lower_bound(interval) + upper_bound(interval)) / 2;
}

function width(interval) {
  return (upper_bound(interval) - lower_bound(interval)) / 2;
}

function percent(interval) {
  return (width(interval) / center(interval)) * 100;
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

function make_center_percent(c, p) {
  return make_interval(c - c * p / 100, c + c * p / 100);
}

const i1 = make_center_percent(10, 1);
const i2 = make_center_percent(20, 2);
const i3 = mul_interval(i1, i2);
percent(i1); // 0.9999999999999963
percent(i2); // 1.9999999999999927
percent(i3); // 2.9994001199759976