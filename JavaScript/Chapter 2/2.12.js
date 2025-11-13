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

const i = make_center_percent(6.8, 10);
width(i); // 0.6799999999999997
upper_bound(i); // 7.4799999999999995