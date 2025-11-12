function make_interval(x, y) {
  return pair(x, y);
}

function upper_bound(interval) {
  return tail(interval);
}

function lower_bound(interval) {
  return head(interval);
}

function div_interval(x, y) {
  if (lower_bound(y) <= 0 && upper_bound(y) >= 0) {
    return error("Division by an interval that spans zero is undefined.");
  } else {
    return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)));
  }
}

div_interval(make_interval(1, 3), make_interval(-1, 1)); // Error: Division by an interval that spans zero is undefined.
