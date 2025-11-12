function make_interval(x, y) {
  return pair(x, y);
}

function upper_bound(interval) {
  return tail(interval);
}

function lower_bound(interval) {
  return head(interval);
}

function mul_interval(x, y) {
  const x1 = lower_bound(x);
  const x2 = upper_bound(x);
  const y1 = lower_bound(y);
  const y2 = upper_bound(y);

  if (x1 > 0) {
    if (y1 > 0) {
      return make_interval(x1 * y1, x2 * y2);
    } else if (y2 < 2) {
      return make_interval(x2 * y1, x2 * y2);
    } else {
      return make_interval(x2 * y1, x2 * y2);
    }
  } else if (x2 < 0) {
    if (y1 > 0) {
      return make_interval(x1 * y2, x1 * y1);
    } else if (y2 < 0) {
      return make_interval(x2 * y2, x1 * y1);
    } else {
      return make_interval(x1 * y2, x1 * y1);
    }
  } else {
    if (y1 > 0) {
      return make_interval(x1 * y2, x2 * y2);
    } else if (y2 < 0) {
      return make_interval(x2 * y1, x1 * y1);
    } else {
      return make_interval(math_min(x1 * x2, x2 * y1), math_max(x1 * y1, x2 * y2));
    }
  }
}
